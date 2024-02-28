let a = [2,-5,11,100,20,-20,3,0,5,6,9,4,7]

for(j=1;j<a.length;j++){
    let temp = a[j];
    let swap = false;
    for(i=j-1;j>=0;j--){
        if(a[i]>temp){
            a[i+1]=a[i];
            swap = true;
        }else
            break
    }
    if(swap)
        a[i] = temp;
}
console.log(a);


// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         let temp = arr[i];
//         let j = i - 1;
//         while(temp < arr[j] && j >=0){
//             arr[j+1] = arr[j];
//             j = j-1;
//         }
//         arr[j+1] = temp 
//     }
// }
// insertionSort(a);
// console.log(a);



// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         let j = i-1;
//         let temp = arr[i];

//         while(arr[j]>temp && j >= 0){
//             arr[j+1] = arr[j]
//             j--;
//         }
//         arr[j+1] = temp;
//     }
// }

// insertionSort(a)
// console.log(a);