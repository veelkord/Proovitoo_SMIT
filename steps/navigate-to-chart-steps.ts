import { Given, When, Then } from "cucumber";
import { t, Selector, ClientFunction, RequestLogger } from "testcafe";
import CareerPage from "../pages/careerPageElements";

// First scenario

Given("I am on the career page", async () => {
  await t.navigateTo("https://www.smit.ee/et/karjaar");
});

When("I scroll down to the job opportunities", async () => {
  await t.hover(CareerPage.sectionJobOpportunities).wait(2000);
});

Then("I should see some available jobs", async () => {
  await t.expect(CareerPage.anyAvailableJobs.count).gte(1);
});

// Second scenario

Given("I am on the job opportunities view", async () => {
  await t.navigateTo("https://www.smit.ee/et/karjaar");
  await t.hover(CareerPage.sectionJobOpportunities).wait(2000);
});

Then("There should be a apply button", async () => {
  await t.expect(CareerPage.applyButtonText).ok();
});

When("I click on it", async () => {
  await t.click(CareerPage.applyButton).wait(1500);
});

Then("Application form will open", async () => {
  await t.expect(CareerPage.popUpTab).ok();
});
