const fibonacci = function(y) {
    
    let x = y - 2

    // Create array up till integer x
    let array = []
    for (i= 1; i < x + 1; i++) {
        array.push(i)
    }
    
    // Create array for fibonacci sequence
    let fibArray = [1]
    
    if (y == 1) {
        return 1
    } else if (y < 0) {
        return "OOPS"
    } else {

        // Create var for prevNum (prev number in sequence) and currNum 
        var currNum = 0
        var prevNum = 1
        var prevNum2 = 0

        // Loop to add prevNum with currNum and add into array
        for (j = 0; j < x + 1; j++) {
            currNum = prevNum + prevNum2
            fibArray.push(currNum)
            // Update prevNum and prevNum2 for next round of loop
            prevNum2 = prevNum
            prevNum = currNum
        }
    }

    let result = 0
    result = fibArray.pop(-1)

    return result

};

// Do not edit below this line
module.exports = fibonacci;
