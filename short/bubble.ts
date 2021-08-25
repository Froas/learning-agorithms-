const numArr = [5, 7, 4, 3, 8, 2]
const numArr2 = [1, 44, 3, 3, 1, 0, 4, 5]
const numArr3 = [7, 2, 0, 99, 1, 3]
const numArr4 = [6, 1, 9, 12, 3, 7, 5, 3, 0]
const con = 0

function bubble(arr, con){
  
  let count = [con]
  const newaArr = []
  
  const bub = arr.reduce((acc, curr) => acc > curr 
    ? (newaArr.pop(), newaArr.push(curr), newaArr.push(acc), count.push(1), acc) 
    : (newaArr.push(curr),curr), arr[0])
  
    const counted = count.reduce((x, y) => x + y)
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)
  const rec = equals(arr,newaArr) ? [newaArr, counted] : bubble(newaArr, counted)
  return rec
  
}
console.log(bubble(numArr, con))
console.log(bubble(numArr2, con))
console.log(bubble(numArr3, con))
console.log(bubble(numArr4, con))

// slice spice