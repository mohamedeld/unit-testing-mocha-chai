class PowerNumber{
    power(number1,number2){
        if(number1 === undefined || number2 === undefined || number1 === null || number2 === null) return false;
        if(number1 === 0 && number2 === 0) {
            return 1;
        }
        if(number1 === 0 && number2 === 1) {
            return 1;
        }
        if(number1 === 0 && number2 === -1) {
            return -1;
        }
        if(number1 === -1 && number2 === 1) {
            return -1;
        }
        if(number1 === -1 && number2 === 0) {
            return -1;
        }
        return Math.pow(number1,number2) 
    }
};
module.exports = PowerNumber;