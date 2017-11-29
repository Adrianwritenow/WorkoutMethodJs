// set up arrays
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

// array.reduce - find largest number
var largestValue = numbers.reduce(function(x,y){ return x > y ? x : y });
console.log('largest number: ' + largestValue);

// array.reduce - find longest string
var longest = strings.reduce(function(x,y){ return x.length > y.length ? x : y});
console.log('longest word: ' + longest);

// array.filter - find even numbers
var evens = numbers.filter(function(x){ return x%2 === 0});
console.log('even numbers: ' + evens);

// array.filter - find odd numbers
var odds = numbers.filter(function(x){ return x%2 !== 0})
console.log('odds numbers: ' + odds);

// array .filter - find words that contain 'is'
var wordsWithIs = strings.filter(function(x){ return x.indexOf('is') >= 0})
console.log('words containing is: ' + wordsWithIs);

// array.every - assert all numbers are divisible by three
var divisibleByThree = evens.every(function(n){ return n%3 === 0 });
console.log('All numbers divisible by three: ' + divisibleByThree);

// array.join - zip two arrays together
var joined = evens.concat(odds);
console.log('joined even and odd arrays: ' + joined);

//  sort joined array from smallest to largest
var sorted = joined.sort(function(l,r){ return l - r });
console.log('sorted array ' + sorted);

// remove the last word
var lastWord = strings.pop();
console.log('popped word: ' + lastWord);

// put a new word in the array
strings.push('mots');
console.log('strings: ' + strings);

// remove the first word in the array
var word = strings.shift();
console.log('removed from start: ' + word);
console.log('strings: ' + strings);

// place a new word at the start of the array
strings.unshift('this');
console.log('added to start: ' + 'this');
console.log('strings: ' + strings);

// grab a subset of elements
var sliced = strings.slice(0,3);
console.log('subset: ' + sliced);
console.log('strings: ' + strings);

// replace some elements
var x = strings.splice(0, 3, 'test', '123');
console.log('removed: ' + x + ' and replaced with test,123');
console.log(strings);

var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

console.log(customers);

// find all customers whose firstname starts with 'J',
// create projection combined of firstname and lastname,
// then sort alphabetically

var projections = customers
    .filter(function(c){ return c.firstname.indexOf('J') == 0 })
    .map(function(c){ return { name : c.firstname + ' ' + c.lastname }})
    .sort(sortByName);

function sortByName(c1, c2) {
    if(c1.name < c2.name){
        return - 1
    } else if (c1.name > c2.name){
        return 1
    } else {
        return 0
    }
}

console.log(projections);
