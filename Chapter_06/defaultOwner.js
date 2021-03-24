let defaultOwnerData = {firstName: '마틴', lastName: '파울러'};

function defaultOwner() {
    return defaultOwnerData;
}

function setDefaultOwner(arg) {
    defaultOwnerData = arg;
}

export { defaultOwner, setDefaultOwner };