import React, { useEffect, useRef } from 'react'
import './header.scss';


import {Link,useLocation} from 'react-router-dom'
import logo from '../../assets/tmovie.png';


const headerNav=[

  {
   
    display:'Home',
    path:'/'

  },
  {
   
    display:'Movies',
    path:'/movie'

  },
  {
   
    display:'TV Serise',
    path:'/tv'

  },
  
   
]



function Header() {
  const {pathname} = useLocation();
  const headerRef=useRef(null);

  const active =headerNav.findIndex((e)=>e.path === pathname);
  console.log(active)

useEffect(()=>{
        const shrinkHeader=()=>{
           
          if(document.body.scrollTo > 100 || document.documentElement.scrollTo >100){
             headerRef.current.classList.add('shrink');
          }else{
            headerRef.current.classList.remove('shrink');

          }

        }
        window.addEventListener('scroll',shrinkHeader);
  return ()=>{
        window.removeEventListener('scroll',shrinkHeader)
  };
},[])

  return (
    <div className='header' ref={headerRef}>
          <div className="header__wrap container">
              <div className="logo">
                  <img src={logo} alt="" />
                  <Link to='/'>tMovie</Link>
              </div>
              <ul className="header__nav">
                {
                  headerNav.map((e,i)=>{
                   
                    return(
                        <li key={i} className={`${i===active?'active':''}`}>
                            <Link to={e.path}>
                               {e.display}
                           </Link>
                        </li>
                    
                    )  
                    
                  })
                }
              </ul>
          </div>

    </div>
  )
}

export default Header