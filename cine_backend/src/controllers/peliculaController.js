const Pelicula = require("../models/pelicula");
let Validator = require("validatorjs");
const { encrypt, decrypt } = require('../middlewares/rsa')

exports.add = async (req, res, next) => {
    let rules = {
        name: "required|min:5",
        duration: "required|min:5",
        picture: "required",
        classification: "required",
    };
    try {
        req.body.picture = req.file.filename;
        let args = {
            name: req.body.name,
            duration: req.body.duration,
            picture: req.body.picture,
            classification: req.body.classification,
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const pelicula = new Pelicula(args);
        const addPelicula = await pelicula.save();
        if (!addPelicula) {
            throw new Error("Error agregando pelicula");
        }
        res.json({
            message: "Pelicula agregada correctamente",
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
        name: "required|min:5",
        duration: "required|min:5",
        picture: "required",
        classification: "required",
    };
    try {
        req.body.picture = req.file.filename;
        let args = {
            id: decrypt(req.params.id),
            name: req.body.name,
            duration: req.body.duration,
            picture: req.body.picture,
            classification: req.body.classification,
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const updatePelicula = await Pelicula.findOneAndUpdate(
            { _id: args.id },
            args,
            { new: true }
        );
        if (!updatePelicula) {
            throw new Error("Error actualizar pelicula");
        }
        res.json({
            message: "Pelicula actualizada correctamente",
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
        console.log(req.params.id);
        let args = {
            id: decrypt(req.params.id),
        };
        let validation = new Validator(args, rules);
        if (validation.fails()) {
            throw new Error("Invalid arguments validation no pass!");
        }
        const peliculaDelete = await Pelicula.findOneAndDelete({
            _id: args.id,
        });
        if (!peliculaDelete) {
            throw new Error("Error al eliminar pelicula");
        }
        res.json({
            message: "Pelicula eliminada correctamente",
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
        const pelicula = await Pelicula.findById(args.id);
        if (!pelicula) {
            res.status(404).json({
                message: "La pelicula no existe"
            });
        }
        var peliculaTemp = pelicula.toObject();
        peliculaTemp._id = encrypt(pelicula._id);
        delete peliculaTemp.__v;
        res.json(peliculaTemp);
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};
exports.showAll = async (req, res, next) => {
    try {
        const pelicula = await Pelicula.find({});
        peliculas_list = [];
        let i = 0;
        pelicula.forEach(async (element) => {//devolver id encriptado
            element = element.toObject();
            delete element.__v;
            element._id = encrypt(element._id);
            peliculas_list[i] = element;
            i++;
        });
        res.json(peliculas_list);
    } catch (error) {
        console.log(error);
        res.json({
            message: "" + error
        });
    }
};