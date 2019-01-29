
palindrome_chain_length = (n, counter = 0) => {
  console.log(n);
  // let counter=0;

  palindromChecker = (num) => {
  return num.toString() === num.toString().split('').reverse().join('');
}

  numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  }

if(palindromChecker(n)){
  return counter;
} else {
  counter++;
  return palindrome_chain_length((n + numReverse(n)), counter);
  // return counter
}

};

// palindromeChainLength(121)
palindrome_chain_length(87)
