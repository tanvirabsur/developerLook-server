const express = require('express')
const app = express()
const port = 8080

app.get('/',(req,res)=>{
    res.send({message: 'data is cooking'})
})

app.listen(port,()=>{
    console.log(`server is runing on http://localhost:${port}`);
})

