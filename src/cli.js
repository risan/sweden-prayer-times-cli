#!/usr/bin/env node
const input = require('./input');
const output = require('./output');
const { danger } = require('./echo');

const { city } = input();

output(city)
  .then(content => {
    console.log(content);
    process.exit(0);
  })
  .catch(err => {
    console.log(`  ${danger(err.message)}`);
    process.exit(1);
  });
