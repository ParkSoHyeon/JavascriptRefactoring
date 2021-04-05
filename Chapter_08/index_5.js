function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>`);
    renderPhoto(outStream, person.photo);
    zztmp(outStream, photo);
    outStream.write(`<p>위치: ${photo.location}</p>`);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter(p => p.data > recentDataCutoff())
        .forEach(p => {
            outStream.write('<div>\n');
            zztmp(outStream, p);
            outStream.write(`<p>위치: ${p.location}</p>`);
            outStream.write('</div>\n');
        });
}

function emitPhotoData(outStream, photo) {
    zztmp(outStream, photo);
    outStream.write(`<p>위치: ${photo.location}</p>`);
}

function zztmp(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>`);
    outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>`);
}

function recentDataCutoff() {

}

function renderPhoto(outStream, photo) {

}