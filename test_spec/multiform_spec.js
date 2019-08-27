const {profilePage, interstSelect} = require("../pages/multiform_page");

describe("MulitForm automation", () => {

  beforeEach(() => {
    browser.get(
      "http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile"
    );
  });

  it("Initial Check-Start profile or Not", () => {
    expect(element(by.css(".active span")).getText()).toContain("1");
  });

  it("Inital Empty or Not Check", () => {
    expect(element(by.css(".ng-binding")).getText()).toContain("{}");
  });

  it("Profile form Automating", () => {
    profilePage();
    const jsonText = element(by.css(".ng-binding")).getText().then( text => text.trim())
    expect(jsonText).toBe(
      '{"name":"Adappt","email":"testTeam@adappt.co.uk"}'
    );
    element(by.xpath("//*[@id='form-views']/div[3]/div[1]/a[1]")).click();
    browser.sleep(3000)
  });

  it("Check-Navigate to Profile or Not", () => {
    expect(element(by.css(".active > span")).getText()).toContain("2");
  });

  it("Check Interest page!", () => {
    interstSelect();
    browser.sleep(3000);
  })

});
