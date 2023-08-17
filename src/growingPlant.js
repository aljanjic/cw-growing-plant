function growingPlant(upSpeed, downSpeed, desiredHeight) {

  // // Create dayCounter and currentHeight variable
  // let dayCounter = currentHeight = 0;

  // // While loop that will increase dayCounter and currentHeight variable based on upSpeed and downSpeed inputes
  // while(true){
  //   dayCounter++;
  //   currentHeight += upSpeed;
  //   // If desiredHeight >= currentHeight, break the loop
  //   if(currentHeight >= desiredHeight) break;
  //   currentHeight -= downSpeed;
  // }

  // // return the dayCounter

  // return dayCounter;


  // Create dayCounter and currentHeight variable

  let i = 1;
  //  loop that will increase dayCounter and currentHeight variable based on upSpeed and downSpeed inputes

  for (let currentHeight = upSpeed; currentHeight < desiredHeight; currentHeight += upSpeed){
    currentHeight -= downSpeed;
    i++;
  }
    
  

  // return the dayCounter

  return i;
}

module.exports = growingPlant;
