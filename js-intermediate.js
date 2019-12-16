// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

var fibArr = []

const getFib = (array)=> {
    array[0] = 1
    array[1] = 1
    for (let i=2; i < 10; i++){
        array[i]=array[i-2] + array[i-1]
    }
    return array
}

console.log(getFib(fibArr))

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const oddChecker = (array) => {
   return array.filter(value => {
        return value%2 !==0 && typeof(value) === "number"
    })
}

console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.
var originalArray1 = [1, 2, 3, 4, 5, 6, 7];
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"];
// Expected output: ["e", "c", "h", "o", "1", "9"]

var rev = () => {
	return originalArray1.reverse()
}
console.log(rev())

// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3
const letterCounter = (str) => {
  let letterL = str.toLowerCase().split("").filter((value) => {
    return value === "l"
  })
  return letterL.length
}

console.log(letterCounter(ourString));

// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

var str = (x) => {
if (x.length % 2 === 0) {
	return x.slice((x.length/2) -1,(x.length/2)+1)
} else {
return x.charAt(Math.floor(x.length/2))
	}
}
console.log(str(middleLetters1))
console.log(str(middleLetters2))

// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
    this.radius = radius
  }
  area(){
    return parseFloat((4 * Math.PI * this.radius ** 2).toFixed(4))
  }
}
var s1 = new Sphere(3)
var s2 = new Sphere(2)
var s3 = new Sphere(6)

console.log(s1.area());

// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
const { specs: {doors, transmission} } = myCar
console.log(transmission);
console.log(doors);

// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
