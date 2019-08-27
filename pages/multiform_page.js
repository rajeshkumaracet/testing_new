const profilePage = () => {
  element(by.model("formData.name")).sendKeys("Adappt");
  element(by.model("formData.email")).sendKeys("testTeam@adappt.co.uk");
};

const interstSelect = () => {
  element(by.model("formData.type")).getAttribute("xbox")
}
module.exports = {profilePage,interstSelect};
