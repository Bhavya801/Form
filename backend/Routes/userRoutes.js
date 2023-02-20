const { fetchfunc, insertfunc,deletefunc,updatefunc, showfunc,loginfunc } = require('../Controller/userController');
const { Validatorinsert,Validatorlogin,Validatorupdate, Validatordelete } =require('../Validation/validation');

const express = require('express');
const router = express.Router(); //To connect router

router.get('/',showfunc);

router.get('/user/fetch',fetchfunc);

router.post('/user/insert',Validatorinsert,insertfunc);

router.post('/user/update',Validatorupdate,updatefunc);

router.post('/user/delete',Validatordelete,deletefunc);

router.post('/user/login',Validatorlogin,loginfunc);


module.exports = router;
