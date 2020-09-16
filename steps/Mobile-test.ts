import { Given, When, Then } from "cucumber";
import { t, RequestLogger } from "testcafe";
import ChartPage from "../pages/chartPageElements";
import { config } from '../config';

Given("I am using an I phone to navigate to the hamburger menu", async () => {
  await t.navigateTo('http://imdb.com');
  await t.click(ChartPage.HeaderdropDownMobile).wait(3000);
});

When('I click on top rated menu item', async function() {
    await t.click(ChartPage.sideBarMenuMobile);
    await t.click(ChartPage.HeaderdropDownTopRatedItem).wait(3000);  
});

Then('I should be redirected to chart mobile view', async function() {
    await t.expect(ChartPage.headerMobile.innerText).contains('Top Rated Movies');
});
        