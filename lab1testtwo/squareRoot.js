class SquareRoot{
    square(number){
        if(number === undefined || number === null || number<0 || number === 0) return 0;
        return Math.sqrt(number);
    }
};
module.exports = SquareRoot;