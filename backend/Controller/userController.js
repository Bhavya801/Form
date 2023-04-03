const services = require('../Services/userServices');
const crypto=require("crypto-js")

// const validation = require('../Validation/validation')


const showfunc = (req,res)=>{
    res.sendFile(__dirname + '/frontend/index.html');
};

const loginfunc = async(req,res)=>{
    const userdata=req.body;
    const result = await(services.loginfunc(userdata));
    console.log(result);
    console.log(userdata);

    if(result.length==0){
            res.send("Invalid Credentials");
    }

    // else {
        // logindata = {
        //                 user_id : result[0].user_id,
        //                 name: result[0].name,
        //                 username : result[0].username1,
        //                 email_id : result[0].email_id,
        //                 dob : result[0].dob,
        //                 contact : result[0].contact
        //             }
        //     res.send(logindata);
    // } 
    // }
    // return services.loginfunc(userdata);

    var decrypted = crypto.AES.decrypt(result[0].pass, 'secret key 123')
    var passde = decrypted.toString(crypto.enc.Utf8)
    console.log(passde)

        if (passde===userdata.password){
            logindata = {
                user_id : result[0].user_id,
                name: result[0].name,
                user_name : result[0].username,
                email_id : result[0].email_id,
                dob : result[0].dob,
                contact : result[0].contact
            }
        res.send(logindata);
            // res.send(result);
            // return result;
        }
    else{
        res.send("Invalid")
    }

    

};

const fetchfunc = async(req,res) =>{
    // console.log(req.headers);
    const result = await(services.fetchfunc());
    res.send(result);
    return result;

    // result.then((data)=>{
    //     res.send(data);
    // });
}

const insertfunc = (req,res) =>{
    const userdata=req.body;
    return services.insertfunc(userdata);
}

const updatefunc = (req,res) =>{
    const userdata=req.body;
    // const id = req.body.id;
    
    return services.updatefunc(userdata);
}

const deletefunc = (req,res) =>{
    const userdata=req.body;
    return services.deletefunc(userdata);
}

module.exports={
    showfunc,
    insertfunc,
    loginfunc,
    fetchfunc,
    updatefunc,
    deletefunc,
}







