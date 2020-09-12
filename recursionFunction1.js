//invoke tge SAME function with a different input until you reach your base case!
//BASE CASE: THE CONDITION WHEN THE RECURSION ENDS. - FOR A NOT INFINITY LOOP


function countDown(num) {
    if (num <= 0) { //base case 
        console.log("All done");
        return //The return statement stops the execution of a function and returns a value from that function
        //If omitted, it returns undefined
    }
    console.log(num);
    num--;
    countDown(num)

};

countDown(3)

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
};

sumRange(3)