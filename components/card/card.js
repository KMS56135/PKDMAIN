import createElement from "../../assets/lib/create-element.js";
export default class PartnerCard  {
  elem = null;

  constructor() {
    this.elem = this.#render();
  }

  #template() {
    return `
      <div class="card">
        <div class="card__top"></div>
        <div class="card__body">
          <img class="card__image" src="../../assets/image/avtodom.png">
          </img>
        </div
      </div>
    `
  }

  #render() {
    this.elem = createElement(this.#template());
    return this.elem;
  }
}