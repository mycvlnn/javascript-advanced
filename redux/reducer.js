const init = {
  cars: ["BMW", "Porche", "Mercedes"],
};

const defaultAction = {
  key: "",
  payload: "",
};

export default function reducer(state = init, action = defaultAction, args) {
  switch (action.key) {
    case "CREATE":
      break;

    default:
      return state;
  }
}
