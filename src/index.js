import Header from "./components/header"
import Home from "./components/home"
import Menu from "./components/menu"
import Contact from "./components/contact"

const controller = ( () => {

  const _changePage = ( target ) => {
    let enabled = Header.nav.querySelector( "[enabled]" );
    let type = target.getAttribute( "data-type" );
    enabled.removeAttribute( "enabled" );
    target.setAttribute( "enabled", "" );

    let selected = getSelectedComponent( type );
    let enabledComponent = getSelectedComponent( enabled.getAttribute(
      "data-type" ) );

    if ( selected == null || enabledComponent == null )
      return;

    enabledComponent.destroy();
    selected.build();
    if(type == "home") 
      _controlNextButton();
    
  };

  const _controlPage = () => {
    Header.nav.addEventListener( "click", ( event ) => {

      let target = event.target;

      if ( !target.hasAttribute( "data-type" ) )
        target = target.parentNode;

      let type = target.getAttribute( "data-type" );

      if ( type == null || type == "show" || type == "close" )
        return;

      if ( target.hasAttribute( "enabled" ) )
        return;

      if ( !Header.nav.hasAttribute( "disabled" ) )
        Header.nav.setAttribute( "disabled", "" );

      _changePage( target );
    } );
  };

  const _controlNextButton = () => {
    Home.nextButton.addEventListener( "click", ( event ) => {
      _changePage( document.querySelector( "[data-type='menu']" ) );
    } );
  };

  const init = () => {
    Header.build();
    Home.build();
    _controlPage();
   _controlNextButton();
  };

  init();
} )();

function getSelectedComponent( name ) {
  switch ( name ) {
  case "home":
    return Home;
  case "menu":
    return Menu;
  case "contact":
    return Contact;
  }
}
