import { Given, When, Then } from "cucumber";
import { t, ClientFunction, RequestLogger } from "testcafe";
import HomePage from "../pages/home";
import NavBarPage from "../pages/navbar";

Given("I am on Bing\'s search page", async () => {
  await t.navigateTo('http://www.bing.com').wait(3000);
});

When('I am typing my search request on Bing', async function() {
    await t.typeText(NavBarPage.BingSearchBox, "Bing top rated 250");
    await t.pressKey("enter");
});

Then('I should see that the first Bing\'s result is something', async function() {
    await t.expect(NavBarPage.BingFirstResult.innerText).eql("IMDb Top 250 - IMDb");
    
});


Given("I am navigating to the chart on Safari mobile", async () => {
  await t.navigateTo('http://www.bing.com').wait(3000);
});

When('I am clicking the hamburger menu', async function() {
    await t.click(NavBarPage.sideBarMenuMobile);
    await t.click(NavBarPage.sidebarMenuMobileItem);
});




        