const registration = () => {
  element(by.model("Auth.user.name")).sendKeys("angular");
  element(by.model("Auth.user.password")).sendKeys("password");
  element(by.model("model[options.key]")).sendKeys("angular");
  element(by.buttonText("Login")).click();
};

const registrationForm_validation = () => {
  element(by.model("Auth.user.name")).sendKeys("react");
  element(by.model("Auth.user.password")).sendKeys("password123");

  element(by.model("model[options.key]")).sendKeys("react");
  element(by.buttonText("Login")).click();
};

const logout = () => {
  element(by.css(".ng-scope > a")).click();
};

module.exports = { registration, registrationForm_validation, logout };
