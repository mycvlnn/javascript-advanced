// Ứng dụng closure viết code ngắn hơn
function createLogger(prefix) {
  return function (message) {
    return `[${prefix}]: ${message}`;
  };
}

const loggerInfo = createLogger("Info");

console.log(loggerInfo("Logger is running...")); // [Info]: Logger is running...
console.log(loggerInfo("Register running...")); // [Info]: Register running...
console.log(loggerInfo("Submit user...")); // [Info]: Submit user...

// Ứng dụng 2: hàm lưu dữ liệu vào local storage

function createStorage(keyStorage) {
  let storage = JSON.parse(localStorage.getItem(keyStorage)) ?? {}; // private: bên ngoài không thể truy cập

  // private bên ngoài không thể truy cập
  function save() {
    localStorage.setItem(keyStorage, JSON.stringify(storage));
  }

  // chỉ public những gì an toàn ra bên ngoài
  return {
    get(key) {
      return storage[key];
    },
    set(key, value) {
      storage[key] = value;
      save();
    },

    del(key) {
      delete storage[key];
      save();
    },
  };
}

const infoUser = createStorage("infoUser");

console.log(infoUser.get("fullName"));

infoUser.set("fullName", "CHris");
infoUser.set("age", 18);
infoUser.del("age");
