///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE




const summedPrice = cart.reduce(function(acc, curr)
{
    return acc + curr.price;
}, 0)

// console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => cartTotal + (cartTotal * tax) - couponValue;

// console.log(calcFinalPrice(10, 2, .50));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer needs an customer number to differentiate between customers as a string so it can be easily printed and used in other situations. Customer needs an email address to send info to as a string to hold all the various chars that may be in an email. Customer needs quanity as a number for the number of purchased items. products as an array to hold  instances of each product they are purchasing. And finally they need an address to ship to as a string to hold the variety of characters needed to hold an address

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = 
{
    custNumber: `1`,
    custEmail: `email@email.com`,
    custQuant: 0,
    custProducts: [],
    custAddress: `123 nowhere st nowhere, NW, 00000`

}