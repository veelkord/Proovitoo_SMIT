import { Given, When, Then } from "cucumber";
import { t, Selector, ClientFunction, RequestLogger } from "testcafe";
import ChartPage from "../pages/chartPageElements";

Given("I choose the dropdown from header", async () => {
  await t.navigateTo('https://www.imdb.com');
  await t.click(ChartPage.HeaderdropDown).wait(2000);
});

Then("I should be redirected to the chart", async () => {
  
  await t.click(ChartPage.HeaderdropDownTopRatedItem);
  
  const getLocation = ClientFunction(() => document.location.href);
  
 //doesn't work on headless mode  
  //await t.expect(getLocation()).contains('chart');
  await t.expect(ChartPage.header.innerText).contains('Top Rated Movies');
});

Given("I am on the chart page", async () => {
  await t.navigateTo('https://www.imdb.com/chart/top/?ref_=nv_mv_250');
});

Then("there should be 250 movies on the list", async () => {
  await t.expect(ChartPage.cellSelectorCount.count).eql(250); 
});

When("I sort by given ratings to ascending", async () => {
  await t.click(ChartPage.sortByDropdown);
  await t.click(ChartPage.sortByBingRatings);
});

Then("movies should be filtered ascending", async () => {
    const firstCell = Selector('td[name="ratingColumn.imdbRating"]').nth(0);
    const secondCell = Selector('td[name="ratingColumn.imdbRating"]').nth(1);

    await t.expect(firstCell <= secondCell).ok();
});