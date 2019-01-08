// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  return Math.abs (blocks - 42)
};

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks)*264
};

function distanceTravelledInFeet(start,end){
  return Math.abs(end - start)*264
};

function calculatesFarePrice(start,end){
const trip = distanceTravelledInFeet(start,end)
  if (trip < 400){
    return 0}
  else if (trip > 400 && trip < 2000){
    return (trip - 400) * .02}
  else if (trip> 2000 && trip < 2500){
    return 25}
  else {return 'cannot travel that far'}
  };
