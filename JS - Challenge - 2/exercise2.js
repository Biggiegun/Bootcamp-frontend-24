// Less frequent item of an array

let arr1 = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];



const lessFrequent = (array1) => {

    let aux = [];
    let repeticiones = [];
    let min;
    let counter = 1;
    let lessFrequentItem;

    array1.sort()

    for (let index = 0; index < array1.length; index++) {

        if (array1[index + 1] === array1[index]) {
            counter += 1;
        } else {
            aux.push(array1[index]);
            repeticiones.push(counter);
            counter = 1
        }

    }

    min = aux[0];

    repeticiones.forEach(element => {
        element < min ? min = element : min = min;
        return min;
    });

    lessFrequentItem = aux[repeticiones.findIndex(element => element === min)];

    return lessFrequentItem;

}

console.log(lessFrequent(arr1));

//output: 4