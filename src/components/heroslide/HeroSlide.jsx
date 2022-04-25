import React, { useState,useEffect } from 'react'
import './hero-slide.scss';

import SwiperCore,{Autoplay}from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';


import tmdbApi,{category,movieType} from '../../api/tmdbApi'
import APICONFIG from '../../api/apiConfig';
import apiConfig from '../../api/apiConfig';


function HeroSlide() {
 
   SwiperCore.use([Autoplay]);


   const [movieItems,setmovieitems]=useState([]);

   useEffect(() => {
    const getMovies = async () => {
        const params = {page: 1}
        try {
            const response = await tmdbApi.getMoviesList(movieType.popular, {params});
            setmovieitems(response.results.slice(1, 4));
            console.log(response);
        } catch {
            console.log('error');
        }
    }
    getMovies();
}, []);



  return (
    <div className='hero-slide'>
        <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        >
                      {
               movieItems.map((item,index)=>{
                   return(
                       <SwiperSlide key={index}>
                           {({isActive})=>{
                               <img src={apiConfig.originalImage(item.backdrop_path)} alt=''/>
                           }}

                       </SwiperSlide>
                   )    
               })
           }

             
        </Swiper>
    </div>
  )
}

export default HeroSlide