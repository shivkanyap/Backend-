const bcryptjs=require('bcryptjs')

const passsword='kanya123'

bcryptjs.genSalt(10)
.then(function(salt){
    console.log(salt)
})