// Array Helper Methods

// 1.0 The 'filter' Helper

// 1.1.0 Coding Exercise
// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50. Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// function greater50(value) {
// 	return value > 50;
// }

// var filteredNumbers = numbers.filter(greater50);

var filteredNumbers = numbers.filter(function(number) {
    return number > 50;
});

console.log(filteredNumbers);

// 1.1.1 Coding Exercise
// Filter the array of users, only returning users who have admin level access. Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!

var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

// var filteredUsers = users.filter(function(user){
// 	return user.admin === true;
// });

var filteredUsers = users.filter(function(user){
    return user.admin;
});

console.log(filteredUsers);

// 1.1.2 Coding Exercise
// Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});

console.log(lessThanFifteen); // [10]

function reject(array, iteratorFunction) {
    return array.filter(function(item) {
        return !iteratorFunction(item);
    });
}

// 2.0 The 'find' Helper

// 2.1.0 Coding Exercise
// Find the user in the users's array who is an admin. Assign this user to the variable 'admin'.

var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin;
});

console.log(admin);

// 2.1.1 Coding Exercise
// Find the account with a balance of 12 and assign it to the variable 'account'.

var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account = accounts.find(function(account) {
    return account.balance === 12;
});

console.log(account);

// 2.1.2 Coding Exercise
// The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we have a shorthand syntax to find an object like this:

// findWhere(ladders, { height: '20 feet' });

// The object {  height: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet'.

// Your goal: Write a 'findWhere' function that achieves this shorthand approach. 'findWhere' should return the found object.

// Don't touch this code:
var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

var ladder = findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }

// Hint: the hard part of this is figuring out the name of the proeprty on the criteria. You can use Object.keys(criteria)[0] to figure out the name of the property on the object.  For example, Object.keys({ height: '20 feet' }) would return 'height'.  You could then check to see if a given element in the array had a property equal to the criteria's value with something like element[property] === criteria[property].

// Code here:
function findWhere(array, criteria) {
    return array.find(function(item) {
        var property = Object.keys(criteria)[0];
        console.log('property: ', property);
        return item[property] === criteria[property];
    });
}

console.log(ladder);

// 3.0 The 'every' and 'some' Helper

// 3.1.0 Coding Exercise
// Given an array of users, return 'true' if every user has submitted a request form. Assign the result to the variable 'hasSumbmitted'.

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hasSubmitted;
});

console.log(hasSubmitted);

// 3.1.1 Coding Exercise
// Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending';
});

console.log(inProgress);

// 4.0 The 'reduce' Helper

// 4.1.0 Coding Exercise
// Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'.

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(acc, trip) {
    return acc + trip.distance;
}, 0);

console.log(totalDistance);

// 4.1.1 Coding Exercise
// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks. The object returned should have the form '{ sitting: 3, standing: 2 }'. The initial value has been provided to you. Hint: Don't forget to return the accumulator object (the first argument to the iterator function).

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, currentDesk) {
    if (currentDesk.type === 'sitting') { acc.sitting++; }
    if (currentDesk.type === 'standing') { acc.standing++; }

    return acc;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

// 4.1.2 Coding Exercise
// Write a function called 'unique' that will remove all the duplicate values from an array.

// For example, given the following array:

var numbers = [4, 4, 1, 1, 2, 3, 4, 4];

// Your function should return [1, 2, 3, 4]. Hint: Use the 'reduce' and 'find' helpers.

function unique(array) {
    return array.reduce(function(accumulator, element) {
        var duplicate = accumulator.find(function(number) {
            return number === element;
        });

        if (!duplicate) { accumulator.push(element); }

        return accumulator;
    }, []);
}

console.log(unique(numbers));