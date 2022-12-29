const express=require("express") //create a server in express line 1, importing express
const projectRoute=require("./routes/projectRoute")
const bp=require("body-parser")
require("dotenv").config() //importing .env



const server = express()  //create a server in express line 2


server.use(bp.json()); //bodyParser is deprecated, parse application/json type requests
server.use(bp.urlencoded({ extended: true })); //parse application/x-www-form-urlencoded request
server.use(projectRoute) //mapping server to the route

const port = process.env.PORT;  //geting port value from .env
server.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/`);
});
