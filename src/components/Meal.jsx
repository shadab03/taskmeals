import React, {useState, useEffect} from 'react'
import card from '../styles/card.css';
import styles from '../styles/Meal.module.css';
import { Link } from 'react-router-dom';

import LikeBtn from './Layout/LikeBtn';
import { useCookies } from 'react-cookie';

const Meal = ({meal}) => {
  const [liked, setLiked] = useState(false); 
  const [cookies, setCookie] = useCookies(['meals']);

  useEffect(() =>{
    let CookieData = [];    
    if(cookies.category == null)
    {
      CookieData.push(0);
    }
    else{
      CookieData = cookies.meals;
    }

    if(CookieData != null && CookieData != undefined && CookieData.includes(meal.idMeal)){
      setLiked(true);
    }

  },[])

  const LikeUnlikeClick = () =>{
    //e.preventDefault();
    console.log('LikeUnlikeClick');
   
    const newId = meal.idMeal;
   
    //load previous Data
    let CookieData = [];    
    if(cookies == null || cookies == undefined || cookies.meals == null)
    {
      CookieData.push(0);
    }
    else{
      CookieData = cookies.meals;
    }
    
    if(!liked == true && ! CookieData.includes(newId)){
      CookieData.push(newId);
    }
    else{
      CookieData.splice(CookieData.indexOf(newId), 1);      
    }   

    setCookie('meals', JSON.stringify(CookieData));
    setLiked(!liked);

    console.log(liked);
  }

  return (
    <div className={'card'}>
   
      <img className={'card-img'} src={meal.strMealThumb} alt={meal.strMeal} />
      <div className={'card-body'}>
        <p className={'card-subtitle'}>
          <span>Serves</span>
          <span className={styles['bold-info']}>5</span>
          <span className={styles.divider}>|</span>
          <span>Prep time</span>
          <span className={styles['bold-info']}>20 mins</span>
        </p>
        <h3 className={'card-title'}>
        <Link to={`/meal/${meal.idMeal}`} className={'card-link'}>
          {meal.strMeal}
          </Link>
          <LikeBtn style={{paddingTop: '10px'}}  btnClick={LikeUnlikeClick} clsName={`item-addwishlist${(liked ? '-selected' : '')}`} name={`lk_${meal.idMeal}`} />
        </h3>
      </div>
    
  </div>
  )
}

export default Meal