import { createStore, combineReducers } from "redux";
import bills from "../reducers/bills";
import filters from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      bills,
      filters,
    })
  );

  return store;
};
