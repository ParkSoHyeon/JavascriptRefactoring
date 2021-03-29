const organization = new Organization({name: '애크미 구스베리', country: 'GB'});

newName = '구스베리'
result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;

function getRawDataOfOrganization() {
    return organization._data;
}

function getOrganization() {
    return organization;
}

class Organization {
    constructor(data) {
        this._data = data;
    }

    set name(arg) {
        this._data.name = arg;
    }

    get name() {
        return this._data.name;
    }
}