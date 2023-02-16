import { createStore } from "../lib/core.js";
import reducer from "./reducer.js";
import logger from "../utils/logger.js";

const { attach, connect, dispatch } = createStore(logger(reducer));

window.dispatch = dispatch;

export { attach, connect };
