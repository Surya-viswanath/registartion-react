const mongoose=require('mongoose')
const formSchema =mongoose.Schema({
    fullname:{type:String},
    mothername:{type:String},
    fathername:{type:String},
    birthday:{type:Date},
    nationality:{type:String},
    gender:{type:String},
    residentcountry:{type:String},
    address:{type:String},
    email:{type:String},
    maritalstatus:{type:String},
    mobilenumber:{type:Number},
    secondnumber:{type:Number},
    // photo:{type:String},
});
const form = mongoose.model('form',formSchema);

module.exports=form;