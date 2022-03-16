const elementName = "input[name='your-name']:visible"
const elementEmail = "input[name='your-email']:visible"
const elementContact = "input[name='phone-number']:visible"
const elementMessage = "textarea[name='your-message']:visible"
const elementTickBox = "input[type='checkbox']:visible"
const elementSubmit = "input[type='submit']:visible"
const elementSuccessMessage = "div[class='wpcf7-response-output']:visible"

export const elementsContactForm = {
  commonElement: {
    name: elementName,
    email: elementEmail,
    contact: elementContact,
    message: elementMessage,
    tickbox: elementTickBox,
    submit: elementSubmit,
    successMessage: elementSuccessMessage,
    spinner: "span[class='wpcf7-spinner]"
  },
  sideBar: {
    call: ".img-call-black",
    chat: ".img-chat-black",
    email: ".img-email-black"
  },
  floatingSideBar: {
    call: ".img-call-white",
    chat: ".img-chat-white",
    email: ".img-mail-white"
  },
  popUpForm: {
    container: "",
    name: "div[class^='form-container'] > div > span > input[name='your-name']",
    email: "div[class^='form-container'] > div > span > input[name='your-email']",
    contact: "div[class^='form-container'] > div > span > input[name='phone-number']",
    message: "div[class^='form-box popup-form'] > div[class^='form-input'] > span > textarea[name='your-message'] ",
    tickbox: "span > label > input[type='checkbox']",
    submit: "div[class^='form-container'] > div > input[type='submit']",
    close: "button[class^='pum-close']:visible"
  },
  helpSection: {
    picklist: "select[class^='wpcf7-form-control']"
  },
  footerSection: {
    name: elementName,
    email: elementEmail,
    contact: elementContact,
    message: elementMessage,
    tickbox: elementTickBox,
    submit: elementSubmit
  },
  contactPage: {
    zip: "input[name^='zip']:visible",
    picklist: "select[name='state']",
    tickboxContactOne: ":nth-child(8) > .wpcf7-form-control-wrap > .wpcf7-form-control > .first > label > input",
    tickboxContactTwo: ":nth-child(8) > .wpcf7-form-control-wrap > .wpcf7-form-control > .last > label > input",
    tickboxAgree: ":nth-child(11) > .wpcf7-form-control-wrap > .wpcf7-form-control > .wpcf7-list-item > label > input",
    submit: "#wpcf7-f4814-p4085-o2 > .wpcf7-form > #tjspacefix > .btn-box > .wpcf7-form-control"
  }
}
