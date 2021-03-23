class Producer {
    constructor(province, d) {

    }

}

class Province {
    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totoalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    get name() {
        return this._name;
    }

    get producers() {
        return this._producers.slice();
    }

    get totalProduction() {
        return this._totoalProduction;
    }

    set totalProduction(arg) {
        this._totoalProduction = arg;
    }

    get demand() {
        return this._demand;
    }

    set demand(arg) {
        this._demand = arg;
    }

    get price() {
        return this._price;
    }

    set price(arg) {
        this._price = arg;
    }

    addProducer(arg) {
        this._producers.push(arg);
        this._totoalProduction += arg.production;
    }
}