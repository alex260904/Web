function Signup(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user ={
        email:email,
        password:password
    }
    var json= JSON.stringify(user);
    localStorage.setItem(email,json);
    alert("Success")
}
function login(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //get value in localStorage 
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if(user===null){
        alert("Enter email or password")
    }else if(email==data.email && password==data.password){
        alert("Success");
        window.location.href ="main.html"
    }else{
        alert("Error");
    }

}

