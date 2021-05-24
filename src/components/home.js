import Component from "./component_builder.js";

class Home extends Component {

  buildTexts() {
    this.buildText( this.mainElement, "h2",
      "The first restaurant that will touch your taste buds in an unforgettable way. "
    );
    this.buildText( this.mainElement, "p",
      "With our team of chefs and our best dishes, we will offer the best of our services to guarantee good service and, above all, unforgettable food. "
    );
    this.buildText( this.mainElement, "p",
      "Slide your mouse or click on the navigation menu to get to know us better. We are waiting for you!",
      "desktop" );
    this.buildText( this.mainElement, "p",
      "Slide your finger or click on the navigation menu to know us better. We are waiting for you!",
      "mobile" );
  }

  build() {
    this.mainElement = this.createElement( "section", null, "home", null,
      document.body );
    this.buildTexts();
    this.nextButton = this.createElement( "i", "ti ti-chevron-down",
      "next-button", null, this.mainElement );
  }

  destroy() {
    this.mainElement.remove();
  }
}

export default new Home();
