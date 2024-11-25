
import PartnerCard from "./components/card/card.js";
import PartnerGrid from "./components/partners-grid/partners-grid.js";
import PartnerGrid from "./components/partners-grid/partners-grid.js";
export default class Main {
  constructor() {} 

  async render() {
    let getPertners = await fetch('./components/card/partners.json');
    const jsonPartners = await getPertners.json();

    let PartnerGrid = new PartnerGrid(jsonPartners);
    const partnersHolder = document.querySelector("partners__cards");
  }
}