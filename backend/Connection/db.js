const mysql2 = require('mysql2');


const database ={
    host : "localhost", 
    user : "root", 
    database : "form", 
    password : "root",
}
const connection = mysql2.createConnection(database);

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

module.exports={connection};