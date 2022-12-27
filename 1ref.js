// References
// USING VAR
var a = 5;

function foo() {
  console.log(a); // 5
}

foo();

console.log(a); // 5

// USING LET AND CONST
function foo() {
  if (true) {
    let c = 7;
    console.log(c); // 7
  }
}

foo();
console.log(c); // Uncaught reference error