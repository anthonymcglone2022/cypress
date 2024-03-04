class Index
{
    loadHomePage() {
        cy.visit("http://127.0.0.1:5000/");
    }

    isHeaderPresent() {
        cy.contains('h1', "Welcome to My App");
    }

    clickRegister() {
        cy.get('a[href="/register"]').click();
    }

    clickLogin() {
        cy.get('a[href="/login"]').click();
    }
}

module.exports = new Index();