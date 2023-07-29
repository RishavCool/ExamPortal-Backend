
import {Strategy} from "passport-local";

// const LocalStratedy = require('passport-local').Strategy
// const bcrypt = require('bcrypt')

export function initialize(passport:any, getUserByEmail:any, getUserById:any){
    const authenticatedUser = async (email:any, password:any, done:any) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, {message: 'No user with that email'})
        }

        try {
            if (password == user.password) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Password incorrect'})
            }
            
        } catch (error) {
            return done(error)
        }
    }

    passport.use(new Strategy({usernameField: 'email'}, authenticatedUser))
    passport.serializeUser((user:any, done:any) => done(null, user.id))
    passport.deserializeUser((id:any, done:any) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize