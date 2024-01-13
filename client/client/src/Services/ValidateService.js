import axios from "axios";

export async function ValidateData(validData)
{
    try {
       const responce =await axios.post("http://127.0.0.1:5600/validate",validData);
       return responce.data;
        
    } catch (error) {
        console.log(error);
    }
}