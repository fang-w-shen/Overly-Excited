// Create an array that contains the words in the sentence

var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
     var message = "";
     for (var i = 0; i < theWordArray.length; i++) {
     	message+=" "+theWordArray[i];
     	console.log(message); 
     }
 }

// Invoke the function and pass in the array
addExcitement(sentence);

function addExcitements (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
     var message = "";
     for (var i = 0; i < theWordArray.length; i++) {
     	message+=" "+theWordArray[i];
     	if (((i+1) % 3) === 0) {
     		message+="!";
     	}
     	console.log(message); 
     }
 }

// Invoke the function and pass in the array
addExcitements(sentence);

function addExcitementss (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
     var message = "";
     for (var i = 0; i < theWordArray.length; i++) {
     	message+=" "+theWordArray[i];
     	if (((i+1) % 3) === 0) {
     		for (var j = 0; j < i/3; j++) {
     		message+="!";
     		}
     	}
     	console.log(message); 
     }
 }

// Invoke the function and pass in the array
addExcitementss(sentence);