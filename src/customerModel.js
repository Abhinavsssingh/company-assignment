const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
  firstName:String,
  lastName:String,
  mobileNumber:{type:String,unique:true},
  DOB:Date,
  emailId:{type:String,unique:true},
  address:String,
  status:String,
  customerID:{type:String,unique:true},
},{timestamps:true})

module.exports=mongoose.model('Customer',customerSchema)