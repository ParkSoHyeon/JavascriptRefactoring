class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._setDiscountRate(discountRate);
        this._contract = new CustomerContract(new Date().now);
    }

    get discountRate() {
        return this._discountRate
    }

    _setDiscountRate(arg) {
        this._discountRate = arg;
    }

    becomePreferred() {
        this._setDiscountRate(this.discountRate + 0.03);
    }

    applyDiscount(amount) {
        return amount.subtract(amount.multiple(this.discountRate));
    }
}

class CustomerContract {
    constructor(startDate) {
        this._startDate = startDate;
    }
}