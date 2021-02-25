import AbstractComponent from './abstract-component.js';

export default class EmptyItemComponent extends AbstractComponent {
  constructor(title, taskStatus, status) {
    super();
    this._title = title;
    this._taskStatus = taskStatus;
    this._status = status;
  }

  _getTemplate() {
    return (
      `<div class="taskboard__item task task--${this._taskStatus} task--${this._status}">
        <p>${this._title}</p>
      </div>`
    );
  }
}
