//  Array that always has 2 repeated elements except for ONE. Find the element that is not repeated in this example.

const myArray = [1, 2, 4, 7, 4, 2, 1];

const myFunction = array1 => array1.sort().pop();

//console.log(myFunction(myArray));

//--------------------------------------------------------------------------------------------------

const findNoDuplicated = (array1) => {

    let noDuplicated = [];

    let aux = array1.filter((item, index) => array1.indexOf(item) !== index);

    for (let i = 0; i < array1.length; i++) {
        if (!aux.includes(array1[i])) {
            noDuplicated.push(array1[i]);
        }
    }

    // Because there is only one non repeated element...
    return noDuplicated.shift();

}

console.log(findNoDuplicated(myArray));

// Result: 7