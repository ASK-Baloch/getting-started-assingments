var Name = "Usman";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.replace(/\b\w/g, function (l) { return l.toUpperCase(); }));
