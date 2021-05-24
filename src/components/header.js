import Component from "./component_builder.js";

class Header extends Component {

  buildAuthorElement() {
    this.authorElement = this.createElement( "a", null, null, null,
      document.body,
      [ "data-type",
        "author-link"
      ], [ "href", "https://github.com/gabesenacom" ], [ "target", "_blank" ]
    );
    this.createIconItem( this.authorElement, "ti ti-brand-github" );
    this.authorElement.appendChild( document.createTextNode( "gabesenacom" ) );
  }

  moveAuthorElement( newParent ) {
    this.authorElement.parentNode.removeChild( this.authorElement );
    newParent.appendChild( this.authorElement );
  }

  listenWindowResize = () => {
    if ( window.matchMedia( "(max-width: 47.9375rem)" ).matches )
      this.moveAuthorElement( this.nav );
    else
      this.moveAuthorElement( this.headerElement );
  }

  listenDropdown() {
    this.nav.addEventListener( "click", ( event ) => {
      let target = event.target;
      if ( !target.hasAttribute( "data-type" ) )
        target = target.parentNode;

      let type = target.getAttribute( "data-type" );

      if ( type == "show" )
        this.nav.removeAttribute( "disabled" );
      else if ( type == "close" )
        this.nav.setAttribute( "disabled", "" );

    } );
  }

  createIconItem( parent, className ) {
    return this.createElement( "i", className, null, null, parent );
  }

  createItem( dataType, forceText = false ) {
    return this.createElement( "li", null, null, forceText ? dataType : null,
      this.nav, [ "data-type",
        dataType
      ] );
  }

  buildNav( headerElement ) {
    let navItems = [];

    this.nav = this.createElement( "nav", null, null, null, this.headerElement,
      [
        "disabled", ""
      ] );

    let show = this.createItem( "show" );
    this.createIconItem( show, "ti ti-menu-2" );

    let close = this.createItem( "close" );
    this.createIconItem( close, "ti ti-x" );

    this.setAttributes( this.createItem( "home", true ), [
      [ "enabled", "" ]
    ] );

    this.createItem( "menu", true );
    this.createItem( "contact", true );
  }

  build() {
    this.headerElement = this.createElement( "header", null, null, null,
      document.body );
    this.createElement( "img", null, null, null, this.headerElement, [ "src",
      "images/logo.png"
    ] );
    this.buildNav();
    this.buildAuthorElement();
    window.addEventListener( "resize", this.listenWindowResize);
    this.listenDropdown();
    this.listenWindowResize();
  }
}

export default new Header();
