const Customers = require("../models/customer");
let Validator = require("validatorjs");

exports.update = async (req, res, next) => {
  try {
    const customer = await Customers.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        lastname: req.body.lastname,
      },
      { new: true }
    );
    res.json({
      message: "Cliente actualizado correctamente",
    });
    next();
  } catch (error) {
    res.status(404).json({
      message: "error al procesar",
    });
  }
};
//agregar
exports.add = async (req, res) => {
  const customer = new Customers(req.body);
  let rules = {
    name: "required|min:5",
    lastname: "required|min:5",
    username: "required|min:5",
    email: "required",
    password: "required|string|min:24",
    type: "required",
  };
  try {
    let args = {
      name: customer.name,
      lastname: customer.lastname,
      username: customer.username,
      email: customer.email,
      password: customer.password,
      type: customer.type,
    };
    let validation = new Validator(args, rules);
    if (validation.fails()) {
      throw new Error("Invalid arguments validation no pass!");
    }
    await customer.save();
    res.json({
      message: "Nuevo cliente agregado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.send(error);
    //next();
  }
};
//mostrar todos

exports.showAll = async (req, res) => {
  try {
    console.log('si llega')
    //console.log(req); 
    //const customers = await Customers.find({});
    //res.json(customers);
    res.json({customers:'vacio'});
  } catch (error) {
    console.log(error);
    res.send(error);
    next();
  }
};
//eliminar
exports.delete = async (req, res) => {
  try {
    await Customers.findOneAndDelete({
      _id: req.params.id,
    });
    res.json({
      message: "eliminado correctamente",
    });
  } catch (error) {
    res.status(400).json({
      message: "error al procesar",
    });
  }
};
