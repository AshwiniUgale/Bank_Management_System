import axios from "axios";

export async function addMoney(addmoneyData)
{
    try {
       const responce =await axios.put("http://127.0.0.1:5600/deposite",addmoneyData);
       return responce.data;
        
    } catch (error) {
        console.log(error);
    }
}