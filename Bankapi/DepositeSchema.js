import mongoose, { Schema } from "mongoose";

const DepoSchema=new Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    
    accountno:{
        type:String,
        require:true
    },
    
   accounttype:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    gender:{
        type:Number,
        require:true
    },
   
    adharno:{
        type:Number,
        require:true
    },
    occupation:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    balance:{
        type:Number,
        default:0
    },
   
   
})

export const Depoinfo=mongoose.model("Deposite",DepoSchema);