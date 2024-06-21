const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');

const envs = require('./util/config');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');
const conexaoBD = require('./util/database');
const dbconnection = require('./util/dbMongoose');

// Importando modelos
const Pessoa = require('./models/pessoa');
const Produto = require('./models/product');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());
app.use(cookieParser());
app.use(logger('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || envs.PORT;
const hostname = envs.HOST;


/* middle usado para registar o use no objecto request */
app.use((req, res, next) => {
  Pessoa.findOne()
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);

app.use(errorController.getError404);

dbconnection().then(() => {
  app.listen(port, () => {
      console.log(`Server running at port: ${port}/`);
  });
  module.exports = { app, servidor };
}).catch((error) => {
  console.error("Error starting the server: ", error.message);
});

// const servidor = app.listen(port, () => console.log(`Listening on port: ${port}`))
// module.exports = { app, servidor };

/* conexaoBD
  .authenticate()
  .then(() => {
    console.log('A conexão foi estabelecida com sucesso.');
    // Sincronizar modelos
    //return conexaoBD.sync({force: true});
    return conexaoBD.sync({alter: true});
  })
  .then(() => {
    //console.log('Modelos sincronizados com sucesso.');
    return Pessoa.findOne();
  })
  .then((user) => {
    if (!user) {
      return Pessoa.create({ nome: 'Paulo', email: 'test@uta.cv' });
    }
    return user;
  })
  .then((user) => {
   // console.log(user);
    return user.createCart();
  })
  .then((cart) => {
    // Iniciar o servidor
    servidor = app.listen(port);
  })
  .catch((error) => {
    console.error(
      'Erro ao conectar ou sincronizar com o banco de dados:',
      error
    );
    process.exit(1); // Termina o programa com código de saída 1
  });
 */