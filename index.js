// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) return 0;
  else if (
    distanceTravelledInFeet(start, destination) > 400 &&
    distanceTravelledInFeet(start, destination) <= 2000
  ) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  } else if (
    distanceTravelledInFeet(start, destination) <= 2500 &&
    distanceTravelledInFeet(start, destination) > 2000
  ) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return `cannot travel that far`;
  }
}
