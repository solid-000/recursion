function fibs(length) {
  let num1 = 0,
    num2 = 1,
    result = 0;
  let array = [];
  array.push(num1);
  array.push(num2);

  for (let i = 0; i < length - 2; i++) {
    result = num1 + num2;
    array.push(result);
    num1 = num2;
    num2 = result;
  }
  console.log(array);
}

function fibsRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}

function fibsArray(n) {
  let array = [];

  for (i = 0; i < n; i++) {
    array.push(fibsRec(i));
  }
  console.log(array);
}

fibs(5);
fibsArray(5);
