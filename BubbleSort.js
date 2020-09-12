function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(i, j)
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //SWAP
                let swap = arr[j]; // we create a variable
                arr[j] = arr[j + 1]; //we change the value of arr[j]
                arr[j + 1] = swap;

            }
        }

    }
    return arr
}

bubbleSort([3, 7, 8, 2, 9])


//better version
//start  the loop from the end to the beggining of the array 
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) { //i = 4
        for (let j = 0; j < i - 1 /*this give us 3 comparisons*/; j++) {
            console.log(i, j)
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //SWAP
                let swap = arr[j]; // we create a variable
                arr[j] = arr[j + 1]; //we change the value of arr[j]
                arr[j + 1] = swap;

            }
        }
        console.log('ONE PASS COMPLETED')
    }
    return arr
}

bubbleSort([3, 7, 8, 2,])

//