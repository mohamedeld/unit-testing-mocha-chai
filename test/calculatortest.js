const expect = require("chai").expect;
const {Calculator,isValidLogin} = require("./../calculator");
const calObj = new Calculator();

describe('calculator', function(){
    describe("invalid numbers",function(){
        it("should return not allowed",function(){
            expect(calObj.add(null,12)).to.be.equal("not allowed");
        });
    });
    describe("add method",function(){
        it("should return summation of two positive number",function(){
            expect(calObj.add(10,20)).to.be.equal(30);
        });
    });
    describe('subtract method', function(){
        it("should return subtraction of two number",function(){
            expect(calObj.subtract(20,30)).to.be.equal(10);
        });
    });
    describe("multiply method",function(){
        it("should return multiply of two positive number",function(){
            expect(calObj.multiply(10,5)).to.be.equal(50);
        });
    });
    describe("division method",function(){
        it("should return division of two positive number",function(){
            expect(calObj.division(3,2)).to.be.equal(1.5);
        });
    });
    describe("is valid login method",function(){
        it("password less than 4 or greater than 10",function(){
            const password = "123";
            expect(isValidLogin(password)).to.be.equal(false);
        });
        it("should return password between 4 and 10",function(){
            const password = "123moh"
            expect(isValidLogin(password)).to.be.equal(password)
        });
        
    })
});
