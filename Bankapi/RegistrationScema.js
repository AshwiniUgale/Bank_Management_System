import mongoose, { Schema } from "mongoose";

const RegisterSchema=new Schema({
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
        type:String,
        require:true
    },
    addharno:{
        type:String,
        require:true
    },
    occupation:{
        type:String,
        require:true
    },
    dateofbirth:{
        type:String,
        require:true
    },
    balance:{
        type:Number,
        default:0
    },
    accountno:{
        type:String,
        require:true
    }
   
})

export const Registerinfo=mongoose.model("Registration",RegisterSchema);

