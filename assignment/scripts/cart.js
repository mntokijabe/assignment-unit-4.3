console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;


console.log(basket.length);
function addItem(item){
    if(isFull(basket)){
        console.log('Your basket is full.');
        return false;
    }
    else {
        basket.push(item);
        return true};
}  //end addItem function

console.log(`Adding gum ${addItem("gum")}`);  //testing addItem function
 console.log(basket);
console.log(`Adding candy ${addItem("candy")}`);
 console.log(basket);
console.log(`Adding pop ${addItem("pop")}`);
 console.log(basket);
console.log(`Adding chips ${addItem("chips")}`);
 console.log(basket);
console.log(`Adding ice cream ${addItem("ice cream")}`);
 console.log(basket);
 console.log(`Adding 6th item ${addItem("oreos")}`);
 console.log(basket);

function listItems(cart){
    console.log('In your basket you currently have:')
    for (let entry of cart){
        console.log(entry);
    }
}
listItems(basket);


function empty(array){
    console.log(array);
    console.log(array.length);
    let cart1 = array
 while (cart1.length > 2){
        cart1.pop();
        console.log(`inside array there are ${cart1.length} items`);
       }
    console.log(`the array is now ${array}`);
    return cart1;
}

function isFull(items){
    if (items.length < maxItems){
        return false;
    }
    else {return true};
}

//basket = empty(basket);
console.log(`this is what's left in your basket: ${basket}`);

console.log(`Is the basket full? ${isFull(basket)}`);

function removeItem(item){
    spot = basket.indexOf(item);
    console.log(spot);
    if(spot > 0){
        basket.splice(spot,1);
        return item;
    }
    else {return null};
}

console.log(removeItem("soda"));
console.log(basket);



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
