const { Then, And } = require("cypress-cucumber-preprocessor/steps");

And("page waits for the spinner to disappear", () => {
  cy.pageWaitsForTheSpinnerToDisappear();
})

// SIDEBAR - START //
Then("user clicks the {string} button in the side bar", (button) => {
  cy.userClicksTheButtonInTheSideBar(button);
});

Then("user clicks the email button in the side bar", () => {
  cy.userClicksTheEmailButtonInTheSideBar();
});

And("user inputs Name {string} in the pop up contact form", (name) => {
  cy.userInputsNameInThePopUpContactForm(name);
});

And("user inputs Email {string} in the pop up contact form", (email) => {
  cy.userInputsEmailInThePopUpContactForm(email);
});

And("user inputs Phone Number {string} in the pop up contact form", (contact) => {
  cy.userInputsPhoneNumberInThePopUpContactForm(contact);
});

And("user inputs message {string} in the pop up contact form", (message) => {
  cy.userInputsMessageInThePopUpContactForm(message);
});

And("user ticks agree in the pop up contact form", () => {
  cy.userTicksAgreeInThePopUpContactForm();
});

And("user clicks the send button in the pop up contact form", () => {
  cy.userClicksTheSendButtonInThePopUpContactForm();
});

And("verify sent message {string} is displayed in the pop up contact form", (text) => {
  cy.verifySentMessageIsDisplayedInThePopUpContactForm(text);
})

And("user clicks the close button in the pop up contact form", () => {
  cy.userClicksTheCloseButtonInThePopUpContactForm();
})
// SIDEBAR - END //


// INJURED SECTION - START //
And("user inputs Name {string} in homepage injured section contact form", (name) => {
  cy.userInputsNameInHomePageInjuredSectionContactForm(name);
});

And("user inputs Email {string} in homepage injured section contact form", (email) => {
  cy.userInputsEmailInHomePageInjuredSectionContactForm(email);
});

And("user inputs Phone Number {string} in homepage injured section contact form", (contact) => {
  cy.userInputsPhoneNumberInHomePageInjuredSectionContactForm(contact);
});

And("user inputs message {string} in homepage injured section contact form", (message) => {
  cy.userInputsMessageInHomePageInjuredSectionContactForm(message);
});

And("user ticks agree in homepage injured section contact form", () => {
  cy.userTicksAgreeInHomePageInjuredSectionContactForm();
});

And("user clicks the send button in homepage injured section contact form", () => {
  cy.userClicksTheSendButtonInHomePageInjuredSectionContactForm();
});

And("verify sent message {string} is displayed in homepage injured section contact form", (text) => {
  cy.verifySentMessageIsDisplayedInHomePageInjuredSectionContactForm(text);
})
// INJURED SECTION - END //


// HELP SECTION - START //
And("user inputs Name {string} in homepage help section contact form", (name) => {
  cy.userInputsNameInHomePageHelpSectionContactForm(name);
});

And("user inputs Email {string} in homepage help section contact form", (email) => {
  cy.userInputsEmailInHomePageHelpSectionContactForm(email);
});

And("user inputs Phone Number {string} in homepage help section contact form", (contact) => {
  cy.userInputsPhoneNumberInHomePageHelpSectionContactForm(contact);
});

And("user selects picklist value {string} in homepage injured section contact form", (selection) => {
  cy.userSelectsPicklistValueInHomePageHelpSectionContactForm(selection);
});

And("user ticks agree in homepage help section contact form", () => {
  cy.userTicksAgreeInHomePageHelpSectionContactForm();
});

And("user clicks the send button in homepage help section contact form", () => {
  cy.userClicksTheSendButtonInHomePageHelpSectionContactForm();
});

And("verify sent message {string} is displayed in homepage help section contact form", (text) => {
  cy.verifySentMessageIsDisplayedInHomePageHelpSectionContactForm(text);
})
// HELP SECTION - END //


// FOOTER - START //
And("user inputs Name {string} in the footer contact form", (name) => {
  cy.userInputsNameInTheFooterContactForm(name);
});

And("user inputs Email {string} in the footer contact form", (email) => {
  cy.userInputsEmailInTheFooterContactForm(email);
});

And("user inputs Phone Number {string} in the footer contact form", (contact) => {
  cy.userInputsPhoneNumberInTheFooterContactForm(contact);
});

And("user inputs message {string} in the footer contact form", (message) => {
  cy.userInputsMessageInTheFooterContactForm(message);
});

And("user ticks agree in the footer contact form", () => {
  cy.userTicksAgreeInTheFooterContactForm();
});

And("user clicks the send button in the footer contact form", () => {
  cy.userClicksTheSendButtonInTheFooterContactForm();
});

And("verify sent message {string} is displayed in the footer contact form", (text) => {
  cy.verifySentMessageIsDisplayedInTheFooterContactForm(text);
})
// FOOTER - END //


// CONTACT PAGE - START //
And("user inputs Name {string} in contact page contact form", (name) => {
  cy.userInputsNameInContactPageContactForm(name);
});

And("user inputs Email {string} in contact page contact form", (email) => {
  cy.userInputsEmailInContactPageContactForm(email);
});

And("user inputs Phone Number {string} in contact page contact form", (contact) => {
  cy.userInputsPhoneNumberInContactPageContactForm(contact);
});

And("user inputs Zip Code {string} in contact page contact form", (zip) => {
  cy.userInputsZipCodeInContactPageContactForm(zip);
});

And("user selects picklist state {string} in contact page contact form", (state) => {
  cy.userSelectsPicklistStateInContactPageContactForm(state);
});

And("user ticks to be contacted by phone in contact page contact form", () => {
  cy.userTicksToBeContactedByPhoneInContactPageContactForm();
});

And("user ticks to be contacted by email in contact page contact form", () => {
  cy.userTicksToBeContactedByEmailInContactPageContactForm();
});

And("user inputs message {string} in contact page contact form", (message) => {
  cy.userInputsMessageInContactPageContactForm(message);
});

And("user ticks agree in contact page contact form", () => {
  cy.userTicksAgreeInContactPageContactForm();
});

And("user clicks the send button in contact page contact form", () => {
  cy.userClicksTheSendButtonInContactPageContactForm();
});

And("verify sent message {string} is displayed in contact page contact form", (text) => {
  cy.verifySentMessageIsDisplayedInContactPageContactForm(text);
})
// CONTACT PAGE - END //
