// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  // const newDriver = { ...driver };

  driver[key] = value;

  return driver;
}
