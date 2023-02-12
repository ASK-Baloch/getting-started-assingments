let magicians: string[] = ["David Blaine", "Paul Daniels", "David copperfield"];

function showMagicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }

}
make_great(magicians);
showMagicians(magicians)

