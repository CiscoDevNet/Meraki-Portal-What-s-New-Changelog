## Updates Archive

### API Feature Improvements
**DNS Settings now in the API**

API Users can now configure DNS nameservers through our Dashboard API. The dnsNameservers parameter can be “upstream_dns”, “google_dns”, “opendns”, or a newline separated string of IP addresses or domain names. Remember to add a n separation between each of the values enclosed in quotes with no spaces.
In curl this will would look like:

``
curl -X PUT -H "X-Cisco-Meraki-API-Key: <<redacted>>" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d 
' {
      "dnsNameservers"  :   "8.8.4.4n1.2.3.4n8.44.4.2n1.22.3.4n11.1.1.3n11.111.1.1n111.22.11.33"
  } ' 
"https://dashboard.meraki.com/api/v0/networks/L_11112222333444/vlans/1"

``

**Air Marshal WIPS added to API**

![](/images/tumblr_inline_on4ro6xz0I1qz98bp_400.png)

Air Marshal scan results are now available via the Dashboard API. This enables separate applications to monitor for rogue and neighboring access points.

Documentation is available in the [Postman Collection](http://postman.meraki.com)

