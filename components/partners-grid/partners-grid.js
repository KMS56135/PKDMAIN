import PartnerCard from "../card/card.js";
import createElement from "../../assets/lib/create-element.js";

export default class PartnerGrid {
  constructor(partners) {
    this.partners = partners;
    this.filters = {};
    this.highlightedCheckbox = null;
    this.render();
    this.addCheckboxListeners();
  }

  render() {
    const commonActiveCheckbox = document.querySelector('#all-checkbox');
    console.log(commonActiveCheckbox)
    this.elem = createElement(`
      <div class="partners-grid">
        <div class="partners-grid__inner"></div>
      </div>`);
    this.updateProductGrid(commonActiveCheckbox)
  }

  updateProductGrid(selectedCheckbox) {
    console.log(selectedCheckbox)
    const productGridInner = this.elem.querySelector('.partners-grid__inner');
    productGridInner.innerHTML = '';
    
    const filteredCards = this.partners.filter(partner => this.partnerCardFiltering(partner, selectedCheckbox));

    filteredCards.forEach(partner => {
      const partnerCard = new PartnerCard(partner);
      productGridInner.append(partnerCard.elem);
    });
  }

  partnerCardFiltering(partner, selectedCheckbox) {
    if (Object.keys(this.filters).length === 0) {
      // selectedCheckbox.classList.add('highlighted')
      // this.handleCheckboxChange = selectedCheckbox;
      // console.log(this.handleCheckboxChange)
      return true;
    }

    if (this.filters['all-checkbox']) {
      return true;
    }

    if (this.filters['developer-checkbox'] && partner.category.includes('dev')) {
      return true;
    }

    if (this.filters['teamled-checkbox'] && partner.category.includes('tl')) {
      return true;
    }

    if (this.filters['leader-develover-checkbox'] && partner.category.includes('devl')) {
      return true;
    }
    return false;
  }

  handleCheckboxChange(event) {
    const selectedCheckbox = event.target;
    this.filters[selectedCheckbox.id] = selectedCheckbox.checked;

    if (!selectedCheckbox.checked) { 
      delete this.filters[selectedCheckbox.id]; 
    }
    if (selectedCheckbox.classList.contains('highlighted')) {
      console.log(1);
      selectedCheckbox.classList.remove('highlighted')
    }

    if (selectedCheckbox.checked) {
      selectedCheckbox.classList.add('highlighted')
      this.handleCheckboxChange = selectedCheckbox;
    }
    
    this.updateProductGrid(selectedCheckbox);
  }

  addCheckboxListeners() {
    const filtersCheckboxes = document.querySelectorAll('.filters');
    filtersCheckboxes.forEach(filter => {
      const checkboxes = filter.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', this.handleCheckboxChange.bind(this));
      });
    });
  }
}

