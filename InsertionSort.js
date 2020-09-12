//start by picking the second element in the array
//now compare the second element with the one before it and swap if necessary
//Continue to the next element and if it is in the incorrect order, iterate through the sorted position- left psoitio - to place the element in the correct place.
//repeated until the array is sorted

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var currentVal = arr[i]; //keep track of the value thar we're looking for 
        //currentval is a temporary val
        //loop to go backwords
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            console.log(arr);
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
insertionSort([2, 0, 5, 6, 1, 3])