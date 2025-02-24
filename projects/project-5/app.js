
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

