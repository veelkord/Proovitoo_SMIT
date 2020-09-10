import { Given, When, Then } from "cucumber";
import { t } from "testcafe";
import HomePage from "../pages/home";
import NavBarPage from "../pages/navbar";
import AuthenticationPage from "../pages/authentication";
import { randomEmailId, randomString } from "./helpers";

Given("I am on registration page", async () => {
  await t.navigateTo('imdb.com');
  await t.click(NavBarPage.signInLink);
});

When("I enter valid values for user registration and submit", async () => {
  const firstName = randomString(6);
  const lastName = randomString(6);
  t.ctx.name = `${firstName} ${lastName}`;
  await AuthenticationPage.registerUser(
    randomEmailId(6),
    firstName,
    lastName,
    randomString(6),
    "1 abc road",
    "New York",
    "New York",
    "10001",
    "012344567890"
  );
});

Then("I should be logged in", async () => {
  await t.expect(NavBarPage.signOutLink.visible).eql(true);
  await t.expect(NavBarPage.accoutLink.textContent).eql(t.ctx.name);
});

Given("I am a registered user", async () => {
  await t.navigateTo("http://imdb.com").wait(3000);
  await t.click(NavBarPage.signInLink);

  const emailId = randomEmailId(6);
  t.ctx.emailId = emailId;
  const password = randomString(6);
  t.ctx.password = password;

  const firstName = randomString(6);
  const lastName = randomString(6);
  t.ctx.name = `${firstName} ${lastName}`;

  await AuthenticationPage.registerUser(
    emailId,
    firstName,
    lastName,
    password,
    "1 abc road",
    "New York",
    "New York",
    "10001",
    "012344567890"
  );
  await t.click(NavBarPage.signOutLink);
});

Then("I try to register with same email id", async () => {
  await t.typeText(AuthenticationPage.registerEmailInput, t.ctx.emailId);
  await t.click(AuthenticationPage.registerNewBtn);
});

Then("I should see error message", async () => {
  await t.expect(AuthenticationPage.createAccountError.visible).eql(true);
});
