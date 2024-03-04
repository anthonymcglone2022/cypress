class Register
{
    enterUserName(username) {
        cy.get("input[id='username']").type(username);
    }

    enterPassword(password) {
        cy.get("input[id='password']").type(password);
    }

    clickRegister() {
        cy.get("input[value='Register']").click();
    }
}

module.exports = new Register();