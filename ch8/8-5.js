const states = ['MA', 'TEST'];

// let appliesToMass = false;
// for (const s of states) {
//   if (s === 'MA') appliesToMass = true;
// }

let appliesToMass = states.includes('MA');
console.log(appliesToMass);