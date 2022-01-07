/* const express=require('express');
const router=express.Router();
const customerController=require('../controllers/customerController');
module.exports=function(){ 
    //agregar o post
    router.post('/add_customers/',customerController.add);
    //leer un cliente
    router.get('/customers',customerController.showAll);
    //actualizar
    router.put('/customers/:id',customerController.update);
    return router;
}
 */
const customerController=require('../controllers/customerController');

function routes( express){
    const router=express.Router();
    router.post('/add_customers/',customerController.add);
    //leer un cliente
    router.get('/customers',customerController.showAll);
    //actualizar
    router.put('/customers/:id',customerController.update);
    return router;
}

module.exports ={ routes }