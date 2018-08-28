// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map (function(name) {return name.toLowerCase()})
}

function nameToAttributes(arrayOfNames) {
  let newArray = []
  let i = 0;
  for (let entry of arrayOfNames) {
    let splitEntry = entry.split(" ")
    newArray[i] = {}
    newArray[i]["firstName"] = splitEntry[0];
    newArray[i]["lastName"] = splitEntry[1];
    i++;
  }
  return newArray;
}


function attributesToPhrase(arrayOfNameInfo) {
  return arrayOfNameInfo.map (
    function (nameInfo) {
      name = nameInfo["name"];
      hometown = nameInfo["hometown"];
      return `${name} is from ${hometown}`
    }
  )
}
