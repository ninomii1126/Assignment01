//STEP 1
let favMovies = ['Lord of the Rings', 'Silver lining playbook', 'seven', 'Frozen', 'Aladdin', 'Snow White', 'Avatar']
console.log(favMovies[1]);

//STEP 2
let movies = new Array(5)
for(let i =0; i<movies.length; i++){
    movies[i] = favMovies[i];
}
console.log(movies[0])

//STEP 3
movies.splice(2,0,'Lion King')
console.log(movies)

//STEP 4

let movies2 = []
for(let i=0; i<5; i++){
    movies2[i]=favMovies[i]
}
delete movies2[0]
console.log(movies2)

//STEP 5
let movies3 = []

for(let i=0; i<7; i++){
    movies3[i]=favMovies[i]
}
for (let movie in movies3){
    console.log(movies3[movie])
}

//STEP 6
for (let movie of movies3){
    console.log(movie)
}

//STEP 7
for (let movie of movies3.sort()){
    console.log(movie)
}

//STEP 8
let leastFavMovies = ['Moana', 'Harry Potter', 'Mission Impossible']
console.log('Movies I like:')
for(let i =0 ; i<movies3.length; i++){
    console.log(movies3[i])
}

console.log('Movies I regret watching:')
for(let i =0 ; i<leastFavMovies.length; i++){
    console.log(leastFavMovies[i])
}

//STEP 9
let movies4 = movies3.concat(leastFavMovies).reverse()
console.log(movies4)

//STEP 10
let m1 = movies4.find((value, index, array) => {
	return index === movies4.length-1
})

console.log(m1)

//STEP 11
let m2 = movies4.find((value, index, array) => {
	return index === 0
})

console.log(m2)

//STEP 12
let m3 = movies4.filter((item) => {
	return leastFavMovies.includes(item)
})
console.log(m3)


//STEP 13
let movies5 =[["Lord of the Rings", 1], ["Silver lining playbook", 2], ["Frozen", 3], ["Snow White", 4], ["Aladdin", 5]];
let m4 = movies5.filter(movie => typeof movie[0] === 'string').map(movie => movie[0])
console.log(m4)


//STEP 14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

let showEmployee = function(employeeArray) {
  console.log("Employees:");
  for (let i = 0; i < employeeArray.length; i++) {
    console.log(employeeArray[i]);
  }
};

showEmployee(employees);


//STEP 15
function filterValues(values){
return values.filter(value => {return value !==0 && value!== false && value !== null && value !== ''})
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]))


//STEP 16
function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
  }

//STEP 17
function getLargestNumber(array) {
    if (array.length === 0) {
      return undefined
    }
  
    return Math.max(...array);
  }