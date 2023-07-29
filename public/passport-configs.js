"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const passport_local_1 = require("passport-local");
// const LocalStratedy = require('passport-local').Strategy
// const bcrypt = require('bcrypt')
function initialize(passport, getUserByEmail, getUserById) {
    const authenticatedUser = (email, password, done) => __awaiter(this, void 0, void 0, function* () {
        const user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: 'No user with that email' });
        }
        try {
            if (password == user.password) {
                return done(null, user);
            }
            else {
                return done(null, false, { message: 'Password incorrect' });
            }
        }
        catch (error) {
            return done(error);
        }
    });
    passport.use(new passport_local_1.Strategy({ usernameField: 'email' }, authenticatedUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
    });
}
exports.initialize = initialize;
module.exports = initialize;
