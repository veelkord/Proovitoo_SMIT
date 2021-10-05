import { Selector, t } from "testcafe";

class CareerPage {
  sectionJobOpportunities: Selector;
  anyAvailableJobs: Selector;
  applyButtonText: Selector;
  applyButton: Selector;
  popUpTab: Selector;

  constructor() {
    this.sectionJobOpportunities = Selector("#vabad-tookohad");
    this.anyAvailableJobs = Selector("div.mt-l-m > div");
    this.applyButtonText = Selector("button").withExactText("Esita");
    this.applyButton = Selector("button");
    this.popUpTab = Selector("span").withExactText("Liitu smitikatega!");
  }
}

export default new CareerPage();
