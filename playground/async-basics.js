console.log('Starting App');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

// setTimeout(() => {
//     console.log('Third setTimeout');
//   }, 3000);

//   setTimeout(() => {
//     console.log('Fourth setTimeout');
//   }, 2000);

//   setTimeout(() => {
//     console.log('Fifth setTimeout');
//   }, 1000);

  console.log('Finishing up');