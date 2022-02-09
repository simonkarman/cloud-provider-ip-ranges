# Cloud Provider IP Ranges

Calculates statistics about the number of ipv4 addresses and the number of cidr ranges that Cloud Providers have reserved. The data is based on the information from the following pages:
- Amazone Web Services: [aws-ip-ranges](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html)
- Google Cloud: [find_ip_range](https://cloud.google.com/compute/docs/faq#find_ip_range)

To run the analysis run the following commands from the root of this repository:
```bash
curl https://ip-ranges.amazonaws.com/ip-ranges.json -o ip-ranges-aws.json
curl https://www.gstatic.com/ipranges/cloud.json -o ip-ranges-gcp.json
node ip-range-count.js
```

Created by [Simon Karman](https://www.simonkarman.nl)