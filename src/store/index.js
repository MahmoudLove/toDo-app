import { configureStore } from '@reduxjs/toolkit';
import {
  formsReducer,
  changeName,
  saveName,
  removeName,
} from './slices/forms-slice';
import {
  listsReducer,
  changeTask,
  addTask,
  removeTask,
  updateTask,
  saveAllTasks,
  removeAllTasks,
} from './slices/lists-slice';
const store = configureStore({
  reducer: {
    forms: formsReducer,
    lists: listsReducer,
  },
});
export { store, changeName, saveName, removeName };
export {
  changeTask,
  addTask,
  removeTask,
  updateTask,
  saveAllTasks,
  removeAllTasks,
};
