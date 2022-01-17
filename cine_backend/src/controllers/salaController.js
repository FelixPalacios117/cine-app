const Sala = require("../models/sala");
let Validator = require("validatorjs");
const { encrypt, decrypt } = require('../middlewares/rsa')

exports.add = async (req, res, next) => {
    let rules = {
        name: "required",
        capacity: "required",
        column: "required",
        row: "required" 
    };
    try { 
        let args = {
            name: req.body.name,
            capacity: req.body.capacity,
            column: req.body.column,
            row: req.body.row,
            disable:""
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const sala = new Sala(args);
        const addSala = await sala.save();
        if (!addSala) {
            throw new Error("Error agregando sala");
        }
        res.json({
            message: "Sala agregada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};

exports.update = async (req, res, next) => {
    let rules = { 
        name: "required|min:5",
        capacity: "required",
        column: "required",
        row: "required",
    };
    try {
        let args = { 
            name: req.body.name,
            capacity: req.body.capacity,
            column: req.body.column,
            row: req.body.row,
            disable:req.body.disable
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const updateSala = await Sala.findOneAndUpdate(
            { _id: req.params.id },
            args,
            { new: true }
        );
        if (!updateSala) {
            throw new Error("Error actualizar sala");
        }
        res.json({
            message: "Sala modificada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};

exports.updateSillas = async (req, res, next) => {

    try {
        let args = { 
            disable:req.body.disable
        };
        console.log(args);
        const updateSala = await Sala.findOneAndUpdate(
            { _id: req.params.id },
            args,
            { new: true }
        );
        if (!updateSala) {
            throw new Error("Error actualizar disable");
        }
        res.json({
            message: "Sala modificada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};

exports.delete = async (req, res, next) => { 
    try {  
        const salaDelete = await Sala.findOneAndDelete({
            _id: req.params.id,
        });
        if (!salaDelete) {
            throw new Error("Error al eliminar sala");
        }
        res.json({
            message: "Sala eliminada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};

exports.showById = async (req, res, next) => {
    
    try {  
        const sala = await Sala.findById(req.params.id);
        if (!sala) {
            res.status(404).json({
                message: "La sala no existe"
            });
        } 
        res.json(sala);
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};
exports.showAll = async (req, res, next) => {
    try {
        const sala = await Sala.find({}); 
        res.json(sala);
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};