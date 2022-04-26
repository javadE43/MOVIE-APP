import React, { useState,useEffect,useRef } from 'react'
import './hero-slide.scss';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





import tmdbApi,{category,movieType} from '../../api/tmdbApi'
import APICONFIG from '../../api/apiConfig';
import apiConfig from '../../api/apiConfig';


function HeroSlide() {
 


   const [movieItems,setmovieitems]=useState([]);

   useEffect(() => {
    const getMovies = async () => {
        const params = {page: 1}
        try {
            const response = await tmdbApi.getMoviesList(movieType.popular, {params});
            setmovieitems(response.results.slice(1, 4));
            // console.log(response);
        } catch {
            console.log('error');
        }
    }
    getMovies();
}, []);



  return (
    <>
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

     {
         movieItems.map((item,i)=>{
                        return(
                            <SwiperSlide>
               
                            <img src={apiConfig.originalImage(item.backdrop_path)} alt=''/>
             
                         </SwiperSlide>
                        )   
         })
     }

    </Swiper>
    </>
  )
}

export default HeroSlide


// {
//     movieItems.map((item,index)=>{
//         return(
//             <SwiperSlide key={index}>
//                 {({isActive})=>{
//                     <img src={apiConfig.originalImage(item.backdrop_path)} alt=''/>
//                 }}

//             </SwiperSlide>
//         )    
//     })
// }