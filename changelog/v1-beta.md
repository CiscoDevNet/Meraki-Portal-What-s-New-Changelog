 - [What's Updated](#whats-updated)
  * [\[ networks \]](#-networks-)
    + [settings](#settings)
      - [Update the settings for a network](#update-the-settings-for-a-network)
  * [\[ switch \]](#-switch-)
    + [ports](#ports)
      - [List the switchports in an organization by switch](#list-the-switchports-in-an-organization-by-switch)
    + [stacks](#stacks)
      - [Update a layer 3 interface for a switch stack](#update-a-layer-3-interface-for-a-switch-stack)
      - [Create a layer 3 interface for a switch stack](#create-a-layer-3-interface-for-a-switch-stack)
  * [\[ organizations \]](#-organizations-)
    + [devices](#devices)
      - [List the status of every Meraki device in the organization](#list-the-status-of-every-meraki-device-in-the-organization)
- [What's New](#whats-new)
  * [\[ networks \]](#-networks--1)
    + [locationScanning](#locationscanning)
      - [Return scanning API settings](#return-scanning-api-settings)
      - [Change scanning API settings](#change-scanning-api-settings)
      - [Return list of scanning API receivers](#return-list-of-scanning-api-receivers)
      - [Set the list of scanning API receivers. Old receivers will be removed](#set-the-list-of-scanning-api-receivers-old-receivers-will-be-removed)
  * [\[ organizations \]](#-organizations--1)
    + [devices](#devices-1)
      - [List the configuration status information for devices in an organization.](#list-the-configuration-status-information-for-devices-in-an-organization)
    + [cloud](#cloud)
      - [List of source/destination traffic rules](#list-of-sourcedestination-traffic-rules)
    + [webhooks](#webhooks)
      - [List the HTTP servers for this organization](#list-the-http-servers-for-this-organization)
      - [Add an HTTP server to an organization](#add-an-http-server-to-an-organization)
      - [Return an HTTP server for an organization](#return-an-http-server-for-an-organization)
      - [Update an HTTP server for an organization](#update-an-http-server-for-an-organization)
      - [Delete an HTTP server from an organization](#delete-an-http-server-from-an-organization)
      - [List the webhook payload templates for an organization](#list-the-webhook-payload-templates-for-an-organization)
      - [Create a webhook payload template for an organization](#create-a-webhook-payload-template-for-an-organization)
      - [Get the webhook payload template for an organization](#get-the-webhook-payload-template-for-an-organization)
      - [Update a webhook payload template for an organization](#update-a-webhook-payload-template-for-an-organization)
      - [Destroy a webhook payload template for an organization. Does not work for included templates ('wpt\_00001', 'wpt\_00002', 'wpt\_00003', 'wpt\_00004', 'wpt\_00005' or 'wpt\_00006')](#destroy-a-webhook-payload-template-for-an-organization-does-not-work-for-included-templates-wpt_00001-wpt_00002-wpt_00003-wpt_00004-wpt_00005-or-wpt_00006)
      - [Send a test webhook for an organization](#send-a-test-webhook-for-an-organization)
      - [Return the status of a webhook test for an organization](#return-the-status-of-a-webhook-test-for-an-organization)
  * [\[ wireless \]](#-wireless-)
    + [devices](#devices-2)
      - [Fetch the health scores of all APs on this network](#fetch-the-health-scores-of-all-aps-on-this-network)
      - [Get average channel utilization for all bands in a network, split by AP](#get-average-channel-utilization-for-all-bands-in-a-network-split-by-ap)
      - [Get average channel utilization across all bands for all networks in the organization](#get-average-channel-utilization-across-all-bands-for-all-networks-in-the-organization)
      - [Get a time-series of average channel utilization for all bands, segmented by device.](#get-a-time-series-of-average-channel-utilization-for-all-bands-segmented-by-device)
      - [Get a time-series of average channel utilization for all bands](#get-a-time-series-of-average-channel-utilization-for-all-bands)
    + [healthScores](#healthscores)
      - [Fetch the health scores for a given AP on this network](#fetch-the-health-scores-for-a-given-ap-on-this-network)
    + [clients](#clients)
      - [Fetch the health scores for all clients on this network](#fetch-the-health-scores-for-all-clients-on-this-network)
      - [Return counts of distinct wireless clients connecting to a network over time](#return-counts-of-distinct-wireless-clients-connecting-to-a-network-over-time)
      - [Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID](#fetch-the-health-scores-for-a-given-client-on-this-network-clients-are-identified-by-their-mac-or-id)
  * [\[ sensor \]](#-sensor-)
    + [readings](#readings)
      - [Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order](#return-all-reported-readings-from-sensors-in-a-given-timespan-summarized-as-a-series-of-intervals-sorted-by-interval-start-time-in-descending-order)
    + [schedules](#schedules)
      - [Returns a list of all sensor schedules.](#returns-a-list-of-all-sensor-schedules)
  * [\[ appliance \]](#-appliance-)
    + [uplinks](#uplinks)
      - [Get the sent and received bytes for each uplink of all wired networks within an organization. If more than one MX was active during the specified timespan, then the sent and received bytes will be aggregated by interface.](#get-the-sent-and-received-bytes-for-each-uplink-of-all-wired-networks-within-an-organization-if-more-than-one-mx-was-active-during-the-specified-timespan-then-the-sent-and-received-bytes-will-be-aggregated-by-interface)
 
Version **v1.30.0** _to_ **v1.30.0-beta.0**

* * *

**Summary of Changes**

**22 - New**

**5 - Updated**

**644 - Total Endpoints**

**408 - Total Paths**

* * *

* * *

What's Updated
==============

\[ networks \]
--------------

### settings

#### Update the settings for a network

PUT _`/networks/{networkId}/settings`_

> \- Optional property `fips` Added

* * *

\[ switch \]
------------

### ports

#### List the switchports in an organization by switch

GET _`/organizations/{organizationId}/switch/ports/bySwitch`_

> \- Optional param `extendedParams` added

* * *

### stacks

#### Update a layer 3 interface for a switch stack

PUT _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Optional property `ospfV3` Added

* * *

#### Create a layer 3 interface for a switch stack

POST _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Optional property `ospfV3` Added

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
>                         "networkId": "N_12345678",
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
>                     "networkId": "N_12345678",
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

### devices

PATH _`/organizations/{organizationId}/devices/configuration/statuses`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the configuration status information for devices in an organization.
> 
> **GET** `/organizations/{organizationId}/devices/configuration/statuses`  
> 
>     [
>         {
>             "mac": "00:11:22:33:44:55",
>             "name": "My AP",
>             "network": {
>                 "id": "N_24329156"
>             },
>             "productType": "switch",
>             "serial": "Q234-ABCD-5678",
>             "tags": [
>                 "tag1",
>                 "tag2"
>             ],
>             "configurationStatus": {
>                 "status": "UP_TO_DATE"
>             }
>         }
>     ]
> 
> * * *

* * *

### cloud

PATH _`/organizations/{organizationId}/cloud/connectivity/requirements`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List of source/destination traffic rules
> 
> **GET** `/organizations/{organizationId}/cloud/connectivity/requirements`  
> 
>     [
>         {
>             "description": "Meraki cloud communication",
>             "productTypes": [
>                 "appliance",
>                 "wireless",
>                 "camera",
>                 "switch"
>             ],
>             "rule": {
>                 "sources": {
>                     "includeAddressesInYourNetworks": false,
>                     "addresses": [
>                         {
>                             "type": "ipv4",
>                             "address": "209.206.48.0/20"
>                         }
>                     ]
>                 },
>                 "destinations": {
>                     "includeAddressesInYourNetworks": false,
>                     "includeAnyAddress": false,
>                     "addresses": [
>                         {
>                             "type": "fqdn",
>                             "address": "webhook.site"
>                         }
>                     ]
>                 },
>                 "ports": [
>                     {
>                         "port": "443",
>                         "protocols": [
>                             "TCP"
>                         ]
>                     }
>                 ]
>             }
>         }
>     ]
> 
> * * *

* * *

### webhooks

PATH _`/organizations/{organizationId}/webhooks/httpServers`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the HTTP servers for this organization
> 
> **GET** `/organizations/{organizationId}/webhooks/httpServers`  
> 
>     [
>         {
>             "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
>             "name": "Example Webhook Server",
>             "organizationId": "2930418",
>             "url": "https://www.example.com/my_custom_webhook",
>             "payloadTemplate": {
>                 "id": "wpt_00001",
>                 "name": "Meraki (included)"
>             }
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Add an HTTP server to an organization
> 
> **POST** `/organizations/{organizationId}/webhooks/httpServers`  
> 
>     {
>         "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
>         "name": "Example Webhook Server",
>         "organizationId": "2930418",
>         "url": "https://www.example.com/my_custom_webhook",
>         "payloadTemplate": {
>             "id": "wpt_00001",
>             "name": "Meraki (included)"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/webhooks/httpServers/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an HTTP server for an organization
> 
> **GET** `/organizations/{organizationId}/webhooks/httpServers/{id}`  
> 
>     {
>         "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
>         "name": "Example Webhook Server",
>         "organizationId": "2930418",
>         "url": "https://www.example.com/my_custom_webhook",
>         "payloadTemplate": {
>             "id": "wpt_00001",
>             "name": "Meraki (included)"
>         }
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update an HTTP server for an organization
> 
> **PUT** `/organizations/{organizationId}/webhooks/httpServers/{id}`  
> 
>     {
>         "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
>         "name": "Example Webhook Server",
>         "organizationId": "2930418",
>         "url": "https://www.example.com/my_custom_webhook",
>         "payloadTemplate": {
>             "id": "wpt_00001",
>             "name": "Meraki (included)"
>         }
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an HTTP server from an organization
> 
> **DELETE** `/organizations/{organizationId}/webhooks/httpServers/{id}`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/webhooks/payloadTemplates`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the webhook payload templates for an organization
> 
> **GET** `/organizations/{organizationId}/webhooks/payloadTemplates`  
> 
>     [
>         {
>             "payloadTemplateId": "wpt_343",
>             "type": "custom",
>             "name": "Weeb Hooks",
>             "headers": [
>                 {
>                     "name": "Authorization",
>                     "template": "Bearer {{sharedSecret}}"
>                 }
>             ],
>             "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>             "allNetworks": true,
>             "allowNetworkModify": true,
>             "allowedNetworks": [
>                 "N_1234",
>                 "L_5678"
>             ]
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create a webhook payload template for an organization
> 
> **POST** `/organizations/{organizationId}/webhooks/payloadTemplates`  
> 
>     {
>         "payloadTemplateId": "wpt_343",
>         "type": "custom",
>         "name": "Weeb Hooks",
>         "headers": [
>             {
>                 "name": "Authorization",
>                 "template": "Bearer {{sharedSecret}}"
>             }
>         ],
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "allNetworks": true,
>         "allowNetworkModify": true,
>         "allowedNetworks": [
>             "N_1234",
>             "L_5678"
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the webhook payload template for an organization
> 
> **GET** `/organizations/{organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`  
> 
>     {
>         "payloadTemplateId": "wpt_343",
>         "type": "custom",
>         "name": "Weeb Hooks",
>         "headers": [
>             {
>                 "name": "Authorization",
>                 "template": "Bearer {{sharedSecret}}"
>             }
>         ],
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "allNetworks": true,
>         "allowNetworkModify": true,
>         "allowedNetworks": [
>             "N_1234",
>             "L_5678"
>         ]
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update a webhook payload template for an organization
> 
> **PUT** `/organizations/{organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`  
> 
>     {
>         "payloadTemplateId": "wpt_343",
>         "type": "custom",
>         "name": "Weeb Hooks",
>         "headers": [
>             {
>                 "name": "Authorization",
>                 "template": "Bearer {{sharedSecret}}"
>             }
>         ],
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "allNetworks": true,
>         "allowNetworkModify": true,
>         "allowedNetworks": [
>             "N_1234",
>             "L_5678"
>         ]
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Destroy a webhook payload template for an organization. Does not work for included templates ('wpt\_00001', 'wpt\_00002', 'wpt\_00003', 'wpt\_00004', 'wpt\_00005' or 'wpt\_00006')
> 
> **DELETE** `/organizations/{organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/webhooks/webhookTests`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Send a test webhook for an organization
> 
> **POST** `/organizations/{organizationId}/webhooks/webhookTests`  
> 
>     {
>         "id": "1234",
>         "url": "https://www.example.com/path",
>         "status": "enqueued"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/webhooks/webhookTests/{webhookTestId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the status of a webhook test for an organization
> 
> **GET** `/organizations/{organizationId}/webhooks/webhookTests/{webhookTestId}`  
> 
>     {
>         "id": "1234",
>         "url": "https://www.example.com/path",
>         "status": "enqueued"
>     }
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
>                 "serial": "Q234-ABCD-5678"
>             },
>             "performance": {
>                 "latest": 80
>             },
>             "onboarding": {
>                 "latest": 20
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/channelUtilization/byDevice`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average channel utilization for all bands in a network, split by AP
> 
> **GET** `/organizations/{organizationId}/wireless/devices/channelUtilization/byDevice`  
> 
>     [
>         {
>             "serial": "Q234-ABCD-5678",
>             "mac": "00:11:22:33:44:55",
>             "byBand": [
>                 {
>                     "band": 5,
>                     "wifi": {
>                         "percentage": 33.84
>                     },
>                     "nonWifi": {
>                         "percentage": 1.84
>                     },
>                     "total": {
>                         "percentage": 32
>                     }
>                 }
>             ]
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/channelUtilization/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average channel utilization across all bands for all networks in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/channelUtilization/byNetwork`  
> 
>     [
>         {
>             "network": {
>                 "id": "N_24329156"
>             },
>             "byBand": [
>                 {
>                     "band": 5,
>                     "wifi": {
>                         "percentage": 33.84
>                     },
>                     "nonWifi": {
>                         "percentage": 1.84
>                     },
>                     "total": {
>                         "percentage": 32
>                     }
>                 }
>             ]
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/channelUtilization/history/byDevice/byInterval`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get a time-series of average channel utilization for all bands, segmented by device.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/channelUtilization/history/byDevice/byInterval`  
> 
>     [
>         {
>             "startTs": "2018-02-11T00:00:00Z",
>             "endTs": "2018-05-12T00:00:00Z",
>             "serial": "Q234-ABCD-5678",
>             "mac": "00:11:22:33:44:55",
>             "byBand": [
>                 {
>                     "band": 5,
>                     "wifi": {
>                         "percentage": 33.84
>                     },
>                     "nonWifi": {
>                         "percentage": 1.84
>                     },
>                     "total": {
>                         "percentage": 32
>                     }
>                 }
>             ]
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/channelUtilization/history/byNetwork/byInterval`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get a time-series of average channel utilization for all bands
> 
> **GET** `/organizations/{organizationId}/wireless/devices/channelUtilization/history/byNetwork/byInterval`  
> 
>     [
>         {
>             "startTs": "2018-02-11T00:00:00Z",
>             "endTs": "2018-05-12T00:00:00Z",
>             "network": {
>                 "id": "N_24329156"
>             },
>             "byBand": [
>                 {
>                     "band": 5,
>                     "wifi": {
>                         "percentage": 33.84
>                     },
>                     "nonWifi": {
>                         "percentage": 1.84
>                     },
>                     "total": {
>                         "percentage": 32
>                     }
>                 }
>             ]
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
>             "serial": "Q234-ABCD-5678"
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

\[ sensor \]
------------

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
>             "battery": {
>                 "percentage": {
>                     "minimum": 95,
>                     "maximum": 97,
>                     "average": 96
>                 }
>             },
>             "button": {
>                 "pressType": {
>                     "counts": {
>                         "short": 2,
>                         "long": 4
>                     }
>                 }
>             },
>             "door": {
>                 "counts": {
>                     "open": 6
>                 }
>             },
>             "humidity": {
>                 "relativePercentage": {
>                     "minimum": 33,
>                     "maximum": 35,
>                     "average": 33
>                 }
>             },
>             "indoorAirQuality": {
>                 "score": {
>                     "minimum": 33,
>                     "maximum": 35,
>                     "average": 33
>                 }
>             },
>             "noise": {
>                 "ambient": {
>                     "level": {
>                         "minimum": 22,
>                         "maximum": 45,
>                         "average": 31
>                     }
>                 }
>             },
>             "pm25": {
>                 "concentration": {
>                     "minimum": 0,
>                     "maximum": 3,
>                     "average": 1
>                 }
>             },
>             "temperature": {
>                 "fahrenheit": {
>                     "minimum": 68.15,
>                     "maximum": 74.91,
>                     "average": 72.08
>                 },
>                 "celsius": {
>                     "minimum": 20.08,
>                     "maximum": 23.84,
>                     "average": 22.27
>                 }
>             },
>             "tvoc": {
>                 "concentration": {
>                     "minimum": 221,
>                     "maximum": 504,
>                     "average": 440
>                 }
>             },
>             "water": {
>                 "counts": {
>                     "present": 6
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

\[ appliance \]
---------------

### uplinks

PATH _`/organizations/{organizationId}/appliance/uplinks/usage/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the sent and received bytes for each uplink of all wired networks within an organization. If more than one MX was active during the specified timespan, then the sent and received bytes will be aggregated by interface.
> 
> **GET** `/organizations/{organizationId}/appliance/uplinks/usage/byNetwork`  
> 
>     [
>         {
>             "networkId": "N_24329156",
>             "name": "Main Office",
>             "byUplink": [
>                 {
>                     "serial": "Q234-ABCD-5678",
>                     "interface": "wan1",
>                     "sent": 200,
>                     "received": 400
>                 }
>             ]
>         }
>     ]
> 
> * * *

* * *