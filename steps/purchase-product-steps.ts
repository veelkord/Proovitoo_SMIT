import { Given, When, Then } from "cucumber";
import { t } from "testcafe";

import HomePage from "../pages/home";
import NavBarPage from "../pages/navbar";
import AuthenticationPage from "../pages/authentication";

import { randomEmailId, randomString } from "./helpers";

Given("I am logged in", async () => {
  await HomePage.browse();
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

  await t.typeText(AuthenticationPage.loginEmailInput, t.ctx.emailId);
  await t.typeText(AuthenticationPage.passwordInput, t.ctx.password);
  await t.click(AuthenticationPage.loginSubmitBtn);
  await t.click(HomePage.brandLogo);
});

When("I purchase a product", async () => {
  await HomePage.checkoutPopularItem();
});

Then("I should see success message", async () => {
  await t.expect(HomePage.confirmMessage.visible).eql(true);
  await t
    .expect(HomePage.confirmMessage.textContent)
    .contains("Your order on My Store is complete.");
});
