const customerController = require('../controllers/customerController');
const multer = require('multer');
const upload = multer({ dest: './images' })
const shortid = require('shortid')

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
  server.post('/new-customer', upload.single('image'), customerController.add)
  //leer un cliente
  server.get('/get-customer/:id', customerController.showById);
  //mostrar clientes
  server.get('/list-customers', customerController.showAll);
  //actualizar un cliente
  server.put('/update-customer/:id', upload.single('image'), function (req, res, next) {
    next()
  }, customerController.update);
  //eliminar un cliente
  server.delete('/delete-customer', customerController.delete);
  //return router;
}

module.exports = { routes }