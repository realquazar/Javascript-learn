function rateLimiter(fn, limit) {
  let lastCallTime = 0;
  return function(...args) {
    const currentTime = Date.now();
    if (currentTime - lastCallTime < limit) {
      return "Rate limit exceeded";
    }
    lastCallTime = currentTime;
    return fn(...args);
  }
}

// Example usage:
const limitedFunction = rateLimiter(() => {
  console.log("Hello, world!");
}, 1000); // Limit to 1 call per second

limitedFunction(); // Output: "Hello, world!"
limitedFunction(); // Output: "Rate limit exceeded"
setTimeout(limitedFunction, 1000); // Output: "Hello, world!" (after 1 second)
