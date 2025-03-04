var userDetils = {};
var readUserDetails = () => {
    userDetils.name = document.querySelector("#userName").value;
    userDetils.name = userDetils.name.trim();

    
    try {        
        if (userDetils.name == '') {
            throws;                        
        } else {
            document.querySelector(".nameErr").style.display = 'none';
        }
    } 
    catch(err) {
        document.querySelector(".nameErr").style.display = 'block';
    }

        userDetils.mailid = document.querySelector("#userMailId").value;
        userDetils.mailid = userDetils.mailid.trim();
    try {
        if (userDetils.mailid == '') {
            throws;            
        } else {
            document.querySelector(".mailErr").style.display = 'none';
        }
    } catch(e) {
        document.querySelector(".mailErr").style.display = 'block';
    }
        userDetils.gender = document.querySelector("input[name=gender]:checked").value;
        userDetils.age = document.querySelector("#userage").value;
    try {
        if (userDetils.age == '') {
           throw 'AGE_ERR';
        } else {
            document.querySelector(".ageErr").style.display = 'none';
        }
    }  catch(e) {
        document.querySelector(".ageErr").style.display = 'block';
    }
}
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f'];
var generateCapthca = () => {
    var CaptchaValue = getRandomUppeCaseChar() + getRandomLowerCaseChar() + getRandomLowerCaseChar() + getRandomNumber() + getRandomUppeCaseChar();

    document.querySelector("#rblock").innerText = CaptchaValue;
}
var getRandomUppeCaseChar = () => {
    var randomIndex = Math.floor(Math.random() * upperCaseChar.length);
    return upperCaseChar[randomIndex];
}
var getRandomLowerCaseChar = () => {
    var randomIndex = Math.floor(Math.random() * lowerCaseChar.length);
    return lowerCaseChar[randomIndex];
}
var getRandomNumber = () => { 
    var maxCount = 10;
    var randomNum = Math.floor(Math.random() * maxCount);
    return randomNum;
}
generateCapthca();

