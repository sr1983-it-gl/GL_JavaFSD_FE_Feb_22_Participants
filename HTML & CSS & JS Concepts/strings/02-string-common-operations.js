let message = "Repeat";
let repeatedMessage = message.repeat(3);

console.log(message);
console.log(repeatedMessage);

let playerName = "sachin tendular";
let playerNameUpperCase = playerName.toUpperCase();

console.log(playerName);
console.log(playerNameUpperCase);

let result1 = playerName.substring(0, 5 + 1);
console.log(result1);

console.log("Concatetation Demo...")
let result2 = 
message.concat(repeatedMessage).concat(playerName);
console.log(result2);

console.log("String-> Split Demo...")

let playerNameSplitted = playerName.split(" ");
console.log(playerNameSplitted);