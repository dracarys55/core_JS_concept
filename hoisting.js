// var a = 1;
// function test() {
//   console.log('1.', a);
//   var a = 7;
//   console.log('2.', a);
//   a++;
//   var a;
//   inner();
//   console.log('4.', a);
//   function inner() {
//     console.log('3.', a);
//     a = 30;
//     b = 200;
//   }
// }
// test();
// console.log('5.', a);
// a = 70;
// console.log('6.', a);
// console.log('7.', b);

console.log(test());
var a = 7;
function test() {
  console.log(a);
}

// https://stackoverflow.com/questions/15005098/why-does-javascript-hoist-variables
// hoistoing is actually a unintended mistake
