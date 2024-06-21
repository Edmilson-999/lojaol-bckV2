const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey'; // Substituir pelo secret key

function isAuthenticated(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access Denied: No Token Provided!');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid Token');
    }
}

function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).send('Access Denied: You are not an admin!');
    }
}

module.exports = {
    isAuthenticated,
    isAdmin
};
