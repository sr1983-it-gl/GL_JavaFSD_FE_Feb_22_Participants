
console.log("Segment 1 of the program...");



console.log("Segment 2 of the program...");

let deviceObj = '{"deviceName : "Lenova Laptop", "color" : "blue"}';

try{
  jsonObj = JSON.parse(deviceObj);

  console.log(jsonObj.deviceName);
  console.log(jsonObj.color);

}catch(error){
  console.log("Error has happened ->" + error);
}


console.log("Segment 3 of the program...");



console.log("Segment 4 of the program...");
