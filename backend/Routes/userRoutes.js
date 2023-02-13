const { fetchfunc, insertfunc,deletefunc,updatefunc, showfunc } = require('../Controller/userController');

const express = require('express');
const router = express.Router(); //To connect router

router.get('/',showfunc);

router.get('/user/fetch',fetchfunc);

router.post('/user/insert',insertfunc);

router.post('/user/update',updatefunc);

router.post('/user/delete',deletefunc);


module.exports = router;
