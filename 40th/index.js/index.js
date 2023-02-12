"use strict";
function make_album(artistName, albumTitle, tracks) {
    let album = {
        artist: artistName,
        title: albumTitle
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let albumOne = make_album("sidhu Moosewala", "PBX1", 13);
let albumTwo = make_album("sidhu Moosewala", "Snitches Get Stitches", 8);
let albumThree = make_album("sidhu Moosewala", "Moosetape", 32);
console.log(albumOne);
console.log(albumTwo);
console.log(albumThree);
