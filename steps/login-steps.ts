import { Given, When, Then } from "cucumber";
import { t } from "testcafe";
import AuthenticationPage from "../pages/authentication";

When("I enter valid credentials", async () => {
  await t.typeText(AuthenticationPage.loginEmailInput, t.ctx.emailId);
  await t.typeText(AuthenticationPage.passwordInput, t.ctx.password);
  await t.click(AuthenticationPage.loginSubmitBtn);
});

When("I enter invalid username and valid password", async () => {
  await t.typeText(AuthenticationPage.loginEmailInput, `${t.ctx.emailId}x`);
  await t.typeText(AuthenticationPage.passwordInput, t.ctx.password);
  await t.click(AuthenticationPage.loginSubmitBtn);
});

Then("I should see error message", async () => {
  await t.expect(AuthenticationPage.loginError.visible).eql(true);
});
