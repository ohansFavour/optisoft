import Axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";

import coronaTypes from "./coronaTypes";
import { fetchFail, fetchSuccess,isFetchingData} from "./coronaActions"

function apiFunction(payload) {
    return Axios(payload)
      .then(response => ({ response }))
      .catch(error => ({ error }));
  }

function* fetchCoronaData(action) {
   yield put(isFetchingData());

   const {error, response} = yield call(apiFunction, {
       method: "GET",
       url: "https://covid19.mathdro.id/api"
   })
  

  if(response){
      console.log(response)
    yield put(fetchSuccess(response.data)); 
  }
  if(error){
    yield put(fetchFail());
  }


}
function* coronaWatcher() {
  yield takeLatest(coronaTypes.FETCH_DATA, fetchCoronaData);
}

export default coronaWatcher;