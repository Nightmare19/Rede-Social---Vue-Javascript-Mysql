// config/passport.js
var mysql = require('mysql')
// load all the things we need

var connection = mysql.createConnection({
    // connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'universidade',
    // debug: false
});

var LocalStrategy = require('passport-local').Strategy;

// MySQL connection

console.log("MySQL connection created at %s with database: %s", connection.config.host, connection.config.database);

// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.utilizador_id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        connection.query("SELECT * FROM utilizador WHERE utilizador_id = " + id, function (err, rows) {
            done(err, rows);
        });
        // select from users where id =        
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) {
            var user = req.body;
            connection.query('SELECT * FROM utilizador WHERE email = ?', [user.email], function (err, rows, fields) {
                if (err) done(err)
                if (rows.length == 0) {
                    connection.query('INSERT INTO utilizador (email,nome,password, morada) VALUES (?,?,?,?)', [user.email, user.nome,user.password, user.morada], function (err, rows, fields) {
                        if (err) console.log(err)
                        var user = new Object();
                        user['utilizador_id'] = rows.insertId
                        done(null, user)
                    });
                } else {
                    done(null, false, { message: "Email already exists" });
                }
            });


            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists            
        }));
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) { // callback with email and password from our form        
            connection.query('SELECT * FROM utilizador WHERE email = ?', [email], function (err, rows, fields) {
                if (rows.length > 0) {
                    if (rows[0].password == password) {
                        return done(null, rows[0]);
                    } else {
                        return done(null, false, { message: "Incorrect password" });
                    }
                } else {
                    return done(null, false, { message: "Incorrect email" });
                }
            });
        }));
};