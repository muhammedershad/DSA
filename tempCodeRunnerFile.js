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