const serviceLogin = require("../json/serviceLogin.json");
const seriveLayout = require("../json/serviceLayouts.json");
class UserController {
  //get
  loginGet(req, res) {
    return res.status(200).json({
      serviceLogin,
    });
  }
  layoutGet(req, res) {
    return res.status(200).json({
      seriveLayout,
    });
  }
  //post
  testPost(req, res) {
    console.log(req, body);
  }
}
module.exports = new UserController();