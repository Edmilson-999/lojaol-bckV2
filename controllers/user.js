exports.loginUser = (req, res, next) => {
    res.render('Login/index',);
};

exports.singupUser = (req, res, next) => {
    res.render('Register/index',);
};

exports.logout = (req, res, next) => {
    res.render('Includes/successLogout',);
};