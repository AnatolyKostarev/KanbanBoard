import {MIN_TITLE_LENGTH} from '../constants.js';
import AbstractComponent from './abstract-component.js';

export default class FormComponent extends AbstractComponent {
  constructor(taskService, label) {
    super();
    this._taskService = taskService;
    this._label = label;
  }

  _getTemplate() {
    return (
      `<form aria-label="Форма добавления задачи" class="add-task__form">
        <div class="add-task__input-wrapper">
          <label for="add-task">${this._label}</label>
          <input id="add-task" name="task-name" placeholder="Название задачи..." type="text" required minlength="${MIN_TITLE_LENGTH}">
        </div>
        <button class="add-task__button button" type="submit">
          <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
            <rect fill="white" height="14.6667" width="1.83333" x="10.0833" y="3.66663"/>
            <rect fill="white" height="14.6667" transform="rotate(90 18.3333 10.0833)" width="1.83333" x="18.3333" y="10.0833"/>
          </svg>
          <span>Добавить</span>
        </button>
      </form>`
    );
  }

  _afterCreateElement() {
    this._addEventListeners();
  }

  _addEventListeners() {
    this.getElement().addEventListener(`submit`, this.formSubmitHandler.bind(this));
  }

  formSubmitHandler(evt) {
    evt.preventDefault();

    const inputElement = this.getElement().querySelector(`#add-task`);
    const title = inputElement.value.trim();

    this._taskService.create({title});
    inputElement.value = ``;
  }
}

