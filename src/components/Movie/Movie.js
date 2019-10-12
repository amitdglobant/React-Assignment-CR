import React from 'react'
import './Movie.css'



export default function Movie(props){
    const {
        name,
        genre,
        rating,
        website
    } = props

    const nameClickHandler = () => {
      if(website){
        window.open(website, '_blank')
      }
    }

    return(
        <div className="movie">
            <div className={website ? 'movie-name-link': ''} onClick={nameClickHandler}>{name}</div>
            <div>({genre})</div>
            <div>
              <span className="fa fa-star" /> {rating}/5
            </div>
        </div>
    )
}
