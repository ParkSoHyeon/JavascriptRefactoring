const organization = {name: '애크미 구스베리', country: 'GB'};

newName = '구스베리'
result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName;

function getRawDataOfOrganization() {
    return organization;
}