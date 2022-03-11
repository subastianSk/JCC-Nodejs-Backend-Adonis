function kelompokAngka(arr) {
    var array1 = []
    var array2 = []
    var array3 = []
    var array_res = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] % 3 != 0) {
            array2.push(arr[i])
        } else if (arr[i] % 2 != 0 && arr[i] % 3 != 0) {
            array1.push(arr[i])
        } else if (arr[i] % 3 == 0) {
            array3.push(arr[i])
        }
    }
    array_res.push(array1)
    array_res.push(array2)
    array_res.push(array3)
    return array_res

}

//Test Case

console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7]))

//Output:[[1,5,7],[2,4],[3,6]]

console.log(kelompokAngka([13, 27, 11, 15]))

//Output:[[13,11],[],[27,15]]

console.log(kelompokAngka([]))

//output:[[],[],[]]