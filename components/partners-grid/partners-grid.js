import PartnerCard from "../card/card.js";
import createElement from "../../assets/lib/create-element.js";

export default class PartnerGrid {
  constructor(partners) {
    this.partners = partners;
    this.filters = {};
    this.render();
    this.addCheckboxListeners();
    // this.updateFilter();
  }

  render() {
    this.elem = createElement(`
      <div class="partners-grid">
        <div class="products-grid__inner"></div>
      </div>`);
    this.updateProductGrid();
  }

  updateProductGrid() {
    const productGridInner = this.elem.querySelector('.products-grid__inner');
    productGridInner.innerHTML = '';

    const filteredProducts = this.partners.filter(partner => this.filterPartner(partner));

    filteredProducts.forEach(partner => {
      const partnerCard = new PartnerCard(partner);
      productGridInner.append(partnerCard.elem);
    });
  }

  filterPartner(partner) {
    // Логика фильтрации на основе this.filters
    return true; // Замените это на вашу логику фильтрации
  }

  handleCheckboxChange(event) {
    const checkbox = event.target;
    this.filters[checkbox.name] = checkbox.checked;
    this.updateProductGrid();
  }

  addCheckboxListeners() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', this.handleCheckboxChange.bind(this));
    });
  }
}
