function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i + j])
            if (short[j] !== long[i + j]) {
                console.log('BREAAAKKKK')
                break;
            }
            if (j === short.length - 1) /* -1, because of length its going to be greater than the index*/ {
                console.log("FOUND ONE");
                count++
            }
        }
    }
    return count
};

naiveSearch("lorielol loled", "lol")

//we loop through every character 
