import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {fetchMeals} from "../../Api/fetchApi";

const initialState = {
    isLoading: false,
    isError: false,
    meals: [],
    mealCategory:''
};

export const fetchMealsByCategory = createAsyncThunk("meals", async(category) =>
{       
    const response = fetchMeals(category);   
    return response;
  })

export const changeCategory = createAsyncThunk("changecategory", async({category}) => {
    //type: 'change_category',
    return category;
  });

const fetchMealSlice = createSlice({
    name: "meals",
    initialState,
    extraReducers: (builder) =>{
      builder.addCase(fetchMealsByCategory.pending, (state,action)=>{
        state.isLoading = true;
      });
      builder.addCase(fetchMealsByCategory.fulfilled, (state,action)=>{
        state.isLoading =false; 
        state.meals = action.payload;
      });
      builder.addCase(fetchMealsByCategory.rejected, (state,action)=>{
        state.isError = true;
        console.log('Error', action.payload);
      });
      builder.addCase(changeCategory.fulfilled, (state,action)=>{
        state.isLoading =false; 
        state.mealCategory = action.payload;
      });
    }, 
  });


  export default fetchMealSlice.reducer;