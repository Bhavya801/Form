$(document).ready(function() {
    $ajax({
        url:'localhost:3000/user/fetch',
        type:"GET",
        success: function(result){
            console.log(result);
        },
        error:function(error){
            console.log(error);
        }
    })
})


function getfun(){
    $.ajax({
    url:'localhost:8800/user/fetch',
    type:"GET",
    success: function(result){
        console.log(result);
    },
    error:function(error){
        console.log(error);
    }
})
}