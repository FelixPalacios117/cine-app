const customerController = require('../controllers/customerController');
const multer = require('multer');
const upload = multer({ dest: './images' })


const routes = async (server) => {
    // new-user
    // delete-user
    // update-user
    // get-user
    // list-user
    //const  router=express.Router();
    //agregar un cliente
    server.post('/new-customer', upload.single('image'), customerController.fileUpload);
    //leer un cliente
    server.get('/get-customer/:id', customerController.showById);
    //mostrar clientes
    server.get('/list-customers', customerController.showAll);
    //actualizar un cliente
    server.put('/update-customer', customerController.update);
    //eliminar un cliente
    server.delete('/delete-customer', customerController.delete);
    //return router;
}

module.exports = { routes }