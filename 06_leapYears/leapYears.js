const leapYears = function(year) {
    // Years divisible by 100
    if (year % 100 == 0) {
        // Years divisible by 100 and 400 (true)
        if (year % 400 == 0) {
            return true
        }
        // Years divisible by 100 but not 400 (false)
        else {
            return false
        }
    }
    // Years divisible by 4
    else if (year % 4 == 0) {
        return true
    }
    // All other scenarios
    else {
        return false
    }

};

// Do not edit below this line
module.exports = leapYears;
