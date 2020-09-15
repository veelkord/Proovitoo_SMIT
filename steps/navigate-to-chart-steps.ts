import { Given, When, Then } from "cucumber";
import { t, Selector, ClientFunction, RequestLogger } from "testcafe";
import NavBarPage from "../pages/navbar";

Given("I choose the dropdown from header", async () => {
  await t.navigateTo('https://www.imdb.com');
  await t.click(NavBarPage.HeaderdropDown).wait(2000);
});

Then("I should be redirected to the chart", async () => {
  
  await t.click(NavBarPage.HeaderdropDownTopRatedItem);
  
  const getLocation = ClientFunction(() => document.location.href);
  
 //doesn't work on headless mode  
  //await t.expect(getLocation()).contains('chart');
  await t.expect(NavBarPage.header.innerText).contains('Top Rated Movies');
});

Given("I am on the chart page", async () => {
  await t.navigateTo('https://www.imdb.com/chart/top/?ref_=nv_mv_250');
});

When("I sort by given ratings to ascending", async () => {

  await t.click(NavBarPage.sortByDropdown);
  await t.click(NavBarPage.sortByBingRatings);
  
});

Then("the highest rating should be on the top", async () => {
    const cellSelector = Selector('td[name="ratingColumn.imdbRating"]');
    const cellCount = await cellSelector.count;

    for (let i = 0; i < cellCount - 1; i++) {
        let cellText = await cellSelector.nth(i).innerText;
        let compareCellText = await cellSelector.nth(i + 1).innerText;

        await t.expect(cellText <= compareCellText).ok();
    }
});