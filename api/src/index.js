const express = require("express")
const router = require('./route/route')

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.listen(port , () =>{
    console.log(`Server is running in port : ${port}`);
})

app.use('/app/v1', router)