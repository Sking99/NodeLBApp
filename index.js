const express = require('express');
const ip = require('ip');

const app = express();

app.get('/ping', (req, res)=>{
    return res.json({
        message: 'Pong',
        serverAddress: ip.address()
    })
})

app.listen(3000, ()=>{
    console.log('App running on port 3000')
})