import AbstractComponent from './abstract-component.js';

export default class HeaderComponent extends AbstractComponent {
  constructor(name) {
    super();
    this._name = name;
  }

  _getTemplate() {
    return (
      `<header class="board-app__header">
        <div class="board-app__inner">
          <h1>${this._name}</h1>
        </div>
      </header>`
    );
  }
}
