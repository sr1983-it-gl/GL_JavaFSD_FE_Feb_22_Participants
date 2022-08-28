

let programmingLanguages = new Array();

programmingLanguages.push("Java Script");
programmingLanguages.push("Python");
programmingLanguages.push("Java");
programmingLanguages.push("C");
programmingLanguages.push("C++");
programmingLanguages.push("Go");


console.log("Looping through for-each variation");

function processElementInArray(currentElement, currentIndex, 
  currentArray){

    console.log("Processing individual Element -> " 
      + currentElement + ", Index ->" + currentIndex);
}

programmingLanguages.forEach(processElementInArray);

