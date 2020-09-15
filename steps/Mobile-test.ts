import { Given, When, Then } from "cucumber";
import { t, ClientFunction, RequestLogger } from "testcafe";
import HomePage from "../pages/home";
import NavBarPage from "../pages/navbar";

Given("I am using mobile and navigating to the hamburger menu", async () => {
  await t.navigateTo('http://www.imdb.com')
  await t.click(NavBarPage.HeaderdropDownMobile).wait(3000);
});

Then('I should be redirected to chart mobile view', async function() {
    await t.click(NavBarPage.sideBarMenuMobile);
    await t.click(NavBarPage.sidebarMenuMobileItem);   
});
        