// model -> sql(document customize) + nosql(document update) 

// schema -> table -> predefine


import mongoose, { Schema, SchemaTypes } from "mongoose";

// user = {
//     userId :
//     userName:
//     email:
//     password:
//     status: value 

// }

// Schema is a class for create structure 
const userSchema = new mongoose.Schema({
    userId : {type:String,required:true,unique:true},
    userName : {type:String,required:true,max:25},
    email: {type:String,required:true,unique:true},
    password :{type:String,required:true , min:6 },
    status: {type:Boolean , default : false},
}) 

export const userModel = mongoose.model("users",userSchema);

