// Code your solutions in this file
// function writeCards(names) {
//     let message = [];
//     for (let i = 0; i < names.length; i++) {
//        message.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`)
//     }
//     return message
// }

const writeCards = (names) => {
    let message = [];
    for (let i = 0; i < names.length; i++) {
       message[i]  =`Thank you, ${names[i]}, for the wonderful surprise gift!`
       console.log(message)
    }
    return message
}

const countDown = (num) => {
        console.log(num)
        while (num > 0) {
        num--;
        console.log(num)
    }
}