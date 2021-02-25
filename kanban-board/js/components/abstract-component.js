import {createElement} from '../utils.js';

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`It's AbstractComponent, we dont need to create them!`);
    }
    this._element = null;
  }

  _getTemplate() {
    throw new Error(`It's AbstractComponent method, please implement it! `);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
      this._afterCreateElement();
    }

    return this._element;
  }

  _afterCreateElement() {
    // abstract hook method
  }
}
