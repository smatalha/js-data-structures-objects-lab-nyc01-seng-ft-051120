// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = { ...driver }
  delete newObj[key];

  return newObj;
}

function deleteFromDriverByKey(driver, key) {

}

function destructivelyDeleteFromDriverByKey(driver, key) {

}

function destructivelyDeleteFromDriverByKey(driver, key) {

}
