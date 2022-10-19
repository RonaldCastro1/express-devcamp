const express = require('express')
const router = express.Router()

/* Rutas para bootcamps 
   1. Listar todos los bootcamps*/
router.get('/', (req, res)=>{
    res.status(200).json({"success": true, "data": "Lista perrito😛"})
   })
// 2. Listar un bootcamp por id 
router.get('/:id', (req, res)=>{
    res.status(200).json({"success": true, "data": `El id es = ${req.params.id} mi perrito🤡`})
   }) 
//3. Crear nuevo bootcamp 
router.post('/', (req, res)=>{
    res.status(201).json({"success": true, "data": "Crea perrito😛"})
   })  
//4. Actualizar un bootcamp por id 
router.put('/:id',(req,res)=>{
    res.status(200).json({"success": true, "data": `Actualizar el id = ${req.params.id} mi perrito🤡`})
   })
//5. Borrar un bootcamp por id
router.delete('/:id',(req,res)=>{
    res.status(200).json({"success": true, "data": `Borrar el id = ${req.params.id} mi perrito🤡`})
   })

module.exports = router