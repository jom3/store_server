const {request,response} = require('express')

const listarPersonas = (req,res=response) =>{
    res.send('personas')
}

module.exports = {
    listarPersonas
}