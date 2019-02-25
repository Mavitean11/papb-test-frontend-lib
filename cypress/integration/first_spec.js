describe('Build', function() {    
    it('Exports the library to the global namespace', function() {
        cy.visit('cypress/test-entrypoint.html');
        cy.window().should('have.property', 'papbTestFrontendLib');
    });
});