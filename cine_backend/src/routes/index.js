const multer = require('multer');
const upload = multer({ dest: './images' })
const shortid = require('shortid')
const auth = require('../middlewares/auth')
const customerController = require('../controllers/customerController');
const funcionesController = require('../controllers/funcionesController');
const peliculaController = require('../controllers/peliculaController');
const salaController=require('../controllers/salaController');
const facturaController=require('../controllers/facturaController');


const routes = async (server) => {
  // new-user
  // delete-user
  // update-user
  // get-user
  // list-user 

  //agregar un cliente
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')//destino
    },
    filename: function (req, file, cb) {
      // obtener la extensión del archivo
      const extension = file.mimetype.split('/')[1];
      // generar ID para ponerlo como nombre de imagen y no se repitan
      cb(null, `${shortid.generate()}.${extension}`);
    }
  })
  var upload = multer({ storage: storage })//necesario para acceder a carpetas
  server.post('/new-customer', (req, res, next) => {
    try {
      /* if (!req.verifiedUser) {
        throw new Error("Unauthorized")
      } */
      next()
    } catch (error) {
      res.json({
        message: ':' + error
      });
    }
  }, upload.single('image'), customerController.add)
  //leer un cliente
  server.get('/get-customer/:id', customerController.showById);
  //mostrar clientes
  server.get('/list-customers', customerController.showAll);
  //actualizar un cliente
  server.put('/update-customer/:id', upload.single('image'), customerController.update);
  //eliminar un cliente
  server.delete('/delete-customer', customerController.delete);
  //return router;


  server.post('/new-movie', (req, res, next) => {
    try {
     /*  if (!req.verifiedUser) {
        throw new Error("Unauthorized")
      } */
      next();
    } catch (error) {
      res.json({
        message: ':' + error
      });
    }
  }, upload.single('image'), peliculaController.add)
  //leer un cliente
  server.get('/get-movie/:id', peliculaController.showById);
  //mostrar clientes
  server.get('/list-movie', peliculaController.showAll);
  //actualizar un cliente
  server.put('/update-movie/:id', (req, res, next) => {
    try {
      if (!req.verifiedUser) {
        throw new Error("Unauthorized")
      }
      next()
    } catch (error) {
      res.json({
        message: ':' + error
      });
    }
  }, upload.single('image'), peliculaController.update);
  //eliminar un cliente
  server.delete('/delete-movie/:id', peliculaController.delete);
  //return router;



  server.post('/new-funcion', funcionesController.add)
  //leer un cliente
  server.get('/get-funcion/:id', funcionesController.showById);
  //mostrar clientes
  server.get('/list-funcion', funcionesController.showAll);
  //actualizar un cliente
  server.put('/update-funcion/:id', funcionesController.update);
  //eliminar un cliente
  server.delete('/delete-funcion/:id', funcionesController.delete);

  //agregar salas
  server.post('/new-sala',salaController.add);
  //leer todas
  server.get('/list-sala',salaController.showAll);
  //leer una sala
  server.get('/get-sala/:id',salaController.showById);
  //actualizar salas
  server.put('/update-sala/:id',salaController.update);
  //eliminar una sala
  server.delete('/delete-sala/:id',salaController.delete);

  //leer todas
  server.get('/list-factura',facturaController.list);
  //crear
  server.post('/new-factura',facturaController.add);
  //mostrar todas
  server.post('/get-factura/:id',facturaController.show)
}

module.exports = { routes }