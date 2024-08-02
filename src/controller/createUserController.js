import { createUser, getUserByEmail } from "../repo/userRepo.js"
import { hashPwd } from "../shared/utils/bcryptUtils.js";
import { uniqueId } from "../shared/utils/uuidUtils.js";
import {z} from 'zod'


const createUserSchema = z.object({
    userName : z.string().min(3,{message:"username is required"}),
    email:z.string().email({message:"email is required"}),
    password:z.string().min(4).max(12)
})



export const createUserController = async (req,resp) =>{
    try {
        const {userName,email,password} = req.body

        // validation -> checks data coming correct

        try {
             createUserSchema.parse({userName:userName,email:email,password:password});
        } catch (error) {
            console.log(error.message.toString());
            throw new Error(error.message.toString())
        }

        const userExist = await getUserByEmail(email);
        if(userExist !== null){
            throw new Error("Email Already Exist")
        }



        const user = {
            userId:uniqueId(),
            userName:userName,
            email:email,
            password:hashPwd(password)
        }



       await createUser(user);
       resp.redirect('/login')
    } catch (error) {
        resp.redirect(`/error?message=${error.message.toString()}`)
    }

}