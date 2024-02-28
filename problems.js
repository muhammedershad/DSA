// let arr1 = [1,2], arr2 = [3,4];
let arr1 = [1,2], arr2 = [3,4,5];
let product = [];
let i = 0;
while(i < arr1.length){
    let j = 0;
    while(j < arr2.length){
        product.push([arr1[i],arr2[j]])
        j++;
    }
    i++;
}
console.log(product);