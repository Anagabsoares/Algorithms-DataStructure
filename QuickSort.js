//*It will help to accept 3 arguments: an arr, a start index, end index
//(these can defauld to 0 and the array length minus 1, respectively
// *Grab the pivot from the start of the array;
//*Store the current pivot index in a vaiable(this will keep traack of where the 
//pivot should end up)
//Loop through the array from the start until the end;
// - if the pivor is greater than the current element, increment the pivot index 
//variable and then swap the current element withe the elee=ment at the pivot index;
//*Swap the starting element(i.e the pivot) with the pivot index
//*return the pivot index


function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = arr[j];
        array[j] = temp;
    }


    let pivot = arr[start]; //first element in the array
    let swapIdx = start; //track of where we are going to swap this for you at the very end;


    for (var i = start + 1; i < arr.length; i++) { //looping everything after start
        if (pivot > arr[i]) { //first compare pivot to array of i
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])
//the code will retun the index of the pivot  - ONCE IS SORTED

quickSort([4, 6, 9, 1, 2, 5, 3]);

function quickSort(arr, left = 0, right = arr.lenght - 1) {
    pivotIdx = pivor(arr, left, right)
};