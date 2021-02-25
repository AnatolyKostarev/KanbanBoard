import {StateActions, Status} from '../constants.js';
import AbstractComponent from './abstract-component.js';

export default class BasketCleanerComponent extends AbstractComponent {
  constructor(taskService) {
    super();
    this._taskService = taskService;
  }

  _getTemplate() {
    return (
      `<button class="taskboard__button button button--clear" type="button">
        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
            <rect fill="white" height="14.6667" transform="rotate(45 15.5374 5.16638)" width="1.83333" x="15.5374" y="5.16638"/>
            <rect fill="white" height="14.6667" transform="rotate(135 16.8337 15.5372)" width="1.83333" x="16.8337" y="15.5372"/>
        </svg>
        <span>Очистить</span>
      </button>`
    );
  }

  _afterCreateElement() {
    this.getElement().addEventListener(`click`, this._cleanBasketHandler.bind(this));
    window.addEventListener(StateActions.TASK_UPDATE_POSITION, this._changeDataHandler.bind(this));
  }

  _cleanBasketHandler() {
    this._taskService.cleanupBasket();
    this._toggleDisabled(true);
  }

  _changeDataHandler() {
    const isDisabled = this._taskService.getByStatus(Status.BASKET).length === 0;
    this._toggleDisabled(isDisabled);
  }

  _toggleDisabled(isDisabled) {
    this.getElement().toggleAttribute(`disabled`, isDisabled);
  }
}
