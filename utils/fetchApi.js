import axios from "axios";

 export const baseUrl ='https://bayut.p.rapidapi.com'

 export const fetchApi = async(url) => {
     const { data } = await axios.get((url), {
         
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '0c94ef0fa5msh5f927f011a14116p12b6c0jsnabdd8b1234c4'
        }
     })
     return data;
 }