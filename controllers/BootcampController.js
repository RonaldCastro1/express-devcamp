//1. objeto de conexion
const sequelize = require ('../config/seq')
const {DataTypes} = require ('sequelize')
const BootcampModel = require ('../models/bootcamps')

const Bootcamps = BootcampModel(sequelize, DataTypes)
exports.allBootcamp = async (req, res) => {
    const allBootcamp = await Bootcamps.findAll()
    res.status(200).json({"success": true, "data": allBootcamp})
}

exports.singleBootcamp = async (req, res) => {
    const singleBootcamp = await Bootcamps.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleBootcamp})
}

exports.createBootcamp = async (req,res) => {
    const createBootcamp = await Bootcamps.create(req.body)
    res.status(201).json({"success": true, "data": createBootcamp})
}

exports.updateBootcamp = async (req,res) => {
    await Bootcamps.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const singleBootcamp = await Bootcamps.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleBootcamp})
}

exports.deleteBootcamp = async (req,res) => {
    await Bootcamps.destroy({
        where:{
            id: req.params.id
        }
    })
    const singleUser = await Bootcamps.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleUser})
}