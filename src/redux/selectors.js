import { createSelector } from "reselect";

 const selectCoronaData = state => state.corona;

 export const selectDataLoading = createSelector(
   [selectCoronaData],
   data => data.isLoading
 );

 export const selectData = createSelector(
    [selectCoronaData],
    data => data.data
  );

