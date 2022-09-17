// If you run this function, you'll get an error. Fix the function and explain briefly what's wrong.
// function canPlay() {
//   let sport = " Football";
//   if (true) {
//     let personName = "Cosimo";
//   }
//   console.log(personName + sport);
// }
// canPlay();

function canPlay() {
  let sport = " Football";
  let personName = null; // we need to declare the variable outside of the "if" block scope so it can live outside the if block
  if (true) {
    personName = "Cosimo";
  }
  console.log(personName + sport);
}
canPlay();
