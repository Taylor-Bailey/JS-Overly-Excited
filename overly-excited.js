// console.log("Hello, world!");

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let ownPhrase = ["I", "don't", "know", "why", "there's", "space", "between", "the", "exclamation", "marks", ", but", "I'm", "overly", "excited", "to", "have", "this", "done"]

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

let iterativeWords = [];
function addExcitement (theWordArray, exclaim) {
    for (var i = 0; i < theWordArray.length; i++) {
        iterativeWords += theWordArray[i] + " ";
        console.log(iterativeWords);
        let thirdWord = i + 1;
        let counter = thirdWord / 3;
        let excitement = exclaim;
        if (thirdWord % 3 === 0) {     
            iterativeWords += excitement.repeat(counter) + " ";
            console.log(iterativeWords);
        }
    }
}

// Invoke the function and pass in the array

// addExcitement(sentence, "!");
// addExcitement(sentence, "?");
addExcitement(ownPhrase, "!");