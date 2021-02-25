import AddTaskComponent from './components/add-task-component.js';
import BoardComponent from './components/board-component.js';
import HeaderComponent from './components/header-component.js';
import {InsertPosition} from './constants.js';
import {tasks} from './data.js';
import TasksService from './services/task-service.js';
import {renderElement} from './utils.js';

export default class App {
  constructor() {
    this._taskService = new TasksService(tasks);
  }

  init(name) {
    const headerComponent = new HeaderComponent(name);
    const headerElement = headerComponent.getElement();
    const bodyElement = document.querySelector(`body.board-app`);

    renderElement(bodyElement, headerElement, InsertPosition.AFTERBEGIN);

    const addTaskComponent = new AddTaskComponent(this._taskService);
    const addTaskElement = addTaskComponent.getElement();

    const boardAppInnerElement = document.querySelector(`main > div.board-app__inner`);

    const boardComponent = new BoardComponent(this._taskService);
    const boardElement = boardComponent.getElement();

    renderElement(boardAppInnerElement, addTaskElement, InsertPosition.AFTERBEGIN);
    renderElement(boardAppInnerElement, boardElement, InsertPosition.BEFOREEND);
  }
}
