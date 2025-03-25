var breakfast = ["coffee", "croissant"];

function insertAt(arr, index, value){
    arr[arr.length] = undefined;

    for (var i = arr.length - 1; i > index; i--){
        arr[i] = arr[i - 1];

    }

    arr[index] = value;

    return arr;
}

insertAt(breakfast, 1, "eggs")
console.log(breakfast); // ["Orange Juice", "Eggs", "coffee", "croissant"]