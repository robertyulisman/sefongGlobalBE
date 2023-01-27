import { ExtractJwt, Strategy } from "passport-jwt";
// const JwtStrategy = Jwt.Strategy
import passport from "passport";
import User from "../models/User.js";

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_OR_KEY;

const Passport = () => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      User.findOne({ where: { id_user: jwt_payload.id_user } })
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};

export default Passport;
