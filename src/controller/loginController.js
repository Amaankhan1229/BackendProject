import { getUserByEmail } from "../repo/userRepo.js";
import { verifiyPwd } from "../shared/utils/bcryptUtils.js";
import { createJWTToken } from "../shared/utils/JWTUtils.js";



export const loginController = async (req,resp)=>{
    try {
        const {email,password} = req.body;
        
        const user = await getUserByEmail(email)
        console.log(user);
        if(verifiyPwd(password,user.password) === true){
            const customUser = {
                userId:user.userId,
                userName: user.userName,
                email:user.email
            }
            const token = createJWTToken(customUser);
            return resp.cookie('accessToken',token).redirect('/')
        }
        else{
            throw new Error('Invalid Email Or Password')
        }
        
    } catch (error) {
        resp.redirect(`/error?message=${error.message.toString()}`)
    }    
}
// jsonwebtoken- > authentication->  user login -> sucess -> token -> frontend -> backend ->  

// localstorage-> sessionstorage -> cookie 