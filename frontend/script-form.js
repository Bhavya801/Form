{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}
var userCounter=0;
var data = [];
var hash=new Map();


document.getElementById("register").addEventListener('click', ()=>{
    console.log("trigger");
    document.getElementById("register-form").style.display = "block";
    document.getElementById("signin-form").style.display = "none";
    document.getElementById("checktable").style.display = "none";

})
document.getElementById("signin").addEventListener('click', ()=>{
    console.log("trigger");
    document.getElementById("signin-form").style.display = "block";
    document.getElementById("register-form").style.display = "none"; 
    document.getElementById("checktable").style.display = "none";
    document.getElementById("update-form").style.display = "none";
    document.getElementById("delete-form").style.display = "none";

})

// document.getElementById("checkdetails").addEventListener('click', ()=>{
//     console.log("trigger");
//     document.getElementById("checktable").style.display = "block";
//     document.getElementById("update-form").style.display = "none";
//     document.getElementById("delete-form").style.display = "none";
//     document.getElementById("signin-form").style.display = "none";
//     document.getElementById("register-form").style.display = "none"; 
// })

document.getElementById("update").addEventListener('click', ()=>{
    console.log("trigger");
    document.getElementById("update-form").style.display = "block";
    document.getElementById("delete-form").style.display = "none";
    document.getElementById("checktable").style.display = "none";
    document.getElementById("signin-form").style.display = "none";
    document.getElementById("register-form").style.display = "none"; 
})

document.getElementById("delete").addEventListener('click', ()=>{
    console.log("trigger");
    document.getElementById("delete-form").style.display = "block";
    document.getElementById("update-form").style.display = "none";
    document.getElementById("checktable").style.display = "none";
    document.getElementById("signin-form").style.display = "none";
    document.getElementById("register-form").style.display = "none"; 
})


function apicall(){
    let rows=[];
    $.ajax({
        url:'http://localhost:5000/user/fetch',
        type:"GET",
        success: function(result){
            console.log(result);
            // return result;
            rows=result;
            let display = document.getElementById("data-table");
            let str=rows.length>0 ?
            `<thead>
            <tr>
                <th>User ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL ID</th>
                <th>DATE OF BIRTH</th>
                <th>CONTACT NUMBER</th>
            </tr>
        </thead>` : "No data";
    
           
            var tabledata="";
            for(let i=0;i<result.length;i++){
                let ob=result[i];

                tabledata+="<tr> <td>"+ ob.user_id + "</td><td>" + ob.name+"</td><td>" + ob.username + "</td><td>" + ob.email_id + "</td><td>" + ob.dob + "</td><td>" + ob.contact + "</td></tr>";

            }
            console.log(tabledata);
    
            display.innerHTML = tabledata;
            // console.log(result);
        },
        error:function(error){
            console.log(error);
        }
    })
    // document.getElementById("checktable").style.display = "block";
    document.getElementById("checktable").style.display = "block";
    document.getElementById("update-form").style.display = "none";
    document.getElementById("delete-form").style.display = "none";
    document.getElementById("signin-form").style.display = "none";
    document.getElementById("register-form").style.display = "none"; 
 }

function apipost(){
    let name=document.forms.first.name.value;
    let username=document.forms.first.username.value;
    let email=document.forms.first.email.value;
    let dob=document.forms.first.dob.value;
    let contact=document.forms.first.contact.value;
    let password=document.forms.first.password.value;
    
    data.push({name,username,email,dob,contact,password});
    console.log(data);
    let dataDisplay = "";
    var obj=data[0];

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

function apidelete(){
    let user_id=document.forms.dlt.userid.value;
    var obj = { user_id }

    $.ajax({
        url:'http://localhost:5000/user/delete',
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


function apiupdate(){
    let user_id=document.forms.update.userid.value;
    let name=document.forms.update.name.value;
    let username=document.forms.update.username.value;
    let email=document.forms.update.email.value;
    let dob=document.forms.update.dob.value;
    let contact=document.forms.update.contact.value;
    let password=document.forms.update.password.value;
    
    data.push({user_id,name,username,email,dob,contact,password});
    console.log(data);
    let dataDisplay = "";
    var obj=data[0];

    $.ajax({
        url:'http://localhost:5000/user/update',
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




