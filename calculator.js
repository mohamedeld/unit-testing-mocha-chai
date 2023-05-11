
class Calculator{
    add(number1,number2){
        if(number1 === undefined || number2 === undefined || number1 === null || number2 === null || number1<0||number2<0) return "not allowed";
        return number1 + number2;
    }
    subtract(number1,number2){
        if(number1 === undefined || number2 === undefined || number1 === null || number2 === null || number1<0||number2<0) return "not allowed";
        return Math.abs(number1 - number2);
    }
    multiply(number1,number2){
        if(number1 === undefined || number2 === undefined || number1 === null || number2 === null || number1<0||number2<0) return "not allowed";
        return number1 * number2;
    }
    division(number1,number2){
        if(number1 === undefined || number2 === undefined || number1 === null || number2 === null || number1<0||number2<0 || number1 ===0  || number2 === 0) return "not allowed";
        return number1 / number2;
    }
};
function isValidLogin(password){
    if(password.length <= 4 || password >= 10) return false;
    return password;
};

module.exports = {
    Calculator:Calculator,
    isValidLogin:isValidLogin
};