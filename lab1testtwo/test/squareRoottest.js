const SquareRoot = require("./../squareRoot");
const squareObj = new SquareRoot();
const expect = require("chai").expect;


describe("square method",function(){
    it("should return 0 if number is less than 0",function(){
        expect(squareObj.square(-1)).to.be.equal(0)
    });
    it("should return square root of positive number",function(){
        expect(squareObj.square(25)).to.be.equal(5);
    })
});