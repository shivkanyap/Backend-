const express=require('express')
// const router=express.Router()
const {mongoose}=require('./config/database')
const {routes}=require('./config/routes')



const app=express()
// const {userRouter}=require('./app/controllers/UserController')


const port=3000
app.use(express.json())
app.use('/',routes)

// app.use('/users',userRouter)

app.listen(port,function(){
    console.log(' lisiting on port',port)
})