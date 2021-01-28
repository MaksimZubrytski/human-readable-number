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
    for(let i = 1; i < 10; i++) {
        newArray.push(newArray[i] + ' ' + 'hundred')
        for(let j = 1; j < 100; j++) {
            newArray.push(newArray[i] + ' ' + 'hundred' + ' ' + newArray[j])
        }
    }
   return newArray[number]
}
