console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

console.log(`Adding gum ${addItem("gum")}`);  //testing addItem function
 console.log(basket);   //verifying what is in the basket now
console.log(`Adding candy ${addItem("candy")}`);
 console.log(basket);
console.log(`Adding pop ${addItem("pop")}`);
 console.log(basket);
console.log(`Adding chips ${addItem("chips")}`);
 console.log(basket);
console.log(`Adding ice cream ${addItem("ice cream")}`);
 console.log(basket);
console.log(`Adding 6th item - oreos ${addItem("oreos")}`);
 console.log(basket);

console.log(basket.length);   //verifying how many items in basket

listItems(basket); // calling function to display each item in the basket



console.log(`Is the basket full? ${isFull(basket)}`);

let cutIt = prompt('What item would you like to remove?');
console.log(`You removed `,removeItem(cutIt));  //testing to see if item is removed
console.log(`This is what's left in your basket: ${basket} `);
console.log(basket);  //verifying that the item has been removed, or isn't there

empty(basket);  //empties all items from the basket
console.log(basket);


function addItem(item){
    if(isFull(basket)){  //part of stretch exercise
        console.log('Your basket is full.');
        return false;
    }
    else {
        basket.push(item);
        return true};
}  //end addItem function


function listItems(cart){
    console.log('In your basket you currently have:')
    for (let entry of cart){
        console.log(entry);  //prints off the itemized array value
    }
}
function empty(){
    // since basket is global, do not need to use parameter
 while (basket.length > 0){
        basket.pop();
        console.log(`inside array there are ${basket.length} items`);
       }
    console.log(`the array is now ${basket}`);
    return basket;
}

function isFull(){
    if (basket.length < maxItems){
        return false;
    }
    else {return true};
}

function removeItem(item){
    spot = basket.indexOf(item);
    // console.log(spot);
    if(spot >= 0){
        basket.splice(spot,1);
        return item;
    }
    else {console.log(`Sorry, ${item} wasn't in the basket`);
        return null
    };
}








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
