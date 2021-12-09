 - [What's Updated](#whats-updated)
  * [\[ devices \]](#-devices-)
    + [clients](#clients)
      - [List the clients of a device, up to a maximum of a month ago](#list-the-clients-of-a-device-up-to-a-maximum-of-a-month-ago)
  * [\[ appliance \]](#-appliance-)
    + [vlans](#vlans)
      - [Add a VLAN](#add-a-vlan)
      - [Update a VLAN](#update-a-vlan)
  * [\[ networks \]](#-networks-)
    + [clients](#clients-1)
      - [List the clients that have used this network in the timespan](#list-the-clients-that-have-used-this-network-in-the-timespan)
    + [settings](#settings)
      - [Update the settings for a network](#update-the-settings-for-a-network)
  * [\[ wireless \]](#-wireless-)
    + [ssids](#ssids)
      - [Update the attributes of an MR SSID](#update-the-attributes-of-an-mr-ssid)
    + [rfProfiles](#rfprofiles)
      - [Creates new RF profile for this network](#creates-new-rf-profile-for-this-network)
      - [Updates specified RF profile for this network](#updates-specified-rf-profile-for-this-network)
  * [\[ organizations \]](#-organizations-)
    + [devices](#devices)
      - [List the status of every Meraki device in the organization](#list-the-status-of-every-meraki-device-in-the-organization)
    + [loginSecurity](#loginsecurity)
      - [Update the login security settings for an organization](#update-the-login-security-settings-for-an-organization)
    + [service](#service)
      - [List the organizations that the user has privileges on](#list-the-organizations-that-the-user-has-privileges-on)
      - [Return an organization](#return-an-organization)
- [What's New](#whats-new)
  * [\[ appliance \]](#-appliance--1)
    + [ssids](#ssids-1)
      - [List the MX SSIDs in a network](#list-the-mx-ssids-in-a-network)
      - [Return a single MX SSID](#return-a-single-mx-ssid)
      - [Update the attributes of an MX SSID](#update-the-attributes-of-an-mx-ssid)
    + [vlanPrefixAssignments](#vlanprefixassignments)
      - [Return prefixes assigned to all IPv6 enabled VLANs on an appliance.](#return-prefixes-assigned-to-all-ipv6-enabled-vlans-on-an-appliance)
    + [staticDelegatedPrefixes](#staticdelegatedprefixes)
      - [List static delegated prefixes for a network](#list-static-delegated-prefixes-for-a-network)
      - [Add a static delegated prefix from a network](#add-a-static-delegated-prefix-from-a-network)
      - [Return a static delegated prefix from a network](#return-a-static-delegated-prefix-from-a-network)
      - [Update a static delegated prefix from a network](#update-a-static-delegated-prefix-from-a-network)
      - [Delete a static delegated prefix from a network](#delete-a-static-delegated-prefix-from-a-network)
    + [delegatedPrefixes](#delegatedprefixes)
      - [Return current delegated IPv6 prefixes on an appliance.](#return-current-delegated-ipv6-prefixes-on-an-appliance)
  * [\[ networks \]](#-networks--1)
    + [locationScanning](#locationscanning)
      - [Return scanning API settings](#return-scanning-api-settings)
      - [Change scanning API settings](#change-scanning-api-settings)
      - [Return list of scanning API receivers](#return-list-of-scanning-api-receivers)
      - [Set the list of scanning API receivers. Old receivers will be removed](#set-the-list-of-scanning-api-receivers-old-receivers-will-be-removed)
    + [webhooks](#webhooks)
      - [List the webhook payload templates for a network](#list-the-webhook-payload-templates-for-a-network)
      - [Create a webhook payload template for a network](#create-a-webhook-payload-template-for-a-network)
      - [Get the webhook payload template for a network](#get-the-webhook-payload-template-for-a-network)
      - [Update a webhook payload template for a network](#update-a-webhook-payload-template-for-a-network)
      - [Destroy a webhook payload template for a network. Does not work for included templates ('wpt\_00001', 'wpt\_00002', 'wpt\_00003' or 'wpt\_00004')](#destroy-a-webhook-payload-template-for-a-network-does-not-work-for-included-templates-wpt_00001-wpt_00002-wpt_00003-or-wpt_00004)
  * [\[ wireless \]](#-wireless--1)
    + [clients](#clients-2)
      - [Fetch the health scores for all clients on this network](#fetch-the-health-scores-for-all-clients-on-this-network)
      - [Return counts of distinct wireless clients connecting to a network over time](#return-counts-of-distinct-wireless-clients-connecting-to-a-network-over-time)
      - [Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID](#fetch-the-health-scores-for-a-given-client-on-this-network-clients-are-identified-by-their-mac-or-id)
    + [devices](#devices-1)
      - [Fetch the health scores of all APs on this network](#fetch-the-health-scores-of-all-aps-on-this-network)
    + [healthScores](#healthscores)
      - [Fetch the health scores for a given AP on this network](#fetch-the-health-scores-for-a-given-ap-on-this-network)
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
    + [readings](#readings)
      - [Return all reported readings from sensors in a given timespan, sorted by timestamp](#return-all-reported-readings-from-sensors-in-a-given-timespan-sorted-by-timestamp)
    + [relationships](#relationships)
      - [List the sensor roles for a given device.](#list-the-sensor-roles-for-a-given-device)
      - [Assign one or more sensor roles to a given device.](#assign-one-or-more-sensor-roles-to-a-given-device)
      - [List the sensor roles for devices in a given network](#list-the-sensor-roles-for-devices-in-a-given-network)
    + [schedules](#schedules)
      - [Returns a list of all sensor schedules.](#returns-a-list-of-all-sensor-schedules)
 
Version **1.16.0** _to_ **1.16.0-beta.1**

* * *

**Summary of Changes**

**23 - New**

**14 - Updated**

**556 - Total Endpoints**

**349 - Total Paths**

* * *

* * *

What's Updated
==============

\[ devices \]
-------------

### clients

#### List the clients of a device, up to a maximum of a month ago

GET _`/devices/{serial}/clients`_

> \- Response property `namedVlan` value added

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

\[ networks \]
--------------

### clients

#### List the clients that have used this network in the timespan

GET _`/networks/{networkId}/clients`_

> \- Optional param `vlan` added

> \- Response property `namedVlan` value added

* * *

### settings

#### Update the settings for a network

PUT _`/networks/{networkId}/settings`_

> \- Optional property `fips` Added

> \- Optional property `localStatusPage` Added

* * *

\[ wireless \]
--------------

### ssids

#### Update the attributes of an MR SSID

PUT _`/networks/{networkId}/wireless/ssids/{number}`_

> \- Optional property `openRoamingCertificateId` Added

* * *

### rfProfiles

#### Creates new RF profile for this network

POST _`/networks/{networkId}/wireless/rfProfiles`_

> \- Optional property `perSsidSettings` Added

* * *

#### Updates specified RF profile for this network

PUT _`/networks/{networkId}/wireless/rfProfiles/{rfProfileId}`_

> \- Optional property `perSsidSettings` Added

* * *

\[ organizations \]
-------------------

### devices

#### List the status of every Meraki device in the organization

GET _`/organizations/{organizationId}/devices/statuses`_

> \- Optional param `configurationUpdatedAfter` added

* * *

### loginSecurity

#### Update the login security settings for an organization

PUT _`/organizations/{organizationId}/loginSecurity`_

> \- Optional property `apiAuthentication` Added

* * *

### service

#### List the organizations that the user has privileges on

GET _`/organizations`_

> \- Response property `properties` value added

* * *

#### Return an organization

GET _`/organizations/{organizationId}`_

> \- Response property `properties` value added

* * *

What's New
==========

\[ appliance \]
---------------

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

### vlanPrefixAssignments

PATH _`/devices/{serial}/appliance/vlanPrefixAssignments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
> 
> **GET** `/devices/{serial}/appliance/vlanPrefixAssignments`  
> 
>     [
>         {
>             "vlanId": 100,
>             "vlanName": "My VLAN",
>             "origin": "wan1",
>             "originLabel": "WAN 1",
>             "originPrefix": "2001:db8:3c4d:15::/64",
>             "subnetPrefix": "2001:db8:3c4d:15::/64",
>             "mx_ip": "2001:db8:3c4d:15::1"
>         }
>     ]
> 
> * * *

* * *

### staticDelegatedPrefixes

PATH _`/networks/{networkId}/appliance/staticDelegatedPrefixes`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List static delegated prefixes for a network
> 
> **GET** `/networks/{networkId}/appliance/staticDelegatedPrefixes`  
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
> **POST** `/networks/{networkId}/appliance/staticDelegatedPrefixes`  
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

PATH _`/networks/{networkId}/appliance/staticDelegatedPrefixes/{staticDelegatedPrefixId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a static delegated prefix from a network
> 
> **GET** `/networks/{networkId}/appliance/staticDelegatedPrefixes/{staticDelegatedPrefixId}`  
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
> **PUT** `/networks/{networkId}/appliance/staticDelegatedPrefixes/{staticDelegatedPrefixId}`  
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
> **DELETE** `/networks/{networkId}/appliance/staticDelegatedPrefixes/{staticDelegatedPrefixId}`  
> 
> * * *

* * *

### delegatedPrefixes

PATH _`/devices/{serial}/appliance/delegatedPrefixes`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return current delegated IPv6 prefixes on an appliance.
> 
> **GET** `/devices/{serial}/appliance/delegatedPrefixes`  
> 
>     [
>         {
>             "origin": "wan1",
>             "prefix": "2001:db8:3c4d:15::/64",
>             "usedCount": 2,
>             "freeCount": 253,
>             "method": "auto",
>             "description": "My ISP provider",
>             "preferred": true,
>             "expiresAt": "2018-05-12T00:00:00Z"
>         }
>     ]
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

### webhooks

PATH _`/networks/{networkId}/webhooks/payloadTemplates`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the webhook payload templates for a network
> 
> **GET** `/networks/{networkId}/webhooks/payloadTemplates`  
> 
>     [
>         {
>             "payloadTemplateId": "wpt_343",
>             "type": "custom",
>             "name": "Weeb Hooks",
>             "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>             "headers": {
>                 "Content-Type": "application/json",
>                 "Accept": "application/some.url",
>                 "Authorization": "Bearer {{sharedSecret}}"
>             }
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create a webhook payload template for a network
> 
> **POST** `/networks/{networkId}/webhooks/payloadTemplates`  
> 
>     {
>         "payloadTemplateId": "wpt_343",
>         "type": "custom",
>         "name": "Weeb Hooks",
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "headers": {
>             "Content-Type": "application/json",
>             "Accept": "application/some.url",
>             "Authorization": "Bearer {{sharedSecret}}"
>         }
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the webhook payload template for a network
> 
> **GET** `/networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId}`  
> 
>     {
>         "payloadTemplateId": "wpt_343",
>         "type": "custom",
>         "name": "Weeb Hooks",
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "headers": {
>             "Content-Type": "application/json",
>             "Accept": "application/some.url",
>             "Authorization": "Bearer {{sharedSecret}}"
>         }
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update a webhook payload template for a network
> 
> **PUT** `/networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId}`  
> 
>     {
>         "payloadTemplateId": "wpt_343",
>         "type": "custom",
>         "name": "Weeb Hooks",
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "headers": {
>             "Content-Type": "application/json",
>             "Accept": "application/some.url",
>             "Authorization": "Bearer {{sharedSecret}}"
>         }
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Destroy a webhook payload template for a network. Does not work for included templates ('wpt\_00001', 'wpt\_00002', 'wpt\_00003' or 'wpt\_00004')
> 
> **DELETE** `/networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId}`  
> 
> * * *

* * *

\[ wireless \]
--------------

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

### readings

PATH _`/organizations/{organizationId}/sensor/readings/history`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return all reported readings from sensors in a given timespan, sorted by timestamp
> 
> **GET** `/organizations/{organizationId}/sensor/readings/history`  
> 
>     [
>         {
>             "ts": "2021-10-18T23:54:48Z",
>             "serial": "Q234-ABCD-5678",
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             },
>             "metric": "temperature",
>             "temperature": {
>                 "fahrenheit": 77.81,
>                 "celsius": 25.45
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