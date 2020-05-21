import coronaTypes from "./coronaTypes";
  
  const INITIAL_STATE = {
    data:[],
    isLoading: false,
    error: undefined
  };
  
  const coronaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case coronaTypes.FETCH_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: true
        }

        case coronaTypes.FETCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: undefined,
          data: action.payload
        }

        case coronaTypes.IS_FETCHING_DATA:
        return {
          ...state,
          isLoading:true
        }
       
      default:
        return state;
    }
  };
  export default coronaReducer;
  