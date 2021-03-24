const chai = require('chai');
const assert = chai.assert;
const {defaultOwner, setDefaultOwner} = require("./defaultOwner");

describe('test', function () {
    it('', function () {
        const owner1 = defaultOwner();
        assert.equal('파울러', owner1.lastName, '처음 값 확인');
        const owner2 = defaultOwner();
        owner2.lastName = '파슨스'
        assert.notEqual('파슨스', owner1.lastName, 'owner2를 변경한 후');
    });
});


