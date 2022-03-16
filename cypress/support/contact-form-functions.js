import { elementsContactForm } from '../fixtures/page_elements/contact-form';

const implicitVeryShortWait = 0;
const implicitShortWait = 500;
const implicitMediumWait = 1000;
const implicitLongWait = 2000;
const implicitVeryLongWait = 10000;


Cypress.Commands.add('pageWaitsForTheSpinnerToDisappear', () => {
    cy.get(elementsContactForm.commonElement.spinner).should('not.exist');
})


// SIDEBAR - START //
Cypress.Commands.add('userClicksTheButtonInTheSideBar', (button) => {
    cy.get(elementsContactForm.sideBar.button).click();
    cy.wait(implicitShortWait);
})

Cypress.Commands.add('userClicksTheEmailButtonInTheSideBar', () => {
    cy.get(elementsContactForm.sideBar.email).click();
    cy.wait(implicitShortWait);
})

Cypress.Commands.add('userInputsNameInThePopUpContactForm', (name) => {
    cy.get(elementsContactForm.popUpForm.name).type(name);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsEmailInThePopUpContactForm', (email) => {
    cy.get(elementsContactForm.popUpForm.email).type(email);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsPhoneNumberInThePopUpContactForm', (contact) => {
    cy.get(elementsContactForm.popUpForm.contact).type(contact);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsMessageInThePopUpContactForm', (message) => {
    cy.get(elementsContactForm.popUpForm.message).type(message);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userTicksAgreeInThePopUpContactForm', () => {
    cy.get(elementsContactForm.popUpForm.tickbox).eq(3).click();
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userClicksTheSendButtonInThePopUpContactForm', () => {
    cy.get(elementsContactForm.popUpForm.submit).click().then(() => {
        cy.pageWaitsForTheSpinnerToDisappear();
    });
})

Cypress.Commands.add('verifySentMessageIsDisplayedInThePopUpContactForm', (text) => {
    cy.get(elementsContactForm.commonElement.successMessage).eq(0).then((thisElement) => {
        const actualMessage = thisElement.text();
        cy.log("Actual message -> " + actualMessage)
        expect(actualMessage).contains(text);
    })
})

Cypress.Commands.add('userClicksTheCloseButtonInThePopUpContactForm', () => {
    cy.get(elementsContactForm.popUpForm.close).click();
    cy.wait(implicitVeryShortWait);
})
// SIDEBAR - END //


// INJURED SECTION - START //
Cypress.Commands.add('userInputsNameInHomePageInjuredSectionContactForm', (name) => {
    cy.get(elementsContactForm.commonElement.name).eq(0).click();
    cy.get(elementsContactForm.commonElement.name).eq(0).type(name);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsEmailInHomePageInjuredSectionContactForm', (email) => {
    cy.get(elementsContactForm.commonElement.email).eq(0).type(email);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsPhoneNumberInHomePageInjuredSectionContactForm', (contact) => {
    cy.get(elementsContactForm.commonElement.contact).eq(0).type(contact);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsMessageInHomePageInjuredSectionContactForm', (message) => {
    cy.get(elementsContactForm.commonElement.message).eq(0).type(message);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userTicksAgreeInHomePageInjuredSectionContactForm', () => {
    cy.get(elementsContactForm.commonElement.tickbox).eq(0).click();
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userClicksTheSendButtonInHomePageInjuredSectionContactForm', () => {
    cy.get(elementsContactForm.commonElement.submit).eq(0).click();
    cy.pageWaitsForTheSpinnerToDisappear();
})

Cypress.Commands.add('verifySentMessageIsDisplayedInHomePageInjuredSectionContactForm', (text) => {
    cy.get(elementsContactForm.commonElement.successMessage).eq(0).then((thisElement) => {
        const actualMessageThis = thisElement.text();
        cy.log("Actual message -> " + actualMessageThis)
        expect(actualMessageThis).contains(text);
    })
})
// INJURED SECTION - END //


