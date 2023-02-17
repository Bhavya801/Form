const {connection} = require('../Connection/db');


// // TO FETCH DATA
// const fetchfunc=(sql,cb)=>{
//     const fetchfunc= connection.query(sql,function(error,results){
//             if (error)
//                 { return(console.log(error)); } 
//             console.log(results);
//             cb(null,results);
//             return results;
//             // res.send(results+"Fetch");
//     })
//     return fetchfunc;
// }

//FETCH DATA 
// const fetchfunc=(sql)=>{
//     return new Promise(function (resolve){
//         connection.query(sql,function(error,results){
//             if (error)
//                 { return(console.log(error)); } 
//                 resolve(results);
        
//     })
//             // res.send(results+"Fetch");
//     })
// }

const fetchfunc=async(sql)=>{
    return new Promise(function (resolve){
        connection.query(sql,function(error,results){
            if (error)
                { return(console.log(error)); } 
                resolve(results);
        
    })
            // res.send(results+"Fetch");
    })
}



// TO INSERT DATA
const insertfunc=(sql)=>{
    const insertfunc= connection.query(sql,function(error,results){
        if (error)
            { return(console.log(error)); } 
        console.log(results);
        // res.send(results+"Inserted");
    })
    return insertfunc;
}

// TO UPDATE DATA
const updatefunc=(sql)=>{
    const updatefunc= connection.query(sql,function(error,results){
        if (error)
            { return (console.log(error));} 
        console.log(results);
        // res.send(results+"Updated");
    })

    return updatefunc;
}


// TO DELETE DATA
const deletefunc=(sql)=>{
    const deletefunc= connection.query(sql,function(error,results){
        if (error)
            { return(console.log(error)); } 
        console.log(results);
        // res.send(results+"Delete");
    })
    return deletefunc;
}

//check validation 
const loginfunc= async(sql)=>{
    //console.log("Repo")
    return new Promise(function (resolve){
        connection.query(sql,function(error,results){
            if (error)
                { return(console.log(error)); } 
            //console.log("Repo",results);
                resolve(results);
        
    })
            // res.send(results+"Fetch");
    })

}

module.exports={
    fetchfunc,
    insertfunc,
    updatefunc,
    deletefunc,
    loginfunc
}