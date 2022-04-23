import React from "react";
import {Route,Routes}from 'react-router-dom'

import Home from '../pages/Home';
import Catelog from '../pages/Catelog';
import Detail from '../pages/Detail';


function RoutesCOM() {
  return (
    <div>
         {/* <Routes> */}
          <Route
               path="/"
               element={<Home/>}
               />
              <Route
               path="/:category/search/:keyword"
               element={<Catelog/>}
               />
              <Route
               path="/:category/:id"
               element={<Detail/>}
               />
               <Route
               path="/:category"
               element={<Catelog/>}
               />
         {/* </Routes> */}

    </div>
  )
}

export default RoutesCOM