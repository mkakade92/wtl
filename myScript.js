function validateUname(){

    var uname=document.getElementById('uname').value;
    console.log(uname);
    re=/^[a-zA-Z0-9]+$/;
    var validateUname=uname.match(re);
    if(validateUname==null)
    {
        alert('Invalid Username .Ensure Username does not begin with number');
        document.getElementById('uname').focus();   
     }

}

function validatePasswd()
{
    var paswd=document.getElementById('pass').value

    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if(paswd.match(strongRegex)!=null)
    {
        alert("Strong password");
    }
    else
    {
        alert('weak password');
    }

}