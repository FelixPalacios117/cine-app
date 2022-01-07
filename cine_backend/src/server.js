const dotenv=require('dotenv');
const {setupServer}=require('./setupServer')
const {databaseSetUp}=require('./setupDB')

async function init(){
    dotenv.config({});
    await databaseSetUp();
    await setupServer();
    console.log("cero fallo");
} 
init();
