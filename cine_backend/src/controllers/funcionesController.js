const Funciones = require("../models/funciones");
let Validator = require("validatorjs");
const { encrypt, decrypt } = require('../middlewares/rsa')


exports.add = async (req, res, next) => {
    let rules = {
        horario: "required|min:5",
        idPelicula: "required|min:24",
        idSala: "required|min:24",
    };
    try {
        let args = {
            horario: req.body.horario,
            idPelicula: decrypt(req.body.idPelicula),
            idSala: decrypt(req.body.idSala),
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const funcion = new Funciones(args);
/*         if (req.file && req.file.filename) {
            customer.image = req.file.filename;
        } */
        const addFuncion = await funcion.save();

        if (!addFuncion) {
            throw new Error("Error agregando funcion");
        }
        res.json({
            message: "Funcion agregada correctamente",
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
        id: "required|string|min:24",
        horario: "required|min:5",
        idPelicula: "required|min:24",
        idSala: "required|min:24",
    };
    try {
        let args = {
            id: decrypt(req.params.id),
            horario: req.body.horario,
            idPelicula: decrypt(req.body.idPelicula),
            idSala: decrypt(req.body.idSala),
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const updateFuncion = await Funciones.findOneAndUpdate(
            { _id: args.id },
            args,
            { new: true }
        );
        if (!updateFuncion) {
            throw new Error("Error actualizar funcion");
        }
        res.json({
            message: "Funcion agregada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};

exports.delete = async (req, res, next) => {
    let rules = {
        id: "required|string|min:24",
    };
    try {
        let args = {
            id: decrypt(req.params.id),
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const deleteFuncion = await funcion_list.findOneAndDelete({
            _id: args.id,
        });
        if (!deleteFuncion) {
            throw new Error("Error al eliminar funcion");
        }
        res.json({
            message: "Funcion eliminada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};

exports.showById = async (req, res, next) => {
    let rules = {
        id: "required|string|min:24",
    };
    try {
        let args = {
            id: decrypt(req.params.id),
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const pelicula = await funcion_list.findById(args.id);
        if (!pelicula) {
            res.status(404).json({
                message: "La pelicula no existe"
            });
        }
        res.json(pelicula);
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};
exports.showAll = async (req, res, next) => {
    try {
        const funcion = await Funciones.find({});
        funcion_list = [];
        let i = 0;
        funcion.forEach(async (element) => {//devolver id encriptado
            element = element.toObject();
            var temp = encrypt(element._id);
            element._id = "";
            element.id = temp;
            funcion_list[i] = element;
            i++;
        });
        res.json(funcion_list);
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};