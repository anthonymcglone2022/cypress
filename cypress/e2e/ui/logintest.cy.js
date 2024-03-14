import Index from "../../pageobjectmodel/index"
import Login from "../../pageobjectmodel/login"
import Register from "../../pageobjectmodel/register"
import Dashboard from "../../pageobjectmodel/dashboard"

describe('UI Automation Suite', () => {

  /**
   * This test runs against a simple Flask app, see README.md
   */

  it('Login Test', () => {
      Index.loadHomePage();
      Index.isHeaderPresent();
      Index.clickLogin();

      Login.isHeaderPresent("Login");
      Login.enterLogin("admin");
      Login.enterPassword("password");
      Login.clickLogin();

      Dashboard.isHeaderPresent("admin");
  })

})
