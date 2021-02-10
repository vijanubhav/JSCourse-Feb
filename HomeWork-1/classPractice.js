/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
let q1 = ["image1.png", "image2.png", "image3.png"]
console.log("Question 1: " + q1)
/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
let q2 = q1[0]
console.log("Question 2: " + q2)

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
let q3 = q1.length
console.log("Question 3: " + q3)

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */
let q4 = q1[q1.length - 1]
console.log("Question 4: " + q4)

// Your code here


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
let q5 = [1, 2, 3, 4]
let newq5 = []
for (let i = 0; i < q5.length; i++) {
    let x = q5[i] + 1
    newq5.push(x)
}
console.log("Question 5: " + newq5)

let updatedq5 = []
q5.forEach((num) => {
    // num = num + 1
    updatedq5.push(num += 1)
})
console.log("Question 5: " + updatedq5)

let finalq5 = []
q5.map((num) => {
    finalq5.push(num = num + 1)
})
console.log("Question 5: " + finalq5)

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */


// Your code here
let q6 = 0
for (let i = 0; i < q5.length; i++) {
    q6 = q6 + q5[i]
}
q6 = q6 / q5.length
console.log("Average is :" + q6)