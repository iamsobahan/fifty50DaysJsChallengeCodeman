function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  // write your solution here
  const value = Math.floor(
    Math.random() * (rangeEnd - rangeStart) + rangeStart
  );
  return value;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
