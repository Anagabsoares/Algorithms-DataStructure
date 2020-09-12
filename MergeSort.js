//merging 2 sorted arrays
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;

    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }

    return results
};



// merge([7, 4, 9, 2], [1, 6, 3, 8]) //need to be sorted, so this one is not going to work

// merge([100, 200], [1, 2, 3, 5, 6])

//ANOTHER SOLUTION

/*Pseudoocode
- Break up the array into halves until you have arrays that
are empty or have one element.
-Once you have smaller aorted arrays, merge those arrays with 
other sorted arrays untilyoure are back at the full length of the array;
-Once the array has been merged back together, return the
merged(and sorted) arrya
*/


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    //mergeSort() -  call itself - recursion
    let midPoint = Math.floor(arr.length / 2); //that gives us the halfway points
    let leftSide = mergeSort(arr.slice(0, midPoint));
    let rightSide = mergeSort(arr.slice(midPoint)); //from mid point until the end
    return merge(leftSide, rightSide);
};

mergeSort([9, 4, 32, 3, 3, 4, 5, 7, 8,])