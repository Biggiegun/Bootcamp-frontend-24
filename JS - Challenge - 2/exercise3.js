// Write a JS program to remove duplicates in an array.

let arr2 = [7, 9, 1, "a", "a", "f", 9, 4, 2, "d", "d"];


const removeDuplicates = (array1) => {

    let aux = array1;

    let unique = [];
    let dataToRemove = [];
    let unique_ = [];

    for (let i = 0; i < aux.length; i++) {
        if (unique.includes(aux[i])) {
            dataToRemove.push(aux[i]);
        } else {
            unique.push(aux[i]);
        }
    }

    for (let i = 0; i < unique.length; i++) {
        if (!dataToRemove.includes(unique[i])) {
            unique_.push(unique[i]);
        }
    }

    return unique_;
}

console.log(removeDuplicates(arr2));
//output: [7,1,"f",4,2]