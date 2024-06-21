const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((produtos) => {
    res.status(200).json({data:produtos});
  }).catch(err => {
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then(product => {
    res.status(200).json({data: product});
  }).catch(err => {
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then((meusprodutos) => {
    res.status(200).json({data:meusprodutos });
  }).catch(err => {
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.getCart = (req, res, next) => {
  req.user.getCart()
  .then(cart => {
    return cart.getProdutos()
    .then((produtos) => {
      res.status(200).json({data: produtos})
    })
    .catch(erro => {
      res.status(500).json({ error: 'Não consegue obter produtos Cart' });
    });
  })
 .catch(erro => {
  res.status(500).json({ error: 'Não consegue obter Cart do user' });
 });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let cartActual;

  req.user
  .getCart()
  .then(cart => {
      cartActual = cart;
      return cart.getProdutos({where : {id: prodId}});
  })
  .then(produtos => {
    let produto;
    if (produtos.length > 0) {
      produto = products[0];
    }
    let newQ = 1;
    if (produto) {
      //
    }
    return Product.findByPk(prodId)
    .then(produto => {
      return cartActual.addProduto( produto, {
        through: {quantity: newQ}
      });
    })
    .catch(erro => {
      res.status(500).json({ error: 'Não consegue actualizar quantidade do produto' });
    });
  })
  .then(() => {
    res.status(200).json({data: cartActual});
  })
  .catch(erro => {
    res.status(500).json({ error: 'Não consegue obter Cart do user' });
  });
 
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.status(200).json({data: 'em implementação'});
};

exports.getCheckout = (req, res, next) => {
  res.status(200).json({data: 'em implementação'});
};
