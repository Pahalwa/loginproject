function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username=="Ranvijay" && password=="justforgot"){
        window.open("https://pahalwa.github.io/Calculate-me/")
    }else{
        alert("Invalid user")
    }
}