const Funciones = require("../models/funciones");
let Validator = require("validatorjs");
const { encrypt, decrypt } = require('../middlewares/rsa');
const funciones = require("../models/funciones");


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
        const deleteFuncion = await Funciones.findOneAndDelete({
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
        const funcion = await Funciones.findById(args.id).populate({
            path: 'idPelicula',
            model: 'Pelicula',
        });
        if (!funcion) {
            res.status(404).json({
                message: "La funcion no existe"
            });
        }
        var funcionTemp = funcion.toObject();
        funcionTemp._id = encrypt(funcion._id);
        var pelicula = funcionTemp.idPelicula;
        pelicula._id = encrypt(pelicula._id);
        delete pelicula.__v;
        funcionTemp.pelicula = pelicula;
        delete funcionTemp.idPelicula;
        delete funcionTemp.__v;
        res.json(funcionTemp);
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};
exports.showAll = async (req, res, next) => {
    try {
        const funcion = await Funciones.find({}).populate({
            path: 'idPelicula',
            model: 'Pelicula',
        });;
        funcion_list = [];
        let i = 0;
        funcion.forEach(async (element) => {//devolver id encriptado
            element = element.toObject();
            delete element.__v;
            element._id = encrypt(element._id);
            //element.idPelicula = encrypt(element.idPelicula);
            var pelicula = element.idPelicula;
            pelicula._id = encrypt(pelicula._id);
            delete pelicula.__v;
            element.pelicula = pelicula;
            delete element.idPelicula;
            delete element.__v;
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