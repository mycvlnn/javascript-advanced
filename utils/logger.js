function logger(reducer) {
  return function (prevState, action, args) {
    console.group(action);
    console.log("Prev state:", prevState);
    const nextState = reducer(prevState, action, args);
    console.log("Next State: ", nextState);
    console.groupEnd();

    return nextState;
  };
}

export default logger;
