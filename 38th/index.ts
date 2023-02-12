function describe_city(city : string, country :string = "pakistan"){
    console.log(` ${city} is in ${country}`)
}

describe_city("islamabad");
describe_city("lahore")
describe_city("london","England")