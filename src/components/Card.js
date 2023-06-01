import React from 'react';
import {FcLike} from "react-icons/Fc";

const Card = ({course}) => {
  return (
    <div>
    <div>
        <img src ={course.image.url}>
        <div>
            <button>
            <FcLike fonstSize = "1.75"/>

            </button>
        </div>

        </img>
    </div>
    <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
    </div>

    </div>
  )
}

export default Card;