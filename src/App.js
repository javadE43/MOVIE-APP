import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import {Route, Routes} from 'react-router-dom'


import Header from './components/header/Header';
import Footer from './components/footer/Footer';


import RoutesCOM from './config/RoutesCOM';

function App() {
  return (
          
    <div>
       <Header/>
       <RoutesCOM/>
       <Footer/>
    </div>
  );
}



{/* <Routes>
<Route render ={props=>(
<>
<Header {...props}/>
<RoutesCOM/>
<Footer/>
</>
)}/>
</Routes> */}

export default App;