/* 1. Crear la dependencia a express */
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')

/* Dependencias de rutas */
const bootcampRoutes = require('./routes/BootcampRoutes')
const cursoRoutes = require('./routes/CursoRoutes')
const listEndpoints = require('express-list-endpoints')

/* Definiendo archivo .env */
dotenv.config({
    path: './config/config.env'
})
/* 2. Crear el objeto app con express */
const app = express() 
/* Relacionar rutas de dominio */
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/curso', cursoRoutes)
/* 3. Iniciar el servidor de desarrollo de express */
app.get('/', (request, response)=>{
    response.send('La ruta esta full mi perrito 🥳')
})
//Consultar rutas del proyecto
console.log(listEndpoints(app))

app.listen(process.env.PORT, ()=>{
    console.log('servidor inicado mi perrito 😎'.bgMagenta.white)
})
