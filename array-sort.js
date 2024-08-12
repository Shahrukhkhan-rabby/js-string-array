const numbers = [6, 8, 4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers); 
const friends = ['Rubel', 'Rentu', 'Sentu', 'Alom', 'Sohel', 'Bacchu'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);
const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBigNumbers);
