
const mysql2 = require('mysql2');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

const port = 5000;


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

const connection = mysql2.createConnection({
    host : "localhost", 
    user : "root", 
    database : "form", 
    password : "root",
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

// const express = require('express');
// var bodyParser = require('body-parser');
// const app = express();
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser,urlencoded({extended:true}));



app.use(express.static('frontend'));

//Open local host

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/frontend/index.html');
});

app.post('/user/insert',function(req,res){
    console.log("sdhcfvajhdcajdc");
    let data=req.body;
    console.log(data);
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var dob = req.body.dob;
    var contact = req.body.contact;
    var pass = req.body.password;
    var userid=1;
   


//     var sql = 'insert into registerform_details(user_id,name,username,email_id,contact,dob,pass) values ("'+userid+'","'+name+'","'+username+'","'+email+'","'+dob+'",'+contact+',"'+password+'")'
//     // var sql= "INSERT INTO registerform_details(name,username,email_id,contact,dob,pass) VALUES("'+name+'",'"+ username+ "','"+email+ "',"+contact+",'"+dob+ "','"+password+ "')";
//     // var sql = "INSERT INTO registerform_details("
//     connection.query(sql,function(error,results){
//             if (error){
//                 return(console.log(error));
//             } 
//             console.log(results);
//             res.send("Registered",results);
//         })

// });


// var sql = 'insert into registerform_details values (?,?,?,?,?,?,?)',[userid,name,username,emailid,contact,dob,pass];
// var sql= "INSERT INTO registerform_details(name,username,email_id,contact,dob,pass) VALUES("'+name+'",'"+ username+ "','"+email+ "',"+contact+",'"+dob+ "','"+password+ "')";
// var sql = "INSERT INTO registerform_details("
connection.query('insert into registerform_details values (?,?,?,?,?,?,?)',[userid,name,username,email,contact,dob,pass],function(error,results){
    console.log("Hello world");
        if (error){
            return(console.log(error));
        } 
        console.log(results);
        console.log(results);
        res.send(results+"Inserted");
    })

});





//fetch data of user

app.get('/user/fetch',function(req,res){
    console.log("asfaifh")
    let data=req.query;
    console.log(data);
    connection.query(
        'SELECT * FROM registerform_details',data,(err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            console.log(results);
            res.send(results);
        }
    );
});

// //Update data from user 

app.put('/user/update',function(req,res){
    let data=req.query;
    console.log(data);
    connection.query(
        'UPDATE registerform_details SET name = "Bhavya Sharma" WHERE user_id = 1',data,(err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(results);
        }
    );
});

// //Delete data from user 

app.delete('/user/delete',function(req,res){
    let data=req.query;
    console.log(data);
    connection.query(
        'DELETE FROM registerform_details WHERE user_id = 1 ',data,(err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(results);
        }
    );
});

app.listen(port, () => {
    console.log(`Form app listening on port ${port}`)
})





