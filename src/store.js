import root from "./reducers";
import { createStore } from "redux";

const store = createStore(root);
export default store