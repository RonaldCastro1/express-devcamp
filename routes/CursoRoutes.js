const express = require('express')
const router = express.Router()

/* Rutas para cursos 
   1. Listar todos los cursos*/
router.get('/', (req, res)=>{
    res.status(200).json({"success": true, "data": "Lista perrito😛"})
   })
// 2. Listar un curso por id 
router.get('/:id', (req, res)=>{
    res.status(200).json({"success": true, "data": `El id es = ${req.params.id} mi perrito🤡`})
   }) 
//3. Crear nuevo curso 
router.post('/', (req, res)=>{
    res.status(201).json({"success": true, "data": "Crea perrito😛"})
   })  
//4. Actualizar un curso por id 
router.put('/:id',(req,res)=>{
    res.status(200).json({"success": true, "data": `Actualizar el id = ${req.params.id} mi perrito🤡`})
   })
//5. Borrar un curso por id
router.delete('/:id',(req,res)=>{
    res.status(200).json({"success": true, "data": `Borrar el id = ${req.params.id} mi perrito🤡`})
   })

module.exports = router