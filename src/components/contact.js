import Component from "./component_builder.js";

class Contact extends Component {

  buildTextsDiv() {
    let textDiv = this.createElement( "div", "text-div", null, null,
      this.contactElement );

    this.buildText( textDiv, "h2", "Contact" );
    this.buildText( textDiv, "p",
      "Have you already chosen your dish and now can't wait to eat? Okay, we have quick and easy solutions for you to place your order:"
    );
    this.buildText( textDiv, "p",
      "If you want to send it here and right now, use our form that you find on this page."
    );
    this.buildText( textDiv, "p", "If you prefer other contacts:" );
    this.buildText( textDiv, "p", "Phone Number: 99999-9999" );
    this.buildText( textDiv, "p", "Email: mail@mail.mail" );
  }

  buildFormTexts() {

    this.buildText( this.formDiv, "h3", "Contact / Order Form" );
    this.buildText( this.formDiv, "p",
      "Ask for your order here or send your question." );
  }

  buildForm() {
    this.buildFormTexts();
    this.formElement = this.createElement( "form", null, "contact-form",
      null,
      this.formDiv );

    this.buildLabelInput( "Name", "text", "name" );
    this.buildLabelInput( "Email", "email", "email" );
    this.buildLabelInput( "Title", "text", "title" );

    this.createElement( "label", null, null, "Message",
      this.formElement );
    this.createElement( "textarea", null, null, null,
      this.formElement,
      [ "name", "message" ], [ "required", "" ]
    );
    this.createElement( "button", null, null, "Send",
      this.formElement, [ "type", "submit" ] );
  }

  buildLabelInput( text, type, name ) {
    this.createElement( "label", null, null, text,
      this.formElement );
    this.createElement( "input", null, null, null,
      this.formElement,
      [ "type", type ],
      [ "name", name ], [ "required", "" ]
    );
  }

  listenFormSubmit() {
    this.formElement.addEventListener("submit", (event) => {
      this.formElement.remove();
      this.formElement = this.createElement( "form", null, "contact-form",
      null,
      this.formDiv, ["done", ""] );
      this.createElement("i", "ti ti-thumb-up", null, null, this.formElement);
      this.createElement("p", null, null, "Successfully submitted form!", this.formElement);
      event.preventDefault();
    });
  }

  build() {
    this.contactElement = this.createElement( "section", null, "contact",
      null,
      document.body );
    this.buildTextsDiv();
    this.formDiv = this.createElement( "div", "form-div", null, null,
      this.contactElement );
    this.buildForm();
    this.listenFormSubmit();
  }

  destroy() {
    this.contactElement.remove();
  }
}

export default new Contact();
