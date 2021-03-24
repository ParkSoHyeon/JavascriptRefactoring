class Book {
    addReservation(customer) {
        zz_addReservation(customer, false);
    }

    zz_addReservation(customer, isPriority) {
        assert(isPriority === true || isPriority === false);
        this._reservations.push(customer);
    }
}