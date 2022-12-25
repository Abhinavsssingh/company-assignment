const express =require('express')
const mongoose=require('mongoose')
const app=express()
const router=require('./route.js')

app.use(express.json())
app.use('/', router)

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://AbhinavSIngh:9936522959@cluster0.wtmx5b4.mongodb.net/group13Database", { useNewUrlParser: true }).
then(()=>console.log('Database connected!')).
catch((err)=>console.log(err))

app.listen (3000,()=>{
  console.log('Server running at port 3000')
})