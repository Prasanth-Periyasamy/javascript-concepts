function f1() {
  console.log("forst");
  f2();
}
function f2() {
  setTimeout(() => {
    console.log("tird");
  }, 0);
  console.log("second");
}
f1();
console.log("last");

// global variables,setInterval,addEventListener,
