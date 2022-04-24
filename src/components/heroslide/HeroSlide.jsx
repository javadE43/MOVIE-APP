import React, { useState,useEffect } from 'react'
import './hero-slide.scss';


import tmdbApi,{category,movieType} from '../../api/tmdbApi'
import APICONFIG from '../../api/apiConfig';



function HeroSlide() {
 
   const [movieItems,setmovieitems]=useState([]);

   useEffect(() => {
        const getMovies = async ()=>{
            const params={page:1};
            try{
                const res = await tmdbApi.getMoviesList(movieType.popular,{params});
                setmovieitems(res.results.slice(0,4));
                console.log(res)

            }catch{
                console.log(params)
            }
        }     
        getMovies();
   }, [])
   



  return (
    <div className='hero-slide'>
        HeroSlide
    </div>
  )
}

export default HeroSlide