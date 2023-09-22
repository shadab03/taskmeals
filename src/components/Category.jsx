import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom';
import card from '../styles/card.css';

import LikeBtn from './Layout/LikeBtn';
import { useCookies } from 'react-cookie';

const Category = ({category}) => {

  const [liked, setLiked] = useState(false); 
  const [cookies, setCookie] = useCookies(['category']);

  useEffect(() =>{
    let CookieData = [];    
    if(cookies.category == null)
    {
      CookieData.push(0);
    }
    else{
      CookieData = cookies.category;
    }

    if(CookieData != null && CookieData != undefined && CookieData.includes(category.idCategory)){
      setLiked(true);
    }

  },[])

  const LikeUnlikeClick = () =>{
    //e.preventDefault();
    console.log('LikeUnlikeClick');
   
    const newId = category.idCategory;
   
    //load previous Data
    let CookieData = [];    
    if(cookies == null || cookies == undefined || cookies.category == null)
    {
      CookieData.push(0);
    }
    else{
      CookieData = cookies.category;
    }
    
    if(!liked == true && ! CookieData.includes(newId)){
      CookieData.push(newId);
    }
    else{
      CookieData.splice(CookieData.indexOf(newId), 1);      
    }   

    setCookie('category', JSON.stringify(CookieData));
    setLiked(!liked);

    console.log(liked);
  }

  return (
    <div className='card'>
   
      <img className={'card-img'} src={category.strCategoryThumb} alt={category.strCategory} />
      <div className={'card-body'}>
        <h3 className={'card-title'}>
        <Link to={`/meals/${category.strCategory}`} className={'card-link'}>
          {category.strCategory}        
          </Link>
        </h3>
        <p><LikeBtn btnClick={LikeUnlikeClick} clsName={`item-addwishlist${(liked ? '-selected' : '')}`} name={`lk_${category.idCategory}`} /></p>
      </div>
     
  </div>
  )
}


export default Category