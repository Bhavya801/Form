{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}
var userCounter=0;
var data = [];
var hash=new Map();

var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
var regPhone=/^\d{10}$/;                                        
var regName = /\d+$/g;   

// const acsignin = document.getElementById("register");
// const block = document.getElementById("block");


// acsignin.addEventListener('click',function(event){
//     event.preventDefault();
//     if(block.style.display === "block"){
        
//         block.style.display = "none";
//     }
//     //    else {
        
//     //     block.style.display = "block";
//     //   }
// });

document.getElementById("register").addEventListener('click', ()=>{
    console.log("trigger");
    document.getElementById("register-form").style.display = "block";
    document.getElementById("signin-form").style.display = "none";
})
document.getElementById("signin").addEventListener('click', ()=>{
    console.log("trigger");
    document.getElementById("signin-form").style.display = "block";
    document.getElementById("register-form").style.display = "none"; 
})

// function clickregister()   {
//     document.getElementById("signin").style.display='none' ;
//     document.getElementById("register").style.display='block';
// }

// function clicksignin(){
//     document.getElementById("register").style.display='none';
//     document.getElementById("signin").style.display='block' ;
// }


function validation(){
    // let name = document.getElementById("name").value;
    // let username= document.getElementById("username").value;
    // let email = document.getElementById("email").value; 
    // let dob = document.getElementById("dob").value; 
    // let contact = document.getElementById("contact").value;
    // let password = document.getElementById("password").value;
    // let regEmail=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;  
    // var regPhone=/^\d{10}$/;                                      
    // var regName = /\d+$/g;  
                                
    // if (username == "" || regName.test(username)) {
    //     window.alert("Please enter valid user name");
    //     username.focus();
    //     return false;
    // }
    
    // if (email == "" || !regEmail.test(email)) {
    //     window.alert("Please enter a valid e-mail address.");
    //     email.focus();
    //     return false;
    // }
    
    // if(contact.length != 10){

    //     window.alert("Mobile number must have 10 digits!!");
    //     contact.focus();
    //     return false;
    // }
    // if(password === ""){
    //     window.alert("Password can't be empty!!");
    //     password.focus();
    //     return false;
    // }
    // else if (password.length < 8 || password.length > 16) {
    //     window.alert("Password must 8 to 16 characters long");
    //     password.focus();
    //     return false;
    // }
    // var obj = {
    //     Name : document.getElementById("name").value,
    //     username : document.getElementById("username").value,
    //     email : document.getElementById("email").value, 
    //     dob : document.getElementById("dob").value,
    //     contact : document.getElementById("contact").value,        
    //     password : document.getElementById("password").value,
    // }

    let name=document.forms.first.name.value;
    let username=document.forms.first.username.value;
    let email=document.forms.first.email.value;
    let dob=document.forms.first.dob.value;
    let contact=document.forms.first.contact.value;
    let password=document.forms.first.password.value;
    
    data.push({name,username,email,dob,contact,password});
    console.log(data);
    let dataDisplay = "";

    for (let i =0;i<data.length;i++) {
        var obj = data[i];
        dataDisplay += "<tr> <td> USER" +(i+1) +"<br>";
        dataDisplay += "<td>" + obj.name +"</td>";
        dataDisplay += "<td>" + obj.username +"</td>";
        dataDisplay += "<td>" + obj.email +"</td>";
        dataDisplay += "<td>" + obj.dob +"</td>";
        dataDisplay += "<td>" + obj.contact + "<br></td></tr>";

    }
    
    // hash.set(document.getElementById("username").value,obj);
    // console.log(hash)
    $.ajax({
        url:'http://localhost:5000/user/insert',
        type:"POST",
        dataType:"json",
        data: obj,
        success: function(data){
            console.log(data);
        },
        error:function(error){
            console.log(error);
        }
    })


}




function addRow() {
    // validation();

    // console.log("abc");
    // let name = document.getElementById("name").value;
    // let username= document.getElementById("username").value;
    // let email = document.getElementById("email").value; 
    // let dob = document.getElementById("dob").value; 
    // let contact = document.getElementById("contact").value;
    // let password = document.getElementById("password").value;

    let obj = {
        name : document.getElementById("name").value,
        username : document.getElementById("username").value,
        email : document.getElementById("email").value, 
        dob : document.getElementById("dob").value,
        contact : document.getElementById("contact").value,        
        password : document.getElementById("password").value,
        }
        hash.set(document.getElementById("username").value,obj);

        console.log(hash)
    }
   
    // userCounter++;
   
    // document.getElementById("display").innerHTML = dataDisplay;

    display.innerHTML = dataDisplay;
    reset()


    function reset(){
    document.getElementById("name").value="";
    document.getElementById("username").value="";
    document.getElementById("email").value= ""; 
    document.getElementById("dob").value= ""; 
    document.getElementById("contact").value= "";
    document.getElementById("password").value;

    // apicall();

    }

function apicallpost(abcd){
   
    }



// $(document).ready(function() {
//     function getfun(){
//     console.log("check")
//     $ajax({
//     url:'http://localhost:8800/user/fetch',
//     type:"GET",
//     success: function(response){
//         console.log(response);
//     },
//     error:function(error){
//         console.log(error);
//     }
// })
// })



// $('#hi').click(function(){
//     getfun();
    
// })

function apicall(){
    $(document).ready(function() {
    $.ajax({
        url:'http://localhost:5000/user/fetch',
        type:"GET",
        success: function(result){
            console.log(result);
        },
        error:function(error){
            console.log(error);
        }
    })
})
}



