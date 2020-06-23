#1

let madlib = (Name, Subject)=> (`${Name}'s favorite subject in school is ${Subject}`)

console.log(madlib("Priyanka", "Math"))

#2
let tipCalc = (bill, service)=>{
    if (service = 'good'){
    return bill*.20

    }else if (service = 'fair'){
    return bill*.15

    }if (service = 'bad'){
    return bill*.10
    }
}

console.log(tipCalc(50,"good"))

#3
let billCalc = (bill, service)=>{
    if (service = 'good'){
    return bill*.20 + bill

    }else if (service = 'fair'){
    return bill*.15 + bill

    }if (service = 'bad'){
    return bill*.10 + bill
    }
}

console.log(billCalc(50,"good"))

#4
let printNumbers = (start, end) => {
    for (var i = start; i<=end; i++){
        console.log(i)
    }
}

printNumbers(1,10)

let printNumbers = (start, end) => {
    while (start <= end){
    console.log(start)
    start ++
    }
}

printNumbers(3,10)

#5
function printSquare (number){


    for (var i =0; i<number; i++){
    row = []
    for (var j = 0; j<number; j++){
        row.push("*")
    }
    console.log (row.join(" "))
    }
}
printSquare(8)

#6
function printBox (number){


    for (var i =1; i<= number; i++){
        row = []
        if (i === 1 || i === number){
            for (var j =0; j< number; j++){
                row.push("_")
            }
        }else{
            for (var j =1; j<= number; j++){
                if (j=== 1|| j=== number){
                    row.push("|")
                }else{
                    row.push(" ")
                }
            }
        } 
        console.log (row.join(" "))
    }
}

printBox(6)

#7
function printBanner (string){
    var banner= string.length + 2
    
    for (var i=0; i<3; i++){
        row = []
        
        if (i ===0 || i===2){
            for (var j=0; j<banner; j++){
                row.push("_")
            }
        }else{
            row.push("-", string, "-")
        }
        console.log(row.join(""))
    }
}

console.log(printBanner("Digital Crafts"))

#8

let leetSpeak = string => {
    leet = {A:4, E:3, G:6, I:1, O:0, S:5, T:7 }
    var split = string.toUpperCase().split('')
    
    for (var i=0; i<split.length; i++){
        if (leet.hasOwnProperty(split[i])){
        split[i] = leet[split[i]]
        }
    }
    return split.join(" ") 

}

console.log(leetSpeak("Priyanka"))

#9 
let longLongVowels = string => {
    vowels = ['a', 'e', 'i','o', 'u']
    var split = string.toLowerCase().split('')
    
    for (var i=0; i<split.length; i++){
        if (split[i]===split[i-1]&&vowels.includes(split[i])){
            split[i]= split[i] + split[i] + split[i]
        }

    }
    return split.join("")
    
}

console.log(longLongVowels("abba"))



#10

let positiveNumbers = array => {
    newarray = []
    for (element of array){
        if (element >= 0){
            newarray.push(element)
        }
    }
    return newarray
}

samplearray = [-1, 2, -3, 4, -5, 6,0]
console.log(positiveNumbers(samplearray))

#11

function cipher(string){
    var rot13 = "nopqrstuvwxyzabcdefghijklm"
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var split_alphabet = alphabet.split('')
    var split_rot13 = rot13.split('')
    var split= string.split('')

    ciphered = []
    for (var i =0; i<split.length; i++){
        var index = (split_alphabet.indexOf(split[i]))
        ciphered.push(split_rot13[index])
    }

    return ciphered.join("")
    
}

console.log(cipher("priyanka"))

#12
function decipher(string){
    var rot13 = "nopqrstuvwxyzabcdefghijklm"
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var split_alphabet = alphabet.split('')
    var split_rot13 = rot13.split('')
    var split= string.split('')
  
    ciphered = []
    for (var i =0; i<split.length; i++){
    var index = (split_rot13.indexOf(split[i]))
    ciphered.push(split_alphabet[index])
    }

return ciphered.join("")
    
}

console.log(decipher("cevlnaxn"))

###
let friendsNames = ["Monica", "Chandler", "Joey", "Rachel"]

friendsNames.forEach(function(name){
console.log(name)

})

const callback = (name, index)=> {
console.log(`${index +1}.${name}`)
}

friendsNames.forEach(callback)

let StarWardsNames = ["Luke", "Jar Jar", "Yoda", "Chewbaca"]

let template = {
    name: null,
    side: "light",
    height: "normal"
}

let newCallback = (name, index) => {
    res = Object.assign({}, template);
    res.name = name;

    if (name==="Chewbaca"){
    res.height = 'tall'

}else if (name=="yoda"){
    res.height = "short"
}

name == "Jar Jar" ? res.side = "Dark": null
starWarsNames[idx]=res
}