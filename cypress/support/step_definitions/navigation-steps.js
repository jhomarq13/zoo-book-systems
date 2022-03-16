const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");

Given("user visits the Zoobook Systems website", () => {
  cy.userVisitsTheZooBookSystemsWebsite();
});

When("verify user is taken to the Zoobook Systems homepage", () => {
  cy.verifyUserIsTakenToTheZoobookSystemsHomepage();
});

When("user navigates to the page {string}", (page) => {
  cy.userNavigatesToAPage(page);
})

And("verify user is taken to the {string} page", (page) => {
  cy.verifyUserIsTakenToASpecificPage(page);
})

And("verify page heading {string} is displayed", (text) => {
  cy.verifyPageHeadingIsDisplayed(text);
})
