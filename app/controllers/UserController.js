const express=require('express')
const router=express.Router()
const {User}=require('../model/User')
//localhost:3000/users/register
router.post('/register',function(req,res)
{
    const body=req.body
    // console.log(body)
    const user=new User(body)

    user.save()
        .then(function(user){
            res.send(user)
        })
        .catch(function(err){
            res.send(err)
        })
    
    // res.send('Regesiter')
})
router.post('/login',function(res,req)
{
    const body=req.body
    console.log(body)
    User.findOne({email:body.email})
    .then(function(user){
        //if user email is not present
        if((!user))
        {
            res.status('404').send()
        }
        else{

        }
        
    })
    .catch(function(err){
        res.send(err)
    })
    // User.findByCredentials(body.email, body.password)
    // .then(function (user) {
    //     return user.generateToken()
    // })
    // .then(function (token) {
    // //    res.send({ token })
    //     res.setHeader('x-auth',token).send({})
    // })
    // .catch(function (err) {
    //     res.send(err)
    // })
})

module.exports={
    usersRouter:router
}