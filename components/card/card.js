import createElement from "../../assets/lib/create-element.js";
export default class PartnerCard  {
  elem = null;
  #partner = []

  constructor(partner) {
    this.#partner = partner || this.#partner;
    this.elem = this.#render();
  }

  #template() {
    const { image, category } = this.#partner;
  
    return `
      <div class="card">
        <div class="card__top">
          <div class="card__category-list">
            ${category.map(item => `
              <div class="card__category-item card__category-item_${item}">${item}</div>
            `).join('')}
          </div>
        </div>
        <div class="card__body">
          <img class="card__image" src="../../assets/image/${image}" />
        </div>
      </div>
    `;
  }
  

  #render() {
    this.elem = createElement(this.#template());
    return this.elem;
  }
}