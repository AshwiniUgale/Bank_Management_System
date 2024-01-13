import axios from "axios";

export async function featchData()
{
    try {
       const responce =await axios.get("http://127.0.0.1:5600/signup");
       return responce.data;
        
    } catch (error) {
        console.log(error);
    }
}

export async function saveData(userdata)
{
    try {
       const responce =await axios.post("http://127.0.0.1:5600/signup",userdata);
       return responce.data;
        
    } catch (error) {
        console.log(error);
    }
}
