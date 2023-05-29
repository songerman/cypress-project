describe('Home page', () => {
    describe('Counter', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('displays the correct title', () => {
            cy.get('[data-cy=counter-heading]').contains('Счетчик с полями ввода');
        });

        it('increments the counter when increase button is clicked', () => {
            cy.get('[data-cy=increase-btn]').click();
            cy.get('[data-cy=counter-value]').should('have.text', '1');
        });

        it('decrements the counter when decrease button is clicked', () => {
            cy.get('[data-cy=decrease-btn]').click();
            cy.get('[data-cy=counter-value]').should('have.text', '0');
        });

        it('resets the counter to 0 when Reset button is clicked', () => {
            cy.get('[data-cy=increase-btn]').click();
            cy.get('[data-cy=reset-btn]').click();
            cy.get('[data-cy=counter-value]').should('have.text', '0');
        });
    });

    describe('Input', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('disables Confirm button when input fields are not filled', () => {
            cy.get('[data-cy=input-1]').clear();
            cy.get('[data-cy=input-2]').clear();
            cy.get('[data-cy=confirm-btn]').should('be.disabled');
        });

        it('enables Confirm button when both input fields are filled', () => {
            cy.get('[data-cy=input-1]').type('Value 1');
            cy.get('[data-cy=input-2]').type('Value 2');
            cy.get('[data-cy=confirm-btn]').should('not.be.disabled');
        });

        it('displays success message when Confirm button is clicked with filled input fields', () => {
            cy.get('[data-cy=input-1]').type('Value 1');
            cy.get('[data-cy=input-2]').type('Value 2');
            cy.get('[data-cy=confirm-btn]').click();
            cy.get('[data-cy=success-text]').should('have.text', 'Успешно!');
        });

        it('clears input fields after Confirm button is clicked', () => {
            cy.get('[data-cy=input-1]').type('Value 1');
            cy.get('[data-cy=input-2]').type('Value 2');
            cy.get('[data-cy=confirm-btn]').click();
            cy.get('[data-cy=input-1]').should('have.value', '');
            cy.get('[data-cy=input-2]').should('have.value', '');
        });
    });
});
