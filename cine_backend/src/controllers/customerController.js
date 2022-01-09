const Customers = require("../models/customer");
let Validator = require("validatorjs");
const { encrypt, decrypt } = require('../middlewares/rsa') 

/* const addCustomersPhoto= (req, res, next) => {
  upload.single('image'),(req,res,function(error){
    if(error){
        res.json({
            message:error
        });
    }
    return next();
  })
} */

/* exports.fileUpload = upload.single('image'), (req, res, next) => {
  try {
    console.log(req)
    res.send('image is up');
  } catch (err) {
    res.send(400);
  }
}; */
/*exports.fileUpload =(req, res, next) => {
  try {
    console.log(req.file)
    res.send('image is up');
  } catch (err) {
    res.send(400);
  }
  next();
};*/
//agregar
exports.add = async (req, res, next) => {
  let rules = {
    name: "required|min:5",
    lastname: "required|min:5",
    username: "required|min:5",
    email: "required",
    password: "required|string|min:24",
    type: "required",
  };

  try { 
    console.log('print body:', req.body) 
    let args = {
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: encrypt(req.body.password),
      type: req.body.type, 
    };
    let validation = new Validator(args, rules);
    if (validation.fails()) {
      throw new Error("Invalid arguments validation no pass!");
    }
    const customer = new Customers(args);
    if(req.file && req.file.filename){
      customer.image=req.file.filename;
    }
    console.log(customer)
    
    await customer.save(); 
    res.json({
      message: "Nuevo cliente agregado correctamente",
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
    lastname: "required|min:5",
    username: "required|min:5",
    email: "required", 
  };
  try {
    console.log('print body:', req.body)
    
    let args = { 
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email, 
    };
    let validation = new Validator(args, rules);
    if (validation.fails()) {
      throw new Error("Invalid arguments validation no pass!");
    }
      const customer = await Customers.findOneAndUpdate(
          { _id: decrypt(req.params.id) },
          {
            name: args.name,
            lastname: args.lastname,
            email: args.email,
            username: args.username,
            image: args.image,
          },
          { new:true }
        ); 
    res.json({
      message: "Cliente actualizado correctamente",
    });
    next();
  } catch (error) {
    res.status(404).json({
      message: "error al procesar" + error,
    });
  }
};

//mostrar todos funciona

exports.showAll = async (req, res) => {
  try {
    const customers = await Customers.find({});
    customers_list = [];
    let i = 0;
    customers.forEach(async (element) => {//devolver id encriptado
      element = element.toObject();
      var temp = encrypt(element._id);
      element._id = "";
      element.id = temp;
      customers_list[i] = element;
      i++;
    });
    res.json(customers_list);
    //res.json({customers:'vacio'});
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
      _id: decrypt(req.body.id),
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
exports.showById = async (req, res, next) => {
  try {
    const customer = await Customers.findById(req.params.id)
    if (!customer) {
      res.status(404).json({
        message: "El cliente no existe"
      });
      next();
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({
      message: 'error al procesar' + error
    });
  }
};
