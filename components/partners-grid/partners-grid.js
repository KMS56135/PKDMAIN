import PartnerCard from "../card/card.js";
import createElement from "../../assets/lib/create-element.js";

export default class PartnerGrid {
  #filters = {}

  constructor(partners) {
    this.partners = partners || [];
    this.#filters = {
      "all-checkbox": true,
    };
    this.firstCheckedRadio = 'all-checkbox';
    this.lastCheckedRadio = null;
    this.#render();
    this.#addCheckboxListeners();
    this.#addArrowsListeners();
  }

  #render() {
    this.#updateProductGrid()
  }

  #updateProductGrid() {
    const productGridInner = document.querySelector('.partners-grid__inner');
    productGridInner.innerHTML = '';
    console.log(productGridInner)
    const filteredCards = this.partners.filter(partner => this.#partnerCardFiltering(partner));

    filteredCards.forEach(partner => {
      const partnerCard = new PartnerCard(partner);
      productGridInner.append(partnerCard.elem);
    });
  }

  #partnerCardFiltering(partner) {
    if (Object.keys(this.#filters).length === 0) {
      return true;
    }

    if (this.#filters['all-checkbox']) {
      return true;
    }

    if (this.#filters['developer-checkbox'] && partner.category.includes('dev')) {
      return true;
    }

    if (this.#filters['teamled-checkbox'] && partner.category.includes('tl')) {
      return true;
    }

    if (this.#filters['leader-develover-checkbox'] && partner.category.includes('devl')) {
      return true;
    }
    return false;
  }

  // Обработчик переключения радио кнопок
  #handleRadioChange(event) {
    const selectedRadioButton = event.target;
  
    // Найти все группы фильтров
    const allFiltersGroups = document.querySelectorAll('.filters__group');
    
    // Удалить класс 'active' из всех групп фильтров
    allFiltersGroups.forEach(group => group.classList.remove('active'));
  
    // Добавить класс 'active' к выбранной группе фильтров
    const filtersGroup = selectedRadioButton.closest('.filters__group');
    if (filtersGroup) {
      filtersGroup.classList.add('active');
    }
  
    delete this.#filters[this.firstCheckedRadio];
    this.#filters[selectedRadioButton.id] = selectedRadioButton.checked;
    this.lastCheckedRadio = selectedRadioButton.id;
    this.firstCheckedRadio = this.lastCheckedRadio;
    this.#updateProductGrid();
  }
  

  #addCheckboxListeners() {
    const filtersCheckboxes = document.querySelectorAll('.filters');
    filtersCheckboxes.forEach(filter => {
      const checkboxes = filter.querySelectorAll("input[type='radio']");
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', this.#handleRadioChange.bind(this));
      });
    });
  }

  #addArrowsListeners() {
    const arrows = document.querySelectorAll('.arrow');
    console.log(arrows)
    arrows.forEach(arrow => {
      arrow.addEventListener('click', this.#handleArrowsClick.bind(this));
    })
  }

  #handleArrowsClick(event) {
    const arrowRight = document.querySelector('.right');
    const arrowLeft = document.querySelector('.left');
    const partnersGridInner = document.querySelector('.partners-grid__inner');
    const partnersGridInnerWidth = partnersGridInner.clientWidth;
  
    if (event.target === arrowRight && event.target.closest('.right')) {

      if (partnersGridInnerWidth === 520) {
        partnersGridInner.scrollBy({ left: 260});
        return
      }

      if (partnersGridInnerWidth === 300) {
        partnersGridInner.scrollBy({ left: 310});
        return
      }

      partnersGridInner.scrollBy({ left: 300});
    }
  
    if (event.target === arrowLeft && event.target.closest('.left')) {

      if (partnersGridInnerWidth === 520) {
        partnersGridInner.scrollBy({ left: -260});
        return
      }

      if (partnersGridInnerWidth === 300) {
        partnersGridInner.scrollBy({ left: -310});
        return
      }

      partnersGridInner.scrollBy({ left: -300});;
    }



  }
  
}

