import axios from "axios";

export async function RegisterData(customerData)
{
    try {
       const responce =await axios.post("http://127.0.0.1:5600/register",customerData);
       return responce.data;
        
    } catch (error) {
        console.log(error);
    }
}