// HELP SECTION - START //
Cypress.Commands.add('userInputsNameInHomePageHelpSectionContactForm', (name) => {
    cy.get(elementsContactForm.commonElement.name).eq(1).type(name);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsEmailInHomePageHelpSectionContactForm', (email) => {
    cy.get(elementsContactForm.commonElement.email).eq(1).type(email);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsPhoneNumberInHomePageHelpSectionContactForm', (contact) => {
    cy.get(elementsContactForm.commonElement.contact).eq(1).type(contact);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userSelectsPicklistValueInHomePageHelpSectionContactForm', (selection) => {
    cy.get(elementsContactForm.helpSection.picklist).select(selection);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userTicksAgreeInHomePageHelpSectionContactForm', () => {
    cy.get(elementsContactForm.commonElement.tickbox).eq(0).click();
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userClicksTheSendButtonInHomePageHelpSectionContactForm', () => {
    cy.get(elementsContactForm.commonElement.submit).eq(0).click();
    cy.pageWaitsForTheSpinnerToDisappear();
})

Cypress.Commands.add('verifySentMessageIsDisplayedInHomePageHelpSectionContactForm', (text) => {
    cy.get(elementsContactForm.commonElement.successMessage).eq(0).then((elementThis) => {
        const thisMessage = elementThis.text();
        cy.log("Actual message -> " + thisMessage)
        expect(thisMessage).contains(text);
    })
})
// HELP SECTION - END //


// FOOTER - START //
Cypress.Commands.add('userInputsNameInTheFooterContactForm', (name) => {
    cy.get(elementsContactForm.commonElement.name).eq(0).type(name);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsEmailInTheFooterContactForm', (email) => {
    cy.get(elementsContactForm.commonElement.email).eq(0).type(email);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsPhoneNumberInTheFooterContactForm', (contact) => {
    cy.get(elementsContactForm.commonElement.contact).eq(0).type(contact);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsMessageInTheFooterContactForm', (message) => {
    cy.get(elementsContactForm.commonElement.message).eq(0).type(message);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userTicksAgreeInTheFooterContactForm', () => {
    cy.get(elementsContactForm.commonElement.tickbox).eq(0).click();
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userClicksTheSendButtonInTheFooterContactForm', () => {
    cy.get(elementsContactForm.commonElement.submit).eq(0).click();
    cy.pageWaitsForTheSpinnerToDisappear();
})

Cypress.Commands.add('verifySentMessageIsDisplayedInTheFooterContactForm', (text) => {
    cy.get(elementsContactForm.commonElement.successMessage).eq(0).then((element) => {
        const actualMessage = element.text();
        cy.log("Actual message -> " + actualMessage)
        expect(actualMessage).contains(text);
    })
})
// FOOTER - END //


// CONTACT PAGE - START //
Cypress.Commands.add('userInputsNameInContactPageContactForm', (name) => {
    cy.get(elementsContactForm.commonElement.name).eq(0).type(name);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsEmailInContactPageContactForm', (email) => {
    cy.get(elementsContactForm.commonElement.email).eq(0).type(email);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsPhoneNumberInContactPageContactForm', (contact) => {
    cy.get(elementsContactForm.commonElement.contact).eq(0).type(contact);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsZipCodeInContactPageContactForm', (zip) => {
    cy.get(elementsContactForm.contactPage.zip).type(zip);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userSelectsPicklistStateInContactPageContactForm', (state) => {
    cy.get(elementsContactForm.contactPage.picklist).select(state);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userTicksToBeContactedByPhoneInContactPageContactForm', () => {
    cy.get(elementsContactForm.commonElement.tickbox).eq(0).click();
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userTicksToBeContactedByEmailInContactPageContactForm', () => {
    cy.get(elementsContactForm.commonElement.tickbox).eq(1).click();
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userInputsMessageInContactPageContactForm', (message) => {
    cy.get(elementsContactForm.commonElement.message).eq(0).type(message);
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userTicksAgreeInContactPageContactForm', () => {
    cy.get(elementsContactForm.commonElement.tickbox).eq(2).click();
    cy.wait(implicitVeryShortWait);
})

Cypress.Commands.add('userClicksTheSendButtonInContactPageContactForm', () => {
    cy.get(elementsContactForm.commonElement.submit).eq(0).click();
    cy.pageWaitsForTheSpinnerToDisappear();
})

Cypress.Commands.add('verifySentMessageIsDisplayedInContactPageContactForm', (text) => {
    cy.get(elementsContactForm.commonElement.successMessage).eq(0).then((messageContainer) => {
        const actualMessage = messageContainer.text();
        cy.log("Actual message -> " + actualMessage)
        expect(actualMessage).contains(text);
    })
})
// CONTACT PAGE - END //
