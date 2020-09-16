import { Selector, t } from "testcafe";


class ChartPage {
  HeaderdropDown: Selector;
  HeaderdropDownTopRatedItem: Selector;
  sortBy: Selector;
  sortByBingRatings: Selector;
  sortByDropdown: Selector;
  cellSelectorCount: Selector;
  BingFirstResult: Selector;
  header: Selector;
  BingSearchBox: Selector;
  HeaderdropDownMobile: Selector;
  sideBarMenuMobile: Selector;
  sidebarMenuMobileItem: Selector;
  headerMobile: Selector;
  constructor() {
    this.HeaderdropDown = Selector("#imdbHeader-navDrawerOpen--desktop");
    this.HeaderdropDownMobile = Selector("#imdbHeader-navDrawerOpen");  
    this.sideBarMenuMobile = Selector('[aria-label="Expand Movies Nav Links"]');
    this.sidebarMenuMobileItem = Selector('[data-testid="category-expando"]').withText("Top Rated Movies"); 
    this.HeaderdropDownTopRatedItem = Selector('#imdbHeader').find('a').withText("Top Rated"); 
    this.sortByDropdown = Selector(".lister-sort-by");
    this.sortByBingRatings = Selector('option').withText("Ranking");
    this.cellSelectorCount = Selector('tbody > tr');
    this.BingSearchBox = Selector('#sb_form_q');
    this.BingFirstResult = Selector('#b_results').nth(0);
    this.header = Selector('.article').find('h1');
    this.headerMobile = Selector('.header').find('h1');
  }
}

export default new ChartPage();

