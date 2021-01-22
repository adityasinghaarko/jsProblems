// https://github.com/adityasinghaarko/jsProblems

// Solution of the first problem:

function kilometerToMeter(km) {
    if (km < 0) {
        console.log(km,"km can not be converted to meter.");
    }
    else {
        var result = km * 1000;       //1km = 1000m
        return result;
    }
}
var fourKm = kilometerToMeter(4);
console.log(fourKm);

// Solution of the second problem:

function budgetCalculator(amountOfWatches, amountOfPhones, amountOfLaptops){
    if(amountOfWatches < 0 || amountOfPhones < 0 || amountOfLaptops < 0){
        console.log("err: Please enter valid amount of products.");
    }
    else{
        var paymentForWatches = amountOfWatches * 50;
        var paymentForPhones = amountOfPhones * 100;
        var paymentForLaptops = amountOfLaptops * 500;

        var totalBudget = paymentForWatches + paymentForPhones + paymentForLaptops;
        return totalBudget; 
    }
}

var myBudget = budgetCalculator(2, 3, 1);
console.log(myBudget);


