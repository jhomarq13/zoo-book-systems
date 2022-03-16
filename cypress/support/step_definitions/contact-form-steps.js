const { Then, And } = require("cypress-cucumber-preprocessor/steps");

And("user clicks the Submit button", () => {
  cy.userClicksTheSubmitButton();
});

And("user inputs Organization {string} in the form", (organization) => {
  cy.userInputsOrganizationInTheForm(organization);
});

And("user inputs Website {string} in the form", (website) => {
  cy.userInputsWebsiteInTheForm(website);
});

And("user inputs Quick Run Down {string} in the form", (quickRunDown) => {
  cy.userInputsQuickRunDownInTheForm(quickRunDown);
});

And("user inputs Deadline {string} in the form", (date) => {
  cy.userInputsDeadlineInTheForm(date);
});

And("user inputs Name {string} in the form", (name) => {
  cy.userInputsNameInTheForm(name);
});

And("user inputs Email {string} in the form", (email) => {
  cy.userInputsEmailInTheForm(email);
});

And("user inputs Phone {string} in the form", (phone) => {
  cy.userInputsPhoneInTheForm(phone);
});

And("user inputs Reference {string} in the form", (reference) => {
  cy.userInputsReferenceInTheForm(reference);
});

And("verify success message {string} is displayed", (message) => {
  cy.verifySuccessMessageIsDisplayed(message);
});
