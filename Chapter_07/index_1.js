const organization = new Organization({name: '애크미 구스베리', country: 'GB'});

newName = '구스베리'
result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;

function getOrganization() {
    return organization;
}

class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    set name(arg) {
        this._name = arg;
    }

    get name() {
        return this._name;
    }

    set country(arg) {
        this._country = arg;
    }

    get country() {
        return this._country;
    }
}