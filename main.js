
import PartnerGrid from "./components/partners-grid/partners-grid.js";
export default class Main {
  constructor() {} 

  async render() {
    let getPertners = await fetch('./components/card/partners.json');
    const jsonPartners = await getPertners.json();

    let partnerGrid = new PartnerGrid(jsonPartners);
    const partnersHolder = document.querySelector(".partners__cards");
    partnersHolder.append(partnerGrid.elem)
  }
}