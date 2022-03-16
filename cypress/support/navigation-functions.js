import { expect } from 'chai';
import { elementsNavigation } from '../fixtures/page_elements/navigation';

const envmnt = Cypress.env('testEnv');
const implicitShortWait = 500;

Cypress.Commands.add('userVisitsTheZooBookSystemsWebsite', () => {
    cy.clearCookies();
    cy.visit(Cypress.env(envmnt).url);
})

Cypress.Commands.add('verifyUserIsTakenToTheZoobookSystemsHomepage', () => {
    expect(cy.get(elementsNavigation.homepageTitle).should('be.visible'));

});

Cypress.Commands.add('userNavigatesToAPage', (page) => {
    cy.get(elementsNavigation.menu).each(($menu) => {
        if ($menu.text() === page) {
            cy.wrap($menu).click();
            cy.wait(500);
        }
    });
});

Cypress.Commands.add('verifyUserIsTakenToASpecificPage', (page) => {
    cy.get(elementsNavigation.title).then((thisElement) => {
        const pageTitle = thisElement.text();
        expect(pageTitle).equals(page);
    });
});

Cypress.Commands.add('verifyPageHeadingIsDisplayed', (text) => {
    cy.get(elementsNavigation.pageHeading).then((thisPageHeading) => {
        const actualPageHeading = thisPageHeading.text();
        expect(actualPageHeading).to.contain(text);
    })
});
