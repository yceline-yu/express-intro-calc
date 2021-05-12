const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  console.log("strNums = ", strNums);
  let numsStrArray = strNums.nums.split(",");
  let nums = numsStrArray.map(val => +val);
  if (nums.includes(NaN)){
    //find out value numsStrArray[nums.indexOf(NaN)]
    throw new BadRequestError(message=`${numsStrArray[nums.indexOf(NaN)]} is not a number`);
  } else {
    return nums;
  }
}


module.exports = { convertStrNums };