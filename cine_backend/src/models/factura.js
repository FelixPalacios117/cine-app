const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const FacturaSchema=new Schema({
    customer:{ 
      type:Schema.ObjectId,
        ref:'Customers' 
    },
    total:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        default:Date.now
    },
    funcion:{
        type:Schema.ObjectId,
        ref:'Funciones'
    },
    boletos:[{  
            tipo:{
                type:String,
                required:true
            },
            asiento:{
                type:String,
                required:true
            },
            precio:{
                type:Number,
                required:true
            },
        } 
    ]
},{timestamps:true})
module.exports=mongoose.model('Factura',FacturaSchema)