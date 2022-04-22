import {buymob} from './redux/index';
import{useSelector,useDispatch,connect} from 'react-redux';


function App() {
  return (
    <div className="App">
          <h1>hello</h1>       
    </div>
  );
}


const mapDispatchToProps=(dispatch)=>{
  return({
       dispatch:(info)=>dispatch(buymob(info))
  })
}


export default connect()(App);
