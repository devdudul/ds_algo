function mypush(arr, value) {
  arr[arr.length] = value;
  return arr;
}

function mypop(arr) {
  arr.length = arr.length - 1;
  return arr;
}

function myshift(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}
console.log(myshift([1, 2, 3, 4]));

function myunshift(arr, value) {
  arr.length = arr.length + 1;
  console.log(arr.length);
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  console.log(arr.length);
  arr[0] = value;
  return arr;
}
console.log(myunshift([1, 2, 3, 4], 5));

//sorting asending
function sort(arr) {}

function mypush1(arr, values) {
  for (let i = 0; i < values.length; i++) {
    arr[arr.length] = values[i];
  }
  return arr;
}

console.log(mypush([1, 2, 3], 6));
console.log(mypush1([1, 2, 3], [5, 6]));
console.log(mypop([1, 2, 3, 4]));
