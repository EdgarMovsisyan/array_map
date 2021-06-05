let arr = [55, 47, 62, 32, 12, 25, 87, 1];

function map(inputArr, summable) {
    let newArr = [];
    for(i = 0; i < inputArr.length; ++i) {
        newArr.push(inputArr[i] + summable);
    }
    return newArr;
}

console.log(map(arr, 10));