const createIndex = (array)=> {

    object = {}
    for (i = 0; i <array.length; i++){
    object[array[i]]=i
    }

    return object
}

var names = ["Monica", "Ross", "Joey", "Rachel", "Chandler", "Phoebe"]
console.log(createIndex(names))