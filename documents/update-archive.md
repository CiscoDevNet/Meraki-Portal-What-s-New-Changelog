## February 2017

### RADIUS Feature Enhancements

**Walled Garden added to API**

The SSID Settings API endpoint now supports setting the Walled Garden and Per Client Bandwidth Limits.
See the **[API documentation page](http://postman.meraki.com)** or make an API call to get your SSIDs.

**Meraki Cloud-based RADIUS Proxy launched**

All customers will now be able to proxy RADIUS requests through the Meraki backend to their RADIUS servers. This allows your network to have all of your RADIUS packets coming from one destination (the Meraki Cloud) rather than many different destinations from many Access Points. This also reduces the firewall rules required at each site for large deployments.

To see this feature go to **Wireless > Access Control**, and configure a network with WPA2-Enterprise with my RADIUS server and you should now see the option to use the proxy just below the RADIUS server settings.

![](/images/tumblr_inline_okd79nhYOQ1qz98bp_540.png)

## January 2017

### API Feature Enhancements

**Walled Garden added to API**

The SSID Settings API endpoint now supports setting the Walled Garden and Per Client Bandwidth Limits.
See the **[API documentation page](http://postman.meraki.com)** or make an API call to get your SSIDs.

**Create combined networks with the Dashboard API**

We added the ability to create combined networks from the create network endpoint in the provisioning API. You can specify a space-separated list of network types to create a combined network. All of the network types that currently be created via the API (wireless, switch, appliance, phone) are accepted.

**[Read the API documentation here](http://postman.meraki.com)**

**Hotspot 2.0 settings API endpoint**

There is a new Dashboard API endpoint for returning and updating the Hotspot 2.0 settings for an SSID. An organization must have the **'has_hotspot_20'** NFO in order to use the endpoint.

**[See the Postman Collection](http://postman.meraki.com)**

## December 2016

### API Feature Enhancements

**New API for L3 Firewall Rules on SSIDs**

The Dashboard API has added a new endpoint for reading and writing the L3 firewall rules for an SSID. This feature is available across all MR access points. Here is a link to the detailed API documentation for the [L3 Firewall Rules endpoint](http://postman.meraki.com)

**DHCP Exceptions allow Networks to override their Templates**

You can now configure fixed IP assignments and reserved IP ranges on networks that are bound to a configuration template, on the dashboard at **Security Appliance > DHCP**. This will override the settings configured on the template. These new overrides allow for unique VLANs at each site. These settings are also available in the Dashboard API.

![](/images/tumblr_inline_okd2oadjQ91qz98bp_500.png)

**Systems Manager API**

A new collection of API endpoints for Systems Manager EMM are now released - to all customers. The below screenshot shows the available actions. Due to a large number of SM devices in some networks, the API has a unique ability to filter the devices impacted rather than apply to all devices. Users can filter devices by a set of identifiers (id/serial/wifi mac) or by a list of client tags.

Systems Manager

* Move a set of devices to a new network
* List the devices enrolled in an SM network with various specified fields and filters
* Add, delete, or update the tags of a set of devices
* Modify the fields of a device
* Lock a set of devices
* Wipe a device
* Force check-in a set of devices

**Static Routes now in the Dashboard API**

We now support the static route configuration via the Dashboard API. It operates in a very similar manner to the existing VLANs API, and allows for editing name, subnet, gateway IP address, enabled/disabled, fixed IP Assignments, and reserved IP Ranges.

[Here is a Link to the dashboard API documentation](http://postman.meraki.com)

**New Phone endpoints added to Dashboard API**

You can now assign contacts, phone numbers, and extensions to MC phones using the Dashboard API.

Phone assignments

* List all phones in a network and their contact assignment.
* Return a phone’s contact assignment.
* Assign a contact and number(s) to a phone.
* Remove a phone assignment (unprovision a phone).

Phone contacts

* List the phone contacts in a network.
* Add a contact.
* Update a phone contact. Google Directory contacts cannot be modified.
* Delete a phone contact. Google Directory contacts cannot be removed.

Phone numbers

* List the available phone numbers in a network
* List all the phone numbers in a network

[Read the API documentation here](http://postman.meraki.com)

## November 2016

### API Feature Enhancements

**Combined Templates added to API Dashboard API now supports GET for device uplink information**

The Meraki dashboard endpoint will now return an array of hashes of information about the device’s uplinks.

Example responses for a switch:

![](/images/tumblr_inline_okd26euycx1qz98bp_250.png)

For an MX with 2 uplinks:

![](/images/tumblr_inline_okd26sYy0O1qz98bp_250.png)

For an MX using cellular:

![](/images/tumblr_inline_okd25xzEME1qz98bp_250.png)

## October 2016

### API Feature Enhancements

**Bluetooth Clients added to the Scanning API**

Meraki access points with an integrated Bluetooth Low Energy radio have the ability to transmit BLE Beacons, as well as to detect and locate BLE devices. BLE scanning allows the Meraki AP to listen for and locate all Bluetooth Low Energy devices. The BLE scanning radio in the access point can detect Beacons, BLE asset tags, and devices like fitness monitors that communicate using BLE data protocols.

When combined with a map of access points in the dashboard, the CMX Location API will report Bluetooth client locations as devices on a given floorplan. The location API delivers data in real-time from the Meraki cloud and can be used to detect WiFi devices (associated and non-associated) in real-time. This allows third-party applications to provide asset tracking and analytics using battery-based Bluetooth tags or wearables like fitness monitors. In addition to the API, Bluetooth-enabled devices like smartphones hear a BLE Beacon emitted by the Meraki access point, and an app on the smartphone can detect it’s distance from the access points using Beacon ranging.


[Bluetooth Low Energy (BLE) Guide](/meraki/guides/ble-scanning-api/#bluetooth-scanning-api)

**Bluetooth Location API Data Elements:**

|Name   |Format    |Description                    |
|-------|----------|-------------------------------|
|apMac  |string |MAC address of the observing AP   |
|apTags |[string]|JSON array of all tags applied to the AP in dashboard|
|apFloors|[string]|JSON array of all floorplan names on which this AP appears|
|clientMac|string|Device MAC|
|seenTime|ISO 8601 date string|Observation time in UTC; example: “1970-01-01T00:00:00Z”|
|seenEpoch|integer|Observation time in seconds since the UNIX epoch|
|rssi|integer|Device RSSI as seen by AP|
|location|location|Device geolocation; null if location could not be determined|
|lat|decimal|Device latitude in degrees N of the equator|
|lng|decimal|Device longitude in degrees E of the prime meridian|
|unc|decimal|Uncertainty in meters|
|x|[decimal]|JSON array of x offsets (in meters) from lower-left corner of each floorplan|
|y|[decimal]|JSON array of y offsets (in meteres) from lower-left corner of each floorplan|

## September 2016

### API Feature Enhancements

**Dashboard API Launched to all customers**

Previously access to the API was enabled by contacting support. Now this option can be found on the **Organization > Settings** page to allow any customer to enable the API on their own.

The API docs will be available to all users regardless of whether or not access has been enabled for them at https://api.meraki.com/api_docs. 

If the API has not been enabled, a banner will appear on the API docs page to let the user know.

[See the Postman Collection.](http://postman.meraki.com)

### API Feature Enhancements

**DNS Settings now in the API**

API Users can now configure DNS nameservers through our Dashboard API. The dnsNameservers parameter can be “upstream_dns”, “google_dns”, “opendns”, or a newline separated string of IP addresses or domain names. Remember to add an n separation between each of the values enclosed in quotes with no spaces.

In curl this will would look like:

 <xpm>
        <pre>
        curl -X PUT -H "X-Cisco-Meraki-API-Key: <<redacted>>" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d 
            ' {
            "dnsNameservers"  :   "8.8.4.4n1.2.3.4n8.44.4.2n1.22.3.4n11.1.1.3n11.111.1.1n111.22.11.33"
             } ' 
       "https://dashboard.meraki.com/api/v0/networks/L_11112222333444/vlans/1"
         </pre>
    </xpm>


**Air Marshal WIPS added to API**

Air Marshal scan results are now available via the Dashboard API. This enables separate applications to monitor for rogue and neighboring access points.

![](/images/tumblr_inline_on4ro6xz0I1qz98bp_400.png)

Documentation is available in the [Postman Collection](http://postman.meraki.com)

