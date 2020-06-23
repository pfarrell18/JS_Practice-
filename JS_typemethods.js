const getUpper = (sentence)=>{
    var uppercase_split= sentence.toUpperCase().split('')

    var split = sentence.split('')

    var joined = []
    for (var i=0; i<split.length; i++){
    if (uppercase_split.includes(split[i]) && split[i]!=" "){
        joined.push(split[i])
    }
    } 

    return joined.join("")
}

console.log(getUpper("My Name is Priyanka"))

#2
var myobject = {
    Dodgers: 45,
    Braves: 10, 
    Cubs: 24,
    Yankees: 14,
    Angels: 39
}

const Alphabetical  = (object)=>{
    npm i http-server
var keys = Object.keys(object)
    return keys.sort()
}

console.log(Alphabetical(myobject))

###3
const findNum = (array, number) => {

    for (var i=0; i<array.length; i++){
    if (array[i]>number){
        return array[i]
    }
    }
    return (`No numbers greater than ${number} found`)
}

numarray = [1, 2, 3, 16, 22, 19, -4, 13]

console.log(findNum(numarray, 120))

#4
const twoObs = (obj1, obj2)=>{
    Object.assign(obj1, obj2)
    return obj1
}

var cars = {camry: 2004, focus: 2012, civic: 1999}

var bikes = {schwinn: 1999, HarelyDavison: 2020}

console.log(twoObs(cars,bikes))
