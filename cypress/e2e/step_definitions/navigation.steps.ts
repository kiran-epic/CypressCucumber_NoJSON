import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the page with path {string}', async (path: string) => {
    cy.visit(path);
});
