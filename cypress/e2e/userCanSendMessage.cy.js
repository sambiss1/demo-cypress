describe("Submit message", () => {
    it("Test if user can submit message", () => {
        cy.visit("/contact");
        cy.get('#name:invalid').should('have.length', 1);
        cy.get('#email:invalid').should('have.length', 1);
        cy.get('#message:invalid').should('have.length', 1);

        cy.get("#name").type('John Doe');
        cy.get('#name').then(($input) => {
            expect($input[0].validationMessage).to.eq('')
        })

        cy.get("#email").type('johndoe@gmail.com');
        cy.get('#email').then(($input) => {
            expect($input[0].validationMessage).to.eq('')
        })

        cy.get("#message").type("Test de message");
        cy.get('#message').then(($textarea) => {
            expect($textarea[0].validationMessage).to.eq('')
        })

        cy.get('[type="submit"]').click()
        cy.get('.success').should('be.visible')


    });
});