const app =require('./app')
const dotenv=require('dotenv')

dotenv.config({path:"./config/config.env"})


app.get('/',(req,res)=>{
    res.json({
        message:"Success is working"
    })
})

console.log("/fsdf",process.env.PORT)

app.listen(process.env.PORT,(req,res)=>{
    console.log(`listening on ${process.env.PORT}`)
})