import { expect } from 'chai';
import { elementsNavigation } from '../fixtures/page_elements/navigation';

const envmnt = Cypress.env('testEnv');
const implicitShortWait = 500;

Cypress.Commands.add('userVisitsTheGageMathersWebsite', () => {
    cy.clearCookies();
    cy.visit(Cypress.env(envmnt).url);
})

Cypress.Commands.add('verifyUserIsInTheGageMathersHomepage', (locale) => {
    cy.get(elementsNavigation.heading).then((thisElement) => {
        const heading = thisElement.text();
        cy.wait(implicitShortWait);

        if (locale.toLowerCase() === 'english') {
            expect(heading).to.eq("PERSONAL INJURY LAWYERS");
        } else if (locale.toLowerCase() === 'spanish') {
            expect(heading).contains("ABOGADOS ESPECIALIZADOS")
        } else {
            cy.log("Not found")
        }

    });
});

Cypress.Commands.add('userNavigatesToAPage', (page) => {
    cy.get(elementsNavigation.menu).each(($menu) => {
        if ($menu.text() === page) {
            cy.wrap($menu).click();
            cy.wait(500);
        }
    });
});

Cypress.Commands.add('userChangesLocale', (locale) => {
    cy.get(elementsNavigation.locale).each(($menu, index) => {
        cy.get($menu).invoke('attr', 'alt').then((values) => {
            if (values === locale) {
                cy.log(index);
                cy.get(elementsNavigation.locale).eq(index).click();
            }
        })
    });
});

Cypress.Commands.add('verifyUserIsTakenToASpecificPage', (locale) => {
    cy.get(elementsNavigation.title).then((thisElement) => {
        const pageTitle = thisElement.text();
        expect(pageTitle).equals(locale);
    })

})
