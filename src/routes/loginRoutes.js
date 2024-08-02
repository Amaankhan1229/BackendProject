import {Router} from 'express'
import { loginController } from '../controller/loginController.js';
import { createUserController } from '../controller/createUserController.js';

const loginRoutes = Router();

loginRoutes.post('/login', (req,resp,next)=>loginController(req,resp));

loginRoutes.post('/createUser',(req,resp)=>createUserController(req,resp))

//  req , resp ,next
// request  - call to backend by client
// response - information by backend to client
// next -> in backend what is next 

// (1)=>{},(2)=>{3},(4)=>{},(5)=>{}

export default loginRoutes