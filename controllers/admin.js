const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.status(200).json({editing: false})
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  req.user.createProduto({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
  })
  .then((resultado) => {
    console.log('Produto criado');
    res.status(200).json({produto: resultado})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: 'erro interno'});
  })

 
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.status(200).json({editing: false});
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then((product) => {
    if (!product) {
      return res.status(200).json({editing: false});
    }
    res.status(200).json({editing: true, produto: product});
  })
  .catch(err => {
    console.log(err);
    res.status(501).json({msg: 'erro internet'})
  });
}

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findByPk(prodId)
  .then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save();
  })
  .then(resultado => {
    console.log('Produto actualizado');
    res.status(200).json({produto: resultado})
  })
  .catch(err => {
    console.log(err);
    res.status(200).json({msg: 'erro interno'})
  }
    
  );

};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products) => {
    res.status(200).json({data: products});
  }).catch(err => {
    console.log(err);
    res.status(500).json({msg: 'erro interno'})
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then(product => {
    return product.destroy();
  })
  .then(resultado => {
    console.log('Produto removido');
    res.status(200).json({produto: resultado})
  })
  .catch( (err) => {
    console.log(err);
    res.status(500).json({msg: 'erro interno'})
   } )
};