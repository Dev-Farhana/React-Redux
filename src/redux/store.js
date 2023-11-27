// import {createStore} from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/reducers";

export const store = createStore ( rootReducer);