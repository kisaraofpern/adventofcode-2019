const fs = require('fs');
let totalFuel = 0;

const text = fs.readFileSync('day-01-input.txt').toString('utf-8');
const input = text.split('\n');

const computeTotalAdditionalFuel = (mass) => {
  let newAdditionalFuel = Math.floor(mass/3) - 2;
  let totalAdditionalFuel = 0;
  while (newAdditionalFuel > 0) {
    console.log('newAdditionalFuel: ', newAdditionalFuel)
    totalAdditionalFuel += newAdditionalFuel;
    newAdditionalFuel = Math.floor(newAdditionalFuel/3) - 2;
  }

  return totalAdditionalFuel;
}

input.forEach(i => {
  totalFuel += computeTotalAdditionalFuel(i);
});

console.log(totalFuel);