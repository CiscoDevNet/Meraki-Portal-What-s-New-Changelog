
---

## v1.69.0-beta.3


- [Added](#added)
  * [\[ organizations \]](#-organizations-)
    + [assurance](#assurance)
      - [Returns count of impacted wireless devices per network on a given organization and time range.](#returns-count-of-impacted-wireless-devices-per-network-on-a-given-organization-and-time-range)
      - [Summarizes wired connection successes and failures by network.](#summarizes-wired-connection-successes-and-failures-by-network)
      - [Time-series of wired connection successes and failures by network.](#time-series-of-wired-connection-successes-and-failures-by-network)
    + [campusGateway](#campusgateway)
      - [Returns client usage details for campus gateway clusters within an organization.](#returns-client-usage-details-for-campus-gateway-clusters-within-an-organization)
    + [devices](#devices)
      - [Bulk update the attributes related to positions for provided devices](#bulk-update-the-attributes-related-to-positions-for-provided-devices)
      - [Returns details about software updates for networks within an organization.](#returns-details-about-software-updates-for-networks-within-an-organization)
    + [iam](#iam)
      - [List the authenticated caller admin's permissions for an organization](#list-the-authenticated-caller-admins-permissions-for-an-organization)
    + [sites](#sites)
      - [List the buildings belonging to the organization](#list-the-buildings-belonging-to-the-organization)
    + [wireless](#wireless)
      - [Summarize the number of wireless clients impacted by connection failures on network SSIDs, across an organization.](#summarize-the-number-of-wireless-clients-impacted-by-connection-failures-on-network-ssids-across-an-organization)
      - [Returns client usage details for wireless networks within an organization.](#returns-client-usage-details-for-wireless-networks-within-an-organization)
      - [Returns client usage details for wireless network SSIDs within an organization.](#returns-client-usage-details-for-wireless-network-ssids-within-an-organization)
      - [Returns client usage details for SSIDs within an organization.](#returns-client-usage-details-for-ssids-within-an-organization)
      - [Returns the SSID profiles for an organization](#returns-the-ssid-profiles-for-an-organization)
      - [Create a new SSID profile in an organization](#create-a-new-ssid-profile-in-an-organization)
      - [Unassigns the SSID profile assigned to an SSID](#unassigns-the-ssid-profile-assigned-to-an-ssid)
      - [List the SSID profile assignments in an organization](#list-the-ssid-profile-assignments-in-an-organization)
      - [Assigns an SSID profile to an SSID in the organization](#assigns-an-ssid-profile-to-an-ssid-in-the-organization)
      - [List the SSID profile assignments in an organization, grouped by network](#list-the-ssid-profile-assignments-in-an-organization-grouped-by-network)
      - [Returns the SSID profiles' overview information for an organization](#returns-the-ssid-profiles-overview-information-for-an-organization)
      - [Delete an SSID profile](#delete-an-ssid-profile)
      - [Update this SSID profile](#update-this-ssid-profile)
  * [\[ sites \]](#-sites-)
    + [buildings](#buildings)
      - [Create a new building](#create-a-new-building)
      - [Delete a building](#delete-a-building)
      - [Update a building](#update-a-building)
- [Changed](#changed)
  * [\[ appliance \]](#-appliance--1)
    + [firewall](#firewall-1)
      - [Return the L3 firewall rules for an MX network](#return-the-l3-firewall-rules-for-an-mx-network-1)
      - [Update the L3 firewall rules of an MX network](#update-the-l3-firewall-rules-of-an-mx-network-1)
    + [prefixes](#prefixes-1)
      - [List static delegated prefixes for a network](#list-static-delegated-prefixes-for-a-network-1)
      - [Add a static delegated prefix from a network](#add-a-static-delegated-prefix-from-a-network-1)
      - [Delete a static delegated prefix from a network](#delete-a-static-delegated-prefix-from-a-network-1)
      - [Return a static delegated prefix from a network](#return-a-static-delegated-prefix-from-a-network-1)
      - [Update a static delegated prefix from a network](#update-a-static-delegated-prefix-from-a-network-1)
    + [staticRoutes](#staticroutes-1)
      - [Add a static route for an MX or teleworker network](#add-a-static-route-for-an-mx-or-teleworker-network-1)
      - [Update a static route for an MX or teleworker network](#update-a-static-route-for-an-mx-or-teleworker-network-1)
  * [\[ clients \]](#-clients--1)
    + [general](#general-1)
      - [Return the client associated with the given identifier](#return-the-client-associated-with-the-given-identifier-1)
  * [\[ devices \]](#-devices--1)
    + [appliance](#appliance-1)
      - [Update configurations for an appliance's specified port](#update-configurations-for-an-appliances-specified-port-1)
      - [Return the uplink settings for a secure router or security appliance](#return-the-uplink-settings-for-a-secure-router-or-security-appliance-1)
      - [Update the uplink settings for a secure router or security appliance](#update-the-uplink-settings-for-a-secure-router-or-security-appliance-1)
    + [liveTools](#livetools-1)
      - [Return an OSPF neighbors live tool job.](#return-an-ospf-neighbors-live-tool-job-1)
    + [switch](#switch-1)
      - [List layer 3 interfaces for a switch](#list-layer-3-interfaces-for-a-switch-1)
      - [Create a layer 3 interface for a switch](#create-a-layer-3-interface-for-a-switch-1)
      - [Return a layer 3 interface for a switch](#return-a-layer-3-interface-for-a-switch-1)
      - [Update a layer 3 interface for a switch](#update-a-layer-3-interface-for-a-switch-1)
    + [wireless](#wireless-1)
      - [Return the position for a wireless device](#return-the-position-for-a-wireless-device-1)
      - [Update the position attributes for this device](#update-the-position-attributes-for-this-device-1)
  * [\[ floorPlans \]](#-floorplans--1)
    + [general](#general-1)
      - [List the floor plans that belong to your network](#list-the-floor-plans-that-belong-to-your-network-1)
      - [Upload a floor plan](#upload-a-floor-plan-1)
      - [Destroy a floor plan](#destroy-a-floor-plan-1)
      - [Find a floor plan by ID](#find-a-floor-plan-by-id-1)
      - [Update a floor plan's geolocation and other meta data](#update-a-floor-plans-geolocation-and-other-meta-data-1)
  * [\[ organizations \]](#-organizations--1)
    + [appliance](#appliance-1)
      - [Returns port configurations for appliances in a given organization](#returns-port-configurations-for-appliances-in-a-given-organization-1)
    + [assurance](#assurance-1)
      - [Given a client, return current topology](#given-a-client-return-current-topology-1)
      - [Returns the top wireless service-level insights for the specified time window, including each network and the impacted client count per metric.](#returns-the-top-wireless-service-level-insights-for-the-specified-time-window-including-each-network-and-the-impacted-client-count-per-metric-1)
      - [Summarizes wireless connection successes and failures by client.](#summarizes-wireless-connection-successes-and-failures-by-client-1)
      - [Summarizes wireless connection successes and failures by device.](#summarizes-wireless-connection-successes-and-failures-by-device-1)
      - [Summarizes wireless connection successes and failures by ssid.](#summarizes-wireless-connection-successes-and-failures-by-ssid-1)
      - [Summarizes wireless time to connect metrics by client.](#summarizes-wireless-time-to-connect-metrics-by-client-1)
      - [Summarizes wireless connection time to connect metrics by device.](#summarizes-wireless-connection-time-to-connect-metrics-by-device-1)
      - [Summarizes wireless connection time to connect metrics by ssid.](#summarizes-wireless-connection-time-to-connect-metrics-by-ssid-1)
    + [inventory](#inventory-1)
    + [sase](#sase-1)
    + [wireless](#wireless-1)
      - [Returns the current Air Marshal rules for this organization](#returns-the-current-air-marshal-rules-for-this-organization-1)
      - [List access point client count at the moment in an organization](#list-access-point-client-count-at-the-moment-in-an-organization-1)
      - [Show the by-network client information for the organization in the given interval](#show-the-by-network-client-information-for-the-organization-in-the-given-interval-1)
      - [Get average packet loss for the given timespan for all networks in the organization.](#get-average-packet-loss-for-the-given-timespan-for-all-networks-in-the-organization-1)
      - [Return the CPU Load history for a list of wireless devices in the organization.](#return-the-cpu-load-history-for-a-list-of-wireless-devices-in-the-organization-1)
      - [List the AFC power limits of an organization by device](#list-the-afc-power-limits-of-an-organization-by-device-1)
      - [List the RF profiles of an organization by device](#list-the-rf-profiles-of-an-organization-by-device-1)
  * [\[ switch \]](#-switch--1)
    + [stacks](#stacks-1)
      - [List layer 3 interfaces for a switch stack](#list-layer-3-interfaces-for-a-switch-stack-1)
      - [Create a layer 3 interface for a switch stack](#create-a-layer-3-interface-for-a-switch-stack-1)
      - [Return a layer 3 interface from a switch stack](#return-a-layer-3-interface-from-a-switch-stack-1)
      - [Update a layer 3 interface for a switch stack](#update-a-layer-3-interface-for-a-switch-stack-1)
  * [\[ wireless \]](#-wireless--1)
    + [clients](#clients-1)
      - [Fetch the health scores for all clients on this network](#fetch-the-health-scores-for-all-clients-on-this-network-1)
      - [Return counts of distinct wireless clients connecting to a network over time](#return-counts-of-distinct-wireless-clients-connecting-to-a-network-over-time-1)
    + [ssids](#ssids-1)
      - [List the MR SSIDs in a network](#list-the-mr-ssids-in-a-network-1)
      - [Return a single MR SSID](#return-a-single-mr-ssid-1)
      - [Update the attributes of an MR SSID](#update-the-attributes-of-an-mr-ssid-1)
 
Version **v1.69.0-beta.2** _to_ **v1.69.0-beta.3**

* * *

**Summary of Changes**

**24 - New**

**56 - Updated**

**874 - Total Endpoints**

**594 - Total Paths**

* * *

* * *

Added
=====

\[ organizations \]
--------------

### assurance

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-impacted-device-wireless-by-network/)

#### Returns count of impacted wireless devices per network on a given organization and time range.

Operation ID: `getOrganizationAssuranceImpactedDeviceWirelessByNetwork`

PATH _`/organizations/{organizationId}/assurance/impactedDevice/wireless/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/impactedDevice/wireless/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wired-experience-successful-connections-by-network/)

#### Summarizes wired connection successes and failures by network.

Operation ID: `getOrganizationAssuranceWiredExperienceSuccessfulConnectionsByNetwork`

PATH _`/organizations/{organizationId}/assurance/wired/experience/successfulConnections/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wired/experience/successfulConnections/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wired-experience-successful-connections-by-network-by-interval/)

#### Time-series of wired connection successes and failures by network.

Operation ID: `getOrganizationAssuranceWiredExperienceSuccessfulConnectionsByNetworkByInterval`

PATH _`/organizations/{organizationId}/assurance/wired/experience/successfulConnections/byNetwork/byInterval`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wired/experience/successfulConnections/byNetwork/byInterval`  
> 
> * * *

* * *

### campusGateway

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-campus-gateway-clients-usage-by-network-by-cluster/)

#### Returns client usage details for campus gateway clusters within an organization.

Operation ID: `getOrganizationCampusGatewayClientsUsageByNetworkByCluster`

PATH _`/organizations/{organizationId}/campusGateway/clients/usage/byNetwork/byCluster`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/campusGateway/clients/usage/byNetwork/byCluster`  
> 
> * * *

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/bulk-organization-devices-placement-positions-update/)

#### Bulk update the attributes related to positions for provided devices

Operation ID: `bulkOrganizationDevicesPlacementPositionsUpdate`

PATH _`/organizations/{organizationId}/devices/placement/positions/bulkUpdate`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/devices/placement/positions/bulkUpdate`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-software-updates-overviews-by-network/)

#### Returns details about software updates for networks within an organization.

Operation ID: `getOrganizationDevicesSoftwareUpdatesOverviewsByNetwork`

PATH _`/organizations/{organizationId}/devices/software/updates/overviews/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/devices/software/updates/overviews/byNetwork`  
> 
> * * *

* * *

### iam

[Docs](https://developer.cisco.com/meraki/api-v1/resolve-organization-iam-admins-administrators-me-permissions/)

#### List the authenticated caller admin's permissions for an organization

Operation ID: `resolveOrganizationIamAdminsAdministratorsMePermissions`

PATH _`/organizations/{organizationId}/iam/admins/administrators/me/permissions/resolve`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/iam/admins/administrators/me/permissions/resolve`  
> 
> * * *

* * *

### sites

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sites-buildings/)

#### List the buildings belonging to the organization

Operation ID: `getOrganizationSitesBuildings`

PATH _`/organizations/{organizationId}/sites/buildings`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/sites/buildings`  
> 
> * * *

* * *

### wireless

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-connections-impacted-by-network-by-ssid/)

#### Summarize the number of wireless clients impacted by connection failures on network SSIDs, across an organization.

Operation ID: `getOrganizationWirelessClientsConnectionsImpactedByNetworkBySsid`

PATH _`/organizations/{organizationId}/wireless/clients/connections/impacted/byNetwork/bySsid`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/clients/connections/impacted/byNetwork/bySsid`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-usage-by-network/)

#### Returns client usage details for wireless networks within an organization.

Operation ID: `getOrganizationWirelessClientsUsageByNetwork`

PATH _`/organizations/{organizationId}/wireless/clients/usage/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/clients/usage/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-usage-by-network-by-ssid/)

#### Returns client usage details for wireless network SSIDs within an organization.

Operation ID: `getOrganizationWirelessClientsUsageByNetworkBySsid`

PATH _`/organizations/{organizationId}/wireless/clients/usage/byNetwork/bySsid`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/clients/usage/byNetwork/bySsid`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-usage-by-ssid/)

#### Returns client usage details for SSIDs within an organization.

Operation ID: `getOrganizationWirelessClientsUsageBySsid`

PATH _`/organizations/{organizationId}/wireless/clients/usage/bySsid`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/clients/usage/bySsid`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-ssids-profiles/)

#### Returns the SSID profiles for an organization

Operation ID: `getOrganizationWirelessSsidsProfiles`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/ssids/profiles`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-wireless-ssids-profile/)

#### Create a new SSID profile in an organization

Operation ID: `createOrganizationWirelessSsidsProfile`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/wireless/ssids/profiles`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-wireless-ssids-profiles-assignments/)

#### Unassigns the SSID profile assigned to an SSID

Operation ID: `deleteOrganizationWirelessSsidsProfilesAssignments`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles/assignments`_

> \- Path added  
>   
> \- New endpoint
> 
> **DELETE** `/organizations/{organizationId}/wireless/ssids/profiles/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-ssids-profiles-assignments/)

#### List the SSID profile assignments in an organization

Operation ID: `getOrganizationWirelessSsidsProfilesAssignments`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles/assignments`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/ssids/profiles/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-wireless-ssids-profiles-assignment/)

#### Assigns an SSID profile to an SSID in the organization

Operation ID: `createOrganizationWirelessSsidsProfilesAssignment`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles/assignments`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/wireless/ssids/profiles/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-ssids-profiles-assignments-by-network/)

#### List the SSID profile assignments in an organization, grouped by network

Operation ID: `getOrganizationWirelessSsidsProfilesAssignmentsByNetwork`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles/assignments/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/ssids/profiles/assignments/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-ssids-profiles-overviews/)

#### Returns the SSID profiles' overview information for an organization

Operation ID: `getOrganizationWirelessSsidsProfilesOverviews`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles/overviews`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/ssids/profiles/overviews`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-wireless-ssids-profile/)

#### Delete an SSID profile

Operation ID: `deleteOrganizationWirelessSsidsProfile`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> **DELETE** `/organizations/{organizationId}/wireless/ssids/profiles/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-wireless-ssids-profile/)

#### Update this SSID profile

Operation ID: `updateOrganizationWirelessSsidsProfile`

PATH _`/organizations/{organizationId}/wireless/ssids/profiles/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> **PUT** `/organizations/{organizationId}/wireless/ssids/profiles/{id}`  
> 
> * * *

* * *

\[ sites \]
--------------

### buildings

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-sites-building/)

#### Create a new building

Operation ID: `createNetworkSitesBuilding`

PATH _`/networks/{networkId}/sites/buildings`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/networks/{networkId}/sites/buildings`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-network-sites-building/)

#### Delete a building

Operation ID: `deleteNetworkSitesBuilding`

PATH _`/networks/{networkId}/sites/buildings/{buildingId}`_

> \- Path added  
>   
> \- New endpoint
> 
> **DELETE** `/networks/{networkId}/sites/buildings/{buildingId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-sites-building/)

#### Update a building

Operation ID: `updateNetworkSitesBuilding`

PATH _`/networks/{networkId}/sites/buildings/{buildingId}`_

> \- Path added  
>   
> \- New endpoint
> 
> **PUT** `/networks/{networkId}/sites/buildings/{buildingId}`  
> 
> * * *

* * *

Changed
=======

\[ appliance \]
------------

### firewall

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-firewall-l3-firewall-rules/)

#### Return the L3 firewall rules for an MX network

Operation ID: `getNetworkApplianceFirewallL3FirewallRules`

GET _`/networks/{networkId}/appliance/firewall/l3FirewallRules`_

> \- added the optional property `rules` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-firewall-l3-firewall-rules/)

#### Update the L3 firewall rules of an MX network

Operation ID: `updateNetworkApplianceFirewallL3FirewallRules`

PUT _`/networks/{networkId}/appliance/firewall/l3FirewallRules`_

> \- added the optional property `rules` to the response with the `200` status

* * *

### prefixes

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-prefixes-delegated-statics/)

#### List static delegated prefixes for a network

Operation ID: `getNetworkAppliancePrefixesDelegatedStatics`

GET _`/networks/{networkId}/appliance/prefixes/delegated/statics`_

> \- the response property `/items/description` became nullable for the status `200`

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-appliance-prefixes-delegated-static/)

#### Add a static delegated prefix from a network

Operation ID: `createNetworkAppliancePrefixesDelegatedStatic`

POST _`/networks/{networkId}/appliance/prefixes/delegated/statics`_

> \- added the optional property `createdAt` to the response with the `201` status

> \- added the optional property `description` to the response with the `201` status

> \- added the optional property `origin` to the response with the `201` status

> \- added the optional property `prefix` to the response with the `201` status

> \- added the optional property `staticDelegatedPrefixId` to the response with the `201` status

> \- added the optional property `updatedAt` to the response with the `201` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-network-appliance-prefixes-delegated-static/)

#### Delete a static delegated prefix from a network

Operation ID: `deleteNetworkAppliancePrefixesDelegatedStatic`

DELETE _`/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`_

> \- added the media type `application/json` for the response with the status `204`

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-prefixes-delegated-static/)

#### Return a static delegated prefix from a network

Operation ID: `getNetworkAppliancePrefixesDelegatedStatic`

GET _`/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`_

> \- the response property `description` became nullable for the status `200`

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-prefixes-delegated-static/)

#### Update a static delegated prefix from a network

Operation ID: `updateNetworkAppliancePrefixesDelegatedStatic`

PUT _`/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}`_

> \- added the optional property `createdAt` to the response with the `200` status

> \- added the optional property `description` to the response with the `200` status

> \- added the optional property `origin` to the response with the `200` status

> \- added the optional property `prefix` to the response with the `200` status

> \- added the optional property `staticDelegatedPrefixId` to the response with the `200` status

> \- added the optional property `updatedAt` to the response with the `200` status

* * *

### staticRoutes

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-appliance-static-route/)

#### Add a static route for an MX or teleworker network

Operation ID: `createNetworkApplianceStaticRoute`

POST _`/networks/{networkId}/appliance/staticRoutes`_

> \- the `gatewayVlanId` request property type/format changed from `string`/`` to `integer`/``

> \- the `gatewayVlanId` request property's max was set to `4094.00`

> \- the `gatewayVlanId` request property's min was set to `0.00`

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-static-route/)

#### Update a static route for an MX or teleworker network

Operation ID: `updateNetworkApplianceStaticRoute`

PUT _`/networks/{networkId}/appliance/staticRoutes/{staticRouteId}`_

> \- the `gatewayVlanId` request property type/format changed from `string`/`` to `integer`/``

> \- the `gatewayVlanId` request property's max was set to `4094.00`

> \- the `gatewayVlanId` request property's min was set to `0.00`

* * *

\[ clients \]
------------

### general

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-client/)

#### Return the client associated with the given identifier

Operation ID: `getNetworkClient`

GET _`/networks/{networkId}/clients/{clientId}`_

> \- added the optional property `recentDeviceId` to the response with the `200` status

* * *

\[ devices \]
------------

### appliance

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-appliance-interfaces-port/)

#### Update configurations for an appliance's specified port

Operation ID: `updateDeviceApplianceInterfacesPort`

PUT _`/devices/{serial}/appliance/interfaces/ports/{number}`_

> \- added the new optional request property `downlink`

> \- added the optional property `interface` to the response with the `200` status

> \- added the optional property `personality/layer` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-appliance-uplinks-settings/)

#### Return the uplink settings for a secure router or security appliance

Operation ID: `getDeviceApplianceUplinksSettings`

GET _`/devices/{serial}/appliance/uplinks/settings`_

> \- added the optional property `interfaces/wan1/transition` to the response with the `200` status

> \- added the optional property `interfaces/wan2/transition` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-appliance-uplinks-settings/)

#### Update the uplink settings for a secure router or security appliance

Operation ID: `updateDeviceApplianceUplinksSettings`

PUT _`/devices/{serial}/appliance/uplinks/settings`_

> \- added the new optional request property `interfaces/wan1/transition`

> \- added the new optional request property `interfaces/wan2/transition`

> \- added the optional property `interfaces/wan1/transition` to the response with the `200` status

> \- added the optional property `interfaces/wan2/transition` to the response with the `200` status

* * *

### liveTools

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-ospf-neighbor/)

#### Return an OSPF neighbors live tool job.

Operation ID: `getDeviceLiveToolsOspfNeighbor`

GET _`/devices/{serial}/liveTools/ospfNeighbors/{ospfNeighborsId}`_

> \- added the optional property `routers/items/interfaceName` to the response with the `200` status

* * *

### switch

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-switch-routing-interfaces/)

#### List layer 3 interfaces for a switch

Operation ID: `getDeviceSwitchRoutingInterfaces`

GET _`/devices/{serial}/switch/routing/interfaces`_

> \- added the optional property `/items/mtu` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-switch-routing-interface/)

#### Create a layer 3 interface for a switch

Operation ID: `createDeviceSwitchRoutingInterface`

POST _`/devices/{serial}/switch/routing/interfaces`_

> \- added the new optional request property `mtu`

> \- added the optional property `mtu` to the response with the `201` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-switch-routing-interface/)

#### Return a layer 3 interface for a switch

Operation ID: `getDeviceSwitchRoutingInterface`

GET _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- added the optional property `mtu` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-switch-routing-interface/)

#### Update a layer 3 interface for a switch

Operation ID: `updateDeviceSwitchRoutingInterface`

PUT _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- added the new optional request property `mtu`

> \- added the optional property `mtu` to the response with the `200` status

* * *

### wireless

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-wireless-radio-afc-position/)

#### Return the position for a wireless device

Operation ID: `getDeviceWirelessRadioAfcPosition`

GET _`/devices/{serial}/wireless/radio/afc/position`_

> \- added the optional property `height/aboveFloor` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-wireless-radio-afc-position/)

#### Update the position attributes for this device

Operation ID: `updateDeviceWirelessRadioAfcPosition`

PUT _`/devices/{serial}/wireless/radio/afc/position`_

> \- added the new optional request property `height/aboveFloor`

> \- added the optional property `height/aboveFloor` to the response with the `200` status

* * *

\[ floorPlans \]
------------

### general

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-floor-plans/)

#### List the floor plans that belong to your network

Operation ID: `getNetworkFloorPlans`

GET _`/networks/{networkId}/floorPlans`_

> \- added the optional property `/items/buildingId` to the response with the `200` status

> \- added the optional property `/items/devices/items/height` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-floor-plan/)

#### Upload a floor plan

Operation ID: `createNetworkFloorPlan`

POST _`/networks/{networkId}/floorPlans`_

> \- added the new optional request property `buildingId`

> \- added the optional property `buildingId` to the response with the `201` status

> \- added the optional property `devices/items/height` to the response with the `201` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-network-floor-plan/)

#### Destroy a floor plan

Operation ID: `deleteNetworkFloorPlan`

DELETE _`/networks/{networkId}/floorPlans/{floorPlanId}`_

> \- added the optional property `buildingId` to the response with the `204` status

> \- added the optional property `devices/items/height` to the response with the `204` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-floor-plan/)

#### Find a floor plan by ID

Operation ID: `getNetworkFloorPlan`

GET _`/networks/{networkId}/floorPlans/{floorPlanId}`_

> \- added the optional property `buildingId` to the response with the `200` status

> \- added the optional property `devices/items/height` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-floor-plan/)

#### Update a floor plan's geolocation and other meta data

Operation ID: `updateNetworkFloorPlan`

PUT _`/networks/{networkId}/floorPlans/{floorPlanId}`_

> \- added the new optional request property `buildingId`

> \- added the optional property `buildingId` to the response with the `200` status

> \- added the optional property `devices/items/height` to the response with the `200` status

* * *

\[ organizations \]
------------

### appliance

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-devices-interfaces-ports-by-device/)

#### Returns port configurations for appliances in a given organization

Operation ID: `getOrganizationApplianceDevicesInterfacesPortsByDevice`

GET _`/organizations/{organizationId}/appliance/devices/interfaces/ports/byDevice`_

> \- added the optional property `items/items/ports/items/interface` to the response with the `200` status

> \- added the optional property `items/items/ports/items/personality/layer` to the response with the `200` status

* * *

### assurance

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-clients-topology-new/)

#### Given a client, return current topology

Operation ID: `getOrganizationAssuranceClientsTopologyNew`

GET _`/organizations/{organizationId}/assurance/clients/topology/new`_

> \- added the optional property `/items/items/items/topology/path/items/isAurora2` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-clients-insights/)

#### Returns the top wireless service-level insights for the specified time window, including each network and the impacted client count per metric.

Operation ID: `getOrganizationAssuranceWirelessExperienceClientsInsights`

GET _`/organizations/{organizationId}/assurance/wireless/experience/clients/insights`_

> \- added the new `coverage` enum value to the `items/items/metric/name` response property for the response status `200`

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-successful-connects-by-network-by-client/)

#### Summarizes wireless connection successes and failures by client.

Operation ID: `getOrganizationAssuranceWirelessExperienceSuccessfulConnectsByNetworkByClient`

GET _`/organizations/{organizationId}/assurance/wireless/experience/successfulConnects/byNetwork/byClient`_

> \- removed the optional property `/items/items/items/connections` from the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-successful-connects-by-network-by-device/)

#### Summarizes wireless connection successes and failures by device.

Operation ID: `getOrganizationAssuranceWirelessExperienceSuccessfulConnectsByNetworkByDevice`

GET _`/organizations/{organizationId}/assurance/wireless/experience/successfulConnects/byNetwork/byDevice`_

> \- removed the optional property `/items/items/items/connections` from the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-successful-connects-by-network-by-ssid/)

#### Summarizes wireless connection successes and failures by ssid.

Operation ID: `getOrganizationAssuranceWirelessExperienceSuccessfulConnectsByNetworkBySsid`

GET _`/organizations/{organizationId}/assurance/wireless/experience/successfulConnects/byNetwork/bySsid`_

> \- removed the optional property `/items/items/items/connections` from the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-time-to-connect-by-network-by-client/)

#### Summarizes wireless time to connect metrics by client.

Operation ID: `getOrganizationAssuranceWirelessExperienceTimeToConnectByNetworkByClient`

GET _`/organizations/{organizationId}/assurance/wireless/experience/timeToConnect/byNetwork/byClient`_

> \- removed the optional property `/items/items/items/connections` from the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-time-to-connect-by-network-by-device/)

#### Summarizes wireless connection time to connect metrics by device.

Operation ID: `getOrganizationAssuranceWirelessExperienceTimeToConnectByNetworkByDevice`

GET _`/organizations/{organizationId}/assurance/wireless/experience/timeToConnect/byNetwork/byDevice`_

> \- removed the optional property `/items/items/items/connections` from the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-time-to-connect-by-network-by-ssid/)

#### Summarizes wireless connection time to connect metrics by ssid.

Operation ID: `getOrganizationAssuranceWirelessExperienceTimeToConnectByNetworkBySsid`

GET _`/organizations/{organizationId}/assurance/wireless/experience/timeToConnect/byNetwork/bySsid`_

> \- removed the optional property `/items/items/items/connections` from the response with the `200` status

* * *

### inventory

POST _`/organizations/{organizationId}/inventory/onboarding/cloudMonitoring/exportEvents`_

> \- api path removed with deprecation

* * *

GET _`/organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports`_

> \- api path removed with deprecation

* * *

POST _`/organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports`_

> \- api path removed with deprecation

* * *

GET _`/organizations/{organizationId}/inventory/onboarding/cloudMonitoring/networks`_

> \- api path removed with deprecation

* * *

POST _`/organizations/{organizationId}/inventory/onboarding/cloudMonitoring/prepare`_

> \- api path removed with deprecation

* * *

### sase

POST _`/organizations/{organizationId}/sase/connectors/batchCreate`_

> \- api path removed without deprecation

* * *

### wireless

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-air-marshal-rules/)

#### Returns the current Air Marshal rules for this organization

Operation ID: `getOrganizationWirelessAirMarshalRules`

GET _`/organizations/{organizationId}/wireless/airMarshal/rules`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-overview-by-device/)

#### List access point client count at the moment in an organization

Operation ID: `getOrganizationWirelessClientsOverviewByDevice`

GET _`/organizations/{organizationId}/wireless/clients/overview/byDevice`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/by-organization-wireless-clients-rf-health-overview-network/)

#### Show the by-network client information for the organization in the given interval

Operation ID: `byOrganizationWirelessClientsRfHealthOverviewNetwork`

GET _`/organizations/{organizationId}/wireless/clients/rfHealth/overview/byNetwork`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-packet-loss-by-network/)

#### Get average packet loss for the given timespan for all networks in the organization.

Operation ID: `getOrganizationWirelessDevicesPacketLossByNetwork`

GET _`/organizations/{organizationId}/wireless/devices/packetLoss/byNetwork`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-system-cpu-load-history/)

#### Return the CPU Load history for a list of wireless devices in the organization.

Operation ID: `getOrganizationWirelessDevicesSystemCpuLoadHistory`

GET _`/organizations/{organizationId}/wireless/devices/system/cpu/load/history`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-afc-position-by-device/)

#### List the AFC power limits of an organization by device

Operation ID: `getOrganizationWirelessRadioAfcPositionByDevice`

GET _`/organizations/{organizationId}/wireless/radio/afc/position/byDevice`_

> \- added the optional property `/items/height/aboveFloor` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-rf-profiles-assignments-by-device/)

#### List the RF profiles of an organization by device

Operation ID: `getOrganizationWirelessRfProfilesAssignmentsByDevice`

GET _`/organizations/{organizationId}/wireless/rfProfiles/assignments/byDevice`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

\[ switch \]
------------

### stacks

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-stack-routing-interfaces/)

#### List layer 3 interfaces for a switch stack

Operation ID: `getNetworkSwitchStackRoutingInterfaces`

GET _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- added the optional property `/items/mtu` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-switch-stack-routing-interface/)

#### Create a layer 3 interface for a switch stack

Operation ID: `createNetworkSwitchStackRoutingInterface`

POST _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- added the new optional request property `mtu`

> \- added the optional property `mtu` to the response with the `201` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-stack-routing-interface/)

#### Return a layer 3 interface from a switch stack

Operation ID: `getNetworkSwitchStackRoutingInterface`

GET _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- added the optional property `mtu` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-stack-routing-interface/)

#### Update a layer 3 interface for a switch stack

Operation ID: `updateNetworkSwitchStackRoutingInterface`

PUT _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- added the new optional request property `mtu`

> \- added the optional property `mtu` to the response with the `200` status

* * *

\[ wireless \]
------------

### clients

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-clients-health-scores/)

#### Fetch the health scores for all clients on this network

Operation ID: `getNetworkWirelessClientsHealthScores`

GET _`/networks/{networkId}/wireless/clients/healthScores`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-clients-onboarding-history/)

#### Return counts of distinct wireless clients connecting to a network over time

Operation ID: `getNetworkWirelessClientsOnboardingHistory`

GET _`/networks/{networkId}/wireless/clients/onboardingHistory`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

### ssids

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-ssids/)

#### List the MR SSIDs in a network

Operation ID: `getNetworkWirelessSsids`

GET _`/networks/{networkId}/wireless/ssids`_

> \- added the optional property `/items/psk` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-ssid/)

#### Return a single MR SSID

Operation ID: `getNetworkWirelessSsid`

GET _`/networks/{networkId}/wireless/ssids/{number}`_

> \- added the optional property `psk` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-ssid/)

#### Update the attributes of an MR SSID

Operation ID: `updateNetworkWirelessSsid`

PUT _`/networks/{networkId}/wireless/ssids/{number}`_

> \- added the new optional request property `campusGateway`

> \- added the optional property `psk` to the response with the `200` status

* * *


---

## v1.69.0-beta.2


- [Added](#added)
  * [\[ organizations \]](#-organizations-)
    + [api](#api)
      - [List pipeline IDs for the organization, with optional status and timespan filtering](#list-pipeline-ids-for-the-organization-with-optional-status-and-timespan-filtering)
    + [assurance](#assurance)
      - [Summarizes wireless post connection capacity successes and failures by network.](#summarizes-wireless-post-connection-capacity-successes-and-failures-by-network)
      - [Summarizes wireless post connection capacity successes and failures by band.](#summarizes-wireless-post-connection-capacity-successes-and-failures-by-band)
      - [Summarizes wireless post connection capacity successes and failures by network.](#summarizes-wireless-post-connection-capacity-successes-and-failures-by-network)
      - [Summarizes wireless post connection capacity successes and failures by client OS.](#summarizes-wireless-post-connection-capacity-successes-and-failures-by-client-os)
      - [Summarizes wireless post connection capacity successes and failures by network.](#summarizes-wireless-post-connection-capacity-successes-and-failures-by-network)
      - [Summarizes wireless post connection capacity successes and failures by device.](#summarizes-wireless-post-connection-capacity-successes-and-failures-by-device)
      - [Time-series of wireless post connection capacity successes and failures by network.](#time-series-of-wireless-post-connection-capacity-successes-and-failures-by-network)
      - [Summarizes wireless post connection capacity successes and failures by ssid.](#summarizes-wireless-post-connection-capacity-successes-and-failures-by-ssid)
      - [Provides insights into wireless capacity experience by network.](#provides-insights-into-wireless-capacity-experience-by-network)
    + [devices](#devices)
      - [Provides devices that are available to be assigned to a given Cellular Data Management Profile](#provides-devices-that-are-available-to-be-assigned-to-a-given-cellular-data-management-profile)
      - [Listing of Cellular Data Management Profiles for the organization.](#listing-of-cellular-data-management-profiles-for-the-organization)
      - [Add a Cellular Data Management Profile to the organization.](#add-a-cellular-data-management-profile-to-the-organization)
      - [List assignments](#list-assignments)
      - [Assign a Cellular Data Management Profile to devices](#assign-a-cellular-data-management-profile-to-devices)
      - [Unassign a Cellular Data Management Profile from devices](#unassign-a-cellular-data-management-profile-from-devices)
      - [Delete a Cellular Data Management Profile from the organization.](#delete-a-cellular-data-management-profile-from-the-organization)
      - [Update a Cellular Data Management Profile](#update-a-cellular-data-management-profile)
      - [Provides current usage statistics for devices in the organization](#provides-current-usage-statistics-for-devices-in-the-organization)
      - [Provides the cellular data usage history per device and per SIM.](#provides-the-cellular-data-usage-history-per-device-and-per-sim)
    + [nac](#nac)
      - [Get all known clients for the organization](#get-all-known-clients-for-the-organization)
      - [Create a client for the organization](#create-a-client-for-the-organization)
      - [Delete existing client(s) for the organization](#delete-existing-clients-for-the-organization)
      - [Bulk Update of existing clients for the organization](#bulk-update-of-existing-clients-for-the-organization)
      - [Bulk upload of clients, client groups and their associations for the organization](#bulk-upload-of-clients-client-groups-and-their-associations-for-the-organization)
      - [Get all known client groups for the organization](#get-all-known-client-groups-for-the-organization)
      - [Create a client group for the organization](#create-a-client-group-for-the-organization)
      - [Delete an existing client group for the organization](#delete-an-existing-client-group-for-the-organization)
      - [Update an existing client group for the organization with bulk member operations](#update-an-existing-client-group-for-the-organization-with-bulk-member-operations)
      - [Get overview data for all known clients for the organization](#get-overview-data-for-all-known-clients-for-the-organization)
      - [Update an existing client for the organization](#update-an-existing-client-for-the-organization)
- [Changed](#changed)
  * [\[ appliance \]](#-appliance--1)
    + [firewall](#firewall-1)
      - [Return the cellular firewall rules for an MX network](#return-the-cellular-firewall-rules-for-an-mx-network-1)
      - [Update the cellular firewall rules of an MX network](#update-the-cellular-firewall-rules-of-an-mx-network-1)
      - [Return the inbound firewall rules for an MX network](#return-the-inbound-firewall-rules-for-an-mx-network-1)
      - [Return the 1:Many NAT mapping rules for an MX network](#return-the-1many-nat-mapping-rules-for-an-mx-network-1)
      - [Set the 1:Many NAT mapping rules for an MX network](#set-the-1many-nat-mapping-rules-for-an-mx-network-1)
      - [Return the 1:1 NAT mapping rules for an MX network](#return-the-11-nat-mapping-rules-for-an-mx-network-1)
      - [Set the 1:1 NAT mapping rules for an MX network](#set-the-11-nat-mapping-rules-for-an-mx-network-1)
    + [sdwan](#sdwan-1)
      - [Update SDWAN internet traffic preferences for an MX network](#update-sdwan-internet-traffic-preferences-for-an-mx-network-1)
    + [trafficShaping](#trafficshaping-1)
      - [Updates the uplink bandwidth settings for your MX network.](#updates-the-uplink-bandwidth-settings-for-your-mx-network-1)
  * [\[ camera \]](#-camera--1)
    + [qualityRetentionProfiles](#qualityretentionprofiles-1)
      - [Creates new quality retention profile for this network.](#creates-new-quality-retention-profile-for-this-network-1)
      - [Update an existing quality retention profile for this network.](#update-an-existing-quality-retention-profile-for-this-network-1)
  * [\[ organizations \]](#-organizations--1)
    + [appliance](#appliance-1)
      - [Returns an overview of uplink statuses](#returns-an-overview-of-uplink-statuses-1)
      - [Return the third party VPN peers for an organization](#return-the-third-party-vpn-peers-for-an-organization-1)
      - [Update the third party VPN peers for an organization](#update-the-third-party-vpn-peers-for-an-organization-1)
    + [assurance](#assurance-1)
      - [Return all health alerts for an organization](#return-all-health-alerts-for-an-organization-1)
      - [Return overview of active health alerts for an organization](#return-overview-of-active-health-alerts-for-an-organization-1)
      - [Return a Summary of Alerts grouped by type and severity](#return-a-summary-of-alerts-grouped-by-type-and-severity-1)
      - [Return a singular Health Alert by its id](#return-a-singular-health-alert-by-its-id-1)
      - [Given a client, return current topology](#given-a-client-return-current-topology-1)
      - [Summarizes wireless coverage successes and failures by client.](#summarizes-wireless-coverage-successes-and-failures-by-client-1)
      - [Provides insights into wireless coverage experience by network.](#provides-insights-into-wireless-coverage-experience-by-network-1)
      - [Summarizes wireless connection successes and failures by client.](#summarizes-wireless-connection-successes-and-failures-by-client-1)
      - [Provides insights into wireless successful connects experience by network.](#provides-insights-into-wireless-successful-connects-experience-by-network-1)
      - [Summarizes wireless time to connect metrics by client.](#summarizes-wireless-time-to-connect-metrics-by-client-1)
      - [Provides insights into wireless time to connect experience by network.](#provides-insights-into-wireless-time-to-connect-experience-by-network-1)
      - [Return workflows filtered by organization ID, network ID, type, and category](#return-workflows-filtered-by-organization-id-network-id-type-and-category-1)
    + [devices](#devices-1)
      - [Enqueues a task for a specific packet capture](#enqueues-a-task-for-a-specific-packet-capture-1)
      - [Retrieves packet capture analysis result for a specific packet capture task.](#retrieves-packet-capture-analysis-result-for-a-specific-packet-capture-task-1)
    + [inventory](#inventory-1)
      - [Return the device inventory for an organization](#return-the-device-inventory-for-an-organization-1)
      - [Return a single device from the inventory of an organization](#return-a-single-device-from-the-inventory-of-an-organization-1)
      - [Preview the results and status of an order claim by the secure order id](#preview-the-results-and-status-of-an-order-claim-by-the-secure-order-id-1)
    + [switch](#switch-1)
      - [List the port profiles in an organization](#list-the-port-profiles-in-an-organization-1)
      - [List the port profiles in an organization](#list-the-port-profiles-in-an-organization-1)
      - [Returns Spanning Tree configuration settings](#returns-spanning-tree-configuration-settings-1)
  * [\[ switch \]](#-switch--1)
    + [spanningTree](#spanningtree-1)
      - [Updates Spanning Tree configuration](#updates-spanning-tree-configuration-1)
  * [\[ traffic \]](#-traffic--1)
    + [general](#general-1)
      - [Return the traffic analysis data for this network](#return-the-traffic-analysis-data-for-this-network-1)
  * [\[ trafficShaping \]](#-trafficshaping--1)
    + [applicationCategories](#applicationcategories-1)
      - [Returns the application categories for traffic shaping rules](#returns-the-application-categories-for-traffic-shaping-rules-1)
 
Version **v1.69.0-beta.1** _to_ **v1.69.0-beta.2**

* * *

**Summary of Changes**

**31 - New**

**46 - Updated**

**881 - Total Endpoints**

**599 - Total Paths**

* * *

* * *

Added
=====

\[ organizations \]
--------------

### api

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-api-rest-provisioning-pipelines/)

#### List pipeline IDs for the organization, with optional status and timespan filtering

Operation ID: `getOrganizationApiRestProvisioningPipelines`

PATH _`/organizations/{organizationId}/api/rest/provisioning/pipelines`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/api/rest/provisioning/pipelines`  
> 
> * * *

* * *

### assurance

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-by-network/)

#### Summarizes wireless post connection capacity successes and failures by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityByNetwork`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-by-network-by-band/)

#### Summarizes wireless post connection capacity successes and failures by band.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityByNetworkByBand`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byBand`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byBand`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-by-network-by-client/)

#### Summarizes wireless post connection capacity successes and failures by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityByNetworkByClient`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byClient`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-by-network-by-client-os/)

#### Summarizes wireless post connection capacity successes and failures by client OS.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityByNetworkByClientOs`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byClientOs`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byClientOs`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-by-network-by-client-type/)

#### Summarizes wireless post connection capacity successes and failures by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityByNetworkByClientType`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byClientType`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byClientType`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-by-network-by-device/)

#### Summarizes wireless post connection capacity successes and failures by device.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityByNetworkByDevice`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byDevice`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-by-network-by-interval/)

#### Time-series of wireless post connection capacity successes and failures by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityByNetworkByInterval`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byInterval`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/byInterval`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-by-network-by-ssid/)

#### Summarizes wireless post connection capacity successes and failures by ssid.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityByNetworkBySsid`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/bySsid`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/byNetwork/bySsid`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-channel-availability-insights-by-network/)

#### Provides insights into wireless capacity experience by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceChannelAvailabilityInsightsByNetwork`

PATH _`/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/insights/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/assurance/wireless/experience/channelAvailability/insights/byNetwork`  
> 
> * * *

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-cellular-data-devices/)

#### Provides devices that are available to be assigned to a given Cellular Data Management Profile

Operation ID: `getOrganizationDevicesCellularDataDevices`

PATH _`/organizations/{organizationId}/devices/cellular/data/devices`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/devices/cellular/data/devices`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-cellular-data-profiles/)

#### Listing of Cellular Data Management Profiles for the organization.

Operation ID: `getOrganizationDevicesCellularDataProfiles`

PATH _`/organizations/{organizationId}/devices/cellular/data/profiles`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/devices/cellular/data/profiles`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-devices-cellular-data-profile/)

#### Add a Cellular Data Management Profile to the organization.

Operation ID: `createOrganizationDevicesCellularDataProfile`

PATH _`/organizations/{organizationId}/devices/cellular/data/profiles`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/devices/cellular/data/profiles`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-cellular-data-profiles-assignments/)

#### List assignments

Operation ID: `getOrganizationDevicesCellularDataProfilesAssignments`

PATH _`/organizations/{organizationId}/devices/cellular/data/profiles/assignments`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/devices/cellular/data/profiles/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/bulk-organization-devices-cellular-data-profiles-assignments-create/)

#### Assign a Cellular Data Management Profile to devices

Operation ID: `bulkOrganizationDevicesCellularDataProfilesAssignmentsCreate`

PATH _`/organizations/{organizationId}/devices/cellular/data/profiles/assignments/bulkCreate`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/devices/cellular/data/profiles/assignments/bulkCreate`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/bulk-organization-devices-cellular-data-profiles-assignments-delete/)

#### Unassign a Cellular Data Management Profile from devices

Operation ID: `bulkOrganizationDevicesCellularDataProfilesAssignmentsDelete`

PATH _`/organizations/{organizationId}/devices/cellular/data/profiles/assignments/bulkDelete`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/devices/cellular/data/profiles/assignments/bulkDelete`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-devices-cellular-data-profile/)

#### Delete a Cellular Data Management Profile from the organization.

Operation ID: `deleteOrganizationDevicesCellularDataProfile`

PATH _`/organizations/{organizationId}/devices/cellular/data/profiles/{profileId}`_

> \- Path added  
>   
> \- New endpoint
> 
> **DELETE** `/organizations/{organizationId}/devices/cellular/data/profiles/{profileId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-devices-cellular-data-profile/)

#### Update a Cellular Data Management Profile

Operation ID: `updateOrganizationDevicesCellularDataProfile`

PATH _`/organizations/{organizationId}/devices/cellular/data/profiles/{profileId}`_

> \- Path added  
>   
> \- New endpoint
> 
> **PUT** `/organizations/{organizationId}/devices/cellular/data/profiles/{profileId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-cellular-data-usage-by-device/)

#### Provides current usage statistics for devices in the organization

Operation ID: `getOrganizationDevicesCellularDataUsageByDevice`

PATH _`/organizations/{organizationId}/devices/cellular/data/usage/byDevice`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/devices/cellular/data/usage/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-cellular-data-usage-history-by-device-by-interval/)

#### Provides the cellular data usage history per device and per SIM.

Operation ID: `getOrganizationDevicesCellularDataUsageHistoryByDeviceByInterval`

PATH _`/organizations/{organizationId}/devices/cellular/data/usage/history/byDevice/byInterval`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/devices/cellular/data/usage/history/byDevice/byInterval`  
> 
> * * *

* * *

### nac

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-clients/)

#### Get all known clients for the organization

Operation ID: `getOrganizationNacClients`

PATH _`/organizations/{organizationId}/nac/clients`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/nac/clients`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-nac-client/)

#### Create a client for the organization

Operation ID: `createOrganizationNacClient`

PATH _`/organizations/{organizationId}/nac/clients`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/nac/clients`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/bulk-organization-nac-clients-delete/)

#### Delete existing client(s) for the organization

Operation ID: `bulkOrganizationNacClientsDelete`

PATH _`/organizations/{organizationId}/nac/clients/bulkDelete`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/nac/clients/bulkDelete`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-nac-clients-bulk-edit/)

#### Bulk Update of existing clients for the organization

Operation ID: `createOrganizationNacClientsBulkEdit`

PATH _`/organizations/{organizationId}/nac/clients/bulkEdit`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/nac/clients/bulkEdit`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-nac-clients-bulk-upload/)

#### Bulk upload of clients, client groups and their associations for the organization

Operation ID: `createOrganizationNacClientsBulkUpload`

PATH _`/organizations/{organizationId}/nac/clients/bulkUpload`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/nac/clients/bulkUpload`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-clients-groups/)

#### Get all known client groups for the organization

Operation ID: `getOrganizationNacClientsGroups`

PATH _`/organizations/{organizationId}/nac/clients/groups`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/nac/clients/groups`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-nac-clients-group/)

#### Create a client group for the organization

Operation ID: `createOrganizationNacClientsGroup`

PATH _`/organizations/{organizationId}/nac/clients/groups`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/organizations/{organizationId}/nac/clients/groups`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-nac-clients-group/)

#### Delete an existing client group for the organization

Operation ID: `deleteOrganizationNacClientsGroup`

PATH _`/organizations/{organizationId}/nac/clients/groups/{groupId}`_

> \- Path added  
>   
> \- New endpoint
> 
> **DELETE** `/organizations/{organizationId}/nac/clients/groups/{groupId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-nac-clients-group/)

#### Update an existing client group for the organization with bulk member operations

Operation ID: `updateOrganizationNacClientsGroup`

PATH _`/organizations/{organizationId}/nac/clients/groups/{groupId}`_

> \- Path added  
>   
> \- New endpoint
> 
> **PUT** `/organizations/{organizationId}/nac/clients/groups/{groupId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-clients-overview/)

#### Get overview data for all known clients for the organization

Operation ID: `getOrganizationNacClientsOverview`

PATH _`/organizations/{organizationId}/nac/clients/overview`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/nac/clients/overview`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-nac-client/)

#### Update an existing client for the organization

Operation ID: `updateOrganizationNacClient`

PATH _`/organizations/{organizationId}/nac/clients/{clientId}`_

> \- Path added  
>   
> \- New endpoint
> 
> **PUT** `/organizations/{organizationId}/nac/clients/{clientId}`  
> 
> * * *

* * *

Changed
=======

\[ appliance \]
------------

### firewall

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-firewall-cellular-firewall-rules/)

#### Return the cellular firewall rules for an MX network

Operation ID: `getNetworkApplianceFirewallCellularFirewallRules`

GET _`/networks/{networkId}/appliance/firewall/cellularFirewallRules`_

> \- added the optional property `rules` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-firewall-cellular-firewall-rules/)

#### Update the cellular firewall rules of an MX network

Operation ID: `updateNetworkApplianceFirewallCellularFirewallRules`

PUT _`/networks/{networkId}/appliance/firewall/cellularFirewallRules`_

> \- added the optional property `rules` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-firewall-inbound-firewall-rules/)

#### Return the inbound firewall rules for an MX network

Operation ID: `getNetworkApplianceFirewallInboundFirewallRules`

GET _`/networks/{networkId}/appliance/firewall/inboundFirewallRules`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-firewall-one-to-many-nat-rules/)

#### Return the 1:Many NAT mapping rules for an MX network

Operation ID: `getNetworkApplianceFirewallOneToManyNatRules`

GET _`/networks/{networkId}/appliance/firewall/oneToManyNatRules`_

> \- added the optional property `rules` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-firewall-one-to-many-nat-rules/)

#### Set the 1:Many NAT mapping rules for an MX network

Operation ID: `updateNetworkApplianceFirewallOneToManyNatRules`

PUT _`/networks/{networkId}/appliance/firewall/oneToManyNatRules`_

> \- added the optional property `rules` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-firewall-one-to-one-nat-rules/)

#### Return the 1:1 NAT mapping rules for an MX network

Operation ID: `getNetworkApplianceFirewallOneToOneNatRules`

GET _`/networks/{networkId}/appliance/firewall/oneToOneNatRules`_

> \- added the optional property `rules` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-firewall-one-to-one-nat-rules/)

#### Set the 1:1 NAT mapping rules for an MX network

Operation ID: `updateNetworkApplianceFirewallOneToOneNatRules`

PUT _`/networks/{networkId}/appliance/firewall/oneToOneNatRules`_

> \- added the optional property `rules` to the response with the `200` status

* * *

### sdwan

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-sdwan-internet-policies/)

#### Update SDWAN internet traffic preferences for an MX network

Operation ID: `updateNetworkApplianceSdwanInternetPolicies`

PUT _`/networks/{networkId}/appliance/sdwan/internetPolicies`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

### trafficShaping

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-traffic-shaping-uplink-bandwidth/)

#### Updates the uplink bandwidth settings for your MX network.

Operation ID: `updateNetworkApplianceTrafficShapingUplinkBandwidth`

PUT _`/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth`_

> \- added the optional property `bandwidthLimits` to the response with the `200` status

* * *

\[ camera \]
------------

### qualityRetentionProfiles

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-camera-quality-retention-profile/)

#### Creates new quality retention profile for this network.

Operation ID: `createNetworkCameraQualityRetentionProfile`

POST _`/networks/{networkId}/camera/qualityRetentionProfiles`_

> \- added the new optional request property `videoSettings/MV44X`

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-camera-quality-retention-profile/)

#### Update an existing quality retention profile for this network.

Operation ID: `updateNetworkCameraQualityRetentionProfile`

PUT _`/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}`_

> \- added the new optional request property `videoSettings/MV44X`

* * *

\[ organizations \]
------------

### appliance

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-uplinks-statuses-overview/)

#### Returns an overview of uplink statuses

Operation ID: `getOrganizationApplianceUplinksStatusesOverview`

GET _`/organizations/{organizationId}/appliance/uplinks/statuses/overview`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-vpn-third-party-v-p-n-peers/)

#### Return the third party VPN peers for an organization

Operation ID: `getOrganizationApplianceVpnThirdPartyVPNPeers`

GET _`/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers`_

> \- added the optional property `peers/items/ebgpNeighbor/receiveLimit` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-appliance-vpn-third-party-v-p-n-peers/)

#### Update the third party VPN peers for an organization

Operation ID: `updateOrganizationApplianceVpnThirdPartyVPNPeers`

PUT _`/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers`_

> \- added the optional property `peers/items/ebgpNeighbor/receiveLimit` to the response with the `200` status

* * *

### assurance

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-alerts/)

#### Return all health alerts for an organization

Operation ID: `getOrganizationAssuranceAlerts`

GET _`/organizations/{organizationId}/assurance/alerts`_

> \- added the required property `/items/network/url` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-alerts-overview/)

#### Return overview of active health alerts for an organization

Operation ID: `getOrganizationAssuranceAlertsOverview`

GET _`/organizations/{organizationId}/assurance/alerts/overview`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-alerts-overview-by-type/)

#### Return a Summary of Alerts grouped by type and severity

Operation ID: `getOrganizationAssuranceAlertsOverviewByType`

GET _`/organizations/{organizationId}/assurance/alerts/overview/byType`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-alert/)

#### Return a singular Health Alert by its id

Operation ID: `getOrganizationAssuranceAlert`

GET _`/organizations/{organizationId}/assurance/alerts/{id}`_

> \- added the required property `network/url` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-clients-topology-current/)

#### Given a client, return current topology

Operation ID: `getOrganizationAssuranceClientsTopologyCurrent`

GET _`/organizations/{organizationId}/assurance/clients/topology/current`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork`_

> \- api path removed without deprecation

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byBand`_

> \- api path removed without deprecation

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byClient`_

> \- api path removed without deprecation

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byClientOs`_

> \- api path removed without deprecation

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byClientType`_

> \- api path removed without deprecation

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byDevice`_

> \- api path removed without deprecation

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byInterval`_

> \- api path removed without deprecation

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/bySsid`_

> \- api path removed without deprecation

* * *

GET _`/organizations/{organizationId}/assurance/wireless/experience/capacity/insights/byNetwork`_

> \- api path removed without deprecation

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-coverage-by-network-by-client/)

#### Summarizes wireless coverage successes and failures by client.

Operation ID: `getOrganizationAssuranceWirelessExperienceCoverageByNetworkByClient`

GET _`/organizations/{organizationId}/assurance/wireless/experience/coverage/byNetwork/byClient`_

> \- added the optional property `/items/items/items/client/username` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-coverage-insights-by-network/)

#### Provides insights into wireless coverage experience by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceCoverageInsightsByNetwork`

GET _`/organizations/{organizationId}/assurance/wireless/experience/coverage/insights/byNetwork`_

> \- removed the optional property `/items/items/items/insights/items/entities/items/excessFailures` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/failures` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/relativeRisk` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/uncertaintyExplainedPercent` from the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-successful-connects-by-network-by-client/)

#### Summarizes wireless connection successes and failures by client.

Operation ID: `getOrganizationAssuranceWirelessExperienceSuccessfulConnectsByNetworkByClient`

GET _`/organizations/{organizationId}/assurance/wireless/experience/successfulConnects/byNetwork/byClient`_

> \- added the optional property `/items/items/items/client/name` to the response with the `200` status

> \- added the optional property `/items/items/items/client/username` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-successful-connects-insights-by-network/)

#### Provides insights into wireless successful connects experience by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceSuccessfulConnectsInsightsByNetwork`

GET _`/organizations/{organizationId}/assurance/wireless/experience/successfulConnects/insights/byNetwork`_

> \- removed the optional property `/items/items/items/insights/items/entities/items/excessFailures` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/failures` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/relativeRisk` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/serverHealth` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/uncertaintyExplainedPercent` from the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-time-to-connect-by-network-by-client/)

#### Summarizes wireless time to connect metrics by client.

Operation ID: `getOrganizationAssuranceWirelessExperienceTimeToConnectByNetworkByClient`

GET _`/organizations/{organizationId}/assurance/wireless/experience/timeToConnect/byNetwork/byClient`_

> \- added the optional property `/items/items/items/client/name` to the response with the `200` status

> \- added the optional property `/items/items/items/client/username` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-time-to-connect-insights-by-network/)

#### Provides insights into wireless time to connect experience by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceTimeToConnectInsightsByNetwork`

GET _`/organizations/{organizationId}/assurance/wireless/experience/timeToConnect/insights/byNetwork`_

> \- removed the optional property `/items/items/items/insights/items/entities/items/excessFailures` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/failures` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/relativeRisk` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/serverHealth` from the response with the `200` status

> \- removed the optional property `/items/items/items/insights/items/entities/items/uncertaintyExplainedPercent` from the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-workflows/)

#### Return workflows filtered by organization ID, network ID, type, and category

Operation ID: `getOrganizationAssuranceWorkflows`

GET _`/organizations/{organizationId}/assurance/workflows`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/tasks-organization-devices-packet-capture/)

#### Enqueues a task for a specific packet capture

Operation ID: `tasksOrganizationDevicesPacketCapture`

POST _`/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks`_

> \- the security scope `dashboard:general:telemetry:write` was added to the endpoint's security scheme `oauth2`

> \- the security scope `dashboard:general:telemetry:packetcapture:read` was removed from the endpoint's security scheme `oauth2`

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-packet-capture-task/)

#### Retrieves packet capture analysis result for a specific packet capture task.

Operation ID: `getOrganizationDevicesPacketCaptureTask`

GET _`/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks/{id}`_

> \- the security scope `dashboard:general:telemetry:read` was added to the endpoint's security scheme `oauth2`

> \- the security scope `dashboard:general:telemetry:packetcapture:read` was removed from the endpoint's security scheme `oauth2`

* * *

### inventory

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-inventory-devices/)

#### Return the device inventory for an organization

Operation ID: `getOrganizationInventoryDevices`

GET _`/organizations/{organizationId}/inventory/devices`_

> \- added the optional property `/items/sku` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-inventory-device/)

#### Return a single device from the inventory of an organization

Operation ID: `getOrganizationInventoryDevice`

GET _`/organizations/{organizationId}/inventory/devices/{serial}`_

> \- added the optional property `sku` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/preview-organization-inventory-orders/)

#### Preview the results and status of an order claim by the secure order id

Operation ID: `previewOrganizationInventoryOrders`

POST _`/organizations/{organizationId}/inventory/orders/preview`_

> \- added the optional property `resolution` to the response with the `200` status

* * *

### switch

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-profiles/)

#### List the port profiles in an organization

Operation ID: `getOrganizationSwitchPortsProfiles`

GET _`/organizations/{organizationId}/switch/ports/profiles`_

> \- the `/items/counts/assigned/automations` response's property type/format changed from `integer`/`` to `object`/`` for status `200`

> \- the `/items/counts/assigned/ports` response's property type/format changed from `integer`/`` to `object`/`` for status `200`

> \- removed the optional property `/items/counts/assigned/switches` from the response with the `200` status

> \- removed the optional property `/items/counts/networkCounts` from the response with the `200` status

> \- added the optional property `/items/counts/assigned/automations/total` to the response with the `200` status

> \- added the optional property `/items/counts/assigned/devices` to the response with the `200` status

> \- added the optional property `/items/counts/assigned/ports/byProductType` to the response with the `200` status

> \- added the optional property `/items/counts/assigned/ports/total` to the response with the `200` status

> \- added the optional property `/items/counts/networks` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-profiles-overview-by-profile/)

#### List the port profiles in an organization

Operation ID: `getOrganizationSwitchPortsProfilesOverviewByProfile`

GET _`/organizations/{organizationId}/switch/ports/profiles/overview/byProfile`_

> \- the `/items/items/items/counts/assigned/automations` response's property type/format changed from `integer`/`` to `object`/`` for status `200`

> \- the `/items/items/items/counts/assigned/ports` response's property type/format changed from `integer`/`` to `object`/`` for status `200`

> \- removed the optional property `/items/items/items/counts/assigned/switches` from the response with the `200` status

> \- removed the optional property `/items/items/items/counts/networkCounts` from the response with the `200` status

> \- added the optional property `/items/items/items/counts/assigned/automations/total` to the response with the `200` status

> \- added the optional property `/items/items/items/counts/assigned/devices` to the response with the `200` status

> \- added the optional property `/items/items/items/counts/assigned/ports/byProductType` to the response with the `200` status

> \- added the optional property `/items/items/items/counts/assigned/ports/total` to the response with the `200` status

> \- added the optional property `/items/items/items/counts/networks` to the response with the `200` status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-spanning-tree/)

#### Returns Spanning Tree configuration settings

Operation ID: `getOrganizationSwitchSpanningTree`

GET _`/organizations/{organizationId}/switch/spanningTree`_

> \- deleted the `query` request parameter `networkId`

> \- removed the optional property `enabled` from the response with the `200` status

> \- removed the optional property `mode` from the response with the `200` status

> \- removed the optional property `priorities` from the response with the `200` status

> \- added the new optional `query` request parameter `endingBefore`

> \- added the new optional `query` request parameter `networkIds`

> \- added the new optional `query` request parameter `perPage`

> \- added the new optional `query` request parameter `startingAfter`

> \- added the optional property `items` to the response with the `200` status

> \- added the optional property `meta` to the response with the `200` status

* * *

\[ switch \]
------------

### spanningTree

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-spanning-tree/)

#### Updates Spanning Tree configuration

Operation ID: `updateNetworkSwitchSpanningTree`

PUT _`/networks/{networkId}/switch/spanningTree`_

> \- added the optional property `networkId` to the response with the `200` status

* * *

\[ traffic \]
------------

### general

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-traffic/)

#### Return the traffic analysis data for this network

Operation ID: `getNetworkTraffic`

GET _`/networks/{networkId}/traffic`_

> \- the endpoint scheme security `oauth2` was added to the API

* * *

\[ trafficShaping \]
------------

### applicationCategories

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-traffic-shaping-application-categories/)

#### Returns the application categories for traffic shaping rules

Operation ID: `getNetworkTrafficShapingApplicationCategories`

GET _`/networks/{networkId}/trafficShaping/applicationCategories`_

> \- added the optional property `applicationCategories` to the response with the `200` status

* * *


---

## v1.69.0-beta.1


- [Added](#added)
  * [\[ appliance \]](#-appliance-)
    + [devices](#devices)
      - [Update MX warm spare settings](#update-mx-warm-spare-settings)
      - [Swap MX primary and warm spare appliances](#swap-mx-primary-and-warm-spare-appliances)
  * [\[ devices \]](#-devices-)
    + [liveTools](#livetools)
      - [Enqueue a job to retrieve port status for a device](#enqueue-a-job-to-retrieve-port-status-for-a-device)
      - [Return a port status live tool job.](#return-a-port-status-live-tool-job)
  * [\[ organizations \]](#-organizations-)
    + [appliance](#appliance)
      - [Return MX warm spare settings](#return-mx-warm-spare-settings)
    + [wireless](#wireless)
      - [Get sticky client events within the specified timespan.](#get-sticky-client-events-within-the-specified-timespan)
- [Changed](#changed)
  * [\[ appliance \]](#-appliance--1)
    + [contentFiltering](#contentfiltering-1)
      - [List all available content filtering categories for an MX network](#list-all-available-content-filtering-categories-for-an-mx-network-1)
    + [umbrella](#umbrella-1)
      - [Remove one umbrella policy from your network.](#remove-one-umbrella-policy-from-your-network-1)
  * [\[ organizations \]](#-organizations--1)
    + [assurance](#assurance-1)
      - [Return a Summary of Alerts grouped by type and severity](#return-a-summary-of-alerts-grouped-by-type-and-severity-1)
      - [Returns counts of online, offline, and recovered devices by product type, along with offline intervals for impacted devices in the organization.](#returns-counts-of-online-offline-and-recovered-devices-by-product-type-along-with-offline-intervals-for-impacted-devices-in-the-organization-1)
      - [Returns organization wireless experience metrics overview grouped by network.](#returns-organization-wireless-experience-metrics-overview-grouped-by-network-1)
    + [switch](#switch-1)
      - [Create a port profile in an organization](#create-a-port-profile-in-an-organization-1)
      - [Get detailed information about a port profile](#get-detailed-information-about-a-port-profile-1)
      - [Update a port profile in an organization](#update-a-port-profile-in-an-organization-1)
    + [wireless](#wireless-1)
      - [List the wireless device telemetry of an organization](#list-the-wireless-device-telemetry-of-an-organization-1)
  * [\[ switch \]](#-switch--1)
    + [ports](#ports-1)
      - [List the port profiles in a network](#list-the-port-profiles-in-a-network-1)
      - [Create a port profile in a network](#create-a-port-profile-in-a-network-1)
      - [Update a port profile in a network](#update-a-port-profile-in-a-network-1)
    + [settings](#settings-1)
      - [Returns the switch network settings](#returns-the-switch-network-settings-1)
      - [Update switch network settings](#update-switch-network-settings-1)
 
Version **v1.69.0-beta.0** _to_ **v1.69.0-beta.1**

* * *

**Summary of Changes**

**6 - New**

**14 - Updated**

**856 - Total Endpoints**

**582 - Total Paths**

* * *

* * *

Added
=====

\[ appliance \]
--------------

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-devices-redundancy/)

#### Update MX warm spare settings

Operation ID: `updateNetworkApplianceDevicesRedundancy`

PATH _`/networks/{networkId}/appliance/devices/redundancy`_

> \- Path added  
>   
> \- New endpoint
> 
> **PUT** `/networks/{networkId}/appliance/devices/redundancy`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-appliance-devices-redundancy-swap/)

#### Swap MX primary and warm spare appliances

Operation ID: `createNetworkApplianceDevicesRedundancySwap`

PATH _`/networks/{networkId}/appliance/devices/redundancy/swap`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/networks/{networkId}/appliance/devices/redundancy/swap`  
> 
> * * *

* * *

\[ devices \]
--------------

### liveTools

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-port-status/)

#### Enqueue a job to retrieve port status for a device

Operation ID: `createDeviceLiveToolsPortStatus`

PATH _`/devices/{serial}/liveTools/portStatus`_

> \- Path added  
>   
> \- New endpoint
> 
> **POST** `/devices/{serial}/liveTools/portStatus`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-port-status/)

#### Return a port status live tool job.

Operation ID: `getDeviceLiveToolsPortStatus`

PATH _`/devices/{serial}/liveTools/portStatus/{portStatusId}`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/devices/{serial}/liveTools/portStatus/{portStatusId}`  
> 
> * * *

* * *

\[ organizations \]
--------------

### appliance

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-devices-redundancy-by-network/)

#### Return MX warm spare settings

Operation ID: `getOrganizationApplianceDevicesRedundancyByNetwork`

PATH _`/organizations/{organizationId}/appliance/devices/redundancy/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/appliance/devices/redundancy/byNetwork`  
> 
> * * *

* * *

### wireless

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-sticky-events/)

#### Get sticky client events within the specified timespan.

Operation ID: `getOrganizationWirelessClientsStickyEvents`

PATH _`/organizations/{organizationId}/wireless/clients/stickyEvents`_

> \- Path added  
>   
> \- New endpoint
> 
> **GET** `/organizations/{organizationId}/wireless/clients/stickyEvents`  
> 
> * * *

* * *

Changed
=======

\[ appliance \]
------------

### contentFiltering

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-content-filtering-categories/)

#### List all available content filtering categories for an MX network

Operation ID: `getNetworkApplianceContentFilteringCategories`

GET _`/networks/{networkId}/appliance/contentFiltering/categories`_

> \- added the optional property 'categories' to the response with the '200' status

* * *

### umbrella

[Docs](https://developer.cisco.com/meraki/api-v1/remove-network-appliance-umbrella-policies/)

#### Remove one umbrella policy from your network.

Operation ID: `removeNetworkApplianceUmbrellaPolicies`

DELETE _`/networks/{networkId}/appliance/umbrella/policies/remove`_

> \- removed the success response with the status '200'

> \- added the success response with the status '204'

* * *

\[ organizations \]
------------

### assurance

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-alerts-overview-by-type/)

#### Return a Summary of Alerts grouped by type and severity

Operation ID: `getOrganizationAssuranceAlertsOverviewByType`

GET _`/organizations/{organizationId}/assurance/alerts/overview/byType`_

> \- added the new optional 'query' request parameter 'includeDeviceTags'

> \- added the new optional 'query' request parameter 'includeNetworks'

> \- added the required property 'items/items/categoryType' to the response with the '200' status

> \- added the required property 'items/items/deviceTags' to the response with the '200' status

> \- added the required property 'items/items/deviceTypes' to the response with the '200' status

> \- added the required property 'items/items/lastAlertedAt' to the response with the '200' status

> \- added the required property 'items/items/networkCount' to the response with the '200' status

> \- added the required property 'items/items/networks' to the response with the '200' status

> \- added the required property 'items/items/severity' to the response with the '200' status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-devices-statuses-overview/)

#### Returns counts of online, offline, and recovered devices by product type, along with offline intervals for impacted devices in the organization.

Operation ID: `getOrganizationAssuranceDevicesStatusesOverview`

GET _`/organizations/{organizationId}/assurance/devices/statuses/overview`_

> \- for the 'query' request parameter 'timespan', the max was increased from '604800.00' to '1209600.00'

> \- for the 'query' request parameter 'timespan', the min was decreased from '3600.00' to '900.00'

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-wireless-experience-metrics-overview-history-by-network/)

#### Returns organization wireless experience metrics overview grouped by network.

Operation ID: `getOrganizationAssuranceWirelessExperienceMetricsOverviewHistoryByNetwork`

GET _`/organizations/{organizationId}/assurance/wireless/experience/metrics/overview/history/byNetwork`_

> \- added the optional property 'items/items/wirelessCoverage' to the response with the '200' status

* * *

### switch

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-switch-ports-profile/)

#### Create a port profile in an organization

Operation ID: `createOrganizationSwitchPortsProfile`

POST _`/organizations/{organizationId}/switch/ports/profiles`_

> \- added the new optional request property 'authentication'

> \- added the optional property 'authentication' to the response with the '200' status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-profile/)

#### Get detailed information about a port profile

Operation ID: `getOrganizationSwitchPortsProfile`

GET _`/organizations/{organizationId}/switch/ports/profiles/{id}`_

> \- added the optional property 'authentication' to the response with the '200' status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-switch-ports-profile/)

#### Update a port profile in an organization

Operation ID: `updateOrganizationSwitchPortsProfile`

PUT _`/organizations/{organizationId}/switch/ports/profiles/{id}`_

> \- added the new optional request property 'authentication'

> \- added the optional property 'authentication' to the response with the '200' status

* * *

### wireless

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-telemetry/)

#### List the wireless device telemetry of an organization

Operation ID: `getOrganizationWirelessDevicesTelemetry`

GET _`/organizations/{organizationId}/wireless/devices/telemetry`_

> \- the endpoint scheme security 'oauth2' was added to the API

* * *

\[ switch \]
------------

### ports

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-ports-profiles/)

#### List the port profiles in a network

Operation ID: `getNetworkSwitchPortsProfiles`

GET _`/networks/{networkId}/switch/ports/profiles`_

> \- added the optional property '/items/authentication' to the response with the '200' status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-switch-ports-profile/)

#### Create a port profile in a network

Operation ID: `createNetworkSwitchPortsProfile`

POST _`/networks/{networkId}/switch/ports/profiles`_

> \- added the new optional request property 'authentication'

> \- added the optional property 'authentication' to the response with the '200' status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-ports-profile/)

#### Update a port profile in a network

Operation ID: `updateNetworkSwitchPortsProfile`

PUT _`/networks/{networkId}/switch/ports/profiles/{id}`_

> \- added the new optional request property 'authentication'

> \- added the optional property 'authentication' to the response with the '200' status

* * *

### settings

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-settings/)

#### Returns the switch network settings

Operation ID: `getNetworkSwitchSettings`

GET _`/networks/{networkId}/switch/settings`_

> \- added the optional property 'portChannelFallback' to the response with the '200' status

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-settings/)

#### Update switch network settings

Operation ID: `updateNetworkSwitchSettings`

PUT _`/networks/{networkId}/switch/settings`_

> \- added the new optional request property 'portChannelFallback'

> \- added the optional property 'portChannelFallback' to the response with the '200' status

* * *


---

## v1.69.0-beta.0


# API Changelog v1.68.1-beta.0 vs. 1.69.0-beta.0


## API Changes

### GET /devices/{serial}/camera/clip
-  endpoint added


### POST /devices/{serial}/liveTools/speedTest
-  added the new 'wan3' enum value to the request property 'interface'
-  added the new 'wan4' enum value to the request property 'interface'


### GET /devices/{serial}/lossAndLatencyHistory
-  added the new enum value 'wan4' to the 'query' request parameter 'uplink'


### GET /networks/{networkId}/wireless/electronicShelfLabel
-  added the optional property 'sepioo' to the response with the '200' status


### PUT /networks/{networkId}/wireless/electronicShelfLabel
-  added the optional property 'sepioo' to the response with the '200' status


### GET /networks/{networkId}/wireless/electronicShelfLabel/configuredDevices
-  added the optional property '/items/sepioo' to the response with the '200' status


### PUT /networks/{networkId}/wireless/ssids/{number}
-  added the new optional request property 'ssidAdminAccessible'


### POST /organizations/{organizationId}/alerts/profiles
-  added the new 'wan4' enum value to the request property 'alertCondition/interface'


### PUT /organizations/{organizationId}/alerts/profiles/{alertConfigId}
-  added the new 'wan4' enum value to the request property 'alertCondition/interface'


### GET /organizations/{organizationId}/assurance/alerts
-  added the new enum value 'experience_metrics' to the 'query' request parameter 'category'


### GET /organizations/{organizationId}/assurance/alerts/overview
-  added the new enum value 'experience_metrics' to the 'query' request parameter 'category'


### GET /organizations/{organizationId}/assurance/alerts/overview/byNetwork
-  added the new enum value 'experience_metrics' to the 'query' request parameter 'category'


### GET /organizations/{organizationId}/assurance/alerts/overview/byType
-  added the new enum value 'experience_metrics' to the 'query' request parameter 'category'


### GET /organizations/{organizationId}/assurance/alerts/overview/historical
-  added the new enum value 'experience_metrics' to the 'query' request parameter 'category'


### GET /organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byClient
- :warning: for the 'query' request parameter 'timespan', the min was set to '900.00'
- :warning: deleted the 'query' request parameter 'interval'
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byClientType
- :warning: for the 'query' request parameter 'timespan', the min was set to '900.00'
- :warning: deleted the 'query' request parameter 'interval'


### GET /organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/byDevice
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/capacity/byNetwork/bySsid
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/coverage/byNetwork/byClient
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/coverage/byNetwork/byDevice
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/coverage/byNetwork/bySsid
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/successfulConnects/byNetwork/byClient
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/successfulConnects/byNetwork/byDevice
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/successfulConnects/byNetwork/bySsid
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/timeToConnect/byNetwork/byClient
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/timeToConnect/byNetwork/byDevice
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/assurance/wireless/experience/timeToConnect/byNetwork/bySsid
-  added the optional property '/items/items/items/connections' to the response with the '200' status


### GET /organizations/{organizationId}/nac/dictionaries/{dictionaryId}/attributes
-  added the optional property '/items/sourceGroup' to the response with the '200' status


### GET /organizations/{organizationId}/nac/dictionaries/{dictionaryId}/attributes/{attributeName}/values
-  endpoint added


### POST /organizations/{organizationId}/switch/ports/profiles/assignments/batchAssign
-  endpoint added


### GET /organizations/{organizationId}/switch/ports/profiles/assignments/byPort
-  endpoint added


### GET /organizations/{organizationId}/switch/ports/profiles/assignments/bySwitch
-  endpoint added






 - [Added](#added)
  * [\[ wirelessController \]](#-wirelesscontroller-)
    + [regulatoryDomain](#regulatorydomain)
      - [Generate the regulatory domain package](#generate-the-regulatory-domain-package)
      - [Generate the regulatory domain package](#generate-the-regulatory-domain-package-1)
    + [connections](#connections)
      - [List of unassigned Catalyst access points and summary information](#list-of-unassigned-catalyst-access-points-and-summary-information)
      - [List of unassigned Catalyst access points and summary information](#list-of-unassigned-catalyst-access-points-and-summary-information-1)
  * [\[ support \]](#-support-)
    + [salesRepresentatives](#salesrepresentatives)
      - [Returns the organization's sales representatives](#returns-the-organizations-sales-representatives)
      - [Returns the organization's sales representatives](#returns-the-organizations-sales-representatives-1)
  * [\[ sm \]](#-sm-)
    + [bulkEnrollment](#bulkenrollment)
      - [Create a PccBulkEnrollmentToken](#create-a-pccbulkenrollmenttoken)
      - [Create a PccBulkEnrollmentToken](#create-a-pccbulkenrollmenttoken-1)
      - [Return a BulkEnrollmentToken](#return-a-bulkenrollmenttoken)
      - [Return a BulkEnrollmentToken](#return-a-bulkenrollmenttoken-1)
      - [Update a PccBulkEnrollmentToken](#update-a-pccbulkenrollmenttoken)
      - [Delete a PccBulkEnrollmentToken](#delete-a-pccbulkenrollmenttoken)
      - [List all BulkEnrollmentTokens for an organization.](#list-all-bulkenrollmenttokens-for-an-organization)
      - [List all BulkEnrollmentTokens for an organization.](#list-all-bulkenrollmenttokens-for-an-organization-1)
    + [apple](#apple)
      - [Enqueue a sync job for an ADE account](#enqueue-a-sync-job-for-an-ade-account)
      - [Enqueue a sync job for an ADE account](#enqueue-a-sync-job-for-an-ade-account-1)
      - [Retrieve the status of an ADE sync job](#retrieve-the-status-of-an-ade-sync-job)
      - [Retrieve the status of an ADE sync job](#retrieve-the-status-of-an-ade-sync-job-1)
  * [\[ secureConnect \]](#-secureconnect-)
    + [sites](#sites)
      - [List sites in this organization](#list-sites-in-this-organization)
      - [List sites in this organization](#list-sites-in-this-organization-1)
      - [Enroll sites in this organization to Secure Connect. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.](#enroll-sites-in-this-organization-to-secure-connect-for-an-organization-a-maximum-of-4000-sites-can-be-enrolled-if-they-are-in-spoke-mode-or-a-maximum-of-10-sites-can-be-enrolled-in-hub-mode)
      - [Detach given sites from Secure Connect](#detach-given-sites-from-secure-connect)
    + [remoteAccessLogsExports](#remoteaccesslogsexports)
      - [Provides a list of remote access logs exports for an Organization](#provides-a-list-of-remote-access-logs-exports-for-an-organization)
      - [Provides a list of remote access logs exports for an Organization](#provides-a-list-of-remote-access-logs-exports-for-an-organization-1)
      - [Creates a export for a provided timestamp interval.](#creates-a-export-for-a-provided-timestamp-interval)
      - [Redirects to the download link of the completed export.](#redirects-to-the-download-link-of-the-completed-export)
      - [Redirects to the download link of the completed export.](#redirects-to-the-download-link-of-the-completed-export-1)
      - [Return the details of a specific remote access logs export](#return-the-details-of-a-specific-remote-access-logs-export)
      - [Return the details of a specific remote access logs export](#return-the-details-of-a-specific-remote-access-logs-export-1)
    + [remoteAccessLog](#remoteaccesslog)
      - [List the latest 5000 events logged by remote access.](#list-the-latest-5000-events-logged-by-remote-access)
      - [List the latest 5000 events logged by remote access.](#list-the-latest-5000-events-logged-by-remote-access-1)
    + [regions](#regions)
      - [List deployed cloud hubs and regions in this organization](#list-deployed-cloud-hubs-and-regions-in-this-organization)
      - [List deployed cloud hubs and regions in this organization](#list-deployed-cloud-hubs-and-regions-in-this-organization-1)
    + [publicApplications](#publicapplications)
      - [Provides a list of public applications for an Organization.](#provides-a-list-of-public-applications-for-an-organization)
      - [Provides a list of public applications for an Organization.](#provides-a-list-of-public-applications-for-an-organization-1)
    + [privateResources](#privateresources)
      - [Provides a list of private resources for an organization.](#provides-a-list-of-private-resources-for-an-organization)
      - [Provides a list of private resources for an organization.](#provides-a-list-of-private-resources-for-an-organization-1)
      - [Adds a new private resource to the organization.](#adds-a-new-private-resource-to-the-organization)
      - [Updates a specific private resource.](#updates-a-specific-private-resource)
      - [Updates a specific private resource.](#updates-a-specific-private-resource-1)
      - [Deletes a specific private resource. If this is the last resource in a resource group you must remove it from that resource group before deleting.](#deletes-a-specific-private-resource-if-this-is-the-last-resource-in-a-resource-group-you-must-remove-it-from-that-resource-group-before-deleting)
    + [privateResourceGroups](#privateresourcegroups)
      - [Provides a list of the private resource groups in an organization.](#provides-a-list-of-the-private-resource-groups-in-an-organization)
      - [Provides a list of the private resource groups in an organization.](#provides-a-list-of-the-private-resource-groups-in-an-organization-1)
      - [Adds a new private resource group to an organization.](#adds-a-new-private-resource-group-to-an-organization)
      - [Updates a specific private resource group.](#updates-a-specific-private-resource-group)
      - [Updates a specific private resource group.](#updates-a-specific-private-resource-group-1)
      - [Deletes a specific private resource group.](#deletes-a-specific-private-resource-group)
    + [privateApplications](#privateapplications)
      - [Provides a list of private applications for an Organization.](#provides-a-list-of-private-applications-for-an-organization)
      - [Provides a list of private applications for an Organization.](#provides-a-list-of-private-applications-for-an-organization-1)
      - [Adds a new private application to the Organization. A maximum of 300 private applications are allowed for an organization.](#adds-a-new-private-application-to-the-organization-a-maximum-of-300-private-applications-are-allowed-for-an-organization)
      - [Updates a specific private application](#updates-a-specific-private-application)
      - [Return the details of a specific private application](#return-the-details-of-a-specific-private-application)
      - [Updates a specific private application. Updates can be made to Name, Description, Destinations, App Protocol, SNI and SSL verification. Application groups can be added or removed.](#updates-a-specific-private-application-updates-can-be-made-to-name-description-destinations-app-protocol-sni-and-ssl-verification-application-groups-can-be-added-or-removed)
      - [Deletes a specific private application. Delink the application from any application groups before deleting the app. Cascade delete application group if this is the only application in the group.](#deletes-a-specific-private-application-delink-the-application-from-any-application-groups-before-deleting-the-app-cascade-delete-application-group-if-this-is-the-only-application-in-the-group)
    + [privateApplicationGroups](#privateapplicationgroups)
      - [Provides a list of private application groups for an Organization](#provides-a-list-of-private-application-groups-for-an-organization)
      - [Provides a list of private application groups for an Organization](#provides-a-list-of-private-application-groups-for-an-organization-1)
      - [Creates a group of private applications to apply to policy. A maximum of 300 private application groups are allowed for an organization.](#creates-a-group-of-private-applications-to-apply-to-policy-a-maximum-of-300-private-application-groups-are-allowed-for-an-organization)
      - [Update an application group in an Organization](#update-an-application-group-in-an-organization)
      - [Return the details of a specific private application group](#return-the-details-of-a-specific-private-application-group)
      - [Update an application group in an Organization. Updates are allowed on Group Name and Group Description. Applications can be added or removed. Group type and Policy cannot be changed.](#update-an-application-group-in-an-organization-updates-are-allowed-on-group-name-and-group-description-applications-can-be-added-or-removed-group-type-and-policy-cannot-be-changed)
      - [Deletes private application group from an Organization. Detaches application from groups before deleting](#deletes-private-application-group-from-an-organization-detaches-application-from-groups-before-deleting)
  * [\[ nac \]](#-nac-)
    + [sessions](#sessions)
      - [List the NAC Sessions for this organization](#list-the-nac-sessions-for-this-organization)
      - [List the NAC Sessions for this organization](#list-the-nac-sessions-for-this-organization-1)
      - [Return the details of selected NAC Sessions](#return-the-details-of-selected-nac-sessions)
      - [Return the details of selected NAC Sessions](#return-the-details-of-selected-nac-sessions-1)
    + [license](#license)
      - [Returns license usage data for a specific organization](#returns-license-usage-data-for-a-specific-organization)
      - [Returns license usage data for a specific organization](#returns-license-usage-data-for-a-specific-organization-1)
    + [dictionaries](#dictionaries)
      - [Get all NAC dictionaries](#get-all-nac-dictionaries)
      - [Get all NAC dictionaries](#get-all-nac-dictionaries-1)
      - [Get all attributes by dictionary ID](#get-all-attributes-by-dictionary-id)
      - [Get all attributes by dictionary ID](#get-all-attributes-by-dictionary-id-1)
    + [authorization](#authorization)
      - [Get all nac authorization policies for this organization](#get-all-nac-authorization-policies-for-this-organization)
      - [Get all nac authorization policies for this organization](#get-all-nac-authorization-policies-for-this-organization-1)
      - [Create a rule in an authorization policy set of an organization](#create-a-rule-in-an-authorization-policy-set-of-an-organization)
      - [Create a rule in an authorization policy set of an organization](#create-a-rule-in-an-authorization-policy-set-of-an-organization-1)
      - [Update an existing rule of an authorization policy set within an organization](#update-an-existing-rule-of-an-authorization-policy-set-within-an-organization)
      - [Update an existing rule of an authorization policy set within an organization](#update-an-existing-rule-of-an-authorization-policy-set-within-an-organization-1)
      - [Delete a rule in an authorization policy set of an organization](#delete-a-rule-in-an-authorization-policy-set-of-an-organization)
    + [certificates](#certificates)
      - [Gets all certificates for an organization and can filter by certificate status, expiry date and last used date](#gets-all-certificates-for-an-organization-and-can-filter-by-certificate-status-expiry-date-and-last-used-date)
      - [Gets all certificates for an organization and can filter by certificate status, expiry date and last used date](#gets-all-certificates-for-an-organization-and-can-filter-by-certificate-status-expiry-date-and-last-used-date-1)
      - [Get all the organization's CRL.It's possible to filter results by CRL issuers (CA) or CRL's ID - see caIds and crlIds query parameters.This endpoint could be used for 'show' action when you specify a single CRL ID in crlIds parameter](#get-all-the-organizations-crlits-possible-to-filter-results-by-crl-issuers-ca-or-crls-id---see-caids-and-crlids-query-parametersthis-endpoint-could-be-used-for-show-action-when-you-specify-a-single-crl-id-in-crlids-parameter)
      - [Get all the organization's CRL.It's possible to filter results by CRL issuers (CA) or CRL's ID - see caIds and crlIds query parameters.This endpoint could be used for 'show' action when you specify a single CRL ID in crlIds parameter](#get-all-the-organizations-crlits-possible-to-filter-results-by-crl-issuers-ca-or-crls-id---see-caids-and-crlids-query-parametersthis-endpoint-could-be-used-for-show-action-when-you-specify-a-single-crl-id-in-crlids-parameter-1)
      - [Create a new CRL (either base or delta) for an existing CA](#create-a-new-crl-either-base-or-delta-for-an-existing-ca)
      - [Get all the organization's CRL descriptors (metadata only - revocation list data is excluded)](#get-all-the-organizations-crl-descriptors-metadata-only---revocation-list-data-is-excluded)
      - [Get all the organization's CRL descriptors (metadata only - revocation list data is excluded). It's possible to filter results by CRL issuers (CA) - see caIds query parameter](#get-all-the-organizations-crl-descriptors-metadata-only---revocation-list-data-is-excluded-its-possible-to-filter-results-by-crl-issuers-ca---see-caids-query-parameter)
      - [Deletes a whole CRL, including all its deltas (in case of base CRL removal)](#deletes-a-whole-crl-including-all-its-deltas-in-case-of-base-crl-removal)
      - [Deletes a whole CRL, including all its deltas (in case of base CRL removal)](#deletes-a-whole-crl-including-all-its-deltas-in-case-of-base-crl-removal-1)
      - [Import certificate for this organization or validate without persisting](#import-certificate-for-this-organization-or-validate-without-persisting)
      - [Import certificate for this organization or validate without persisting](#import-certificate-for-this-organization-or-validate-without-persisting-1)
      - [Get counts of Enabled, Disabled, Expired and Last Used certificates for this organization](#get-counts-of-enabled-disabled-expired-and-last-used-certificates-for-this-organization)
      - [Get counts of Enabled, Disabled, Expired and Last Used certificates for this organization](#get-counts-of-enabled-disabled-expired-and-last-used-certificates-for-this-organization-1)
      - [Update certificate configuration by certificateId for this organization](#update-certificate-configuration-by-certificateid-for-this-organization)
      - [Update certificate configuration by certificateId for this organization](#update-certificate-configuration-by-certificateid-for-this-organization-1)
  * [\[ users \]](#-users-)
    + [iam](#iam)
      - [List specific authorizations for the list of Meraki end users.](#list-specific-authorizations-for-the-list-of-meraki-end-users)
      - [List specific authorizations for the list of Meraki end users.](#list-specific-authorizations-for-the-list-of-meraki-end-users-1)
      - [Authorize a Meraki end user for an auth zone.](#authorize-a-meraki-end-user-for-an-auth-zone)
      - [Update a Meraki end user's access to an auth zone.](#update-a-meraki-end-users-access-to-an-auth-zone)
      - [Revoke a Meraki end user's access to an auth zone.](#revoke-a-meraki-end-users-access-to-an-auth-zone)
      - [Revoke a Meraki end user's access to an auth zone.](#revoke-a-meraki-end-users-access-to-an-auth-zone-1)
      - [List all of the available auth zones for an organization.](#list-all-of-the-available-auth-zones-for-an-organization)
      - [List all of the available auth zones for an organization.](#list-all-of-the-available-auth-zones-for-an-organization-1)
      - [Delete an authorization for a Meraki end user.](#delete-an-authorization-for-a-meraki-end-user)
      - [Delete an authorization for a Meraki end user.](#delete-an-authorization-for-a-meraki-end-user-1)
      - [Create an identity provider for an organization](#create-an-identity-provider-for-an-organization)
      - [Create an identity provider for an organization. Only Entra ID(Azure AD) is supported at this time.](#create-an-identity-provider-for-an-organization-only-entra-idazure-ad-is-supported-at-this-time)
      - [Search all IdP groups for an organization](#search-all-idp-groups-for-an-organization)
      - [Search all IdP groups for an organization. Filter by IdP IDs and Auth Zone. Parameters are assembled as an AND query.](#search-all-idp-groups-for-an-organization-filter-by-idp-ids-and-auth-zone-parameters-are-assembled-as-an-and-query)
      - [List all available IdP Product Integration urls for the organization](#list-all-available-idp-product-integration-urls-for-the-organization)
      - [List all available IdP Product Integration urls for the organization](#list-all-available-idp-product-integration-urls-for-the-organization-1)
      - [Search all IdPs for an organization](#search-all-idps-for-an-organization)
      - [Search all IdPs for an organization. Filter by IdP ID, IdP type, and Auth Zone. Parameters are assembled as an AND query.](#search-all-idps-for-an-organization-filter-by-idp-id-idp-type-and-auth-zone-parameters-are-assembled-as-an-and-query)
      - [Get the IdP sync status records for an organization](#get-the-idp-sync-status-records-for-an-organization)
      - [Get the IdP sync status records for an organization. Only Entra ID(Azure AD) is supported at this time.](#get-the-idp-sync-status-records-for-an-organization-only-entra-idazure-ad-is-supported-at-this-time)
      - [Get the latest IdP sync status records for all IdPs in an organization](#get-the-latest-idp-sync-status-records-for-all-idps-in-an-organization)
      - [Get the latest IdP sync status records for all IdPs in an organization. Only Entra ID(Azure AD) is supported at this time.](#get-the-latest-idp-sync-status-records-for-all-idps-in-an-organization-only-entra-idazure-ad-is-supported-at-this-time)
      - [Test connectivity to an Entra ID identity provider.](#test-connectivity-to-an-entra-id-identity-provider)
      - [Test connectivity to an Entra ID identity provider.](#test-connectivity-to-an-entra-id-identity-provider-1)
      - [Create a Meraki user](#create-a-meraki-user)
      - [Create a Meraki user](#create-a-meraki-user-1)
      - [Update a Meraki user](#update-a-meraki-user)
      - [Update a Meraki user](#update-a-meraki-user-1)
      - [Delete a Meraki end user](#delete-a-meraki-end-user)
      - [Trigger an IdP sync for an identity provider](#trigger-an-idp-sync-for-an-identity-provider)
      - [Trigger an IdP sync for an identity provider. Only Entra ID(Azure AD) is supported at this time.](#trigger-an-idp-sync-for-an-identity-provider-only-entra-idazure-ad-is-supported-at-this-time)
      - [Get the latest IdP sync status for an identity provider](#get-the-latest-idp-sync-status-for-an-identity-provider)
      - [Get the latest IdP sync status for an identity provider. Only Entra ID(Azure AD) is supported at this time.](#get-the-latest-idp-sync-status-for-an-identity-provider-only-entra-idazure-ad-is-supported-at-this-time)
      - [Update an identity provider](#update-an-identity-provider)
      - [Update an identity provider. Only Entra ID(Azure AD) is supported at this time.](#update-an-identity-provider-only-entra-idazure-ad-is-supported-at-this-time)
      - [Delete a identity provider from an organization. Only Entra ID(Azure AD) is supported at this time.](#delete-a-identity-provider-from-an-organization-only-entra-idazure-ad-is-supported-at-this-time)
      - [List all auth zones for an identity provider](#list-all-auth-zones-for-an-identity-provider)
      - [List all auth zones for an identity provider](#list-all-auth-zones-for-an-identity-provider-1)
      - [List the end users and their associated identity providers for an organization.](#list-the-end-users-and-their-associated-identity-providers-for-an-organization)
      - [List the end users and their associated identity providers for an organization.](#list-the-end-users-and-their-associated-identity-providers-for-an-organization-1)
      - [Get the count of users and user groups for an organization.](#get-the-count-of-users-and-user-groups-for-an-organization)
      - [Get the count of users and user groups for an organization.](#get-the-count-of-users-and-user-groups-for-an-organization-1)
  * [\[ camera \]](#-camera-)
    + [videoWalls](#videowalls)
      - [Create a new video wall.](#create-a-new-video-wall)
      - [Create a new video wall.](#create-a-new-video-wall-1)
      - [Update the specified video wall.](#update-the-specified-video-wall)
      - [Update the specified video wall.](#update-the-specified-video-wall-1)
      - [Delete the specified video wall.](#delete-the-specified-video-wall)
      - [Return a list of video walls.](#return-a-list-of-video-walls)
      - [Return a list of video walls.](#return-a-list-of-video-walls-1)
      - [Return the specified video wall.](#return-the-specified-video-wall)
      - [Return the specified video wall.](#return-the-specified-video-wall-1)
      - [Returns video wall link to the specified video wall id](#returns-video-wall-link-to-the-specified-video-wall-id)
      - [Returns video wall link to the specified video wall id. If a timestamp is supplied, it links to that timestamp.](#returns-video-wall-link-to-the-specified-video-wall-id-if-a-timestamp-is-supplied-it-links-to-that-timestamp)
    + [devices](#devices)
      - [Lists all the capabilities of cameras in this organization](#lists-all-the-capabilities-of-cameras-in-this-organization)
      - [Lists all the capabilities of cameras in this organization](#lists-all-the-capabilities-of-cameras-in-this-organization-1)
  * [\[ devices \]](#-devices-)
    + [vrrpTable](#vrrptable)
      - [Enqueue a job to perform a VRRP table request for the device](#enqueue-a-job-to-perform-a-vrrp-table-request-for-the-device)
      - [Enqueue a job to perform a VRRP table request for the device. This endpoint currently supports Catalyst switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-vrrp-table-request-for-the-device-this-endpoint-currently-supports-catalyst-switches-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return an VRRP table live tool job.](#return-an-vrrp-table-live-tool-job)
      - [Return an VRRP table live tool job.](#return-an-vrrp-table-live-tool-job-1)
    + [traceRoute](#traceroute)
      - [Enqueue a job to run trace route in the device](#enqueue-a-job-to-run-trace-route-in-the-device)
      - [Enqueue a job to run trace route in the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-run-trace-route-in-the-device-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return a trace route job](#return-a-trace-route-job)
      - [Return a trace route job](#return-a-trace-route-job-1)
    + [speedTest](#speedtest)
      - [Enqueue a job to execute a speed test from a device](#enqueue-a-job-to-execute-a-speed-test-from-a-device)
      - [Enqueue a job to execute a speed test from a device](#enqueue-a-job-to-execute-a-speed-test-from-a-device-1)
      - [Returns a speed test result in megabits per second](#returns-a-speed-test-result-in-megabits-per-second)
      - [Returns a speed test result in megabits per second. If test is not complete, no results are present.](#returns-a-speed-test-result-in-megabits-per-second-if-test-is-not-complete-no-results-are-present)
    + [routingTable](#routingtable)
      - [Enqueue a job to perform a routing table request for the device](#enqueue-a-job-to-perform-a-routing-table-request-for-the-device)
      - [Enqueue a job to perform a routing table request for the device. Only native Catalyst switches are supported. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-routing-table-request-for-the-device-only-native-catalyst-switches-are-supported-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Enqueue a job to perform a routing table lookup request for the device](#enqueue-a-job-to-perform-a-routing-table-lookup-request-for-the-device)
      - [Enqueue a job to perform a routing table lookup request for the device. Only Cisco routers are supported. Any combination of search filters can be applied.](#enqueue-a-job-to-perform-a-routing-table-lookup-request-for-the-device-only-cisco-routers-are-supported-any-combination-of-search-filters-can-be-applied)
      - [Return a routing table live tool lookup job.](#return-a-routing-table-live-tool-lookup-job)
      - [Return a routing table live tool lookup job.](#return-a-routing-table-live-tool-lookup-job-1)
      - [Enqueue a job to perform a routing table summary request for the device](#enqueue-a-job-to-perform-a-routing-table-summary-request-for-the-device)
      - [Enqueue a job to perform a routing table summary request for the device. Only Cisco routers are supported.](#enqueue-a-job-to-perform-a-routing-table-summary-request-for-the-device-only-cisco-routers-are-supported)
      - [Return a routing table live tool summary job.](#return-a-routing-table-live-tool-summary-job)
      - [Return a routing table live tool summary job.](#return-a-routing-table-live-tool-summary-job-1)
      - [Return an routing table live tool job.](#return-an-routing-table-live-tool-job)
      - [Return an routing table live tool job.](#return-an-routing-table-live-tool-job-1)
    + [reboot](#reboot)
      - [Enqueue a job to reboot a device](#enqueue-a-job-to-reboot-a-device)
      - [Enqueue a job to reboot a device. This endpoint has a rate limit of one request every 60 seconds.](#enqueue-a-job-to-reboot-a-device-this-endpoint-has-a-rate-limit-of-one-request-every-60-seconds)
      - [Return a reboot job](#return-a-reboot-job)
      - [Return a reboot job](#return-a-reboot-job-1)
    + [ospfNeighbors](#ospfneighbors)
      - [Enqueue a job to perform a OSPF neighbors request for the device](#enqueue-a-job-to-perform-a-ospf-neighbors-request-for-the-device)
      - [Enqueue a job to perform a OSPF neighbors request for the device. This endpoint currently supports switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-ospf-neighbors-request-for-the-device-this-endpoint-currently-supports-switches-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return an OSPF neighbors live tool job.](#return-an-ospf-neighbors-live-tool-job)
      - [Return an OSPF neighbors live tool job.](#return-an-ospf-neighbors-live-tool-job-1)
    + [dhcpLeases](#dhcpleases)
      - [Enqueue a job to perform a DHCP leases request for the device](#enqueue-a-job-to-perform-a-dhcp-leases-request-for-the-device)
      - [Enqueue a job to perform a DHCP leases request for the device. This endpoint currently supports all MS devices. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-dhcp-leases-request-for-the-device-this-endpoint-currently-supports-all-ms-devices-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return a DHCP leases live tool job.](#return-a-dhcp-leases-live-tool-job)
      - [Return a DHCP leases live tool job.](#return-a-dhcp-leases-live-tool-job-1)
    + [cyclePort](#cycleport)
      - [Enqueue a job to perform a cycle port for the device on the specified ports](#enqueue-a-job-to-perform-a-cycle-port-for-the-device-on-the-specified-ports)
      - [Enqueue a job to perform a cycle port for the device on the specified ports. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-cycle-port-for-the-device-on-the-specified-ports-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return a cycle port live tool job.](#return-a-cycle-port-live-tool-job)
      - [Return a cycle port live tool job.](#return-a-cycle-port-live-tool-job-1)
    + [aclHitCount](#aclhitcount)
      - [Enqueue a job to perform an ACL hit count for the device](#enqueue-a-job-to-perform-an-acl-hit-count-for-the-device)
      - [Enqueue a job to perform an ACL hit count for the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-an-acl-hit-count-for-the-device-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return an ACL hit count live tool job.](#return-an-acl-hit-count-live-tool-job)
      - [Return an ACL hit count live tool job.](#return-an-acl-hit-count-live-tool-job-1)
    + [clients](#clients)
      - [Return a client disconnect job.](#return-a-client-disconnect-job)
      - [Return a client disconnect job.](#return-a-client-disconnect-job-1)
  * [\[ administered \]](#-administered-)
    + [search](#search)
      - [List the appropriate results for a given global search utilizing live\_search\_react](#list-the-appropriate-results-for-a-given-global-search-utilizing-live_search_react)
      - [List the appropriate results for a given global search utilizing live\_search\_react](#list-the-appropriate-results-for-a-given-global-search-utilizing-live_search_react-1)
  * [\[ licensing \]](#-licensing-)
    + [subscription](#subscription)
      - [Batch change networks to their desired feature tier for specified product types](#batch-change-networks-to-their-desired-feature-tier-for-specified-product-types)
      - [Batch change networks to their desired feature tier for specified product types](#batch-change-networks-to-their-desired-feature-tier-for-specified-product-types-1)
  * [\[ insight \]](#-insight-)
    + [webApps](#webapps)
      - [Lists all default web applications rules with counter set rule ids](#lists-all-default-web-applications-rules-with-counter-set-rule-ids)
      - [Lists all default web applications rules with counter set rule ids](#lists-all-default-web-applications-rules-with-counter-set-rule-ids-1)
      - [Add a custom web application for Insight to be able to track](#add-a-custom-web-application-for-insight-to-be-able-to-track)
      - [Update a custom web application for Insight to be able to track](#update-a-custom-web-application-for-insight-to-be-able-to-track)
      - [Update a custom web application for Insight to be able to track](#update-a-custom-web-application-for-insight-to-be-able-to-track-1)
      - [Delete a custom web application by counter set rule id.](#delete-a-custom-web-application-by-counter-set-rule-id)
    + [speedTestResults](#speedtestresults)
      - [List the speed tests for the given devices under this organization](#list-the-speed-tests-for-the-given-devices-under-this-organization)
      - [List the speed tests for the given devices under this organization. Only valid for organizations with Meraki Insight.](#list-the-speed-tests-for-the-given-devices-under-this-organization-only-valid-for-organizations-with-meraki-insight)
    + [applications](#applications)
      - [Update an Insight tracked application](#update-an-insight-tracked-application)
      - [Update an Insight tracked application](#update-an-insight-tracked-application-1)
      - [Delete an Insight tracked application](#delete-an-insight-tracked-application)
  * [\[ organizations \]](#-organizations-)
    + [webhooks](#webhooks)
      - [List the HTTP servers for this organization](#list-the-http-servers-for-this-organization)
      - [List the HTTP servers for this organization](#list-the-http-servers-for-this-organization-1)
      - [Add an HTTP server to an organization](#add-an-http-server-to-an-organization)
      - [Return an HTTP server for an organization](#return-an-http-server-for-an-organization)
      - [Return an HTTP server for an organization](#return-an-http-server-for-an-organization-1)
      - [Update an HTTP server for an organization](#update-an-http-server-for-an-organization)
      - [Delete an HTTP server from an organization](#delete-an-http-server-from-an-organization)
      - [List the webhook payload templates for an organization](#list-the-webhook-payload-templates-for-an-organization)
      - [List the webhook payload templates for an organization](#list-the-webhook-payload-templates-for-an-organization-1)
      - [Create a webhook payload template for an organization](#create-a-webhook-payload-template-for-an-organization)
      - [Get the webhook payload template for an organization](#get-the-webhook-payload-template-for-an-organization)
      - [Get the webhook payload template for an organization](#get-the-webhook-payload-template-for-an-organization-1)
      - [Update a webhook payload template for an organization](#update-a-webhook-payload-template-for-an-organization)
      - [Destroy a webhook payload template for an organization. Does not work for included templates ('wpt\_00001', 'wpt\_00002', 'wpt\_00003', 'wpt\_00004', 'wpt\_00005', 'wpt\_00006', 'wpt\_00007' or 'wpt\_00008')](#destroy-a-webhook-payload-template-for-an-organization-does-not-work-for-included-templates-wpt_00001-wpt_00002-wpt_00003-wpt_00004-wpt_00005-wpt_00006-wpt_00007-or-wpt_00008)
      - [Send a test webhook for an organization](#send-a-test-webhook-for-an-organization)
      - [Send a test webhook for an organization](#send-a-test-webhook-for-an-organization-1)
      - [Return the status of a webhook test for an organization](#return-the-status-of-a-webhook-test-for-an-organization)
      - [Return the status of a webhook test for an organization](#return-the-status-of-a-webhook-test-for-an-organization-1)
    + [sase](#sase)
      - [Retrieves a batch summary with aggregated job status counts](#retrieves-a-batch-summary-with-aggregated-job-status-counts)
      - [Retrieves a batch summary with aggregated job status counts](#retrieves-a-batch-summary-with-aggregated-job-status-counts-1)
      - [List jobs within a batch, with optional status filtering](#list-jobs-within-a-batch-with-optional-status-filtering)
      - [List jobs within a batch, with optional status filtering](#list-jobs-within-a-batch-with-optional-status-filtering-1)
      - [Create a new Secure Access integration](#create-a-new-secure-access-integration)
      - [Create a new Secure Access integration](#create-a-new-secure-access-integration-1)
      - [Get details of a Secure Access integration](#get-details-of-a-secure-access-integration)
      - [Get details of a Secure Access integration](#get-details-of-a-secure-access-integration-1)
      - [Remove a Secure Access integration](#remove-a-secure-access-integration)
      - [List regions](#list-regions)
      - [List regions](#list-regions-1)
      - [List of enrolled SASE sites in this organization](#list-of-enrolled-sase-sites-in-this-organization)
      - [List of enrolled SASE sites in this organization](#list-of-enrolled-sase-sites-in-this-organization-1)
      - [List high-level SASE site statuses (healthy, degraded, offline)](#list-high-level-sase-site-statuses-healthy-degraded-offline)
      - [List high-level SASE site statuses (healthy, degraded, offline)](#list-high-level-sase-site-statuses-healthy-degraded-offline-1)
      - [Get the connectivity history of SASE sites in this organization](#get-the-connectivity-history-of-sase-sites-in-this-organization)
      - [Get the connectivity history of SASE sites in this organization](#get-the-connectivity-history-of-sase-sites-in-this-organization-1)
      - [Detach sites in this organization from Secure Access](#detach-sites-in-this-organization-from-secure-access)
      - [Detach sites in this organization from Secure Access. This will remove the sites from Secure Access.](#detach-sites-in-this-organization-from-secure-access-this-will-remove-the-sites-from-secure-access)
      - [Enroll sites in this organization to Secure Access](#enroll-sites-in-this-organization-to-secure-access)
      - [Enroll sites in this organization to Secure Access. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.](#enroll-sites-in-this-organization-to-secure-access-for-an-organization-a-maximum-of-4000-sites-can-be-enrolled-if-they-are-in-spoke-mode-or-a-maximum-of-10-sites-can-be-enrolled-in-hub-mode)
      - [Update the configuration for a site](#update-the-configuration-for-a-site)
      - [Update the configuration for a site. Currently, only supports updating default route enablement.](#update-the-configuration-for-a-site-currently-only-supports-updating-default-route-enablement)
    + [policies](#policies)
      - [List application categories with their associated applications](#list-application-categories-with-their-associated-applications)
      - [List application categories with their associated applications](#list-application-categories-with-their-associated-applications-1)
      - [List Organization-Wide Policy Firewall Rulesets](#list-organization-wide-policy-firewall-rulesets)
      - [List Organization-Wide Policy Firewall Rulesets](#list-organization-wide-policy-firewall-rulesets-1)
      - [Create an Organization-Wide Policy Firewall Ruleset](#create-an-organization-wide-policy-firewall-ruleset)
      - [Create an Organization-Wide Policy Firewall Rule](#create-an-organization-wide-policy-firewall-rule)
      - [List Organization-Wide Policy Firewall Rules](#list-organization-wide-policy-firewall-rules)
      - [Create an Organization-Wide Policy Firewall Rule](#create-an-organization-wide-policy-firewall-rule-1)
      - [Delete an Organization-Wide Policy Firewall Rule](#delete-an-organization-wide-policy-firewall-rule)
      - [Update an Organization-Wide Policy Firewall Rule](#update-an-organization-wide-policy-firewall-rule)
      - [Delete an Organization-Wide Policy Firewall Rule](#delete-an-organization-wide-policy-firewall-rule-1)
      - [Update an Organization-Wide Policy Firewall Ruleset](#update-an-organization-wide-policy-firewall-ruleset)
      - [Update an Organization-Wide Policy Firewall Ruleset](#update-an-organization-wide-policy-firewall-ruleset-1)
      - [Delete an Organization-Wide Policy Firewall Ruleset](#delete-an-organization-wide-policy-firewall-ruleset)
      - [List Organization-Wide Policies](#list-organization-wide-policies)
      - [List Organization-Wide Policies](#list-organization-wide-policies-1)
      - [Create an Organization-Wide Policy](#create-an-organization-wide-policy)
      - [Assign adaptive policy groups to a policy](#assign-adaptive-policy-groups-to-a-policy)
      - [Assign adaptive policy groups to a policy](#assign-adaptive-policy-groups-to-a-policy-1)
      - [List adaptive policy group assignments](#list-adaptive-policy-group-assignments)
      - [List adaptive policy group assignments](#list-adaptive-policy-group-assignments-1)
      - [Remove adaptive policy groups from a policy](#remove-adaptive-policy-groups-from-a-policy)
      - [Remove adaptive policy groups from a policy](#remove-adaptive-policy-groups-from-a-policy-1)
      - [List Organization-Wide Policy Ruleset Assignments](#list-organization-wide-policy-ruleset-assignments)
      - [List Organization-Wide Policy Ruleset Assignments](#list-organization-wide-policy-ruleset-assignments-1)
      - [Create an Organization-Wide Policy Ruleset Assignment](#create-an-organization-wide-policy-ruleset-assignment)
      - [Update an Organization-Wide Policy Ruleset Assignment](#update-an-organization-wide-policy-ruleset-assignment)
      - [Update an Organization-Wide Policy Ruleset Assignment](#update-an-organization-wide-policy-ruleset-assignment-1)
      - [Delete an Organization-Wide Policy Ruleset Assignment](#delete-an-organization-wide-policy-ruleset-assignment)
      - [Update an Organization-Wide Policy](#update-an-organization-wide-policy)
      - [Update an Organization-Wide Policy](#update-an-organization-wide-policy-1)
      - [Delete an Organization-Wide Policy](#delete-an-organization-wide-policy)
    + [extensions](#extensions)
      - [Update name and status of an Interconnect](#update-name-and-status-of-an-interconnect)
      - [Update name and status of an Interconnect](#update-name-and-status-of-an-interconnect-1)
      - [List the ThousandEyes agent configurations under this organization](#list-the-thousandeyes-agent-configurations-under-this-organization)
      - [List the ThousandEyes agent configurations under this organization. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#list-the-thousandeyes-agent-configurations-under-this-organization-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Add a ThousandEyes agent for this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#add-a-thousandeyes-agent-for-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [List all the networks eligible for ThousandEyes agent activation under this organization.](#list-all-the-networks-eligible-for-thousandeyes-agent-activation-under-this-organization)
      - [List all the networks eligible for ThousandEyes agent activation under this organization.](#list-all-the-networks-eligible-for-thousandeyes-agent-activation-under-this-organization-1)
      - [List the ThousandEyes agent configuration under this network](#list-the-thousandeyes-agent-configuration-under-this-network)
      - [List the ThousandEyes agent configuration under this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#list-the-thousandeyes-agent-configuration-under-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Update a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#update-a-thousandeyes-agent-from-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Delete a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#delete-a-thousandeyes-agent-from-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Create a ThousandEyes test based on a provided test template](#create-a-thousandeyes-test-based-on-a-provided-test-template)
      - [Create a ThousandEyes test based on a provided test template. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#create-a-thousandeyes-test-based-on-a-provided-test-template-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
    + [cloud](#cloud)
      - [List of source/destination traffic rules](#list-of-sourcedestination-traffic-rules)
      - [List of source/destination traffic rules](#list-of-sourcedestination-traffic-rules-1)
    + [certificates](#certificates-1)
      - [Gets all or specific certificates for an organization](#gets-all-or-specific-certificates-for-an-organization)
      - [Gets all or specific certificates for an organization](#gets-all-or-specific-certificates-for-an-organization-1)
      - [Import certificate for this organization](#import-certificate-for-this-organization)
      - [Import certificate for this organization](#import-certificate-for-this-organization-1)
      - [Download the public RADIUS certificate.](#download-the-public-radius-certificate)
      - [Download the public RADIUS certificate.](#download-the-public-radius-certificate-1)
      - [Delete a certificate for an organization](#delete-a-certificate-for-an-organization)
      - [Update a certificate's description for an organization](#update-a-certificates-description-for-an-organization)
      - [Delete a certificate for an organization](#delete-a-certificate-for-an-organization-1)
      - [Download the trusted certificate by certificate id.](#download-the-trusted-certificate-by-certificate-id)
      - [Download the trusted certificate by certificate id.](#download-the-trusted-certificate-by-certificate-id-1)
    + [auth](#auth)
      - [List the organization-wide RADIUS servers in the organization](#list-the-organization-wide-radius-servers-in-the-organization)
      - [List the organization-wide RADIUS servers in the organization](#list-the-organization-wide-radius-servers-in-the-organization-1)
      - [Add an organization-wide RADIUS server](#add-an-organization-wide-radius-server)
      - [Return list of network and policies that organization-wide RADIUS servers are bing used](#return-list-of-network-and-policies-that-organization-wide-radius-servers-are-bing-used)
      - [Return list of network and policies that organization-wide RADIUS servers are bing used](#return-list-of-network-and-policies-that-organization-wide-radius-servers-are-bing-used-1)
      - [Return an organization-wide RADIUS server](#return-an-organization-wide-radius-server)
      - [Return an organization-wide RADIUS server](#return-an-organization-wide-radius-server-1)
      - [Update an organization-wide RADIUS server](#update-an-organization-wide-radius-server)
      - [Delete an organization-wide RADIUS server from a organization](#delete-an-organization-wide-radius-server-from-a-organization)
    + [workflows](#workflows)
      - [Return workflows filtered by organization ID, network ID, type, and category](#return-workflows-filtered-by-organization-id-network-id-type-and-category)
      - [Return workflows filtered by organization ID, network ID, type, and category](#return-workflows-filtered-by-organization-id-network-id-type-and-category-1)
    + [thousandEyes](#thousandeyes)
      - [Get a list of Thousand Eyes applications with their alerts.](#get-a-list-of-thousand-eyes-applications-with-their-alerts)
      - [Get a list of Thousand Eyes applications with their alerts.](#get-a-list-of-thousand-eyes-applications-with-their-alerts-1)
    + [scores](#scores)
      - [Get network health scores for a list of networks.](#get-network-health-scores-for-a-list-of-networks)
      - [Get network health scores for a list of networks.](#get-network-health-scores-for-a-list-of-networks-1)
    + [productAnnouncements](#productannouncements)
      - [Gets relevant product announcements for a user](#gets-relevant-product-announcements-for-a-user)
      - [Gets relevant product announcements for a user](#gets-relevant-product-announcements-for-a-user-1)
    + [optimization](#optimization)
      - [Returns an array of checkup results for the organization](#returns-an-array-of-checkup-results-for-the-organization)
      - [Returns an array of checkup results for the organization](#returns-an-array-of-checkup-results-for-the-organization-1)
      - [Returns an array of checkup results for the networks](#returns-an-array-of-checkup-results-for-the-networks)
      - [Returns an array of checkup results for the networks](#returns-an-array-of-checkup-results-for-the-networks-1)
    + [fetchTableQuery](#fetchtablequery)
      - [Returns the table data for a given timespan](#returns-the-table-data-for-a-given-timespan)
      - [Returns the table data for a given timespan](#returns-the-table-data-for-a-given-timespan-1)
    + [apiRequests](#apirequests)
      - [Lists API request response codes and their counts aggregated by admin](#lists-api-request-response-codes-and-their-counts-aggregated-by-admin)
      - [Lists API request response codes and their counts aggregated by admin](#lists-api-request-response-codes-and-their-counts-aggregated-by-admin-1)
      - [Lists API request response codes and their counts aggregated by application](#lists-api-request-response-codes-and-their-counts-aggregated-by-application)
      - [Lists API request response codes and their counts aggregated by application](#lists-api-request-response-codes-and-their-counts-aggregated-by-application-1)
      - [Aggregates API usage data by operationId](#aggregates-api-usage-data-by-operationid)
      - [Aggregates API usage data by operationId](#aggregates-api-usage-data-by-operationid-1)
      - [Aggregates API usage by source ip](#aggregates-api-usage-by-source-ip)
      - [Aggregates API usage by source ip](#aggregates-api-usage-by-source-ip-1)
    + [snmp](#snmp)
      - [Retrieve the SNMP trap configuration for the networks in an organization](#retrieve-the-snmp-trap-configuration-for-the-networks-in-an-organization)
      - [Retrieve the SNMP trap configuration for the networks in an organization](#retrieve-the-snmp-trap-configuration-for-the-networks-in-an-organization-1)
    + [devices](#devices-1)
      - [Returns counts of online, offline, and recovered devices by product type, along with offline intervals for impacted devices in the organization.](#returns-counts-of-online-offline-and-recovered-devices-by-product-type-along-with-offline-intervals-for-impacted-devices-in-the-organization)
      - [Returns counts of online, offline, and recovered devices by product type, along with offline intervals for impacted devices in the organization.](#returns-counts-of-online-offline-and-recovered-devices-by-product-type-along-with-offline-intervals-for-impacted-devices-in-the-organization-1)
      - [Returns the history of device boots in reverse chronological order (most recent first)](#returns-the-history-of-device-boots-in-reverse-chronological-order-most-recent-first)
      - [Returns the history of device boots in reverse chronological order (most recent first). Currently supported for MS devices only.](#returns-the-history-of-device-boots-in-reverse-chronological-order-most-recent-first-currently-supported-for-ms-devices-only)
      - [Summarizes device reboots across an organization.](#summarizes-device-reboots-across-an-organization)
      - [Summarizes device reboots across an organization.](#summarizes-device-reboots-across-an-organization-1)
      - [Summarizes memory status across devices of a given network](#summarizes-memory-status-across-devices-of-a-given-network)
      - [Summarizes memory status across devices of a given network](#summarizes-memory-status-across-devices-of-a-given-network-1)
      - [List the Opportunistic Pcap settings of an organization by network](#list-the-opportunistic-pcap-settings-of-an-organization-by-network)
      - [List the Opportunistic Pcap settings of an organization by network](#list-the-opportunistic-pcap-settings-of-an-organization-by-network-1)
      - [Delete packet capture schedules](#delete-packet-capture-schedules)
      - [Delete packet capture schedules](#delete-packet-capture-schedules-1)
      - [Enqueues a task for a specific packet capture](#enqueues-a-task-for-a-specific-packet-capture)
      - [Enqueues a task for a specific packet capture. This endpoint has a sustained rate limit of one request every 60 seconds.](#enqueues-a-task-for-a-specific-packet-capture-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-60-seconds)
      - [Retrieves packet capture analysis result for a specific packet capture task.](#retrieves-packet-capture-analysis-result-for-a-specific-packet-capture-task)
      - [Retrieves packet capture analysis result for a specific packet capture task.](#retrieves-packet-capture-analysis-result-for-a-specific-packet-capture-task-1)
      - [Returns syslog servers configured for the networks within an organization.](#returns-syslog-servers-configured-for-the-networks-within-an-organization)
      - [Returns syslog servers configured for the networks within an organization.](#returns-syslog-servers-configured-for-the-networks-within-an-organization-1)
      - [Returns roles that can be assigned to a syslog server for a given network.](#returns-roles-that-can-be-assigned-to-a-syslog-server-for-a-given-network)
      - [Returns roles that can be assigned to a syslog server for a given network.](#returns-roles-that-can-be-assigned-to-a-syslog-server-for-a-given-network-1)
    + [clients](#clients-1)
      - [Given a client, get all alerts and events for a given timespan](#given-a-client-get-all-alerts-and-events-for-a-given-timespan)
      - [Given a client, get all alerts and events for a given timespan](#given-a-client-get-all-alerts-and-events-for-a-given-timespan-1)
      - [Given a client, category, and timespan, return events that have a close connection to each other.](#given-a-client-category-and-timespan-return-events-that-have-a-close-connection-to-each-other)
      - [Given a client, category, and timespan, return events that have a close connection to each other.](#given-a-client-category-and-timespan-return-events-that-have-a-close-connection-to-each-other-1)
      - [Given a client, return current topology](#given-a-client-return-current-topology)
      - [Given a client, return current topology](#given-a-client-return-current-topology-1)
    + [routing](#routing)
      - [List existing organization-wide VRFs (Virtual Routing and Forwarding).](#list-existing-organization-wide-vrfs-virtual-routing-and-forwarding)
      - [List existing organization-wide VRFs (Virtual Routing and Forwarding).](#list-existing-organization-wide-vrfs-virtual-routing-and-forwarding-1)
      - [Add an organization-wide VRF (Virtual Routing and Forwarding)](#add-an-organization-wide-vrf-virtual-routing-and-forwarding)
      - [Update an organization-wide VRF (Virtual Routing and Forwarding)](#update-an-organization-wide-vrf-virtual-routing-and-forwarding)
      - [Update an organization-wide VRF (Virtual Routing and Forwarding)](#update-an-organization-wide-vrf-virtual-routing-and-forwarding-1)
      - [Delete a VRF (Virtual Routing and Forwarding) from a organization](#delete-a-vrf-virtual-routing-and-forwarding-from-a-organization)
  * [\[ networks \]](#-networks-)
    + [snmp](#snmp-1)
      - [Update the SNMP trap configuration for the specified network](#update-the-snmp-trap-configuration-for-the-specified-network)
      - [Update the SNMP trap configuration for the specified network](#update-the-snmp-trap-configuration-for-the-specified-network-1)
    + [locationScanning](#locationscanning)
      - [Return scanning API settings](#return-scanning-api-settings)
      - [Return scanning API settings](#return-scanning-api-settings-1)
      - [Change scanning API settings](#change-scanning-api-settings)
      - [Return list of scanning API receivers](#return-list-of-scanning-api-receivers)
      - [Return list of scanning API receivers](#return-list-of-scanning-api-receivers-1)
      - [Set the list of scanning API receivers. Old receivers will be removed](#set-the-list-of-scanning-api-receivers-old-receivers-will-be-removed)
    + [devices](#devices-2)
      - [Updates the syslog servers configuration for a network.](#updates-the-syslog-servers-configuration-for-a-network)
      - [Updates the syslog servers configuration for a network.](#updates-the-syslog-servers-configuration-for-a-network-1)
  * [\[ wireless \]](#-wireless-)
    + [roaming](#roaming)
      - [Get all wireless clients' roam events within the specified timespan grouped by network and time interval.](#get-all-wireless-clients-roam-events-within-the-specified-timespan-grouped-by-network-and-time-interval)
      - [Get all wireless clients' roam events within the specified timespan grouped by network and time interval.](#get-all-wireless-clients-roam-events-within-the-specified-timespan-grouped-by-network-and-time-interval-1)
    + [alerts](#alerts)
      - [Gets all low power related alerts over a given network and returns information by device](#gets-all-low-power-related-alerts-over-a-given-network-and-returns-information-by-device)
      - [Gets all low power related alerts over a given network and returns information by device](#gets-all-low-power-related-alerts-over-a-given-network-and-returns-information-by-device-1)
    + [certificates](#certificates-2)
      - [Query for details on the organization's OpenRoaming Certificate Authority certificate (CAs).](#query-for-details-on-the-organizations-openroaming-certificate-authority-certificate-cas)
      - [Query for details on the organization's OpenRoaming Certificate Authority certificate (CAs).](#query-for-details-on-the-organizations-openroaming-certificate-authority-certificate-cas-1)
    + [connectivity](#connectivity)
      - [Show the by-device RF Health score overview information for the organization in the given interval](#show-the-by-device-rf-health-score-overview-information-for-the-organization-in-the-given-interval)
      - [Show the by-device RF Health score overview information for the organization in the given interval. This includes the RF Health score for each device, as well as some more basic device info](#show-the-by-device-rf-health-score-overview-information-for-the-organization-in-the-given-interval-this-includes-the-rf-health-score-for-each-device-as-well-as-some-more-basic-device-info)
    + [opportunisticPcap](#opportunisticpcap)
      - [Update the Opportunistic Pcap settings for a wireless network](#update-the-opportunistic-pcap-settings-for-a-wireless-network)
      - [Update the Opportunistic Pcap settings for a wireless network](#update-the-opportunistic-pcap-settings-for-a-wireless-network-1)
      - [Check the Opportunistic Pcap license status of an organization by network](#check-the-opportunistic-pcap-license-status-of-an-organization-by-network)
      - [Check the Opportunistic Pcap license status of an organization by network](#check-the-opportunistic-pcap-license-status-of-an-organization-by-network-1)
    + [radio](#radio)
      - [Return the position for a wireless device](#return-the-position-for-a-wireless-device)
      - [Return the position for a wireless device](#return-the-position-for-a-wireless-device-1)
      - [Update the position attributes for this device](#update-the-position-attributes-for-this-device)
      - [Return the AFC power limits for a wireless device](#return-the-afc-power-limits-for-a-wireless-device)
      - [Return the AFC power limits for a wireless device](#return-the-afc-power-limits-for-a-wireless-device-1)
      - [Return the radio overrides of a device](#return-the-radio-overrides-of-a-device)
      - [Return the radio overrides of a device](#return-the-radio-overrides-of-a-device-1)
      - [Update the radio overrides of a device](#update-the-radio-overrides-of-a-device)
      - [Show the status of this device's radios](#show-the-status-of-this-devices-radios)
      - [Show the status of this device's radios](#show-the-status-of-this-devices-radios-1)
      - [Update the AutoRF settings for a wireless network](#update-the-autorf-settings-for-a-wireless-network)
      - [Update the AutoRF settings for a wireless network](#update-the-autorf-settings-for-a-wireless-network-1)
      - [List the AFC power limits of an organization by device](#list-the-afc-power-limits-of-an-organization-by-device)
      - [List the AFC power limits of an organization by device](#list-the-afc-power-limits-of-an-organization-by-device-1)
      - [List the AFC power limits of an organization by device](#list-the-afc-power-limits-of-an-organization-by-device-2)
      - [List the AFC power limits of an organization by device](#list-the-afc-power-limits-of-an-organization-by-device-3)
      - [List the AutoRF settings of an organization by network](#list-the-autorf-settings-of-an-organization-by-network)
      - [List the AutoRF settings of an organization by network](#list-the-autorf-settings-of-an-organization-by-network-1)
      - [List the channel planning activities of an organization](#list-the-channel-planning-activities-of-an-organization)
      - [List the channel planning activities of an organization](#list-the-channel-planning-activities-of-an-organization-1)
      - [Return a list of radio overrides](#return-a-list-of-radio-overrides)
      - [Return a list of radio overrides](#return-a-list-of-radio-overrides-1)
      - [Show the by-device neighbor rssi information for the organization in the given interval](#show-the-by-device-neighbor-rssi-information-for-the-organization-in-the-given-interval)
      - [Show the by-device neighbor rssi information for the organization in the given interval. This includes some basic device and network data, the number of neighbors for each device (total and by band), and the rssi and information of each neighbor](#show-the-by-device-neighbor-rssi-information-for-the-organization-in-the-given-interval-this-includes-some-basic-device-and-network-data-the-number-of-neighbors-for-each-device-total-and-by-band-and-the-rssi-and-information-of-each-neighbor)
      - [Show the by-network RF Health score overview information for the organization in the given interval](#show-the-by-network-rf-health-score-overview-information-for-the-organization-in-the-given-interval)
      - [Show the by-network RF Health score overview information for the organization in the given interval. This includes RF Health score, high interference APs, number of APs and of clients](#show-the-by-network-rf-health-score-overview-information-for-the-organization-in-the-given-interval-this-includes-rf-health-score-high-interference-aps-number-of-aps-and-of-clients)
      - [Show the status of this organization's radios, categorized by network and device](#show-the-status-of-this-organizations-radios-categorized-by-network-and-device)
      - [Show the status of this organization's radios, categorized by network and device](#show-the-status-of-this-organizations-radios-categorized-by-network-and-device-1)
    + [healthScores](#healthscores)
      - [Fetch the health scores for a given AP on this network](#fetch-the-health-scores-for-a-given-ap-on-this-network)
      - [Fetch the health scores for a given AP on this network](#fetch-the-health-scores-for-a-given-ap-on-this-network-1)
    + [devices](#devices-3)
      - [Fetch the health scores of all APs on this network](#fetch-the-health-scores-of-all-aps-on-this-network)
      - [Fetch the health scores of all APs on this network](#fetch-the-health-scores-of-all-aps-on-this-network-1)
      - [List the most recent AP accelerometer status information for wireless devices that support it.](#list-the-most-recent-ap-accelerometer-status-information-for-wireless-devices-that-support-it)
      - [List the most recent AP accelerometer status information for wireless devices that support it.](#list-the-most-recent-ap-accelerometer-status-information-for-wireless-devices-that-support-it-1)
      - [Get average uplink and downlink datarates for all clients in the organization](#get-average-uplink-and-downlink-datarates-for-all-clients-in-the-organization)
      - [Get average uplink and downlink datarates for all clients in the organization](#get-average-uplink-and-downlink-datarates-for-all-clients-in-the-organization-1)
      - [Get latency summaries for all wireless devices in an organization.](#get-latency-summaries-for-all-wireless-devices-in-an-organization)
      - [Get latency summaries for all wireless devices in an organization.](#get-latency-summaries-for-all-wireless-devices-in-an-organization-1)
      - [Get latency summaries for all wireless devices in an organization.](#get-latency-summaries-for-all-wireless-devices-in-an-organization-2)
      - [Get latency summaries for all wireless devices in an organization.](#get-latency-summaries-for-all-wireless-devices-in-an-organization-3)
      - [Get per-network latency summaries for all wireless networks in an organization.](#get-per-network-latency-summaries-for-all-wireless-networks-in-an-organization)
      - [Get per-network latency summaries for all wireless networks in an organization.](#get-per-network-latency-summaries-for-all-wireless-networks-in-an-organization-1)
      - [Enqueue a job to disconnect a client from an AP](#enqueue-a-job-to-disconnect-a-client-from-an-ap)
      - [Enqueue a job to disconnect a client from an AP. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-disconnect-a-client-from-an-ap-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Returns deployment IDs for the given new node serial numbers](#returns-deployment-ids-for-the-given-new-node-serial-numbers)
      - [Returns deployment IDs for the given new node serial numbers](#returns-deployment-ids-for-the-given-new-node-serial-numbers-1)
      - [List the recommended device tags for zero touch deployments available for the organization](#list-the-recommended-device-tags-for-zero-touch-deployments-available-for-the-organization)
      - [List the recommended device tags for zero touch deployments available for the organization](#list-the-recommended-device-tags-for-zero-touch-deployments-available-for-the-organization-1)
      - [Get average signal quality for all clients in the organization](#get-average-signal-quality-for-all-clients-in-the-organization)
      - [Get average signal quality for all clients in the organization](#get-average-signal-quality-for-all-clients-in-the-organization-1)
      - [Get average signal quality for all devices in the organization](#get-average-signal-quality-for-all-devices-in-the-organization)
      - [Get average signal quality for all devices in the organization](#get-average-signal-quality-for-all-devices-in-the-organization-1)
      - [Get average signal quality for all networks in the organization](#get-average-signal-quality-for-all-networks-in-the-organization)
      - [Get average signal quality for all networks in the organization](#get-average-signal-quality-for-all-networks-in-the-organization-1)
      - [List the wireless device telemetry of an organization](#list-the-wireless-device-telemetry-of-an-organization)
      - [List the wireless device telemetry of an organization](#list-the-wireless-device-telemetry-of-an-organization-1)
    + [clients](#clients-2)
      - [Fetch the health scores for all clients on this network](#fetch-the-health-scores-for-all-clients-on-this-network)
      - [Fetch the health scores for all clients on this network](#fetch-the-health-scores-for-all-clients-on-this-network-1)
      - [Return counts of distinct wireless clients connecting to a network over time](#return-counts-of-distinct-wireless-clients-connecting-to-a-network-over-time)
      - [Return counts of distinct wireless clients connecting to a network over time](#return-counts-of-distinct-wireless-clients-connecting-to-a-network-over-time-1)
      - [Fetch the health scores for a given client on this network](#fetch-the-health-scores-for-a-given-client-on-this-network)
      - [Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID](#fetch-the-health-scores-for-a-given-client-on-this-network-clients-are-identified-by-their-mac-or-id)
      - [Get client roam events within the specified timespan.](#get-client-roam-events-within-the-specified-timespan)
      - [Get client roam events within the specified timespan.](#get-client-roam-events-within-the-specified-timespan-1)
      - [Summarize association outcomes per wireless client across an organization.](#summarize-association-outcomes-per-wireless-client-across-an-organization)
      - [Summarize association outcomes per wireless client across an organization.](#summarize-association-outcomes-per-wireless-client-across-an-organization-1)
      - [Summarize authentication outcomes per wireless client across an organization.](#summarize-authentication-outcomes-per-wireless-client-across-an-organization)
      - [Summarize authentication outcomes per wireless client across an organization.](#summarize-authentication-outcomes-per-wireless-client-across-an-organization-1)
      - [Get IP assignment for all clients in the organization](#get-ip-assignment-for-all-clients-in-the-organization)
      - [Get IP assignment for all clients in the organization](#get-ip-assignment-for-all-clients-in-the-organization-1)
      - [Returns failed wireless client connections for this organization by device](#returns-failed-wireless-client-connections-for-this-organization-by-device)
      - [Returns failed wireless client connections for this organization by device](#returns-failed-wireless-client-connections-for-this-organization-by-device-1)
      - [Show the by-network client information for the organization in the given interval](#show-the-by-network-client-information-for-the-organization-in-the-given-interval)
      - [Show the by-network client information for the organization in the given interval. This includes average SNR](#show-the-by-network-client-information-for-the-organization-in-the-given-interval-this-includes-average-snr)
    + [ssids](#ssids)
      - [Update the client exclusion status configuration for a given SSID](#update-the-client-exclusion-status-configuration-for-a-given-ssid)
      - [Update the client exclusion status configuration for a given SSID](#update-the-client-exclusion-status-configuration-for-a-given-ssid-1)
      - [Set the static client exclusion list for the given SSID](#set-the-static-client-exclusion-list-for-the-given-ssid)
      - [Set the static client exclusion list for the given SSID](#set-the-static-client-exclusion-list-for-the-given-ssid-1)
      - [Add a list of MAC addresses to the static client exclusion list for the given SSID](#add-a-list-of-mac-addresses-to-the-static-client-exclusion-list-for-the-given-ssid)
      - [Add a list of MAC addresses to the static client exclusion list for the given SSID](#add-a-list-of-mac-addresses-to-the-static-client-exclusion-list-for-the-given-ssid-1)
      - [Delete a list of MAC addresses from the static client exclusion list for the given SSID](#delete-a-list-of-mac-addresses-from-the-static-client-exclusion-list-for-the-given-ssid)
      - [Delete a list of MAC addresses from the static client exclusion list for the given SSID](#delete-a-list-of-mac-addresses-from-the-static-client-exclusion-list-for-the-given-ssid-1)
      - [Returns an array of objects, each containing client exclusion enablement statuses for one SSID](#returns-an-array-of-objects-each-containing-client-exclusion-enablement-statuses-for-one-ssid)
      - [Returns an array of objects, each containing client exclusion enablement statuses for one SSID](#returns-an-array-of-objects-each-containing-client-exclusion-enablement-statuses-for-one-ssid-1)
      - [Returns an array of objects, each containing a list of MAC's excluded from a given SSID](#returns-an-array-of-objects-each-containing-a-list-of-macs-excluded-from-a-given-ssid)
      - [Returns an array of objects, each containing a list of MAC's excluded from a given SSID](#returns-an-array-of-objects-each-containing-a-list-of-macs-excluded-from-a-given-ssid-1)
  * [\[ switch \]](#-switch-)
    + [alerts](#alerts-1)
      - [Gets all poe related alerts over a given network and returns information by device](#gets-all-poe-related-alerts-over-a-given-network-and-returns-information-by-device)
      - [Gets all poe related alerts over a given network and returns information by device](#gets-all-poe-related-alerts-over-a-given-network-and-returns-information-by-device-1)
    + [configTemplates](#configtemplates)
      - [list the port mirror configurations in an organization by switch profile](#list-the-port-mirror-configurations-in-an-organization-by-switch-profile)
      - [list the port mirror configurations in an organization by switch profile](#list-the-port-mirror-configurations-in-an-organization-by-switch-profile-1)
      - [Update a port mirror](#update-a-port-mirror)
      - [Update a port mirror](#update-a-port-mirror-1)
    + [connectivity](#connectivity-1)
      - [Lan link errors by device and port.](#lan-link-errors-by-device-and-port)
      - [Lan link errors by device and port.](#lan-link-errors-by-device-and-port-1)
      - [Lan STP errors by device and port.](#lan-stp-errors-by-device-and-port)
      - [Lan STP errors by device and port.](#lan-stp-errors-by-device-and-port-1)
      - [Gets all vrrp related alerts over a given network and returns information by device](#gets-all-vrrp-related-alerts-over-a-given-network-and-returns-information-by-device)
      - [Gets all vrrp related alerts over a given network and returns information by device](#gets-all-vrrp-related-alerts-over-a-given-network-and-returns-information-by-device-1)
    + [spanningTree](#spanningtree)
      - [Updates Spanning Tree configuration](#updates-spanning-tree-configuration)
      - [Updates Spanning Tree configuration](#updates-spanning-tree-configuration-1)
      - [Returns Spanning Tree configuration settings](#returns-spanning-tree-configuration-settings)
      - [Returns Spanning Tree configuration settings](#returns-spanning-tree-configuration-settings-1)
    + [raGuardPolicy](#raguardpolicy)
      - [Return RA Guard settings](#return-ra-guard-settings)
      - [Return RA Guard settings. Blocked servers are applied when default policy is allowed, and vice versa for allowed servers and blocked default policy.](#return-ra-guard-settings-blocked-servers-are-applied-when-default-policy-is-allowed-and-vice-versa-for-allowed-servers-and-blocked-default-policy)
      - [Update RA Guard settings](#update-ra-guard-settings)
    + [devices](#devices-4)
      - [Return a historical record of packet transmission and loss, broken down by protocol, for insight into switch device health.](#return-a-historical-record-of-packet-transmission-and-loss-broken-down-by-protocol-for-insight-into-switch-device-health)
      - [Return a historical record of packet transmission and loss, broken down by protocol, for insight into switch device health.](#return-a-historical-record-of-packet-transmission-and-loss-broken-down-by-protocol-for-insight-into-switch-device-health-1)
    + [clients](#clients-3)
      - [Summarizes authentication outcomes per switch client across an organization.](#summarizes-authentication-outcomes-per-switch-client-across-an-organization)
      - [Summarizes authentication outcomes per switch client across an organization.](#summarizes-authentication-outcomes-per-switch-client-across-an-organization-1)
      - [Get IP assignment for all clients in the organization](#get-ip-assignment-for-all-clients-in-the-organization-2)
      - [Get IP assignment for all clients in the organization](#get-ip-assignment-for-all-clients-in-the-organization-3)
      - [Switch port status by client.](#switch-port-status-by-client)
      - [Switch port status by client.](#switch-port-status-by-client-1)
    + [stacks](#stacks)
      - [Update switch port mirrors for switch stacks](#update-switch-port-mirrors-for-switch-stacks)
      - [Update switch port mirrors for switch stacks](#update-switch-port-mirrors-for-switch-stacks-1)
      - [List the port mirror configurations in an organization by switch](#list-the-port-mirror-configurations-in-an-organization-by-switch)
      - [List the port mirror configurations in an organization by switch](#list-the-port-mirror-configurations-in-an-organization-by-switch-1)
    + [routing](#routing-1)
      - [List the autonomous systems configured for BGP in the given organization](#list-the-autonomous-systems-configured-for-bgp-in-the-given-organization)
      - [List the autonomous systems configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-autonomous-systems-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create an autonomous system. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-an-autonomous-system-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the autonomous systems configured for BGP in the given organization](#list-the-overview-of-the-autonomous-systems-configured-for-bgp-in-the-given-organization)
      - [List the overview of the autonomous systems configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-overview-of-the-autonomous-systems-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Update an autonomous system](#update-an-autonomous-system)
      - [Update an autonomous system. Border Gateway Protocol requires IOS XE 17.18 or higher](#update-an-autonomous-system-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Delete an autonomous system from an organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#delete-an-autonomous-system-from-an-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the filter lists configured for BGP in the given organization](#list-the-filter-lists-configured-for-bgp-in-the-given-organization)
      - [List the filter lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-filter-lists-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create or update a filter list, in addition to its associated rules](#create-or-update-a-filter-list-in-addition-to-its-associated-rules)
      - [Create or update a filter list, in addition to its associated rules. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-or-update-a-filter-list-in-addition-to-its-associated-rules-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the filter lists configured for BGP in the given organization](#list-the-overview-of-the-filter-lists-configured-for-bgp-in-the-given-organization)
      - [List the overview of the filter lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-overview-of-the-filter-lists-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the filter list rules configured for BGP in the given organization](#list-the-filter-list-rules-configured-for-bgp-in-the-given-organization)
      - [List the filter list rules configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-filter-list-rules-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Delete a filter list](#delete-a-filter-list)
      - [Delete a filter list. Border Gateway Protocol requires IOS XE 17.18 or higher](#delete-a-filter-list-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the prefix lists configured for BGP in the given organization](#list-the-prefix-lists-configured-for-bgp-in-the-given-organization)
      - [List the prefix lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-prefix-lists-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create or update a prefix list, in addition to its associated rules](#create-or-update-a-prefix-list-in-addition-to-its-associated-rules)
      - [Create or update a prefix list, in addition to its associated rules. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-or-update-a-prefix-list-in-addition-to-its-associated-rules-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the prefix lists configured for BGP in the given organization](#list-the-overview-of-the-prefix-lists-configured-for-bgp-in-the-given-organization)
      - [List the overview of the prefix lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-overview-of-the-prefix-lists-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the prefix list rules configured for BGP in the given organization](#list-the-prefix-list-rules-configured-for-bgp-in-the-given-organization)
      - [List the prefix list rules configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-prefix-list-rules-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Delete a prefix list](#delete-a-prefix-list)
      - [Delete a prefix list. Border Gateway Protocol requires IOS XE 17.18 or higher](#delete-a-prefix-list-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the BGP peer groups configured in the given organization](#list-the-bgp-peer-groups-configured-in-the-given-organization)
      - [List the BGP peer groups configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-bgp-peer-groups-configured-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List all BGP deployment information for multiple peer groups or address families configured in the given organization, including profile information, peer group address family information, neighbors, and listen ranges](#list-all-bgp-deployment-information-for-multiple-peer-groups-or-address-families-configured-in-the-given-organization-including-profile-information-peer-group-address-family-information-neighbors-and-listen-ranges)
      - [List all BGP deployment information for multiple peer groups or address families configured in the given organization, including profile information, peer group address family information, neighbors, and listen ranges. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-all-bgp-deployment-information-for-multiple-peer-groups-or-address-families-configured-in-the-given-organization-including-profile-information-peer-group-address-family-information-neighbors-and-listen-ranges-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create or update a peer group, in addition to an associated peer group profile, peer group address family binding, peer group address family binding profile and routing policies associated with the peer group](#create-or-update-a-peer-group-in-addition-to-an-associated-peer-group-profile-peer-group-address-family-binding-peer-group-address-family-binding-profile-and-routing-policies-associated-with-the-peer-group)
      - [Create or update a peer group, in addition to an associated peer group profile, peer group address family binding, peer group address family binding profile and routing policies associated with the peer group. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-or-update-a-peer-group-in-addition-to-an-associated-peer-group-profile-peer-group-address-family-binding-peer-group-address-family-binding-profile-and-routing-policies-associated-with-the-peer-group-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List all BGP deployment information for peer groups configured in the given organization, including peer group address family information, as well as routing policies](#list-all-bgp-deployment-information-for-peer-groups-configured-in-the-given-organization-including-peer-group-address-family-information-as-well-as-routing-policies)
      - [List all BGP deployment information for peer groups configured in the given organization, including peer group address family information, as well as routing policies. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-all-bgp-deployment-information-for-peer-groups-configured-in-the-given-organization-including-peer-group-address-family-information-as-well-as-routing-policies-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the BGP peer groups configured in the given organization](#list-the-overview-of-the-bgp-peer-groups-configured-in-the-given-organization)
      - [List the overview of the BGP peer groups configured in the given organization](#list-the-overview-of-the-bgp-peer-groups-configured-in-the-given-organization-1)
      - [List the listen ranges configured for BGP in the given organization](#list-the-listen-ranges-configured-for-bgp-in-the-given-organization)
      - [List the listen ranges configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-listen-ranges-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the neighbors configured for BGP in the given organization](#list-the-neighbors-configured-for-bgp-in-the-given-organization)
      - [List the neighbors configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-neighbors-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create or update a neighor, in addition to an associated neighbor address family binding and routing policies associated with the neighbor](#create-or-update-a-neighor-in-addition-to-an-associated-neighbor-address-family-binding-and-routing-policies-associated-with-the-neighbor)
      - [Create or update a neighor, in addition to an associated neighbor address family binding and routing policies associated with the neighbor. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-or-update-a-neighor-in-addition-to-an-associated-neighbor-address-family-binding-and-routing-policies-associated-with-the-neighbor-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List all BGP deployment information for neighbors configured in the given organization, including address family information, as well as routing policies](#list-all-bgp-deployment-information-for-neighbors-configured-in-the-given-organization-including-address-family-information-as-well-as-routing-policies)
      - [List all BGP deployment information for neighbors configured in the given organization, including address family information, as well as routing policies. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-all-bgp-deployment-information-for-neighbors-configured-in-the-given-organization-including-address-family-information-as-well-as-routing-policies-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the routers configured in the given organization](#list-the-routers-configured-in-the-given-organization)
      - [List the routers configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-routers-configured-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create a BGP router, in addition to an associated address family, address family prefixes, and address family profile](#create-a-bgp-router-in-addition-to-an-associated-address-family-address-family-prefixes-and-address-family-profile)
      - [Create a BGP router, in addition to an associated address family, address family prefixes, and address family profile. This is helpful for the initial deployment of a BGP router.. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-a-bgp-router-in-addition-to-an-associated-address-family-address-family-prefixes-and-address-family-profile-this-is-helpful-for-the-initial-deployment-of-a-bgp-router-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List all BGP deployment information for routers configured in a given organization, including all address families](#list-all-bgp-deployment-information-for-routers-configured-in-a-given-organization-including-all-address-families)
      - [List all BGP deployment information for routers configured in a given organization, including all address families. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-all-bgp-deployment-information-for-routers-configured-in-a-given-organization-including-all-address-families-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the routers configured in the given organization](#list-the-overview-of-the-routers-configured-in-the-given-organization)
      - [List the overview of the routers configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-overview-of-the-routers-configured-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create and update listen ranges, update peers' enabled flag, and delete peer groups for a BGP router](#create-and-update-listen-ranges-update-peers-enabled-flag-and-delete-peer-groups-for-a-bgp-router)
      - [Create and update listen ranges, update peers' enabled flag, and delete peer groups for a BGP router. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-and-update-listen-ranges-update-peers-enabled-flag-and-delete-peer-groups-for-a-bgp-router-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Delete a router from an organization](#delete-a-router-from-an-organization)
      - [Delete a router from an organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#delete-a-router-from-an-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List layer 3 static routes for switches within an organization](#list-layer-3-static-routes-for-switches-within-an-organization)
      - [List layer 3 static routes for switches within an organization](#list-layer-3-static-routes-for-switches-within-an-organization-1)
    + [ports](#ports)
      - [Update a port mirror](#update-a-port-mirror-2)
      - [Update a port mirror](#update-a-port-mirror-3)
      - [List the port profiles in a network](#list-the-port-profiles-in-a-network)
      - [List the port profiles in a network](#list-the-port-profiles-in-a-network-1)
      - [Create a port profile in a network](#create-a-port-profile-in-a-network)
      - [Update a port profile in a network](#update-a-port-profile-in-a-network)
      - [Update a port profile in a network](#update-a-port-profile-in-a-network-1)
      - [Delete a port profile from a network](#delete-a-port-profile-from-a-network)
      - [list the port mirror configurations in an organization by switch](#list-the-port-mirror-configurations-in-an-organization-by-switch)
      - [list the port mirror configurations in an organization by switch](#list-the-port-mirror-configurations-in-an-organization-by-switch-1)
      - [List the port profiles in an organization](#list-the-port-profiles-in-an-organization)
      - [List the port profiles in an organization](#list-the-port-profiles-in-an-organization-1)
      - [Create a port profile in an organization](#create-a-port-profile-in-an-organization)
      - [list the automation port profiles in an organization](#list-the-automation-port-profiles-in-an-organization)
      - [list the automation port profiles in an organization](#list-the-automation-port-profiles-in-an-organization-1)
      - [Create a port profile automation for an organization](#create-a-port-profile-automation-for-an-organization)
      - [Update a port profile automation in an organization](#update-a-port-profile-automation-in-an-organization)
      - [Update a port profile automation in an organization](#update-a-port-profile-automation-in-an-organization-1)
      - [Delete an automation port profile from an organization](#delete-an-automation-port-profile-from-an-organization)
      - [Fetch all Network - Smart Port Profile associations for an organization](#fetch-all-network---smart-port-profile-associations-for-an-organization)
      - [Fetch all Network - Smart Port Profile associations for an organization](#fetch-all-network---smart-port-profile-associations-for-an-organization-1)
      - [Create Network and Smart Ports Profile association for a specific profile](#create-network-and-smart-ports-profile-association-for-a-specific-profile)
      - [Batch Create Network and Smart Ports Profile associations for a specific profile](#batch-create-network-and-smart-ports-profile-associations-for-a-specific-profile)
      - [Batch Create Network and Smart Ports Profile associations for a specific profile](#batch-create-network-and-smart-ports-profile-associations-for-a-specific-profile-1)
      - [Bulk delete Network and Smart Port Profile associations](#bulk-delete-network-and-smart-port-profile-associations)
      - [Bulk delete Network and Smart Port Profile associations](#bulk-delete-network-and-smart-port-profile-associations-1)
      - [Delete Network and Smart Port profile association for a specific profile](#delete-network-and-smart-port-profile-association-for-a-specific-profile)
      - [Delete Network and Smart Port profile association for a specific profile](#delete-network-and-smart-port-profile-association-for-a-specific-profile-1)
      - [List the port profiles in an organization](#list-the-port-profiles-in-an-organization-2)
      - [List the port profiles in an organization](#list-the-port-profiles-in-an-organization-3)
      - [Get detailed information about a port profile](#get-detailed-information-about-a-port-profile)
      - [Get detailed information about a port profile](#get-detailed-information-about-a-port-profile-1)
      - [Update a port profile in an organization](#update-a-port-profile-in-an-organization)
      - [Delete a port profile from an organization](#delete-a-port-profile-from-an-organization)
      - [Switch port packets by device and port.](#switch-port-packets-by-device-and-port)
      - [Switch port packets by device and port.](#switch-port-packets-by-device-and-port-1)
      - [Return time-series digital optical monitoring (DOM) readings for ports on each DOM-enabled switch in an organization, in addition to thresholds for each relevant Small Form Factor Pluggable (SFP) module.](#return-time-series-digital-optical-monitoring-dom-readings-for-ports-on-each-dom-enabled-switch-in-an-organization-in-addition-to-thresholds-for-each-relevant-small-form-factor-pluggable-sfp-module)
      - [Return time-series digital optical monitoring (DOM) readings for ports on each DOM-enabled switch in an organization, in addition to thresholds for each relevant Small Form Factor Pluggable (SFP) module.](#return-time-series-digital-optical-monitoring-dom-readings-for-ports-on-each-dom-enabled-switch-in-an-organization-in-addition-to-thresholds-for-each-relevant-small-form-factor-pluggable-sfp-module-1)
    + [service](#service)
      - [List switch templates running IOS XE Catalyst firmware.](#list-switch-templates-running-ios-xe-catalyst-firmware)
      - [List switch templates running IOS XE Catalyst firmware.](#list-switch-templates-running-ios-xe-catalyst-firmware-1)
      - [Clone existing switch templates into a destination template network.](#clone-existing-switch-templates-into-a-destination-template-network)
      - [Clone existing switch templates into a destination template network.](#clone-existing-switch-templates-into-a-destination-template-network-1)
  * [\[ sensor \]](#-sensor-)
    + [readings](#readings)
      - [Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order](#return-all-reported-readings-from-sensors-in-a-given-timespan-summarized-as-a-series-of-intervals-sorted-by-interval-start-time-in-descending-order)
      - [Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order](#return-all-reported-readings-from-sensors-in-a-given-timespan-summarized-as-a-series-of-intervals-sorted-by-interval-start-time-in-descending-order-1)
    + [alerts](#alerts-2)
      - [Return a list of sensor alert events](#return-a-list-of-sensor-alert-events)
      - [Return a list of sensor alert events](#return-a-list-of-sensor-alert-events-1)
    + [schedules](#schedules)
      - [Returns a list of all sensor schedules.](#returns-a-list-of-all-sensor-schedules)
      - [Returns a list of all sensor schedules.](#returns-a-list-of-all-sensor-schedules-1)
  * [\[ appliance \]](#-appliance-)
    + [policies](#policies-1)
      - [Assign VLANs to a policy](#assign-vlans-to-a-policy)
      - [Assign VLANs to a policy](#assign-vlans-to-a-policy-1)
      - [List appliance VLAN policy assignments](#list-appliance-vlan-policy-assignments)
      - [List appliance VLAN policy assignments](#list-appliance-vlan-policy-assignments-1)
      - [List policies by appliance VLANs](#list-policies-by-appliance-vlans)
      - [List policies by appliance VLANs](#list-policies-by-appliance-vlans-1)
      - [Remove VLANs from a policy](#remove-vlans-from-a-policy)
      - [Remove VLANs from a policy](#remove-vlans-from-a-policy-1)
    + [sdwan](#sdwan)
      - [Get the SDWAN internet traffic preferences for an MX network](#get-the-sdwan-internet-traffic-preferences-for-an-mx-network)
      - [Get the SDWAN internet traffic preferences for an MX network](#get-the-sdwan-internet-traffic-preferences-for-an-mx-network-1)
    + [umbrella](#umbrella)
      - [Disable umbrella protection for an MX network](#disable-umbrella-protection-for-an-mx-network)
      - [Disable umbrella protection for an MX network](#disable-umbrella-protection-for-an-mx-network-1)
      - [Enable umbrella protection for an MX network](#enable-umbrella-protection-for-an-mx-network)
      - [Enable umbrella protection for an MX network](#enable-umbrella-protection-for-an-mx-network-1)
      - [Specify one or more domain names to be excluded from being routed to Cisco Umbrella.](#specify-one-or-more-domain-names-to-be-excluded-from-being-routed-to-cisco-umbrella)
      - [Specify one or more domain names to be excluded from being routed to Cisco Umbrella.](#specify-one-or-more-domain-names-to-be-excluded-from-being-routed-to-cisco-umbrella-1)
      - [Update umbrella policies applied to MX network.](#update-umbrella-policies-applied-to-mx-network)
      - [Update umbrella policies applied to MX network.](#update-umbrella-policies-applied-to-mx-network-1)
      - [Enable or disable umbrella protection for an MX network](#enable-or-disable-umbrella-protection-for-an-mx-network)
      - [Enable or disable umbrella protection for an MX network. When disabling, the umbrella property will be omitted from the response.](#enable-or-disable-umbrella-protection-for-an-mx-network-when-disabling-the-umbrella-property-will-be-omitted-from-the-response)
    + [interfaces](#interfaces)
      - [Update configurations for an appliance's specified port](#update-configurations-for-an-appliances-specified-port)
      - [Update configurations for an appliance's specified port](#update-configurations-for-an-appliances-specified-port-1)
      - [Create wired L3 interface configuration](#create-wired-l3-interface-configuration)
      - [Create wired L3 interface configuration](#create-wired-l3-interface-configuration-1)
      - [Update wired L3 interface configuration](#update-wired-l3-interface-configuration)
      - [Update wired L3 interface configuration](#update-wired-l3-interface-configuration-1)
      - [Delete wired L3 interface configuration](#delete-wired-l3-interface-configuration)
    + [devices](#devices-5)
      - [Listing of L3 Interface Configurations across networks for the organization](#listing-of-l3-interface-configurations-across-networks-for-the-organization)
      - [Listing of L3 Interface Configurations across networks for the organization](#listing-of-l3-interface-configurations-across-networks-for-the-organization-1)
      - [Returns port configurations for appliances in a given organization](#returns-port-configurations-for-appliances-in-a-given-organization)
      - [Returns port configurations for appliances in a given organization](#returns-port-configurations-for-appliances-in-a-given-organization-1)
      - [Return the appliance utilization history for devices in the organization](#return-the-appliance-utilization-history-for-devices-in-the-organization)
      - [Return the appliance utilization history for devices in the organization. Only primary MX devices are supported.](#return-the-appliance-utilization-history-for-devices-in-the-organization-only-primary-mx-devices-are-supported)
    + [vpn](#vpn)
      - [Summarizes by-device vpn peers for the organization in the given interval.](#summarizes-by-device-vpn-peers-for-the-organization-in-the-given-interval)
      - [Summarizes by-device vpn peers for the organization in the given interval.](#summarizes-by-device-vpn-peers-for-the-organization-in-the-given-interval-1)
      - [Get authentication for all clients in organization](#get-authentication-for-all-clients-in-organization)
      - [Get authentication for all clients in organization](#get-authentication-for-all-clients-in-organization-1)
      - [Get IP assignment for all clients in the organization](#get-ip-assignment-for-all-clients-in-the-organization-4)
      - [Get IP assignment for all clients in the organization](#get-ip-assignment-for-all-clients-in-the-organization-5)
      - [Get tunnel creation events for all clients in the organization](#get-tunnel-creation-events-for-all-clients-in-the-organization)
      - [Get tunnel creation events for all clients in the organization](#get-tunnel-creation-events-for-all-clients-in-the-organization-1)
    + [vlans](#vlans)
      - [List the VLANs for an Organization](#list-the-vlans-for-an-organization)
      - [List the VLANs for an Organization](#list-the-vlans-for-an-organization-1)
    + [uplinks](#uplinks)
      - [Update uplink NAT settings of the specified network](#update-uplink-nat-settings-of-the-specified-network)
      - [Update uplink NAT settings of the specified network](#update-uplink-nat-settings-of-the-specified-network-1)
      - [Fetch uplink NAT settings of each network in the organization](#fetch-uplink-nat-settings-of-each-network-in-the-organization)
      - [Fetch uplink NAT settings of each network in the organization](#fetch-uplink-nat-settings-of-each-network-in-the-organization-1)
- [Changed](#changed)
  * [\[ insight \]](#-insight--1)
    + [applications](#applications-1)
      - [Add an Insight tracked application](#add-an-insight-tracked-application)
      - [Add an Insight tracked application](#add-an-insight-tracked-application-1)
  * [\[ organizations \]](#-organizations--1)
    + [summary](#summary)
      - [Return the top 10 appliances sorted by utilization over given time range.](#return-the-top-10-appliances-sorted-by-utilization-over-given-time-range)
      - [Return metrics for organization's top 10 clients by data usage (in mb) over given time range.](#return-metrics-for-organizations-top-10-clients-by-data-usage-in-mb-over-given-time-range)
      - [Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.](#return-metrics-for-organizations-top-clients-by-data-usage-in-mb-over-given-time-range-grouped-by-manufacturer)
      - [Return metrics for organization's top 10 devices sorted by data usage over given time range](#return-metrics-for-organizations-top-10-devices-sorted-by-data-usage-over-given-time-range)
      - [Return metrics for organization's top 10 device models sorted by data usage over given time range](#return-metrics-for-organizations-top-10-device-models-sorted-by-data-usage-over-given-time-range)
      - [List the client and status overview information for the networks in an organization](#list-the-client-and-status-overview-information-for-the-networks-in-an-organization)
      - [Return metrics for organization's top 10 ssids by data usage over given time range](#return-metrics-for-organizations-top-10-ssids-by-data-usage-over-given-time-range)
      - [Return metrics for organization's top 10 switches by energy usage over given time range](#return-metrics-for-organizations-top-10-switches-by-energy-usage-over-given-time-range)
    + [networks](#networks)
      - [Create a network](#create-a-network)
    + [devices](#devices-6)
      - [List the availability history information for devices in an organization.](#list-the-availability-history-information-for-devices-in-an-organization)
      - [List the status of every Meraki device in the organization](#list-the-status-of-every-meraki-device-in-the-organization)
    + [clients](#clients-4)
      - [Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.](#return-data-usage-in-megabits-per-second-over-time-for-all-clients-in-the-given-organization-within-a-given-time-range)
  * [\[ networks \]](#-networks--1)
    + [settings](#settings)
      - [Update the settings for a network](#update-the-settings-for-a-network)
    + [firmwareUpgrades](#firmwareupgrades)
      - [Rollback a Firmware Upgrade For A Network](#rollback-a-firmware-upgrade-for-a-network)
      - [Get firmware upgrade information for a network](#get-firmware-upgrade-information-for-a-network)
      - [Update firmware upgrade information for a network](#update-firmware-upgrade-information-for-a-network)
  * [\[ wireless \]](#-wireless--1)
    + [ssids](#ssids-1)
      - [Display the splash page settings for the given SSID](#display-the-splash-page-settings-for-the-given-ssid)
      - [Modify the splash page settings for the given SSID](#modify-the-splash-page-settings-for-the-given-ssid)
    + [rfProfiles](#rfprofiles)
      - [Creates new RF profile for this network](#creates-new-rf-profile-for-this-network)
      - [List RF profiles for this network](#list-rf-profiles-for-this-network)
      - [Return a RF profile](#return-a-rf-profile)
      - [Updates specified RF profile for this network](#updates-specified-rf-profile-for-this-network)
    + [settings](#settings-1)
      - [Return the wireless settings for a network](#return-the-wireless-settings-for-a-network)
      - [Update the wireless settings for a network](#update-the-wireless-settings-for-a-network)
    + [bluetooth](#bluetooth)
      - [Return the bluetooth settings for a wireless device](#return-the-bluetooth-settings-for-a-wireless-device)
      - [Return the Bluetooth settings for a network. Bluetooth settings must be enabled on the network.](#return-the-bluetooth-settings-for-a-network-bluetooth-settings-must-be-enabled-on-the-network)
      - [Update the bluetooth settings for a wireless device](#update-the-bluetooth-settings-for-a-wireless-device)
      - [Update the Bluetooth settings for a network](#update-the-bluetooth-settings-for-a-network)
  * [\[ switch \]](#-switch--1)
    + [stacks](#stacks-1)
      - [Create a layer 3 interface for a switch stack](#create-a-layer-3-interface-for-a-switch-stack)
      - [List layer 3 interfaces for a switch stack](#list-layer-3-interfaces-for-a-switch-stack)
      - [Return a layer 3 interface from a switch stack](#return-a-layer-3-interface-from-a-switch-stack)
      - [Update a layer 3 interface for a switch stack](#update-a-layer-3-interface-for-a-switch-stack)
    + [linkAggregations](#linkaggregations)
      - [List link aggregation groups](#list-link-aggregation-groups)
    + [routing](#routing-2)
      - [Create a layer 3 interface for a switch](#create-a-layer-3-interface-for-a-switch)
      - [Create a multicast rendezvous point](#create-a-multicast-rendezvous-point)
      - [List layer 3 interfaces for a switch](#list-layer-3-interfaces-for-a-switch)
      - [Return a layer 3 interface for a switch](#return-a-layer-3-interface-for-a-switch)
      - [List multicast rendezvous points](#list-multicast-rendezvous-points)
      - [Return a multicast rendezvous point](#return-a-multicast-rendezvous-point)
      - [Update a layer 3 interface for a switch](#update-a-layer-3-interface-for-a-switch)
      - [Update a multicast rendezvous point](#update-a-multicast-rendezvous-point)
    + [ports](#ports-1)
      - [List the switch ports for a switch](#list-the-switch-ports-for-a-switch)
      - [List the switchports in an organization by switch](#list-the-switchports-in-an-organization-by-switch)
  * [\[ sensor \]](#-sensor--1)
    + [commands](#commands)
      - [Sends a command to a sensor](#sends-a-command-to-a-sensor)
  * [\[ appliance \]](#-appliance--1)
    + [vpn](#vpn-1)
      - [Return a Hub BGP Configuration](#return-a-hub-bgp-configuration)
      - [Return the site-to-site VPN settings of a network](#return-the-site-to-site-vpn-settings-of-a-network)
      - [Update a Hub BGP Configuration](#update-a-hub-bgp-configuration)
      - [Update the site-to-site VPN settings of a network](#update-the-site-to-site-vpn-settings-of-a-network)
    + [vlans](#vlans-1)
      - [Add a VLAN](#add-a-vlan)
      - [Update a VLAN](#update-a-vlan)
    + [ports](#ports-2)
      - [List per-port VLAN settings for all ports of a secure router or security appliance.](#list-per-port-vlan-settings-for-all-ports-of-a-secure-router-or-security-appliance)
      - [Return per-port VLAN settings for a single secure router or security appliance port.](#return-per-port-vlan-settings-for-a-single-secure-router-or-security-appliance-port)
      - [Update the per-port VLAN settings for a single secure router or security appliance port.](#update-the-per-port-vlan-settings-for-a-single-secure-router-or-security-appliance-port)
    + [uplinks](#uplinks-1)
      - [Return the uplink settings for an MX appliance](#return-the-uplink-settings-for-an-mx-appliance)
      - [Update the uplink settings for an MX appliance](#update-the-uplink-settings-for-an-mx-appliance)
    + [trafficShaping](#trafficshaping)
      - [Display VPN exclusion rules for MX networks.](#display-vpn-exclusion-rules-for-mx-networks)
      - [Update VPN exclusion rules for an MX network.](#update-vpn-exclusion-rules-for-an-mx-network)
- [Changed](#changed-1)
  * [\[ appliance \]](#-appliance--2)
    + [trafficShaping](#trafficshaping-1)
      - [Display VPN exclusion rules for MX networks.](#display-vpn-exclusion-rules-for-mx-networks-1)
      - [Update VPN exclusion rules for an MX network.](#update-vpn-exclusion-rules-for-an-mx-network-1)
 
Version **1.68.0** _to_ **1.68.0-beta.0**

* * *

**Summary of Changes**

**301 - New**

**260 - Updated**

**1242 - Total Endpoints**

**902 - Total Paths**

* * *

* * *

Added
=====

\[ wirelessController \]
------------------------

### regulatoryDomain

[Docs](https://developer.cisco.com/meraki/api-v1/generate-organization-wireless-controller-regulatory-domain-package/)

#### Generate the regulatory domain package

Operation ID: `generateOrganizationWirelessControllerRegulatoryDomainPackage`

PATH _`/organizations/{organizationId}/wirelessController/regulatoryDomain/package/generate`_

    {
      "content": {
        "devices": [
          {
            "serial": "Q234-ABCD-5678",
            "mac": "00:11:22:33:44:55",
            "regulatoryDomain": {
              "country": "US",
              "method": "manual"
            }
          }
        ],
        "details": {
          "schemaVersion": "1.0.0",
          "organizationId": "2930418",
          "createdAt": "2018-05-12T00:00:00Z",
          "counts": {
            "devices": 1
          },
          "createdBy": {
            "id": "212406",
            "email": "miles@meraki.com"
          }
        }
      },
      "signature": "a1b2c3d4e5f6g7h8i9j0",
      "certificates": [
        {
          "purpose": "signature",
          "content": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tIE1JSUZZRENDQTBpZ0F3SUJBZ0lRQ2dGQ2dBQUFBVVVqeQ=="
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Generate the regulatory domain package
> 
> **POST** `/organizations/{organizationId}/wirelessController/regulatoryDomain/package/generate`  
> 
> * * *

* * *

### connections

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-controller-connections-unassigned/)

#### List of unassigned Catalyst access points and summary information

Operation ID: `getOrganizationWirelessControllerConnectionsUnassigned`

PATH _`/organizations/{organizationId}/wirelessController/connections/unassigned`_

    {
      "items": [
        {
          "id": "958271979973",
          "name": "MBY-CON-NCC_HLWY-24",
          "model": "AIR-AP1815I-B-K9",
          "serial": "",
          "mac": "8c:94:1f:97:54:01",
          "onboarding": {
            "isSupported": true,
            "status": "unregistered",
            "errors": [
              "DNS failure"
            ]
          },
          "tags": {
            "policy": "default-policy-tag",
            "site": "default-site-tag",
            "rf": "default-rf-tag"
          },
          "details": [
            {
              "name": "Catalyst serial",
              "value": "FCW2325N3RY"
            }
          ],
          "uplinks": [
            {
              "addresses": [
                {
                  "address": "10.104.55.4"
                }
              ]
            }
          ],
          "controller": {
            "serial": "A2CC-8TYV-VCO9"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List of unassigned Catalyst access points and summary information
> 
> **GET** `/organizations/{organizationId}/wirelessController/connections/unassigned`  
> 
> * * *

* * *

\[ support \]
-------------

### salesRepresentatives

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-support-sales-representatives/)

#### Returns the organization's sales representatives

Operation ID: `getOrganizationSupportSalesRepresentatives`

PATH _`/organizations/{organizationId}/support/salesRepresentatives`_

    [
      {
        "name": "Miles Meraki",
        "email": "miles@meraki.com",
        "phone": "+15555555555"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns the organization's sales representatives
> 
> **GET** `/organizations/{organizationId}/support/salesRepresentatives`  
> 
> * * *

* * *

\[ sm \]
--------

### bulkEnrollment

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-sm-bulk-enrollment-token/)

#### Create a PccBulkEnrollmentToken

Operation ID: `createOrganizationSmBulkEnrollmentToken`

PATH _`/organizations/{organizationId}/sm/bulkEnrollment/token`_

    {
      "id": "1284392014819",
      "networkId": "N_24329156",
      "expiresAt": "2023-10-15T00:00:00Z",
      "rawToken": "MMbCbpHZtG3TKUCr9B9uc5"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a PccBulkEnrollmentToken
> 
> **POST** `/organizations/{organizationId}/sm/bulkEnrollment/token`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sm-bulk-enrollment-token/)

#### Return a BulkEnrollmentToken

Operation ID: `getOrganizationSmBulkEnrollmentToken`

PATH _`/organizations/{organizationId}/sm/bulkEnrollment/token/{tokenId}`_

    {
      "id": "1284392014819",
      "networkId": "N_24329156",
      "expiresAt": "2023-10-15T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a BulkEnrollmentToken
> 
> **GET** `/organizations/{organizationId}/sm/bulkEnrollment/token/{tokenId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update a PccBulkEnrollmentToken
> 
> **PUT** `/organizations/{organizationId}/sm/bulkEnrollment/token/{tokenId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a PccBulkEnrollmentToken
> 
> **DELETE** `/organizations/{organizationId}/sm/bulkEnrollment/token/{tokenId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sm-bulk-enrollment-tokens/)

#### List all BulkEnrollmentTokens for an organization.

Operation ID: `getOrganizationSmBulkEnrollmentTokens`

PATH _`/organizations/{organizationId}/sm/bulkEnrollment/tokens`_

    [
      {
        "id": "1284392014819",
        "networkId": "N_24329156",
        "expiresAt": "2023-10-15T00:00:00Z"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BulkEnrollmentTokens for an organization.
> 
> **GET** `/organizations/{organizationId}/sm/bulkEnrollment/tokens`  
> 
> * * *

* * *

### apple

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-sm-apple-cloud-enrollment-sync-job/)

#### Enqueue a sync job for an ADE account

Operation ID: `createOrganizationSmAppleCloudEnrollmentSyncJob`

PATH _`/organizations/{organizationId}/sm/apple/cloudEnrollment/syncJobs`_

    {
      "syncJobId": "1284392014819",
      "adeAccountId": "1284392014819",
      "status": "pending"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a sync job for an ADE account
> 
> **POST** `/organizations/{organizationId}/sm/apple/cloudEnrollment/syncJobs`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sm-apple-cloud-enrollment-sync-job/)

#### Retrieve the status of an ADE sync job

Operation ID: `getOrganizationSmAppleCloudEnrollmentSyncJob`

PATH _`/organizations/{organizationId}/sm/apple/cloudEnrollment/syncJobs/{syncJobId}`_

    {
      "syncJobId": "1284392014819",
      "adeAccountId": "1284392014819",
      "status": "pending"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Retrieve the status of an ADE sync job
> 
> **GET** `/organizations/{organizationId}/sm/apple/cloudEnrollment/syncJobs/{syncJobId}`  
> 
> * * *

* * *

\[ secureConnect \]
-------------------

### sites

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-sites/)

#### List sites in this organization

Operation ID: `getOrganizationSecureConnectSites`

PATH _`/organizations/{organizationId}/secureConnect/sites`_

    {
      "data": [
        {
          "id": "123",
          "type": "MerakiSpoke",
          "name": "London Office",
          "region": "US East",
          "deviceType": "MX95-HW",
          "address": "123 Main St",
          "enrolled": true,
          "vpnType": "Hub",
          "defaultRoute": true
        }
      ],
      "meta": {
        "total": 1
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List sites in this organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/sites`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Enroll sites in this organization to Secure Connect. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.
> 
> **POST** `/organizations/{organizationId}/secureConnect/sites`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Detach given sites from Secure Connect
> 
> **DELETE** `/organizations/{organizationId}/secureConnect/sites`  
> 
> * * *

* * *

### remoteAccessLogsExports

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-remote-access-logs-exports/)

#### Provides a list of remote access logs exports for an Organization

Operation ID: `getOrganizationSecureConnectRemoteAccessLogsExports`

PATH _`/organizations/{organizationId}/secureConnect/remoteAccessLogsExports`_

    {
      "data": [
        {
          "id": "123",
          "from": "2023-05-16 04:23:43 UTC",
          "to": "2023-06-14 04:23:52 UTC",
          "userEmail": "joe@meraki.net",
          "status": "new",
          "metadata": {
            "fileCount": 0,
            "logCount": 0,
            "currentFileLogCount": 0,
            "generatorCount": 0,
            "limitReached": false,
            "startedAt": "2023-05-15 21:23:43.388597",
            "endedAt": "2023-05-15 21:23:43.388597",
            "duration": 60
          }
        }
      ],
      "meta": {
        "total": 1
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of remote access logs exports for an Organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/remoteAccessLogsExports`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Creates a export for a provided timestamp interval.
> 
> **POST** `/organizations/{organizationId}/secureConnect/remoteAccessLogsExports`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-remote-access-logs-exports-download/)

#### Redirects to the download link of the completed export.

Operation ID: `getOrganizationSecureConnectRemoteAccessLogsExportsDownload`

PATH _`/organizations/{organizationId}/secureConnect/remoteAccessLogsExports/download`_

    {
      "link": "download"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Redirects to the download link of the completed export.
> 
> **GET** `/organizations/{organizationId}/secureConnect/remoteAccessLogsExports/download`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-remote-access-logs-export/)

#### Return the details of a specific remote access logs export

Operation ID: `getOrganizationSecureConnectRemoteAccessLogsExport`

PATH _`/organizations/{organizationId}/secureConnect/remoteAccessLogsExports/{id}`_

    {
      "id": "123",
      "from": "2023-05-16 04:23:43 UTC",
      "to": "2023-06-14 04:23:52 UTC",
      "userEmail": "joe@meraki.net",
      "status": "new",
      "metadata": {
        "fileCount": 0,
        "logCount": 0,
        "currentFileLogCount": 0,
        "generatorCount": 0,
        "limitReached": false,
        "startedAt": "2023-05-15 21:23:43.388597",
        "endedAt": "2023-05-15 21:23:43.388597",
        "duration": 60
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the details of a specific remote access logs export
> 
> **GET** `/organizations/{organizationId}/secureConnect/remoteAccessLogsExports/{id}`  
> 
> * * *

* * *

### remoteAccessLog

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-remote-access-log/)

#### List the latest 5000 events logged by remote access.

Operation ID: `getOrganizationSecureConnectRemoteAccessLog`

PATH _`/organizations/{organizationId}/secureConnect/remoteAccessLog`_

    {
      "data": [
        {
          "osversion": "win-10.0.19044",
          "internalip": "10.0.1.5",
          "connecttimestamp": 1667252442,
          "identities": [
            {
              "id": "1173502975",
              "type": {
                "id": "7",
                "type": "directory_user",
                "label": "AD Users"
              },
              "label": "sample-remote-access@cisco.com",
              "deleted": false
            }
          ],
          "reason": "ACCT_DISC_USER_REQ",
          "failedreasons": [],
          "connectionevent": "disconnected",
          "anyconnectversion": "4.10.05095",
          "timestamp": 1667252458
        }
      ],
      "meta": {
        "total": 1
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the latest 5000 events logged by remote access.
> 
> **GET** `/organizations/{organizationId}/secureConnect/remoteAccessLog`  
> 
> * * *

* * *

### regions

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-regions/)

#### List deployed cloud hubs and regions in this organization

Operation ID: `getOrganizationSecureConnectRegions`

PATH _`/organizations/{organizationId}/secureConnect/regions`_

    {
      "data": [
        {
          "id": "123",
          "type": "Region",
          "name": "US West Coast",
          "dcPair": [
            "Los Angeles",
            "Palo Alto"
          ]
        }
      ],
      "meta": {
        "maxTotalCloudHubs": 5
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List deployed cloud hubs and regions in this organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/regions`  
> 
> * * *

* * *

### publicApplications

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-public-applications/)

#### Provides a list of public applications for an Organization.

Operation ID: `getOrganizationSecureConnectPublicApplications`

PATH _`/organizations/{organizationId}/secureConnect/publicApplications`_

    {
      "items": [
        {
          "id": "ABCDEFG",
          "name": "Snapcraft",
          "lastDetected": "2021-12-13T16:07:07.222Z",
          "risk": "medium",
          "category": "Application Development and Testing",
          "appType": "paas"
        }
      ],
      "meta": {
        "total": 1
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of public applications for an Organization.
> 
> **GET** `/organizations/{organizationId}/secureConnect/publicApplications`  
> 
> * * *

* * *

### privateResources

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-private-resources/)

#### Provides a list of private resources for an organization.

Operation ID: `getOrganizationSecureConnectPrivateResources`

PATH _`/organizations/{organizationId}/secureConnect/privateResources`_

    {
      "data": [
        {
          "resourceId": "5",
          "name": "Sample Resource Name",
          "description": "A sample description",
          "accessTypes": [
            {
              "type": "client",
              "reachableAddresses": [
                "192.0.0.0"
              ]
            }
          ],
          "resourceAddresses": [
            {
              "protocolPorts": [
                {
                  "protocol": "any",
                  "ports": "80"
                }
              ],
              "destinationAddr": [
                "192.0.0.0"
              ]
            }
          ],
          "resourceGroupIds": [
            "1122321"
          ],
          "dnsServerId": "12345",
          "certificateId": "54321",
          "organizationId": "106642",
          "createdAt": "2024-03-06T15:11:55.323445Z",
          "updatedAt": "2024-03-06T15:11:55.323445Z",
          "deletedAt": "2024-03-06T15:11:55.323445Z",
          "umbrellaResourceId": "123",
          "umbrellaResourceCreatedAt": "2024-03-06T15:11:55.323445Z",
          "umbrellaResourceUpdatedAt": "2024-03-06T15:11:55.323445Z",
          "umbrellaResourceDeletedAt": "2024-03-06T15:11:55.323445Z",
          "umbrellaResourceCreatedBy": "",
          "umbrellaResourceModifiedBy": "",
          "umbrellaResourceErrorMessage": "",
          "umbrellaApplicationId": "321",
          "umbrellaApplicationCreatedAt": "2024-03-06T15:11:55.323445Z",
          "umbrellaApplicationUpdatedAt": "2024-03-06T15:11:55.323445Z",
          "umbrellaApplicationDeletedAt": "2024-03-06T15:11:55.323445Z",
          "umbrellaApplicationErrorMessage": ""
        }
      ],
      "meta": {
        "total": 1
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of private resources for an organization.
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateResources`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Adds a new private resource to the organization.
> 
> **POST** `/organizations/{organizationId}/secureConnect/privateResources`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-secure-connect-private-resource/)

#### Updates a specific private resource.

Operation ID: `updateOrganizationSecureConnectPrivateResource`

PATH _`/organizations/{organizationId}/secureConnect/privateResources/{id}`_

    {
      "resourceId": "5",
      "name": "Sample Resource Name",
      "description": "A sample description",
      "accessTypes": [
        {
          "type": "client",
          "reachableAddresses": [
            "192.0.0.0"
          ]
        }
      ],
      "resourceAddresses": [
        {
          "protocolPorts": [
            {
              "protocol": "any",
              "ports": "80"
            }
          ],
          "destinationAddr": [
            "192.0.0.0"
          ]
        }
      ],
      "resourceGroupIds": [
        "1122321"
      ],
      "dnsServerId": "12345",
      "certificateId": "54321",
      "organizationId": "106642",
      "createdAt": "2024-03-06T15:11:55.323445Z",
      "updatedAt": "2024-03-06T15:11:55.323445Z",
      "deletedAt": "2024-03-06T15:11:55.323445Z",
      "umbrellaResourceId": "123",
      "umbrellaResourceCreatedAt": "2024-03-06T15:11:55.323445Z",
      "umbrellaResourceUpdatedAt": "2024-03-06T15:11:55.323445Z",
      "umbrellaResourceDeletedAt": "2024-03-06T15:11:55.323445Z",
      "umbrellaResourceCreatedBy": "",
      "umbrellaResourceModifiedBy": "",
      "umbrellaResourceErrorMessage": "",
      "umbrellaApplicationId": "321",
      "umbrellaApplicationCreatedAt": "2024-03-06T15:11:55.323445Z",
      "umbrellaApplicationUpdatedAt": "2024-03-06T15:11:55.323445Z",
      "umbrellaApplicationDeletedAt": "2024-03-06T15:11:55.323445Z",
      "umbrellaApplicationErrorMessage": ""
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Updates a specific private resource.
> 
> **PUT** `/organizations/{organizationId}/secureConnect/privateResources/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Deletes a specific private resource. If this is the last resource in a resource group you must remove it from that resource group before deleting.
> 
> **DELETE** `/organizations/{organizationId}/secureConnect/privateResources/{id}`  
> 
> * * *

* * *

### privateResourceGroups

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-private-resource-groups/)

#### Provides a list of the private resource groups in an organization.

Operation ID: `getOrganizationSecureConnectPrivateResourceGroups`

PATH _`/organizations/{organizationId}/secureConnect/privateResourceGroups`_

    {
      "data": [
        {
          "resourceGroupId": "123",
          "createdAt": "2024-03-06T15:11:55.323445Z",
          "updatedAt": "2024-03-06T15:11:55.323445Z",
          "name": "group 2",
          "description": "",
          "resourceIds": [
            "12345"
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of the private resource groups in an organization.
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateResourceGroups`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Adds a new private resource group to an organization.
> 
> **POST** `/organizations/{organizationId}/secureConnect/privateResourceGroups`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-secure-connect-private-resource-group/)

#### Updates a specific private resource group.

Operation ID: `updateOrganizationSecureConnectPrivateResourceGroup`

PATH _`/organizations/{organizationId}/secureConnect/privateResourceGroups/{id}`_

    {
      "data": [
        {
          "resourceGroupId": "123",
          "createdAt": "2024-03-06T15:11:55.323445Z",
          "updatedAt": "2024-03-06T15:11:55.323445Z",
          "name": "group 2",
          "description": "",
          "resourceIds": [
            "12345"
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Updates a specific private resource group.
> 
> **PUT** `/organizations/{organizationId}/secureConnect/privateResourceGroups/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Deletes a specific private resource group.
> 
> **DELETE** `/organizations/{organizationId}/secureConnect/privateResourceGroups/{id}`  
> 
> * * *

* * *

### privateApplications

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-private-applications/)

#### Provides a list of private applications for an Organization.

Operation ID: `getOrganizationSecureConnectPrivateApplications`

PATH _`/organizations/{organizationId}/secureConnect/privateApplications`_

    {
      "data": [
        {
          "applicationId": "183456",
          "name": "Jira",
          "description": "Jira App For My Org",
          "destinations": [
            {
              "destinationAddr": [
                "172.6.0.0/32",
                "255.100.100.0/24"
              ],
              "protocolPorts": [
                {
                  "protocol": "TCP",
                  "ports": "80-82"
                }
              ],
              "accessType": "network"
            }
          ],
          "appProtocol": "https",
          "sni": "xyz123.jira.com",
          "externalFQDN": "https://jira-5001.ztna.ciscoplus.com",
          "sslVerificationEnabled": true,
          "applicationGroupIds": [
            "1122321"
          ],
          "createdAt": "2021-12-13T16:07:07.222000Z",
          "modifiedAt": "2021-12-13T16:07:07.222000Z"
        }
      ],
      "meta": {
        "total": 1
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of private applications for an Organization.
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateApplications`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Adds a new private application to the Organization. A maximum of 300 private applications are allowed for an organization.
> 
> **POST** `/organizations/{organizationId}/secureConnect/privateApplications`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-secure-connect-private-application/)

#### Updates a specific private application

Operation ID: `updateOrganizationSecureConnectPrivateApplication`

PATH _`/organizations/{organizationId}/secureConnect/privateApplications/{id}`_

    {
      "applicationId": "183456",
      "name": "Jira",
      "description": "Jira App For My Org",
      "destinations": [
        {
          "destinationAddr": [
            "172.6.0.0/32",
            "255.100.100.0/24"
          ],
          "protocolPorts": [
            {
              "protocol": "TCP",
              "ports": "80-82"
            }
          ],
          "accessType": "network"
        }
      ],
      "appProtocol": "https",
      "sni": "xyz123.jira.com",
      "externalFQDN": "https://jira-5001.ztna.ciscoplus.com",
      "sslVerificationEnabled": true,
      "applicationGroupIds": [
        "1122321"
      ],
      "createdAt": "2021-12-13T16:07:07.222000Z",
      "modifiedAt": "2021-12-13T16:07:07.222000Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the details of a specific private application
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateApplications/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Updates a specific private application. Updates can be made to Name, Description, Destinations, App Protocol, SNI and SSL verification. Application groups can be added or removed.
> 
> **PUT** `/organizations/{organizationId}/secureConnect/privateApplications/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Deletes a specific private application. Delink the application from any application groups before deleting the app. Cascade delete application group if this is the only application in the group.
> 
> **DELETE** `/organizations/{organizationId}/secureConnect/privateApplications/{id}`  
> 
> * * *

* * *

### privateApplicationGroups

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-secure-connect-private-application-groups/)

#### Provides a list of private application groups for an Organization

Operation ID: `getOrganizationSecureConnectPrivateApplicationGroups`

PATH _`/organizations/{organizationId}/secureConnect/privateApplicationGroups`_

    {
      "data": [
        {
          "applicationGroupId": "1122321",
          "name": "Westcoast Data Center",
          "description": "Private applications in Westcoast Data Center",
          "applicationIds": [
            "183456",
            "123568"
          ],
          "createdAt": "2021-12-13T16:07:07.222Z",
          "modifiedAt": "2021-12-13T16:07:07.222Z"
        }
      ],
      "meta": {
        "total": 1
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of private application groups for an Organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateApplicationGroups`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Creates a group of private applications to apply to policy. A maximum of 300 private application groups are allowed for an organization.
> 
> **POST** `/organizations/{organizationId}/secureConnect/privateApplicationGroups`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-secure-connect-private-application-group/)

#### Update an application group in an Organization

Operation ID: `updateOrganizationSecureConnectPrivateApplicationGroup`

PATH _`/organizations/{organizationId}/secureConnect/privateApplicationGroups/{id}`_

    {
      "applicationGroupId": "1122321",
      "name": "Westcoast Data Center",
      "description": "Private applications in Westcoast Data Center",
      "applicationIds": [
        "183456",
        "123568"
      ],
      "createdAt": "2021-12-13T16:07:07.222Z",
      "modifiedAt": "2021-12-13T16:07:07.222Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the details of a specific private application group
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateApplicationGroups/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update an application group in an Organization. Updates are allowed on Group Name and Group Description. Applications can be added or removed. Group type and Policy cannot be changed.
> 
> **PUT** `/organizations/{organizationId}/secureConnect/privateApplicationGroups/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Deletes private application group from an Organization. Detaches application from groups before deleting
> 
> **DELETE** `/organizations/{organizationId}/secureConnect/privateApplicationGroups/{id}`  
> 
> * * *

* * *

\[ nac \]
---------

### sessions

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-sessions-history/)

#### List the NAC Sessions for this organization

Operation ID: `getOrganizationNacSessionsHistory`

PATH _`/organizations/{organizationId}/nac/sessions/history`_

    {
      "items": [
        {
          "sessionId": "0677ba3c-a867-461d-97c9-e5b60066f2b3",
          "counts": {
            "events": {
              "total": 5
            }
          },
          "ts": "2023-02-01T11:36:25.480Z",
          "status": "Success",
          "details": "A policy for whose first matched rule will return its assigned authz profile",
          "user": {
            "id": "stress"
          },
          "client": {
            "id": "00-14-11-12-12-12:mab2",
            "url": "/SJC-Test-Network/n/OSYcyb2h/manage/clients?timespan=2592000&searchQuery=00-14-11-12-12-12%3Amab2"
          },
          "authentication": {
            "protocol": "MAB"
          },
          "ssid": {
            "name": ""
          },
          "device": {
            "url": "/SJC-Test-Network/n/OSYcyb2h/manage/nodes/new_list/167231144861997/summary"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 4,
            "byResult": [
              {
                "result": "Authentication Failed",
                "total": 120
              }
            ]
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the NAC Sessions for this organization
> 
> **GET** `/organizations/{organizationId}/nac/sessions/history`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-session-details/)

#### Return the details of selected NAC Sessions

Operation ID: `getOrganizationNacSessionDetails`

PATH _`/organizations/{organizationId}/nac/sessions/{sessionId}/details`_

    {
      "sessionId": "e6b7d57b-1ddb-47f5-8d76-c06e10570297",
      "hasCompleteEvent": true,
      "ts": "2023-02-01T13:25:26.181Z",
      "status": "Success",
      "details": "",
      "counts": {
        "events": {
          "total": 5
        }
      },
      "user": {
        "id": "Device ID Username",
        "idp": "Active Directory",
        "groups": "ID group names"
      },
      "client": {
        "id": "2c:3f:0b:00:14:00",
        "addresses": [
          {
            "protocol": "ipv4",
            "address": "112.112.112.112"
          }
        ],
        "groups": "ID group names",
        "deviceProfiling": "Macbook Pro",
        "guid": "00-00-00-00-00-00",
        "url": "/SJC-Test-Network/n/OSYcyb2h/manage/clients?timespan=2592000&searchQuery=2c%3A3f%3A0b%3A00%3A14%3A00"
      },
      "authentication": {
        "latency": 500,
        "method": "EAP-TLS",
        "protocol": "EAP",
        "policy": "Active Directory",
        "endpointCertificate": {
          "title": "Endpoint Certificate Name",
          "issuer": "Issuer's Name",
          "isExpired": false,
          "status": "Trusted",
          "subjectName": {
            "commonName": "hosuk",
            "organizationalUnit": "Example Unit",
            "organization": "Company Name",
            "locality": "City",
            "state": "State",
            "country": "US"
          },
          "issuerName": {
            "commonName": "Certificate Services Endpoint Sub CA - ise",
            "serial": "58 BA BA 47 4F 4B 58 BA BA 47 4F 4B 74 72",
            "version": "3",
            "signatureAlgorithm": "XXX",
            "parameters": "None",
            "validity": {
              "start": "2023-01-01T13:25:26.181Z",
              "end": "2024-01-01T13:25:26.181Z"
            }
          },
          "publicKey": {
            "algorithm": "XXX",
            "parameters": "XXX",
            "body": "XXX",
            "exponent": "XXX",
            "size": "XXX",
            "usage": "XXX",
            "signature": "XXX"
          },
          "directoryName": {
            "commonName": "XXX",
            "serial": "XXX"
          },
          "fingerprints": {
            "sha256": "XXX",
            "sha1": "XXX"
          },
          "extensions": [
            {
              "oid": "2.5.28.15",
              "name": "Key Usage",
              "fields": [
                {
                  "name": "Critical",
                  "value": "Yes"
                }
              ]
            }
          ]
        }
      },
      "authorization": {
        "rule": "Rule Name",
        "profile": "List all the profiles here"
      },
      "network": {
        "name": "Name",
        "accessType": "Wired",
        "ssid": {
          "name": "SSID"
        },
        "port": {
          "name": "Port"
        },
        "tags": "tag names"
      },
      "device": {
        "name": "Device model name",
        "model": "Device model name",
        "addresses": [
          {
            "protocol": "ipv4",
            "address": "100.10.100.10"
          }
        ],
        "tags": "tag names",
        "url": "/SJC-Test-Network/n/OSYcyb2h/manage/nodes/new_list/167231144861997/summary"
      },
      "radius": {
        "attributes": {
          "incoming": [
            {
              "code": "1",
              "name": "Username",
              "value": "hosuk"
            }
          ],
          "outgoing": [
            {
              "code": "1",
              "name": "Username",
              "value": "hosuk"
            }
          ]
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the details of selected NAC Sessions
> 
> **GET** `/organizations/{organizationId}/nac/sessions/{sessionId}/details`  
> 
> * * *

* * *

### license

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-license-usage/)

#### Returns license usage data for a specific organization

Operation ID: `getOrganizationNacLicenseUsage`

PATH _`/organizations/{organizationId}/nac/license/usage`_

    {
      "organizationId": "1284392014819",
      "type": "CoTerm",
      "timeRange": {
        "startDate": "2025-05-13",
        "endDate": "2025-07-11"
      },
      "licenseLimit": 100,
      "usageData": [
        {
          "date": "2025-08-21",
          "peakConcurrentSessions": 100
        }
      ],
      "summary": {
        "daysInPeriod": 60,
        "highestPeakConcurrentSessions": 145,
        "p90PeakConcurrentSessions": 120.5,
        "p95PeakConcurrentSessions": 135.2
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns license usage data for a specific organization
> 
> **GET** `/organizations/{organizationId}/nac/license/usage`  
> 
> * * *

* * *

### dictionaries

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-dictionaries/)

#### Get all NAC dictionaries

Operation ID: `getOrganizationNacDictionaries`

PATH _`/organizations/{organizationId}/nac/dictionaries`_

    [
      {
        "dictionaryId": "1",
        "name": "Clients",
        "description": "Client dictionary",
        "category": "clients"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get all NAC dictionaries
> 
> **GET** `/organizations/{organizationId}/nac/dictionaries`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-dictionary-attributes/)

#### Get all attributes by dictionary ID

Operation ID: `getOrganizationNacDictionaryAttributes`

PATH _`/organizations/{organizationId}/nac/dictionaries/{dictionaryId}/attributes`_

    [
      {
        "attributeId": "urn:client-cert:cn",
        "title": "Common Name",
        "description": "common Name attribute",
        "maximum": 100,
        "minimum": 0,
        "pattern": ".*",
        "type": "string",
        "format": "string",
        "enum": [
          "Permit",
          "Deny"
        ],
        "isLargeDataSet": false,
        "items": {
          "title": "SAN",
          "description": "subject alternative name",
          "type": "string"
        },
        "isReadOnly": false,
        "isWriteOnly": false,
        "default": "Permit"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get all attributes by dictionary ID
> 
> **GET** `/organizations/{organizationId}/nac/dictionaries/{dictionaryId}/attributes`  
> 
> * * *

* * *

### authorization

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-authorization-policies/)

#### Get all nac authorization policies for this organization

Operation ID: `getOrganizationNacAuthorizationPolicies`

PATH _`/organizations/{organizationId}/nac/authorization/policies`_

    [
      {
        "policyId": "1",
        "name": "auth_policy",
        "enabled": true,
        "rank": 5,
        "version": "20",
        "counts": {
          "hits": 10
        },
        "rules": [
          {
            "ruleId": "1",
            "name": "rule_name",
            "rank": 10,
            "enabled": true,
            "counts": {
              "hits": 20
            },
            "authorizationProfile": {
              "vlan": {
                "value": "123",
                "type": "CONSTANT"
              },
              "adaptivePolicy": {
                "value": "Sample_Adaptive_Policy",
                "type": "CONSTANT"
              },
              "voiceDomain": {
                "value": "true",
                "type": "CONSTANT"
              },
              "groupPolicy": {
                "value": "Sample_Group_Policy",
                "type": "CONSTANT"
              },
              "result": "PERMIT",
              "ipsk": {
                "value": "Moon@15",
                "type": "CONSTANT"
              }
            }
          }
        ],
        "hasOutdatedCondition": false,
        "conditionTags": [
          "Client certificates: Issuer - Common Name = spa.meraki.com",
          "Networks: Network Name = Dev Test Network"
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get all nac authorization policies for this organization
> 
> **GET** `/organizations/{organizationId}/nac/authorization/policies`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-nac-authorization-policy-rule/)

#### Create a rule in an authorization policy set of an organization

Operation ID: `createOrganizationNacAuthorizationPolicyRule`

PATH _`/organizations/{organizationId}/nac/authorization/policies/{policyId}/rules`_

    {
      "ruleId": "1",
      "policyset": {
        "policysetId": "2"
      },
      "name": "rule_name",
      "enabled": true,
      "rank": 10,
      "counts": {
        "hits": 20
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a rule in an authorization policy set of an organization
> 
> **POST** `/organizations/{organizationId}/nac/authorization/policies/{policyId}/rules`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-nac-authorization-policy-rule/)

#### Update an existing rule of an authorization policy set within an organization

Operation ID: `updateOrganizationNacAuthorizationPolicyRule`

PATH _`/organizations/{organizationId}/nac/authorization/policies/{policyId}/rules/{ruleId}`_

    {
      "ruleId": "1",
      "policyset": {
        "policysetId": "2"
      },
      "name": "rule_name",
      "enabled": true,
      "rank": 10,
      "counts": {
        "hits": 20
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an existing rule of an authorization policy set within an organization
> 
> **PUT** `/organizations/{organizationId}/nac/authorization/policies/{policyId}/rules/{ruleId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a rule in an authorization policy set of an organization
> 
> **DELETE** `/organizations/{organizationId}/nac/authorization/policies/{policyId}/rules/{ruleId}`  
> 
> * * *

* * *

### certificates

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-certificates/)

#### Gets all certificates for an organization and can filter by certificate status, expiry date and last used date

Operation ID: `getOrganizationNacCertificates`

PATH _`/organizations/{organizationId}/nac/certificates`_

    {
      "certificateId": "1284392014819",
      "parentCertificateId": "1284392014818",
      "certificateChainId": "1",
      "description": "Sample Description",
      "source": "NAC",
      "lastUsedAt": "2022-09-15T12:00:00Z",
      "canBeDeleted": true,
      "profile": {
        "enabled": false,
        "identity": "Sample profile identity",
        "isLocalAuth": true,
        "isTrustedAnchor": false,
        "bypassExpiryDate": false
      },
      "fields": {
        "validity": {
          "start": "2022-09-01T12:00:00Z",
          "end": "2022-10-01T12:00:00Z"
        },
        "subject": {
          "commonName": "subjectRoot",
          "organizationalUnit": "CloudNAC",
          "organization": "Cisco Systems",
          "locality": "Bangalore",
          "state": "KA",
          "country": "IN"
        },
        "signatureAlgorithmId": "SHA256withRSA",
        "issuer": {
          "commonName": "issuerRoot",
          "organizationalUnit": "CloudNAC",
          "organization": "Cisco Systems",
          "locality": "Bangalore",
          "state": "KA",
          "country": "IN"
        },
        "hashes": [
          {
            "algorithm": "SHA1",
            "hash": "hash text here"
          }
        ]
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Gets all certificates for an organization and can filter by certificate status, expiry date and last used date
> 
> **GET** `/organizations/{organizationId}/nac/certificates`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-certificates-authorities-crls/)

#### Get all the organization's CRL.It's possible to filter results by CRL issuers (CA) or CRL's ID - see caIds and crlIds query parameters.This endpoint could be used for 'show' action when you specify a single CRL ID in crlIds parameter

Operation ID: `getOrganizationNacCertificatesAuthoritiesCrls`

PATH _`/organizations/{organizationId}/nac/certificates/authorities/crls`_

    {
      "items": [
        {
          "crlId": "1234",
          "data": [
            {
              "serial": "121B0A22949BAD8B639B6987DC10326E",
              "revocationDate": "2022-08-28T07:34:01Z",
              "reason": "Key Compromise"
            }
          ],
          "isDelta": false,
          "caId": "12345",
          "createdAt": "2021-09-19T19:34:10Z",
          "lastUpdatedAt": "2021-09-26T20:34:10Z"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get all the organization's CRL.It's possible to filter results by CRL issuers (CA) or CRL's ID - see caIds and crlIds query parameters.This endpoint could be used for 'show' action when you specify a single CRL ID in crlIds parameter
> 
> **GET** `/organizations/{organizationId}/nac/certificates/authorities/crls`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create a new CRL (either base or delta) for an existing CA
> 
> **POST** `/organizations/{organizationId}/nac/certificates/authorities/crls`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-certificates-authorities-crls-descriptors/)

#### Get all the organization's CRL descriptors (metadata only - revocation list data is excluded)

Operation ID: `getOrganizationNacCertificatesAuthoritiesCrlsDescriptors`

PATH _`/organizations/{organizationId}/nac/certificates/authorities/crls/descriptors`_

    {
      "items": [
        {
          "crlId": "1234",
          "isDelta": false,
          "caId": "12345",
          "lastUpdatedAt": "2021-09-26T20:34:10Z"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get all the organization's CRL descriptors (metadata only - revocation list data is excluded). It's possible to filter results by CRL issuers (CA) - see caIds query parameter
> 
> **GET** `/organizations/{organizationId}/nac/certificates/authorities/crls/descriptors`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-nac-certificates-authorities-crl/)

#### Deletes a whole CRL, including all its deltas (in case of base CRL removal)

Operation ID: `deleteOrganizationNacCertificatesAuthoritiesCrl`

PATH _`/organizations/{organizationId}/nac/certificates/authorities/crls/{crlId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Deletes a whole CRL, including all its deltas (in case of base CRL removal)
> 
> **DELETE** `/organizations/{organizationId}/nac/certificates/authorities/crls/{crlId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-nac-certificates-import/)

#### Import certificate for this organization or validate without persisting

Operation ID: `createOrganizationNacCertificatesImport`

PATH _`/organizations/{organizationId}/nac/certificates/import`_

    {
      "certificateId": "1284392014819",
      "parentCertificateId": "1284392014818",
      "certificateChainId": "1",
      "description": "Sample Description",
      "source": "NAC",
      "lastUsedAt": "2022-09-15T12:00:00Z",
      "canBeDeleted": true,
      "profile": {
        "enabled": false,
        "identity": "Sample profile identity",
        "isLocalAuth": true,
        "isTrustedAnchor": false,
        "bypassExpiryDate": false
      },
      "fields": {
        "validity": {
          "start": "2022-09-01T12:00:00Z",
          "end": "2022-10-01T12:00:00Z"
        },
        "subject": {
          "commonName": "subjectRoot",
          "organizationalUnit": "CloudNAC",
          "organization": "Cisco Systems",
          "locality": "Bangalore",
          "state": "KA",
          "country": "IN"
        },
        "signatureAlgorithmId": "SHA256withRSA",
        "issuer": {
          "commonName": "issuerRoot",
          "organizationalUnit": "CloudNAC",
          "organization": "Cisco Systems",
          "locality": "Bangalore",
          "state": "KA",
          "country": "IN"
        },
        "hashes": [
          {
            "algorithm": "SHA1",
            "hash": "hash text here"
          }
        ]
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Import certificate for this organization or validate without persisting
> 
> **POST** `/organizations/{organizationId}/nac/certificates/import`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-nac-certificates-overview/)

#### Get counts of Enabled, Disabled, Expired and Last Used certificates for this organization

Operation ID: `getOrganizationNacCertificatesOverview`

PATH _`/organizations/{organizationId}/nac/certificates/overview`_

    {
      "counts": {
        "byEnabled": {
          "true": 1,
          "false": 1
        },
        "byValidity": {
          "expired": 1,
          "expiringWithin": [
            {
              "period": 6,
              "count": 1
            }
          ]
        },
        "byUsage": {
          "unusedWithin": [
            {
              "period": 3,
              "count": 1
            }
          ]
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get counts of Enabled, Disabled, Expired and Last Used certificates for this organization
> 
> **GET** `/organizations/{organizationId}/nac/certificates/overview`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-nac-certificate/)

#### Update certificate configuration by certificateId for this organization

Operation ID: `updateOrganizationNacCertificate`

PATH _`/organizations/{organizationId}/nac/certificates/{certificateId}`_

    {
      "profileId": "1",
      "status": "Disabled",
      "identity": "Subject:CN",
      "isLocalAuth": true,
      "isTrustedAnchor": false,
      "bypassExpiryDate": false
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update certificate configuration by certificateId for this organization
> 
> **PUT** `/organizations/{organizationId}/nac/certificates/{certificateId}`  
> 
> * * *

* * *

\[ users \]
-----------

### iam

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-iam-users-authorizations/)

#### List specific authorizations for the list of Meraki end users.

Operation ID: `getOrganizationIamUsersAuthorizations`

PATH _`/organizations/{organizationId}/iam/users/authorizations`_

    {
      "items": [
        {
          "authorizationId": "1284392014819",
          "idpUserId": "1284392014819",
          "expiresAt": "2018-02-11T00:00:00Z",
          "startsAt": "2018-05-12T00:00:00Z",
          "selfRegistered": false,
          "status": "authorized",
          "authZone": {
            "id": "1284392014819",
            "name": "SFO"
          },
          "authorizer": {
            "name": "John Doe"
          },
          "createdAt": "2018-02-11T00:00:00Z",
          "lastUpdatedAt": "2018-05-12T00:00:00Z"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 10,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List specific authorizations for the list of Meraki end users.
> 
> **GET** `/organizations/{organizationId}/iam/users/authorizations`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Authorize a Meraki end user for an auth zone.
> 
> **POST** `/organizations/{organizationId}/iam/users/authorizations`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update a Meraki end user's access to an auth zone.
> 
> **PUT** `/organizations/{organizationId}/iam/users/authorizations`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/revoke-organization-iam-users-authorizations-authorization/)

#### Revoke a Meraki end user's access to an auth zone.

Operation ID: `revokeOrganizationIamUsersAuthorizationsAuthorization`

PATH _`/organizations/{organizationId}/iam/users/authorizations/authorization/revoke`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Revoke a Meraki end user's access to an auth zone.
> 
> **POST** `/organizations/{organizationId}/iam/users/authorizations/authorization/revoke`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-iam-users-authorizations-zones/)

#### List all of the available auth zones for an organization.

Operation ID: `getOrganizationIamUsersAuthorizationsZones`

PATH _`/organizations/{organizationId}/iam/users/authorizations/zones`_

    {
      "items": [
        {
          "id": "1284392014819",
          "name": "Main Office",
          "type": "Client VPN",
          "network": {
            "id": "1284392014819",
            "name": "Main Office"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 10,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List all of the available auth zones for an organization.
> 
> **GET** `/organizations/{organizationId}/iam/users/authorizations/zones`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-iam-users-authorization/)

#### Delete an authorization for a Meraki end user.

Operation ID: `deleteOrganizationIamUsersAuthorization`

PATH _`/organizations/{organizationId}/iam/users/authorizations/{authorizationId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete an authorization for a Meraki end user.
> 
> **DELETE** `/organizations/{organizationId}/iam/users/authorizations/{authorizationId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-iam-users-idp/)

#### Create an identity provider for an organization

Operation ID: `createOrganizationIamUsersIdp`

PATH _`/organizations/{organizationId}/iam/users/idps`_

    {
      "idpId": "1284392014819",
      "name": "My Entra ID",
      "description": "Some description",
      "type": "Azure AD",
      "syncable": true,
      "syncType": "proactive",
      "createdAt": "2018-02-11T00:00:00Z",
      "lastUpdatedAt": "2018-05-12T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create an identity provider for an organization. Only Entra ID(Azure AD) is supported at this time.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/search-organization-idp-groups/)

#### Search all IdP groups for an organization

Operation ID: `searchOrganizationIdpGroups`

PATH _`/organizations/{organizationId}/iam/users/idps/groups/search`_

    {
      "items": [
        {
          "groupId": "1284392014819",
          "idpId": "1284392014819",
          "name": "sample idp group",
          "externalId": "f5a28b7d-e41c-41a2-8b0f-244a4123c5d7",
          "metadata": {
            "someKey": "value"
          },
          "idp": {
            "id": "1284392014819",
            "name": "Azure AD IdP",
            "type": "Azure AD"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 10,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Search all IdP groups for an organization. Filter by IdP IDs and Auth Zone. Parameters are assembled as an AND query.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/groups/search`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-iam-users-idps-product-integrations/)

#### List all available IdP Product Integration urls for the organization

Operation ID: `getOrganizationIamUsersIdpsProductIntegrations`

PATH _`/organizations/{organizationId}/iam/users/idps/productIntegrations`_

    [
      {
        "productIntegrationId": "access_manager",
        "name": "Access Manager",
        "description": "Use this IdP in your policies to control access to your resources.",
        "url": ""
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List all available IdP Product Integration urls for the organization
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/productIntegrations`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-iam-users-idps-search/)

#### Search all IdPs for an organization

Operation ID: `createOrganizationIamUsersIdpsSearch`

PATH _`/organizations/{organizationId}/iam/users/idps/search`_

    {
      "items": [
        {
          "idpId": "1284392014819",
          "name": "My Entra ID",
          "description": "Some description",
          "type": "Azure AD",
          "syncable": true,
          "syncType": "proactive",
          "createdAt": "2018-02-11T00:00:00Z",
          "lastUpdatedAt": "2018-05-12T00:00:00Z"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 10,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Search all IdPs for an organization. Filter by IdP ID, IdP type, and Auth Zone. Parameters are assembled as an AND query.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/search`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-iam-users-idps-sync-history/)

#### Get the IdP sync status records for an organization

Operation ID: `getOrganizationIamUsersIdpsSyncHistory`

PATH _`/organizations/{organizationId}/iam/users/idps/sync/history`_

    {
      "items": [
        {
          "idpSyncId": "1284392014819",
          "idpId": "1284392014819",
          "status": "In Progress",
          "message": "sync was queued 10 minutes",
          "createdAt": "2018-02-11T00:00:00Z",
          "lastUpdatedAt": "2018-05-12T00:00:00Z"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 10,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the IdP sync status records for an organization. Only Entra ID(Azure AD) is supported at this time.
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/sync/history`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-iam-users-idps-sync-latest/)

#### Get the latest IdP sync status records for all IdPs in an organization

Operation ID: `getOrganizationIamUsersIdpsSyncLatest`

PATH _`/organizations/{organizationId}/iam/users/idps/sync/latest`_

    {
      "items": [
        {
          "idpSyncId": "1284392014819",
          "idpId": "1284392014819",
          "status": "In Progress",
          "message": "sync was queued 10 minutes",
          "syncedBy": "api",
          "createdAt": "2018-02-11T00:00:00Z",
          "lastUpdatedAt": "2018-05-12T00:00:00Z"
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the latest IdP sync status records for all IdPs in an organization. Only Entra ID(Azure AD) is supported at this time.
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/sync/latest`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-iam-users-idps-test-connectivity/)

#### Test connectivity to an Entra ID identity provider.

Operation ID: `createOrganizationIamUsersIdpsTestConnectivity`

PATH _`/organizations/{organizationId}/iam/users/idps/testConnectivity`_

    {
      "result": "failure",
      "errors": [
        {
          "code": "AADSTS7000215",
          "message": "Invalid client secret provided."
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Test connectivity to an Entra ID identity provider.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/testConnectivity`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-iam-users-idps-user/)

#### Create a Meraki user

Operation ID: `createOrganizationIamUsersIdpsUser`

PATH _`/organizations/{organizationId}/iam/users/idps/users`_

    {
      "idpUserId": "1284392014819",
      "idp": {
        "id": "1284392014819",
        "name": "Azure AD IdP",
        "type": "azure_ad"
      },
      "upn": "mdavis@meraki.com",
      "displayName": "Miles Davis",
      "externalId": "azure AD Id",
      "accessTypes": [
        "Wireless",
        "Client VPN"
      ],
      "createdAt": "2018-02-11T00:00:00Z",
      "lastUpdatedAt": "2018-05-12T00:00:00Z",
      "groups": [
        {
          "id": "1",
          "name": "Group name"
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a Meraki user
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/users`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-iam-users-idps-user/)

#### Update a Meraki user

Operation ID: `updateOrganizationIamUsersIdpsUser`

PATH _`/organizations/{organizationId}/iam/users/idps/users/{id}`_

    {
      "idpUserId": "1284392014819",
      "idp": {
        "id": "1284392014819",
        "name": "Azure AD IdP",
        "type": "azure_ad"
      },
      "upn": "mdavis@meraki.com",
      "displayName": "Miles Davis",
      "externalId": "azure AD Id",
      "accessTypes": [
        "Wireless",
        "Client VPN"
      ],
      "createdAt": "2018-02-11T00:00:00Z",
      "lastUpdatedAt": "2018-05-12T00:00:00Z",
      "groups": [
        {
          "id": "1",
          "name": "Group name"
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a Meraki user
> 
> **PUT** `/organizations/{organizationId}/iam/users/idps/users/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a Meraki end user
> 
> **DELETE** `/organizations/{organizationId}/iam/users/idps/users/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-iam-users-idp-sync/)

#### Trigger an IdP sync for an identity provider

Operation ID: `createOrganizationIamUsersIdpSync`

PATH _`/organizations/{organizationId}/iam/users/idps/{idpId}/sync`_

    {
      "idpSyncId": "1284392014819",
      "idpId": "1284392014819",
      "status": "In Progress",
      "message": "sync was queued 10 minutes",
      "syncedBy": "api",
      "createdAt": "2018-02-11T00:00:00Z",
      "lastUpdatedAt": "2018-05-12T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Trigger an IdP sync for an identity provider. Only Entra ID(Azure AD) is supported at this time.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/{idpId}/sync`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-iam-users-idp-sync-latest/)

#### Get the latest IdP sync status for an identity provider

Operation ID: `getOrganizationIamUsersIdpSyncLatest`

PATH _`/organizations/{organizationId}/iam/users/idps/{idpId}/sync/latest`_

    {
      "idpSyncId": "1284392014819",
      "status": "In Progress",
      "message": "sync was queued 10 minutes",
      "createdAt": "2018-02-11T00:00:00Z",
      "lastUpdatedAt": "2018-05-12T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the latest IdP sync status for an identity provider. Only Entra ID(Azure AD) is supported at this time.
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/{idpId}/sync/latest`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-iam-users-idp/)

#### Update an identity provider

Operation ID: `updateOrganizationIamUsersIdp`

PATH _`/organizations/{organizationId}/iam/users/idps/{id}`_

    {
      "idpId": "1284392014819",
      "name": "My Entra ID",
      "description": "Some description",
      "type": "Azure AD",
      "syncable": true,
      "syncType": "proactive",
      "createdAt": "2018-02-11T00:00:00Z",
      "lastUpdatedAt": "2018-05-12T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an identity provider. Only Entra ID(Azure AD) is supported at this time.
> 
> **PUT** `/organizations/{organizationId}/iam/users/idps/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a identity provider from an organization. Only Entra ID(Azure AD) is supported at this time.
> 
> **DELETE** `/organizations/{organizationId}/iam/users/idps/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-iam-users-idp-auth-zones/)

#### List all auth zones for an identity provider

Operation ID: `getOrganizationIamUsersIdpAuthZones`

PATH _`/organizations/{organizationId}/iam/users/idps/{id}/authZones`_

    {
      "items": [
        {
          "id": "1284392014819",
          "name": "Main Office",
          "type": "Client VPN",
          "network": {
            "id": "1284392014819",
            "name": "Main Office"
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List all auth zones for an identity provider
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/{id}/authZones`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/search-organization-users/)

#### List the end users and their associated identity providers for an organization.

Operation ID: `searchOrganizationUsers`

PATH _`/organizations/{organizationId}/iam/users/search`_

    {
      "items": [
        {
          "userId": "1284392014819",
          "upn": "mdavis@meraki.com",
          "idpUsers": [
            {
              "id": "1284392014819",
              "idp": {
                "id": "1284392014819",
                "name": "Azure AD IdP",
                "type": "Azure AD"
              },
              "displayName": "Miles Davis",
              "email": "mdavis@meraki.com",
              "username": "mdavis",
              "externalId": "external-Id",
              "createdAt": "2018-02-11T00:00:00Z",
              "lastUpdatedAt": "2018-05-12T00:00:00Z",
              "groups": [
                {
                  "id": "1",
                  "name": "Group name"
                }
              ],
              "accessTypes": [
                "Wireless",
                "Client VPN"
              ]
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 10,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the end users and their associated identity providers for an organization.
> 
> **POST** `/organizations/{organizationId}/iam/users/search`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-iam-users-summary-panel/)

#### Get the count of users and user groups for an organization.

Operation ID: `getOrganizationIamUsersSummaryPanel`

PATH _`/organizations/{organizationId}/iam/users/summaryPanel`_

    {
      "userCount": 100,
      "userGroupCount": 10
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the count of users and user groups for an organization.
> 
> **GET** `/organizations/{organizationId}/iam/users/summaryPanel`  
> 
> * * *

* * *

\[ camera \]
------------

### videoWalls

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-camera-video-wall/)

#### Create a new video wall.

Operation ID: `createNetworkCameraVideoWall`

PATH _`/networks/{networkId}/camera/videoWalls`_

    {
      "id": "1284392014819",
      "name": "Building-A",
      "index": 0,
      "tiles": [
        {
          "id": "1284392014819",
          "serial": "Q234-ABCD-5678",
          "x": 1,
          "y": 1,
          "width": 2,
          "height": 1,
          "theta": 3.14,
          "phi": 1.2,
          "imagerId": 1
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a new video wall.
> 
> **POST** `/networks/{networkId}/camera/videoWalls`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-camera-video-wall/)

#### Update the specified video wall.

Operation ID: `updateNetworkCameraVideoWall`

PATH _`/networks/{networkId}/camera/videoWalls/{id}`_

    {
      "id": "1284392014819",
      "name": "Building-A",
      "index": 0,
      "tiles": [
        {
          "id": "1284392014819",
          "serial": "Q234-ABCD-5678",
          "x": 1,
          "y": 1,
          "width": 2,
          "height": 1,
          "theta": 3.14,
          "phi": 1.2,
          "imagerId": 1
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the specified video wall.
> 
> **PUT** `/networks/{networkId}/camera/videoWalls/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete the specified video wall.
> 
> **DELETE** `/networks/{networkId}/camera/videoWalls/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-camera-video-walls/)

#### Return a list of video walls.

Operation ID: `getOrganizationCameraVideoWalls`

PATH _`/organizations/{organizationId}/camera/videoWalls`_

    [
      {
        "id": "1284392014819",
        "name": "Building-A",
        "index": 0,
        "tiles": [
          {
            "id": "1284392014819",
            "serial": "Q234-ABCD-5678",
            "x": 1,
            "y": 1,
            "width": 2,
            "height": 1,
            "theta": 3.14,
            "phi": 1.2,
            "imagerId": 1
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a list of video walls.
> 
> **GET** `/organizations/{organizationId}/camera/videoWalls`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-camera-video-wall/)

#### Return the specified video wall.

Operation ID: `getOrganizationCameraVideoWall`

PATH _`/organizations/{organizationId}/camera/videoWalls/{id}`_

    {
      "id": "1284392014819",
      "name": "Building-A",
      "index": 0,
      "tiles": [
        {
          "id": "1284392014819",
          "serial": "Q234-ABCD-5678",
          "x": 1,
          "y": 1,
          "width": 2,
          "height": 1,
          "theta": 3.14,
          "phi": 1.2,
          "imagerId": 1
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the specified video wall.
> 
> **GET** `/organizations/{organizationId}/camera/videoWalls/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-camera-video-wall-video-link/)

#### Returns video wall link to the specified video wall id

Operation ID: `getOrganizationCameraVideoWallVideoLink`

PATH _`/organizations/{organizationId}/camera/videoWalls/{id}/videoLink`_

    [
      {
        "url": "https://nxx.meraki.com/office-cameras/n/bs0a1k/manage/video/video_wall/75290?timestamp=1535732570077",
        "visionUrl": "https://vision.meraki.com/n/6482158978508419/cameras/29048243992402?ts=1535732570077"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns video wall link to the specified video wall id. If a timestamp is supplied, it links to that timestamp.
> 
> **GET** `/organizations/{organizationId}/camera/videoWalls/{id}/videoLink`  
> 
> * * *

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-camera-devices-configurations/)

#### Lists all the capabilities of cameras in this organization

Operation ID: `getOrganizationCameraDevicesConfigurations`

PATH _`/organizations/{organizationId}/camera/devices/configurations`_

    [
      {
        "serial": "QWDE-OIJU-HIDB",
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "model": "MV63-HW",
        "category": "outdoor",
        "audio": {
          "isConfigurable": true,
          "enabled": true
        },
        "lens": {
          "isFisheye": true,
          "zoom": {
            "isConfigurable": true,
            "maximum": 100,
            "minimum": 0,
            "value": 65
          },
          "aperture": {
            "isConfigurable": true,
            "maximum": 100,
            "minimum": 0,
            "value": 65
          },
          "focus": {
            "isConfigurable": true,
            "maximum": 100,
            "minimum": 0,
            "value": 65
          }
        },
        "hdr": {
          "isConfigurable": true,
          "enabled": true
        },
        "sensorCrop": {
          "isConfigurable": true,
          "cropX": 0,
          "cropY": 0,
          "cropW": 0,
          "cropH": 0
        },
        "searchModels": [
          {
            "name": "Body/Vehicle",
            "enabled": true
          }
        ],
        "cloudArchive": {
          "isConfigurable": true,
          "enabled": true,
          "retentionDays": 90
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Lists all the capabilities of cameras in this organization
> 
> **GET** `/organizations/{organizationId}/camera/devices/configurations`  
> 
> * * *

* * *

\[ devices \]
-------------

### vrrpTable

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-vrrp-table/)

#### Enqueue a job to perform a VRRP table request for the device

Operation ID: `createDeviceLiveToolsVrrpTable`

PATH _`/devices/{serial}/liveTools/vrrpTable`_

    {
      "vrrpTableId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/vrrpTable/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a VRRP table request for the device. This endpoint currently supports Catalyst switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/vrrpTable`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-vrrp-table/)

#### Return an VRRP table live tool job.

Operation ID: `getDeviceLiveToolsVrrpTable`

PATH _`/devices/{serial}/liveTools/vrrpTable/{vrrpTableId}`_

    {
      "vrrpTableId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/vrrpTable/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "entries": [
        {
          "group": 123,
          "protocol": "ipv4",
          "addresses": {
            "virtual": "10.0.0.1",
            "primary": "10.0.0.2"
          },
          "vlanId": 100,
          "priority": 100,
          "preemption": {
            "enabled": true
          },
          "status": {
            "value": "primary",
            "description": "Indicates that the virtual router is forwarding packets for IP addresses that are associated with this router",
            "primaryReason": {
              "value": "priority",
              "description": "Won the primary election due to higher priority"
            },
            "lastChange": {
              "ts": "2018-02-11T00:00:00.090210Z",
              "reason": {
                "value": "priority",
                "description": "Elected primary due to higher priority"
              }
            }
          }
        }
      ],
      "error": "The device is unreachable."
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an VRRP table live tool job.
> 
> **GET** `/devices/{serial}/liveTools/vrrpTable/{vrrpTableId}`  
> 
> * * *

* * *

### traceRoute

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-trace-route/)

#### Enqueue a job to run trace route in the device

Operation ID: `createDeviceLiveToolsTraceRoute`

PATH _`/devices/{serial}/liveTools/traceRoute`_

    {
      "traceRouteId": "123",
      "url": "/devices/QXXX-YYYY-ZZZZ/liveTools/traceroute/123",
      "request": {
        "serial": "Q234-ABCD-5678",
        "target": "www.cisco.com",
        "sourceInterface": "100.100.0.1"
      },
      "status": "complete",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to run trace route in the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/traceRoute`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-trace-route/)

#### Return a trace route job

Operation ID: `getDeviceLiveToolsTraceRoute`

PATH _`/devices/{serial}/liveTools/traceRoute/{traceRouteId}`_

    {
      "traceRouteId": "123",
      "url": "/devices/QXXX-YYYY-ZZZZ/liveTools/traceroute/123",
      "request": {
        "serial": "Q234-ABCD-5678",
        "target": "www.cisco.com",
        "sourceInterface": "100.100.0.1"
      },
      "status": "complete",
      "results": [
        {
          "hop": 0,
          "ip": "100.100.0.1",
          "rttAvg": 0.00005,
          "count": 3
        }
      ],
      "error": "The device is unreachable."
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a trace route job
> 
> **GET** `/devices/{serial}/liveTools/traceRoute/{traceRouteId}`  
> 
> * * *

* * *

### speedTest

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-speed-test/)

#### Enqueue a job to execute a speed test from a device

Operation ID: `createDeviceLiveToolsSpeedTest`

PATH _`/devices/{serial}/liveTools/speedTest`_

    {
      "speedTestId": "1284392014819",
      "url": "/devices/SERIAL/liveTools/speedTest/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678",
        "interface": "wan1"
      },
      "status": "complete",
      "results": {
        "speeds": {
          "average": 123.45
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to execute a speed test from a device
> 
> **POST** `/devices/{serial}/liveTools/speedTest`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-speed-test/)

#### Returns a speed test result in megabits per second

Operation ID: `getDeviceLiveToolsSpeedTest`

PATH _`/devices/{serial}/liveTools/speedTest/{id}`_

    {
      "speedTestId": "1284392014819",
      "url": "/devices/SERIAL/liveTools/speedTest/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678",
        "interface": "wan1"
      },
      "status": "complete",
      "results": {
        "speeds": {
          "average": 123.45
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns a speed test result in megabits per second. If test is not complete, no results are present.
> 
> **GET** `/devices/{serial}/liveTools/speedTest/{id}`  
> 
> * * *

* * *

### routingTable

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-routing-table/)

#### Enqueue a job to perform a routing table request for the device

Operation ID: `createDeviceLiveToolsRoutingTable`

PATH _`/devices/{serial}/liveTools/routingTable`_

    {
      "routingTableId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/routingTable/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a routing table request for the device. Only native Catalyst switches are supported. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/routingTable`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-routing-table-lookup/)

#### Enqueue a job to perform a routing table lookup request for the device

Operation ID: `createDeviceLiveToolsRoutingTableLookup`

PATH _`/devices/{serial}/liveTools/routingTable/lookups`_

    {
      "lookupId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/routingTable/lookups/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678",
        "type": "static",
        "destination": {
          "address": "192.168.0.10",
          "subnet": "192.168.0.0/24"
        },
        "nextHop": {
          "address": "10.10.0.1"
        },
        "vpn": {
          "peer": {
            "id": "N_12345678"
          }
        }
      },
      "status": "scheduled",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a routing table lookup request for the device. Only Cisco routers are supported. Any combination of search filters can be applied.
> 
> **POST** `/devices/{serial}/liveTools/routingTable/lookups`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-routing-table-lookup/)

#### Return a routing table live tool lookup job.

Operation ID: `getDeviceLiveToolsRoutingTableLookup`

PATH _`/devices/{serial}/liveTools/routingTable/lookups/{id}`_

    {
      "lookupId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/routingTable/lookups/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678",
        "type": "static",
        "destination": {
          "address": "192.168.0.10",
          "subnet": "192.168.0.0/24"
        },
        "nextHop": {
          "address": "10.10.0.1"
        },
        "vpn": {
          "peer": {
            "id": "N_12345678"
          }
        }
      },
      "status": "scheduled",
      "entries": [
        {
          "type": "static",
          "subnet": "192.168.0.0/24",
          "nextHops": [
            {
              "number": 1,
              "address": "10.10.0.1",
              "vpn": {
                "peer": {
                  "id": "N_12345678",
                  "name": "Branch Office"
                }
              }
            }
          ],
          "ipVersion": "ipv4",
          "vrf": {
            "name": "default"
          }
        }
      ],
      "errors": [
        "The device is unreachable"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a routing table live tool lookup job.
> 
> **GET** `/devices/{serial}/liveTools/routingTable/lookups/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-routing-table-summary/)

#### Enqueue a job to perform a routing table summary request for the device

Operation ID: `createDeviceLiveToolsRoutingTableSummary`

PATH _`/devices/{serial}/liveTools/routingTable/summaries`_

    {
      "summaryId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/routingTable/summaries/1284392014819",
      "status": "scheduled",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a routing table summary request for the device. Only Cisco routers are supported.
> 
> **POST** `/devices/{serial}/liveTools/routingTable/summaries`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-routing-table-summary/)

#### Return a routing table live tool summary job.

Operation ID: `getDeviceLiveToolsRoutingTableSummary`

PATH _`/devices/{serial}/liveTools/routingTable/summaries/{id}`_

    {
      "summaryId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/routingTable/summaries/1284392014819",
      "status": "scheduled",
      "counts": {
        "total": 150,
        "byVrf": [
          {
            "name": "default",
            "byProtocol": {
              "ipv4": {
                "total": 100
              },
              "ipv6": {
                "total": 50
              }
            }
          }
        ]
      },
      "errors": [
        "The device is unreachable"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a routing table live tool summary job.
> 
> **GET** `/devices/{serial}/liveTools/routingTable/summaries/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-routing-table/)

#### Return an routing table live tool job.

Operation ID: `getDeviceLiveToolsRoutingTable`

PATH _`/devices/{serial}/liveTools/routingTable/{id}`_

    {
      "routingTableId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/routingTable/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "entries": [
        {
          "type": "static",
          "subnet": "10.200.10.1/32",
          "staticGateway": "22.22.22.21",
          "ipVersion": "ipv4"
        }
      ],
      "error": "The device is unreachable"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an routing table live tool job.
> 
> **GET** `/devices/{serial}/liveTools/routingTable/{id}`  
> 
> * * *

* * *

### reboot

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-reboot/)

#### Enqueue a job to reboot a device

Operation ID: `createDeviceLiveToolsReboot`

PATH _`/devices/{serial}/liveTools/reboot`_

    {
      "rebootId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/reboot/1284392014819",
      "status": "complete",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "error": "error description",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to reboot a device. This endpoint has a rate limit of one request every 60 seconds.
> 
> **POST** `/devices/{serial}/liveTools/reboot`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-reboot/)

#### Return a reboot job

Operation ID: `getDeviceLiveToolsReboot`

PATH _`/devices/{serial}/liveTools/reboot/{rebootId}`_

    {
      "rebootId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/reboot/1284392014819",
      "status": "complete",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "error": "error description"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a reboot job
> 
> **GET** `/devices/{serial}/liveTools/reboot/{rebootId}`  
> 
> * * *

* * *

### ospfNeighbors

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-ospf-neighbor/)

#### Enqueue a job to perform a OSPF neighbors request for the device

Operation ID: `createDeviceLiveToolsOspfNeighbor`

PATH _`/devices/{serial}/liveTools/ospfNeighbors`_

    {
      "ospfNeighborsId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/ospfNeighbors/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a OSPF neighbors request for the device. This endpoint currently supports switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/ospfNeighbors`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-ospf-neighbor/)

#### Return an OSPF neighbors live tool job.

Operation ID: `getDeviceLiveToolsOspfNeighbor`

PATH _`/devices/{serial}/liveTools/ospfNeighbors/{ospfNeighborsId}`_

    {
      "ospfNeighborsId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/ospfNeighbors/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "routers": [
        {
          "id": "1.2.3.4",
          "name": "My route",
          "ip": "10.0.0.0/24",
          "position": "DR",
          "state": "full",
          "vlanId": 100
        }
      ],
      "error": "The device is unreachable."
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an OSPF neighbors live tool job.
> 
> **GET** `/devices/{serial}/liveTools/ospfNeighbors/{ospfNeighborsId}`  
> 
> * * *

* * *

### dhcpLeases

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-dhcp-lease/)

#### Enqueue a job to perform a DHCP leases request for the device

Operation ID: `createDeviceLiveToolsDhcpLease`

PATH _`/devices/{serial}/liveTools/dhcpLeases`_

    {
      "dhcpLeasesId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/dhcpLeases/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a DHCP leases request for the device. This endpoint currently supports all MS devices. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/dhcpLeases`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-dhcp-lease/)

#### Return a DHCP leases live tool job.

Operation ID: `getDeviceLiveToolsDhcpLease`

PATH _`/devices/{serial}/liveTools/dhcpLeases/{dhcpLeasesId}`_

    {
      "dhcpLeasesId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/dhcpLeases/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "dhcpLeases": [
        {
          "ip": "10.0.0.0/24",
          "mac": "00:11:22:33:44:55",
          "expiresAt": "2018-02-11T00:00:00.090210Z"
        }
      ],
      "error": "The device is unreachable."
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a DHCP leases live tool job.
> 
> **GET** `/devices/{serial}/liveTools/dhcpLeases/{dhcpLeasesId}`  
> 
> * * *

* * *

### cyclePort

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-cycle-port/)

#### Enqueue a job to perform a cycle port for the device on the specified ports

Operation ID: `createDeviceLiveToolsCyclePort`

PATH _`/devices/{serial}/liveTools/cyclePort`_

    {
      "cyclePortId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/cyclePort/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678",
        "ports": [
          "2",
          "8"
        ]
      },
      "status": "complete",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a cycle port for the device on the specified ports. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/cyclePort`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-cycle-port/)

#### Return a cycle port live tool job.

Operation ID: `getDeviceLiveToolsCyclePort`

PATH _`/devices/{serial}/liveTools/cyclePort/{id}`_

    {
      "cyclePortId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/cyclePort/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678",
        "ports": [
          "2",
          "8"
        ]
      },
      "status": "complete",
      "error": "The device is unreachable."
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a cycle port live tool job.
> 
> **GET** `/devices/{serial}/liveTools/cyclePort/{id}`  
> 
> * * *

* * *

### aclHitCount

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-acl-hit-count/)

#### Enqueue a job to perform an ACL hit count for the device

Operation ID: `createDeviceLiveToolsAclHitCount`

PATH _`/devices/{serial}/liveTools/aclHitCount`_

    {
      "aclHitCountId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/aclHitCount/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform an ACL hit count for the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/aclHitCount`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-acl-hit-count/)

#### Return an ACL hit count live tool job.

Operation ID: `getDeviceLiveToolsAclHitCount`

PATH _`/devices/{serial}/liveTools/aclHitCount/{id}`_

    {
      "aclHitCountId": "1284392014819",
      "url": "/devices/Q234-ABCD-5678/liveTools/aclHitCount/1284392014819",
      "request": {
        "serial": "Q234-ABCD-5678"
      },
      "status": "complete",
      "acls": [
        {
          "policy": "allow",
          "ipVersion": "any",
          "ipProtocol": {
            "type": "number",
            "number": 6,
            "objectGroup": "object-group-123"
          },
          "counts": {
            "total": 1234,
            "ipv4": 1234,
            "ipv6": 0
          },
          "source": {
            "address": "1.2.3.4",
            "port": {
              "operator": "equals",
              "ports": [
                80,
                443
              ]
            }
          },
          "destination": {
            "address": "2.3.4.5",
            "port": [
              {
                "operator": "range",
                "ports": [
                  80,
                  89
                ]
              }
            ]
          }
        }
      ],
      "error": "The device is unreachable."
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an ACL hit count live tool job.
> 
> **GET** `/devices/{serial}/liveTools/aclHitCount/{id}`  
> 
> * * *

* * *

### clients

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-clients-disconnect/)

#### Return a client disconnect job.

Operation ID: `getDeviceLiveToolsClientsDisconnect`

PATH _`/devices/{serial}/liveTools/clients/disconnect/{id}`_

    {
      "id": "abcd-1234-efgh-5678",
      "status": "queued",
      "request": {
        "mac": "00:11:22:33:44:55",
        "serial": "ABCD-1234-ABCD"
      },
      "url": "/api/v1/devices/serial/liveTools/disconnect",
      "results": {
        "success": true,
        "error": "Device (Access Point) took too long to respond."
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a client disconnect job.
> 
> **GET** `/devices/{serial}/liveTools/clients/disconnect/{id}`  
> 
> * * *

* * *

\[ administered \]
------------------

### search

[Docs](https://developer.cisco.com/meraki/api-v1/get-administered-search-live/)

#### List the appropriate results for a given global search utilizing live\_search\_react

Operation ID: `getAdministeredSearchLive`

PATH _`/administered/search/live`_

    [
      {
        "label": "Device",
        "deviceList": {
          "deviceType": [
            {
              "itemId": "1111111111111",
              "label": "00:00:00:00:00:00",
              "keywords": [
                "this is a keyword"
              ]
            }
          ]
        },
        "list": [
          {
            "itemId": "1111111111111",
            "label": "00:00:00:00:00:00",
            "externalLink": "https://community.meraki.com/t5/Community-Announcements/Happy-New-Year-What-are-your-Networking-Resolutions/ba-p/7894",
            "keywords": [
              "this is a keyword"
            ]
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the appropriate results for a given global search utilizing live\_search\_react
> 
> **GET** `/administered/search/live`  
> 
> * * *

* * *

\[ licensing \]
---------------

### subscription

[Docs](https://developer.cisco.com/meraki/api-v1/batch-administered-licensing-subscription-networks-feature-tiers-update/)

#### Batch change networks to their desired feature tier for specified product types

Operation ID: `batchAdministeredLicensingSubscriptionNetworksFeatureTiersUpdate`

PATH _`/administered/licensing/subscription/networks/featureTiers/batchUpdate`_

    {
      "items": [
        {
          "network": {
            "id": "N_1234",
            "productTypes": [
              {
                "productType": "wireless",
                "featureTier": "essentials"
              }
            ]
          }
        }
      ],
      "errors": [
        {
          "network": {
            "id": "N_1234",
            "productTypes": [
              {
                "productType": "wireless",
                "featureTier": "essentials",
                "error": "Insufficient entitlements"
              }
            ]
          },
          "error": "null"
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Batch change networks to their desired feature tier for specified product types
> 
> **POST** `/administered/licensing/subscription/networks/featureTiers/batchUpdate`  
> 
> * * *

* * *

\[ insight \]
-------------

### webApps

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-insight-web-apps/)

#### Lists all default web applications rules with counter set rule ids

Operation ID: `getOrganizationInsightWebApps`

PATH _`/organizations/{organizationId}/insight/webApps`_

    [
      {
        "counterSetRuleId": "12345",
        "name": "Meraki HTTPS",
        "category": "Remote monitoring & management",
        "thresholds": {
          "goodput": "20000",
          "responseDelay": "3000"
        },
        "expression": "http_host[*.example.com] or http_host",
        "signature": {
          "signatureType": "custom_host",
          "host": "exampled.com",
          "port": "123",
          "net": "10.0.2.1/20"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Lists all default web applications rules with counter set rule ids
> 
> **GET** `/organizations/{organizationId}/insight/webApps`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Add a custom web application for Insight to be able to track
> 
> **POST** `/organizations/{organizationId}/insight/webApps`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-insight-web-app/)

#### Update a custom web application for Insight to be able to track

Operation ID: `updateOrganizationInsightWebApp`

PATH _`/organizations/{organizationId}/insight/webApps/{customCounterSetRuleId}`_

    {
      "counterSetRuleId": "12345",
      "name": "Meraki HTTPS",
      "category": "Remote monitoring & management",
      "thresholds": {
        "goodput": "20000",
        "responseDelay": "3000"
      },
      "expression": "http_host[*.example.com] or http_host",
      "signature": {
        "signatureType": "custom_host",
        "host": "exampled.com"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a custom web application for Insight to be able to track
> 
> **PUT** `/organizations/{organizationId}/insight/webApps/{customCounterSetRuleId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a custom web application by counter set rule id.
> 
> **DELETE** `/organizations/{organizationId}/insight/webApps/{customCounterSetRuleId}`  
> 
> * * *

* * *

### speedTestResults

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-insight-speed-test-results/)

#### List the speed tests for the given devices under this organization

Operation ID: `getOrganizationInsightSpeedTestResults`

PATH _`/organizations/{organizationId}/insight/speedTestResults`_

    [
      {
        "speedTestId": "1284392014819",
        "networkId": "N_24329156",
        "request": {
          "serial": "Q234-ABCD-5678",
          "interface": "wan1"
        },
        "results": {
          "speeds": {
            "average": 247.279
          }
        },
        "startedAt": "2021-12-08T20:07:13Z"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the speed tests for the given devices under this organization. Only valid for organizations with Meraki Insight.
> 
> **GET** `/organizations/{organizationId}/insight/speedTestResults`  
> 
> * * *

* * *

### applications

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-insight-application/)

#### Update an Insight tracked application

Operation ID: `updateOrganizationInsightApplication`

PATH _`/organizations/{organizationId}/insight/applications/{applicationId}`_

    {
      "applicationId": "19.12",
      "name": "Meraki HTTPS",
      "thresholds": {
        "type": "smart",
        "byNetwork": [
          {
            "networkId": "N_12345678",
            "goodput": 50000,
            "responseDuration": 1000
          }
        ]
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an Insight tracked application
> 
> **PUT** `/organizations/{organizationId}/insight/applications/{applicationId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an Insight tracked application
> 
> **DELETE** `/organizations/{organizationId}/insight/applications/{applicationId}`  
> 
> * * *

* * *

\[ organizations \]
-------------------

### webhooks

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-webhooks-http-servers/)

#### List the HTTP servers for this organization

Operation ID: `getOrganizationWebhooksHttpServers`

PATH _`/organizations/{organizationId}/webhooks/httpServers`_

    [
      {
        "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
        "name": "Example Webhook Server",
        "organizationId": "2930418",
        "url": "https://www.example.com/my_custom_webhook",
        "payloadTemplate": {
          "id": "wpt_00001",
          "name": "Meraki (included)"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the HTTP servers for this organization
> 
> **GET** `/organizations/{organizationId}/webhooks/httpServers`  
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
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-webhooks-http-server/)

#### Return an HTTP server for an organization

Operation ID: `getOrganizationWebhooksHttpServer`

PATH _`/organizations/{organizationId}/webhooks/httpServers/{id}`_

    {
      "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
      "name": "Example Webhook Server",
      "organizationId": "2930418",
      "url": "https://www.example.com/my_custom_webhook",
      "payloadTemplate": {
        "id": "wpt_00001",
        "name": "Meraki (included)"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an HTTP server for an organization
> 
> **GET** `/organizations/{organizationId}/webhooks/httpServers/{id}`  
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

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-webhooks-payload-templates/)

#### List the webhook payload templates for an organization

Operation ID: `getOrganizationWebhooksPayloadTemplates`

PATH _`/organizations/{organizationId}/webhooks/payloadTemplates`_

    [
      {
        "payloadTemplateId": "wpt_343",
        "type": "custom",
        "name": "Custom Template",
        "headers": [
          {
            "name": "Authorization",
            "template": "Bearer {{sharedSecret}}"
          }
        ],
        "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
        "sharing": {
          "byNetwork": {
            "withAll": true,
            "adminsCanModify": true,
            "ids": [
              "N_1234",
              "L_5678"
            ]
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the webhook payload templates for an organization
> 
> **GET** `/organizations/{organizationId}/webhooks/payloadTemplates`  
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
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-webhooks-payload-template/)

#### Get the webhook payload template for an organization

Operation ID: `getOrganizationWebhooksPayloadTemplate`

PATH _`/organizations/{organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`_

    {
      "payloadTemplateId": "wpt_343",
      "type": "custom",
      "name": "Custom Template",
      "headers": [
        {
          "name": "Authorization",
          "template": "Bearer {{sharedSecret}}"
        }
      ],
      "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
      "sharing": {
        "byNetwork": {
          "withAll": true,
          "adminsCanModify": true,
          "ids": [
            "N_1234",
            "L_5678"
          ]
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the webhook payload template for an organization
> 
> **GET** `/organizations/{organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`  
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
> * * *
> 
>   
> \- New endpoint
> 
> #### Destroy a webhook payload template for an organization. Does not work for included templates ('wpt\_00001', 'wpt\_00002', 'wpt\_00003', 'wpt\_00004', 'wpt\_00005', 'wpt\_00006', 'wpt\_00007' or 'wpt\_00008')
> 
> **DELETE** `/organizations/{organizationId}/webhooks/payloadTemplates/{payloadTemplateId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-webhooks-webhook-test/)

#### Send a test webhook for an organization

Operation ID: `createOrganizationWebhooksWebhookTest`

PATH _`/organizations/{organizationId}/webhooks/webhookTests`_

    {
      "id": "1234",
      "url": "https://www.example.com/path",
      "status": "enqueued"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Send a test webhook for an organization
> 
> **POST** `/organizations/{organizationId}/webhooks/webhookTests`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-webhooks-webhook-test/)

#### Return the status of a webhook test for an organization

Operation ID: `getOrganizationWebhooksWebhookTest`

PATH _`/organizations/{organizationId}/webhooks/webhookTests/{webhookTestId}`_

    {
      "id": "1234",
      "url": "https://www.example.com/path",
      "status": "enqueued"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the status of a webhook test for an organization
> 
> **GET** `/organizations/{organizationId}/webhooks/webhookTests/{webhookTestId}`  
> 
> * * *

* * *

### sase

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sase-batch/)

#### Retrieves a batch summary with aggregated job status counts

Operation ID: `getOrganizationSaseBatch`

PATH _`/organizations/{organizationId}/sase/batches/{batchId}`_

    {
      "batchId": "123",
      "batchType": "saseSiteEnroll",
      "status": "active",
      "counts": {
        "total": 100,
        "complete": 50,
        "failed": 10,
        "pending": 40
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Retrieves a batch summary with aggregated job status counts
> 
> **GET** `/organizations/{organizationId}/sase/batches/{batchId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sase-batch-jobs/)

#### List jobs within a batch, with optional status filtering

Operation ID: `getOrganizationSaseBatchJobs`

PATH _`/organizations/{organizationId}/sase/batches/{batchId}/jobs`_

    {
      "batchId": "123",
      "batchType": "saseSiteEnroll",
      "status": "active",
      "items": [
        {
          "id": "456",
          "type": "enroll_wired_site",
          "status": "complete",
          "error": "Job failed due to network timeout"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List jobs within a batch, with optional status filtering
> 
> **GET** `/organizations/{organizationId}/sase/batches/{batchId}/jobs`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-sase-integration/)

#### Create a new Secure Access integration

Operation ID: `createOrganizationSaseIntegration`

PATH _`/organizations/{organizationId}/sase/integrations`_

    {
      "integrated": {
        "by": {
          "admin": {
            "name": "John Doe"
          }
        },
        "at": "2025-04-01T12:00:00Z"
      },
      "lastUsedAt": "2025-04-01T12:00:00Z",
      "external": {
        "organization": {
          "id": "1234567890"
        }
      },
      "status": "active"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a new Secure Access integration
> 
> **POST** `/organizations/{organizationId}/sase/integrations`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sase-integration/)

#### Get details of a Secure Access integration

Operation ID: `getOrganizationSaseIntegration`

PATH _`/organizations/{organizationId}/sase/integrations/{integrationId}`_

    {
      "integrated": {
        "by": {
          "admin": {
            "name": "John Doe"
          }
        },
        "at": "2025-04-01T12:00:00Z"
      },
      "lastUsedAt": "2025-04-01T12:00:00Z",
      "external": {
        "organization": {
          "id": "1234567890"
        }
      },
      "status": "active"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get details of a Secure Access integration
> 
> **GET** `/organizations/{organizationId}/sase/integrations/{integrationId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Remove a Secure Access integration
> 
> **DELETE** `/organizations/{organizationId}/sase/integrations/{integrationId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sase-regions/)

#### List regions

Operation ID: `getOrganizationSaseRegions`

PATH _`/organizations/{organizationId}/sase/regions`_

    {
      "items": [
        {
          "connectorId": "123",
          "type": "CNHE",
          "name": "US West",
          "slug": "us-west-1"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List regions
> 
> **GET** `/organizations/{organizationId}/sase/regions`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sase-sites/)

#### List of enrolled SASE sites in this organization

Operation ID: `getOrganizationSaseSites`

PATH _`/organizations/{organizationId}/sase/sites`_

    {
      "items": [
        {
          "siteId": "1234",
          "network": {
            "id": "N_123"
          },
          "type": "Meraki spoke",
          "name": "London Office",
          "region": {
            "slug": "us-east-1"
          },
          "model": "MX95",
          "address": {
            "street": "123 Main St"
          },
          "vpn": {
            "type": "spoke"
          },
          "routing": {
            "defaultRoute": {
              "enabled": true
            }
          },
          "status": "good",
          "devices": [
            {
              "name": "cc:03:d9:01:00:0a",
              "model": "MX95"
            }
          ],
          "localNetworks": [
            {
              "subnet": "192.168.100.0/24"
            }
          ],
          "urlPrefix": "/London-Office/n/cEF-pd"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List of enrolled SASE sites in this organization
> 
> **GET** `/organizations/{organizationId}/sase/sites`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sase-sites-connectivity/)

#### List high-level SASE site statuses (healthy, degraded, offline)

Operation ID: `getOrganizationSaseSitesConnectivity`

PATH _`/organizations/{organizationId}/sase/sites/connectivity`_

    {
      "counts": {
        "byStatus": {
          "healthy": {
            "total": 3
          },
          "degraded": {
            "total": 3
          },
          "offline": {
            "total": 3
          }
        },
        "total": 9
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List high-level SASE site statuses (healthy, degraded, offline)
> 
> **GET** `/organizations/{organizationId}/sase/sites/connectivity`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sase-sites-connectivity-history/)

#### Get the connectivity history of SASE sites in this organization

Operation ID: `getOrganizationSaseSitesConnectivityHistory`

PATH _`/organizations/{organizationId}/sase/sites/connectivity/history`_

    {
      "items": [
        {
          "siteId": "123",
          "name": "Frontizo Network 1",
          "history": [
            {
              "id": "123",
              "status": "good",
              "timestamp": "2022-11-08T00:00:00Z"
            }
          ],
          "devices": {
            "primary": {
              "id": "234",
              "statuses": [
                {
                  "id": "234",
                  "status": "good",
                  "timestamp": "2022-11-08T00:00:00Z"
                }
              ]
            },
            "spare": {
              "id": "345",
              "statuses": [
                {
                  "id": "345",
                  "status": "bad tunnel",
                  "timestamp": "2022-11-08T00:15:00Z"
                }
              ]
            }
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the connectivity history of SASE sites in this organization
> 
> **GET** `/organizations/{organizationId}/sase/sites/connectivity/history`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/detach-organization-sase-sites/)

#### Detach sites in this organization from Secure Access

Operation ID: `detachOrganizationSaseSites`

PATH _`/organizations/{organizationId}/sase/sites/detach`_

    {
      "items": [
        {
          "action": "detach",
          "status": "complete",
          "message": "Job is pending or already enqueued",
          "request": {
            "siteId": "1520758"
          }
        }
      ],
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Detach sites in this organization from Secure Access. This will remove the sites from Secure Access.
> 
> **DELETE** `/organizations/{organizationId}/sase/sites/detach`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/enroll-organization-sase-sites/)

#### Enroll sites in this organization to Secure Access

Operation ID: `enrollOrganizationSaseSites`

PATH _`/organizations/{organizationId}/sase/sites/enroll`_

    {
      "items": [
        {
          "action": "enroll",
          "status": "complete",
          "message": "Job is pending or already enqueued",
          "request": {
            "siteId": "1520758",
            "regionId": "42"
          }
        }
      ],
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enroll sites in this organization to Secure Access. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.
> 
> **POST** `/organizations/{organizationId}/sase/sites/enroll`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-sase-site/)

#### Update the configuration for a site

Operation ID: `updateOrganizationSaseSite`

PATH _`/organizations/{organizationId}/sase/sites/{siteId}`_

    {
      "siteId": "1234",
      "network": {
        "id": "N_123"
      },
      "type": "Meraki spoke",
      "name": "London Office",
      "region": {
        "slug": "us-east-1"
      },
      "model": "MX95",
      "address": {
        "street": "123 Main St"
      },
      "vpn": {
        "type": "spoke"
      },
      "routing": {
        "defaultRoute": {
          "enabled": true
        }
      },
      "status": "good",
      "devices": [
        {
          "name": "cc:03:d9:01:00:0a",
          "model": "MX95"
        }
      ],
      "localNetworks": [
        {
          "subnet": "192.168.100.0/24"
        }
      ],
      "urlPrefix": "/London-Office/n/cEF-pd"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the configuration for a site. Currently, only supports updating default route enablement.
> 
> **PUT** `/organizations/{organizationId}/sase/sites/{siteId}`  
> 
> * * *

* * *

### policies

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-policies-global-firewall-application-categories/)

#### List application categories with their associated applications

Operation ID: `getOrganizationPoliciesGlobalFirewallApplicationCategories`

PATH _`/organizations/{organizationId}/policies/global/firewall/applicationCategories`_

    [
      {
        "id": "meraki:layer7/category/1",
        "name": "Email",
        "applications": [
          {
            "id": "meraki:layer7/application/4",
            "name": "Gmail",
            "nbar": {
              "mappings": [
                {
                  "id": 1658
                }
              ]
            }
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List application categories with their associated applications
> 
> **GET** `/organizations/{organizationId}/policies/global/firewall/applicationCategories`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-policies-global-firewall-rulesets/)

#### List Organization-Wide Policy Firewall Rulesets

Operation ID: `getOrganizationPoliciesGlobalFirewallRulesets`

PATH _`/organizations/{organizationId}/policies/global/firewall/rulesets`_

    {
      "items": [
        {
          "rulesetId": "123",
          "name": "Block Social Media",
          "description": "Block all Social Media",
          "createdAt": "2021-01-01T00:00:00Z",
          "lastUpdatedAt": "2021-01-01T00:00:00Z"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 12,
            "remaining": 2
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policy Firewall Rulesets
> 
> **GET** `/organizations/{organizationId}/policies/global/firewall/rulesets`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create an Organization-Wide Policy Firewall Ruleset
> 
> **POST** `/organizations/{organizationId}/policies/global/firewall/rulesets`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-policies-global-firewall-rulesets-rule/)

#### Create an Organization-Wide Policy Firewall Rule

Operation ID: `createOrganizationPoliciesGlobalFirewallRulesetsRule`

PATH _`/organizations/{organizationId}/policies/global/firewall/rulesets/rules`_

    {
      "ruleId": "123",
      "name": "Allow developers",
      "rulesetId": "32",
      "policy": "deny",
      "enabled": true,
      "priority": 100,
      "description": "This is rule 1",
      "sources": {
        "matchCriteria": [
          "addressRanges",
          "ports",
          "policyObjects",
          "policyObjectGroups",
          "applianceVlans"
        ],
        "criteria": {
          "addressRanges": [
            "1.1.1.1",
            "2.2.2.2"
          ],
          "ports": [
            "22",
            "42-46"
          ],
          "policyObjects": [
            {
              "id": "23"
            }
          ],
          "policyObjectGroups": [
            {
              "id": "45"
            }
          ],
          "applianceVlans": [
            {
              "interfaceId": "L_123456789012345678_vlan_200"
            }
          ],
          "siteSpecificVlans": [
            {
              "id": 100,
              "address": {
                "offsets": {
                  "ipv4": 25,
                  "ipv6": "0:ff:fe01:0"
                }
              }
            }
          ]
        }
      },
      "destinations": {
        "matchCriteria": [
          "addressRanges",
          "services",
          "applicationCategories",
          "applications",
          "policyObjects",
          "policyObjectGroups",
          "applianceVlans"
        ],
        "criteria": {
          "addressRanges": [
            "1.1.1.1",
            "2.2.2.2"
          ],
          "ports": [
            "22",
            "42-46"
          ],
          "services": [
            {
              "protocol": "tcp",
              "ports": [
                "80",
                "443"
              ]
            }
          ],
          "applicationCategories": [
            {
              "id": "meraki:layer7/category/24"
            }
          ],
          "applications": [
            {
              "id": "meraki:layer7/application/5",
              "name": "Advertising.com"
            }
          ],
          "policyObjects": [
            {
              "id": "23"
            }
          ],
          "policyObjectGroups": [
            {
              "id": "45"
            }
          ],
          "applianceVlans": [
            {
              "interfaceId": "L_123456789012345678_vlan_200"
            }
          ],
          "countries": [
            {
              "code": "US"
            }
          ],
          "fqdns": [
            "*.example.com"
          ],
          "siteSpecificVlans": [
            {
              "id": 100,
              "address": {
                "offsets": {
                  "ipv4": 25,
                  "ipv6": "0:ff:fe01:0"
                }
              }
            }
          ]
        }
      },
      "createdAt": "2021-01-01T00:00:00Z",
      "lastUpdatedAt": "2021-01-01T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policy Firewall Rules
> 
> **GET** `/organizations/{organizationId}/policies/global/firewall/rulesets/rules`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create an Organization-Wide Policy Firewall Rule
> 
> **POST** `/organizations/{organizationId}/policies/global/firewall/rulesets/rules`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-policies-global-firewall-rulesets-rule/)

#### Delete an Organization-Wide Policy Firewall Rule

Operation ID: `deleteOrganizationPoliciesGlobalFirewallRulesetsRule`

PATH _`/organizations/{organizationId}/policies/global/firewall/rulesets/rules/{ruleId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an Organization-Wide Policy Firewall Rule
> 
> **PUT** `/organizations/{organizationId}/policies/global/firewall/rulesets/rules/{ruleId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an Organization-Wide Policy Firewall Rule
> 
> **DELETE** `/organizations/{organizationId}/policies/global/firewall/rulesets/rules/{ruleId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-policies-global-firewall-ruleset/)

#### Update an Organization-Wide Policy Firewall Ruleset

Operation ID: `updateOrganizationPoliciesGlobalFirewallRuleset`

PATH _`/organizations/{organizationId}/policies/global/firewall/rulesets/{rulesetId}`_

    {
      "rulesetId": "123",
      "name": "Block Social Media",
      "description": "Block all Social Media",
      "createdAt": "2021-01-01T00:00:00Z",
      "lastUpdatedAt": "2021-01-01T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an Organization-Wide Policy Firewall Ruleset
> 
> **PUT** `/organizations/{organizationId}/policies/global/firewall/rulesets/{rulesetId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an Organization-Wide Policy Firewall Ruleset
> 
> **DELETE** `/organizations/{organizationId}/policies/global/firewall/rulesets/{rulesetId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-policies-global-group-policies/)

#### List Organization-Wide Policies

Operation ID: `getOrganizationPoliciesGlobalGroupPolicies`

PATH _`/organizations/{organizationId}/policies/global/group/policies`_

    {
      "items": [
        {
          "policyId": "123",
          "name": "My policy",
          "description": "My policy description",
          "group": {
            "number": 100
          },
          "createdAt": "2021-01-01T00:00:00Z",
          "lastUpdatedAt": "2021-01-01T00:00:00Z"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 12,
            "remaining": 2
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policies
> 
> **GET** `/organizations/{organizationId}/policies/global/group/policies`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create an Organization-Wide Policy
> 
> **POST** `/organizations/{organizationId}/policies/global/group/policies`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/assign-organization-policies-global-group-policies-adaptive-policy-groups/)

#### Assign adaptive policy groups to a policy

Operation ID: `assignOrganizationPoliciesGlobalGroupPoliciesAdaptivePolicyGroups`

PATH _`/organizations/{organizationId}/policies/global/group/policies/adaptivePolicyGroups/assign`_

    {
      "success": true
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Assign adaptive policy groups to a policy
> 
> **POST** `/organizations/{organizationId}/policies/global/group/policies/adaptivePolicyGroups/assign`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-policies-global-group-policies-adaptive-policy-groups-assignments/)

#### List adaptive policy group assignments

Operation ID: `getOrganizationPoliciesGlobalGroupPoliciesAdaptivePolicyGroupsAssignments`

PATH _`/organizations/{organizationId}/policies/global/group/policies/adaptivePolicyGroups/assignments`_

    {
      "items": [
        {
          "assignmentId": "assignment_123",
          "policyId": "policy_456",
          "adaptivePolicyGroupId": "1234"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 25,
            "remaining": 15
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List adaptive policy group assignments
> 
> **GET** `/organizations/{organizationId}/policies/global/group/policies/adaptivePolicyGroups/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/remove-organization-policies-global-group-policies-adaptive-policy-groups/)

#### Remove adaptive policy groups from a policy

Operation ID: `removeOrganizationPoliciesGlobalGroupPoliciesAdaptivePolicyGroups`

PATH _`/organizations/{organizationId}/policies/global/group/policies/adaptivePolicyGroups/remove`_

    {
      "success": true
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Remove adaptive policy groups from a policy
> 
> **POST** `/organizations/{organizationId}/policies/global/group/policies/adaptivePolicyGroups/remove`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-policies-global-group-policies-firewall-rulesets-assignments/)

#### List Organization-Wide Policy Ruleset Assignments

Operation ID: `getOrganizationPoliciesGlobalGroupPoliciesFirewallRulesetsAssignments`

PATH _`/organizations/{organizationId}/policies/global/group/policies/firewall/rulesets/assignments`_

    {
      "items": [
        {
          "assignmentId": "123",
          "rulesetId": "456",
          "policyId": "789",
          "priority": 0,
          "createdAt": "2021-01-01T00:00:00Z",
          "lastUpdatedAt": "2021-01-01T00:00:00Z"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 15,
            "remaining": 5
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policy Ruleset Assignments
> 
> **GET** `/organizations/{organizationId}/policies/global/group/policies/firewall/rulesets/assignments`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create an Organization-Wide Policy Ruleset Assignment
> 
> **POST** `/organizations/{organizationId}/policies/global/group/policies/firewall/rulesets/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-policies-global-group-policies-firewall-rulesets-assignment/)

#### Update an Organization-Wide Policy Ruleset Assignment

Operation ID: `updateOrganizationPoliciesGlobalGroupPoliciesFirewallRulesetsAssignment`

PATH _`/organizations/{organizationId}/policies/global/group/policies/firewall/rulesets/assignments/{assignmentId}`_

    {
      "assignmentId": "123",
      "rulesetId": "456",
      "policyId": "789",
      "priority": 0,
      "createdAt": "2021-01-01T00:00:00Z",
      "lastUpdatedAt": "2021-01-01T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an Organization-Wide Policy Ruleset Assignment
> 
> **PUT** `/organizations/{organizationId}/policies/global/group/policies/firewall/rulesets/assignments/{assignmentId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an Organization-Wide Policy Ruleset Assignment
> 
> **DELETE** `/organizations/{organizationId}/policies/global/group/policies/firewall/rulesets/assignments/{assignmentId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-policies-global-group-policy/)

#### Update an Organization-Wide Policy

Operation ID: `updateOrganizationPoliciesGlobalGroupPolicy`

PATH _`/organizations/{organizationId}/policies/global/group/policies/{policyId}`_

    {
      "policyId": "123",
      "name": "My policy",
      "description": "My policy description",
      "group": {
        "number": 100
      },
      "createdAt": "2021-01-01T00:00:00Z",
      "lastUpdatedAt": "2021-01-01T00:00:00Z"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an Organization-Wide Policy
> 
> **PUT** `/organizations/{organizationId}/policies/global/group/policies/{policyId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an Organization-Wide Policy
> 
> **DELETE** `/organizations/{organizationId}/policies/global/group/policies/{policyId}`  
> 
> * * *

* * *

### extensions

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-extensions-sdwanmanager-interconnect/)

#### Update name and status of an Interconnect

Operation ID: `updateOrganizationExtensionsSdwanmanagerInterconnect`

PATH _`/organizations/{organizationId}/extensions/sdwanmanager/interconnects/{interconnectId}`_

    {
      "id": "12345",
      "name": "My Interconnect",
      "status": "active",
      "type": "Catalyst SD-WAN",
      "vpnCount": 1,
      "tunnelCount": 4,
      "asNum": 12345,
      "networkId": "N_12345",
      "wiredId": "123456",
      "networkLocaleId": "L_12345",
      "createdAt": "2024-02-11T00:00:00Z",
      "internalSubnets": [
        "169.254.250.0/30",
        "169.254.250.4/30"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update name and status of an Interconnect
> 
> **PUT** `/organizations/{organizationId}/extensions/sdwanmanager/interconnects/{interconnectId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-extensions-thousand-eyes-networks/)

#### List the ThousandEyes agent configurations under this organization

Operation ID: `getOrganizationExtensionsThousandEyesNetworks`

PATH _`/organizations/{organizationId}/extensions/thousandEyes/networks`_

    [
      {
        "networkId": "N_24329156",
        "enabled": true,
        "agentId": "12345"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the ThousandEyes agent configurations under this organization. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **GET** `/organizations/{organizationId}/extensions/thousandEyes/networks`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Add a ThousandEyes agent for this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **POST** `/organizations/{organizationId}/extensions/thousandEyes/networks`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-extensions-thousand-eyes-networks-supported/)

#### List all the networks eligible for ThousandEyes agent activation under this organization.

Operation ID: `getOrganizationExtensionsThousandEyesNetworksSupported`

PATH _`/organizations/{organizationId}/extensions/thousandEyes/networks/supported`_

    [
      {
        "networkId": "N_24329156",
        "name": "Main Office",
        "tags": [
          "tag1",
          "tag2"
        ],
        "device": {
          "model": "MX105",
          "firmware": {
            "currentVersion": {
              "shortName": "MX 18.104"
            }
          },
          "agent": {
            "isInstalled": false
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List all the networks eligible for ThousandEyes agent activation under this organization.
> 
> **GET** `/organizations/{organizationId}/extensions/thousandEyes/networks/supported`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-extensions-thousand-eyes-network/)

#### List the ThousandEyes agent configuration under this network

Operation ID: `getOrganizationExtensionsThousandEyesNetwork`

PATH _`/organizations/{organizationId}/extensions/thousandEyes/networks/{networkId}`_

    {
      "networkId": "N_24329156",
      "enabled": true,
      "agentId": "12345"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the ThousandEyes agent configuration under this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **GET** `/organizations/{organizationId}/extensions/thousandEyes/networks/{networkId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **PUT** `/organizations/{organizationId}/extensions/thousandEyes/networks/{networkId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **DELETE** `/organizations/{organizationId}/extensions/thousandEyes/networks/{networkId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-extensions-thousand-eyes-test/)

#### Create a ThousandEyes test based on a provided test template

Operation ID: `createOrganizationExtensionsThousandEyesTest`

PATH _`/organizations/{organizationId}/extensions/thousandEyes/tests`_

    {
      "jobStatus": "new",
      "pccBackgroundJob": "13289785"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a ThousandEyes test based on a provided test template. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **POST** `/organizations/{organizationId}/extensions/thousandEyes/tests`  
> 
> * * *

* * *

### cloud

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-cloud-connectivity-requirements/)

#### List of source/destination traffic rules

Operation ID: `getOrganizationCloudConnectivityRequirements`

PATH _`/organizations/{organizationId}/cloud/connectivity/requirements`_

    [
      {
        "description": "Meraki cloud communication",
        "productTypes": [
          "appliance",
          "wireless",
          "camera",
          "switch"
        ],
        "rule": {
          "sources": {
            "includeAddressesInYourNetworks": false,
            "addresses": [
              {
                "type": "ipv4",
                "address": "209.206.48.0/20"
              }
            ]
          },
          "destinations": {
            "includeAddressesInYourNetworks": false,
            "includeAnyAddress": false,
            "addresses": [
              {
                "type": "fqdn",
                "address": "webhook.site"
              }
            ]
          },
          "ports": [
            {
              "port": "443",
              "protocols": [
                "TCP"
              ]
            }
          ]
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List of source/destination traffic rules
> 
> **GET** `/organizations/{organizationId}/cloud/connectivity/requirements`  
> 
> * * *

* * *

### certificates

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-certificates/)

#### Gets all or specific certificates for an organization

Operation ID: `getOrganizationCertificates`

PATH _`/organizations/{organizationId}/certificates`_

    {
      "certificateId": "1284392014819",
      "description": "friendly description",
      "parentCertificateId": "1284392014818",
      "source": "NAC",
      "fields": {
        "validity": {
          "start": "2022-09-01T12:00:00Z",
          "end": "2022-10-01T12:00:00Z"
        },
        "subject": {
          "commonName": "subjectRoot",
          "organizationalUnit": "CloudNAC",
          "organization": "Cisco Systems",
          "locality": "Bangalore",
          "state": "KA",
          "country": "IN"
        },
        "subjectAlternativeName": "AAA Certificate Services Hidden Certificate",
        "issuer": {
          "commonName": "issuerRoot",
          "organizationalUnit": "CloudNAC",
          "organization": "Cisco Systems",
          "locality": "Bangalore",
          "state": "KA",
          "country": "IN"
        },
        "serial": "7C 08 29 E8 CC",
        "policy": "policy string here",
        "version": "1.2.3.4",
        "signatureAlgorithmId": "SHA256withRSA",
        "publicKeyAlgorithm": "RSA",
        "keyUsage": {
          "isCritical": false,
          "data": [
            "Digital Signature",
            "Key Encipherment"
          ]
        },
        "hashes": [
          {
            "algorithm": "SHA1",
            "hash": "hash text here"
          }
        ]
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Gets all or specific certificates for an organization
> 
> **GET** `/organizations/{organizationId}/certificates`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/import-organization-certificates/)

#### Import certificate for this organization

Operation ID: `importOrganizationCertificates`

PATH _`/organizations/{organizationId}/certificates/import`_

    {
      "certificateId": "1284392014819",
      "description": "friendly description",
      "parentCertificateId": "1284392014818",
      "source": "NAC",
      "fields": {
        "validity": {
          "start": "2022-09-01T12:00:00Z",
          "end": "2022-10-01T12:00:00Z"
        },
        "subject": {
          "commonName": "subjectRoot",
          "organizationalUnit": "CloudNAC",
          "organization": "Cisco Systems",
          "locality": "Bangalore",
          "state": "KA",
          "country": "IN"
        },
        "subjectAlternativeName": "AAA Certificate Services Hidden Certificate",
        "issuer": {
          "commonName": "issuerRoot",
          "organizationalUnit": "CloudNAC",
          "organization": "Cisco Systems",
          "locality": "Bangalore",
          "state": "KA",
          "country": "IN"
        },
        "serial": "7C 08 29 E8 CC",
        "policy": "policy string here",
        "version": "1.2.3.4",
        "signatureAlgorithmId": "SHA256withRSA",
        "publicKeyAlgorithm": "RSA",
        "keyUsage": {
          "isCritical": false,
          "data": [
            "Digital Signature",
            "Key Encipherment"
          ]
        },
        "hashes": [
          {
            "algorithm": "SHA1",
            "hash": "hash text here"
          }
        ]
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Import certificate for this organization
> 
> **POST** `/organizations/{organizationId}/certificates/import`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-certificates-meraki-auth-contents/)

#### Download the public RADIUS certificate.

Operation ID: `getOrganizationCertificatesMerakiAuthContents`

PATH _`/organizations/{organizationId}/certificates/merakiAuth/contents`_

    {
      "contents": "-----BEGIN CERTIFICATE-----\nContents of cert \n-----END CERTIFICATE-----",
      "readMe": ""
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Download the public RADIUS certificate.
> 
> **GET** `/organizations/{organizationId}/certificates/merakiAuth/contents`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-certificate/)

#### Delete a certificate for an organization

Operation ID: `deleteOrganizationCertificate`

PATH _`/organizations/{organizationId}/certificates/{certificateId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a certificate's description for an organization
> 
> **PUT** `/organizations/{organizationId}/certificates/{certificateId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a certificate for an organization
> 
> **DELETE** `/organizations/{organizationId}/certificates/{certificateId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-certificate-contents/)

#### Download the trusted certificate by certificate id.

Operation ID: `getOrganizationCertificateContents`

PATH _`/organizations/{organizationId}/certificates/{certificateId}/contents`_

    {
      "contents": "-----BEGIN CERTIFICATE-----MIIHvjCCBqagAwIBAgIQB4CbtQD3es3UQ988CCKGPjANBgkqhkiG9w0BAQsFADBPMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMSkwJwYDVQQDEyBEaWdpQ2VydCBUTFMgUlNBIFNIQTI1NiAyMDIwIENBMTAeFw0yMjA4MTAwMDAwMDBaFw0yMzA4MDkyMzU5NTlaMG4xCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1TYW4gRnJhbmNpc2NvMRMwEQYDVQQKEwpNZXJha2kgTExDMR0wGwYDVQQDExRyYWRpdXMuZGV2LmlrYXJlbS5pbzCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBANSxcK8g9J3nRwDqNurYbXDieo5vHw5wWO4m3uJSvWtQ+zDMZzjEhA6ix3VfftGLLE+0C99a9B2oOubZgO/sAIJmLD6Oz25bUinAtzuEmOQiqZ8OZjYZd//emPOty7POZSU5C3rGUX0ESzrStL20iJoGzyA0U9clI+14yZCyXY1+Th3VSQCvGs/DmOMPn+MdBoMXIgzVk7+wjMr53fN6H8Q26y52NlLTmAxum2L7ag4owTecURzC6-----END CERTIFICATE-----"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Download the trusted certificate by certificate id.
> 
> **GET** `/organizations/{organizationId}/certificates/{certificateId}/contents`  
> 
> * * *

* * *

### auth

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-auth-radius-servers/)

#### List the organization-wide RADIUS servers in the organization

Operation ID: `getOrganizationAuthRadiusServers`

PATH _`/organizations/{organizationId}/auth/radius/servers`_

    [
      {
        "serverId": "42",
        "name": "HQ RADIUS server",
        "address": "1.2.3.4",
        "modes": [
          {
            "mode": "auth",
            "port": 1812
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the organization-wide RADIUS servers in the organization
> 
> **GET** `/organizations/{organizationId}/auth/radius/servers`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Add an organization-wide RADIUS server
> 
> **POST** `/organizations/{organizationId}/auth/radius/servers`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-auth-radius-servers-assignments/)

#### Return list of network and policies that organization-wide RADIUS servers are bing used

Operation ID: `getOrganizationAuthRadiusServersAssignments`

PATH _`/organizations/{organizationId}/auth/radius/servers/assignments`_

    {
      "serverId": "42",
      "name": "HQ RADIUS server",
      "assignments": [
        {
          "network": {
            "id": "L_1234",
            "eid": "L_1234",
            "tag": "San-Francisco",
            "name": "San Francisco Office",
            "dashboardUrl": "https://n1.meraki.dev.ikram.io/tag/n/1234/manage/nodes/list"
          },
          "assignee": {
            "type": "Access policy",
            "id": "42",
            "name": "Access policy #42",
            "dashboardUrl": "https://n1.meraki.dev.ikram.io/tag/n/1234/manage/configure/switch_access"
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return list of network and policies that organization-wide RADIUS servers are bing used
> 
> **GET** `/organizations/{organizationId}/auth/radius/servers/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-auth-radius-server/)

#### Return an organization-wide RADIUS server

Operation ID: `getOrganizationAuthRadiusServer`

PATH _`/organizations/{organizationId}/auth/radius/servers/{serverId}`_

    {
      "serverId": "42",
      "name": "HQ RADIUS server",
      "address": "1.2.3.4",
      "modes": [
        {
          "mode": "auth",
          "port": 1812
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an organization-wide RADIUS server
> 
> **GET** `/organizations/{organizationId}/auth/radius/servers/{serverId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update an organization-wide RADIUS server
> 
> **PUT** `/organizations/{organizationId}/auth/radius/servers/{serverId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an organization-wide RADIUS server from a organization
> 
> **DELETE** `/organizations/{organizationId}/auth/radius/servers/{serverId}`  
> 
> * * *

* * *

### workflows

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-workflows/)

#### Return workflows filtered by organization ID, network ID, type, and category

Operation ID: `getOrganizationAssuranceWorkflows`

PATH _`/organizations/{organizationId}/assurance/workflows`_

    [
      {
        "id": "workflow1",
        "organizationId": "org1",
        "network": {
          "id": "L_123456",
          "name": "Network 1"
        },
        "scopeId": "scope123",
        "type": "type1",
        "categoryType": "category1",
        "scopeType": "scope1",
        "workflowState": "active",
        "timestamp": "2025-04-14T12:00:00Z",
        "networkTags": [
          "tag1",
          "tag2"
        ],
        "clientTags": [
          "clientTag1",
          "clientTag2"
        ],
        "nodeTags": [
          "nodeTag1",
          "nodeTag2"
        ],
        "resolvedAt": "2018-02-11T00:00:00.090210Z",
        "impacts": [
          {
            "name": "clients",
            "value": 12.5
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Return workflows filtered by organization ID, network ID, type, and category
> 
> **GET** `/organizations/{organizationId}/assurance/workflows`  
> 
> * * *

* * *

### thousandEyes

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-thousand-eyes-applications/)

#### Get a list of Thousand Eyes applications with their alerts.

Operation ID: `getOrganizationAssuranceThousandEyesApplications`

PATH _`/organizations/{organizationId}/assurance/thousandEyes/applications`_

    [
      {
        "selectedClient": "k2349",
        "applications": [
          {
            "appId": "1001.12",
            "testId": "123456",
            "description": "Cisco WebEx",
            "tagName": "Box",
            "impactedClientsTotalCount": 3,
            "networkImpactedClientsCount": 3,
            "applicationImpactedClientsCount": 3,
            "issues": [
              {
                "alertId": "webex",
                "impactedClients": 3,
                "type": "application",
                "message": "Error: '503 Service Unavailable'",
                "startTime": "2024-01-11 19:04:08",
                "endTime": "2024-01-11 21:04:08",
                "impactingSelectedClient": false
              }
            ]
          }
        ],
        "score": {
          "score": 87,
          "change": -12
        },
        "agent": {
          "deployed": true,
          "enabled": true
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get a list of Thousand Eyes applications with their alerts.
> 
> **GET** `/organizations/{organizationId}/assurance/thousandEyes/applications`  
> 
> * * *

* * *

### scores

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-scores/)

#### Get network health scores for a list of networks.

Operation ID: `getOrganizationAssuranceScores`

PATH _`/organizations/{organizationId}/assurance/scores`_

    [
      {
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "trend": 2,
        "score": 90,
        "byInterval": [
          {
            "ts": 1526087474,
            "score": 90,
            "byCategory": [
              {
                "name": "clients",
                "score": 90
              }
            ]
          }
        ],
        "byCategory": [
          {
            "name": "clients",
            "score": 90,
            "trend": 2,
            "bySubcategory": [
              {
                "name": "wireless",
                "score": 90,
                "trend": 2,
                "weight": {
                  "count": 10,
                  "percentage": 0.9,
                  "description": "wireless onboarding attempts"
                }
              }
            ]
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get network health scores for a list of networks.
> 
> **GET** `/organizations/{organizationId}/assurance/scores`  
> 
> * * *

* * *

### productAnnouncements

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-product-announcements/)

#### Gets relevant product announcements for a user

Operation ID: `getOrganizationAssuranceProductAnnouncements`

PATH _`/organizations/{organizationId}/assurance/productAnnouncements`_

    {
      "items": [
        {
          "id": "123",
          "boardId": "new-features",
          "title": "Cisco Meraki India Region cloud now in GA",
          "url": "https://community.meraki.com/t5/Feature-Announcements/Cisco-Meraki-India-Region-cloud-now-in-GA/ba-p/259490",
          "snippet": "As part of our ongoing commitment to the cloud and helping customers meet their local data storage needs, we are excited to announce that Cisco Meraki India Region cloud is now released in GA (Genera...",
          "publishedAt": "2018-02-11T00:00:00.090210Z",
          "editedAt": "2018-02-11T00:00:00.090210Z",
          "labels": [
            {
              "id": "1",
              "name": "Features"
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Gets relevant product announcements for a user
> 
> **GET** `/organizations/{organizationId}/assurance/productAnnouncements`  
> 
> * * *

* * *

### optimization

[Docs](https://developer.cisco.com/meraki/api-v1/checkup-organization-assurance-optimization/)

#### Returns an array of checkup results for the organization

Operation ID: `checkupOrganizationAssuranceOptimization`

PATH _`/organizations/{organizationId}/assurance/optimization/checkup`_

    {
      "items": [
        {
          "scope": "Dashboard",
          "rules": [
            {
              "id": "PASSWORD_EXPIRY",
              "name": "Short-lived passwords",
              "description": "Passwords are recommended to expire periodically to reduce the window of opportunity for unauthorized access in case of compromised credentials.",
              "documentation": {
                "pageName": "Documentation",
                "pageUrl": "https://documentation.meraki.com"
              },
              "assessments": [
                {
                  "status": "recommendation",
                  "networkIds": [
                    "N_24329156"
                  ]
                }
              ],
              "resolutions": [
                {
                  "pageName": "Organization settings",
                  "pageUrl": "https://url.com"
                }
              ]
            }
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns an array of checkup results for the organization
> 
> **GET** `/organizations/{organizationId}/assurance/optimization/checkup`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-optimization-checkup-by-network/)

#### Returns an array of checkup results for the networks

Operation ID: `getOrganizationAssuranceOptimizationCheckupByNetwork`

PATH _`/organizations/{organizationId}/assurance/optimization/checkup/byNetwork`_

    {
      "items": [
        {
          "scope": "Dashboard",
          "rules": [
            {
              "id": "PASSWORD_EXPIRY",
              "name": "Short-lived passwords",
              "description": "Passwords are recommended to expire periodically to reduce the window of opportunity for unauthorized access in case of compromised credentials.",
              "documentation": {
                "pageName": "Documentation",
                "pageUrl": "https://documentation.meraki.com"
              },
              "assessments": [
                {
                  "status": "recommendation",
                  "networkIds": [
                    "N_24329156"
                  ]
                }
              ],
              "resolutions": [
                {
                  "pageName": "Organization settings",
                  "pageUrl": "https://url.com"
                }
              ]
            }
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns an array of checkup results for the networks
> 
> **GET** `/organizations/{organizationId}/assurance/optimization/checkup/byNetwork`  
> 
> * * *

* * *

### fetchTableQuery

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-fetch-table-query/)

#### Returns the table data for a given timespan

Operation ID: `getOrganizationAssuranceFetchTableQuery`

PATH _`/organizations/{organizationId}/assurance/fetchTableQuery`_

    {}

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns the table data for a given timespan
> 
> **GET** `/organizations/{organizationId}/assurance/fetchTableQuery`  
> 
> * * *

* * *

### apiRequests

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-api-requests-response-codes-history-by-admin/)

#### Lists API request response codes and their counts aggregated by admin

Operation ID: `getOrganizationApiRequestsResponseCodesHistoryByAdmin`

PATH _`/organizations/{organizationId}/apiRequests/responseCodes/history/byAdmin`_

    [
      {
        "adminId": "1738",
        "name": "Admin Name",
        "email": "email@example.com",
        "overall": {
          "counts": {
            "byCode": [
              {
                "code": 200,
                "total": 100
              }
            ],
            "total": 100
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Lists API request response codes and their counts aggregated by admin
> 
> **GET** `/organizations/{organizationId}/apiRequests/responseCodes/history/byAdmin`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-api-requests-response-codes-history-by-application/)

#### Lists API request response codes and their counts aggregated by application

Operation ID: `getOrganizationApiRequestsResponseCodesHistoryByApplication`

PATH _`/organizations/{organizationId}/apiRequests/responseCodes/history/byApplication`_

    [
      {
        "userAgentString": "google/chrome",
        "name": "My favorite OAuth app",
        "overall": {
          "counts": {
            "byCode": [
              {
                "code": 200,
                "total": 100
              }
            ],
            "total": 100
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Lists API request response codes and their counts aggregated by application
> 
> **GET** `/organizations/{organizationId}/apiRequests/responseCodes/history/byApplication`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-api-requests-response-codes-history-by-operation/)

#### Aggregates API usage data by operationId

Operation ID: `getOrganizationApiRequestsResponseCodesHistoryByOperation`

PATH _`/organizations/{organizationId}/apiRequests/responseCodes/history/byOperation`_

    [
      {
        "operationId": "getNetworkClients",
        "overall": {
          "counts": {
            "byCode": [
              {
                "code": 200,
                "total": 100
              }
            ],
            "total": 100
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Aggregates API usage data by operationId
> 
> **GET** `/organizations/{organizationId}/apiRequests/responseCodes/history/byOperation`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-api-requests-response-codes-history-by-source-ip/)

#### Aggregates API usage by source ip

Operation ID: `getOrganizationApiRequestsResponseCodesHistoryBySourceIp`

PATH _`/organizations/{organizationId}/apiRequests/responseCodes/history/bySourceIp`_

    [
      {
        "sourceIp": "123.123.123.1",
        "overall": {
          "counts": {
            "byCode": [
              {
                "code": 200,
                "total": 100
              }
            ],
            "total": 100
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Aggregates API usage by source ip
> 
> **GET** `/organizations/{organizationId}/apiRequests/responseCodes/history/bySourceIp`  
> 
> * * *

* * *

### snmp

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-snmp-traps-by-network/)

#### Retrieve the SNMP trap configuration for the networks in an organization

Operation ID: `getOrganizationSnmpTrapsByNetwork`

PATH _`/organizations/{organizationId}/snmp/traps/byNetwork`_

    [
      {
        "network": {
          "id": "N_12345678",
          "name": "networkName"
        },
        "mode": "v3",
        "receiver": {
          "address": "1.1.1.1",
          "port": "1234"
        },
        "v2": {
          "community": "public"
        },
        "v3": {
          "users": [
            {
              "name": "merakian"
            }
          ]
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Retrieve the SNMP trap configuration for the networks in an organization
> 
> **GET** `/organizations/{organizationId}/snmp/traps/byNetwork`  
> 
> * * *

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-devices-statuses-overview/)

#### Returns counts of online, offline, and recovered devices by product type, along with offline intervals for impacted devices in the organization.

Operation ID: `getOrganizationAssuranceDevicesStatusesOverview`

PATH _`/organizations/{organizationId}/assurance/devices/statuses/overview`_

    {
      "byProductType": [
        {
          "productType": "wireless",
          "online": 10,
          "offline": 5,
          "recovered": 3
        }
      ],
      "byImpactedDevice": [
        {
          "network": {
            "name": "Office HQ",
            "id": "L_123"
          },
          "device": {
            "name": "Lobby AP",
            "serial": "QXXX-YYYY-ZZZ0",
            "mac": "aa:bb:cc:dd:ee:ff",
            "productType": "wireless"
          },
          "offlineIntervals": [
            {
              "startTs": "2025-03-20T20:24:42.285237Z",
              "endTs": "2025-03-20T21:30:55.691996Z"
            }
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns counts of online, offline, and recovered devices by product type, along with offline intervals for impacted devices in the organization.
> 
> **GET** `/organizations/{organizationId}/assurance/devices/statuses/overview`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-boots-history/)

#### Returns the history of device boots in reverse chronological order (most recent first)

Operation ID: `getOrganizationDevicesBootsHistory`

PATH _`/organizations/{organizationId}/devices/boots/history`_

    [
      {
        "serial": "Q234-ABCD-5678",
        "network": {
          "id": "N_24329156"
        },
        "start": {
          "bootedAt": "2018-02-11T00:00:00.090210Z"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns the history of device boots in reverse chronological order (most recent first). Currently supported for MS devices only.
> 
> **GET** `/organizations/{organizationId}/devices/boots/history`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-boots-overview-by-device/)

#### Summarizes device reboots across an organization.

Operation ID: `getOrganizationDevicesBootsOverviewByDevice`

PATH _`/organizations/{organizationId}/devices/boots/overview/byDevice`_

    [
      {
        "items": [
          {
            "counts": {
              "total": 1000,
              "byType": [
                {
                  "type": "unusual",
                  "count": 5,
                  "byReason": [
                    {
                      "reason": "panic",
                      "count": 2
                    }
                  ]
                }
              ]
            }
          }
        ],
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Summarizes device reboots across an organization.
> 
> **GET** `/organizations/{organizationId}/devices/boots/overview/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-memory-by-device/)

#### Summarizes memory status across devices of a given network

Operation ID: `getOrganizationDevicesMemoryByDevice`

PATH _`/organizations/{organizationId}/devices/memory/byDevice`_

    [
      {
        "device": {
          "name": "My switch",
          "mac": "00:11:22:33:44:55",
          "serial": "Q234-ABCD-5678",
          "model": "MR34"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "used": {
          "min": 2,
          "max": 4,
          "mean": 3,
          "meanPercent": 30.56,
          "median": 3,
          "medianPercent": 25
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Summarizes memory status across devices of a given network
> 
> **GET** `/organizations/{organizationId}/devices/memory/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-packet-capture-opportunistic-by-network/)

#### List the Opportunistic Pcap settings of an organization by network

Operation ID: `getOrganizationDevicesPacketCaptureOpportunisticByNetwork`

PATH _`/organizations/{organizationId}/devices/packetCapture/opportunistic/byNetwork`_

    [
      {
        "network": {
          "id": "123",
          "name": "sample-node-group-name"
        },
        "networkId": "L_12345",
        "name": "My Network",
        "enablement": {
          "networkWide": 0,
          "serials": [
            "Q234-ABCD-5678"
          ],
          "tags": [
            "tag1",
            "tag2"
          ]
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the Opportunistic Pcap settings of an organization by network
> 
> **GET** `/organizations/{organizationId}/devices/packetCapture/opportunistic/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/bulk-organization-devices-packet-capture-schedules-delete/)

#### Delete packet capture schedules

Operation ID: `bulkOrganizationDevicesPacketCaptureSchedulesDelete`

PATH _`/organizations/{organizationId}/devices/packetCapture/schedules/bulkDelete`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete packet capture schedules
> 
> **POST** `/organizations/{organizationId}/devices/packetCapture/schedules/bulkDelete`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/tasks-organization-devices-packet-capture/)

#### Enqueues a task for a specific packet capture

Operation ID: `tasksOrganizationDevicesPacketCapture`

PATH _`/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks`_

    {
      "task": "analysis",
      "taskId": "123456",
      "status": "pending"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueues a task for a specific packet capture. This endpoint has a sustained rate limit of one request every 60 seconds.
> 
> **POST** `/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-packet-capture-task/)

#### Retrieves packet capture analysis result for a specific packet capture task.

Operation ID: `getOrganizationDevicesPacketCaptureTask`

PATH _`/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks/{id}`_

    {
      "task": "analysis",
      "status": "completed",
      "summary": {
        "counts": {
          "total": 1,
          "successes": 0,
          "failures": 1
        },
        "macs": [
          "00:11:22:33:44:55"
        ],
        "ips": [
          "1.2.3.4"
        ],
        "devices": [
          {
            "name": "My AP",
            "url": "https://n1.meraki.com//n//manage/nodes/new_list/000000000000"
          }
        ]
      },
      "analyzers": {
        "analyzer": {
          "present": true,
          "macs": [
            "00:11:22:33:44:55"
          ],
          "ips": [
            "1.2.3.4"
          ],
          "devices": [
            "My AP"
          ],
          "testCounts": {
            "total": 1,
            "successes": 0,
            "failures": 1
          },
          "testResults": [
            {
              "passed": [
                {
                  "name": "Test",
                  "status": false,
                  "details": []
                }
              ],
              "failed": [
                {
                  "name": "Test",
                  "status": false,
                  "details": [
                    {
                      "subCategory": "DHCP Request not seen",
                      "failureCount": 3,
                      "packets": [
                        5,
                        6,
                        7
                      ],
                      "detailMessage": "Failed",
                      "macs": [
                        "00:11:22:33:44:55"
                      ],
                      "ips": [
                        "1.2.3.4"
                      ],
                      "devices": [
                        "My AP"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      "fileName": "sample.pcap",
      "filePathUrl": "https://www.meraki.com"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Retrieves packet capture analysis result for a specific packet capture task.
> 
> **GET** `/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-syslog-servers-by-network/)

#### Returns syslog servers configured for the networks within an organization.

Operation ID: `getOrganizationDevicesSyslogServersByNetwork`

PATH _`/organizations/{organizationId}/devices/syslog/servers/byNetwork`_

    {
      "items": [
        {
          "network": {
            "id": "N_123456789012345678"
          },
          "servers": [
            {
              "host": "1.2.3.4",
              "port": "443",
              "roles": [
                "Wireless event log",
                "Appliance URLs"
              ],
              "transportProtocol": "UDP",
              "encryption": {
                "enabled": true,
                "certificate": {
                  "id": "1637"
                }
              }
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns syslog servers configured for the networks within an organization.
> 
> **GET** `/organizations/{organizationId}/devices/syslog/servers/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-syslog-servers-roles-by-network/)

#### Returns roles that can be assigned to a syslog server for a given network.

Operation ID: `getOrganizationDevicesSyslogServersRolesByNetwork`

PATH _`/organizations/{organizationId}/devices/syslog/servers/roles/byNetwork`_

    {
      "items": [
        {
          "network": {
            "id": "N_123456789012345678"
          },
          "availableRoles": [
            {
              "name": "Wireless Event Log",
              "value": "wireless_event_log"
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 10,
            "remaining": 2
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns roles that can be assigned to a syslog server for a given network.
> 
> **GET** `/organizations/{organizationId}/devices/syslog/servers/roles/byNetwork`  
> 
> * * *

* * *

### clients

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-clients-events/)

#### Given a client, get all alerts and events for a given timespan

Operation ID: `getOrganizationAssuranceClientsEvents`

PATH _`/organizations/{organizationId}/assurance/clients/events`_

    [
      {
        "client": {
          "id": "k74272e",
          "name": "Cisco Meraki valued client"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "startTime": "2018-02-11T00:00:00Z",
        "endTime": "2018-05-12T00:00:00Z",
        "events": [
          {
            "category": "connectivity",
            "type": "dhcp_problem",
            "displayText": "DHCP Problem",
            "startedAt": "2018-02-11T00:00:00Z",
            "resolvedAt": "2018-05-12T00:00:00Z",
            "device": {
              "name": "Device Name",
              "mac": "00:11:22:33:44:55",
              "type": "MS",
              "serial": "Q234-ABCD-5678",
              "url": "https://n1.meraki.test/tag/n/testnetwork/manage/nodes/new_list/12345"
            },
            "ssid": {
              "name": "SSID Name",
              "url": "https://n1.meraki.test/tag/n/testnetwork/manage/configure/access_control?ssid_number=5"
            },
            "packetCapture": {
              "enabled": false,
              "captureId": "12345"
            }
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Given a client, get all alerts and events for a given timespan
> 
> **GET** `/organizations/{organizationId}/assurance/clients/events`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-clients-events-correlated/)

#### Given a client, category, and timespan, return events that have a close connection to each other.

Operation ID: `getOrganizationAssuranceClientsEventsCorrelated`

PATH _`/organizations/{organizationId}/assurance/clients/events/correlated`_

    [
      {
        "client": {
          "id": "k74272e",
          "name": "Cisco Meraki valued client"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "timestamp": "2018-02-11T00:00:00Z",
        "events": [
          {
            "id": "123",
            "category": "connectivity",
            "type": "dhcp_problem",
            "displayText": "DHCP Problem",
            "startedAt": "2018-02-11T00:00:00Z",
            "resolvedAt": "2018-05-12T00:00:00Z",
            "device": {
              "type": "MS",
              "serial": "Q234-ABCD-5678"
            },
            "url": "https://shard.meraki.com/network/n/id/manage/dashboard/event_log"
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Given a client, category, and timespan, return events that have a close connection to each other.
> 
> **GET** `/organizations/{organizationId}/assurance/clients/events/correlated`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-clients-topology-current/)

#### Given a client, return current topology

Operation ID: `getOrganizationAssuranceClientsTopologyCurrent`

PATH _`/organizations/{organizationId}/assurance/clients/topology/current`_

    [
      {
        "client": {
          "id": "k74272e",
          "name": "Cisco Meraki valued client"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "topology": [
          {
            "fromNode": {
              "serial": "123",
              "name": "My MR",
              "type": "MR"
            },
            "toNode": {
              "serial": "456",
              "name": "Other MS",
              "type": "MS"
            }
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Given a client, return current topology
> 
> **GET** `/organizations/{organizationId}/assurance/clients/topology/current`  
> 
> * * *

* * *

### routing

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-routing-vrfs/)

#### List existing organization-wide VRFs (Virtual Routing and Forwarding).

Operation ID: `getOrganizationRoutingVrfs`

PATH _`/organizations/{organizationId}/routing/vrfs`_

    {
      "items": [
        {
          "vrfId": "42",
          "autoRd": false,
          "name": "Engineering",
          "description": "Virtual network for Engineering",
          "routeDistinguisher": "65000:42",
          "routeTarget": "65000:42",
          "switchFabricId": "123"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List existing organization-wide VRFs (Virtual Routing and Forwarding).
> 
> **GET** `/organizations/{organizationId}/routing/vrfs`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Add an organization-wide VRF (Virtual Routing and Forwarding)
> 
> **POST** `/organizations/{organizationId}/routing/vrfs`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-routing-vrf/)

#### Update an organization-wide VRF (Virtual Routing and Forwarding)

Operation ID: `updateOrganizationRoutingVrf`

PATH _`/organizations/{organizationId}/routing/vrfs/{vrfId}`_

    {
      "vrfId": "42",
      "autoRd": false,
      "name": "Engineering",
      "description": "Virtual network for Engineering",
      "routeDistinguisher": "65000:42",
      "routeTarget": "65000:42",
      "switchFabricId": "123"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an organization-wide VRF (Virtual Routing and Forwarding)
> 
> **PUT** `/organizations/{organizationId}/routing/vrfs/{vrfId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a VRF (Virtual Routing and Forwarding) from a organization
> 
> **DELETE** `/organizations/{organizationId}/routing/vrfs/{vrfId}`  
> 
> * * *

* * *

\[ networks \]
--------------

### snmp

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-snmp-traps/)

#### Update the SNMP trap configuration for the specified network

Operation ID: `updateNetworkSnmpTraps`

PATH _`/networks/{networkId}/snmp/traps`_

    {
      "network": {
        "id": "N_12345678",
        "name": "networkName"
      },
      "mode": "v3",
      "receiver": {
        "address": "1.1.1.1",
        "port": "1234"
      },
      "v2": {
        "community": "public"
      },
      "v3": {
        "users": [
          {
            "name": "merakian"
          }
        ]
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the SNMP trap configuration for the specified network
> 
> **PUT** `/networks/{networkId}/snmp/traps`  
> 
> * * *

* * *

### locationScanning

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-location-scanning/)

#### Return scanning API settings

Operation ID: `getNetworkLocationScanning`

PATH _`/networks/{networkId}/locationScanning`_

    {
      "analyticsEnabled": true,
      "scanningApiEnabled": true,
      "validator": "xxyzzy"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return scanning API settings
> 
> **GET** `/networks/{networkId}/locationScanning`  
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
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-location-scanning-http-servers/)

#### Return list of scanning API receivers

Operation ID: `getNetworkLocationScanningHttpServers`

PATH _`/networks/{networkId}/locationScanning/httpServers`_

    [
      {
        "endpoints": [
          {
            "httpServer": {
              "id": "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vbXlfY3VzdG9tX3dlYmhvb2s=",
              "name": "Example Webhook Server",
              "networkId": "N_12345678",
              "url": "https://www.example.com/my_custom_webhook",
              "sharedSecret": "******",
              "validator": "xxx",
              "validatedAt": "2018-02-11T00:00:00Z"
            },
            "scanningApiVersion": 123,
            "radioType": "WiFi",
            "successAt": "2018-05-12T00:00:00Z",
            "errorAt": "2018-02-11T00:00:00Z",
            "postErrors": "[{\"code\":200,\"delay\":{\"inMillis\":612},\"timestamp\":{\"millisFromEpoch\":1597255325467}}]"
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Return list of scanning API receivers
> 
> **GET** `/networks/{networkId}/locationScanning/httpServers`  
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
> * * *

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-devices-syslog-servers/)

#### Updates the syslog servers configuration for a network.

Operation ID: `updateNetworkDevicesSyslogServers`

PATH _`/networks/{networkId}/devices/syslog/servers`_

    {
      "network": {
        "id": "N_123456789012345678"
      },
      "servers": [
        {
          "host": "1.2.3.4",
          "port": "443",
          "roles": [
            "Wireless event log",
            "Appliance URLs"
          ],
          "transportProtocol": "UDP",
          "encryption": {
            "enabled": true,
            "certificate": {
              "id": "1637"
            }
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Updates the syslog servers configuration for a network.
> 
> **PUT** `/networks/{networkId}/devices/syslog/servers`  
> 
> * * *

* * *

\[ wireless \]
--------------

### roaming

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-roaming-by-network-by-interval/)

#### Get all wireless clients' roam events within the specified timespan grouped by network and time interval.

Operation ID: `getOrganizationWirelessRoamingByNetworkByInterval`

PATH _`/organizations/{organizationId}/wireless/roaming/byNetwork/byInterval`_

    [
      {
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "byInterval": [
          {
            "startTs": "2024-08-20T18:00:00Z",
            "endTs": "2024-08-20T20:00:00Z",
            "roams": [
              {
                "origin": {
                  "mac": "00:11:22:33:44:55",
                  "serial": "Q234-ABCD-5678",
                  "name": "My AP"
                },
                "destination": {
                  "mac": "00:11:22:33:44:55",
                  "serial": "Q234-ABCD-5678",
                  "name": "My AP"
                },
                "ssid": {
                  "number": 1,
                  "name": "My SSID"
                },
                "client": {
                  "id": "k74272e",
                  "mac": "00:11:22:33:44:55"
                },
                "band": {
                  "before": "5",
                  "after": "2"
                },
                "protocol": "skc-roam",
                "duration": 100,
                "rssi": {
                  "before": -70,
                  "after": -70
                }
              }
            ]
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get all wireless clients' roam events within the specified timespan grouped by network and time interval.
> 
> **GET** `/organizations/{organizationId}/wireless/roaming/byNetwork/byInterval`  
> 
> * * *

* * *

### alerts

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-alerts-low-power-by-device/)

#### Gets all low power related alerts over a given network and returns information by device

Operation ID: `getOrganizationWirelessAlertsLowPowerByDevice`

PATH _`/organizations/{organizationId}/wireless/alerts/lowPower/byDevice`_

    [
      {
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "name": "My switch",
        "mac": "00:11:22:33:44:55",
        "serial": "Q234-ABCD-5678",
        "model": "MR34",
        "failureCount": "MR34",
        "startTime": "MR34",
        "endTime": "MR34"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Gets all low power related alerts over a given network and returns information by device
> 
> **GET** `/organizations/{organizationId}/wireless/alerts/lowPower/byDevice`  
> 
> * * *

* * *

### certificates

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-certificates-open-roaming-certificate-authority/)

#### Query for details on the organization's OpenRoaming Certificate Authority certificate (CAs).

Operation ID: `getOrganizationWirelessCertificatesOpenRoamingCertificateAuthority`

PATH _`/organizations/{organizationId}/wireless/certificates/openRoaming/certificateAuthority`_

    {
      "status": "trusted",
      "contents": "-----BEGIN CERTIFICATE-----\n\n        MIIDzDCCAragAwIBAgIUOd0ukLcjH43TfTHFG9qE0FtlMVgwCwYJKoZIhvcNAQEL\n\n        umkqeYeO30g1uYvDuWLXVA==\n\n        -----END CERTIFICATE-----\n"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Query for details on the organization's OpenRoaming Certificate Authority certificate (CAs).
> 
> **GET** `/organizations/{organizationId}/wireless/certificates/openRoaming/certificateAuthority`  
> 
> * * *

* * *

### connectivity

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-connectivity-wireless-rf-health-by-band/)

#### Show the by-device RF Health score overview information for the organization in the given interval

Operation ID: `getOrganizationAssuranceConnectivityWirelessRfHealthByBand`

PATH _`/organizations/{organizationId}/assurance/connectivity/wireless/rfHealth/byBand`_

    {
      "items": [
        {
          "twoPointFourImpactedCount": 10,
          "fiveImpactedCount": 0,
          "sixImpactedCount": 20,
          "impactedTotal": 30,
          "twoPointFour": [
            {
              "index": 0,
              "rfHealthScores": {
                "network": {
                  "id": "N_24329156",
                  "name": "Main Office"
                },
                "device": {
                  "name": "My AP",
                  "serial": "Q234-ABCD-5678",
                  "mac": "00:11:22:33:44:55"
                },
                "readings": [
                  {
                    "startTs": "2024-04-19T00:05:00Z",
                    "endTs": "2024-04-19T00:10:00Z",
                    "index": 0,
                    "band": "2.4",
                    "coChannelNeighborScore": 22,
                    "sideChannelNeighborScore": 22,
                    "coChannelUtilizationScore": 22,
                    "nonCoChannelNeighborScore": 22,
                    "nonCoChannelUtilizationScore": 22,
                    "neighborCoverageScore": 22,
                    "ccaBusyScore": 22,
                    "channelNoiseScore": 22,
                    "sideChannelNoiseScore": 22,
                    "channelInterferenceScore": 22,
                    "sideChannelInterferenceScore": 22,
                    "lowRssiClientsScore": 22,
                    "clientScore": 22,
                    "interferenceScore": 22,
                    "neighborScore": 22,
                    "noiseScore": 22,
                    "overallScore": 22
                  }
                ]
              }
            }
          ],
          "five": [
            {
              "index": 0,
              "rfHealthScores": {
                "network": {
                  "id": "N_24329156",
                  "name": "Main Office"
                },
                "device": {
                  "name": "My AP",
                  "serial": "Q234-ABCD-5678",
                  "mac": "00:11:22:33:44:55"
                },
                "readings": [
                  {
                    "startTs": "2024-04-19T00:05:00Z",
                    "endTs": "2024-04-19T00:10:00Z",
                    "index": 0,
                    "band": "2.4",
                    "coChannelNeighborScore": 22,
                    "sideChannelNeighborScore": 22,
                    "coChannelUtilizationScore": 22,
                    "nonCoChannelNeighborScore": 22,
                    "nonCoChannelUtilizationScore": 22,
                    "neighborCoverageScore": 22,
                    "ccaBusyScore": 22,
                    "channelNoiseScore": 22,
                    "sideChannelNoiseScore": 22,
                    "channelInterferenceScore": 22,
                    "sideChannelInterferenceScore": 22,
                    "lowRssiClientsScore": 22,
                    "clientScore": 22,
                    "interferenceScore": 22,
                    "neighborScore": 22,
                    "noiseScore": 22,
                    "overallScore": 22
                  }
                ]
              }
            }
          ],
          "six": [
            {
              "index": 0,
              "rfHealthScores": {
                "network": {
                  "id": "N_24329156",
                  "name": "Main Office"
                },
                "device": {
                  "name": "My AP",
                  "serial": "Q234-ABCD-5678",
                  "mac": "00:11:22:33:44:55"
                },
                "readings": [
                  {
                    "startTs": "2024-04-19T00:05:00Z",
                    "endTs": "2024-04-19T00:10:00Z",
                    "index": 0,
                    "band": "2.4",
                    "coChannelNeighborScore": 22,
                    "sideChannelNeighborScore": 22,
                    "coChannelUtilizationScore": 22,
                    "nonCoChannelNeighborScore": 22,
                    "nonCoChannelUtilizationScore": 22,
                    "neighborCoverageScore": 22,
                    "ccaBusyScore": 22,
                    "channelNoiseScore": 22,
                    "sideChannelNoiseScore": 22,
                    "channelInterferenceScore": 22,
                    "sideChannelInterferenceScore": 22,
                    "lowRssiClientsScore": 22,
                    "clientScore": 22,
                    "interferenceScore": 22,
                    "neighborScore": 22,
                    "noiseScore": 22,
                    "overallScore": 22
                  }
                ]
              }
            }
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Show the by-device RF Health score overview information for the organization in the given interval. This includes the RF Health score for each device, as well as some more basic device info
> 
> **GET** `/organizations/{organizationId}/assurance/connectivity/wireless/rfHealth/byBand`  
> 
> * * *

* * *

### opportunisticPcap

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-opportunistic-pcap/)

#### Update the Opportunistic Pcap settings for a wireless network

Operation ID: `updateNetworkWirelessOpportunisticPcap`

PATH _`/networks/{networkId}/wireless/opportunisticPcap`_

    {
      "network": {
        "id": "123",
        "name": "sample-node-group-name"
      },
      "networkId": "L_12345",
      "name": "My Network",
      "enablement": {
        "networkWide": 0,
        "serials": [
          "Q234-ABCD-5678"
        ],
        "tags": [
          "tag1",
          "tag2"
        ]
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the Opportunistic Pcap settings for a wireless network
> 
> **PUT** `/networks/{networkId}/wireless/opportunisticPcap`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/by-organization-wireless-opportunistic-pcap-license-network/)

#### Check the Opportunistic Pcap license status of an organization by network

Operation ID: `byOrganizationWirelessOpportunisticPcapLicenseNetwork`

PATH _`/organizations/{organizationId}/wireless/opportunisticPcap/license/byNetwork`_

    [
      {
        "networkId": "L_12345",
        "name": "My Network",
        "licensed": true
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Check the Opportunistic Pcap license status of an organization by network
> 
> **GET** `/organizations/{organizationId}/wireless/opportunisticPcap/license/byNetwork`  
> 
> * * *

* * *

### radio

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-wireless-radio-afc-position/)

#### Return the position for a wireless device

Operation ID: `getDeviceWirelessRadioAfcPosition`

PATH _`/devices/{serial}/wireless/radio/afc/position`_

    {
      "name": "Some MR",
      "network": {
        "id": "N_24329156"
      },
      "serial": "Q234-ABCD-5678",
      "height": {
        "aboveGround": {
          "value": 10,
          "uncertainty": 5
        }
      },
      "gps": {
        "antenna": {
          "cableLength": 10
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the position for a wireless device
> 
> **GET** `/devices/{serial}/wireless/radio/afc/position`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update the position attributes for this device
> 
> **PUT** `/devices/{serial}/wireless/radio/afc/position`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-wireless-radio-afc-power-limits/)

#### Return the AFC power limits for a wireless device

Operation ID: `getDeviceWirelessRadioAfcPowerLimits`

PATH _`/devices/{serial}/wireless/radio/afc/powerLimits`_

    {
      "name": "Device_name",
      "network": {
        "id": "N_12345"
      },
      "serial": "Q2KN-6CN7-EC4X",
      "expiresAt": "2023-01-27T19:36:32Z",
      "lastUpdatedAt": "2023-01-26T19:36:32Z",
      "lastSuccessAt": "2023-01-26T19:36:32Z",
      "byChannel": [
        {
          "channel": 11,
          "channelWidth": 20,
          "limit": 30
        }
      ],
      "status": "SUCCESS",
      "location": {
        "lat": 37.4180951010362,
        "lng": -122.098531723022,
        "uncertainty": 10,
        "type": "GPS"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the AFC power limits for a wireless device
> 
> **GET** `/devices/{serial}/wireless/radio/afc/powerLimits`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-wireless-radio-overrides/)

#### Return the radio overrides of a device

Operation ID: `getDeviceWirelessRadioOverrides`

PATH _`/devices/{serial}/wireless/radio/overrides`_

    {
      "serial": "Q234-ABCD-5678",
      "network": {
        "id": "N_24329156"
      },
      "rfProfile": {
        "id": "1234"
      },
      "radios": [
        {
          "enabled": true,
          "index": "1",
          "band": "5",
          "channel": 149,
          "channelWidth": 20,
          "targetPower": 15
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the radio overrides of a device
> 
> **GET** `/devices/{serial}/wireless/radio/overrides`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update the radio overrides of a device
> 
> **PUT** `/devices/{serial}/wireless/radio/overrides`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-wireless-radio-status/)

#### Show the status of this device's radios

Operation ID: `getDeviceWirelessRadioStatus`

PATH _`/devices/{serial}/wireless/radio/status`_

    [
      {
        "band": "6",
        "channel": {
          "value": 2,
          "width": 80,
          "dfs": {
            "radarDetected": false
          }
        },
        "power": {
          "transmit": 18,
          "mode": "low power indoor"
        },
        "status": "up"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Show the status of this device's radios
> 
> **GET** `/devices/{serial}/wireless/radio/status`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-radio-auto-rf/)

#### Update the AutoRF settings for a wireless network

Operation ID: `updateNetworkWirelessRadioAutoRf`

PATH _`/networks/{networkId}/wireless/radio/autoRf`_

    {
      "networkId": "L_12345",
      "name": "My Network",
      "timeZone": "America/Los_Angeles",
      "busyHour": {
        "schedule": {
          "mode": "automatic",
          "automatic": {
            "start": "08:00",
            "end": "17:00"
          },
          "manual": {
            "start": "10:00",
            "end": "15:00"
          }
        },
        "minimizeChanges": {
          "enabled": true
        }
      },
      "channel": {
        "avoidance": {
          "enabled": true
        }
      },
      "fra": {
        "enabled": false
      },
      "ai": {
        "enabled": true,
        "lastEnabledAt": "2026-02-04T09:06:21Z"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the AutoRF settings for a wireless network
> 
> **PUT** `/networks/{networkId}/wireless/radio/autoRf`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-afc-position-by-device/)

#### List the AFC power limits of an organization by device

Operation ID: `getOrganizationWirelessRadioAfcPositionByDevice`

PATH _`/organizations/{organizationId}/wireless/radio/afc/position/byDevice`_

    [
      {
        "name": "Some MR",
        "network": {
          "id": "N_24329156"
        },
        "serial": "Q234-ABCD-5678",
        "height": {
          "aboveGround": {
            "value": 10,
            "uncertainty": 5
          }
        },
        "gps": {
          "antenna": {
            "cableLength": 10
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the AFC power limits of an organization by device
> 
> **GET** `/organizations/{organizationId}/wireless/radio/afc/position/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-afc-power-limits-by-device/)

#### List the AFC power limits of an organization by device

Operation ID: `getOrganizationWirelessRadioAfcPowerLimitsByDevice`

PATH _`/organizations/{organizationId}/wireless/radio/afc/powerLimits/byDevice`_

    [
      {
        "name": "Device_name",
        "network": {
          "id": "N_12345"
        },
        "serial": "Q2KN-6CN7-EC4X",
        "expiresAt": "2023-01-27T19:36:32Z",
        "lastUpdatedAt": "2023-01-26T19:36:32Z",
        "lastSuccessAt": "2023-01-26T19:36:32Z",
        "byChannel": [
          {
            "channel": 11,
            "channelWidth": 20,
            "limit": 30
          }
        ],
        "status": "SUCCESS",
        "location": {
          "lat": 37.4180951010362,
          "lng": -122.098531723022,
          "uncertainty": 10,
          "type": "GPS"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the AFC power limits of an organization by device
> 
> **GET** `/organizations/{organizationId}/wireless/radio/afc/powerLimits/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-auto-rf-by-network/)

#### List the AutoRF settings of an organization by network

Operation ID: `getOrganizationWirelessRadioAutoRfByNetwork`

PATH _`/organizations/{organizationId}/wireless/radio/autoRf/byNetwork`_

    [
      {
        "networkId": "L_12345",
        "name": "My Network",
        "timeZone": "America/Los_Angeles",
        "busyHour": {
          "schedule": {
            "mode": "automatic",
            "automatic": {
              "start": "08:00",
              "end": "17:00"
            },
            "manual": {
              "start": "10:00",
              "end": "15:00"
            }
          },
          "minimizeChanges": {
            "enabled": true
          }
        },
        "channel": {
          "avoidance": {
            "enabled": true
          }
        },
        "fra": {
          "enabled": false
        },
        "ai": {
          "enabled": true,
          "lastEnabledAt": "2026-02-04T09:06:21Z"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the AutoRF settings of an organization by network
> 
> **GET** `/organizations/{organizationId}/wireless/radio/autoRf/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-auto-rf-channels-planning-activities/)

#### List the channel planning activities of an organization

Operation ID: `getOrganizationWirelessRadioAutoRfChannelsPlanningActivities`

PATH _`/organizations/{organizationId}/wireless/radio/autoRf/channels/planning/activities`_

    [
      {
        "startedAt": "2018-02-11T00:00:00Z",
        "endsAt": "2018-05-12T00:00:00Z",
        "type": "avoid",
        "reason": "dfs",
        "band": "5",
        "channel": 44,
        "severity": 6,
        "network": {
          "id": "N_24329156",
          "name": "Main Office",
          "tags": [
            "tag1",
            "tag2"
          ]
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55",
          "tags": [
            "tag1",
            "tag2"
          ]
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the channel planning activities of an organization
> 
> **GET** `/organizations/{organizationId}/wireless/radio/autoRf/channels/planning/activities`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-overrides-by-device/)

#### Return a list of radio overrides

Operation ID: `getOrganizationWirelessRadioOverridesByDevice`

PATH _`/organizations/{organizationId}/wireless/radio/overrides/byDevice`_

    {
      "items": [
        {
          "serial": "Q234-ABCD-5678",
          "network": {
            "id": "N_24329156"
          },
          "rfProfile": {
            "id": "1234"
          },
          "radios": [
            {
              "enabled": true,
              "index": "1",
              "band": "5",
              "channel": 149,
              "channelWidth": 20,
              "targetPower": 15
            }
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a list of radio overrides
> 
> **GET** `/organizations/{organizationId}/wireless/radio/overrides/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/by-organization-wireless-radio-rf-health-neighbors-rssi-device/)

#### Show the by-device neighbor rssi information for the organization in the given interval

Operation ID: `byOrganizationWirelessRadioRfHealthNeighborsRssiDevice`

PATH _`/organizations/{organizationId}/wireless/radio/rfHealth/neighbors/rssi/byDevice`_

    {
      "items": [
        {
          "serial": "ABC-123",
          "model": "HW-123",
          "mac": "aa:bb:cc:00:11:22",
          "network": {
            "id": "N_1234",
            "name": "MyNetwork"
          },
          "neighbors": {
            "total": 12,
            "byBand": [
              {
                "band": "2.4",
                "total": 7,
                "stats": [
                  {
                    "mac": "00:22:11:ff:ee:bb",
                    "model": "MR42",
                    "serial": "Q2BY-2871-2281",
                    "rssi": -80,
                    "channel": 6
                  }
                ]
              }
            ]
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Show the by-device neighbor rssi information for the organization in the given interval. This includes some basic device and network data, the number of neighbors for each device (total and by band), and the rssi and information of each neighbor
> 
> **GET** `/organizations/{organizationId}/wireless/radio/rfHealth/neighbors/rssi/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-rf-health-overview-by-network-by-interval/)

#### Show the by-network RF Health score overview information for the organization in the given interval

Operation ID: `getOrganizationWirelessRadioRfHealthOverviewByNetworkByInterval`

PATH _`/organizations/{organizationId}/wireless/radio/rfHealth/overview/byNetwork/byInterval`_

    {
      "items": [
        {
          "network": {
            "id": "N_1234",
            "name": "MyNetwork"
          },
          "readings": [
            {
              "startTs": "2024-04-19T00:05:00Z",
              "endTs": "2024-04-19T00:10:00Z",
              "healthMetrics": {
                "byBand": {
                  "band": "2.4",
                  "rfScore": 85,
                  "highCciPercentage": 15,
                  "channelChanges": 21
                }
              }
            }
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Show the by-network RF Health score overview information for the organization in the given interval. This includes RF Health score, high interference APs, number of APs and of clients
> 
> **GET** `/organizations/{organizationId}/wireless/radio/rfHealth/overview/byNetwork/byInterval`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-status-by-network/)

#### Show the status of this organization's radios, categorized by network and device

Operation ID: `getOrganizationWirelessRadioStatusByNetwork`

PATH _`/organizations/{organizationId}/wireless/radio/status/byNetwork`_

    [
      {
        "network": {
          "id": "N_1234",
          "name": "MyNetwork"
        },
        "data": {
          "byDevice": [
            {
              "serial": "ABC-123",
              "radios": [
                {
                  "band": 6,
                  "channelSettings": {
                    "channel": 2,
                    "width": 80,
                    "dfs": {
                      "radarDetected": false
                    }
                  },
                  "powerSettings": {
                    "transmitPower": 18,
                    "mode": "lpi"
                  },
                  "status": "Up"
                }
              ]
            }
          ]
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Show the status of this organization's radios, categorized by network and device
> 
> **GET** `/organizations/{organizationId}/wireless/radio/status/byNetwork`  
> 
> * * *

* * *

### healthScores

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-wireless-health-scores/)

#### Fetch the health scores for a given AP on this network

Operation ID: `getDeviceWirelessHealthScores`

PATH _`/devices/{serial}/wireless/healthScores`_

    {
      "device": {
        "serial": "Q234-ABCD-5678"
      },
      "performance": {
        "latest": 80
      },
      "onboarding": {
        "latest": 20
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch the health scores for a given AP on this network
> 
> **GET** `/devices/{serial}/wireless/healthScores`  
> 
> * * *

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-devices-health-scores/)

#### Fetch the health scores of all APs on this network

Operation ID: `getNetworkWirelessDevicesHealthScores`

PATH _`/networks/{networkId}/wireless/devices/healthScores`_

    [
      {
        "device": {
          "serial": "Q234-ABCD-5678"
        },
        "performance": {
          "latest": 80
        },
        "onboarding": {
          "latest": 20
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch the health scores of all APs on this network
> 
> **GET** `/networks/{networkId}/wireless/devices/healthScores`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-accelerometer-statuses/)

#### List the most recent AP accelerometer status information for wireless devices that support it.

Operation ID: `getOrganizationWirelessDevicesAccelerometerStatuses`

PATH _`/organizations/{organizationId}/wireless/devices/accelerometer/statuses`_

    [
      {
        "serial": "Q234-ABCD-5678",
        "name": "My appliance",
        "network": {
          "id": "N_24329156"
        },
        "status": {
          "titleAngle": 0,
          "status": "Active",
          "errorReason": "No error"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the most recent AP accelerometer status information for wireless devices that support it.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/accelerometer/statuses`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-data-rate-by-client/)

#### Get average uplink and downlink datarates for all clients in the organization

Operation ID: `getOrganizationWirelessDevicesDataRateByClient`

PATH _`/organizations/{organizationId}/wireless/devices/dataRate/byClient`_

    [
      {
        "ulDatarate": 10000,
        "dlDatarate": 20000,
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average uplink and downlink datarates for all clients in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/dataRate/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-latency-by-client/)

#### Get latency summaries for all wireless devices in an organization.

Operation ID: `getOrganizationWirelessDevicesLatencyByClient`

PATH _`/organizations/{organizationId}/wireless/devices/latency/byClient`_

    [
      {
        "overall": {
          "frames": 1439,
          "average": 24.73
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get latency summaries for all wireless devices in an organization.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/latency/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-latency-by-device/)

#### Get latency summaries for all wireless devices in an organization.

Operation ID: `getOrganizationWirelessDevicesLatencyByDevice`

PATH _`/organizations/{organizationId}/wireless/devices/latency/byDevice`_

    [
      {
        "overall": {
          "frames": 1439,
          "average": 24.73
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get latency summaries for all wireless devices in an organization.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/latency/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-latency-by-network/)

#### Get per-network latency summaries for all wireless networks in an organization.

Operation ID: `getOrganizationWirelessDevicesLatencyByNetwork`

PATH _`/organizations/{organizationId}/wireless/devices/latency/byNetwork`_

    [
      {
        "overall": {
          "frames": 1439,
          "average": 24.73
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get per-network latency summaries for all wireless networks in an organization.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/latency/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-wireless-devices-live-tools-client-disconnect/)

#### Enqueue a job to disconnect a client from an AP

Operation ID: `createOrganizationWirelessDevicesLiveToolsClientDisconnect`

PATH _`/organizations/{organizationId}/wireless/devices/liveTools/clients/{clientId}/disconnect`_

    {
      "id": "abcd-1234-efgh-5678",
      "status": "queued",
      "request": {
        "mac": "00:11:22:33:44:55",
        "serial": "ABCD-1234-ABCD"
      },
      "url": "/api/v1/devices/serial/liveTools/disconnect",
      "callback": {
        "id": "1284392014819",
        "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
        "status": "new"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to disconnect a client from an AP. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/organizations/{organizationId}/wireless/devices/liveTools/clients/{clientId}/disconnect`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-provisioning-deployments-by-new-device/)

#### Returns deployment IDs for the given new node serial numbers

Operation ID: `getOrganizationWirelessDevicesProvisioningDeploymentsByNewDevice`

PATH _`/organizations/{organizationId}/wireless/devices/provisioning/deployments/byNewDevice`_

    {
      "items": [
        {
          "deploymentId": "1234567890",
          "devices": {
            "old": {
              "serial": "Q234-ABCD-5678",
              "afterAction": "unclaim",
              "name": "My AP",
              "model": "MR34",
              "mac": "00:11:22:33:44:55",
              "tags": [
                "tag1",
                "tag2"
              ],
              "rfProfile": {
                "id": "1284392014819",
                "name": "RF Profile Name"
              }
            },
            "new": {
              "serial": "Q234-ABCD-5678",
              "name": "My AP",
              "model": "CW9166I",
              "mac": "00:11:22:33:44:55",
              "tags": [
                "tag1",
                "tag2"
              ],
              "rfProfile": {
                "id": "1284392014819",
                "name": "RF Profile Name"
              }
            }
          },
          "status": "ready",
          "type": "replace",
          "network": {
            "id": "N_24329156",
            "name": "Main Office"
          },
          "createdAt": "2018-02-11T00:00:00.090210Z",
          "requestedAt": "2018-02-11T00:00:00.090210Z",
          "lastUpdatedAt": "2018-02-11T00:00:00.090210Z",
          "completedAt": "2018-02-11T00:00:00.090210Z",
          "errors": [
            "error message1",
            "error message2"
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 80,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns deployment IDs for the given new node serial numbers
> 
> **GET** `/organizations/{organizationId}/wireless/devices/provisioning/deployments/byNewDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-provisioning-recommendations-tags/)

#### List the recommended device tags for zero touch deployments available for the organization

Operation ID: `getOrganizationWirelessDevicesProvisioningRecommendationsTags`

PATH _`/organizations/{organizationId}/wireless/devices/provisioning/recommendations/tags`_

    [
      {
        "tag": "tag1",
        "confidence": 0.5
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the recommended device tags for zero touch deployments available for the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/provisioning/recommendations/tags`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-signal-quality-by-client/)

#### Get average signal quality for all clients in the organization

Operation ID: `getOrganizationWirelessDevicesSignalQualityByClient`

PATH _`/organizations/{organizationId}/wireless/devices/signalQuality/byClient`_

    [
      {
        "snr": 37,
        "rssi": -58,
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average signal quality for all clients in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/signalQuality/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-signal-quality-by-device/)

#### Get average signal quality for all devices in the organization

Operation ID: `getOrganizationWirelessDevicesSignalQualityByDevice`

PATH _`/organizations/{organizationId}/wireless/devices/signalQuality/byDevice`_

    [
      {
        "snr": 37,
        "rssi": -58,
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average signal quality for all devices in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/signalQuality/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-signal-quality-by-network/)

#### Get average signal quality for all networks in the organization

Operation ID: `getOrganizationWirelessDevicesSignalQualityByNetwork`

PATH _`/organizations/{organizationId}/wireless/devices/signalQuality/byNetwork`_

    [
      {
        "snr": 37,
        "rssi": -58,
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average signal quality for all networks in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/signalQuality/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-telemetry/)

#### List the wireless device telemetry of an organization

Operation ID: `getOrganizationWirelessDevicesTelemetry`

PATH _`/organizations/{organizationId}/wireless/devices/telemetry`_

    {
      "items": [
        {
          "network": {
            "id": "N_24329156",
            "name": "Main Office",
            "tags": [
              "tag1",
              "tag2"
            ]
          },
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55",
          "tags": [
            "tag1",
            "tag2"
          ],
          "rfProfile": {
            "id": "1",
            "name": "Basic Indoor RF Profile"
          },
          "metrics": [
            {
              "name": "Telemetry A"
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the wireless device telemetry of an organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/telemetry`  
> 
> * * *

* * *

### clients

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-clients-health-scores/)

#### Fetch the health scores for all clients on this network

Operation ID: `getNetworkWirelessClientsHealthScores`

PATH _`/networks/{networkId}/wireless/clients/healthScores`_

    [
      {
        "mac": "22:33:44:55:66:77",
        "clientId": "k74272e",
        "performance": {
          "latest": 80,
          "currentConnection": 100
        },
        "onboarding": {
          "latest": 100
        }
      },
      {
        "mac": "22:33:44:55:66:77",
        "clientId": "k74272e",
        "performance": {
          "latest": 30,
          "currentConnection": 50
        },
        "onboarding": {
          "latest": 70
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch the health scores for all clients on this network
> 
> **GET** `/networks/{networkId}/wireless/clients/healthScores`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-clients-onboarding-history/)

#### Return counts of distinct wireless clients connecting to a network over time

Operation ID: `getNetworkWirelessClientsOnboardingHistory`

PATH _`/networks/{networkId}/wireless/clients/onboardingHistory`_

    [
      {
        "startTs": "2020-01-01T00:00:00Z",
        "endTs": "2020-01-01T00:05:00Z",
        "clientCounts": {
          "summary": {
            "prospective": 100,
            "successful": 75,
            "failed": 25
          },
          "connectionSteps": {
            "association": {
              "prospective": 100,
              "successful": 97,
              "failed": 3
            },
            "authentication": {
              "prospective": 97,
              "successful": 81,
              "failed": 16
            },
            "dhcp": {
              "prospective": 81,
              "successful": 75,
              "failed": 6
            },
            "dns": {
              "prospective": 75,
              "successful": 75,
              "failed": 0
            }
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Return counts of distinct wireless clients connecting to a network over time
> 
> **GET** `/networks/{networkId}/wireless/clients/onboardingHistory`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-client-health-scores/)

#### Fetch the health scores for a given client on this network

Operation ID: `getNetworkWirelessClientHealthScores`

PATH _`/networks/{networkId}/wireless/clients/{clientId}/healthScores`_

    {
      "mac": "22:33:44:55:66:77",
      "clientId": "k74272e",
      "performance": {
        "latest": 80,
        "currentConnection": 100
      },
      "onboarding": {
        "latest": 100
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID
> 
> **GET** `/networks/{networkId}/wireless/clients/{clientId}/healthScores`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-client-roaming-history/)

#### Get client roam events within the specified timespan.

Operation ID: `getNetworkWirelessClientRoamingHistory`

PATH _`/networks/{networkId}/wireless/clients/{clientId}/roaming/history`_

    [
      {
        "status": "roam",
        "ts": "2018-02-11T00:00:00.090210Z",
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        },
        "details": {
          "duration": 120,
          "signalQuality": {
            "previous": {
              "snr": -30,
              "rssi": 70
            },
            "current": {
              "snr": -20,
              "rssi": 80
            }
          },
          "band": 5,
          "roamProtocol": "non-802.11r",
          "disconnectReason": "Client out of range"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get client roam events within the specified timespan.
> 
> **GET** `/networks/{networkId}/wireless/clients/{clientId}/roaming/history`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-connections-association-by-client/)

#### Summarize association outcomes per wireless client across an organization.

Operation ID: `getOrganizationWirelessClientsConnectionsAssociationByClient`

PATH _`/organizations/{organizationId}/wireless/clients/connections/association/byClient`_

    [
      {
        "successes": {
          "count": 1000
        },
        "failures": {
          "byReason": [
            {
              "code": 5,
              "count": 15,
              "recentEvent": {
                "ssid": {
                  "number": 3,
                  "name": "Guest Wifi"
                },
                "radio": {
                  "number": 0,
                  "band": "2.4"
                }
              }
            }
          ]
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        },
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Summarize association outcomes per wireless client across an organization.
> 
> **GET** `/organizations/{organizationId}/wireless/clients/connections/association/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-connections-authentication-by-client/)

#### Summarize authentication outcomes per wireless client across an organization.

Operation ID: `getOrganizationWirelessClientsConnectionsAuthenticationByClient`

PATH _`/organizations/{organizationId}/wireless/clients/connections/authentication/byClient`_

    [
      {
        "successes": {
          "count": 1000
        },
        "failures": {
          "byReason": [
            {
              "code": 5,
              "count": 15,
              "recentEvent": {
                "ssid": {
                  "number": 3,
                  "name": "Guest Wifi"
                },
                "radio": {
                  "number": 0,
                  "band": "2.4"
                }
              }
            }
          ]
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        },
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Summarize authentication outcomes per wireless client across an organization.
> 
> **GET** `/organizations/{organizationId}/wireless/clients/connections/authentication/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-connections-dhcp-by-client/)

#### Get IP assignment for all clients in the organization

Operation ID: `getOrganizationWirelessClientsConnectionsDhcpByClient`

PATH _`/organizations/{organizationId}/wireless/clients/connections/dhcp/byClient`_

    [
      {
        "successes": {
          "count": 4387
        },
        "warnings": {
          "byReason": [
            {
              "reason": "DHCP_NAK_AFTER_ACK",
              "count": 1
            }
          ]
        },
        "failures": {
          "byReason": [
            {
              "reason": "DHCP_NAK",
              "count": 109,
              "recentEvent": {
                "ssid": {
                  "number": 3,
                  "name": "Guest Wifi"
                },
                "radio": {
                  "number": 0,
                  "band": "2.4"
                }
              }
            }
          ]
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        },
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get IP assignment for all clients in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/clients/connections/dhcp/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-clients-connections-failures-history-by-device/)

#### Returns failed wireless client connections for this organization by device

Operation ID: `getOrganizationWirelessClientsConnectionsFailuresHistoryByDevice`

PATH _`/organizations/{organizationId}/wireless/clients/connections/failures/history/byDevice`_

    {
      "mac": "5c:83:8f:58:b1:81",
      "description": " auth_mode='radius_mac_auth-802.1x' vap='7' channel='11' rssi='55'",
      "step": "auth",
      "radio": {
        "index": 0,
        "channel": 12,
        "rssi": 55
      },
      "ssid": {
        "number": 1
      },
      "ts": "2023-05-23T12:02:46.298Z",
      "network": {
        "id": "L_12345"
      },
      "failureId": "MTc0NTM3NzY3NDgwNy1hdXRo"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns failed wireless client connections for this organization by device
> 
> **GET** `/organizations/{organizationId}/wireless/clients/connections/failures/history/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/by-organization-wireless-clients-rf-health-overview-network/)

#### Show the by-network client information for the organization in the given interval

Operation ID: `byOrganizationWirelessClientsRfHealthOverviewNetwork`

PATH _`/organizations/{organizationId}/wireless/clients/rfHealth/overview/byNetwork`_

    {
      "items": [
        {
          "network": {
            "id": "N_1234",
            "name": "MyNetwork"
          },
          "readings": {
            "count": 30,
            "byBand": [
              {
                "band": "2.4",
                "count": 30,
                "snr": {
                  "average": 22
                }
              }
            ]
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Show the by-network client information for the organization in the given interval. This includes average SNR
> 
> **GET** `/organizations/{organizationId}/wireless/clients/rfHealth/overview/byNetwork`  
> 
> * * *

* * *

### ssids

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-ssid-policies-client-exclusion/)

#### Update the client exclusion status configuration for a given SSID

Operation ID: `updateNetworkWirelessSsidPoliciesClientExclusion`

PATH _`/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion`_

    {
      "ssid": {
        "id": "12312333",
        "number": 1,
        "name": "My SSID"
      },
      "network": {
        "id": "N_1234",
        "name": "MR wireless 1"
      },
      "static": {
        "enabled": true
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the client exclusion status configuration for a given SSID
> 
> **PUT** `/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-ssid-policies-client-exclusion-static-exclusions/)

#### Set the static client exclusion list for the given SSID

Operation ID: `updateNetworkWirelessSsidPoliciesClientExclusionStaticExclusions`

PATH _`/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions`_

    {
      "ssid": {
        "id": "12312333",
        "number": 1,
        "name": "My SSID"
      },
      "network": {
        "id": "N_1234",
        "name": "MR wireless 1"
      },
      "macs": [
        "00:11:22:33:44:55",
        "aa:bb:cc:dd:ee:ff"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Set the static client exclusion list for the given SSID
> 
> **PUT** `/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-wireless-ssid-policies-client-exclusion-static-exclusions-bulk-add/)

#### Add a list of MAC addresses to the static client exclusion list for the given SSID

Operation ID: `createNetworkWirelessSsidPoliciesClientExclusionStaticExclusionsBulkAdd`

PATH _`/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions/bulkAdd`_

    {
      "ssid": {
        "id": "12312333",
        "number": 1,
        "name": "My SSID"
      },
      "network": {
        "id": "N_1234",
        "name": "MR wireless 1"
      },
      "macs": [
        "00:11:22:33:44:55",
        "aa:bb:cc:dd:ee:ff"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Add a list of MAC addresses to the static client exclusion list for the given SSID
> 
> **POST** `/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions/bulkAdd`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-wireless-ssid-policies-client-exclusion-static-exclusions-bulk-remove/)

#### Delete a list of MAC addresses from the static client exclusion list for the given SSID

Operation ID: `createNetworkWirelessSsidPoliciesClientExclusionStaticExclusionsBulkRemove`

PATH _`/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions/bulkRemove`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete a list of MAC addresses from the static client exclusion list for the given SSID
> 
> **POST** `/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions/bulkRemove`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-ssids-policies-client-exclusion-by-ssid/)

#### Returns an array of objects, each containing client exclusion enablement statuses for one SSID

Operation ID: `getOrganizationWirelessSsidsPoliciesClientExclusionBySsid`

PATH _`/organizations/{organizationId}/wireless/ssids/policies/clientExclusion/bySsid`_

    {
      "items": [
        {
          "ssid": {
            "id": "12312333",
            "number": 1,
            "name": "My SSID"
          },
          "network": {
            "id": "N_1234",
            "name": "MR wireless 1"
          },
          "static": {
            "enabled": true
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 105,
            "remaining": 25
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns an array of objects, each containing client exclusion enablement statuses for one SSID
> 
> **GET** `/organizations/{organizationId}/wireless/ssids/policies/clientExclusion/bySsid`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-ssids-policies-client-exclusion-static-exclusions-by-ssid/)

#### Returns an array of objects, each containing a list of MAC's excluded from a given SSID

Operation ID: `getOrganizationWirelessSsidsPoliciesClientExclusionStaticExclusionsBySsid`

PATH _`/organizations/{organizationId}/wireless/ssids/policies/clientExclusion/static/exclusions/bySsid`_

    {
      "items": [
        {
          "ssid": {
            "id": "12312333",
            "number": 1,
            "name": "My SSID"
          },
          "network": {
            "id": "N_1234",
            "name": "MR wireless 1"
          },
          "macs": [
            "00:11:22:33:44:55",
            "aa:bb:cc:dd:ee:ff"
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 105,
            "remaining": 25
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns an array of objects, each containing a list of MAC's excluded from a given SSID
> 
> **GET** `/organizations/{organizationId}/wireless/ssids/policies/clientExclusion/static/exclusions/bySsid`  
> 
> * * *

* * *

\[ switch \]
------------

### alerts

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-alerts-poe-by-device/)

#### Gets all poe related alerts over a given network and returns information by device

Operation ID: `getOrganizationSwitchAlertsPoeByDevice`

PATH _`/organizations/{organizationId}/switch/alerts/poe/byDevice`_

    [
      {
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "name": "My switch",
        "mac": "00:11:22:33:44:55",
        "serial": "Q234-ABCD-5678",
        "model": "MR34",
        "port": "1",
        "issueType": "poe_denied",
        "failureCount": 0,
        "startTime": "2024-04-26T18:02:24Z",
        "endTime": "2024-04-26T18:07:05Z"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Gets all poe related alerts over a given network and returns information by device
> 
> **GET** `/organizations/{organizationId}/switch/alerts/poe/byDevice`  
> 
> * * *

* * *

### configTemplates

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-config-templates-switch-profiles-ports-mirrors-by-switch-profile/)

#### list the port mirror configurations in an organization by switch profile

Operation ID: `getOrganizationConfigTemplatesSwitchProfilesPortsMirrorsBySwitchProfile`

PATH _`/organizations/{organizationId}/configTemplates/switch/profiles/ports/mirrors/bySwitchProfile`_

    {
      "items": [
        {
          "profileId": "1098",
          "configTemplate": {
            "id": "N_23952905",
            "name": "Main Office"
          },
          "mirror": {
            "source": {
              "ports": [
                {
                  "number": 2,
                  "module": {
                    "type": "C9800-2X40GE",
                    "slot": 1
                  }
                }
              ],
              "filter": {
                "vlans": "100, 200-210",
                "hasTransitVlan": true
              }
            },
            "destination": {
              "port": {
                "number": 7,
                "module": {
                  "type": "C9800-2X40GE",
                  "slot": 1
                }
              },
              "vlan": "10"
            },
            "role": "source",
            "comment": "My pretty comment",
            "tags": [
              "tag1",
              "tag2"
            ]
          },
          "warnings": [
            "sample warning message"
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### list the port mirror configurations in an organization by switch profile
> 
> **GET** `/organizations/{organizationId}/configTemplates/switch/profiles/ports/mirrors/bySwitchProfile`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-config-template-switch-profile-ports-mirror/)

#### Update a port mirror

Operation ID: `updateOrganizationConfigTemplateSwitchProfilePortsMirror`

PATH _`/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/mirror`_

    {
      "profileId": "1098",
      "configTemplate": {
        "id": "N_23952905",
        "name": "Main Office"
      },
      "mirror": {
        "source": {
          "ports": [
            {
              "number": 2,
              "module": {
                "type": "C9800-2X40GE",
                "slot": 1
              }
            }
          ],
          "filter": {
            "vlans": "100, 200-210",
            "hasTransitVlan": true
          }
        },
        "destination": {
          "port": {
            "number": 7,
            "module": {
              "type": "C9800-2X40GE",
              "slot": 1
            }
          },
          "vlan": "10"
        },
        "role": "source",
        "comment": "My pretty comment",
        "tags": [
          "tag1",
          "tag2"
        ]
      },
      "warnings": [
        "sample warning message"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a port mirror
> 
> **PUT** `/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/mirror`  
> 
> * * *

* * *

### connectivity

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-connectivity-lan-link-errors-by-device-by-port/)

#### Lan link errors by device and port.

Operation ID: `getOrganizationSwitchConnectivityLanLinkErrorsByDeviceByPort`

PATH _`/organizations/{organizationId}/switch/connectivity/lanLink/errors/byDevice/byPort`_

    [
      {
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        },
        "issueType": "crc",
        "port": 1,
        "startTime": "2024-04-26T18:02:24Z",
        "endTime": "2024-04-26T18:07:05Z"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Lan link errors by device and port.
> 
> **GET** `/organizations/{organizationId}/switch/connectivity/lanLink/errors/byDevice/byPort`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-connectivity-lan-stp-errors-by-device-by-port/)

#### Lan STP errors by device and port.

Operation ID: `getOrganizationSwitchConnectivityLanStpErrorsByDeviceByPort`

PATH _`/organizations/{organizationId}/switch/connectivity/lanStp/errors/byDevice/byPort`_

    [
      {
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        },
        "issueType": "stp_rootguard_active",
        "port": 2,
        "startTime": "2024-04-26T18:02:24Z",
        "endTime": "2024-04-26T18:07:05Z"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Lan STP errors by device and port.
> 
> **GET** `/organizations/{organizationId}/switch/connectivity/lanStp/errors/byDevice/byPort`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-connectivity-vrrp-failures-by-device/)

#### Gets all vrrp related alerts over a given network and returns information by device

Operation ID: `getOrganizationSwitchConnectivityVrrpFailuresByDevice`

PATH _`/organizations/{organizationId}/switch/connectivity/vrrp/failures/byDevice`_

    [
      {
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        },
        "ssid": {
          "model": "MR34"
        },
        "issueType": "vrrp_failover",
        "failureCount": 0,
        "startTime": "2024-04-26T18:02:24Z",
        "endTime": "2024-04-26T18:07:05Z"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Gets all vrrp related alerts over a given network and returns information by device
> 
> **GET** `/organizations/{organizationId}/switch/connectivity/vrrp/failures/byDevice`  
> 
> * * *

* * *

### spanningTree

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-spanning-tree/)

#### Updates Spanning Tree configuration

Operation ID: `updateNetworkSwitchSpanningTree`

PATH _`/networks/{networkId}/switch/spanningTree`_

    {
      "enabled": false,
      "mode": "mst",
      "priorities": [
        {
          "switches": [
            "Q234-ABCD-0001",
            "Q234-ABCD-0002",
            "Q234-ABCD-0003"
          ],
          "stacks": [
            "789102",
            "123456",
            "129102"
          ],
          "switchProfiles": [
            "1098",
            "1099",
            "1100"
          ],
          "priority": 4096,
          "vlanList": "40,10-19"
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Updates Spanning Tree configuration
> 
> **PUT** `/networks/{networkId}/switch/spanningTree`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-spanning-tree/)

#### Returns Spanning Tree configuration settings

Operation ID: `getOrganizationSwitchSpanningTree`

PATH _`/organizations/{organizationId}/switch/spanningTree`_

    {
      "enabled": false,
      "mode": "mst",
      "priorities": [
        {
          "switches": [
            "Q234-ABCD-0001",
            "Q234-ABCD-0002",
            "Q234-ABCD-0003"
          ],
          "stacks": [
            "789102",
            "123456",
            "129102"
          ],
          "switchProfiles": [
            "1098",
            "1099",
            "1100"
          ],
          "priority": 4096,
          "vlanList": "40,10-19"
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns Spanning Tree configuration settings
> 
> **GET** `/organizations/{organizationId}/switch/spanningTree`  
> 
> * * *

* * *

### raGuardPolicy

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-ra-guard-policy/)

#### Return RA Guard settings

Operation ID: `getNetworkSwitchRaGuardPolicy`

PATH _`/networks/{networkId}/switch/raGuardPolicy`_

    {
      "defaultPolicy": "allowed",
      "blockedServers": [
        "00:50:56:00:00:03",
        "00:50:56:00:00:04"
      ],
      "allowedServers": [
        "00:50:56:00:00:01",
        "00:50:56:00:00:02"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return RA Guard settings. Blocked servers are applied when default policy is allowed, and vice versa for allowed servers and blocked default policy.
> 
> **GET** `/networks/{networkId}/switch/raGuardPolicy`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update RA Guard settings
> 
> **PUT** `/networks/{networkId}/switch/raGuardPolicy`  
> 
> * * *

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-devices-system-queues-history-by-switch-by-interval/)

#### Return a historical record of packet transmission and loss, broken down by protocol, for insight into switch device health.

Operation ID: `getOrganizationSwitchDevicesSystemQueuesHistoryBySwitchByInterval`

PATH _`/organizations/{organizationId}/switch/devices/system/queues/history/bySwitch/byInterval`_

    {
      "items": [
        {
          "serial": "Q234-ABCD-0001",
          "model": "MS",
          "name": "My switch",
          "mac": "00:11:22:33:44:55",
          "tags": [
            "tag1",
            "tag2"
          ],
          "network": {
            "id": "N_24329156",
            "name": "Main Office",
            "tags": [
              "tag1",
              "tag2"
            ]
          },
          "history": [
            {
              "startTs": "2018-02-11T00:00:00.090210Z",
              "endTs": "2018-02-11T00:00:00.090210Z",
              "counts": {
                "processed": {
                  "total": 9,
                  "byProtocol": {
                    "stp": 1,
                    "ospf": 1,
                    "lacp": 1,
                    "arp": 1,
                    "management": 5
                  }
                },
                "dropped": {
                  "total": 3,
                  "byProtocol": {
                    "stp": 0,
                    "ospf": 1,
                    "lacp": 0,
                    "arp": 2,
                    "management": 0
                  }
                }
              }
            }
          ],
          "stack": {
            "id": "Stack ID",
            "name": "Stack name",
            "members": [
              {
                "serial": "Q234-ABCD-0001",
                "model": "MS",
                "name": "My switch",
                "mac": "00:11:22:33:44:55",
                "tags": [
                  "tag1",
                  "tag2"
                ],
                "history": [
                  {
                    "startTs": "2018-02-11T00:00:00.090210Z",
                    "endTs": "2018-02-11T00:00:00.090210Z",
                    "counts": {
                      "processed": {
                        "total": 8,
                        "byProtocol": {
                          "arp": 2,
                          "management": 6
                        }
                      },
                      "dropped": {
                        "total": 3,
                        "byProtocol": {
                          "arp": 1,
                          "management": 2
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 4,
            "remaining": 2
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a historical record of packet transmission and loss, broken down by protocol, for insight into switch device health.
> 
> **GET** `/organizations/{organizationId}/switch/devices/system/queues/history/bySwitch/byInterval`  
> 
> * * *

* * *

### clients

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-clients-connections-authentication-by-client/)

#### Summarizes authentication outcomes per switch client across an organization.

Operation ID: `getOrganizationSwitchClientsConnectionsAuthenticationByClient`

PATH _`/organizations/{organizationId}/switch/clients/connections/authentication/byClient`_

    [
      {
        "successes": {
          "count": 10
        },
        "failures": {
          "byType": [
            {
              "type": "ap_noauth",
              "count": 2
            }
          ]
        },
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Summarizes authentication outcomes per switch client across an organization.
> 
> **GET** `/organizations/{organizationId}/switch/clients/connections/authentication/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-clients-connections-dhcp-by-client/)

#### Get IP assignment for all clients in the organization

Operation ID: `getOrganizationSwitchClientsConnectionsDhcpByClient`

PATH _`/organizations/{organizationId}/switch/clients/connections/dhcp/byClient`_

    [
      {
        "successes": {
          "count": 1
        },
        "failures": {
          "count": 1
        },
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get IP assignment for all clients in the organization
> 
> **GET** `/organizations/{organizationId}/switch/clients/connections/dhcp/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-clients-connections-switch-port-status-by-client/)

#### Switch port status by client.

Operation ID: `getOrganizationSwitchClientsConnectionsSwitchPortStatusByClient`

PATH _`/organizations/{organizationId}/switch/clients/connections/switchPortStatus/byClient`_

    [
      {
        "successes": {
          "count": 3
        },
        "failures": {
          "byType": [
            {
              "type": "poe",
              "count": 2
            }
          ]
        },
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Switch port status by client.
> 
> **GET** `/organizations/{organizationId}/switch/clients/connections/switchPortStatus/byClient`  
> 
> * * *

* * *

### stacks

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-stack-ports-mirror/)

#### Update switch port mirrors for switch stacks

Operation ID: `updateNetworkSwitchStackPortsMirror`

PATH _`/networks/{networkId}/switch/stacks/{switchStackId}/ports/mirror`_

    {
      "switchStackId": "123456",
      "network": {
        "id": "N_24329156",
        "name": "Main Office"
      },
      "mirror": {
        "source": {
          "ports": [
            {
              "serial": "Q234-ABCD-5678",
              "number": 2,
              "module": {
                "type": "C9800-2X40GE",
                "slot": 1
              }
            }
          ],
          "filter": {
            "vlans": "100, 200-210",
            "hasTransitVlan": true
          }
        },
        "destination": {
          "port": {
            "serial": "Q234-ABCD-5670",
            "number": 7,
            "module": {
              "type": "C9800-2X40GE",
              "slot": 2
            }
          },
          "vlan": "10"
        },
        "role": "source",
        "comment": "My pretty comment",
        "tags": [
          "tag1",
          "tag2"
        ]
      },
      "warnings": [
        "Warnings from traffic mirror configuration changes"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update switch port mirrors for switch stacks
> 
> **PUT** `/networks/{networkId}/switch/stacks/{switchStackId}/ports/mirror`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-stacks-ports-mirrors-by-stack/)

#### List the port mirror configurations in an organization by switch

Operation ID: `getOrganizationSwitchStacksPortsMirrorsByStack`

PATH _`/organizations/{organizationId}/switch/stacks/ports/mirrors/byStack`_

    [
      {
        "items": [
          {
            "switchStackId": "123456",
            "network": {
              "id": "N_24329156",
              "name": "Main Office"
            },
            "mirror": {
              "source": {
                "ports": [
                  {
                    "serial": "Q234-ABCD-5678",
                    "number": 2,
                    "module": {
                      "type": "C9800-2X40GE",
                      "slot": 1
                    }
                  }
                ],
                "filter": {
                  "vlans": "100, 200-210",
                  "hasTransitVlan": true
                }
              },
              "destination": {
                "port": {
                  "serial": "Q234-ABCD-5670",
                  "number": 7,
                  "module": {
                    "type": "C9800-2X40GE",
                    "slot": 2
                  }
                },
                "vlan": "10"
              },
              "role": "source",
              "comment": "My pretty comment",
              "tags": [
                "tag1",
                "tag2"
              ]
            },
            "warnings": [
              "Warnings from traffic mirror configuration changes"
            ]
          }
        ],
        "meta": {
          "counts": {
            "items": {
              "total": 1
            }
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the port mirror configurations in an organization by switch
> 
> **GET** `/organizations/{organizationId}/switch/stacks/ports/mirrors/byStack`  
> 
> * * *

* * *

### routing

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-autonomous-systems/)

#### List the autonomous systems configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpAutonomousSystems`

PATH _`/organizations/{organizationId}/switch/routing/bgp/autonomousSystems`_

    {
      "items": [
        {
          "autonomousSystemId": "123",
          "number": 65000,
          "description": "Core AS",
          "switchFabric": {
            "id": "789",
            "name": "Fabric 1"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the autonomous systems configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create an autonomous system. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-autonomous-systems-overview-by-autonomous-system/)

#### List the overview of the autonomous systems configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpAutonomousSystemsOverviewByAutonomousSystem`

PATH _`/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/overview/byAutonomousSystem`_

    {
      "items": [
        {
          "autonomousSystemId": "123",
          "counts": {
            "routers": {
              "total": 2
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the autonomous systems configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/overview/byAutonomousSystem`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-switch-routing-bgp-autonomous-system/)

#### Update an autonomous system

Operation ID: `updateOrganizationSwitchRoutingBgpAutonomousSystem`

PATH _`/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/{autonomousSystemId}`_

    {
      "autonomousSystemId": "123",
      "number": 65000,
      "description": "Core AS",
      "switchFabric": {
        "id": "789",
        "name": "Fabric 1"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an autonomous system. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **PUT** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/{autonomousSystemId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an autonomous system from an organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **DELETE** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/{autonomousSystemId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-filters-filter-lists/)

#### List the filter lists configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpFiltersFilterLists`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists`_

    {
      "items": [
        {
          "listId": "123",
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "name": "1",
          "description": "Sample filter list description"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the filter lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-switch-routing-bgp-filters-filter-lists-deploy/)

#### Create or update a filter list, in addition to its associated rules

Operation ID: `createOrganizationSwitchRoutingBgpFiltersFilterListsDeploy`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/deploy`_

    {
      "filterList": {
        "id": "123",
        "name": "1",
        "description": "Sample filter list description"
      },
      "network": {
        "id": "L_123",
        "name": "My network name"
      },
      "rules": [
        {
          "id": "123",
          "sequenceNumber": 10,
          "policy": "permit",
          "match": {
            "regex": "^109$"
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create or update a filter list, in addition to its associated rules. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/deploy`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-filters-filter-lists-overview-by-filter-list/)

#### List the overview of the filter lists configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpFiltersFilterListsOverviewByFilterList`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/overview/byFilterList`_

    {
      "items": [
        {
          "listId": "135",
          "counts": {
            "neighbors": {
              "total": 3
            },
            "peerGroups": {
              "total": 2
            },
            "rules": {
              "total": 1
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the filter lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/overview/byFilterList`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-filters-filter-lists-rules/)

#### List the filter list rules configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpFiltersFilterListsRules`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/rules`_

    {
      "items": [
        {
          "ruleId": "123",
          "filterList": {
            "id": "456",
            "name": "3"
          },
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "sequenceNumber": 10,
          "policy": "permit",
          "match": {
            "regex": "^109$"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the filter list rules configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/rules`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-switch-routing-bgp-filters-filter-list/)

#### Delete a filter list

Operation ID: `deleteOrganizationSwitchRoutingBgpFiltersFilterList`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/{listId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete a filter list. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **DELETE** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/{listId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-filters-prefix-lists/)

#### List the prefix lists configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpFiltersPrefixLists`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists`_

    {
      "items": [
        {
          "listId": "123",
          "name": "SamplePrefixListName",
          "description": "Sample prefix list description",
          "network": {
            "id": "L_123",
            "name": "My network name"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the prefix lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-switch-routing-bgp-filters-prefix-lists-deploy/)

#### Create or update a prefix list, in addition to its associated rules

Operation ID: `createOrganizationSwitchRoutingBgpFiltersPrefixListsDeploy`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/deploy`_

    {
      "network": {
        "id": "L_123",
        "name": "My network name"
      },
      "prefixList": {
        "id": "123",
        "name": "SamplePrefixListName",
        "description": "Sample prefix list description"
      },
      "rules": [
        {
          "id": "123",
          "sequenceNumber": 10,
          "policy": "permit",
          "conditions": {
            "cidr": "10.0.0.0/8",
            "prefixLength": {
              "minimum": 16,
              "maximum": 28
            }
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create or update a prefix list, in addition to its associated rules. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/deploy`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-filters-prefix-lists-overview-by-prefix-list/)

#### List the overview of the prefix lists configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpFiltersPrefixListsOverviewByPrefixList`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/overview/byPrefixList`_

    {
      "items": [
        {
          "listId": "135",
          "counts": {
            "neighbors": {
              "total": 3
            },
            "peerGroups": {
              "total": 2
            },
            "rules": {
              "total": 1
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the prefix lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/overview/byPrefixList`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-filters-prefix-lists-rules/)

#### List the prefix list rules configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpFiltersPrefixListsRules`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/rules`_

    {
      "items": [
        {
          "ruleId": "123",
          "prefixList": {
            "id": "456",
            "name": "my-prefix-list"
          },
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "sequenceNumber": 10,
          "policy": "permit",
          "conditions": {
            "cidr": "10.0.0.0/8",
            "prefixLength": {
              "minimum": 16,
              "maximum": 28
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the prefix list rules configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/rules`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-switch-routing-bgp-filters-prefix-list/)

#### Delete a prefix list

Operation ID: `deleteOrganizationSwitchRoutingBgpFiltersPrefixList`

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/{listId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete a prefix list. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **DELETE** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/{listId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-peers-groups/)

#### List the BGP peer groups configured in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpPeersGroups`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups`_

    {
      "items": [
        {
          "peerGroupId": "999",
          "router": {
            "id": "888"
          },
          "profile": {
            "id": "777",
            "name": "EBGP"
          },
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "name": "MyPeerGroup"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the BGP peer groups configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/groups`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-peers-groups-address-families-deployments/)

#### List all BGP deployment information for multiple peer groups or address families configured in the given organization, including profile information, peer group address family information, neighbors, and listen ranges

Operation ID: `getOrganizationSwitchRoutingBgpPeersGroupsAddressFamiliesDeployments`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups/addressFamilies/deployments`_

    {
      "items": [
        {
          "addressFamily": {
            "id": "456",
            "description": "ipv4 unicast"
          },
          "listenRanges": [
            {
              "id": "999",
              "cidr": "192.0.2.0/24",
              "enabled": true,
              "description": "Campus-Bldg-1"
            }
          ],
          "neighbors": [
            {
              "id": "999",
              "description": "BGP gateway",
              "address": "10.0.0.1",
              "peering": {
                "enabled": true
              }
            }
          ],
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "peerGroup": {
            "id": "999",
            "name": "MyPeerGroup"
          },
          "peerGroupAddressFamilyBinding": {
            "id": "123"
          },
          "peerGroupAddressFamilyBindingProfile": {
            "id": "123",
            "advertisement": {
              "interval": 20,
              "defaultRoutes": {
                "enabled": true
              }
            },
            "communityAttribute": {
              "send": {
                "enabled": true
              }
            },
            "name": "Sample binding profile",
            "nextHop": {
              "self": {
                "enabled": true
              },
              "unchanged": {
                "enabled": false
              }
            },
            "removePrivateAs": {
              "enabled": true
            },
            "routeReflector": {
              "client": {
                "enabled": false
              }
            },
            "softReconfiguration": {
              "direction": "inbound"
            },
            "weight": 30
          },
          "peerGroupProfile": {
            "id": "456",
            "name": "DefaultPeerGroup",
            "description": "Standard settings",
            "ebgp": {
              "connectedCheck": {
                "enabled": true
              },
              "multihop": {
                "maximum": 10
              }
            },
            "authentication": {
              "enabled": true,
              "password": "my password"
            },
            "timers": {
              "hold": 90,
              "keepalive": 30
            },
            "autonomousSystem": {
              "remote": {
                "number": 65000
              }
            },
            "interfaces": {
              "loopback": {
                "source": {
                  "id": "555",
                  "name": "0",
                  "number": 0
                }
              }
            }
          },
          "router": {
            "id": "888"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BGP deployment information for multiple peer groups or address families configured in the given organization, including profile information, peer group address family information, neighbors, and listen ranges. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/groups/addressFamilies/deployments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-switch-routing-bgp-peers-groups-deploy/)

#### Create or update a peer group, in addition to an associated peer group profile, peer group address family binding, peer group address family binding profile and routing policies associated with the peer group

Operation ID: `createOrganizationSwitchRoutingBgpPeersGroupsDeploy`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups/deploy`_

    {
      "addressFamily": {
        "id": "456",
        "description": "ipv4 unicast"
      },
      "network": {
        "id": "L_123",
        "name": "My network name"
      },
      "peerGroup": {
        "id": "999",
        "name": "MyPeerGroup"
      },
      "peerGroupAddressFamilyBinding": {
        "id": "123"
      },
      "peerGroupAddressFamilyBindingProfile": {
        "id": "123",
        "advertisement": {
          "interval": 20,
          "defaultRoutes": {
            "enabled": true
          }
        },
        "communityAttribute": {
          "send": {
            "enabled": true
          }
        },
        "name": "Sample binding profile",
        "nextHop": {
          "self": {
            "enabled": true
          },
          "unchanged": {
            "enabled": false
          }
        },
        "removePrivateAs": {
          "enabled": true
        },
        "routeReflector": {
          "client": {
            "enabled": false
          }
        },
        "softReconfiguration": {
          "direction": "inbound"
        },
        "weight": 30
      },
      "peerGroupProfile": {
        "id": "456",
        "name": "DefaultPeerGroup",
        "description": "Standard settings",
        "ebgp": {
          "connectedCheck": {
            "enabled": true
          },
          "multihop": {
            "maximum": 10
          }
        },
        "authentication": {
          "enabled": true,
          "password": "my password"
        },
        "timers": {
          "hold": 90,
          "keepalive": 30
        },
        "autonomousSystem": {
          "remote": {
            "number": 65000
          }
        },
        "interfaces": {
          "loopback": {
            "source": {
              "id": "555",
              "name": "0",
              "number": 0
            }
          }
        }
      },
      "policies": [
        {
          "id": "123",
          "ruleList": {
            "type": "Prefix list",
            "name": "SamplePrefixListName",
            "id": "789"
          },
          "direction": "in"
        }
      ],
      "router": {
        "id": "888"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create or update a peer group, in addition to an associated peer group profile, peer group address family binding, peer group address family binding profile and routing policies associated with the peer group. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/peers/groups/deploy`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-peers-groups-deployments/)

#### List all BGP deployment information for peer groups configured in the given organization, including peer group address family information, as well as routing policies

Operation ID: `getOrganizationSwitchRoutingBgpPeersGroupsDeployments`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups/deployments`_

    {
      "items": [
        {
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "peerGroup": {
            "id": "999",
            "name": "MyPeerGroup"
          },
          "peerGroupProfile": {
            "id": "456",
            "name": "DefaultPeerGroup",
            "description": "Standard settings",
            "ebgp": {
              "connectedCheck": {
                "enabled": true
              },
              "multihop": {
                "maximum": 10
              }
            },
            "authentication": {
              "enabled": true,
              "password": "my password"
            },
            "timers": {
              "hold": 90,
              "keepalive": 30
            },
            "autonomousSystem": {
              "remote": {
                "number": 65000
              }
            },
            "interfaces": {
              "loopback": {
                "source": {
                  "id": "555",
                  "name": "0",
                  "number": 0
                }
              }
            }
          },
          "router": {
            "id": "888"
          },
          "deployments": [
            {
              "addressFamily": {
                "id": "456",
                "description": "ipv4 unicast"
              },
              "peerGroupAddressFamilyBinding": {
                "id": "123"
              },
              "peerGroupAddressFamilyBindingProfile": {
                "id": "123",
                "advertisement": {
                  "interval": 20,
                  "defaultRoutes": {
                    "enabled": true
                  }
                },
                "communityAttribute": {
                  "send": {
                    "enabled": true
                  }
                },
                "name": "Sample binding profile",
                "nextHop": {
                  "self": {
                    "enabled": true
                  },
                  "unchanged": {
                    "enabled": false
                  }
                },
                "removePrivateAs": {
                  "enabled": true
                },
                "routeReflector": {
                  "client": {
                    "enabled": false
                  }
                },
                "softReconfiguration": {
                  "direction": "inbound"
                },
                "weight": 30
              },
              "policies": [
                {
                  "id": "123",
                  "ruleList": {
                    "type": "Prefix list",
                    "name": "SamplePrefixListName",
                    "id": "789"
                  },
                  "direction": "in"
                }
              ]
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BGP deployment information for peer groups configured in the given organization, including peer group address family information, as well as routing policies. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/groups/deployments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-peers-groups-overview-by-peer-group/)

#### List the overview of the BGP peer groups configured in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpPeersGroupsOverviewByPeerGroup`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups/overview/byPeerGroup`_

    {
      "items": [
        {
          "peerGroupId": "123",
          "counts": {
            "listenRanges": {
              "total": 1
            },
            "neighbors": {
              "total": 2
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the BGP peer groups configured in the given organization
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/groups/overview/byPeerGroup`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-peers-listen-ranges/)

#### List the listen ranges configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpPeersListenRanges`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/listenRanges`_

    {
      "items": [
        {
          "listenRangeId": "999",
          "router": {
            "id": "888"
          },
          "peerGroup": {
            "id": "777",
            "name": "MyPeerGroupName"
          },
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "cidr": "192.0.2.0/24",
          "enabled": true,
          "description": "Campus-Bldg-1"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the listen ranges configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/listenRanges`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-peers-neighbors/)

#### List the neighbors configured for BGP in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpPeersNeighbors`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/neighbors`_

    {
      "items": [
        {
          "neighborId": "999",
          "router": {
            "id": "888"
          },
          "peerGroup": {
            "id": "777",
            "name": "MyPeerGroupName"
          },
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "description": "BGP gateway",
          "address": "10.0.0.1",
          "authentication": {
            "enabled": true,
            "password": "my password"
          },
          "ebgp": {
            "connectedCheck": {
              "enabled": true
            },
            "multihop": {
              "maximum": 10
            }
          },
          "interfaces": {
            "loopback": {
              "source": {
                "id": "555",
                "name": "0",
                "number": 0
              }
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the neighbors configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/neighbors`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-switch-routing-bgp-peers-neighbors-deploy/)

#### Create or update a neighor, in addition to an associated neighbor address family binding and routing policies associated with the neighbor

Operation ID: `createOrganizationSwitchRoutingBgpPeersNeighborsDeploy`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/neighbors/deploy`_

    {
      "addressFamily": {
        "id": "456",
        "description": "ipv4 unicast"
      },
      "neighbor": {
        "id": "999",
        "description": "BGP gateway",
        "address": "10.0.0.1",
        "authentication": {
          "enabled": true,
          "password": "my password"
        },
        "ebgp": {
          "connectedCheck": {
            "enabled": true
          },
          "multihop": {
            "maximum": 10
          }
        },
        "interfaces": {
          "loopback": {
            "source": {
              "id": "555",
              "name": "0",
              "number": 0
            }
          }
        }
      },
      "neighborAddressFamilyBinding": {
        "id": "123",
        "peering": {
          "enabled": true
        },
        "weight": 10,
        "advertisement": {
          "defaultRoutes": {
            "enabled": true
          }
        },
        "softReconfiguration": {
          "direction": "inbound"
        }
      },
      "network": {
        "id": "L_123",
        "name": "My network name"
      },
      "peerGroup": {
        "id": "777",
        "name": "MyPeerGroupName"
      },
      "policies": [
        {
          "id": "123",
          "ruleList": {
            "type": "Prefix list",
            "name": "SamplePrefixListName",
            "id": "789"
          },
          "direction": "in"
        }
      ],
      "router": {
        "id": "888"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create or update a neighor, in addition to an associated neighbor address family binding and routing policies associated with the neighbor. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/peers/neighbors/deploy`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-peers-neighbors-deployments/)

#### List all BGP deployment information for neighbors configured in the given organization, including address family information, as well as routing policies

Operation ID: `getOrganizationSwitchRoutingBgpPeersNeighborsDeployments`

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/neighbors/deployments`_

    {
      "items": [
        {
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "peerGroup": {
            "id": "777",
            "name": "MyPeerGroupName"
          },
          "router": {
            "id": "888"
          },
          "neighbor": {
            "id": "999",
            "description": "BGP gateway",
            "address": "10.0.0.1",
            "authentication": {
              "enabled": true,
              "password": "my password"
            },
            "ebgp": {
              "connectedCheck": {
                "enabled": true
              },
              "multihop": {
                "maximum": 10
              }
            },
            "interfaces": {
              "loopback": {
                "source": {
                  "id": "555",
                  "name": "0",
                  "number": 0
                }
              }
            }
          },
          "deployments": [
            {
              "addressFamily": {
                "id": "456",
                "description": "ipv4 unicast"
              },
              "neighborAddressFamilyBinding": {
                "id": "123",
                "peering": {
                  "enabled": true
                },
                "weight": 10,
                "advertisement": {
                  "defaultRoutes": {
                    "enabled": true
                  }
                },
                "softReconfiguration": {
                  "direction": "inbound"
                }
              },
              "policies": [
                {
                  "id": "123",
                  "ruleList": {
                    "type": "Prefix list",
                    "name": "SamplePrefixListName",
                    "id": "789"
                  },
                  "direction": "in"
                }
              ]
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BGP deployment information for neighbors configured in the given organization, including address family information, as well as routing policies. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/neighbors/deployments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-routers/)

#### List the routers configured in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpRouters`

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers`_

    {
      "items": [
        {
          "routerId": "123",
          "autonomousSystem": {
            "id": "123",
            "number": 65000,
            "description": "Core AS"
          },
          "esiMhPair": {
            "id": "7890",
            "name": "My ESI-MH Pair",
            "members": [
              "Q234-ABCD-0003",
              "Q234-ABCD-0004"
            ]
          },
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "stack": {
            "id": "12345",
            "name": "A Switch Stack",
            "members": [
              "Q234-ABCD-0001",
              "Q234-ABCD-0002"
            ]
          },
          "switch": {
            "serial": "Q234-ABCD-0001",
            "name": "Core S1",
            "model": "C9300X-24Y"
          },
          "switchFabric": {
            "id": "789",
            "name": "Fabric 1"
          },
          "enabled": true,
          "bgpIdentifier": {
            "address": "1.2.3.4",
            "interfaces": {
              "loopback": {
                "id": "789",
                "name": "1",
                "number": 1
              }
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the routers configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/routers`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-switch-routing-bgp-routers-deploy/)

#### Create a BGP router, in addition to an associated address family, address family prefixes, and address family profile

Operation ID: `createOrganizationSwitchRoutingBgpRoutersDeploy`

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/deploy`_

    {
      "addressFamily": {
        "id": "987",
        "afi": "ipv4",
        "safi": "unicast",
        "vrf": {
          "name": "Default"
        }
      },
      "addressFamilyPrefixes": [
        {
          "id": "987",
          "prefix": "10.128.0.0/16",
          "enabled": true,
          "description": "My prefix description"
        }
      ],
      "addressFamilyProfile": {
        "id": "456",
        "name": "Default address family",
        "ebgp": {
          "paths": {
            "maximum": 4
          }
        },
        "metrics": {
          "default": 300
        },
        "summarization": {
          "auto": {
            "enabled": true
          }
        },
        "redistribution": {
          "static": {
            "enabled": true
          },
          "connected": {
            "enabled": true
          }
        }
      },
      "autonomousSystem": {
        "id": "123",
        "number": 65000,
        "description": "Core AS"
      },
      "network": {
        "id": "L_123",
        "name": "My network name"
      },
      "router": {
        "id": "123",
        "enabled": true,
        "bgpIdentifier": {
          "address": "1.2.3.4",
          "interfaces": {
            "loopback": {
              "id": "789",
              "name": "1",
              "number": 1
            }
          }
        }
      },
      "stack": {
        "id": "12345",
        "name": "A Switch Stack",
        "members": [
          "Q234-ABCD-0001",
          "Q234-ABCD-0002"
        ]
      },
      "switch": {
        "serial": "Q234-ABCD-0001",
        "name": "Core S1",
        "model": "C9300X-24Y"
      },
      "switchFabric": {
        "id": "789",
        "name": "Fabric 1"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a BGP router, in addition to an associated address family, address family prefixes, and address family profile. This is helpful for the initial deployment of a BGP router.. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/routers/deploy`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-routers-deployments/)

#### List all BGP deployment information for routers configured in a given organization, including all address families

Operation ID: `getOrganizationSwitchRoutingBgpRoutersDeployments`

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/deployments`_

    {
      "items": [
        {
          "autonomousSystem": {
            "id": "123",
            "number": 65000,
            "description": "Core AS"
          },
          "network": {
            "id": "L_123",
            "name": "My network name"
          },
          "stack": {
            "id": "12345",
            "name": "A Switch Stack",
            "members": [
              "Q234-ABCD-0001",
              "Q234-ABCD-0002"
            ]
          },
          "switch": {
            "serial": "Q234-ABCD-0001",
            "name": "Core S1",
            "model": "C9300X-24Y"
          },
          "router": {
            "id": "123",
            "enabled": true,
            "bgpIdentifier": {
              "address": "1.2.3.4",
              "interfaces": {
                "loopback": {
                  "id": "789",
                  "name": "1",
                  "number": 1
                }
              }
            }
          },
          "switchFabric": {
            "id": "789",
            "name": "Fabric 1"
          },
          "deployments": [
            {
              "addressFamily": {
                "id": "987",
                "afi": "ipv4",
                "safi": "unicast",
                "vrf": {
                  "name": "Default"
                }
              },
              "addressFamilyPrefixes": [
                {
                  "id": "987",
                  "prefix": "10.128.0.0/16",
                  "enabled": true,
                  "description": "My prefix description"
                }
              ],
              "addressFamilyProfile": {
                "id": "456",
                "name": "Default address family",
                "ebgp": {
                  "paths": {
                    "maximum": 4
                  }
                },
                "metrics": {
                  "default": 300
                },
                "summarization": {
                  "auto": {
                    "enabled": true
                  }
                },
                "redistribution": {
                  "static": {
                    "enabled": true
                  },
                  "connected": {
                    "enabled": true
                  }
                }
              }
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BGP deployment information for routers configured in a given organization, including all address families. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/routers/deployments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-bgp-routers-overview-by-router/)

#### List the overview of the routers configured in the given organization

Operation ID: `getOrganizationSwitchRoutingBgpRoutersOverviewByRouter`

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/overview/byRouter`_

    {
      "items": [
        {
          "routerId": "123",
          "counts": {
            "listenRanges": {
              "total": 1
            },
            "neighbors": {
              "total": 2
            },
            "routes": {
              "advertised": {
                "total": 4
              }
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 100,
            "remaining": 10
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the routers configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/routers/overview/byRouter`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-switch-routing-bgp-routers-peers-deploy/)

#### Create and update listen ranges, update peers' enabled flag, and delete peer groups for a BGP router

Operation ID: `createOrganizationSwitchRoutingBgpRoutersPeersDeploy`

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/peers/deploy`_

    {
      "addressFamily": {
        "id": "987"
      },
      "network": {
        "id": "L_123",
        "name": "My network name"
      },
      "peerGroups": [
        {
          "id": "123",
          "listenRanges": [
            {
              "id": "999",
              "cidr": "192.0.2.0/24",
              "enabled": true,
              "description": "Campus-Bldg-1"
            }
          ],
          "neighbors": [
            {
              "id": "999",
              "description": "BGP gateway",
              "address": "10.0.0.1",
              "peering": {
                "enabled": true
              }
            }
          ]
        }
      ],
      "router": {
        "id": "123"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create and update listen ranges, update peers' enabled flag, and delete peer groups for a BGP router. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/routers/peers/deploy`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-switch-routing-bgp-router/)

#### Delete a router from an organization

Operation ID: `deleteOrganizationSwitchRoutingBgpRouter`

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/{routerId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete a router from an organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **DELETE** `/organizations/{organizationId}/switch/routing/bgp/routers/{routerId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-routing-static-routes/)

#### List layer 3 static routes for switches within an organization

Operation ID: `getOrganizationSwitchRoutingStaticRoutes`

PATH _`/organizations/{organizationId}/switch/routing/staticRoutes`_

    {
      "items": [
        {
          "staticRouteId": "1234",
          "name": "My route",
          "subnet": "192.168.1.0/24",
          "nextHopIp": "1.2.3.4",
          "managementNextHop": "1.2.3.5",
          "vrf": {
            "name": "Blue",
            "leakRouteToDefaultVrf": false
          },
          "advertiseViaOspf": false,
          "preferOverOspfRoutes": false,
          "networkId": "N_24329156",
          "serial": "Q234-ABCD-5678",
          "switchStackId": "789102"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1,
            "remaining": 0
          }
        }
      },
      "errors": [
        {
          "interfaceId": "42",
          "message": "Cannot delete default route"
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List layer 3 static routes for switches within an organization
> 
> **GET** `/organizations/{organizationId}/switch/routing/staticRoutes`  
> 
> * * *

* * *

### ports

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-switch-ports-mirror/)

#### Update a port mirror

Operation ID: `updateDeviceSwitchPortsMirror`

PATH _`/devices/{serial}/switch/ports/mirror`_

    {
      "serial": "Q234-ABCD-5678",
      "network": {
        "id": "N_24329156",
        "name": "Main Office"
      },
      "mirror": {
        "source": {
          "ports": [
            {
              "number": 2,
              "module": {
                "type": "C9800-2X40GE",
                "slot": 2
              }
            }
          ],
          "filter": {
            "vlans": "100, 200-210",
            "hasTransitVlan": true
          }
        },
        "destination": {
          "port": {
            "number": 7,
            "module": {
              "type": "C9800-2X40GE",
              "slot": 1
            }
          },
          "vlan": "10"
        },
        "role": "source",
        "comment": "My pretty comment",
        "tags": [
          "tag1",
          "tag2"
        ]
      },
      "warnings": [
        "Warnings from traffic mirror configuration changes"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a port mirror
> 
> **PUT** `/devices/{serial}/switch/ports/mirror`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-ports-profiles/)

#### List the port profiles in a network

Operation ID: `getNetworkSwitchPortsProfiles`

PATH _`/networks/{networkId}/switch/ports/profiles`_

    [
      {
        "profileId": "1284392014819",
        "networkId": "N_24329156",
        "name": "Phone",
        "description": "IP Phones for all office workers",
        "tags": [
          "tag1",
          "tag2"
        ],
        "associatedPorts": [
          {
            "portId": "8",
            "portNum": 8,
            "portName": "Dev - Cheshire Cat / 8",
            "serial": "Q234-ABCD-5678",
            "profile": {
              "enabled": true,
              "id": "1284392014819"
            }
          }
        ],
        "associatedSwitches": [
          {
            "switchId": 247165647951894,
            "name": "Dev - Cheshire Cat",
            "mac": "e0:cb:bc:a5:98:16",
            "serial": "Q234-ABCD-5678",
            "model": "MS120-48FP"
          }
        ],
        "assignedSwitchports": [
          {
            "portIds": [
              "1",
              "2",
              "3",
              "1_C3850-NM-8-10G_1",
              "1_C3850-NM-8-10G_2"
            ],
            "switch": {
              "serial": "Q234-ABCD-5678"
            },
            "template": {
              "id": 1983748489
            }
          }
        ],
        "createdAt": "2022-09-16T09:18:38Z",
        "updatedAt": "2022-09-16T09:18:38Z",
        "port": {
          "type": "access",
          "vlan": 10,
          "voiceVlan": 20,
          "allowedVlans": "1-100",
          "poeEnabled": true,
          "isolationEnabled": false,
          "rstpEnabled": true,
          "stpGuard": "disabled",
          "udld": "Alert only",
          "accessPolicyType": "Sticky MAC allow list",
          "accessPolicyNumber": 3,
          "macAllowList": [
            "34:56:fe:ce:8e:b0",
            "34:56:fe:ce:8e:b1"
          ],
          "stickyMacAllowList": [
            "34:56:fe:ce:8e:b0",
            "34:56:fe:ce:8e:b1"
          ],
          "stickyMacAllowListLimit": 5,
          "stormControlEnabled": true,
          "adaptivePolicyGroupId": "1284392014819",
          "peerSgtCapable": false,
          "daiTrusted": false
        },
        "isOrganizationWide": false,
        "networks": {
          "values": [
            {
              "id": "N_11865",
              "name": "Wonderland-Dev"
            }
          ],
          "type": "included"
        },
        "automations": [
          {
            "id": "N_11865",
            "name": "RYOFXAPO"
          }
        ],
        "access": "full"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the port profiles in a network
> 
> **GET** `/networks/{networkId}/switch/ports/profiles`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create a port profile in a network
> 
> **POST** `/networks/{networkId}/switch/ports/profiles`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-ports-profile/)

#### Update a port profile in a network

Operation ID: `updateNetworkSwitchPortsProfile`

PATH _`/networks/{networkId}/switch/ports/profiles/{id}`_

    {
      "profileId": "1284392014819",
      "networkId": "N_24329156",
      "name": "Phone",
      "description": "IP Phones for all office workers",
      "tags": [
        "tag1",
        "tag2"
      ],
      "associatedPorts": [
        {
          "portId": "8",
          "portNum": 8,
          "portName": "Dev - Cheshire Cat / 8",
          "serial": "Q234-ABCD-5678",
          "profile": {
            "enabled": true,
            "id": "1284392014819"
          }
        }
      ],
      "associatedSwitches": [
        {
          "switchId": 247165647951894,
          "name": "Dev - Cheshire Cat",
          "mac": "e0:cb:bc:a5:98:16",
          "serial": "Q234-ABCD-5678",
          "model": "MS120-48FP"
        }
      ],
      "assignedSwitchports": [
        {
          "portIds": [
            "1",
            "2",
            "3",
            "1_C3850-NM-8-10G_1",
            "1_C3850-NM-8-10G_2"
          ],
          "switch": {
            "serial": "Q234-ABCD-5678"
          },
          "template": {
            "id": 1983748489
          }
        }
      ],
      "createdAt": "2022-09-16T09:18:38Z",
      "updatedAt": "2022-09-16T09:18:38Z",
      "port": {
        "type": "access",
        "vlan": 10,
        "voiceVlan": 20,
        "allowedVlans": "1-100",
        "poeEnabled": true,
        "isolationEnabled": false,
        "rstpEnabled": true,
        "stpGuard": "disabled",
        "udld": "Alert only",
        "accessPolicyType": "Sticky MAC allow list",
        "accessPolicyNumber": 3,
        "macAllowList": [
          "34:56:fe:ce:8e:b0",
          "34:56:fe:ce:8e:b1"
        ],
        "stickyMacAllowList": [
          "34:56:fe:ce:8e:b0",
          "34:56:fe:ce:8e:b1"
        ],
        "stickyMacAllowListLimit": 5,
        "stormControlEnabled": true,
        "adaptivePolicyGroupId": "1284392014819",
        "peerSgtCapable": false,
        "daiTrusted": false
      },
      "isOrganizationWide": false,
      "networks": {
        "values": [
          {
            "id": "N_11865",
            "name": "Wonderland-Dev"
          }
        ],
        "type": "included"
      },
      "automations": [
        {
          "id": "N_11865",
          "name": "RYOFXAPO"
        }
      ],
      "access": "full"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a port profile in a network
> 
> **PUT** `/networks/{networkId}/switch/ports/profiles/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a port profile from a network
> 
> **DELETE** `/networks/{networkId}/switch/ports/profiles/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-mirrors-by-switch/)

#### list the port mirror configurations in an organization by switch

Operation ID: `getOrganizationSwitchPortsMirrorsBySwitch`

PATH _`/organizations/{organizationId}/switch/ports/mirrors/bySwitch`_

    {
      "items": [
        {
          "serial": "Q234-ABCD-5678",
          "network": {
            "id": "N_24329156",
            "name": "Main Office"
          },
          "mirror": {
            "source": {
              "ports": [
                {
                  "number": 2,
                  "module": {
                    "type": "C9800-2X40GE",
                    "slot": 2
                  }
                }
              ],
              "filter": {
                "vlans": "100, 200-210",
                "hasTransitVlan": true
              }
            },
            "destination": {
              "port": {
                "number": 7,
                "module": {
                  "type": "C9800-2X40GE",
                  "slot": 1
                }
              },
              "vlan": "10"
            },
            "role": "source",
            "comment": "My pretty comment",
            "tags": [
              "tag1",
              "tag2"
            ]
          },
          "warnings": [
            "Warnings from traffic mirror configuration changes"
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### list the port mirror configurations in an organization by switch
> 
> **GET** `/organizations/{organizationId}/switch/ports/mirrors/bySwitch`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-profiles/)

#### List the port profiles in an organization

Operation ID: `getOrganizationSwitchPortsProfiles`

PATH _`/organizations/{organizationId}/switch/ports/profiles`_

    [
      {
        "profileId": "1284392014819",
        "name": "Phone",
        "description": "IP Phones for all office workers",
        "createdAt": "2018-02-11T00:00:00.090210Z",
        "updatedAt": "2018-02-11T00:00:00.090210Z",
        "network": {
          "id": "N_24329156"
        },
        "counts": {
          "assigned": {
            "ports": 4,
            "switches": 2,
            "automations": 6
          },
          "networkCounts": {
            "included": 40,
            "excluded": 20
          }
        },
        "isOrganizationWide": false,
        "networks": {
          "values": [
            {
              "id": "N_11865",
              "name": "Wonderland-Dev"
            }
          ],
          "type": "included"
        },
        "access": "full"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the port profiles in an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create a port profile in an organization
> 
> **POST** `/organizations/{organizationId}/switch/ports/profiles`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-profiles-automations/)

#### list the automation port profiles in an organization

Operation ID: `getOrganizationSwitchPortsProfilesAutomations`

PATH _`/organizations/{organizationId}/switch/ports/profiles/automations`_

    {
      "items": [
        {
          "id": "1284392014819",
          "name": "Automation 1",
          "description": "A full length description of the automation.",
          "types": [
            "Custom",
            "Built-in"
          ],
          "fallbackProfile": {
            "id": "1284392014819",
            "name": "Profile 1"
          },
          "rules": [
            {
              "priority": 1,
              "conditions": [
                {
                  "attribute": "LLDP system description",
                  "values": [
                    "Meraki MR*",
                    "*Wireless*"
                  ]
                }
              ],
              "profile": {
                "id": "32",
                "name": "Profile 2"
              }
            }
          ],
          "assignedSwitchPorts": [
            {
              "portIds": [
                "1",
                "2",
                "3",
                "1_C3850-NM-8-10G_1",
                "1_C3850-NM-8-10G_2"
              ],
              "switch": {
                "serial": "Q234-ABCD-5678"
              }
            }
          ],
          "counts": {
            "assigned": {
              "devices": 2,
              "ports": 51,
              "networks": 1
            }
          },
          "isOrganizationWide": false,
          "networks": [
            {
              "id": "N_11865",
              "name": "Wonderland-Dev"
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 1
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### list the automation port profiles in an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles/automations`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create a port profile automation for an organization
> 
> **POST** `/organizations/{organizationId}/switch/ports/profiles/automations`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-organization-switch-ports-profiles-automation/)

#### Update a port profile automation in an organization

Operation ID: `updateOrganizationSwitchPortsProfilesAutomation`

PATH _`/organizations/{organizationId}/switch/ports/profiles/automations/{id}`_

    {
      "id": "1284392014819",
      "name": "Automation 1",
      "description": "A full length description of the automation.",
      "types": [
        "Custom",
        "Built-in"
      ],
      "fallbackProfile": {
        "id": "1284392014819",
        "name": "Profile 1"
      },
      "rules": [
        {
          "priority": 1,
          "conditions": [
            {
              "attribute": "LLDP system description",
              "values": [
                "Meraki MR*",
                "*Wireless*"
              ]
            }
          ],
          "profile": {
            "id": "32",
            "name": "Profile 2"
          }
        }
      ],
      "assignedSwitchPorts": [
        {
          "portIds": [
            "1",
            "2",
            "3",
            "1_C3850-NM-8-10G_1",
            "1_C3850-NM-8-10G_2"
          ],
          "switch": {
            "serial": "Q234-ABCD-5678"
          }
        }
      ],
      "counts": {
        "assigned": {
          "devices": 2,
          "ports": 51,
          "networks": 1
        }
      },
      "isOrganizationWide": false,
      "networks": [
        {
          "id": "N_11865",
          "name": "Wonderland-Dev"
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a port profile automation in an organization
> 
> **PUT** `/organizations/{organizationId}/switch/ports/profiles/automations/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an automation port profile from an organization
> 
> **DELETE** `/organizations/{organizationId}/switch/ports/profiles/automations/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-profiles-networks-assignments/)

#### Fetch all Network - Smart Port Profile associations for an organization

Operation ID: `getOrganizationSwitchPortsProfilesNetworksAssignments`

PATH _`/organizations/{organizationId}/switch/ports/profiles/networks/assignments`_

    {
      "items": [
        {
          "assignmentId": "123456",
          "type": "included",
          "profile": {
            "id": "4354353"
          },
          "network": {
            "id": "N_24329156"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 42,
            "remaining": 32
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch all Network - Smart Port Profile associations for an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles/networks/assignments`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create Network and Smart Ports Profile association for a specific profile
> 
> **POST** `/organizations/{organizationId}/switch/ports/profiles/networks/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/batch-organization-switch-ports-profiles-networks-assignments-create/)

#### Batch Create Network and Smart Ports Profile associations for a specific profile

Operation ID: `batchOrganizationSwitchPortsProfilesNetworksAssignmentsCreate`

PATH _`/organizations/{organizationId}/switch/ports/profiles/networks/assignments/batchCreate`_

    {
      "items": [
        {
          "assignmentId": "123456",
          "type": "included",
          "profile": {
            "id": "4354353"
          },
          "network": {
            "id": "N_24329156"
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Batch Create Network and Smart Ports Profile associations for a specific profile
> 
> **POST** `/organizations/{organizationId}/switch/ports/profiles/networks/assignments/batchCreate`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/bulk-organization-switch-ports-profiles-networks-assignments-delete/)

#### Bulk delete Network and Smart Port Profile associations

Operation ID: `bulkOrganizationSwitchPortsProfilesNetworksAssignmentsDelete`

PATH _`/organizations/{organizationId}/switch/ports/profiles/networks/assignments/bulkDelete`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Bulk delete Network and Smart Port Profile associations
> 
> **POST** `/organizations/{organizationId}/switch/ports/profiles/networks/assignments/bulkDelete`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/delete-organization-switch-ports-profiles-networks-assignment/)

#### Delete Network and Smart Port profile association for a specific profile

Operation ID: `deleteOrganizationSwitchPortsProfilesNetworksAssignment`

PATH _`/organizations/{organizationId}/switch/ports/profiles/networks/assignments/{assignmentId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete Network and Smart Port profile association for a specific profile
> 
> **DELETE** `/organizations/{organizationId}/switch/ports/profiles/networks/assignments/{assignmentId}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-profiles-overview-by-profile/)

#### List the port profiles in an organization

Operation ID: `getOrganizationSwitchPortsProfilesOverviewByProfile`

PATH _`/organizations/{organizationId}/switch/ports/profiles/overview/byProfile`_

    [
      {
        "items": [
          {
            "profileId": "1284392014819",
            "name": "Phone",
            "description": "IP Phones for all office workers",
            "createdAt": "2018-02-11T00:00:00.090210Z",
            "updatedAt": "2018-02-11T00:00:00.090210Z",
            "network": {
              "id": "N_24329156"
            },
            "counts": {
              "assigned": {
                "ports": 4,
                "switches": 2,
                "automations": 6
              },
              "networkCounts": {
                "included": 40,
                "excluded": 20
              }
            },
            "isOrganizationWide": false,
            "networks": {
              "values": [
                {
                  "id": "N_11865",
                  "name": "Wonderland-Dev"
                }
              ],
              "type": "included"
            },
            "access": "full"
          }
        ],
        "meta": {
          "counts": {
            "items": {
              "total": 1
            }
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the port profiles in an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles/overview/byProfile`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-profile/)

#### Get detailed information about a port profile

Operation ID: `getOrganizationSwitchPortsProfile`

PATH _`/organizations/{organizationId}/switch/ports/profiles/{id}`_

    {
      "profileId": "1284392014819",
      "networkId": "N_24329156",
      "name": "Phone",
      "description": "IP Phones for all office workers",
      "tags": [
        "tag1",
        "tag2"
      ],
      "associatedPorts": [
        {
          "portId": "8",
          "portNum": 8,
          "portName": "Dev - Cheshire Cat / 8",
          "serial": "Q234-ABCD-5678",
          "profile": {
            "enabled": true,
            "id": "1284392014819"
          }
        }
      ],
      "associatedSwitches": [
        {
          "switchId": 247165647951894,
          "name": "Dev - Cheshire Cat",
          "mac": "e0:cb:bc:a5:98:16",
          "serial": "Q234-ABCD-5678",
          "model": "MS120-48FP"
        }
      ],
      "assignedSwitchports": [
        {
          "portIds": [
            "1",
            "2",
            "3",
            "1_C3850-NM-8-10G_1",
            "1_C3850-NM-8-10G_2"
          ],
          "switch": {
            "serial": "Q234-ABCD-5678"
          },
          "template": {
            "id": 1983748489
          }
        }
      ],
      "createdAt": "2022-09-16T09:18:38Z",
      "updatedAt": "2022-09-16T09:18:38Z",
      "port": {
        "type": "access",
        "vlan": 10,
        "voiceVlan": 20,
        "allowedVlans": "1-100",
        "poeEnabled": true,
        "isolationEnabled": false,
        "rstpEnabled": true,
        "stpGuard": "disabled",
        "udld": "Alert only",
        "accessPolicyType": "Sticky MAC allow list",
        "accessPolicyNumber": 3,
        "macAllowList": [
          "34:56:fe:ce:8e:b0",
          "34:56:fe:ce:8e:b1"
        ],
        "stickyMacAllowList": [
          "34:56:fe:ce:8e:b0",
          "34:56:fe:ce:8e:b1"
        ],
        "stickyMacAllowListLimit": 5,
        "stormControlEnabled": true,
        "adaptivePolicyGroupId": "1284392014819",
        "peerSgtCapable": false,
        "daiTrusted": false
      },
      "isOrganizationWide": false,
      "networks": {
        "values": [
          {
            "id": "N_11865",
            "name": "Wonderland-Dev"
          }
        ],
        "type": "included"
      },
      "automations": [
        {
          "id": "N_11865",
          "name": "RYOFXAPO"
        }
      ],
      "access": "full"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get detailed information about a port profile
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update a port profile in an organization
> 
> **PUT** `/organizations/{organizationId}/switch/ports/profiles/{id}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a port profile from an organization
> 
> **DELETE** `/organizations/{organizationId}/switch/ports/profiles/{id}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-statuses-packets-by-device-by-port/)

#### Switch port packets by device and port.

Operation ID: `getOrganizationSwitchPortsStatusesPacketsByDeviceByPort`

PATH _`/organizations/{organizationId}/switch/ports/statuses/packets/byDevice/byPort`_

    [
      {
        "device": {
          "name": "My AP",
          "serial": "Q234-ABCD-5678",
          "mac": "00:11:22:33:44:55"
        },
        "ports": [
          {
            "port": 1,
            "usage": [
              {
                "total": 1611860,
                "broadcast": {
                  "total": 20655,
                  "rate": 0.25,
                  "isStorm": false
                },
                "multicast": {
                  "total": 28465,
                  "rate": 0.54,
                  "isStorm": false
                },
                "startTs": "2018-02-11T00:00:00.090210Z",
                "endTs": "2018-02-11T00:00:00.090210Z"
              }
            ]
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Switch port packets by device and port.
> 
> **GET** `/organizations/{organizationId}/switch/ports/statuses/packets/byDevice/byPort`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-transceivers-readings-history-by-switch/)

#### Return time-series digital optical monitoring (DOM) readings for ports on each DOM-enabled switch in an organization, in addition to thresholds for each relevant Small Form Factor Pluggable (SFP) module.

Operation ID: `getOrganizationSwitchPortsTransceiversReadingsHistoryBySwitch`

PATH _`/organizations/{organizationId}/switch/ports/transceivers/readings/history/bySwitch`_

    {
      "items": [
        {
          "serial": "Q234-ABCD-0001",
          "ports": [
            {
              "portId": "1",
              "indices": {
                "switch": 1,
                "slot": 0,
                "port": 1
              },
              "readings": [
                {
                  "startTs": "2018-02-11T00:00:00.090210Z",
                  "endTs": "2018-02-11T00:00:00.090210Z",
                  "sfpProductId": "PRODUCT1",
                  "thresholdSetId": "ABC123",
                  "byMetric": {
                    "power": {
                      "transmit": {
                        "minimum": 4,
                        "maximum": 5,
                        "median": 4.5
                      },
                      "receive": {
                        "minimum": 4,
                        "maximum": 5,
                        "median": 4.5
                      }
                    },
                    "temperature": {
                      "fahrenheit": {
                        "minimum": 30,
                        "maximum": 33,
                        "median": 32
                      },
                      "celsius": {
                        "minimum": -1.1,
                        "maximum": 0.6,
                        "median": 0
                      }
                    },
                    "supplyVoltage": {
                      "level": {
                        "minimum": 3,
                        "maximum": 3.33,
                        "median": 3.11
                      }
                    },
                    "laserBiasCurrent": {
                      "draw": {
                        "minimum": 5,
                        "maximum": 7,
                        "median": 5.5
                      }
                    }
                  }
                }
              ]
            }
          ],
          "network": {
            "id": "N_12345678",
            "name": "San Francisco Office"
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 4,
            "remaining": 2
          }
        },
        "units": {
          "power": {
            "name": "decibel milliwatts",
            "symbol": "dBm"
          },
          "supplyVoltage": {
            "name": "volts",
            "symbol": "V"
          },
          "laserBiasCurrent": {
            "name": "milliamps",
            "symbol": "mA"
          }
        },
        "thresholds": [
          {
            "thresholdSetId": "ABC123",
            "power": {
              "transmit": {
                "error": {
                  "upper": 1.8,
                  "lower": 0.3
                },
                "warning": {
                  "upper": 1.5,
                  "lower": 0.6
                }
              },
              "receive": {
                "error": {
                  "upper": 1.8,
                  "lower": 0.3
                },
                "warning": {
                  "upper": 1.5,
                  "lower": 0.6
                }
              }
            },
            "temperature": {
              "fahrenheit": {
                "error": {
                  "upper": 59,
                  "lower": 23
                },
                "warning": {
                  "upper": 50,
                  "lower": 14
                }
              },
              "celsius": {
                "error": {
                  "upper": 15,
                  "lower": -5
                },
                "warning": {
                  "upper": 10,
                  "lower": -10
                }
              }
            },
            "supplyVoltage": {
              "level": {
                "error": {
                  "upper": 7,
                  "lower": 2
                },
                "warning": {
                  "upper": 6,
                  "lower": 3
                }
              }
            },
            "laserBiasCurrent": {
              "draw": {
                "error": {
                  "upper": 6,
                  "lower": 1
                },
                "warning": {
                  "upper": 5,
                  "lower": 2
                }
              }
            }
          }
        ]
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return time-series digital optical monitoring (DOM) readings for ports on each DOM-enabled switch in an organization, in addition to thresholds for each relevant Small Form Factor Pluggable (SFP) module.
> 
> **GET** `/organizations/{organizationId}/switch/ports/transceivers/readings/history/bySwitch`  
> 
> * * *

* * *

### service

[Docs](https://developer.cisco.com/meraki/api-v1/aurora-2-organization-switch-switch-templates/)

#### List switch templates running IOS XE Catalyst firmware.

Operation ID: `aurora2OrganizationSwitchSwitchTemplates`

PATH _`/organizations/{organizationId}/switch/aurora2SwitchTemplates`_

    [
      {
        "id": "4567",
        "name": "A Simple Switch Template"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List switch templates running IOS XE Catalyst firmware.
> 
> **GET** `/organizations/{organizationId}/switch/aurora2SwitchTemplates`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/clone-organization-switch-profiles-to-template-network/)

#### Clone existing switch templates into a destination template network.

Operation ID: `cloneOrganizationSwitchProfilesToTemplateNetwork`

PATH _`/organizations/{organizationId}/switch/cloneProfilesToTemplateNetwork`_

    {
      "profileIds": [
        "1234"
      ],
      "templateNodeGroupId": "4567",
      "clonedProfileIds": [
        "1234"
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Clone existing switch templates into a destination template network.
> 
> **POST** `/organizations/{organizationId}/switch/cloneProfilesToTemplateNetwork`  
> 
> * * *

* * *

\[ sensor \]
------------

### readings

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sensor-readings-history-by-interval/)

#### Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order

Operation ID: `getOrganizationSensorReadingsHistoryByInterval`

PATH _`/organizations/{organizationId}/sensor/readings/history/byInterval`_

    [
      {
        "startTs": "2022-01-07T23:00:00Z",
        "endTs": "2022-01-07T23:59:59Z",
        "serial": "Q234-ABCD-5678",
        "model": "MT11",
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "metric": "temperature",
        "apparentPower": {
          "draw": {
            "minimum": 0,
            "maximum": 15.9,
            "average": 4.9
          }
        },
        "battery": {
          "percentage": {
            "minimum": 95,
            "maximum": 97,
            "average": 96
          }
        },
        "button": {
          "pressType": {
            "counts": {
              "short": 2,
              "long": 4
            }
          }
        },
        "co2": {
          "concentration": {
            "minimum": 221,
            "maximum": 504,
            "average": 440
          }
        },
        "current": {
          "draw": {
            "minimum": 0,
            "maximum": 0.13,
            "average": 0.04
          }
        },
        "door": {
          "counts": {
            "open": 6
          }
        },
        "energy": {
          "usage": 0.116
        },
        "frequency": {
          "draw": {
            "minimum": 59.6,
            "maximum": 60.2,
            "average": 60.1
          }
        },
        "humidity": {
          "relativePercentage": {
            "minimum": 33,
            "maximum": 35,
            "average": 33
          }
        },
        "indoorAirQuality": {
          "score": {
            "minimum": 33,
            "maximum": 35,
            "average": 33
          }
        },
        "noise": {
          "ambient": {
            "level": {
              "minimum": 22,
              "maximum": 45,
              "average": 31
            }
          }
        },
        "pm25": {
          "concentration": {
            "minimum": 0,
            "maximum": 3,
            "average": 1
          }
        },
        "powerFactor": {
          "percentage": {
            "minimum": 84,
            "maximum": 89,
            "average": 86
          }
        },
        "realPower": {
          "draw": {
            "minimum": 0,
            "maximum": 14.2,
            "average": 5
          }
        },
        "temperature": {
          "fahrenheit": {
            "minimum": 68.15,
            "maximum": 74.91,
            "average": 72.08
          },
          "celsius": {
            "minimum": 20.08,
            "maximum": 23.84,
            "average": 22.27
          }
        },
        "tvoc": {
          "concentration": {
            "minimum": 221,
            "maximum": 504,
            "average": 440
          }
        },
        "voltage": {
          "level": {
            "minimum": 120.7,
            "maximum": 124.6,
            "average": 122.6
          }
        },
        "water": {
          "counts": {
            "present": 6
          }
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order
> 
> **GET** `/organizations/{organizationId}/sensor/readings/history/byInterval`  
> 
> * * *

* * *

### alerts

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-sensor-alerts/)

#### Return a list of sensor alert events

Operation ID: `getOrganizationSensorAlerts`

PATH _`/organizations/{organizationId}/sensor/alerts`_

    [
      {
        "startTs": "2018-02-11T00:00:00.090210Z",
        "sensor": {
          "name": "My sensor",
          "serial": "Q234-ABCD-5678",
          "model": "MT10",
          "url": "http://example.com"
        },
        "trigger": {
          "ts": "2021-10-18T23:54:48.000000Z",
          "metric": "temperature",
          "apparentPower": {
            "draw": 15.9
          },
          "co2": {
            "concentration": 100
          },
          "current": {
            "draw": 0.13
          },
          "door": {
            "open": true
          },
          "frequency": {
            "level": 60.1
          },
          "humidity": {
            "relativePercentage": 34
          },
          "indoorAirQuality": {
            "score": 89
          },
          "noise": {
            "ambient": {
              "level": 45
            }
          },
          "pm25": {
            "concentration": 100
          },
          "powerFactor": {
            "percentage": 86
          },
          "realPower": {
            "draw": 13.7
          },
          "temperature": {
            "fahrenheit": 77.81,
            "celsius": 25.45
          },
          "tvoc": {
            "concentration": 100
          },
          "upstreamPower": {
            "outageDetected": true
          },
          "voltage": {
            "level": 122.4
          },
          "water": {
            "present": true
          }
        },
        "profile": {
          "id": "1",
          "name": "Too hot",
          "condition": {
            "metric": "temperature",
            "threshold": {
              "temperature": {
                "celsius": 20.5,
                "fahrenheit": 70,
                "quality": "good"
              },
              "humidity": {
                "relativePercentage": 65,
                "quality": "inadequate"
              },
              "water": {
                "present": true
              },
              "door": {
                "open": true
              },
              "tvoc": {
                "concentration": 400,
                "quality": "poor"
              },
              "co2": {
                "concentration": 400,
                "quality": "poor"
              },
              "pm25": {
                "concentration": 90,
                "quality": "fair"
              },
              "noise": {
                "ambient": {
                  "level": 120,
                  "quality": "poor"
                }
              },
              "indoorAirQuality": {
                "score": 80,
                "quality": "fair"
              },
              "realPower": {
                "draw": 14.1
              },
              "apparentPower": {
                "draw": 17.2
              },
              "powerFactor": {
                "percentage": 81
              },
              "current": {
                "draw": 0.14
              },
              "voltage": {
                "level": 119.5
              },
              "frequency": {
                "level": 58.8
              },
              "upstreamPower": {
                "outageDetected": true
              }
            },
            "direction": "above",
            "duration": 60
          }
        },
        "snapshotCamera": {
          "serial": "QAAA-AAAA-AAAA",
          "name": "Camera",
          "url": "http://example.com"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a list of sensor alert events
> 
> **GET** `/organizations/{organizationId}/sensor/alerts`  
> 
> * * *

* * *

### schedules

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-sensor-schedules/)

#### Returns a list of all sensor schedules.

Operation ID: `getNetworkSensorSchedules`

PATH _`/networks/{networkId}/sensor/schedules`_

    [
      {
        "id": "123",
        "name": "Weekday schedule"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns a list of all sensor schedules.
> 
> **GET** `/networks/{networkId}/sensor/schedules`  
> 
> * * *

* * *

\[ appliance \]
---------------

### policies

[Docs](https://developer.cisco.com/meraki/api-v1/assign-organization-policies-global-group-policies-appliance-vlans/)

#### Assign VLANs to a policy

Operation ID: `assignOrganizationPoliciesGlobalGroupPoliciesApplianceVlans`

PATH _`/organizations/{organizationId}/policies/global/group/policies/appliance/vlans/assign`_

    {
      "success": true
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Assign VLANs to a policy
> 
> **POST** `/organizations/{organizationId}/policies/global/group/policies/appliance/vlans/assign`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-policies-global-group-policies-appliance-vlans-assignments/)

#### List appliance VLAN policy assignments

Operation ID: `getOrganizationPoliciesGlobalGroupPoliciesApplianceVlansAssignments`

PATH _`/organizations/{organizationId}/policies/global/group/policies/appliance/vlans/assignments`_

    {
      "items": [
        {
          "assignmentId": "assignment_123",
          "policyId": "policy_456",
          "interfaceId": "L_123456789012345678_vlan_200"
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 25,
            "remaining": 15
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List appliance VLAN policy assignments
> 
> **GET** `/organizations/{organizationId}/policies/global/group/policies/appliance/vlans/assignments`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-policies-global-group-policies-appliance-vlans-assignments-by-vlan/)

#### List policies by appliance VLANs

Operation ID: `getOrganizationPoliciesGlobalGroupPoliciesApplianceVlansAssignmentsByVlan`

PATH _`/organizations/{organizationId}/policies/global/group/policies/appliance/vlans/assignments/byVlan`_

    {
      "items": [
        {
          "network": {
            "id": "L_123456789012345678",
            "name": "Main Office Network"
          },
          "name": "Production VLAN",
          "subnet": "192.168.1.0/24",
          "interfaceId": "1234",
          "vlanId": "100",
          "policy": {
            "id": "456",
            "name": "Production Policy",
            "group": {
              "number": 100
            }
          }
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 25,
            "remaining": 15
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### List policies by appliance VLANs
> 
> **GET** `/organizations/{organizationId}/policies/global/group/policies/appliance/vlans/assignments/byVlan`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/remove-organization-policies-global-group-policies-appliance-vlans/)

#### Remove VLANs from a policy

Operation ID: `removeOrganizationPoliciesGlobalGroupPoliciesApplianceVlans`

PATH _`/organizations/{organizationId}/policies/global/group/policies/appliance/vlans/remove`_

    {
      "success": true
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Remove VLANs from a policy
> 
> **POST** `/organizations/{organizationId}/policies/global/group/policies/appliance/vlans/remove`  
> 
> * * *

* * *

### sdwan

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-sdwan-internet-policies/)

#### Get the SDWAN internet traffic preferences for an MX network

Operation ID: `getOrganizationApplianceSdwanInternetPolicies`

PATH _`/organizations/{organizationId}/appliance/sdwan/internetPolicies`_

    {
      "wanTrafficUplinkPreferences": [
        {
          "preferredUplink": "wan1",
          "failOverCriterion": "poorPerformance",
          "performanceClass": {
            "type": "custom",
            "builtinPerformanceClassName": "VoIP",
            "customPerformanceClassId": "123456"
          },
          "trafficFilters": [
            {
              "type": "custom",
              "value": {
                "protocol": "tcp",
                "source": {
                  "port": "1-1024",
                  "cidr": "192.168.1.0/24",
                  "vlan": 10,
                  "host": 254
                },
                "destination": {
                  "port": "any",
                  "cidr": "any",
                  "applications": [
                    {
                      "id": "meraki:layer7/application/3",
                      "name": "DNS",
                      "type": "major"
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the SDWAN internet traffic preferences for an MX network
> 
> **GET** `/organizations/{organizationId}/appliance/sdwan/internetPolicies`  
> 
> * * *

* * *

### umbrella

[Docs](https://developer.cisco.com/meraki/api-v1/disable-network-appliance-umbrella-protection/)

#### Disable umbrella protection for an MX network

Operation ID: `disableNetworkApplianceUmbrellaProtection`

PATH _`/networks/{networkId}/appliance/umbrella/disableProtection`_

    {
      "enabled": false
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Disable umbrella protection for an MX network
> 
> **DELETE** `/networks/{networkId}/appliance/umbrella/disableProtection`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/enable-network-appliance-umbrella-protection/)

#### Enable umbrella protection for an MX network

Operation ID: `enableNetworkApplianceUmbrellaProtection`

PATH _`/networks/{networkId}/appliance/umbrella/enableProtection`_

    {
      "umbrella": {
        "organization": {
          "id": "8706910"
        },
        "origin": {
          "id": "606932410"
        }
      },
      "enabled": true
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enable umbrella protection for an MX network
> 
> **POST** `/networks/{networkId}/appliance/umbrella/enableProtection`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/exclude-network-appliance-umbrella-domains/)

#### Specify one or more domain names to be excluded from being routed to Cisco Umbrella.

Operation ID: `excludeNetworkApplianceUmbrellaDomains`

PATH _`/networks/{networkId}/appliance/umbrella/excludeDomains`_

    {
      "success": true,
      "message": "Successfully updated"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Specify one or more domain names to be excluded from being routed to Cisco Umbrella.
> 
> **PUT** `/networks/{networkId}/appliance/umbrella/excludeDomains`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/policies-network-appliance-umbrella/)

#### Update umbrella policies applied to MX network.

Operation ID: `policiesNetworkApplianceUmbrella`

PATH _`/networks/{networkId}/appliance/umbrella/policies`_

    {
      "success": true,
      "message": "Successfully updated"
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update umbrella policies applied to MX network.
> 
> **PUT** `/networks/{networkId}/appliance/umbrella/policies`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/protection-network-appliance-umbrella/)

#### Enable or disable umbrella protection for an MX network

Operation ID: `protectionNetworkApplianceUmbrella`

PATH _`/networks/{networkId}/appliance/umbrella/protection`_

    {
      "umbrella": {
        "organization": {
          "id": "8706910"
        },
        "origin": {
          "id": "606932410"
        }
      },
      "enabled": true
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Enable or disable umbrella protection for an MX network. When disabling, the umbrella property will be omitted from the response.
> 
> **PUT** `/networks/{networkId}/appliance/umbrella/protection`  
> 
> * * *

* * *

### interfaces

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-appliance-interfaces-port/)

#### Update configurations for an appliance's specified port

Operation ID: `updateDeviceApplianceInterfacesPort`

PATH _`/devices/{serial}/appliance/interfaces/ports/{number}`_

    {
      "number": "1",
      "enabled": true,
      "name": "wan1",
      "personality": {
        "mode": "wan",
        "isFlexible": false
      },
      "uplink": {
        "type": "ethernet",
        "primary": true
      },
      "downlink": {
        "mode": "access",
        "adaptivePolicyGroupId": "1234",
        "access": {
          "vlan": "1",
          "policyType": "802.1x"
        },
        "trunk": {
          "nativeVlan": "2",
          "allowedVlans": [
            "2",
            "3",
            "4",
            "5"
          ],
          "peerSgtCapable": false
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update configurations for an appliance's specified port
> 
> **PUT** `/devices/{serial}/appliance/interfaces/ports/{number}`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-appliance-interfaces-l-3-/)

#### Create wired L3 interface configuration

Operation ID: `createNetworkApplianceInterfacesL3`

PATH _`/networks/{networkId}/appliance/interfaces/l3`_

    {
      "interfaceId": "1234",
      "port": {
        "number": 1
      },
      "ipv4": {
        "address": "192.168.1.2",
        "subnet": "192.168.1.0/24"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Create wired L3 interface configuration
> 
> **POST** `/networks/{networkId}/appliance/interfaces/l3`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-interfaces-l-3-/)

#### Update wired L3 interface configuration

Operation ID: `updateNetworkApplianceInterfacesL3`

PATH _`/networks/{networkId}/appliance/interfaces/l3/{interfaceId}`_

    {
      "interfaceId": "1234",
      "port": {
        "number": 1
      },
      "ipv4": {
        "address": "192.168.1.2",
        "subnet": "192.168.1.0/24"
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update wired L3 interface configuration
> 
> **PUT** `/networks/{networkId}/appliance/interfaces/l3/{interfaceId}`  
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete wired L3 interface configuration
> 
> **DELETE** `/networks/{networkId}/appliance/interfaces/l3/{interfaceId}`  
> 
> * * *

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-devices-interfaces-l-3-by-network/)

#### Listing of L3 Interface Configurations across networks for the organization

Operation ID: `getOrganizationApplianceDevicesInterfacesL3ByNetwork`

PATH _`/organizations/{organizationId}/appliance/devices/interfaces/l3/byNetwork`_

    {
      "items": [
        {
          "networkId": "L_123456",
          "interfaces": [
            {
              "interfaceId": "1234",
              "port": {
                "number": 1
              },
              "ipv4": {
                "address": "192.168.1.2",
                "subnet": "192.168.1.0/24"
              }
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 10,
            "remaining": 0
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Listing of L3 Interface Configurations across networks for the organization
> 
> **GET** `/organizations/{organizationId}/appliance/devices/interfaces/l3/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-devices-interfaces-ports-by-device/)

#### Returns port configurations for appliances in a given organization

Operation ID: `getOrganizationApplianceDevicesInterfacesPortsByDevice`

PATH _`/organizations/{organizationId}/appliance/devices/interfaces/ports/byDevice`_

    {
      "items": [
        {
          "serial": "Q234-ABCD-5678",
          "ports": [
            {
              "number": "1",
              "enabled": true,
              "name": "wan1",
              "personality": {
                "mode": "wan",
                "isFlexible": false
              },
              "uplink": {
                "type": "ethernet",
                "primary": true
              },
              "downlink": {
                "mode": "access",
                "adaptivePolicyGroupId": "1234",
                "access": {
                  "vlan": "1",
                  "policyType": "802.1x"
                },
                "trunk": {
                  "nativeVlan": "2",
                  "allowedVlans": [
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "peerSgtCapable": false
                }
              }
            }
          ]
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns port configurations for appliances in a given organization
> 
> **GET** `/organizations/{organizationId}/appliance/devices/interfaces/ports/byDevice`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-devices-system-utilization-by-interval/)

#### Return the appliance utilization history for devices in the organization

Operation ID: `getOrganizationApplianceDevicesSystemUtilizationByInterval`

PATH _`/organizations/{organizationId}/appliance/devices/system/utilization/byInterval`_

    {
      "items": [
        {
          "serial": "Q234-ABCD-0001",
          "model": "MX450",
          "name": "My appliance",
          "mac": "00:11:22:33:44:55",
          "tags": [
            "tag1",
            "tag2"
          ],
          "network": {
            "id": "N_24329156",
            "name": "Main Office",
            "tags": [
              "tag1",
              "tag2"
            ]
          },
          "intervals": [
            {
              "startTs": "2018-02-11T00:00:00.090210Z",
              "endTs": "2018-02-11T00:00:00.090210Z",
              "utilization": {
                "average": {
                  "percentage": 60
                }
              }
            }
          ]
        }
      ],
      "meta": {
        "counts": {
          "items": {
            "total": 4,
            "remaining": 2
          }
        }
      }
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the appliance utilization history for devices in the organization. Only primary MX devices are supported.
> 
> **GET** `/organizations/{organizationId}/appliance/devices/system/utilization/byInterval`  
> 
> * * *

* * *

### vpn

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-vpn-connectivity-vpn-peers-by-network/)

#### Summarizes by-device vpn peers for the organization in the given interval.

Operation ID: `getOrganizationApplianceVpnConnectivityVpnPeersByNetwork`

PATH _`/organizations/{organizationId}/appliance/vpn/connectivity/vpnPeers/byNetwork`_

    [
      {
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        },
        "merakiVpnPeers": [
          {
            "id": "N_123",
            "name": "Network 1",
            "url": "https://n1.meraki.com/Network_1/n/Abc123/manage/vpn/overview/Xyz456",
            "avgLatencyMs": 35.3,
            "usageBytes": 1000,
            "outage": [
              {
                "ts": 1772607956,
                "isConnected": true
              }
            ],
            "usageIntervals": [
              {
                "ts": 1772607956,
                "latency": 35.3,
                "loss": {
                  "percentage": 50
                }
              }
            ]
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Summarizes by-device vpn peers for the organization in the given interval.
> 
> **GET** `/organizations/{organizationId}/appliance/vpn/connectivity/vpnPeers/byNetwork`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-vpn-remote-access-secure-client-authentication-by-client/)

#### Get authentication for all clients in organization

Operation ID: `getOrganizationApplianceVpnRemoteAccessSecureClientAuthenticationByClient`

PATH _`/organizations/{organizationId}/appliance/vpn/remoteAccess/secureClient/authentication/byClient`_

    [
      {
        "client": {
          "id": "k74272e",
          "username": "Miles Meraki",
          "publicIp": "123.123.123.1"
        },
        "successes": {
          "count": 1000
        },
        "failures": {
          "count": 15
        },
        "lastFailedTime": "2024-02-21 01:30:53"
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get authentication for all clients in organization
> 
> **GET** `/organizations/{organizationId}/appliance/vpn/remoteAccess/secureClient/authentication/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-vpn-remote-access-secure-client-ip-assignment-by-client/)

#### Get IP assignment for all clients in the organization

Operation ID: `getOrganizationApplianceVpnRemoteAccessSecureClientIpAssignmentByClient`

PATH _`/organizations/{organizationId}/appliance/vpn/remoteAccess/secureClient/ipAssignment/byClient`_

    [
      {
        "successes": {
          "count": 4387
        },
        "failures": {
          "count": 109
        },
        "lastFailedTime": "2024-02-21 01:30:53",
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get IP assignment for all clients in the organization
> 
> **GET** `/organizations/{organizationId}/appliance/vpn/remoteAccess/secureClient/ipAssignment/byClient`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-vpn-remote-access-secure-client-tunnel-creation-by-client/)

#### Get tunnel creation events for all clients in the organization

Operation ID: `getOrganizationApplianceVpnRemoteAccessSecureClientTunnelCreationByClient`

PATH _`/organizations/{organizationId}/appliance/vpn/remoteAccess/secureClient/tunnelCreation/byClient`_

    [
      {
        "successes": {
          "byType": [
            {
              "type": "dtls",
              "count": 23
            }
          ]
        },
        "failures": {
          "count": 5
        },
        "lastFailedTime": "2024-02-21 01:30:53",
        "client": {
          "id": "k74272e",
          "mac": "22:33:44:55:66:77"
        },
        "network": {
          "id": "N_24329156",
          "name": "Main Office"
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Get tunnel creation events for all clients in the organization
> 
> **GET** `/organizations/{organizationId}/appliance/vpn/remoteAccess/secureClient/tunnelCreation/byClient`  
> 
> * * *

* * *

### vlans

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-vlans/)

#### List the VLANs for an Organization

Operation ID: `getOrganizationApplianceVlans`

PATH _`/organizations/{organizationId}/appliance/vlans`_

    [
      {
        "id": "1234",
        "interfaceId": "1284392014819",
        "name": "My VLAN",
        "subnet": "192.168.1.0/24",
        "applianceIp": "192.168.1.2",
        "groupPolicyId": "101",
        "templateVlanType": "same",
        "cidr": "192.168.1.0/24",
        "mask": 28,
        "dhcpRelayServerIps": [
          "192.168.1.0",
          "192.168.128.0"
        ],
        "dhcpHandling": "Run a DHCP server",
        "dhcpLeaseTime": "1 day",
        "dhcpBootOptionsEnabled": false,
        "dhcpBootNextServer": "1.2.3.4",
        "dhcpBootFilename": "sample.file",
        "fixedIpAssignments": {
          "00:11:22:33:44:55": {
            "ip": "1.2.3.4",
            "name": "My favorite IP"
          }
        },
        "reservedIpRanges": [
          {
            "start": "192.168.1.0",
            "end": "192.168.1.1",
            "comment": "A reserved IP range"
          }
        ],
        "dnsNameservers": "google_dns",
        "dhcpOptions": [
          {
            "code": "5",
            "type": "text",
            "value": "five"
          }
        ],
        "vpnNatSubnet": "192.168.1.0/24",
        "mandatoryDhcp": {
          "enabled": true
        },
        "ipv6": {
          "enabled": true,
          "prefixAssignments": [
            {
              "autonomous": false,
              "staticPrefix": "2001:db8:3c4d:15::/64",
              "staticApplianceIp6": "2001:db8:3c4d:15::1",
              "origin": {
                "type": "internet",
                "interfaces": [
                  "wan0"
                ]
              }
            }
          ]
        }
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### List the VLANs for an Organization
> 
> **GET** `/organizations/{organizationId}/appliance/vlans`  
> 
> * * *

* * *

### uplinks

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-uplinks-nat/)

#### Update uplink NAT settings of the specified network

Operation ID: `updateNetworkApplianceUplinksNat`

PATH _`/networks/{networkId}/appliance/uplinks/nat`_

    {
      "uplinks": [
        {
          "interface": "wan1",
          "nat": {
            "enabled": false
          }
        }
      ]
    }

> \- Path added  
>   
> \- New endpoint
> 
> #### Update uplink NAT settings of the specified network
> 
> **PUT** `/networks/{networkId}/appliance/uplinks/nat`  
> 
> * * *

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-uplinks-nat-by-network/)

#### Fetch uplink NAT settings of each network in the organization

Operation ID: `getOrganizationApplianceUplinksNatByNetwork`

PATH _`/organizations/{organizationId}/appliance/uplinks/nat/byNetwork`_

    [
      {
        "networkId": "N_123456",
        "uplinks": [
          {
            "interface": "wan1",
            "nat": {
              "enabled": false
            }
          }
        ]
      }
    ]

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch uplink NAT settings of each network in the organization
> 
> **GET** `/organizations/{organizationId}/appliance/uplinks/nat/byNetwork`  
> 
> * * *

* * *

Changed
=======

\[ insight \]
-------------

### applications

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-insight-application/)

#### Add an Insight tracked application

Operation ID: `createOrganizationInsightApplication`

POST _`/organizations/{organizationId}/insight/applications`_

> \- Added endpoint method  
> 
> #### Add an Insight tracked application
> 
> _createOrganizationInsightApplication_
> 
> * * *

* * *

\[ organizations \]
-------------------

### summary

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-appliances-by-utilization/)

#### Return the top 10 appliances sorted by utilization over given time range.

Operation ID: `getOrganizationSummaryTopAppliancesByUtilization`

GET _`/organizations/{organizationId}/summary/top/appliances/byUtilization`_

> \- Optional param `networkId` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-clients-by-usage/)

#### Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

Operation ID: `getOrganizationSummaryTopClientsByUsage`

GET _`/organizations/{organizationId}/summary/top/clients/byUsage`_

> \- Optional param `networkId` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-clients-manufacturers-by-usage/)

#### Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

Operation ID: `getOrganizationSummaryTopClientsManufacturersByUsage`

GET _`/organizations/{organizationId}/summary/top/clients/manufacturers/byUsage`_

> \- Optional param `networkId` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-devices-by-usage/)

#### Return metrics for organization's top 10 devices sorted by data usage over given time range

Operation ID: `getOrganizationSummaryTopDevicesByUsage`

GET _`/organizations/{organizationId}/summary/top/devices/byUsage`_

> \- Optional param `networkId` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-devices-models-by-usage/)

#### Return metrics for organization's top 10 device models sorted by data usage over given time range

Operation ID: `getOrganizationSummaryTopDevicesModelsByUsage`

GET _`/organizations/{organizationId}/summary/top/devices/models/byUsage`_

> \- Optional param `networkId` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-networks-by-status/)

#### List the client and status overview information for the networks in an organization

Operation ID: `getOrganizationSummaryTopNetworksByStatus`

GET _`/organizations/{organizationId}/summary/top/networks/byStatus`_

> \- Optional param `networkId` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-ssids-by-usage/)

#### Return metrics for organization's top 10 ssids by data usage over given time range

Operation ID: `getOrganizationSummaryTopSsidsByUsage`

GET _`/organizations/{organizationId}/summary/top/ssids/byUsage`_

> \- Optional param `networkId` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-switches-by-energy-usage/)

#### Return metrics for organization's top 10 switches by energy usage over given time range

Operation ID: `getOrganizationSummaryTopSwitchesByEnergyUsage`

GET _`/organizations/{organizationId}/summary/top/switches/byEnergyUsage`_

> \- Optional param `networkId` added

* * *

### networks

[Docs](https://developer.cisco.com/meraki/api-v1/create-organization-network/)

#### Create a network

Operation ID: `createOrganizationNetwork`

POST _`/organizations/{organizationId}/networks`_

> \- Optional property `details` Added

* * *

### devices

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-availabilities-change-history/)

#### List the availability history information for devices in an organization.

Operation ID: `getOrganizationDevicesAvailabilitiesChangeHistory`

GET _`/organizations/{organizationId}/devices/availabilities/changeHistory`_

> \- Optional param `categories` added

> \- Optional param `networkTags` added

> \- Optional param `networkTagsFilterType` added

> \- Optional param `deviceTags` added

> \- Optional param `deviceTagsFilterType` added

> \- Optional property `tags` Added

> \- Optional property `category` Added

> \- Response property `tags` value added

> \- Response property `category` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-devices-statuses/)

#### List the status of every Meraki device in the organization

Operation ID: `getOrganizationDevicesStatuses`

GET _`/organizations/{organizationId}/devices/statuses`_

> \- Optional param `configurationUpdatedAfter` added

* * *

### clients

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-clients-bandwidth-usage-history/)

#### Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

Operation ID: `getOrganizationClientsBandwidthUsageHistory`

GET _`/organizations/{organizationId}/clients/bandwidthUsageHistory`_

> \- Optional param `networkId` added

* * *

\[ networks \]
--------------

### settings

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-settings/)

#### Update the settings for a network

Operation ID: `updateNetworkSettings`

PUT _`/networks/{networkId}/settings`_

> \- Optional property `fips` Added

* * *

### firmwareUpgrades

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-firmware-upgrades-rollback/)

#### Rollback a Firmware Upgrade For A Network

Operation ID: `createNetworkFirmwareUpgradesRollback`

POST _`/networks/{networkId}/firmwareUpgrades/rollbacks`_

> \- Optional property `predownloadFirmware` Added

> \- Optional property `predownloadFirmware` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-firmware-upgrades/)

#### Get firmware upgrade information for a network

Operation ID: `getNetworkFirmwareUpgrades`

GET _`/networks/{networkId}/firmwareUpgrades`_

> \- Optional property `upgradeStrategy` Added

> \- Optional property `predownloadFirmware` Added

> \- Response property `upgradeStrategy` value added

> \- Response property `predownloadFirmware` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-firmware-upgrades/)

#### Update firmware upgrade information for a network

Operation ID: `updateNetworkFirmwareUpgrades`

PUT _`/networks/{networkId}/firmwareUpgrades`_

> \- Optional property `upgradeStrategy` Added

> \- Optional property `predownloadFirmware` Added

> \- Optional property `upgradeStrategy` Added

> \- Optional property `predownloadFirmware` Added

* * *

\[ wireless \]
--------------

### ssids

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-ssid-splash-settings/)

#### Display the splash page settings for the given SSID

Operation ID: `getNetworkWirelessSsidSplashSettings`

GET _`/networks/{networkId}/wireless/ssids/{number}/splash/settings`_

> \- Optional property `language` Added

> \- Optional property `userConsent` Added

> \- Response property `language` value added

> \- Response property `userConsent` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-ssid-splash-settings/)

#### Modify the splash page settings for the given SSID

Operation ID: `updateNetworkWirelessSsidSplashSettings`

PUT _`/networks/{networkId}/wireless/ssids/{number}/splash/settings`_

> \- Optional property `language` Added

> \- Optional property `userConsent` Added

> \- Optional property `language` Added

> \- Optional property `userConsent` Added

* * *

### rfProfiles

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-wireless-rf-profile/)

#### Creates new RF profile for this network

Operation ID: `createNetworkWirelessRfProfile`

POST _`/networks/{networkId}/wireless/rfProfiles`_

> \- Optional property `axEnabled` Added

> \- Optional property `afcEnabled` Added

> \- Optional property `axEnabled` Added

> \- Optional property `afcEnabled` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-rf-profiles/)

#### List RF profiles for this network

Operation ID: `getNetworkWirelessRfProfiles`

GET _`/networks/{networkId}/wireless/rfProfiles`_

> \- Optional property `axEnabled` Added

> \- Optional property `afcEnabled` Added

> \- Response property `axEnabled` value added

> \- Response property `afcEnabled` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-rf-profile/)

#### Return a RF profile

Operation ID: `getNetworkWirelessRfProfile`

GET _`/networks/{networkId}/wireless/rfProfiles/{rfProfileId}`_

> \- Optional property `axEnabled` Added

> \- Optional property `afcEnabled` Added

> \- Response property `axEnabled` value added

> \- Response property `afcEnabled` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-rf-profile/)

#### Updates specified RF profile for this network

Operation ID: `updateNetworkWirelessRfProfile`

PUT _`/networks/{networkId}/wireless/rfProfiles/{rfProfileId}`_

> \- Optional property `afcEnabled` Added

> \- Optional property `axEnabled` Added

> \- Optional property `afcEnabled` Added

* * *

### settings

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-settings/)

#### Return the wireless settings for a network

Operation ID: `getNetworkWirelessSettings`

GET _`/networks/{networkId}/wireless/settings`_

> \- Optional property `predownloadFirmware` Added

> \- Response property `predownloadFirmware` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-settings/)

#### Update the wireless settings for a network

Operation ID: `updateNetworkWirelessSettings`

PUT _`/networks/{networkId}/wireless/settings`_

> \- Optional property `predownloadFirmware` Added

> \- Optional property `predownloadFirmware` Added

* * *

### bluetooth

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-wireless-bluetooth-settings/)

#### Return the bluetooth settings for a wireless device

Operation ID: `getDeviceWirelessBluetoothSettings`

GET _`/devices/{serial}/wireless/bluetooth/settings`_

> \- Optional property `transmit` Added

> \- Response property `transmit` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-wireless-bluetooth-settings/)

#### Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth\_Low\_Energy\_(BLE)">Bluetooth settings</a> must be enabled on the network.

Operation ID: `getNetworkWirelessBluetoothSettings`

GET _`/networks/{networkId}/wireless/bluetooth/settings`_

> \- Optional property `transmit` Added

> \- Response property `transmit` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-wireless-bluetooth-settings/)

#### Update the bluetooth settings for a wireless device

Operation ID: `updateDeviceWirelessBluetoothSettings`

PUT _`/devices/{serial}/wireless/bluetooth/settings`_

> \- Optional property `transmit` Added

> \- Optional property `transmit` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-wireless-bluetooth-settings/)

#### Update the Bluetooth settings for a network

Operation ID: `updateNetworkWirelessBluetoothSettings`

PUT _`/networks/{networkId}/wireless/bluetooth/settings`_

> \- Optional property `transmit` Added

> \- Optional property `transmit` Added

* * *

\[ switch \]
------------

### stacks

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-switch-stack-routing-interface/)

#### Create a layer 3 interface for a switch stack

Operation ID: `createNetworkSwitchStackRoutingInterface`

POST _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `uplinkV4` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `uplinkV6` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-stack-routing-interfaces/)

#### List layer 3 interfaces for a switch stack

Operation ID: `getNetworkSwitchStackRoutingInterfaces`

GET _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Response property `isSwitchDefaultGateway` value added

> \- Response property `staticV6Dns1` value added

> \- Response property `staticV6Dns2` value added

> \- Response property `candidateUplink` value added

> \- Response property `candidateUplinkV4` value added

> \- Response property `staticV4Dns1` value added

> \- Response property `staticV4Dns2` value added

> \- Response property `isSwitchDefaultGateway` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-stack-routing-interface/)

#### Return a layer 3 interface from a switch stack

Operation ID: `getNetworkSwitchStackRoutingInterface`

GET _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Response property `isSwitchDefaultGateway` value added

> \- Response property `staticV6Dns1` value added

> \- Response property `staticV6Dns2` value added

> \- Response property `candidateUplink` value added

> \- Response property `candidateUplinkV4` value added

> \- Response property `staticV4Dns1` value added

> \- Response property `staticV4Dns2` value added

> \- Response property `isSwitchDefaultGateway` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-stack-routing-interface/)

#### Update a layer 3 interface for a switch stack

Operation ID: `updateNetworkSwitchStackRoutingInterface`

PUT _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `uplinkV4` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `uplinkV6` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

* * *

### linkAggregations

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-link-aggregations/)

#### List link aggregation groups

Operation ID: `getNetworkSwitchLinkAggregations`

GET _`/networks/{networkId}/switch/linkAggregations`_

> \- Optional param `serials` added

* * *

### routing

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-switch-routing-interface/)

#### Create a layer 3 interface for a switch

Operation ID: `createDeviceSwitchRoutingInterface`

POST _`/devices/{serial}/switch/routing/interfaces`_

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `uplinkV4` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `uplinkV6` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-switch-routing-multicast-rendezvous-point/)

#### Create a multicast rendezvous point

Operation ID: `createNetworkSwitchRoutingMulticastRendezvousPoint`

POST _`/networks/{networkId}/switch/routing/multicast/rendezvousPoints`_

> \- Optional property `vrf` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-switch-routing-interfaces/)

#### List layer 3 interfaces for a switch

Operation ID: `getDeviceSwitchRoutingInterfaces`

GET _`/devices/{serial}/switch/routing/interfaces`_

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Response property `isSwitchDefaultGateway` value added

> \- Response property `staticV6Dns1` value added

> \- Response property `staticV6Dns2` value added

> \- Response property `candidateUplink` value added

> \- Response property `candidateUplinkV4` value added

> \- Response property `staticV4Dns1` value added

> \- Response property `staticV4Dns2` value added

> \- Response property `isSwitchDefaultGateway` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-switch-routing-interface/)

#### Return a layer 3 interface for a switch

Operation ID: `getDeviceSwitchRoutingInterface`

GET _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Response property `isSwitchDefaultGateway` value added

> \- Response property `staticV6Dns1` value added

> \- Response property `staticV6Dns2` value added

> \- Response property `candidateUplink` value added

> \- Response property `candidateUplinkV4` value added

> \- Response property `staticV4Dns1` value added

> \- Response property `staticV4Dns2` value added

> \- Response property `isSwitchDefaultGateway` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-routing-multicast-rendezvous-points/)

#### List multicast rendezvous points

Operation ID: `getNetworkSwitchRoutingMulticastRendezvousPoints`

GET _`/networks/{networkId}/switch/routing/multicast/rendezvousPoints`_

> \- Optional property `vrf` Added

> \- Response property `vrf` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-switch-routing-multicast-rendezvous-point/)

#### Return a multicast rendezvous point

Operation ID: `getNetworkSwitchRoutingMulticastRendezvousPoint`

GET _`/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`_

> \- Optional property `vrf` Added

> \- Response property `vrf` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-switch-routing-interface/)

#### Update a layer 3 interface for a switch

Operation ID: `updateDeviceSwitchRoutingInterface`

PUT _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `uplinkV4` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `uplinkV6` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `isSwitchDefaultGateway` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-switch-routing-multicast-rendezvous-point/)

#### Update a multicast rendezvous point

Operation ID: `updateNetworkSwitchRoutingMulticastRendezvousPoint`

PUT _`/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`_

> \- Optional property `vrf` Added

* * *

### ports

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-switch-ports/)

#### List the switch ports for a switch

Operation ID: `getDeviceSwitchPorts`

GET _`/devices/{serial}/switch/ports`_

> \- Optional param `hideDefaultPorts` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-switch-ports-by-switch/)

#### List the switchports in an organization by switch

Operation ID: `getOrganizationSwitchPortsBySwitch`

GET _`/organizations/{organizationId}/switch/ports/bySwitch`_

> \- Optional param `extendedParams` added

> \- Optional param `hideDefaultPorts` added

> \- Optional param `type` added

* * *

\[ sensor \]
------------

### commands

[Docs](https://developer.cisco.com/meraki/api-v1/create-device-sensor-command/)

#### Sends a command to a sensor

Operation ID: `createDeviceSensorCommand`

POST _`/devices/{serial}/sensor/commands`_

> \- Optional property `arguments` Added

* * *

\[ appliance \]
---------------

### vpn

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-vpn-bgp/)

#### Return a Hub BGP Configuration

Operation ID: `getNetworkApplianceVpnBgp`

GET _`/networks/{networkId}/appliance/vpn/bgp`_

> \- Optional property `filterIn` Added

> \- Optional property `communityOut` Added

> \- Optional property `routerId` Added

> \- Response property `filterIn` value added

> \- Response property `communityOut` value added

> \- Response property `routerId` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-vpn-site-to-site-vpn/)

#### Return the site-to-site VPN settings of a network

Operation ID: `getNetworkApplianceVpnSiteToSiteVpn`

GET _`/networks/{networkId}/appliance/vpn/siteToSiteVpn`_

> \- Optional property `hostTranslations` Added

> \- Response property `hostTranslations` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-vpn-bgp/)

#### Update a Hub BGP Configuration

Operation ID: `updateNetworkApplianceVpnBgp`

PUT _`/networks/{networkId}/appliance/vpn/bgp`_

> \- Optional property `filterIn` Added

> \- Optional property `communityOut` Added

> \- Optional property `routerId` Added

> \- Optional property `filterIn` Added

> \- Optional property `communityOut` Added

> \- Optional property `routerId` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-vpn-site-to-site-vpn/)

#### Update the site-to-site VPN settings of a network

Operation ID: `updateNetworkApplianceVpnSiteToSiteVpn`

PUT _`/networks/{networkId}/appliance/vpn/siteToSiteVpn`_

> \- Optional property `hostTranslations` Added

> \- Optional property `hostTranslations` Added

* * *

### vlans

[Docs](https://developer.cisco.com/meraki/api-v1/create-network-appliance-vlan/)

#### Add a VLAN

Operation ID: `createNetworkApplianceVlan`

POST _`/networks/{networkId}/appliance/vlans`_

> \- Optional property `adaptivePolicyGroupId` Added

> \- Optional property `uplinks` Added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-vlan/)

#### Update a VLAN

Operation ID: `updateNetworkApplianceVlan`

PUT _`/networks/{networkId}/appliance/vlans/{vlanId}`_

> \- Optional property `adaptivePolicyGroupId` Added

> \- Optional property `uplinks` Added

* * *

### ports

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-ports/)

#### List per-port VLAN settings for all ports of a secure router or security appliance.

Operation ID: `getNetworkAppliancePorts`

GET _`/networks/{networkId}/appliance/ports`_

> \- Optional property `peerSgtCapable` Added

> \- Response property `peerSgtCapable` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/get-network-appliance-port/)

#### Return per-port VLAN settings for a single secure router or security appliance port.

Operation ID: `getNetworkAppliancePort`

GET _`/networks/{networkId}/appliance/ports/{portId}`_

> \- Optional property `peerSgtCapable` Added

> \- Response property `peerSgtCapable` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-port/)

#### Update the per-port VLAN settings for a single secure router or security appliance port.

Operation ID: `updateNetworkAppliancePort`

PUT _`/networks/{networkId}/appliance/ports/{portId}`_

> \- Optional property `peerSgtCapable` Added

> \- Optional property `adaptivePolicyGroupId` Added

> \- Optional property `peerSgtCapable` Added

* * *

### uplinks

[Docs](https://developer.cisco.com/meraki/api-v1/get-device-appliance-uplinks-settings/)

#### Return the uplink settings for an MX appliance

Operation ID: `getDeviceApplianceUplinksSettings`

GET _`/devices/{serial}/appliance/uplinks/settings`_

> \- Optional property `sgt` Added

> \- Optional property `sgt` Added

> \- Response property `sgt` value added

> \- Response property `sgt` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-device-appliance-uplinks-settings/)

#### Update the uplink settings for an MX appliance

Operation ID: `updateDeviceApplianceUplinksSettings`

PUT _`/devices/{serial}/appliance/uplinks/settings`_

> \- Optional property `sgt` Added

> \- Optional property `sgt` Added

> \- Optional property `sgt` Added

* * *

### trafficShaping

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-traffic-shaping-vpn-exclusions-by-network/)

#### Display VPN exclusion rules for MX networks.

Operation ID: `getOrganizationApplianceTrafficShapingVpnExclusionsByNetwork`

GET _`/organizations/{organizationId}/appliance/trafficShaping/vpnExclusions/byNetwork`_

> \- Optional property `source` Added

> \- Optional property `source` Added

> \- Response property `source` value added

> \- Response property `protocol` value added

> \- Response property `source` value added

> \- Response property `applications` value added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-traffic-shaping-vpn-exclusions/)

#### Update VPN exclusion rules for an MX network.

Operation ID: `updateNetworkApplianceTrafficShapingVpnExclusions`

PUT _`/networks/{networkId}/appliance/trafficShaping/vpnExclusions`_

> \- Optional property `source` Added

> \- Optional property `protocol` Added

> \- Optional property `source` Added

> \- Optional property `applications` Added

> \- Optional property `source` Added

> \- Optional property `source` Added

* * *

Changed
=======

\[ appliance \]
---------------

### trafficShaping

[Docs](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-traffic-shaping-vpn-exclusions-by-network/)

#### Display VPN exclusion rules for MX networks.

Operation ID: `getOrganizationApplianceTrafficShapingVpnExclusionsByNetwork`

GET _`/organizations/{organizationId}/appliance/trafficShaping/vpnExclusions/byNetwork`_

> \- Required property `protocol` added

> \- Required property `applications` added

* * *

[Docs](https://developer.cisco.com/meraki/api-v1/update-network-appliance-traffic-shaping-vpn-exclusions/)

#### Update VPN exclusion rules for an MX network.

Operation ID: `updateNetworkApplianceTrafficShapingVpnExclusions`

PUT _`/networks/{networkId}/appliance/trafficShaping/vpnExclusions`_

> \- Required property `protocol` added

> \- Required property `applications` added

* * *