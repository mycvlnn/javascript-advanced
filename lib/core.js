export default function html([first, ...strings], ...values) {
  const data = values.reduce(
    (acc, curr) => {
      return acc.concat(curr, strings.shift());
    },
    [first]
  );

  return data.filter((item) => (item && item !== true) || item === 0).join("");
}

export function createStore(reducer) {
  let state = reducer();
  const roots = new Map();

  function render() {
    for (const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }

  return {
    /**
     * Gắn component vào view và render ra giao diện
     * @param {Function} component : Là một hàm trả về JSX (thực chất là string)
     * @param {Element} root : Thành phần gốc của ứng dụng
     */
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    // từ một component => connect đến store để lấy dữ liệu.
    connect(selector = (state) => state) {
      return (component) => {
        return (props, ...args) => {
          return component(Object.assign({}, props, selector(state), ...args)); // giá trị mà component sẽ nhận được;
        };
      };
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}
