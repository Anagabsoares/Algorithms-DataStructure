
//longer version
function binarySearch(arr, elem) {
    let start = 0; //index of zero
    let end = arr.length - 1; // minus one otherwise ae're going to be out if bounds
    let middle = Math.floor((start + end) / 2); //Math.floor() function returns the largest integer less than or equal to a given
    while (arr[middle] !== elem && start <= end) {
        console.log(start, middle, end);
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start, middle, end);
    if (arr[middle] == elem) {
        return middle
    } //so stop the infinity loop
    return -1

}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50);

//SHORTER VERSION

function binarySearch(arr, elem) {
    let start = 0; //index of zero
    let end = arr.length - 1; // minus one otherwise ae're going to be out if bounds
    let middle = Math.floor((start + end) / 2); //Math.floor() function returns the largest integer less than or equal to a given
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? /*(? = if that is true)*/ middle : -1; /*return middle else return -1 */

}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5555);
