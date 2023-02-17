const mysql2 = require('mysql2');
const repos = require('../Repositories/userDb');

// Query for fetching the data
// const fetchfunc = (cb)=> {
//     sql = `SELECT * FROM registerform_details`;
//     const result = repos.fetchfunc(sql,function(error,res){
//         // console.log(res);
//         return result;
//         cb(null,res);
//     });
//     // return repos.fetchfunc(sql);
// }

// const fetchfunc = ()=> {
//     return new Promise((resolve)=>{
//         sql = `SELECT * FROM registerform_details`;
//     const result = repos.fetchfunc(sql);
//     result.then((data)=>{
//         resolve(data);
//     })

//     })
    
//     // return repos.fetchfunc(sql);
// }

const fetchfunc = async()=> {
    sql = `SELECT * FROM registerform_details`;
    const result = await(repos.fetchfunc(sql));
   return new Promise ((resolve)=>{
    resolve(result);
   })

}
    
    // return repos.fetchfunc(sql);




// Query for inserting the data
const insertfunc = (userdata)=> {
    
    sql =  `INSERT INTO registerform_details(name,username,email_id,contact,dob,pass) VALUES (
        "${userdata.name}",
        "${userdata.username}",
        "${userdata.email}",
        ${userdata.contact},
        "${userdata.dob}",
        "${userdata.password}"
        )`;
    //   sql =  `INSERT INTO registerform_details(?,?,?,?,?,?) VALUES (
    //     "${userdata.name}",
    //     "${userdata.username}",
    //     "${userdata.email}",
    //     ${userdata.contact},
    //     ${userdata.dob},
    //     "${userdata.password}"
    //     )`;
    return repos.insertfunc(sql);
}

// Query for update the data
const updatefunc = (userdata)=> {
    sql = `UPDATE registerform_details SET 
    name = "${userdata.name}",
    username = "${userdata.username}",
    email_id = "${userdata.email}",
    contact = ${userdata.contact},
    dob = "${userdata.dob}",
    pass = "${userdata.password}"
    WHERE user_id = ${userdata.user_id} `;
    return repos.updatefunc(sql);
}

// Query for deleting user
const deletefunc = (userdata)=> {
    sql = `DELETE FROM registerform_details WHERE user_id = ${userdata.user_id}`;
    return repos.deletefunc(sql);
}

const loginfunc = async(userdata)=> {
    sql = `SELECT * FROM registerform_details WHERE username = "${userdata.username}" and pass = "${userdata.password}"`;
    const result = await (repos.loginfunc(sql));
    return new Promise ((resolve)=>{
    resolve(result);
    })
}


module.exports={
    fetchfunc,
    insertfunc,
    updatefunc,
    deletefunc,
    loginfunc   
}


