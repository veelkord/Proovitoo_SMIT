import { Selector, t } from "testcafe";

class NavBarPage {
  signInLink: Selector;
  contactUsLink: Selector;
  signOutLink: Selector;
  accoutLink: Selector;
  constructor() {
    this.signInLink = Selector("#header a.login");
    this.contactUsLink = Selector("#contact-link a");
    this.signOutLink = Selector("#header a.logout");
    this.accoutLink = Selector("#header a.account");
  }
}

export default new NavBarPage();
