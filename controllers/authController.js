const jwt = require('jsonwebtoken');
const Pessoa = require('../models/pessoa'); 
const secretKey = 'yourSecretKey'; 

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Verificar as credenciais do usuário (autenticação)
    Pessoa.findOne({ where: { email: email } })
        .then(user => {
            if (!user || user.password !== password) { 
                return res.status(401).send('Invalid credentials');
            }

            // Gerar um token JWT
            const token = jwt.sign(
                { id: user.id, role: user.role },
                secretKey,
                { expiresIn: '1h' }
            );

            res.send({ token });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal server error');
        });
};
