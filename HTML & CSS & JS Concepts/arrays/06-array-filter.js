
let numbers = new Array();

for (i=1; i<=10; i++){
  numbers.push(i);
}

// Filter
// Filter out only odd numbers
// Filter out prime number

let oddNumbers = numbers.filter(oddNumberFilter)

function oddNumberFilter(currentElement, currentIndex, entireArray){

  if (currentElement %2 !=0){
    return currentElement;
  }
}

function evenNumberFilter(currentElement, currentIndex, entireArray){

  if (currentElement %2 == 0){
    return currentElement;
  }
}


let evenNumbers = numbers.filter(evenNumberFilter);

console.log(numbers);
console.log(oddNumbers);
console.log(evenNumbers);
