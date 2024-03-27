function Loginvalidate(){
    var enteremail=document.getElementById('email').value;
    var enterpassword=document.getElementById('pwd').value;
    var getEmail=localStorage.getItem('mail');
    var getpwd=localStorage.getItem('password');
    if(enteremail==getEmail){
        if(enterpassword==getpwd)
        {
            alert("login Success");
           window.location="welcome.html";
            return false;
        }
        else{
            alert("wrong password");
        }
    }
        else{
            alert("invalid credential");
        }
    
}