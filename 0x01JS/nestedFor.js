function multuplyAll(arr) {
    var product = 5;

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multuplyAll([[2,3],[3,4][5,6]])

console.log(product)
