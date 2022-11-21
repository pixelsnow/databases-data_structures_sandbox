function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;  // hash function almost always take advatange of prime numbers, math is complex ;)
  for (let i = 0; i < Math.min(key.length, 100); i++) {  //just for first 100
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen; // to decrease the collision
  }
  return total;
}

hash("hello", 13)
hash("goodbye", 13)
hash("cyan", 13)
