const { prefixes: ranges } = require('./ip-ranges.json');
const rangeSizes = ranges.map(range => Number.parseInt(range.ip_prefix.split('/')[1], 10));
console.info(
  'Occurrences of CIDR range sizes:',
  rangeSizes.reduce((acc, rangeSize) => ({ ...acc, [rangeSize]: (acc[rangeSize] ? acc[rangeSize] : 0) + 1 }), {}),
);
console.info(
  'Number of ranges:',
  ranges.length,
);
const rangeSizeToNumberOfIPs = (rangeSize) => { return Math.pow(2, 32 - rangeSize) }
console.info(
  'Number of IP addresses:',
  rangeSizes.reduce((acc, rangeSize) => acc + rangeSizeToNumberOfIPs(rangeSize), 10),
);