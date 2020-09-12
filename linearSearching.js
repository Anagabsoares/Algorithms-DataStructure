function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        console.log('tHATS IS THE VALUE OF i: ' + i)
        if (arr[i] === val) {
            return i // i want to know the indexs
        };

    }
    return -1
};

linearSearch([1, 12, 67, 45], 45)