describe('Build', function() {
    it('Exports the library to the global namespace', function() {
        cy.visit('cypress/test-entrypoint.html');
        cy.window().should('have.property', 'papbTestFrontendLib');
    });

    it('Gets the answer correctly', function() {
        cy.visit('cypress/test-entrypoint.html');
        cy.window().then(window => {
            expect(window.papbTestFrontendLib.getTheAnswer()).to.equal(42);
        });
    });
});