// Write a JS program to concat arrays.

let data = [["The", "little", "horse"], ["Plane", "over", "the", "ocean"], ["Chocolate", "ice", "cream", "is", "awesome"], ["this", "is", "a", "long", "sentence"]];

const concatArrays = (myData) => {

    let aux;

    aux = '[' + myData.reduce((accum, curr) => accum + ' ,"' + curr + '"','').replaceAll(',', ' ').replaceAll('"  "','","').trim() + ']';

    return aux;
}

console.log(concatArrays(data));
// output: ["The little horse","Plane over the ocean","Chocolate ice cream is awesome","this is a long sentence"]
