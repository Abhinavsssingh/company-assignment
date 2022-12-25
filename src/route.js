const express = require('express')
const router=express.Router()
const customerController=require('./customerController.js')

router.get('/test',(req,res)=>{
  res.send('The server is up and running')
})

router.post('/customer/create',customerController.createCustomer)
// router.get('/customer/fetch',customerController.fetchCustomer)
module.exports=router