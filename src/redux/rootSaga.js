
import { all } from "redux-saga/effects";
import coronaSaga from "./corona-data/coronaSaga";
export default function* rootSaga() {
  yield all([
    
    coronaSaga(),
  ]);
}
