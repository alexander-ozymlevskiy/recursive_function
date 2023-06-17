function myFunc(num, degree) {
  return degree == 0 ? 1 : num * myFunc(num, degree - 1);
}

const test = myFunc(9, 2);
console.log(test);
