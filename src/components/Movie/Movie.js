import React from 'react'
import './Movie.css'



export default function Movie(props){
    const {
        name,
        genre,
        rating
    } = props

    return(
        <div className="movie">
            {/* TODO:: Convert this div into a link (website filled), 
          on click, the link should open in new tab
          */}
            <div>{name}</div>
            <div>({genre})</div>
            <div>
              <span className="fa fa-star" /> {rating}/5
            </div>
        </div>
    )
}
