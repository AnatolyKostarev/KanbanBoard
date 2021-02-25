import {InsertPosition, Text} from '../constants.js';
import {renderElement} from '../utils.js';
import AbstractComponent from './abstract-component.js';
import FormComponent from './form-component.js';

export default class AddTaskComponent extends AbstractComponent {
  constructor(taskService) {
    super();
    this._taskService = taskService;
  }

  _getTemplate() {
    return (
      `<section class="add-task">
        <h2 class="visually-hidden">${Text.NEW_TASK}</h2>
      </section>`
    );
  }

  _afterCreateElement() {
    this._formComponent = new FormComponent(this._taskService, Text.NEW_TASK);

    renderElement(this.getElement(), this._formComponent.getElement(), InsertPosition.BEFOREEND);
  }
}
