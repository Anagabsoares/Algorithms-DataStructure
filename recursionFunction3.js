//whrite a function called power which accepts a base and an exponet.T
//The function should return the power of the base to the exponent.
//this function sould mimic the functionality of Math.pow() - do nor worry about negatives bases ans exponents 


function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1)

}

function factorial(n) {
    if (n <= 1) {
        return 1
    };
    return n * factorial(n - 1);

}

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1
    }
    return arr[0] * productOfArray(arr.slice(1));

};
productOfArray([1, 2, 3])



function recursiveRange(n) {
    if (n === 1) {
        return 1
    }
    return n + recursiveRange(n - 1);
}


function reverse(str) {
    if (str <= 1) {
        return str
    }
    return reverse(str.slice(1) + str[0])
}