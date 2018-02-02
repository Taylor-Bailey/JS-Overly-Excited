console.log("Hello, world!");

// Create an array that contains the words in the sentence
let sentence = ["The ", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let iterativeWords = "";
function addExcitement (theWordArray) {
    for (var i = 0; i < theWordArray.length; i++) {
        iterativeWords += theWordArray[i] + " ";
        console.log(iterativeWords)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);
