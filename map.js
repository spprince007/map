const numbers = [12, 17, 29, 30, 89, 85];
const half = numbers.map(n => n / 2);
//console.log(half);
const friends = ['mykel ratna', 'sakib hasan', 'habibur Rahman', 'mahedi hasan'];
// const fName = friends.map(friend => friend[0]);
// console.log(fName);
const fullLength = friends.map(friend => friend.length);
const fullLengthString = parseInt(fullLength);
const heightNumber = Math.max(fullLengthString);
console.log(heightNumber);
