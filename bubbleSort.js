// let arr = [2, -5, 5, 10, -2, 8, 3];
// let swap = false;

// do {
//   swap = false;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       swap = true;
//     }
//   }
// } while (swap);

// console.log(arr);


let arr = [10,4,6,-8,0,36,12,-1]

function bubbleSort(arr){
  let swap = false;
  do{
    swap = false;
    for(i = 0;i < arr.length - 1;i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swap = true
      }
    }
  }while(swap)
}

bubbleSort(arr);
console.log(arr);

// let arr = [2, -5, 5, 10, -2, 8, 3];

// function bubbleSort2(arr){
//   for(i = 0;i < arr.length;i++){
//     for(j = 0;j < (arr.length - i - 1);j++){
//       if(arr[j] > arr[j + 1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//       }
//     }
//   }
// }

// bubbleSort2(arr);
// console.log(arr);