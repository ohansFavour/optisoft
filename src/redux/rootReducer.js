import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import corona from "./corona-data/coronaReducer"

const persistConfig = {
  key: "root",
  storage
};

const appReducer = combineReducers({
 corona
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default persistReducer(persistConfig, rootReducer);
