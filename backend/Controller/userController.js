const services = require('../Services/userServices');


const showfunc = (req,res)=>{
    res.sendFile(__dirname + '/frontend/index.html');
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
    fetchfunc,
    updatefunc,
    deletefunc,
}







