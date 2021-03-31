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

// 클라이언트
highPriorityCount = orders.filter(o => 'high' === o.priority || 'rush' === o.priority).length;