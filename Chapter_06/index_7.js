let tpHd = 'untitled';
setTitle(obj['articleTitle']);
result += `<h1>${title()}</h1>`;

function title() {
    return tpHd;
}

function setTitle(arg) {
    tpHd = arg;
}
