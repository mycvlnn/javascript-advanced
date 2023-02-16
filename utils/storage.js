const STORAGE_KEY = "TODO_LIST";

function storage(key = STORAGE_KEY) {
  const data = JSON.parse(localStorage.getItem(key)) || {};

  return {
    get() {
      return data;
    },
    save(values) {
      localStorage.setItem(key, JSON.stringify(values));
    },
  };
}

export default storage;
