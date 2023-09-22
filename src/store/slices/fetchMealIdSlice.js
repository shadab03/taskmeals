import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {fetchMeal} from "../../Api/fetchApi";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    mealDetail: {},
};

export const fetchMealById = createAsyncThunk("mealDetail", async(id) =>
{       
    const response = await fetchMeal(id);  
    return response;
});


const fetchMealIdSlice = createSlice({
    name: "mealDetail",
    initialState,
    extraReducers: (builder) =>{
      builder.addCase(fetchMealById.pending, (state,action)=>{
        state.isLoading = true;
      });
      builder.addCase(fetchMealById.fulfilled, (state,action)=>{
        state.isLoading =false; 
        state.isSuccess=true;
        state.mealDetail = action.payload;
      });
      builder.addCase(fetchMealById.rejected, (state,action)=>{
        state.isError = true;
        console.log('Error', action.payload);
      });     
    }, 
  });


  export default fetchMealIdSlice.reducer;