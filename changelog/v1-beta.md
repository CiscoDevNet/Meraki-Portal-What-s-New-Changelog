 - [What's Changed](#whats-changed)
  * [\[ switch \]](#-switch-)
    + [routing](#routing)
      - [Create a layer 3 interface for a switch](#create-a-layer-3-interface-for-a-switch)
  * [\[ networks \]](#-networks-)
    + [floorPlans](#floorplans)
      - [Upload a floor plan](#upload-a-floor-plan)
      - [List the floor plans that belong to your network](#list-the-floor-plans-that-belong-to-your-network)
      - [Find a floor plan by ID](#find-a-floor-plan-by-id)
      - [Update a floor plan's geolocation and other meta data](#update-a-floor-plans-geolocation-and-other-meta-data)
      - [Destroy a floor plan](#destroy-a-floor-plan)
  * [\[ appliance \]](#-appliance-)
    + [dns](#dns)
      - [Assign the local DNS profile to networks in the organization](#assign-the-local-dns-profile-to-networks-in-the-organization)
  * [\[ global \]](#-global-)
    + [service](#service)
- [What's Updated](#whats-updated)
  * [\[ switch \]](#-switch--1)
    + [routing](#routing-1)
      - [Create a layer 3 interface for a switch](#create-a-layer-3-interface-for-a-switch-1)
      - [List layer 3 interfaces for a switch](#list-layer-3-interfaces-for-a-switch)
      - [Return a layer 3 interface for a switch](#return-a-layer-3-interface-for-a-switch)
      - [Update a layer 3 interface for a switch](#update-a-layer-3-interface-for-a-switch)
    + [stacks](#stacks)
      - [Create a layer 3 interface for a switch stack](#create-a-layer-3-interface-for-a-switch-stack)
      - [List layer 3 interfaces for a switch stack](#list-layer-3-interfaces-for-a-switch-stack)
      - [Return a layer 3 interface from a switch stack](#return-a-layer-3-interface-from-a-switch-stack)
      - [Update a layer 3 interface for a switch stack](#update-a-layer-3-interface-for-a-switch-stack)
  * [\[ networks \]](#-networks--1)
    + [floorPlans](#floorplans-1)
      - [List the floor plans that belong to your network](#list-the-floor-plans-that-belong-to-your-network-1)
      - [Find a floor plan by ID](#find-a-floor-plan-by-id-1)
  * [\[ appliance \]](#-appliance--1)
    + [dns](#dns-1)
      - [Assign the local DNS profile to networks in the organization](#assign-the-local-dns-profile-to-networks-in-the-organization-1)
  * [\[ organizations \]](#-organizations-)
    + [loginSecurity](#loginsecurity)
      - [Returns the login security settings for an organization.](#returns-the-login-security-settings-for-an-organization)
      - [Update the login security settings for an organization](#update-the-login-security-settings-for-an-organization)
- [What's New](#whats-new)
  * [\[ organizations \]](#-organizations--1)
    + [sase](#sase)
      - [List of MX networks or templates that can be enrolled into Secure Access](#list-of-mx-networks-or-templates-that-can-be-enrolled-into-secure-access)
      - [Enroll sites in this organization to Secure Access. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.](#enroll-sites-in-this-organization-to-secure-access-for-an-organization-a-maximum-of-4000-sites-can-be-enrolled-if-they-are-in-spoke-mode-or-a-maximum-of-10-sites-can-be-enrolled-in-hub-mode)
      - [Get details of a site in this organization](#get-details-of-a-site-in-this-organization)
 
Version **1.56.0-beta.3** _to_ **1.57.0-beta.0**

* * *

**Summary of Changes**

**3 - New**

**27 - Updated**

**997 - Total Endpoints**

**685 - Total Paths**

* * *

* * *

What's Changed
==============

\[ switch \]
------------

### routing

#### Create a layer 3 interface for a switch

POST _`/devices/{serial}/switch/routing/interfaces`_

> \- Property `name` became required

> \- Param `createDeviceSwitchRoutingInterface` became required

* * *

\[ networks \]
--------------

### floorPlans

#### Upload a floor plan

POST _`/networks/{networkId}/floorPlans`_

> \- Property `floorNumber` type turn from `integer` to `number`

> \- Property `floorNumber` type turn from `integer` to `number`

* * *

#### List the floor plans that belong to your network

GET _`/networks/{networkId}/floorPlans`_

> \- Property `floorNumber` type turn from `integer` to `number`

* * *

#### Find a floor plan by ID

GET _`/networks/{networkId}/floorPlans/{floorPlanId}`_

> \- Property `floorNumber` type turn from `integer` to `number`

* * *

#### Update a floor plan's geolocation and other meta data

PUT _`/networks/{networkId}/floorPlans/{floorPlanId}`_

> \- Property `floorNumber` type turn from `integer` to `number`

> \- Property `floorNumber` type turn from `integer` to `number`

* * *

#### Destroy a floor plan

DELETE _`/networks/{networkId}/floorPlans/{floorPlanId}`_

> \- Property `floorNumber` type turn from `integer` to `number`

* * *

\[ appliance \]
---------------

### dns

#### Assign the local DNS profile to networks in the organization

POST _`/organizations/{organizationId}/appliance/dns/local/profiles/assignments/bulkCreate`_

> \- OperationId turned from `createOrganizationApplianceDnsLocalProfilesAssignmentsBulkCreate` to `bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreate`

> \- **Required param** `bulkOrganizationApplianceDnsLocalProfilesAssignmentsCreate` Added

* * *

\[ global \]
------------

### service

PATH _`/organizations/{organizationId}/licensing/orders/claim`_

> \- renamed to `/organizations/{organizationId}/inventory/orders/claim`

* * *

PATH _`/organizations/{organizationId}/licensing/orders/preview`_

> \- renamed to `/organizations/{organizationId}/inventory/orders/preview`

* * *

What's Updated
==============

\[ switch \]
------------

### routing

#### Create a layer 3 interface for a switch

POST _`/devices/{serial}/switch/routing/interfaces`_

> \- Property `mode` Deleted

> \- Property `switchPortId` Deleted

* * *

#### List layer 3 interfaces for a switch

GET _`/devices/{serial}/switch/routing/interfaces`_

> \- Param `mode` Deleted

> \- Property `mode` Deleted

> \- Property `switchPortId` Deleted

* * *

#### Return a layer 3 interface for a switch

GET _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- Property `mode` Deleted

> \- Property `switchPortId` Deleted

* * *

#### Update a layer 3 interface for a switch

PUT _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- Property `mode` Deleted

> \- Property `switchPortId` Deleted

* * *

### stacks

#### Create a layer 3 interface for a switch stack

POST _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Property `ospfV3` Deleted

> \- Property `mode` Deleted

> \- Property `switchPortId` Deleted

* * *

#### List layer 3 interfaces for a switch stack

GET _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Optional param `protocol` added

> \- Property `mode` Deleted

> \- Property `switchPortId` Deleted

* * *

#### Return a layer 3 interface from a switch stack

GET _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Property `mode` Deleted

> \- Property `switchPortId` Deleted

* * *

#### Update a layer 3 interface for a switch stack

PUT _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Property `ospfV3` Deleted

> \- Property `mode` Deleted

> \- Property `switchPortId` Deleted

* * *

\[ networks \]
--------------

### floorPlans

#### List the floor plans that belong to your network

GET _`/networks/{networkId}/floorPlans`_

> \- Response property `format` value added

* * *

#### Find a floor plan by ID

GET _`/networks/{networkId}/floorPlans/{floorPlanId}`_

> \- Response property `format` value added

* * *

\[ appliance \]
---------------

### dns

#### Assign the local DNS profile to networks in the organization

POST _`/organizations/{organizationId}/appliance/dns/local/profiles/assignments/bulkCreate`_

> \- Param `createOrganizationApplianceDnsLocalProfilesAssignmentsBulkCreate` Deleted

* * *

\[ organizations \]
-------------------

### loginSecurity

#### Returns the login security settings for an organization.

GET _`/organizations/{organizationId}/loginSecurity`_

> \- Optional property `minimumPasswordLength` Added

> \- Response property `minimumPasswordLength` value added

* * *

#### Update the login security settings for an organization

PUT _`/organizations/{organizationId}/loginSecurity`_

> \- Optional property `minimumPasswordLength` Added

> \- Optional property `minimumPasswordLength` Added

* * *

What's New
==========

\[ organizations \]
-------------------

### sase

PATH _`/organizations/{organizationId}/sase/connectivity/enrollableNetworks`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List of MX networks or templates that can be enrolled into Secure Access
> 
> **GET** `/organizations/{organizationId}/sase/connectivity/enrollableNetworks`  
> 
>     {
>         "items": [
>             {
>                 "networkId": "N_123",
>                 "type": "meraki_spoke",
>                 "name": "London Office",
>                 "region": {
>                     "name": "US East"
>                 },
>                 "model": "MX95",
>                 "address": {
>                     "street": "123 Main St"
>                 },
>                 "vpn": {
>                     "type": "Hub"
>                 },
>                 "routing": {
>                     "defaultRoute": {
>                         "enabled": true
>                     }
>                 }
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 1,
>                     "remaining": 0
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/sase/connectivity/sites/bulkActions`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enroll sites in this organization to Secure Access. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.
> 
> **POST** `/organizations/{organizationId}/sase/connectivity/sites/bulkActions`  
> 
>     {
>         "action": "enroll",
>         "status": "success",
>         "message": "Site enrolled successfully",
>         "request": {
>             "siteId": "1520758",
>             "regionId": "42"
>         },
>         "callback": {
>             "id": "1284392014819",
>             "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
>             "status": "new"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/sase/connectivity/sites/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get details of a site in this organization
> 
> **GET** `/organizations/{organizationId}/sase/connectivity/sites/{id}`  
> 
>     {
>         "networkId": "N_123",
>         "type": "meraki_spoke",
>         "name": "London Office",
>         "region": {
>             "name": "US East"
>         },
>         "model": "MX95",
>         "address": {
>             "street": "123 Main St"
>         },
>         "vpn": {
>             "type": "Hub"
>         },
>         "routing": {
>             "defaultRoute": {
>                 "enabled": true
>             }
>         }
>     }
> 
> * * *

* * *