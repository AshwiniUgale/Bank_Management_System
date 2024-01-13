import axios from "axios";

export async function loginData(loginData)
{
    try {
       const responce =await axios.post("http://127.0.0.1:5600/login",loginData);
       return responce.data;
        
    } catch (error) {
        console.log(error);
    }
}