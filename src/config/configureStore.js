import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export default function configureStore() {
  const initState = {};
  const middleware = [thunk];
  return createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
