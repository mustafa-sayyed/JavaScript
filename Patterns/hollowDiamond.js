let n = 6;
let pattern = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    pattern += " ";
  }
  for (let j = 0; j < 1; j++) {
    pattern += "*";
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    pattern += " ";
  }
  for (let j = 0; j < 1; j++) {
    if (i != 0) pattern += "*";
  }
  pattern += "\n";
}
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j <= i; j++) {
    pattern += " ";
  }
  for (let j = 0; j < 1; j++) {
    pattern += "*";
  }
  for (let j = 0; j < 2 * (n - 2 - i) - 1; j++) {
    pattern += " ";
  }
  for (let j = 0; j < 1; j++) {
    if (i != n - 2) {
      pattern += "*";
    }
  }
  pattern += "\n";
}
console.log(pattern);
