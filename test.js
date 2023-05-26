let arr = [1, 2, 3, 4, 5];
let size = 1;

var chunk = function (arr, size) {
    let mat = [...Array(5)].map(e => Array(1));

    for (let i = size; i < mat.length; i++) {
        for (let j = i; j < mat[0].length; j++) {
            if (j < arr.length) {
                mat[j].push(arr[j]);
            }
        }
    }
    return mat;
}
console.log(chunk(arr, size))