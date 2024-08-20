const express=require("express");
const abonneRouter=require("./routes/abonne")
const appelantRouter=require("./routes/appelant")
const appeleRouter=require("./routes/appele")
const appelRouter=require("./routes/appel")
const server=express();
require("dotenv").config();
const connection=require("./config/db");
connection();
port=process.env.PORT;
// Middleware to parse JSON request bodies
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get("/", async function (req, res, next) {
    try {
      return res.status(200).send("Bienvenue sur l'apiCDR");
    } catch (error) {
      console.log(error);
    }
  });
  server.use('/api', abonneRouter);
  server.use('/api', appelantRouter);
  server.use('/api', appeleRouter);
  server.use('/api', appelRouter);
  server.listen(port, () => {
    console.log(`le server tourne sur http://localhost:${port}`);
  });
  