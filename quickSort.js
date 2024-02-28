

// function quickSort(a){
//     if(a.length < 2)
//         return a;
//     let piv = a[a.length - 1]
//     let left = [];
//     let right = [];
//     for(i=0;i<a.length - 1;i++){
//         if(a[i] < piv){
//             left.push(a[i]);
//         }else
//             right.push(a[i]);
//     }
//     return [...quickSort(left),piv, ...quickSort(right)]
// }

// console.log(quickSort(a));


let a = [2,-5,11,100,20,-20,3,0,5,6,9,4,7]
console.log(a);

function QuickSort(arr){
    if(arr.length <= 1)
        return arr;
    let piv = arr[0]
    let left = [];
    let right = [];
    for(i = 1; i < arr.length; i++){
        if(arr[i] < piv){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left),piv,...QuickSort(right)];
}

console.log(QuickSort(a));