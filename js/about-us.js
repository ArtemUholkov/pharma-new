let speed = 500;
const chnumbers = document.querySelector('.apo_numbers_wrapper');
let s = 2;

function chnge() {
  s = s + 31;
  if ((s > 150 && s < 350) || (s > 550 && s < 620)) {
    speed = 200;
  } else {
    speed = 500;
  }
  if (s < 750) {
    chnumbers.style.bottom = -s + 'px';
    setTimeout(chnge, speed); // Call chnge function recursively with updated speed
  }
}

chnge(); // Call the function for the first time

let mspeed = 500;
const mchnumbers = document.querySelector('.apo_numbers_wrapper_mob');
let f = 2;

function chngemob() {
  f = f + 31;
  if ((f > 150 && f < 350) || (f > 550 && f < 620)) {
    mspeed = 200;
  } else {
    mspeed = 500;
  }
  if (s < 750) {
    mchnumbers.style.bottom = -s + 'px';
    setTimeout(chngemob, mspeed); // Call chnge function recursively with updated speed
  }
}
chngemob();

// chngemob();
// const chnumbersmob = document.querySelector('.apo_numbers_wrapper_mob');
// console.log(chnumbersmob);
// // let f = 2;

// setInterval(function changemob() {
//   f = f + 31;
//   if (f < 750) {
//     chnumbersmob.style.bottom = -f + 'px';
//   } else clearInterval(changemob);
// }, 500);
