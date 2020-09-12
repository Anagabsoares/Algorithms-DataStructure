//HELPER METHOD 

function collectOddValues(arr) {

    let result = []; //we create an empty array where we wil then store our data in and then we call our helper function.

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1)) //*exclude the first element of the array
    }

    helper(arr)

    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])


//pure recursively function

function collectOddValues2(arr) {
    let newArr = []; //This is going to be an empty array every time the function is called recursively down here.
    // What's different is that we don't care we want it to work that way.
    // And what we actually do is concatenate all the arrays at the very very end into one array and return
    // that.

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}

collectOddValues2([1, 2, 3, 4, 5])




