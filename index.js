const express = require('express')
const { run } = require('./db')
const { router } = require('./app')
const app = express()
const port = 8080

run()

app.use(express.json())


app.get('/',(req,res)=>{
    res.send({message: 'data is cooking'})
})

app.use('/api', router)
app.listen(port,()=>{
    console.log(`server is runing on http://localhost:${port}`);
})

module.exports = {app}
