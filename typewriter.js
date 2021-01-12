const sentence = "hello there from lighthouse labs";

//  let timeOut = 50; //first iteration without printing each char with delay, prints them all at once after 50ms
// setTimeout(() => {
//   for (const char of sentence) {
//     process.stdout.write(char);
//     timeOut += 50;
//   }
// }, timeOut) // this doesnt work

//wrapped two separate setTimeouts in one function
const animate = () => {
  let timeOut = 0 //tried refactoring based on previous delay exercise below
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeOut);
    timeOut += 50;
  }

  setTimeout(() => {
    console.log('\n');
  }, timeOut);
}

// let timeOut = 1000; Daryl's help with original solution
// for (let word of words) {
//   setTimeout(() => {
//     console.log(word);
//   }, timeOut);
//   timeOut += 1000;
// }
