const { decrypt } = require('../middlewares/rsa');
const Facturas=require('../models/factura')
exports.add =async(req,res,next)=>{
    try { 
        req.body.customer=decrypt(req.params.customer)
        const factura=new Facturas(req.body);
        await factura.save();
        res.json(factura);
    } catch (error) {
        res.status(400).json({
            message:'error al procesar'
        })
    }
}
exports.list=async(req,res,next)=>{
    try {
        const facturas= await Facturas.find({})
        .populate('Customer')//trae datos asociados
        .populate({
            path:'boletos.funcion',
            model:'Funciones'
        });
        res.json(facturas);
    } catch (error) {
        res.status(400).json({
            message:'error al procesar'+error
        })
    }
}

exports.show=async(req,res,next)=>{
    try {
        const factura= await Facturas.findById(req.params.id).
        populate('customer')
        .populate({
            path:'boletos.funcion',
            model:'Funciones'
        });
        if(!factura){
            res.status(404).json({
                message:"La factura no existe"
            });
            next();
        }
        res.json(order);
    } catch (error) {
        res.status(400).json({
            message:'error al procesar'+error
        });
    }
};
 
exports.byCustomer=async(req,res,next)=>{
    try {
        const orders=await Facturas.find({
            customer:req.params.id
        })
        .populate('customer')
        .populate({
            path:'boletos.funcion',
            model:'Funciones'
        });
        res.json(orders);
    } catch (error) {
        res.status(400).json({
            message:'error al procesar'+error
        });
    }
};

