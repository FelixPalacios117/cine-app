const express=require('express');
const cors=require('cors');
const http=require('http'); 
const bodyParser = require('body-parser');
const {routes}=require('./routes');
const multer = require('multer');

const setupServer= async ()=>{
    var server=express();
    server.use(express.static(__dirname + '/public'));
    server.use('/uploads', express.static('uploads'))
    Middleware(server);
    await startServer(server);
}
const Middleware= async (server)=>{ 
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended:true}));
    server.use(cors());
    server.use(multer().any());
    server.use('/',routes(express)); 
    //server.use(express.static('uploads'));
}
const startServer= async (server)=>{
    try {
        const httpServer=new http.createServer(server);
        httpServer.listen(process.env.PORT || 5000,() => {
            console.log(`Server running on port localhost ${process.env.PORT}`);
            console.log(`Socket waiting for localhost`);
    })
    } catch (error) {
        console.log(error);
    }
}
module.exports={setupServer};