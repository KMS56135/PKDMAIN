
import PartnerGrid from "./components/partners-grid/partners-grid.js";
import MainNav from "./components/popup/popup.js";
export default class Main {
  constructor() {} 

  async render() {
    let mainNav = new MainNav();
    mainNav.init();
    let getPertners = await fetch('./components/card/partners.json');
    const jsonPartners = await getPertners.json();
    let partnerGrid = new PartnerGrid(jsonPartners);
  }
}