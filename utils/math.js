import { BigInteger } from 'big-integer';

class Math {
  static async generatePrime(bits) {
    // Generate a prime number of a given bit length
    let prime;
    do {
      prime = BigInteger.random(bits);
    } while (!prime.isPrime());
    return prime.toString();
  }

  static async modularExponentiation(base, exponent, modulus) {
    // Perform modular exponentiation
    return BigInteger.modPow(base, exponent, modulus).toString();
  }

  static async extendedGCD(a, b) {
    // Compute the extended greatest common divisor
    const gcd = BigInteger.gcd(a, b);
    const x = BigInteger.modInverse(a, b);
    const y = BigInteger.modInverse(b, a);
    return { gcd: gcd.toString(), x: x.toString(), y: y.toString() };
  }

  static async isPrime(number) {
    // Check if a number is prime
    return BigInteger(number).isPrime();
  }

  static async randomInteger(min, max) {
    // Generate a random integer within a range
    return BigInteger.randomBetween(min, max).toString();
  }
}

export default Math;
