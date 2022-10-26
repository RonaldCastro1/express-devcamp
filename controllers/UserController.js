const {DataTypes} = require('sequelize')
const sequelize = require('../config/seq')
const UserModel = require ('../models/user')

const User = UserModel(sequelize, DataTypes)
exports.allUsers = async (req, res) => {
    const allUsers = await User.findAll()
    console.log(allUsers)
    res.status(200).json({"success": true, "data": "Lista mi perrito😛"})
}

exports.singleUser = (req, res) => {
    res.status(200).json({"success": true, "data": `El id es = ${req.params.id} mi perrito🤡`})
}

exports.createUser = (req,res) => {
    res.status(201).json({"success": true, "data": "Crea mi perrito😛"})
}

exports.updateUser = (req,res) => {
    res.status(200).json({"success": true, "data": `Actualizar el id = ${req.params.id} mi perrito🤡`})
}

exports.deleteUser = (req,res) => {
    res.status(200).json({"success": true, "data": `Borrar el id = ${req.params.id} mi perrito🤡`})
}