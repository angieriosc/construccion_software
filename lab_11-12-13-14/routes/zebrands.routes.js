const express = require('express');
const router = express.Router();
const zebrandsController = require('../controllers/zebrands.controller');

router.get('/zebrand', zebrandsController.get_zebr);
router.get('/correos', zebrandsController.get_correos);
router.get('/inicio', zebrandsController.get_inicio);
router.get('/analitica', zebrandsController.get_analitica);
router.get('/resenas', zebrandsController.get_resenas);
router.get('/usuarios', zebrandsController.get_usuarios);

router.post('/zebrand', zebrandsController.post_zebr);
router.get('/', zebrandsController.get_root);

router.get('/profile', (req, res) => {
    if (req.session.user) {
        res.render('profile', { user: req.session.user });
    } else {
        res.redirect('/login');
    }
});

router.get('/welcome', (req, res) => {
    const username = req.cookies.username;
    res.send(`Welcome back, ${username}!`);
});

module.exports = router;
