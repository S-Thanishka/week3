function validate(){
    var fn=frm.fname.value;
    for(x in fn){
        ch=fn.charCodeAt(x);
        if(ch<65||ch>90&&ch<97||ch>122)
        {
            alert("invalid first name");
            return false;
        }
    }
    var ln=frm.lname.value;
    for(y in fn){
        ch=ln.charCodeAt(y);
        if(ch<65||ch>90&&ch<97||ch>122)
        {
            alert("invalid lastt name");
            return false;
        }
    }
    var phn=frm.phno.value;
    var lenp=phn.length;
    {
        if(lenp!=10){
            alert("phone number should be exactly 10 digits");
            return false;
        }
    }
    var pwd1=frm.pwd.value;
    localStorage.setItem("password",pwd1)
    var pwd2=pwd1.length;
    if(pwd2%2==1){
        alert("password should contain even number of characters");
        return false;
    }
    if(pwd2>8){
        alert("password ahould not exceed 8 characters");
        return false;
    }
    var mail=frm.mailid.value;
    localStorage.setItem("Emailid",mail)
    var reg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    if(reg.test(mail))
    {
        alert("registration sucess");
    }
    else{
        alert("invalid email");
        return false;
    }
    return true;
}