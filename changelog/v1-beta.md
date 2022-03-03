 - [What's Updated](#whats-updated)
  * [\[ switch \]](#-switch-)
    + [routing](#routing)
      - [Create a layer 3 interface for a switch](#create-a-layer-3-interface-for-a-switch)
      - [Update a layer 3 interface for a switch](#update-a-layer-3-interface-for-a-switch)
    + [stacks](#stacks)
      - [Create a layer 3 interface for a switch stack](#create-a-layer-3-interface-for-a-switch-stack)
      - [Update a layer 3 interface for a switch stack](#update-a-layer-3-interface-for-a-switch-stack)
  * [\[ appliance \]](#-appliance-)
    + [vlans](#vlans)
      - [Add a VLAN](#add-a-vlan)
      - [Update a VLAN](#update-a-vlan)
    + [singleLan](#singlelan)
      - [Update single LAN configuration](#update-single-lan-configuration)
  * [\[ networks \]](#-networks-)
    + [settings](#settings)
      - [Update the settings for a network](#update-the-settings-for-a-network)
  * [\[ organizations \]](#-organizations-)
    + [devices](#devices)
      - [List the status of every Meraki device in the organization](#list-the-status-of-every-meraki-device-in-the-organization)
- [What's New](#whats-new)
  * [\[ appliance \]](#-appliance--1)
    + [prefixes](#prefixes)
      - [Return current delegated IPv6 prefixes on an appliance.](#return-current-delegated-ipv6-prefixes-on-an-appliance)
      - [Return prefixes assigned to all IPv6 enabled VLANs on an appliance.](#return-prefixes-assigned-to-all-ipv6-enabled-vlans-on-an-appliance)
      - [List static delegated prefixes for a network](#list-static-delegated-prefixes-for-a-network)
      - [Add a static delegated prefix from a network](#add-a-static-delegated-prefix-from-a-network)
      - [Return a static delegated prefix from a network](#return-a-static-delegated-prefix-from-a-network)
      - [Update a static delegated prefix from a network](#update-a-static-delegated-prefix-from-a-network)
      - [Delete a static delegated prefix from a network](#delete-a-static-delegated-prefix-from-a-network)
    + [uplinks](#uplinks)
      - [Return the uplink settings for an MX appliance](#return-the-uplink-settings-for-an-mx-appliance)
      - [Update the uplink settings for an MX appliance](#update-the-uplink-settings-for-an-mx-appliance)
    + [firewall](#firewall)
      - [Return the inbound cellular firewall rules for an MX network](#return-the-inbound-cellular-firewall-rules-for-an-mx-network)
      - [Update the inbound cellular firewall rules of an MX network](#update-the-inbound-cellular-firewall-rules-of-an-mx-network)
    + [ssids](#ssids)
      - [List the MX SSIDs in a network](#list-the-mx-ssids-in-a-network)
      - [Return a single MX SSID](#return-a-single-mx-ssid)
      - [Update the attributes of an MX SSID](#update-the-attributes-of-an-mx-ssid)
  * [\[ networks \]](#-networks--1)
    + [locationScanning](#locationscanning)
      - [Return scanning API settings](#return-scanning-api-settings)
      - [Change scanning API settings](#change-scanning-api-settings)
      - [Return list of scanning API receivers](#return-list-of-scanning-api-receivers)
      - [Set the list of scanning API receivers. Old receivers will be removed](#set-the-list-of-scanning-api-receivers-old-receivers-will-be-removed)
  * [\[ organizations \]](#-organizations--1)
    + [policyObjects](#policyobjects)
      - [Lists Policy Objects belonging to the organization.](#lists-policy-objects-belonging-to-the-organization)
      - [Creates a new Policy Object.](#creates-a-new-policy-object)
      - [Lists Policy Object Groups belonging to the organization.](#lists-policy-object-groups-belonging-to-the-organization)
      - [Creates a new Policy Object Group.](#creates-a-new-policy-object-group)
      - [Shows details of a Policy Object Group.](#shows-details-of-a-policy-object-group)
      - [Updates a Policy Object Group.](#updates-a-policy-object-group)
      - [Deletes a Policy Object Group.](#deletes-a-policy-object-group)
      - [Shows details of a Policy Object.](#shows-details-of-a-policy-object)
      - [Updates a Policy Object.](#updates-a-policy-object)
      - [Deletes a Policy Object.](#deletes-a-policy-object)
  * [\[ sensor \]](#-sensor-)
    + [schedules](#schedules)
      - [Returns a list of all sensor schedules.](#returns-a-list-of-all-sensor-schedules)
    + [readings](#readings)
      - [Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order](#return-all-reported-readings-from-sensors-in-a-given-timespan-summarized-as-a-series-of-intervals-sorted-by-interval-start-time-in-descending-order)
    + [relationships](#relationships)
      - [List the sensor roles for a given device.](#list-the-sensor-roles-for-a-given-device)
      - [Assign one or more sensor roles to a given device.](#assign-one-or-more-sensor-roles-to-a-given-device)
      - [List the sensor roles for devices in a given network](#list-the-sensor-roles-for-devices-in-a-given-network)
  * [\[ wireless \]](#-wireless-)
    + [devices](#devices-1)
      - [Fetch the health scores of all APs on this network](#fetch-the-health-scores-of-all-aps-on-this-network)
    + [healthScores](#healthscores)
      - [Fetch the health scores for a given AP on this network](#fetch-the-health-scores-for-a-given-ap-on-this-network)
    + [clients](#clients)
      - [Fetch the health scores for all clients on this network](#fetch-the-health-scores-for-all-clients-on-this-network)
      - [Return counts of distinct wireless clients connecting to a network over time](#return-counts-of-distinct-wireless-clients-connecting-to-a-network-over-time)
      - [Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID](#fetch-the-health-scores-for-a-given-client-on-this-network-clients-are-identified-by-their-mac-or-id)
 
Version **1.19.0** _to_ **1.19.0-beta.0**

* * *

**Summary of Changes**

**23 - New**

**9 - Updated**

**564 - Total Endpoints**

**355 - Total Paths**

* * *

* * *

What's Updated
==============

\[ switch \]
------------

### routing

#### Create a layer 3 interface for a switch

POST _`/devices/{serial}/switch/routing/interfaces`_

> \- Optional property `ospfV3` Added

* * *

#### Update a layer 3 interface for a switch

PUT _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- Optional property `ospfV3` Added

* * *

### stacks

#### Create a layer 3 interface for a switch stack

POST _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Optional property `ospfV3` Added

* * *

#### Update a layer 3 interface for a switch stack

PUT _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Optional property `ospfV3` Added

* * *

\[ appliance \]
---------------

### vlans

#### Add a VLAN

POST _`/networks/{networkId}/appliance/vlans`_

> \- Optional property `ip6` Added

* * *

#### Update a VLAN

PUT _`/networks/{networkId}/appliance/vlans/{vlanId}`_

> \- Optional property `ip6` Added

* * *

### singleLan

#### Update single LAN configuration

PUT _`/networks/{networkId}/appliance/singleLan`_

> \- Optional property `ip6` Added

* * *

\[ networks \]
--------------

### settings

#### Update the settings for a network

PUT _`/networks/{networkId}/settings`_

> \- Optional property `fips` Added

* * *

\[ organizations \]
-------------------

### devices

#### List the status of every Meraki device in the organization

GET _`/organizations/{organizationId}/devices/statuses`_

> \- Optional param `configurationUpdatedAfter` added

* * *

What's New
==========

\[ appliance \]
---------------

### prefixes

PATH _`/devices/{serial}/appliance/prefixes/delegated`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return current delegated IPv6 prefixes on an appliance.
> 
> **GET** `/devices/{serial}/appliance/prefixes/delegated`  
> 
>     [
>         {
>             "origin": {
>                 "interface": "wan1"
>             },
>             "prefix": "2001:db8:3c4d:15::/64",
>             "counts": {
>                 "assigned": 2,
>                 "available": 253
>             },
>             "method": "auto",
>             "description": "My ISP provider",
>             "isPreferred": true,
>             "expiresAt": "2018-05-12T00:00:00Z"
>         }
>     ]
> 
> * * *

* * *

PATH _`/devices/{serial}/appliance/prefixes/delegated/vlanAssignments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
> 
> **GET** `/devices/{serial}/appliance/prefixes/delegated/vlanAssignments`  
> 
>     [
>         {
>             "vlan": {
>                 "id": 100,
>                 "name": "My VLAN"
>             },
>             "origin": {
>                 "interface": "wan1",
>                 "prefix": "2001:db8:3c4d:15::/64"
>             },
>             "status": "Active",
>             "ipv6": {
>                 "prefix": "2001:db8:3c4d:15::/64",
>                 "address": "2001:db8:3c4d:15::1"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/networks/{networkId}/appliance/prefixes/delegated/statics`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List static delegated prefixes for a network
> 
> **GET** `/networks/{networkId}/appliance/prefixes/delegated/statics`  
> 
>     [
>         {
>             "staticDelegatedPrefixId": "1284392014819",
>             "prefix": "2001:db8:3c4d:15::/64",
>             "origin": {
>                 "type": "internet",
>                 "interfaces": [
>                     "wan1"
>                 ]
>             },
>             "description": "Prefix on WAN 1 of Long Island Office network",
>             "createdAt": "2018-05-12T00:00:00Z",
>             "updatedAt": "2018-05-12T00:00:00Z"
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Add a static delegated prefix from a network
> 
> **POST** `/networks/{networkId}/appliance/prefixes/delegated/statics`  
> 
>     {
>         "staticDelegatedPrefixId": "1284392014819",
>         "prefix": "2001:db8:3c4d:15::/64",
>         "origin": {
>             "type": "internet",
>             "interfaces": [
>                 "wan1"
>             ]
>         },
>         "description": "Prefix on WAN 1 of Long Island Office network",
>         "createdAt": "2018-05-12T00:00:00Z",
>         "updatedAt": "2018-05-12T00:00:00Z"
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a static delegated prefix from a network
> 
> **GET** `/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`  
> 
>     {
>         "staticDelegatedPrefixId": "1284392014819",
>         "prefix": "2001:db8:3c4d:15::/64",
>         "origin": {
>             "type": "internet",
>             "interfaces": [
>                 "wan1"
>             ]
>         },
>         "description": "Prefix on WAN 1 of Long Island Office network",
>         "createdAt": "2018-05-12T00:00:00Z",
>         "updatedAt": "2018-05-12T00:00:00Z"
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update a static delegated prefix from a network
> 
> **PUT** `/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`  
> 
>     {
>         "staticDelegatedPrefixId": "1284392014819",
>         "prefix": "2001:db8:3c4d:15::/64",
>         "origin": {
>             "type": "internet",
>             "interfaces": [
>                 "wan1"
>             ]
>         },
>         "description": "Prefix on WAN 1 of Long Island Office network",
>         "createdAt": "2018-05-12T00:00:00Z",
>         "updatedAt": "2018-05-12T00:00:00Z"
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a static delegated prefix from a network
> 
> **DELETE** `/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`  
> 
> * * *

* * *

### uplinks

PATH _`/devices/{serial}/appliance/uplinks/settings`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the uplink settings for an MX appliance
> 
> **GET** `/devices/{serial}/appliance/uplinks/settings`  
> 
>     {
>         "interfaces": {
>             "wan1": {
>                 "enabled": true,
>                 "svis": {
>                     "ipv4": {
>                         "assignmentMode": "dynamic"
>                     },
>                     "ipv6": {
>                         "assignmentMode": "dynamic"
>                     }
>                 },
>                 "pppoe": {
>                     "enabled": true,
>                     "authentication": {
>                         "enabled": true,
>                         "username": "username"
>                     }
>                 }
>             },
>             "wan2": {
>                 "enabled": false,
>                 "svis": {
>                     "ipv4": {
>                         "assignmentMode": "static",
>                         "address": "9.10.11.10/16",
>                         "gateway": "13.14.15.16",
>                         "nameservers": {
>                             "addresses": [
>                                 "1.2.3.4"
>                             ]
>                         }
>                     },
>                     "ipv6": {
>                         "assignmentMode": "static",
>                         "address": "1:2:3::4",
>                         "gateway": "1:2:3::5",
>                         "nameservers": {
>                             "addresses": [
>                                 "1001:4860:4860::8888",
>                                 "1001:4860:4860::8844"
>                             ]
>                         }
>                     }
>                 },
>                 "pppoe": {
>                     "enabled": false
>                 }
>             }
>         }
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update the uplink settings for an MX appliance
> 
> **PUT** `/devices/{serial}/appliance/uplinks/settings`  
> 
>     {
>         "interfaces": {
>             "wan1": {
>                 "enabled": true,
>                 "svis": {
>                     "ipv4": {
>                         "assignmentMode": "dynamic"
>                     },
>                     "ipv6": {
>                         "assignmentMode": "dynamic"
>                     }
>                 },
>                 "pppoe": {
>                     "enabled": true,
>                     "authentication": {
>                         "enabled": true,
>                         "username": "username"
>                     }
>                 }
>             },
>             "wan2": {
>                 "enabled": false,
>                 "svis": {
>                     "ipv4": {
>                         "assignmentMode": "static",
>                         "address": "9.10.11.10/16",
>                         "gateway": "13.14.15.16",
>                         "nameservers": {
>                             "addresses": [
>                                 "1.2.3.4"
>                             ]
>                         }
>                     },
>                     "ipv6": {
>                         "assignmentMode": "static",
>                         "address": "1:2:3::4",
>                         "gateway": "1:2:3::5",
>                         "nameservers": {
>                             "addresses": [
>                                 "1001:4860:4860::8888",
>                                 "1001:4860:4860::8844"
>                             ]
>                         }
>                     }
>                 },
>                 "pppoe": {
>                     "enabled": false
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

### firewall

PATH _`/networks/{networkId}/appliance/firewall/inboundCellularFirewallRules`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the inbound cellular firewall rules for an MX network
> 
> **GET** `/networks/{networkId}/appliance/firewall/inboundCellularFirewallRules`  
> 
>     [
>         {
>             "comment": "Allow TCP traffic to subnet with HTTP servers.",
>             "policy": "allow",
>             "protocol": "tcp",
>             "destPort": "443",
>             "destCidr": "192.168.1.0/24",
>             "srcPort": "Any",
>             "srcCidr": "Any",
>             "syslogEnabled": false
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update the inbound cellular firewall rules of an MX network
> 
> **PUT** `/networks/{networkId}/appliance/firewall/inboundCellularFirewallRules`  
> 
>     [
>         {
>             "comment": "Allow TCP traffic to subnet with HTTP servers.",
>             "policy": "allow",
>             "protocol": "tcp",
>             "destPort": "443",
>             "destCidr": "192.168.1.0/24",
>             "srcPort": "Any",
>             "srcCidr": "Any",
>             "syslogEnabled": false
>         }
>     ]
> 
> * * *

* * *

### ssids

PATH _`/networks/{networkId}/appliance/ssids`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the MX SSIDs in a network
> 
> **GET** `/networks/{networkId}/appliance/ssids`  
> 
>     [
>         {
>             "number": 1,
>             "name": "My SSID",
>             "enabled": true,
>             "defaultVlanId": 1,
>             "authMode": "8021x-radius",
>             "radiusServers": [
>                 {
>                     "host": "0.0.0.0",
>                     "port": "1000"
>                 }
>             ],
>             "encryptionMode": "wpa-eap",
>             "wpaEncryptionMode": "WPA2 only",
>             "visible": true
>         }
>     ]
> 
> * * *

* * *

PATH _`/networks/{networkId}/appliance/ssids/{number}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a single MX SSID
> 
> **GET** `/networks/{networkId}/appliance/ssids/{number}`  
> 
>     {
>         "number": 1,
>         "name": "My SSID",
>         "enabled": true,
>         "defaultVlanId": 1,
>         "authMode": "8021x-radius",
>         "radiusServers": [
>             {
>                 "host": "0.0.0.0",
>                 "port": "1000"
>             }
>         ],
>         "encryptionMode": "wpa-eap",
>         "wpaEncryptionMode": "WPA2 only",
>         "visible": true
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update the attributes of an MX SSID
> 
> **PUT** `/networks/{networkId}/appliance/ssids/{number}`  
> 
>     {
>         "number": 1,
>         "name": "My SSID",
>         "enabled": true,
>         "defaultVlanId": 1,
>         "authMode": "8021x-radius",
>         "radiusServers": [
>             {
>                 "host": "0.0.0.0",
>                 "port": "1000"
>             }
>         ],
>         "encryptionMode": "wpa-eap",
>         "wpaEncryptionMode": "WPA2 only",
>         "visible": true
>     }
> 
> * * *

* * *

\[ networks \]
--------------

### locationScanning

PATH _`/networks/{networkId}/locationScanning`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return scanning API settings
> 
> **GET** `/networks/{networkId}/locationScanning`  
> 
>     {
>         "analyticsEnabled": true,
>         "scanningApiEnabled": true,
>         "validator": "xxyzzy"
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Change scanning API settings
> 
> **PUT** `/networks/{networkId}/locationScanning`  
> 
>     {
>         "analyticsEnabled": true,
>         "scanningApiEnabled": true,
>         "validator": "xxyzzy"
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/locationScanning/httpServers`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return list of scanning API receivers
> 
> **GET** `/networks/{networkId}/locationScanning/httpServers`  
> 
>     [
>         {
>             "endpoints": [
>                 {
>                     "httpServer": {
>                         "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
>                         "name": "Example Webhook Server",
>                         "url": "https://www.example.com/my_custom_webhook",
>                         "validator": "xxx",
>                         "validatedAt": "2018-02-11T00:00:00Z",
>                         "sharedSecret": "******"
>                     },
>                     "successAt": "2018-05-12T00:00:00Z",
>                     "errorAt": "2018-02-11T00:00:00Z",
>                     "postErrors": "[{\"code\":200,\"delay\":{\"inMillis\":612},\"timestamp\":{\"millisFromEpoch\":1597255325467}}]"
>                 }
>             ]
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Set the list of scanning API receivers. Old receivers will be removed
> 
> **PUT** `/networks/{networkId}/locationScanning/httpServers`  
> 
>     {
>         "endpoints": [
>             {
>                 "httpServer": {
>                     "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
>                     "name": "Example Webhook Server",
>                     "url": "https://www.example.com/my_custom_webhook",
>                     "validator": "xxx",
>                     "validatedAt": "2018-02-11T00:00:00Z",
>                     "sharedSecret": "******"
>                 },
>                 "successAt": "2018-05-12T00:00:00Z",
>                 "errorAt": "2018-02-11T00:00:00Z",
>                 "postErrors": "[{\"code\":200,\"delay\":{\"inMillis\":612},\"timestamp\":{\"millisFromEpoch\":1597255325467}}]"
>             }
>         ]
>     }
> 
> * * *

* * *

\[ organizations \]
-------------------

### policyObjects

PATH _`/organizations/{organizationId}/policyObjects`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Lists Policy Objects belonging to the organization.
> 
> **GET** `/organizations/{organizationId}/policyObjects`  
> 
>     [
>         {
>             "id": "1234",
>             "name": "Web Servers - Datacenter 10",
>             "category": "network",
>             "type": "cidr",
>             "cidr": "10.0.0.0/24",
>             "created_at": "2018-05-12T00:00:00Z",
>             "updated_at": "2018-05-12T00:00:00Z",
>             "groupIds": [],
>             "networkIds": []
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Creates a new Policy Object.
> 
> **POST** `/organizations/{organizationId}/policyObjects`  
> 
>     {
>         "id": "1234",
>         "name": "Web Servers - Datacenter 10",
>         "category": "network",
>         "type": "cidr",
>         "cidr": "10.0.0.0/24",
>         "created_at": "2018-05-12T00:00:00Z",
>         "updated_at": "2018-05-12T00:00:00Z",
>         "groupIds": [],
>         "networkIds": []
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policyObjects/groups`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Lists Policy Object Groups belonging to the organization.
> 
> **GET** `/organizations/{organizationId}/policyObjects/groups`  
> 
>     [
>         {
>             "id": "1234",
>             "name": "Web Servers - Datacenter 10",
>             "category": "NetworkObjectGroup",
>             "created_at": "2018-05-12T00:00:00Z",
>             "updated_at": "2018-05-12T00:00:00Z",
>             "objectIds": [],
>             "networkIds": []
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Creates a new Policy Object Group.
> 
> **POST** `/organizations/{organizationId}/policyObjects/groups`  
> 
>     {
>         "id": "1234",
>         "name": "Web Servers - Datacenter 10",
>         "category": "NetworkObjectGroup",
>         "created_at": "2018-05-12T00:00:00Z",
>         "updated_at": "2018-05-12T00:00:00Z",
>         "objectIds": [],
>         "networkIds": []
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Shows details of a Policy Object Group.
> 
> **GET** `/organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId}`  
> 
>     {
>         "id": "1234",
>         "name": "Web Servers - Datacenter 10",
>         "category": "NetworkObjectGroup",
>         "created_at": "2018-05-12T00:00:00Z",
>         "updated_at": "2018-05-12T00:00:00Z",
>         "objectIds": [],
>         "networkIds": []
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Updates a Policy Object Group.
> 
> **PUT** `/organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId}`  
> 
>     {
>         "id": "1234",
>         "name": "Web Servers - Datacenter 10",
>         "category": "NetworkObjectGroup",
>         "created_at": "2018-05-12T00:00:00Z",
>         "updated_at": "2018-05-12T00:00:00Z",
>         "objectIds": [],
>         "networkIds": []
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Deletes a Policy Object Group.
> 
> **DELETE** `/organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId}`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policyObjects/{policyObjectId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Shows details of a Policy Object.
> 
> **GET** `/organizations/{organizationId}/policyObjects/{policyObjectId}`  
> 
>     {
>         "id": "1234",
>         "name": "Web Servers - Datacenter 10",
>         "category": "network",
>         "type": "cidr",
>         "cidr": "10.0.0.0/24",
>         "created_at": "2018-05-12T00:00:00Z",
>         "updated_at": "2018-05-12T00:00:00Z",
>         "groupIds": [],
>         "networkIds": []
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Updates a Policy Object.
> 
> **PUT** `/organizations/{organizationId}/policyObjects/{policyObjectId}`  
> 
>     {
>         "id": "1234",
>         "name": "Web Servers - Datacenter 10",
>         "category": "network",
>         "type": "cidr",
>         "cidr": "10.0.0.0/24",
>         "created_at": "2018-05-12T00:00:00Z",
>         "updated_at": "2018-05-12T00:00:00Z",
>         "groupIds": [],
>         "networkIds": []
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Deletes a Policy Object.
> 
> **DELETE** `/organizations/{organizationId}/policyObjects/{policyObjectId}`  
> 
> * * *

* * *

\[ sensor \]
------------

### schedules

PATH _`/networks/{networkId}/sensor/schedules`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns a list of all sensor schedules.
> 
> **GET** `/networks/{networkId}/sensor/schedules`  
> 
>     [
>         {
>             "id": "123",
>             "name": "Weekday schedule"
>         },
>         {
>             "id": "124",
>             "name": "Office hours"
>         }
>     ]
> 
> * * *

* * *

### readings

PATH _`/organizations/{organizationId}/sensor/readings/history/byInterval`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order
> 
> **GET** `/organizations/{organizationId}/sensor/readings/history/byInterval`  
> 
>     [
>         {
>             "startTs": "2022-01-07T23:00:00Z",
>             "endTs": "2022-01-07T23:59:59Z",
>             "serial": "Q234-ABCD-5678",
>             "model": "MT11",
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             },
>             "metric": "temperature",
>             "temperature": {
>                 "fahrenheit": {
>                     "minimum": 68.15,
>                     "maximum": 74.91,
>                     "average": 72.08
>                 },
>                 "celsius": {
>                     "minimum": 20.08,
>                     "maximum": 23.84,
>                     "average": 72.08
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

### relationships

PATH _`/devices/{serial}/sensor/relationships`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the sensor roles for a given device.
> 
> **GET** `/devices/{serial}/sensor/relationships`  
> 
>     [
>         {
>             "livestream": {
>                 "relatedDevices": [
>                     {
>                         "serial": "1234-ABCD-5678",
>                         "productType": "camera"
>                     }
>                 ]
>             }
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Assign one or more sensor roles to a given device.
> 
> **PUT** `/devices/{serial}/sensor/relationships`  
> 
>     {
>         "livestream": {
>             "relatedDevices": [
>                 {
>                     "serial": "1234-ABCD-5678",
>                     "productType": "camera"
>                 }
>             ]
>         }
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/sensor/relationships`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the sensor roles for devices in a given network
> 
> **GET** `/networks/{networkId}/sensor/relationships`  
> 
>     [
>         {
>             "device": {
>                 "name": "My sensor",
>                 "serial": "Q234-ABCD-5678",
>                 "productType": "sensor"
>             },
>             "relationships": {
>                 "livestream": {
>                     "relatedDevices": [
>                         {
>                             "serial": "1234-ABCD-5678",
>                             "productType": "camera"
>                         }
>                     ]
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

\[ wireless \]
--------------

### devices

PATH _`/networks/{networkId}/wireless/devices/healthScores`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch the health scores of all APs on this network
> 
> **GET** `/networks/{networkId}/wireless/devices/healthScores`  
> 
>     [
>         {
>             "device": {
>                 "serial": "Q234-ABCD-0001"
>             },
>             "performance": {
>                 "latest": 80
>             },
>             "onboarding": {
>                 "latest": 20
>             }
>         },
>         {
>             "device": {
>                 "serial": "Q234-ABCD-0003"
>             },
>             "performance": {
>                 "latest": 30
>             },
>             "onboarding": {
>                 "latest": 90
>             }
>         }
>     ]
> 
> * * *

* * *

### healthScores

PATH _`/devices/{serial}/wireless/healthScores`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch the health scores for a given AP on this network
> 
> **GET** `/devices/{serial}/wireless/healthScores`  
> 
>     {
>         "device": {
>             "serial": "Q234-ABCD-0001"
>         },
>         "performance": {
>             "latest": 80
>         },
>         "onboarding": {
>             "latest": 20
>         }
>     }
> 
> * * *

* * *

### clients

PATH _`/networks/{networkId}/wireless/clients/healthScores`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch the health scores for all clients on this network
> 
> **GET** `/networks/{networkId}/wireless/clients/healthScores`  
> 
>     [
>         {
>             "mac": "22:33:44:55:66:77",
>             "clientId": "k74272e",
>             "performance": {
>                 "latest": 80,
>                 "currentConnection": 100
>             },
>             "onboarding": {
>                 "latest": 100
>             }
>         },
>         {
>             "mac": "22:33:44:55:66:77",
>             "clientId": "k74272e",
>             "performance": {
>                 "latest": 30,
>                 "currentConnection": 50
>             },
>             "onboarding": {
>                 "latest": 70
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/networks/{networkId}/wireless/clients/onboardingHistory`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return counts of distinct wireless clients connecting to a network over time
> 
> **GET** `/networks/{networkId}/wireless/clients/onboardingHistory`  
> 
>     [
>         {
>             "startTs": "2020-01-01T00:00:00Z",
>             "endTs": "2020-01-01T00:05:00Z",
>             "clientCounts": {
>                 "summary": {
>                     "prospective": 100,
>                     "successful": 75,
>                     "failed": 25
>                 },
>                 "connectionSteps": {
>                     "association": {
>                         "prospective": 100,
>                         "successful": 97,
>                         "failed": 3
>                     },
>                     "authentication": {
>                         "prospective": 97,
>                         "successful": 81,
>                         "failed": 16
>                     },
>                     "dhcp": {
>                         "prospective": 81,
>                         "successful": 75,
>                         "failed": 6
>                     },
>                     "dns": {
>                         "prospective": 75,
>                         "successful": 75,
>                         "failed": 0
>                     }
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/networks/{networkId}/wireless/clients/{clientId}/healthScores`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID
> 
> **GET** `/networks/{networkId}/wireless/clients/{clientId}/healthScores`  
> 
>     {
>         "mac": "22:33:44:55:66:77",
>         "clientId": "k74272e",
>         "performance": {
>             "latest": 80,
>             "currentConnection": 100
>         },
>         "onboarding": {
>             "latest": 100
>         }
>     }
> 
> * * *

* * *