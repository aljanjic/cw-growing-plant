function growingPlant(upSpeed, downSpeed, desiredHeight) {

  // Create dayCounter and currentHeight variable
  let dayCounter = currentHeight = 0;

  // While loop that will increase dayCounter and currentHeight variable based on upSpeed and downSpeed inputes
  while(true){
    dayCounter++;
    currentHeight += upSpeed;
    // If desiredHeight >= currentHeight, break the loop
    if(currentHeight >= desiredHeight) break;
    currentHeight -= downSpeed;
  }

  // return the dayCounter

  return dayCounter;
}

module.exports = growingPlant;
