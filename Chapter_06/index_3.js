class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() {
        return this._data.quantity;
    }

    get itemPrice() {
        return this._data.itemPrice;
    }

    get price() {
        // 가격(price) = 기본 가격 - 수량 할인 + 배송비
        return this.basePrice - this.quantityDiscount + this.shipping;
    }

    get basePrice() {
        return this.quantity * this.itemPrice;
    }

    get quantityDiscount() {
        return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05
    }

    get shipping() {
        return Math.min(this.basePrice * 0.1, 100);
    }
}