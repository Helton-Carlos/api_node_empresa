const { Router } = require("express");

const UserController = require("./app/controllers/UserController");

const routes = new Router();
//get
routes.get("/", UserController.loginGet);
routes.get("/layout", UserController.layoutGet);

//post
routes.post("/teste", UserController.testPost);
module.exports = routes;