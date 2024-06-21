const express = require('express');
const adminController = require('../controllers/admin');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Aplicar middleware de autenticação e autorização para todas as rotas de administração
router.use(authMiddleware.isAuthenticated);
router.use(authMiddleware.isAdmin);

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET   
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
