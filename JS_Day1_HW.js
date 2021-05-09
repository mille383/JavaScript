// Problem 1

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Number.isInteger(Math.sqrt(sq))) {
    var nextNum = sq + 1;
    while (!(Number.isInteger(Math.sqrt(nextNum)))) {
      nextNum += 1;
    }
    return nextNum;
  }
  return -1;
}

// Problem 2

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Number.isInteger(Math.sqrt(sq))) {
    var nextNum = sq + 1;
    while (!(Number.isInteger(Math.sqrt(nextNum)))) {
      nextNum += 1;
    }
    return nextNum;
  }
  return -1;
}

// Problem 3

function makeNegative(num) {
  if (num > 0)
    return (-1) * num;
  else
    return num;
}