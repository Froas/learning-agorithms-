const arr = [5, 7, 4, 3, 8, 2]
const counter = 0

function bubble(arr, cont){
  
  let count = [cont]
  const newaArr = []
  
  const sort = arr.reduce((acc, curr) => acc > curr 
    ? (newaArr.pop(), newaArr.push(curr), newaArr.push(acc), count.push(1), acc) 
    : (newaArr.push(curr),curr), arr[0])
  
  const counted = count.reduce((x, y) => x + y)
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)
  const recur = equals(arr,newaArr) ? [newaArr, counted] : bubble(newaArr, counted)
  return recur
  
}
console.log(bubble(arr, counter))
