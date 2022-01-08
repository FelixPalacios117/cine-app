
const customerController=require('../controllers/customerController');

function routes(express){
    // new-user
    // delete-user
    // update-user
    // get-user
    // list-user
    const router=express.Router();
    //agregar un cliente
    router.post('/new-customer',customerController.fileUpload, customerController.add);
    //leer un cliente
    router.get('/get-customer/:id',customerController.showById);
    //mostrar clientes
    router.get('/list-customers',customerController.showAll);
    //actualizar un cliente
    router.put('/update-customer',customerController.update);
    //eliminar un cliente
    router.delete('/delete-customer',customerController.delete);
    return router;
}

module.exports ={ routes }