import axios from "axios";

export async function checkBalace(ViewData)
{
    try {
       const responce =await axios.post("http://127.0.0.1:5600/checkbal",ViewData);
       return responce.data;
        
    } catch (error) {
        console.log(error);
    }
}