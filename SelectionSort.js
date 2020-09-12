function selecSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1 /*we want it starts fromthe second element */; j < arr.length; j++) {
            //create a simple condition to check with the value of the array is the lowest - minimum - and then compare that to the value of the array at J. 
            if (arr[j] < arr[lowest]) {
                lowest = j;

            }
        } //use if conditional so we dont swap what is already sorted (in order)
        if (i !== lowest) {
            console.log('SWAPPING TO')
            let temp = arr[i]; //define a variable and save i value
            arr[i] = arr[lowest]; //change i value to the lowest - swicthing values to sort the array
            arr[lowest] = temp; // change the value of temp - sort it 
            console.log(arr);
        }

    }
    return arr
}

selecSort([34, 22, 10, 19, 17])
/*i,j,lowest
0,1,1
0,2,2
0,3,2
0,4,2
THE INDEX 2 IS THE LOWEST WE HAVE TO SWAP 0 -> 2 - OUT OF THE LOOP

*/