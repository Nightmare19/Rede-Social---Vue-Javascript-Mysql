module.exports = function(app, passport) {

    app.post("/api/login", (req, res, next) => {
        passport.authenticate('local-login', (err, user, info) => {
            if (err){
                return next(err);
            }
            if (!user) {
                return res.status(400).send([user, "Não é possivel realizar o Login", info])
            }
            req.login(user, (err) => {
                res.send("logged in")
            })
        })(req, res, next)
    });
    app.post("/api/registar", (req, res, next) => {
        passport.authenticate('local-signup', (err, user, info) => {
            if (err){
                return next(err);
            }
            if (!user) {
                return res.status(400).send([user, "Não é possivel realizar o registo", info])
            }
            req.login(user, (err) => {
                res.send("Registado")
            })
        })(req, res, next)
    });
    app.get('/api/logout', function(req, res) {
        req.logout();
        console.log("logged out")
        return res.send("logged out");
    });


    app.get('/api/perfil', function(req, res) {
        var user = new Object();
        // console.log(req.user[0])
        user = req.user[0];
        res.send(user);
    });
    
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}