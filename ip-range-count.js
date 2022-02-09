const { prefixes: awsRanges } = require('./ip-ranges-aws.json');
const awsRangeSizes = awsRanges.map(range => Number.parseInt(range.ip_prefix.split('/')[1], 10));

const { prefixes: gcpRanges } = require('./ip-ranges-gcp.json');
const gcpRangeSizes = gcpRanges.filter(range => range.ipv4Prefix !== undefined).map(range => Number.parseInt(range.ipv4Prefix.split('/')[1], 10));

const analyizeRanges = (rangeSizes) => {
  console.info(
    'Occurrences of CIDR range sizes:',
    rangeSizes.reduce((acc, rangeSize) => ({ ...acc, [rangeSize]: (acc[rangeSize] ? acc[rangeSize] : 0) + 1 }), {}),
  );
  console.info(
    'Number of ranges:',
    rangeSizes.length,
  );
  const rangeSizeToNumberOfIPs = (rangeSize) => { return Math.pow(2, 32 - rangeSize) }
  console.info(
    'Number of IP addresses:',
    rangeSizes.reduce((acc, rangeSize) => acc + rangeSizeToNumberOfIPs(rangeSize), 10),
  );
}
console.info('---\nAWS\n---')
analyizeRanges(awsRangeSizes);
console.info('---\nGCP\n---')
analyizeRanges(gcpRangeSizes);