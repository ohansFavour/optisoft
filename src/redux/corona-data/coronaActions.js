import coronaTypes from "./coronaTypes";

export const fetchData = ()=>({
    type: coronaTypes.FETCH_DATA
})

export const isFetchingData =()=>({
    type: coronaTypes.IS_FETCHING_DATA
})

export const fetchSuccess=(data)=>({
  type: coronaTypes.FETCH_SUCCESS,
  payload: data
})

export const fetchFail = ()=>({
    type: coronaTypes.FETCH_FAILURE
})