import { userModel } from "../model/userModel.js"


export const createUser = async (user) => {
   try {
    await userModel.create(user);
   } catch (error) {
    throw new Error(error.message.toString())
   }
}


export const getUserByEmail = async (email) =>{
    try {
        console.log('in repo',email);
       const user =  await userModel.findOne({email:email});
      
       return user !== null ? user : null
    } catch (error) {
        throw new Error(error.message.toString())
    }
} 