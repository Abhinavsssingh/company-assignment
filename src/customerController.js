
const customerModel=require('./customerModel.js')

const createCustomer=async (req,res)=>{
  const data=req.body
 
  const {emailId,mobileNumber,customerID,status}=data

  const customer = await customerModel.findOne({$or:[emailId,mobileNumber,customerID]})


  if(status== "INACTIVE"){

  const check=await customerModel.findOneAndUpdate({customerID},{status:status})
  }

  if(customer){
    if(customer.emailId==emailId){
      return res.status(400).send({status:false,message:"Email ID is not unique!"})
    }

    if(customer.mobileNumber==mobileNumber){
      return res.status(400).send({status:false,message:"Mobile No. is not unique!"})
    }
    if(customer.customerID==customerID){
      return res.status(400).send({status:false,message:"Customer ID is not unique!"})
    }
  }

  const createdData=await customerModel.findOneAndUpdate({customerID:customerID},data,{upsert:true})
  const tosend = await customerModel.find()
  res.status(200).send({status:true,customers:tosend})
}


module.exports={createCustomer}