
//let phone = document.getElementById("iPhone");
var phregexp1 = /^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/;
var phregexp2 = /^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$/;
var phregexp3 = /^([0-9]{3})\ ([0-9]{3})\ ([0-9]{4})$/;
var regexp = /^([a-zA-Z0-9\._]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
var passregexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
var valmsg = document.getElementById("ValMsg");

var uEmail,uPassword,uPhone;
function validation(In0Up1) {
 
if    ( In0Up1 ==true)
{
    uEmail=document.getElementById('iEmail');
    uPassword=document.getElementById('iPassword');
    uPhone=document.getElementById('iPhone')
}
if    ( In0Up1 ==false){
    uEmail=document.getElementById('exampleInputEmail1');
    uPassword=document.getElementById('exampleInputPassword1');
    uPhone="";

}
    var msg = "";

        // if ((!(isValidEmail(uEmail))) || (!(isValidPhone(uPhone))) || (!(In0Up1 & isValidPassword(uPassword))))
        //   {
        //       alert(msg);
        //     return false
        //  }
 

// 1. Email Validation
//function isValidEmail(uEmail) {
    if (!(regexp.test(uEmail.value)))  {     
         msg += "Email ID is not in Valid Format \n"; 
         //return false;   
    }      
    //else
        //return true;
//}



if (In0Up1 == true)
{
// 2. Phone number Validation 
//function isValidPhone(uPhone) {
    //         2.1. Accept numbers only    
    if (Number.isNaN(uPhone.value)) {
        msg += "PhoneNumber  is not Valid \n";
        //return false; 
    }
    //         2.2. Should contain 10 numbers only  
    if (!(uPhone.value.length == 12)) {
        msg += "PhoneNumber  Should Contain 10 \n";
        //return false; 
    }
    //         2.3. Should accept additional 3 formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX
    if (!(phregexp1.test(uPhone.value) || (phregexp2.test(uPhone.value)) || (phregexp3.test(uPhone.value)))) {
        msg += "PhoneNumber  Not in a Valid Format XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX \n";
        //return false; 
    }

//}
}

//  3. Password Validation:
//          3.1. Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number
//function isValidPassword(uPassword) {
    //         2.1. Accept numbers only    
    if (!(passregexp.test(uPassword.value))) {
        msg += "Password  is not Valid \n";
        //return false; 
        
    }
//}

if (msg != "")
{
    
    alert(msg);
    return false;
}
else
    return true;
}