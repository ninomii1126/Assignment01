let coinFlip

let executeTimes = prompt('Enter execute times: ')

for(let i=0; i<executeTimes; i++){
    let randomNum = Math.random()
    if(randomNum === 0){
        console.log('Heads')
    }else{
        console.log('Tails')
    }
}