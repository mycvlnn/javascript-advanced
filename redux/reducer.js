import storage from "../utils/storage.js";

const init = {
  filter: "all",
  filters: {
    all() {
      return true;
    },
    completed(todo) {
      return todo.completed;
    },
    active(todo) {
      return !todo.completed;
    },
  },
  indexEdit: null,
  todos: storage().get().todos || [],
};

const actions = {
  addTask(state, args) {
    const value = args[0];
    if (value.trim()) {
      const task = {
        name: value,
        completed: false,
      };

      state.todos.unshift(task);
    }
  },
  doneTask(state, args) {
    const [indexTask] = args;
    const todo = state.todos[indexTask];
    todo.completed = !todo.completed;
  },
  deleteTask(state, args) {
    const [indexTask] = args;
    state.todos.splice(indexTask, 1);
  },
  setEditIndex(state, args) {
    const [indexEdit] = args;
    state.indexEdit = indexEdit;
  },
  updateTask(state, args) {
    const [value, indexEdit] = args;
    const todo = state.todos[indexEdit];
    if (value.trim()) {
      todo.name = value;
      state.indexEdit = null;
    }
  },
  cancelEdit(state) {
    state.indexEdit = null;
  },
  filter(state, args) {
    state.filter = args[0];
  },
  clearCompleted(state) {
    state.todos.forEach((todo) => {
      todo.completed = false;
    });
  },
  checkAll(state) {
    state.todos.forEach((todo) => {
      todo.completed = true;
    });
  },
};

export default function reducer(state = init, action, args) {
  console.log(state);
  actions[action] && actions[action](state, args);

  storage().save(state);

  return state;
}
