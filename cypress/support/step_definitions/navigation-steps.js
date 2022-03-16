const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");

Given("user visits the Gage Mathers website", () => {
  cy.userVisitsTheGageMathersWebsite();
});

When("verify user is in the Gage Mathers homepage {string}", (locale) => {
  cy.verifyUserIsInTheGageMathersHomepage(locale);
});

When("user navigates to the page {string}", (page) => {
  cy.userNavigatesToAPage(page);
})

And("user selects the locale {string}", (locale) => {
  cy.userChangesLocale(locale);
})

And("verify user is taken to the {string} page", (locale) => {
  cy.verifyUserIsTakenToASpecificPage(locale);
})
