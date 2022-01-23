const { decrypt } = require("../middlewares/rsa");
const Facturas = require("../models/factura");
const Funciones = require("../models/funciones");

exports.add = async (req, res, next) => {
  try {
    const boletosR = req.body.boletos.split(",");
    const ifFuncion = decrypt(req.body.funcion);
    const user =
      "5a499d1ccbce6f38353e0f679ef834f123d3af8fbb45eb4d917e49b7f091507222b5bf8d07fd1f66f3066d33d4923f67ded0fa67aecab3407154899ecc5c843465a47bd3488564e2997cd61cf0b7dba6b85e42852b2107722792b26e3bd1f958a639fcfa96c7582458833d753256fa19e1c1e3b003768a00fbf588a02777931d";
    let Rboletos = [];
    boletosR.forEach((element) => {
      Rboletos.push({
        tipo: "tipo",
        asiento: element,
        precio: req.body.precio,
      });
    });
    let args = {
      customer: decrypt(user),
      total: req.body.total,
      funcion: ifFuncion,
      boletos: Rboletos,
    };
    let funcion = await Funciones.findById({ _id: ifFuncion });
    const compra = funcion.comprados? req.body.boletos + "," + funcion.comprados:req.body.boletos;
    const updateFuncion = await Funciones.findOneAndUpdate(
      { _id: ifFuncion },
      { comprados: compra },
      { new: true }
    );
    const factura = new Facturas(args);
    await factura.save();
    res.json({ tet: "factura" });
  } catch (error) {
    res.status(400).json({
      message: "error al procesar" + error,
    });
  }
};
exports.list = async (req, res, next) => {
  try {
    const facturas = await Facturas.find({})
      .populate({
        path: "customer",
        model: "Customer",
      }) //trae datos asociados
      .populate({
        path: "funcion",
        model: "Funciones",
      });
    res.json(facturas);
  } catch (error) {
    res.status(400).json({
      message: "error al procesar" + error,
    });
  }
};

exports.show = async (req, res, next) => {
  try {
    const factura = await Facturas.findById(req.params.id)
      .populate("customer")
      .populate({
        path: "boletos.funcion",
        model: "Funciones",
      });
    if (!factura) {
      res.status(404).json({
        message: "La factura no existe",
      });
      next();
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({
      message: "error al procesar" + error,
    });
  }
};

exports.byCustomer = async (req, res, next) => {
  try {
    const orders = await Facturas.find({
      customer: req.params.id,
    })
      .populate("customer")
      .populate({
        path: "boletos.funcion",
        model: "Funciones",
      });
    res.json(orders);
  } catch (error) {
    res.status(400).json({
      message: "error al procesar" + error,
    });
  }
};
