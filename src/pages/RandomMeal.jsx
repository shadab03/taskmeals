import React,{useState, useEffect} from 'react'

import { randomMeal } from '../Api/fetchApi'; 

import Detail from '../components/Detail';

const RandomMeal = () => {

    const [meal, setMeal] = useState(null);
    const [status, setStatus] = useState(0);

    useEffect(() => {
        //window.scrollTo(0, 0);
        randomMeal().then((data) => {
            setMeal(data.meals[0]);
            setStatus(1);
        });       
        
    }, []);

    if (status === 0) {
        return <div>Loading ...</div>;
      }
  return (
    <Detail meal={meal} />
  )
}

export default RandomMeal