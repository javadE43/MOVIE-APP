import axios from "axios";
import queryString from 'query-string';
import APICONFIG from './apiConfig';



const axiosClient =axios.create({
 
    baseURL:APICONFIG.baseUrl,
    headers:{
        'Content-type':'application'
    },

    paramsSerializer:params=>queryString.stringify({...params,api_key:APICONFIG.apikey})


});


axiosClient.interceptors.request.use(async(config)=>config);

axiosClient.interceptors.response.use((res)=>{
   if (res && res.data) {
       return res.data;
   }


   return res;


},

   (error)=>{
       throw error;
});


export default axiosClient