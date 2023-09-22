import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector} from 'react-redux'
import { fetchMealById } from '../store/slices/fetchMealIdSlice';

import PropTypes from 'prop-types';

import { fetchMeal } from '../Api/fetchApi'; 

import Detail from '../components/Detail';

const MealDetail = () => {
    const { id } = useParams();
   
    const [meal, setMeal] = useState(null);
    const [status, setStatus] = useState(0);

    useEffect(() => {
        //window.scrollTo(0, 0);
        fetchMeal(id).then((data) => {
            setMeal(data.meals[0]);
            setStatus(1);
        });       
        //return () => {}
    }, []);

    if (status === 0) {
        return <div>Loading ...</div>;
      }
    

  return (
   <Detail meal={meal} />
  );

}

MealDetail.propTypes = {
    meal: PropTypes.shape({
      status: PropTypes.string.isRequired,
      error: PropTypes.string,
      meal: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    meal: state.meal,
  });

export default MealDetail