const auth = require("../../authToken");

module.exports = function chequearAuth() {
  function middleware(req, res, next) {
    const id = req.body.id;
    auth.chequearToken.confirmarToken(req, id);
    next();
  }
  return middleware;



//   function middleware(req, res, next) {
//     const id = req.body.id;
//     auth.chequearToken.confirmarToken(req, id);
//     next();
//   }
//   return middleware;
};
