const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema
const bcryptjs=require('bcryptjs')

const  userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        validate:{
                validator:function(value){
                    return validator.isEmail(value)
                },
                message:function(){
                    return 'invalid email'
                }
        }
        

    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:128

    }
})
userSchema.pre('save',function(next){
    const user=this
    bcryptjs.genSalt(10)
    .then(function(salt){
        bcryptjs.hash(user.password,salt)
        .then(function(encryptedpassword){
            user.password=encryptedpassword
            next()
        })
    })
})
const User=mongoose.model('User',userSchema)
module.exports={
    User
}