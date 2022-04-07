const palindromes = function (str) {
    
    // Make all uppercase
    str = str.toUpperCase()

    // Remove special characters (using RegEx)

    str = str.replace(/[^a-zA-z0-9]/g, '')

    // Make string into array
    strArray = [...str]

    // Create reverse array
    strRev = []
    for (var i = strArray.length - 1; i> -1; i--){
        strRev.push(strArray[i]);
    }
    
    // Convert back to string
    str = strArray.toString()
    rev = strRev.toString()

    // Test if palindrome
    if (str == rev) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
