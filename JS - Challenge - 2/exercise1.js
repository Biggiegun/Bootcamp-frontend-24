// Smallest number in the array

let arr1 = [12, 6, 10, 2, 45, 100];

let min = arr1[0];

const smallestInsideTheArray = (array1) => {

    array1.forEach(element => {

        element < min ? min = element : min = min;
    });
    return min;

}

console.log(smallestInsideTheArray(arr1));
//output : 2;