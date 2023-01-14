const mongoose = require('mongoose')

const dbConnection = async() =>{
    mongoose.set('strictQuery', false);
try {
    await mongoose.connect(process.env.MONGO_CDN);
    console.log('base de datos conectada!')
} catch (error) {
    console.log(error)
    throw new Error('Error al inicializar la base de datos')
}
}

