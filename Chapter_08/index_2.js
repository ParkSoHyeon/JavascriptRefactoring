class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract(new Date().now);
        this._setDiscountRate(discountRate);
    }

    get discountRate() {
        return this._contract._discountRate
    }

    _setDiscountRate(arg) {
        this._contract._discountRate = arg;
    }

    becomePreferred() {
        this._setDiscountRate(this.discountRate + 0.03);
    }

    applyDiscount(amount) {
        return amount.subtract(amount.multiple(this.discountRate));
    }
}

class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }

    get discountRate() {
        return this._discountRate
    }

    set discountRate(arg) {
        this._discountRate = arg;
    }
}