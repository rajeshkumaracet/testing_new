let {
  registration,
  registrationForm_validation,
  logout
} = require("../pages/registration_page");

describe("Automating Register Form with Logout", () => {
  it("check register form Validation", () => {
    browser.get(
      "http://www.way2automation.com/angularjs-protractor/registeration/#/login"
    );
    registrationForm_validation();
    expect(element(by.css("[ng-if='Auth.error']")).getText()).toBe(
      "Username or password is incorrect"
    );
    browser.sleep(3000);
  });

  it("Check user Login", () => {
    browser.get(
      "http://www.way2automation.com/angularjs-protractor/registeration/#/login"
    );
    registration();
    expect(browser.getCurrentUrl()).toBe(
      "http://www.way2automation.com/angularjs-protractor/registeration/#/"
    );
    browser.sleep(2000);
  });

  describe("Automating Logout", () => {
    it("Check Logout", () => {
      logout();
      expect(browser.getCurrentUrl()).toBe(
        "http://www.way2automation.com/angularjs-protractor/registeration/#/login"
      );
      browser.sleep(3000);
    });
  });
});
