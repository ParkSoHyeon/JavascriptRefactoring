const _ = require('lodash');
const assert = require('chai').assert;

reading = {customer: 'ivan', quantity: 10, month: 5, year: 2017};

// 클라이언트 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// 클라이언트 2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 클라이언트 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    return result;
}

it('check reading unchanged', function () {
    const baseReading = {customer: 'ivan', quantity: 10, month: 5, year: 2017};
    const oracle = _.cloneDeep(baseReading);
    enrichReading(baseReading);
    assert.deepEqual(baseReading, oracle);
})


