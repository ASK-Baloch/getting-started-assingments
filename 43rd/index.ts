let magicians: string[] = ["Harry Houdini", "David Copperfield", "David Blaine"];

function showMagicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
      greatMagicians.push("The Great " + magician);
    }
    return greatMagicians;
  }
  
  
  let greatMagicians: string[] = make_great(magicians);
  
 
  showMagicians(magicians);
  showMagicians(greatMagicians);
  