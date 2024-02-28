// let arr = [0,-8,5,3,-1,4,9,2]

// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[j] < arr[i]){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
// }

// console.log(arr);

let arr = [0,-8,5,3,-1,4,9,2]

function selectionSort(arr){
    for(i=0;i<arr.length;i++){
        let min = i;
        for(j=i+1;j<arr.length;j++){
            if(arr[min] > arr[j])
                min = j
        }
        if(min !== i)
            [arr[i],arr[min]] = [arr[min],arr[i]];
    }
}

selectionSort(arr);
console.log(arr);