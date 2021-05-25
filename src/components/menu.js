import Component from "./component_builder.js";

class Menu extends Component {

  constructor( currency ) {
    super();
    this.currency = currency;
    this.foods = [];

    this.addFood( "Magic food", 2, 130, "images/foods/food-1.png" );
    this.addFood( "Super food", 1, 20, "images/foods/food-2.png" );
    this.addFood( "Majestic food", 5, 45, "images/foods/food-3.png" );
    this.addFood( "Rustic food", 2, 36, "images/foods/food-4.png" );

  }

  set currency( currency ) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  addFood( name, people, price, imageSrc, forceCreateCard = false ) {

    let food = { name, people, price, imageSrc };
    this.foods.push( food );

    if ( forceCreateCard )
      this.buildCard( food );
  }

  buildCard( cardObject ) {
    let card = this.createElement( "figure", "food-card", null, null,
      this.foodsMenuElement );

    this.createElement( "img", null, null, null,
      card, [ "src", cardObject.imageSrc ] );

    let cardCaption = this.createElement( "figcaption", null, null, null,
      card );

    for ( let key of Object.keys( cardObject ) ) {
      let value = cardObject[ key ];
      key = key.toUpperCase();
      if ( key == "IMAGESRC" )
        continue;
      switch ( key ) {
      case "PEOPLE":
        if ( value > 1 )
          value += " People";
        else
          value += " Person";

        break;
      case "PRICE":
        value = `${this.currency} ${value}`;
        break;
      }
      key += ":";
      this.createElement( "h5", "food-label", null, key,
        cardCaption );
      this.createElement( "p", "food-text", null, value,
        cardCaption );
    }
  }

  buildAllCards() {
    for ( let food of this.foods )
      this.buildCard( food );
  }

  buildTexts() {
    let textDiv = this.createElement( "div", "text-div", null, null,
      this.mainElement );

    this.buildText( textDiv, "h2", "Our Menu" );
    this.buildText( textDiv, "p",
      "Choose the purest and most magnificent dish that will light up your palate." );
    this.buildText( textDiv, "p", "Then, just get in touch with us!" );
  }

  build() {
    this.mainElement = this.createElement( "section", null, "menu", null,
      document.body );
    this.buildTexts();

    this.foodsMenuElement = this.createElement( "div", null, "foods-menu", null,
      this.mainElement );
    this.buildAllCards();
  }

  destroy() {
    this.mainElement.remove();
  }
}

export default new Menu("R$");