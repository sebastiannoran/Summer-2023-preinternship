function findMax (arr) {
    if (arr.length === 0) {
        return null;
    } 
    let largestSum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestSum) {
            largestSum = arr[i];
        }
    }
    return largestSum;
}

module.exports = findMax;