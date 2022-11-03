const {DataTypes, ValidationError} = require('sequelize')
const sequelize = require('../config/seq')
const UserModel = require ('../models/user')

const User = UserModel(sequelize, DataTypes)
exports.allUsers = async (req, res) => {
    try {
        const allUsers = await User.create(req.body)
        res.status(201).json({"success": true, "data": allUsers})
        }
    catch (error) {
        if(error instanceof ValidationError){
            const msg_errores=error.errors.map(errorItem=>errorItem.message)
            res.status(422).json({
                "success":false,
                "error":msg_errores
            })
        }else{
            res.status(400).json({
                "success":false,
                "error":'error de servidor'
            })
    }
}
}

exports.singleUser = async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id)
        if(singleUser){
            res.status(200).json({"success": false, "errors": "usuario no encontrado"})
        }else{
            res.status(400).json({"success": false, "errors": singleUser})
        }
    } catch (error) {
        if(error instanceof ValidationError){
            const msg_errores=error.errors.map(errorItem=>errorItem.message)
            res.status(422).json({
                "success":false,
                "error":msg_errores
            })
        }else{
            res.status(400).json({
                "success":false,
                "error":'bd no encontrada'
            })
    }
    }
    
    
}

exports.createUser = async (req,res) => {
    try {
    const createUser = await User.create(req.body)
    res.status(201).json({"success": true, "data": createUser})
    } catch (error) {
        if(error instanceof ValidationError){
            const msg_errores=error.errors.map(errorItem=>errorItem.message)
            res.status(422).json({
                "success":false,
                "error":msg_errores
            })
        }else{
            res.status(400).json({
                "success":false,
                "error":'error de servidor'
            })
    }
}
    
}

exports.updateUser = async (req,res) => {
    try {
        const singleUser = await User.findByPk(req.params.id)
        if(singleUser){
            res.status(200).json({"success": false, "errors": "usuario no encontrado"})
        }else{
            await User.update(req.body,{
                where:{
                    id: req.params.id
                }
        })
        const updatedUser = await User.findByPk(req.params.id)
        }
        
        res.status(200).json({"success": true, "data": updatedUser})
    } catch (error) {
        if(error instanceof ValidationError){
            const msg_errores=error.errors.map(errorItem=>errorItem.message)
            res.status(422).json({
                "success":false,
                "error":msg_errores
            })
        }else{
            res.status(400).json({
                "success":false,
                "error":'error de servidor'
            })
    }
}
}

exports.deleteUser = async(req,res) => {
    try {
        const singleUser = await User.findByPk(req.params.id)
        if(singleUser){
            res.status(200).json({"success": false, "errors": "usuario no encontrado"})
        }else{
            await User.destroy(req.body,{
                where:{
                    id: req.params.id
                }
        })
        const deleteUser = await User.findByPk(req.params.id)
        }
        
        res.status(200).json({"success": true, "data": deleteUser})
    } catch (error) {
        
    }
    
}