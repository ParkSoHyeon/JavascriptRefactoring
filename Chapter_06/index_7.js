let _title = 'untitled';
setTitle(obj['articleTitle']);
result += `<h1>${title()}</h1>`;

function title() {
    return _title;
}

function setTitle(arg) {
    _title = arg;
}
