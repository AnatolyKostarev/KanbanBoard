export const InsertPosition = {
  BEFOREBEGIN: `beforebegin`,
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};
export const StateActions = {
  TASK_CREATE: `task-create`,
  TASK_UPDATE_TITLE: `task-update-title`,
  TASK_UPDATE_POSITION: `task-update-position`,
  TASK_DELETE: `task-delete`,
  BASKET_CLEANUP: `basket-cleanup`,
  ELEMENT_DRAGOVER: `elementDragover`,
  ELEMENT_EDITED: `elementEdited`,
};
export const Status = {
  BACKLOG: `backlog`,
  PROCESSING: `processing`,
  DONE: `done`,
  BASKET: `basket`,
};
export const Key = {
  ENTER: 13,
  ESCAPE: 27,
};
export const STATE_EMPTY = `empty`;
export const Text = {
  EMPTY_TASK: `Перетащите карточку`,
  EMPTY_BASKET: `Корзина пуста`,
  NEW_TASK: `Новая задача`,
};
export const MIN_TITLE_LENGTH = 2;
export const StatusLabel = {
  [Status.BACKLOG]: `Бэклог`,
  [Status.PROCESSING]: `В процессе`,
  [Status.DONE]: `Готово`,
  [Status.BASKET]: `Корзина`,
};
export const HIDE_BLOCK_CLASS = `hidden-block`;
