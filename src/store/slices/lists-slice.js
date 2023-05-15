import { createSlice, nanoid } from '@reduxjs/toolkit';
const listsSlice = createSlice({
  name: 'list',
  initialState: {
    newTask: '',
    lists: [],
    types: ['todo', 'inProgress', 'tommorow', 'done'],
  },
  reducers: {
    changeTask(state, action) {
      state.newTask = action.payload;
    },
    addTask(state, action) {
      const newTask = { ...action.payload, id: nanoid(), date: Date.now() };
      state.lists.push(newTask);
      localStorage.setItem('happyTasks', JSON.stringify(state.lists));
    },
    saveAllTasks(state, action) {
      state.lists = action.payload;
    },
    removeAllTasks(state, action) {
      localStorage.removeItem('happyTasks');
      state.lists = [];
    },
    updateTask(state, action) {
      const updated = state.lists.map((task) => {
        if (task.id !== action.payload.id) return task;
        return { ...task, type: action.payload.type };
      });
      localStorage.setItem('happyTasks', JSON.stringify(updated));
      state.lists = updated;
    },
    removeTask(state, action) {
      const updated = state.lists.filter((task) => task.id !== action.payload);
      state.lists = updated;
      localStorage.setItem('happyTasks', JSON.stringify(updated));
    },
  },
});
export const {
  changeTask,
  addTask,
  removeTask,
  updateTask,
  saveAllTasks,
  removeAllTasks,
} = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
