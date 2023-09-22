
import categoriesSlice from './slices/categoriesSlice';

import { configureStore } from '@reduxjs/toolkit'
import fetchMealSlice from './slices/fetchMealSlice';
import fetchMealIdSlice from './slices/fetchMealIdSlice';

const configStore = configureStore({
    reducer: {
        categories: categoriesSlice, 
        meals: fetchMealSlice, 
        mealDetail : fetchMealIdSlice
    }
});

export default configStore;
