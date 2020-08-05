//Función de Conmutador de Entidades del Api
var express= require('express');
var router = express.Router();
var passport = require('passport');
var passportJWT = require('passport-jwt');

var extractJWT = passportJWT.ExtractJwt;
var strategyJWT = passportJWT.Strategy;

passport.use( 
    new strategyJWT(
      {
          jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
          secretOrKey: process.env.JWT_SECRET
      },
      (payload, next)=>{
        var user = payload;
        console.log(user);
        return next(null, user);
      }
    )
  )


var secRoutes = require('./sec');
var servicioRoutes = require('./servicio');
var productoRoutes = require('./producto');




//publicas no requieren estar autenticadas por ser consumidos
router.use("/sec", secRoutes);

const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});

//privadas
router.use("/servicio", jwtAuthMiddleware, servicioRoutes); 
router.use("/producto", jwtAuthMiddleware, productoRoutes);

module.exports = router;
