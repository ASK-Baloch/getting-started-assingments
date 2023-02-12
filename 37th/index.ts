function makeShirt( size:String = "large", message :string =" I love Typescript"){
    console.log(`shirt size ${size} with message : "${message}"`)
}

makeShirt();//default size 
makeShirt("medium");
makeShirt("short" , "TypeScript is the best!",);