// https://github.com/adityasinghaarko/jsProblems

// Solution of the first problem:

function kilometerToMeter(km) {
    if (km < 0) {
        console.log(km, "km can not be converted to meter.");
    }
    else {
        var result = km * 1000;       //1km = 1000m
        return result;
    }
}
var fourKm = kilometerToMeter(4);
console.log(fourKm);

// Solution of the second problem:

function budgetCalculator(amountOfWatches, amountOfPhones, amountOfLaptops) {
    var totalBudget = 0;
    if (amountOfWatches < 0 || amountOfPhones < 0 || amountOfLaptops < 0) {
        console.log("err: Please enter valid amount of products.");
    }
    else {
        var paymentForWatches = amountOfWatches * 50;
        var paymentForPhones = amountOfPhones * 100;
        var paymentForLaptops = amountOfLaptops * 500;

        totalBudget = paymentForWatches + paymentForPhones + paymentForLaptops;
        return totalBudget;
    }
}

var myBudget = budgetCalculator(2, 3, 1);
console.log(myBudget);


// Solution of third problem:

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 0) {
        console.log("err: Please enter valid timeline(day) to execute your cost.")
    }
    else if (day <= 10) {
        totalCost = day * 100;
    }
    else if (day <= 20) {
        var firstTenDay = 1000;
        var remaining = day - 10;
        var costForRemainingDays = remaining * 80;
        totalCost = firstTenDay + costForRemainingDays;
    }
    else if (day > 20) {
        firstTenDay = 1000;
        var nextTenDay = 10 * 80;
        remaining = day - 20;
        costForRemainingDays = remaining * 50;
        totalCost = firstTenDay + nextTenDay + costForRemainingDays;
    }

    return totalCost;
}

var myVacationDays = hotelCost(21);
console.log(myVacationDays);


//Solution for fourth problem:

function megaFriend(names) {
    var highestLength = 0;
    var maxLengthNamedFriend = '';
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        var elementLength = element.length;
        if (elementLength > highestLength) {
            maxLengthNamedFriend = element;
            highestLength = elementLength;
        }
    }
    return maxLengthNamedFriend;
}

var myFriends = ['HTML', 'CSS', 'Javascript', 'Python', 'C'];
var checkMegaFriend = megaFriend(myFriends);
console.log(checkMegaFriend);