# AWS IP Range Count

Calculates statistics about the number of ipv4 addresses and the number of cidr ranges that AWS has reserved. The data is based on the information from this page: [aws-ip-ranges](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html).

To run the analysis run the following commands from the root of this repository:
```bash
curl https://ip-ranges.amazonaws.com/ip-ranges.json -o ip-ranges.json
node ip-range-count.js
```

Created by [Simon Karman](https://www.simonkarman.nl)