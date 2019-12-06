const fs = require('fs');

const text = fs.readFileSync('day-02-input.txt').toString('utf-8');
let originalInput = text.split(',').map(i => parseInt(i));

// const input = [1,1,1,4,99,5,6,0,99];

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    console.log('Attempting noun:', i, '; verb:', j)
    let opIndex = 0;
    const input = [...originalInput];
    input[1] = i; // noun
    input[2] = j; // verb

    while (opIndex < input.length) {
      switch(input[opIndex]) {
        case 99:
          opIndex = input.length;
          break;
        case 1:
          const firstAddendIndex = input[opIndex+1];
          const secondAddendIndex = input[opIndex+2];
          const indexToOverwrite = input[opIndex+3]
          const firstAddend = input[firstAddendIndex];
          const secondAddend = input[secondAddendIndex];
          input.splice(indexToOverwrite, 1, firstAddend + secondAddend);
          opIndex += 4;
          break;
        case 2:
          const firstMultiplicandIndex = input[opIndex +1];
          const secondMultiplicandIndex = input[opIndex +2];
          const indexToOverwriteBar = input[opIndex+3]
          const firstMultiplicand = input[firstMultiplicandIndex];
          const secondMultiplicand = input[secondMultiplicandIndex];
          input.splice(indexToOverwriteBar, 1, firstMultiplicand*secondMultiplicand);
          opIndex += 4;
          break;
        default:
          console.log('WTF');
          opIndex = input.length;
          break;
      }
    }

    console.log(input[0]);

    if(input[0] === 19690720) {
      console.log('Aha!');
      console.log('noun:', i, '; verb:', j)
      return;
    }
  }
}