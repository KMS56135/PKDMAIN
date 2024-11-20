import PartnerCard from "./components/card/card.js";

export default class Main {
  constructor() {} 

  async render() {
    const card = new PartnerCard ();
    const holderCard = document.querySelector('[data-holder-card]')
    holderCard.append(card.elem);
  }
}