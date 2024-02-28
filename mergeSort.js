function mergeSort(arr){
    let mid = Math.floor(arr.length/2);
    if(mid < 1)
        return arr;
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

function merge(leftArr,rightArr){
    let sortArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0])
            sortArr.push(leftArr.shift());
        else
            sortArr.push(rightArr.shift());
    }
    return [...sortArr, ...leftArr,...rightArr]
}

let a = [2,-5,11,100,20,-20,3,0,5,6,9,4,7]
console.log(mergeSort(a));
