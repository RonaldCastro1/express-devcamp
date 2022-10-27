const {DataTypes} = require('sequelize')
const sequelize = require('../config/seq')
const UserModel = require ('../models/user')

const User = UserModel(sequelize, DataTypes)
exports.allUsers = async (req, res) => {
    const allUsers = await User.findAll()
    res.status(200).json({"success": true, "data": allUsers})
}

exports.singleUser = async (req, res) => {
    const singleUser = await User.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleUser})
}

exports.createUser = async (req,res) => {
    const createUser = await User.create(req.body)
    res.status(201).json({"success": true, "data": createUser})
}

exports.updateUser = async (req,res) => {
    await User.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const singleUser = await User.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleUser})
}

exports.deleteUser = async(req,res) => {
    await User.destroy({
        where:{
            id: req.params.id
        }
    })
    const singleUser = await User.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleUser})
}