let arr= [1, 13, 5, 7, 11];
//  let newArr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }
let newArr = arr.map((e, index, arr)=>{
    return e**2

})
console.log(newArr)
 const greaterThanSeven = (e)=>{
    if(e>7){

return true
    }
    return flase
 }

console.log(arr.filter(greaterThanSeven))