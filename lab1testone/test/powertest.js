const PowerNumber = require("./../power");
const powerNum = new PowerNumber();
const expect = require("chai").expect;

describe("power method",function(){
    it("power of null value and number should return false",function(){
        expect(powerNum.power(null,1)).to.be.equal(false);
    });
    it("power of zero and zero should return positive",function(){
        expect(powerNum.power(0,0)).to.be.equal(1);
    });
    it("power of zero and positive number should return positive number",function(){
        expect(powerNum.power(0,1)).to.be.equal(1);
    });
    it("power of zero and positive number should return negative number",function(){
        expect(powerNum.power(0,-1)).to.be.equal(-1);
    });
    it("power of zero and positive number should return negative number",function(){
        expect(powerNum.power(-1,1)).to.be.equal(-1);
    });
    it("power of zero and positive number should return negative number",function(){
        expect(powerNum.power(-1,0)).to.be.equal(-1);
    });
    it("power of positive number and positive number",function(){
        expect(powerNum.power(2,3)).to.be.equal(8);
    })
})