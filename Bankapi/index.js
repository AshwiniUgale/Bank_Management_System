import express, { request, response } from 'express';
import mongoose from 'mongoose';
import {  User } from './SignupSchema.js';
import cors from 'cors';

import { Registerinfo } from './RegistrationScema.js';
import { Depoinfo } from './DepositeSchema.js';

const app=express();
app.use(cors());

app.use(express.urlencoded({extended:false}))

app.use(express.json());

const connectDB=async()=>{
    try {

       await mongoose.connect('mongodb://127.0.0.1:27017/BankDataBase');//it is used for create databse connection institudedb is databse name
      console.log("database connection created !");
        
    } catch (error) {
        console.log(error);
    }
}

app.get('/signup',async(request,response)=>{
    try{
    const personData= await User.find();//it show all data inside collection
     
    response.send({personData:personData});
     
    } catch (error) {
     response.send({messang:"data not fount"});
    }
 })

app.post('/signup',async(request,response)=>{
    try {
        const check=await User.findOne({username:request.body.username})
         
        if(check){
            response.send({message:"User already exist"});
        }else{

        const reqbody=request.body;
        const userData=new User(reqbody);//new Student()craete object of the class and access data from request body
        await userData.save();//save faunction used for insert data
        
        response.send({message:"Registration Successfully"});
        }
    } catch (error) {
        response.send(error);
    }
})

app.delete('/signup/:username',async(request,response)=>{
    try {
       await Person.deleteOne({username:request.params.username});//parameter for matching the data
       response.send({message:"deleted record"});
    } catch (error) {
       response.send({messang:error});
    }
})

//for login authentication
app.post('/login',async(request,response)=>{
    
      try {
        const check= await User.findOne({email:request.body.email})
        if(check.email){
            if(check.password===request.body.password){
                response.send({message:"Login Successful"});
            } else{
                response.send({message:"password incorrect"});
            }
        }
        
    } catch (error) {
        response.send({message:"incorrect Details"});
    }

    
})

//for Balance Checking

app.post('/checkbal',async(request,response)=>{
    try {
        const check=await Registerinfo.findOne({accountno:request.body.account})
        if(check){
            if(check.addharno==request.body.addhar)
            {
                response.send({message:"current balance ="+check.balance});
            }else{
                response.send({message:"Addhar no incorrect"});
            }
        }else{
            response.send({message:"Account not found"});
        }
    } catch (error) {
       console.log(error);
    }
})


//for validateUser 

app.post('/validate',async(request,response)=>{
    const check= await Registerinfo.findOne({accountno:request.body.account})
    

    try {
        if(check.accountno){
            if(check.addharno==request.body.addhar){
                response.send({message:"validate Successful"});
            } else{
                response.send({message:"Addhar number incorrect"});
            }
        }
        
    } catch (error) {
        response.send({message:"incorrect Details"});
    }

    
})



//for Add money
app.put('/deposite',async(request,response)=>{
    try {
        const check= await Registerinfo.findOne({accountno:request.body.accountno});
        if(check){
            if(check.addharno===request.body.addhar){
                const curBal=parseInt(check.balance);
                const depoBal=parseInt(request.body.deposit);
            const newBal=curBal+ depoBal
            await Registerinfo.updateOne({ accountno: request.body.accountno },{$set:{balance:newBal}});
            response.send({message:"Deposit Successfully"});
            }else{
                response.send({message:"Addhar number incorrect "});
            }
        }else{
            response.send({message:"Invalid details"});
        }
    }
    catch (error) {
        console.log(error)
        
    }
    
});





//for Registration(create new account)
//for featch data

app.get("/register",async(request,response)=>{
          
    
        try{
        const userData= await Registerinfo.find();//it show all data inside collection
       response.send({personData:userData});
         }
        catch (error) {
        response.send({messang:"Data not fount"});
       }
    
})

//for inserting data
app.post("/register",async(request,response)=>{


    try {
        

         const reqbody=request.body;
        const userData=new Registerinfo(reqbody);//new Student()craete object of the class and access data from request body
        await userData.save();//save faunction used for insert data
        response.send({message:"Registration Successfully"});
        
            }catch (error) {
        response.send({message:"failed"});
    }

})





app.listen(5600,()=>{
    console.log("server created");
   connectDB();
})