const sumAll = function(x, y) {
    let result = 0;
        // For non-numeric parameters
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        result = "ERROR";
    }
    // For if parameters are negative numbers
    else if (x < 0 || y < 0) {
        result = "ERROR";
    } 
    // For if larger number is first
    else if (x > y) {
        for (i = y; i < x+1; i++) {
            result = result + i;
        }
    } 
    // For if smaller number is first
    else if (x < y) {
        for (i = x; i < y+1; i++) {
            result = result + i;
        }
    }

    // All other results
    else {
        result = "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
