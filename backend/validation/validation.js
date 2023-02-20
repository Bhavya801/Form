const { object } = require('joi');
const Joi = require('joi');

const loginschema = Joi.object({
    username:Joi.string()
    .required(),
    password:Joi.string().required()
});

const registerschema = Joi.object({
    name: Joi.string().min(1).required(),

    username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'],} })
        .required(),

    
    dob : Joi.date().required(),

    contact : Joi.number().min(10).required(),

    password: Joi.string()
        // .pattern(new RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')).required()

})

const updateschema = Joi.object({
    user_id: Joi.number().required(),
    name: Joi.string().min(1).required(),

    username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    
    dob : Joi.date().required(),

    contact : Joi.number().min(10).max(10).required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()

})

const deleteschema = Joi.object({
    user_id: Joi.number().required(),
   
})

    
const Validatorinsert =(req, res, next)=>{
    
                const { error,value } = registerschema.validate(req.body); 
                const valid = error == null; 
                
                if (error) { 
                    const { details } = error; 
                    const message = details.map(i => i.message).join(',');
                    console.log("error",error); 
                    return res.send(message); 
                } 
        else { 
            next();
        }
        
}

const Validatorlogin =(req, res, next)=>{
    
    const { error,value } = loginschema.validate(req.body); 
    const valid = error == null; 
    
    if (error) { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        console.log("error",error); 
        res.send(message); 
    } 
else { 
next();
}

}

const Validatorupdate =(req, res, next)=>{
    
    const { error,value } = updateschema.validate(req.body); 
    const valid = error == null; 
    
    if (error) { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        console.log("error",error); 
        return res.send(message); 
    } 
else { 
next();
}

}

const Validatordelete =(req, res, next)=>{
    
    const { error,value } = deleteschema.validate(req.body); 
    const valid = error == null; 
    
    if (error) { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
        console.log("error",error); 
        return res.send(message); 
    } 
else { 
next();
}

}


module.exports = {
    Validatorinsert,
    Validatorlogin,
    Validatorupdate,
    Validatordelete,
}



