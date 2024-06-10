const app = require("./app");
const config = require('./config/config');
const connectDB = require('./config/config.db');

port = config.app.port;


app.listen(port , ()=>{
    console.log(`App is ready on : http://localhost:${port}`);
    connectDB();
});