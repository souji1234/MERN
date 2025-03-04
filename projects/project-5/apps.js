var userDetils = {};
var readUserDetails = () => {
    userDetils.name = document.querySelector("#oldpswrd").value;
    userDetils.name = userDetils.name.trim();
    try {        
        if (userDetils.oldpassword == '') {
            throws;                        
        } else {
            document.querySelector(".passwordErr").style.display = 'none';
        }
    } 
    catch(err) {
        document.querySelector(".passwordErr").style.display = 'block';
    }

        userDetils.name = document.querySelector("#newpswrd").value;
        userDetils.name= userDetils.name.trim();
    try {
        if (userDetils.newpassword == '') {
            throws;            
        } else {
            document.querySelector(".passwordErr").style.display = 'none';
        }
    } catch(e) {
        document.querySelector(".passwordErr").style.display = 'block';
    }
    userDetils.name = document.querySelector(".confirmpswrd").value;
    userDetils.name = userDetils.name.trim();
    try {        
        if (userDetils.confirmpswrd == '') {
            throws;                        
        } else {
            document.querySelector(".passwordErr").style.display = 'none';
        }
    } 
    catch(err) {
        document.querySelector(".passwordErr").style.display = 'block';
    }
}