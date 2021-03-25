const station = {
    name: 'ZB1',
    readings: [
        {temp: 47, time: '2016-11-10 09:10'},
        {temp: 53, time: '2016-11-10 09:20'},
        {temp: 58, time: '2016-11-10 09:30'},
        {temp: 53, time: '2016-11-10 09:40'},
        {temp: 51, time: '2016-11-10 09:50'},
    ]
}

function readingsOutsideRange(station, min, max, range) {
    return station.readings.filter(r => r.temp < min || r.temp > max);
}

const range = new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
);

alerts = readingsOutsideRange(
    station,
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling,
    range
);

class NumberRange {
    constructor(min, max) {
        this._data = {min, max};
    }

    get min() {
        return this._data.min;
    }

    get max() {
        return this._data.max;
    }

    // 값 객체로 만들 가능성이 높기 때문에 세터 x
}