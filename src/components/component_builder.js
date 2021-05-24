export default class Component {

  createElement( elementType, className, id, textContent, parent, ...attributes ) {
    let element = document.createElement( elementType );

    for ( let x = 1; x <= 5; x++ ) {
      let value = arguments[ x ];
      if ( value == null )
        continue;
      if ( x >= 1 && x <= 3 ) {
        let name = x == 1 ? "className" : x == 2 ? "id" : "textContent";
        element[ name ] = value;
        continue;
      }

      if ( x == 5 )
        this.setAttributes( element, attributes );
      else
        parent.appendChild( element );

    }

    return element;
  }

  setAttributes( element, attributes ) {
    for ( let x = 0; x < attributes.length; x++ ) {
      let name = attributes[ x ][ 0 ];
      let value = attributes[ x ][ 1 ];
      value = value ? value : "";
      if ( name != null )
        element.setAttribute( name, value );
    }
  }

  buildText(parent, tag, text, className = null) {
    this.createElement( tag, className, null, text,
        parent );
  }

  build() {
    
  }

  destroy() {
    
  }
}
