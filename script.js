
const firstArr = [1,2,3, 'hello',4,5];
const secondArr = [1,2,3, true, 4, undefined, 6];
function getSumOfNumberInArr(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number") sum += arr[i]
    }
    return sum
}
function getArray(arr1, arr2){
    const sumOfFirstArray = getSumOfNumberInArr(arr1);
    const sumOfSecondArray = getSumOfNumberInArr(arr2);
    return sumOfFirstArray > sumOfSecondArray ? arr1 : arr2;
}
console.log(getArray(firstArr,secondArr));
