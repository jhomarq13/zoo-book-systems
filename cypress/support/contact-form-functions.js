import { elementsContactForm } from '../fixtures/page_elements/contact-form';

const implicitVeryShortWait = 0;
const implicitShortWait = 500;
const implicitMediumWait = 1000;
const implicitLongWait = 2000;
const implicitVeryLongWait = 10000;


Cypress.Commands.add('userClicksTheSubmitButton', () => {
    cy.get(elementsContactForm.submit).click();
    cy.wait(implicitMediumWait);
})

Cypress.Commands.add('userInputsOrganizationInTheForm', (organization) => {
    cy.get(elementsContactForm.organization).type(organization);
})

Cypress.Commands.add('userInputsWebsiteInTheForm', (website) => {
    cy.get(elementsContactForm.website).type(website);
})

Cypress.Commands.add('userInputsQuickRunDownInTheForm', (quickRunDown) => {
    cy.get(elementsContactForm.quickRunDown).type(quickRunDown);
})

Cypress.Commands.add('userInputsDeadlineInTheForm', (date) => {
    cy.get(elementsContactForm.deadline).type(date);
})

Cypress.Commands.add('userInputsNameInTheForm', (name) => {
    cy.get(elementsContactForm.name).type(name);
})

Cypress.Commands.add('userInputsEmailInTheForm', (email) => {
    cy.get(elementsContactForm.email).type(email);
})

Cypress.Commands.add('userInputsPhoneInTheForm', (phone) => {
    cy.get(elementsContactForm.phone).type(phone);
})

Cypress.Commands.add('userInputsReferenceInTheForm', (reference) => {
    cy.get(elementsContactForm.reference).type(reference);
})

Cypress.Commands.add('verifySuccessMessageIsDisplayed', (message) => {
    cy.wait(implicitMediumWait);
    cy.get(elementsContactForm.messageSent).then((thisMessage) => {
        const actualMesage = thisMessage.text();
        // cy.log("Actual message is >> " + actualMesage);
        expect(actualMesage).to.equal(message);
    })
})

Cypress.Commands.add('pageWaitsForTheSpinnerToDisappear', () => {
    cy.get(elementsContactForm.spinner).should('not.exist');
})
