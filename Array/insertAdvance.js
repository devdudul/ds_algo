// function mypush(arr, value) {
//   arr[arr.length] = value;
//   return arr;
// }

// function mypop(arr) {
//   arr.length = arr.length - 1;
//   return arr;
// }

// function myshift(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   return arr;
// }
// console.log(myshift([1, 2, 3, 4]));

// function myunshift(arr, value) {
//   arr.length = arr.length + 1;
//   console.log(arr.length);
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   console.log(arr.length);
//   arr[0] = value;
//   return arr;
// }
// console.log(myunshift([1, 2, 3, 4], 5));

// //sorting asending
// function sort(arr) {}

// function mypush1(arr, values) {
//   for (let i = 0; i < values.length; i++) {
//     arr[arr.length] = values[i];
//   }
//   return arr;
// }

// console.log(mypush([1, 2, 3], 6));
// console.log(mypush1([1, 2, 3], [5, 6]));
// console.log(mypop([1, 2, 3, 4]));

//Methood 1
function myReverse(arr) {
  console.log("arr", arr);
  let n = arr.length;
  let lastIndex = n - 1;

  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(myReverse([1, 2, 3, 4, 5]));

//Methood 2
function myReverse2(arr) {
  console.log("arr", arr);
  let n = arr.length;
  let lastIndex = n - 1;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    console.log("i -> n-i", i, "->", lastIndex - i);
    let temp = arr[i];
    arr[i] = arr[lastIndex - i];
    arr[lastIndex - i] = temp;
  }

  return arr;
}

console.log(myReverse2([1, 2, 3, 4, 5]));
