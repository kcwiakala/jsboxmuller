
module.exports = (function() {
  let phase = 0;
  let z0 = 0;
  let z1 = 0;

  function generate() {
    while(1) {
      const u = 2 * Math.random() - 1.0;
      const v = 2 * Math.random() - 1.0;
      let s = Math.pow(u, 2) + Math.pow(v, 2);
      if(s > 0.0 && s < 1.0) {
        const p = Math.sqrt(-2.0 * Math.log(s) / s);
        z0 = u * p;
        z1 = v * p;
        break;
      }
    }
  }

  return function(mean, variance) {
    mean = mean || 0.0;
    variance = variance || 1.0;
    phase = 1 - phase;
    if(phase == 0) {
      return z1 * variance + mean;
    } else {
      generate();
      return z0 * variance + mean;
    }
  }
})();