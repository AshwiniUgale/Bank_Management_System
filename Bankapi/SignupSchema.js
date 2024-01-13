import mongoose, { Schema } from "mongoose";

const signupSchema=new Schema({
    username:String,
    email:String,
    phone:Number,
    password:String
})

export const User=mongoose.model("signup",signupSchema);