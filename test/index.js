
const _ = require('lodash');
const expect = require('chai').expect;
const bm = require('../index');
const fs = require('fs');


describe('BoxMuller', () => {

  function generate(n) {
    let x = new Array(n);
    for(let i=0; i<n; ++i) {
      x[i] = bm();
    }
    return x;
  }

  it('Should have mean close to 0', () => {
    const n = 100000;
    const x = generate(n);
    const xm = _.mean(x);
    expect(xm).to.be.closeTo(0, 0.05);
  });

  it('Should have standard deviation close to 1', () => {
    const n = 100000;
    const x = generate(n);
    const xm = _.mean(x);
    const sigma = Math.sqrt(x.reduce((s, xi) => s + Math.pow(xi - xm, 2), 0) / (n - 1));
    expect(sigma).to.be.closeTo(1, 0.05);
  });
});