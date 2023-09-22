import React,{useEffect} from 'react'
import Category from '../components/Category';

import { useDispatch, useSelector} from 'react-redux'
import { fetchCategories, fetchLiked } from '../store/slices/categoriesSlice';

import '../styles/grid.css'

const Menu = () => {
  const dispatch = useDispatch(); 
  const state = useSelector((state) => state?.categories?.categories);
  
  useEffect(() =>{   
    dispatch(fetchCategories());

    dispatch(fetchLiked())
  },[]);
  
    //console.log(state);
  
    return (
      <>
        <h2> Categories</h2>
        <div className={'grid grid-column grid-gap-1/5'}>     
            {state.categories ? state.categories.map((category) => <Category key={category.idCategory} category={category} />) : 'No categories'} 
        </div>
      </>
   
  )
}

export default Menu

