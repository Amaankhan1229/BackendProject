
import {Router} from 'express'
import { dashboardController, errorController, indexPageController, loginPageController, signUpPageController } from '../controller/pageController.js'
import { ensureAuth } from '../shared/utils/JWTUtils.js'

const pageRoutes = Router()

pageRoutes.get('/',(req,resp)=>indexPageController(req,resp))


pageRoutes.get('/login',(req,resp)=>loginPageController(req,resp))

pageRoutes.get('/signup',(req,resp)=>signUpPageController(req,resp));

pageRoutes.get('/dashboard',ensureAuth,(req,resp,next)=>dashboardController(req,resp,next))

pageRoutes.get('/error',(req,resp)=>errorController(req,resp))
// middleware 
export default pageRoutes