import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import API from "../../config/config";
import { GetCookies } from "../../Api/cookie";

const initialState = {
    isLoading: false,
    isError: false,
    categories: [],
    liked: []
};


export const fetchCategories = createAsyncThunk("categories", async() =>{
  console.log('fetch call')
  const response = await fetch(`${API.BASE_URL}/${API.CATEGORIES_ENDPOINT}`);
  return response.json();
})


export const fetchLiked = createAsyncThunk("liked", async() =>{
  const response = await GetCookies('categories'); 
  return response.json();
})


const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) =>{
    builder.addCase(fetchCategories.pending, (state,action)=>{
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state,action)=>{
      state.isLoading =false; 
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state,action)=>{
      state.isError = true;
      console.log('Error', action.payload);
    });

    builder.addCase(fetchLiked.pending, (state,action)=>{
      state.isLoading = true;
    });
    builder.addCase(fetchLiked.fulfilled, (state,action)=>{
      state.isLoading =false; 
      state.liked = action.payload;
    });
  }, 
});

//export const { loadCategories, categoriesReceived } = categoriesSlice.actions;

export default categoriesSlice.reducer;