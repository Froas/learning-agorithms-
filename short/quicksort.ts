const arr= [6,2,8,11,3,7,1,55,-5,100,0]

function quicksort(arr){
    
    const pivot = arr[Math.floor(arr.length / 2)]
    const bigger = arr.filter(x => x > pivot)
    const smaller = arr.filter(x => x < pivot)
    const recSm = smaller.length > 1 
        ? quicksort(smaller) 
        : smaller
    const recBig = bigger.length > 1 
        ? quicksort(bigger) 
        : bigger
    return recSm.concat(pivot, recBig)

}
 console.log(quicksort(arr))