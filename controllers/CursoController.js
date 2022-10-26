exports.allCurso = (req, res) => {
    res.status(200).json({"success": true, "data": "Lista mi perrito😛"})
}

exports.singleCurso = (req, res) => {
    res.status(200).json({"success": true, "data": `El id es = ${req.params.id} mi perrito🤡`})
}

exports.createCurso = (req,res) => {
    res.status(201).json({"success": true, "data": "Crea mi perrito😛"})
}

exports.updateCurso = (req,res) => {
    res.status(200).json({"success": true, "data": `Actualizar el id = ${req.params.id} mi perrito🤡`})
}

exports.deleteCurso = (req,res) => {
    res.status(200).json({"success": true, "data": `Borrar el id = ${req.params.id} mi perrito🤡`})
}