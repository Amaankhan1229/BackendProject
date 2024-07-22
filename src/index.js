import express from "express"
import http from 'http'


// initialize the server
const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// server.use(express.static("public"))
app.set("view engine",'ejs');
// app.engine('ejs','view')

app.get("/",(req,resp)=>{
    resp.render('../view/index.ejs').status(200)
})

app.get("/about",(req,resp)=>{
    resp.render("../view/about.ejs")
})

app.get("/login",(req,resp)=>{
    resp.render("../view/login.ejs",{
        title:"Login"
    })
})

const UserVerify = null;

app.get("/dashboard",(req,resp)=>{
    if(user !== null){
        resp.render("../view/dashboard.ejs",{
            email:user.email
        })
    }
    else{
        resp.redirect("/login")
    }
})


const userDB = []
const user = {

}


app.post("/login",(req,resp)=>{
   const {email ,password} = req.body
  if(email === "amantyagi@gmail.com"){
    if(password==="12345678"){
        user = {
            email :email
        };
        resp.redirect("/dashboard")
    }
    else{
        resp.send("Invalid Password")
    }
  }
  else{
    resp.send("Invalid Email")
  }
    
})

server.listen(4500,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("server started at port 4500")
    }
})

