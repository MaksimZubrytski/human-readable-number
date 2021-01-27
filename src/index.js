module.exports = function toReadable (number) {
  let newArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',  'eleven', 'twelve',
   'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
   for(let i = 1; i < 10; i++) {
       newArray.push(newArray[20] + ' ' + newArray[i])
   }
   newArray.push("thirty")
   for(let i = 1; i < 10; i++) {
        newArray.push(newArray[30] + ' ' + newArray[i])
    }
    newArray.push("forty")
    for(let i = 1; i < 10; i++) {
        newArray.push(newArray[40] + ' ' + newArray[i])
    }
    newArray.push("fifty")
    for(let i = 1; i < 10; i++) {
        newArray.push(newArray[50] + ' ' + newArray[i])
    }
    newArray.push("sixty")
    for(let i = 1; i < 10; i++) {
        newArray.push(newArray[60] + ' ' + newArray[i])
    }
    newArray.push("seventy")
    for(let i = 1; i < 10; i++) {
        newArray.push(newArray[70] + ' ' + newArray[i])
    }
    newArray.push("eighty")
    for(let i = 1; i < 10; i++) {
        newArray.push(newArray[80] + ' ' + newArray[i])
    }
    newArray.push("ninety")
    for(let i = 1; i < 10; i++) {
        newArray.push(newArray[90] + ' ' + newArray[i])
    }
    newArray.push("one hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[100] + ' ' + newArray[i])
    }
    newArray.push("two hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[200] + ' ' + newArray[i])
    }
    newArray.push("three hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[300] + ' ' + newArray[i])
    }
    newArray.push("four hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[400] + ' ' + newArray[i])
    }
    newArray.push("five hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[500] + ' ' + newArray[i])
    }
    newArray.push("six hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[600] + ' ' + newArray[i])
    }
    newArray.push("seven hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[700] + ' ' + newArray[i])
    }
    newArray.push("eight hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[800] + ' ' + newArray[i])
    }
    newArray.push("nine hundred")
    for(let i = 1; i < 100; i++) {
        newArray.push(newArray[900] + ' ' + newArray[i])
    }
   return newArray[number]
}
