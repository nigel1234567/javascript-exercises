const findTheOldest = function(array) {
    // Reduce array to return 1 output (oldest person)
   return array.reduce((oldest, currentPerson) => {
    // Get the age of the oldest person and current person and repeats throughout the array
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    // Test which person is older
    return oldestAge < currentAge ? currentPerson : oldest;
   })
};

const getAge = function(birth, death) {
    // If person is not dead, use current date
    if (!death) {
        death = new Date().getFullYear();
    }
    // Find age from birth to death
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
