console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

console.log('Assignment - Cart System')

// In this section we will write some functions 
// that might be used in a simple cart system for a store.

console.log('Required Features')

// Update the cart.js file to do the following:

// Create a global variable named basket and set it to an empty array.

let basket = ['pasta', 'chicken'];
let newItem = ['apple', 'tp', 'banana'];
let checkItem = 'tea';


// Create a function called addItem. It should:
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added

for (i = 0; i < newItem.length; i++) {
    basket.push(newItem[i])
}// end for loop for newItem array

function addItem(newItem, checkItem) {

    console.log('add new item', newItem)
    console.log('check the item', checkItem)


    if (basket.length > 0) {
        console.log('basket is not empty')
        for (i = 0; i < basket.length; i++) {
            console.log('for loop', basket[i])

            if (checkItem === basket[i]) {
                console.log('yayyyyy!!!!', checkItem, 'is in basket')
                // return true - if return true, the loop will stop as soon as 'checkItem' is found.

            }//end if checkItem

        }//end for loop

        console.log('nooooo!!!', checkItem, 'is not in basket')
        return false

    }//end if
    else {
        return false
    }// end else
}
console.log('check item', addItem(newItem, checkItem))
console.log('basket array', basket)

// Function to loop over the items in the basket array
// console.log each individual item on a new line

function listItems() {
    for (i = 0; i <= basket.length - 1; i++) {

        console.log('each item in the basket:', basket[i])
    }
}
listItems()

//examples
function shits() {
    return 2
}//end shits

console.log(shits())

function giggles() {
    console.log('4')
}//end giggles

giggles()

let x = 'y'
console.log('x is', x)

x = 'yam'
console.log('the new x is', x)


// create a function called empty to reset teh basket into an empty array

function empty() {

    return basket = []
}//end empty

empty()
console.log('empty basket', basket)
