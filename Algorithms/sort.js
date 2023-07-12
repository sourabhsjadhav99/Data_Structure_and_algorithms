// Bubble Sort 
// function bubbleSort(arr) {
//     let swapped
//     do {
//       swapped = false
//       for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i]
//           arr[i] = arr[i + 1]
//           arr[i + 1] = temp
//           swapped = true
//         }
//       }
//     } while (swapped)
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   bubbleSort(arr)
//   console.log(arr) // [-6, -2, 4, 8, 20]
  //-------------------------------------------------------------------------------------------
//   function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let numberToInsert = arr[i]
//       let j = i - 1
//       while (j >= 0 && arr[j] > numberToInsert) {
//         arr[j + 1] = arr[j]
//         j = j - 1
//       }
//       arr[j + 1] = numberToInsert
//     }
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   insertionSort(arr)
//   console.log(arr) // [-6, -2, 4, 8, 20]
  //-------------------------------------------------------------------------------------------
//   function mergesort(arr) {
//     if (arr.length < 2) {
//       return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergesort(leftArr), mergesort(rightArr))
//   }
  
//   function merge(leftArr, rightArr) {
//     const sortedArr = []
//     while (leftArr.length && rightArr.length) {
//       if (leftArr[0] <= rightArr[0]) {
//         sortedArr.push(leftArr.shift())
//       } else {
//         sortedArr.push(rightArr.shift())
//       }
//     }
//     const resultArr = [...sortedArr, ...leftArr, ...rightArr]
//     return resultArr
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]
  //-------------------------------------------------------------------------------------------
//   function quickSort(arr) {
//     if (arr.length < 2) return arr
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i])
//       } else {
//         right.push(arr[i])
//       }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]
  //-------------------------------------------------------------------------------------------
// Quick Sort in place 

  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivot = partition(arr, left, right)
      quickSort(arr, left, pivot - 1)
      quickSort(arr, pivot + 1, right)
    }
    return arr
  }
  
  function partition(arr, left, right) {
    const pivot = arr[right]
    let i = left
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        swap(arr, i, j)
        i++
      }
    }
    swap(arr, i, right)
    return i
  }
  
  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  
  const arr = [8, 20, -2, 4, -6]
  quickSort(arr)
  console.log(arr) // [-6, -2, 4, 8, 20]