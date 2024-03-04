class Dashboard
{
    isHeaderPresent(text) {
        cy.contains('h2', text);
    }

    clickLogout() {
        cy.get('a[href="/logout"]').click();
    }
}

module.exports = new Dashboard();