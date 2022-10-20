exports.allBootcamp = (req, res) => {
    res.status(200).json({"success": true, "data": "Lista mi perrito😛"})
}

exports.singleBootcamp = (req, res) => {
    res.status(200).json({"success": true, "data": `El id es = ${req.params.id} mi perrito🤡`})
}

exports.createBootcamp = (req,res) => {
    res.status(201).json({"success": true, "data": "Crea mi perrito😛"})
}

exports.updateBootcamp = (req,res) => {
    res.status(200).json({"success": true, "data": `Actualizar el id = ${req.params.id} mi perrito🤡`})
}

exports.deleteBootcamp = (req,res) => {
    res.status(200).json({"success": true, "data": `Borrar el id = ${req.params.id} mi perrito🤡`})
}