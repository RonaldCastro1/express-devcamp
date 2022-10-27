const sequelize = require ('../config/seq')
const {DataTypes} = require ('sequelize')
const CourseModel = require ('../models/courses')

const Cours = CourseModel(sequelize, DataTypes)
exports.allCurso = async (req, res) => {
    const allUsers = await Cours.findAll()
    res.status(200).json({"success": true, "data": allUsers})
}

exports.singleCurso = async (req, res) => {
    const singleCurso = await Cours.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleCurso})
}

exports.createCurso = async (req,res) => {
    const createUser = await Cours.create(req.body)
    res.status(201).json({"success": true, "data": createUser})
}

exports.updateCurso = async (req,res) => {
    await Cours.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const singleCurso = await Cours.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleCurso})
}

exports.deleteCurso = async (req,res) => {
    await Cours.destroy({
        where:{
            id: req.params.id
        }
    })
    const singleCurso = await Cours.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleCurso})
}