let spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

  for (let index in spinnerArray) {
    setTimeout(() => {
    if(index == spinnerArray.length - 1) {
      process.stdout.write(spinnerArray[index] + "\n");
    } else {
      process.stdout.write(spinnerArray[index])
      }
    } , 100 + 200 * index)
  };


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r|   ' + "\n");
// }, 1500);