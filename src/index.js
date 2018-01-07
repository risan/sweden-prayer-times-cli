import input from './input';
import output from './output';
import { danger } from './echo';

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
