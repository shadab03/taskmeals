import React,{ useState} from 'react'
import '../../styles/likebtn.css'

import { FaHeart } from 'react-icons/fa'

const LikeBtn = ({clsName, name, btnClick}) => {
  return(   
    <a id={name} onClick={btnClick}>
       <FaHeart className={`${clsName}`}></FaHeart>
    </a>
  )
}

export default LikeBtn