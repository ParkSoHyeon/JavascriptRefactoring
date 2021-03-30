class CustomerData {
    constructor(data) {
        this._data = data;
    }
}

let customerData = {
    1929: {
        name: '마틴 파울러',
        id: 1920,
        usages: {
            '2016': {
                '1': 50,
                '2': 55,
            },
            '2015': {
                '1': 70,
                '2': 63,
            }
        }
    },
    38673: {
        name: '닐 포드',
        id: 38673,

        usages: {
            '2016': {
                '1': 42,
                '2': 63,
            },
            '2015': {
                '1': 50,
                '2': 63,
            }
        }
    }
}

// 쓰기 예
getRawDataOfCustomers()[customerID].usages[year][month] = amout;

// 읽기 예
function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];

    return {
        lastAmount: later,
        change: later - earlier
    };
}

function getRawDataOfCustomers() {
    return customerData;
}

function setRawDataOfCustomers(arg) {
    customerData = arg;
}