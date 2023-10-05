let coinFlip
let randomNum
do {
    randomNum = Math.random()
    if(randomNum===0){
        console.log('Heads')
    }else{
        console.log('Tails')
    }
} while (randomNum !== 0);