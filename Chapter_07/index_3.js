class Order {
    constructor(data) {
        this._priority = data.priority;
    }

    get priority() {
        return this._priority;
    }

    set priority(arg) {
        return this._priority = arg;
    }
}

class Priority {
    constructor(value) {
        this._value = value;
    }

    toString() {
        return this._value;
    }
}

// 클라이언트
highPriorityCount = orders.filter(o => 'high' === o.priority || 'rush' === o.priority).length;