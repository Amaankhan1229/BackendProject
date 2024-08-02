import { request, response } from 'express';
import JWT from 'jsonwebtoken'

 const secret = "47638t1gi5942yhvfi3oh2b4ip5g95498943p"

export const createJWTToken = (user)=>{
   
   const token = JWT.sign(user,secret,{expiresIn:'1h'});
   return token;
}

// token  -> user authecate -> generate string -> developer -> verify 
// -> details about which use  in token 

export const ensureAuth=(req, resp, next)=>{
   try {
    console.log("Hello")
    // request.headers.authorization
    
    // code 
    const accessToken = req.headers.cookie
    const token = accessToken && accessToken.split('=')[1]
     
    JWT.verify(token,secret,(err,user)=>{
       if(user){
        req.decoded = user
        next();
       }
       else{
        throw new Error('No Access Token Found !Please Login')
       }
       
    })
  
   } catch (error) {
    resp.send(error.message.toString());
   }
}