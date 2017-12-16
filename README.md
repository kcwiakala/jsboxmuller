Box-Muller algorithm for generating normally distributed pseudo-random samples.

# Installation

```shell
npm install --save jsboxmuller
```

# Usage
Module exports a single function that returns pseudorandom numbers from normal distribution. 
Function takes two optional parameters:

| Parameter  | Description |
|------------|-------------|
| `mean`     | Mean value for random variable |
| `variance` | Variance of the distribution | 

If parameters are skipped, function will generate numbers from distribution with mean value 
of `0.0` and unit variance.

```javascript
const bm = require('jsboxmuller');

let a = new Array(100);
for(let i=0; i<100; ++i) {
  a[i] = bm();
}

// Array contains values from normal distribution with mean 0.0 and variance 1.0
console.log(a);

// x and y in distribution with mean 12.0 and variance 0.2
let x = bm(12, 0.2); 
let y = bm() * 0.2 + 12;
```