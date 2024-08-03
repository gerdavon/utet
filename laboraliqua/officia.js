function logisticFunction(x, L, k, x0) {
    return L / (1 + Math.exp(-k * (x - x0)));
}

// Example usage
const L = 1;  // Maximum value (asymptote)
const k = 0.5;  // Growth rate
const x0 = 0;  // Midpoint of sigmoid
const results = [];

for (let x = -10; x <= 10; x += 0.5) {
    results.push({ x: x, y: logisticFunction(x, L, k, x0) });
}

console.log(results);
