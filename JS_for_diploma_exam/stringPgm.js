const strToPalindrome = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

let str = "nayan";
let reverseStr = strToPalindrome(str);

if (str === reverseStr) {
  console.log("It is Palindrome");
} else {
  console.log("It is not a Palindrome");
}
