import React, {useContext} from 'react'
import { Routes, Route  } from 'react-router-dom'

import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Meals from '../pages/Meals'
import MealDetail from '../pages/MealDetail'
import RandomMeal from '../pages/RandomMeal'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/categories" element={<Menu/>} exact />
      <Route path="/meals/:categoryType" element={<Meals />} exact />
      <Route path="/meal/:id" element={ <MealDetail />} exact />
      <Route path="/random" element={ <RandomMeal />} exact />
     
    </Routes>
  )
}

export default AllRoutes