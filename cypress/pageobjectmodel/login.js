class Login
{

    isHeaderPresent(text) {
        cy.contains('h2', text);
    }

    enterLogin(username) {
        cy.get("input[id='login']").type(username);
    }

    enterPassword(password) {
        cy.get("input[id='secret']").type(password);
    }

    clickLogin() {
        cy.get("input[value='Login']").click();
    }
}

module.exports = new Login();