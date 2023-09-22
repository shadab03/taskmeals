

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Meal from '../components/Meal';
import grid from '../styles/grid.css';

import { useDispatch, useSelector} from 'react-redux'
import { changeCategory, fetchMealsByCategory } from '../store/slices/fetchMealSlice';

import {fetchMeals} from '../Api/fetchApi'

const Meals = () => {
    //console.log("meals form");
    const { categoryType } = useParams();
   
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state.meals.meals);
    
    useEffect(() =>{         
        dispatch(fetchMealsByCategory(categoryType));
    
      },[]);
  
    return (
        <> 
        <h2> Meals</h2>
        <div className={'grid grid-column grid-gap-1/5'}>        
            {state.meals && state.meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}
        </div>
      </>
    );
  };

  export default Meals;