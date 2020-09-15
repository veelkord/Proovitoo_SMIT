import { Selector, t } from "testcafe";

class NavBarPage {
  HeaderdropDown: Selector;
  HeaderdropDownTopRatedItem: Selector;
  signOutLink: Selector;
  accoutLink: Selector;
  sortBy: Selector;
  sortByBingRatings: Selector;
  showing250: Selector;
  sortByDropdown: Selector;
  cellSelectorCount: Selector;
  BingFirstResult: Selector;
  allCells: Selector;
  header: Selector;
  BingSearchBox: Selector;
  HeaderdropDownMobile: Selector;
  sideBarMenuMobile: Selector;
  sidebarMenuMobileItem: Selector;
  constructor() {
    this.HeaderdropDown = Selector("#imdbHeader-navDrawerOpen--desktop");
    this.HeaderdropDownMobile = Selector("#imdbHeader-navDrawerOpen");  
    this.sideBarMenuMobile = Selector('[data-testid="panel"]').withText("Movies");
    this.sidebarMenuMobileItem = Selector('["category-expando"]').withText("HeaderdropDownTopRatedItem"); 
    this.HeaderdropDownTopRatedItem = Selector('#imdbHeader').find('a').withText("Top Rated"); 
    this.signOutLink = Selector("#header a.logout");
    this.accoutLink = Selector("#header a.account");
    this.sortByDropdown = Selector(".lister-sort-by");
    this.sortByBingRatings = Selector('option').withText("Ranking");
    this.showing250 = Selector('.desc');
    this.cellSelectorCount = Selector('div.lister');
    this.BingSearchBox = Selector('#sb_form_q');
    this.BingFirstResult = Selector('#b_results').find('a');
    this.allCells = Selector('#main > div > span > div > div > div.lister > table > tbody > tr');
    this.header = Selector('.article').find('h1');
  }
}

export default new NavBarPage();
