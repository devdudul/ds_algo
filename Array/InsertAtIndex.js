function insert(arr, value) {
  if (!insert.index) {
    insert.index = 0;
  }
  arr[insert.index] = value;
  insert.index++;
}

let marks = new Array(6);
insert(marks, 92);
insert(marks, 82);
insert(marks, 72);
insert(marks, 22);
insert(marks, 42);
insert(marks, 62);

console.log("marks", marks);
