import {InsertPosition, Status} from '../constants.js';
import {renderElement} from '../utils.js';
import AbstractComponent from './abstract-component.js';
import ListComponent from './list-component.js';

export default class BoardComponent extends AbstractComponent {
  constructor(taskService) {
    super();
    this._taskService = taskService;
  }

  _getTemplate() {
    return (
      `<section class="taskboard">
        <h2 class="visually-hidden">Ваши задачи:</h2>
      </section>`
    );
  }

  _afterCreateElement() {
    Object.values(Status).forEach((status) => {
      const listComponent = new ListComponent(this._taskService, status);
      const listElement = listComponent.getElement();

      renderElement(this.getElement(), listElement, InsertPosition.BEFOREEND);
    });
  }
}
