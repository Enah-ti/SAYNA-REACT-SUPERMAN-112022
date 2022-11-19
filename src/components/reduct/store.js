import { createStore } from "reduct";
import rootReducers from "./redu";

const store = createStore(rootReducers);
export default store;