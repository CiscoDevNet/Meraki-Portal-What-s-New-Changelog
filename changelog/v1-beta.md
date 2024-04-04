 - [What's Updated](#whats-updated)
  * [\[ appliance \]](#-appliance-)
    + [uplinks](#uplinks)
      - [Return the uplink settings for an MX appliance](#return-the-uplink-settings-for-an-mx-appliance)
      - [Update the uplink settings for an MX appliance](#update-the-uplink-settings-for-an-mx-appliance)
    + [vlans](#vlans)
      - [Update a VLAN](#update-a-vlan)
      - [Add a VLAN](#add-a-vlan)
    + [ports](#ports)
      - [List per-port VLAN settings for all ports of a MX.](#list-per-port-vlan-settings-for-all-ports-of-a-mx)
      - [Return per-port VLAN settings for a single MX port.](#return-per-port-vlan-settings-for-a-single-mx-port)
      - [Update the per-port VLAN settings for a single MX port.](#update-the-per-port-vlan-settings-for-a-single-mx-port)
  * [\[ networks \]](#-networks-)
    + [settings](#settings)
      - [Update the settings for a network](#update-the-settings-for-a-network)
    + [firmwareUpgrades](#firmwareupgrades)
      - [Get firmware upgrade information for a network](#get-firmware-upgrade-information-for-a-network)
      - [Update firmware upgrade information for a network](#update-firmware-upgrade-information-for-a-network)
  * [\[ switch \]](#-switch-)
    + [stacks](#stacks)
      - [Update a layer 3 interface for a switch stack](#update-a-layer-3-interface-for-a-switch-stack)
      - [Create a layer 3 interface for a switch stack](#create-a-layer-3-interface-for-a-switch-stack)
    + [ports](#ports-1)
      - [List the switchports in an organization by switch](#list-the-switchports-in-an-organization-by-switch)
  * [\[ wireless \]](#-wireless-)
    + [ssids](#ssids)
      - [Update the attributes of an MR SSID](#update-the-attributes-of-an-mr-ssid)
    + [rfProfiles](#rfprofiles)
      - [List RF profiles for this network](#list-rf-profiles-for-this-network)
      - [Return a RF profile](#return-a-rf-profile)
      - [Updates specified RF profile for this network](#updates-specified-rf-profile-for-this-network)
      - [Creates new RF profile for this network](#creates-new-rf-profile-for-this-network)
  * [\[ organizations \]](#-organizations-)
    + [devices](#devices)
      - [List the availability history information for devices in an organization.](#list-the-availability-history-information-for-devices-in-an-organization)
      - [List the status of every Meraki device in the organization](#list-the-status-of-every-meraki-device-in-the-organization)
  * [\[ insight \]](#-insight-)
    + [applications](#applications)
      - [Add an Insight tracked application](#add-an-insight-tracked-application)
      - [Add an Insight tracked application](#add-an-insight-tracked-application-1)
- [What's New](#whats-new)
  * [\[ networks \]](#-networks--1)
    + [locationScanning](#locationscanning)
      - [Return scanning API settings](#return-scanning-api-settings)
      - [Change scanning API settings](#change-scanning-api-settings)
      - [Return list of scanning API receivers](#return-list-of-scanning-api-receivers)
      - [Set the list of scanning API receivers. Old receivers will be removed](#set-the-list-of-scanning-api-receivers-old-receivers-will-be-removed)
  * [\[ switch \]](#-switch--1)
    + [devices](#devices-1)
      - [Return a historical record of packet transmission and loss, broken down by protocol, for insight into switch device health.](#return-a-historical-record-of-packet-transmission-and-loss-broken-down-by-protocol-for-insight-into-switch-device-health)
    + [ports](#ports-2)
      - [Return all connectivity events for each switch port in the given organization, within a given time range.](#return-all-connectivity-events-for-each-switch-port-in-the-given-organization-within-a-given-time-range)
      - [List the switchports in an organization](#list-the-switchports-in-an-organization)
  * [\[ wireless \]](#-wireless--1)
    + [zigbee](#zigbee)
      - [Enqueue a job to start enrolling doorlocks on zigbee configured MRs](#enqueue-a-job-to-start-enrolling-doorlocks-on-zigbee-configured-mrs)
      - [Return an enrollment job](#return-an-enrollment-job)
      - [Update Zigbee Configs for specified network](#update-zigbee-configs-for-specified-network)
      - [Return list of Zigbee configs](#return-list-of-zigbee-configs)
      - [List the Zigbee MR Nodes for and organization or the supplied network(s)](#list-the-zigbee-mr-nodes-for-and-organization-or-the-supplied-networks)
      - [Enqueue a job to start disenrolling doorlocks on zigbee configured MRs](#enqueue-a-job-to-start-disenrolling-doorlocks-on-zigbee-configured-mrs)
      - [Return a disenrollment job](#return-a-disenrollment-job)
      - [Return the list of doorlocks for a network](#return-the-list-of-doorlocks-for-a-network)
      - [Endpoint to bulk update door locks params](#endpoint-to-bulk-update-door-locks-params)
    + [healthScores](#healthscores)
      - [Fetch the health scores for a given AP on this network](#fetch-the-health-scores-for-a-given-ap-on-this-network)
    + [radio](#radio)
      - [Update the AutoRF settings for a wireless network](#update-the-autorf-settings-for-a-wireless-network)
      - [List the AutoRF settings of an organization by network](#list-the-autorf-settings-of-an-organization-by-network)
      - [List the channel planning activities of an organization](#list-the-channel-planning-activities-of-an-organization)
    + [devices](#devices-2)
      - [Fetch the health scores of all APs on this network](#fetch-the-health-scores-of-all-aps-on-this-network)
    + [clients](#clients)
      - [Fetch the health scores for all clients on this network](#fetch-the-health-scores-for-all-clients-on-this-network)
      - [Return counts of distinct wireless clients connecting to a network over time](#return-counts-of-distinct-wireless-clients-connecting-to-a-network-over-time)
      - [Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID](#fetch-the-health-scores-for-a-given-client-on-this-network-clients-are-identified-by-their-mac-or-id)
  * [\[ organizations \]](#-organizations--1)
    + [certificates](#certificates)
      - [Gets all or specific certificates for an organization](#gets-all-or-specific-certificates-for-an-organization)
      - [Import certificate for this organization](#import-certificate-for-this-organization)
      - [Query for details on the organization's RADSEC device Certificate Authority certificates (CAs). The primary CA signs all the certificates that devices present when establishing a secure connection to RADIUS servers via RADSEC protocol. This API returns an array of the status of all of the CAs as well as their contents, if they've been generated. An organization will have at most one CA unless the CA is being rotated.](#query-for-details-on-the-organizations-radsec-device-certificate-authority-certificates-cas-the-primary-ca-signs-all-the-certificates-that-devices-present-when-establishing-a-secure-connection-to-radius-servers-via-radsec-protocol-this-api-returns-an-array-of-the-status-of-all-of-the-cas-as-well-as-their-contents-if-theyve-been-generated-an-organization-will-have-at-most-one-ca-unless-the-ca-is-being-rotated)
      - [Create an organization's RADSEC device Certificate Authority (CA). Call this endpoint when turning on RADSEC in the firmware for the first time. Calling this endpoint starts an asynchronous process to generate the CA; call GET afterwards to retrieve the contents of the CA. Note this CA is generated and controlled by Meraki. Subsequent calls will not generate a new CA.](#create-an-organizations-radsec-device-certificate-authority-ca-call-this-endpoint-when-turning-on-radsec-in-the-firmware-for-the-first-time-calling-this-endpoint-starts-an-asynchronous-process-to-generate-the-ca-call-get-afterwards-to-retrieve-the-contents-of-the-ca-note-this-ca-is-generated-and-controlled-by-meraki-subsequent-calls-will-not-generate-a-new-ca)
      - [Query for details on an organization's RADSEC device Certificate Authority (CA) with the given id. This API returns the status of the CA as well as the contents of the CA, if it's been generated.](#query-for-details-on-an-organizations-radsec-device-certificate-authority-ca-with-the-given-id-this-api-returns-the-status-of-the-ca-as-well-as-the-contents-of-the-ca-if-its-been-generated)
      - [Update an organization's RADSEC device Certificate Authority (CA) state. Note this CA is generated and controlled by Meraki. Call this endpoint to update the state to "trusted", at which point Meraki will generate device certificates. "trusted" means the CA is placed on your RADSEC server(s) and devices establishing a secure connection using certs signed by this CA will pass verification.](#update-an-organizations-radsec-device-certificate-authority-ca-state-note-this-ca-is-generated-and-controlled-by-meraki-call-this-endpoint-to-update-the-state-to-trusted-at-which-point-meraki-will-generate-device-certificates-trusted-means-the-ca-is-placed-on-your-radsec-servers-and-devices-establishing-a-secure-connection-using-certs-signed-by-this-ca-will-pass-verification)
      - [Query for certificate revocation list (CRL) for the organization's RADSEC device Certificate Authority (CA) with the given id.](#query-for-certificate-revocation-list-crl-for-the-organizations-radsec-device-certificate-authority-ca-with-the-given-id)
      - [Query for all delta certificate revocation list (CRL) for the organization's RADSEC device Certificate Authority (CA) with the given id.](#query-for-all-delta-certificate-revocation-list-crl-for-the-organizations-radsec-device-certificate-authority-ca-with-the-given-id)
      - [Update a certificate's description for an organization](#update-a-certificates-description-for-an-organization)
      - [Delete a certificate for an organization](#delete-a-certificate-for-an-organization)
      - [Download the trusted certificate by certificate id.](#download-the-trusted-certificate-by-certificate-id)
    + [cloud](#cloud)
      - [List of source/destination traffic rules](#list-of-sourcedestination-traffic-rules)
    + [extensions](#extensions)
      - [List the ThousandEyes agent configurations under this organization. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#list-the-thousandeyes-agent-configurations-under-this-organization-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Add a ThousandEyes agent for this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#add-a-thousandeyes-agent-for-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [List all the networks eligible for ThousandEyes agent activation under this organization.](#list-all-the-networks-eligible-for-thousandeyes-agent-activation-under-this-organization)
      - [List the ThousandEyes agent configuration under this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#list-the-thousandeyes-agent-configuration-under-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Update a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#update-a-thousandeyes-agent-from-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Delete a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#delete-a-thousandeyes-agent-from-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Create a ThousandEyes test based on a provided test template. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#create-a-thousandeyes-test-based-on-a-provided-test-template-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
    + [policies](#policies)
      - [Get policies for all clients with policies](#get-policies-for-all-clients-with-policies)
    + [splash](#splash)
      - [Get a Splash Theme Asset](#get-a-splash-theme-asset)
      - [Delete a Splash Theme Asset](#delete-a-splash-theme-asset)
      - [List Splash Themes](#list-splash-themes)
      - [Create a Splash Theme](#create-a-splash-theme)
      - [Delete a Splash Theme](#delete-a-splash-theme)
      - [Create a Splash Theme Asset](#create-a-splash-theme-asset)
    + [support](#support)
      - [Returns the organization's sales representatives](#returns-the-organizations-sales-representatives)
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
  * [\[ insight \]](#-insight--1)
    + [speedTestResults](#speedtestresults)
      - [List the speed tests for the given devices under this organization. Only valid for organizations with Meraki Insight.](#list-the-speed-tests-for-the-given-devices-under-this-organization-only-valid-for-organizations-with-meraki-insight)
    + [webApps](#webapps)
      - [Lists all default web applications rules with counter set rule ids](#lists-all-default-web-applications-rules-with-counter-set-rule-ids)
      - [Add a custom web application for Insight to be able to track](#add-a-custom-web-application-for-insight-to-be-able-to-track)
      - [Update a custom web application for Insight to be able to track](#update-a-custom-web-application-for-insight-to-be-able-to-track)
      - [Delete a custom web application by counter set rule id.](#delete-a-custom-web-application-by-counter-set-rule-id)
    + [applications](#applications-1)
      - [Update an Insight tracked application](#update-an-insight-tracked-application)
      - [Delete an Insight tracked application](#delete-an-insight-tracked-application)
  * [\[ devices \]](#-devices-)
    + [traceRoute](#traceroute)
      - [Enqueue a job to run trace route in the device](#enqueue-a-job-to-run-trace-route-in-the-device)
      - [Return a trace route job](#return-a-trace-route-job)
    + [speedTest](#speedtest)
      - [Enqueue a job to execute a speed test from a device](#enqueue-a-job-to-execute-a-speed-test-from-a-device)
      - [Returns a speed test result in megabits per second. If test is not complete, no results are present.](#returns-a-speed-test-result-in-megabits-per-second-if-test-is-not-complete-no-results-are-present)
    + [routingTable](#routingtable)
      - [Enqueue a job to perform a routing table request for the device. Only native Catalyst switches are supported.](#enqueue-a-job-to-perform-a-routing-table-request-for-the-device-only-native-catalyst-switches-are-supported)
      - [Return an routing table live tool job.](#return-an-routing-table-live-tool-job)
    + [macTable](#mactable)
      - [Enqueue a job to request the MAC table from the device. Switches currently support this feature..](#enqueue-a-job-to-request-the-mac-table-from-the-device-switches-currently-support-this-feature)
      - [Return a MAC table live tool job.](#return-a-mac-table-live-tool-job)
    + [leds](#leds)
      - [Enqueue a job to blink leds on a device](#enqueue-a-job-to-blink-leds-on-a-device)
      - [Return a leds blink job](#return-a-leds-blink-job)
    + [cyclePort](#cycleport)
      - [Enqueue a job to perform a cycle port for the device on the specified ports.](#enqueue-a-job-to-perform-a-cycle-port-for-the-device-on-the-specified-ports)
      - [Return a cycle port live tool job.](#return-a-cycle-port-live-tool-job)
    + [aclHitCount](#aclhitcount)
      - [Enqueue a job to perform an ACL hit count for the device.](#enqueue-a-job-to-perform-an-acl-hit-count-for-the-device)
      - [Return an ACL hit count live tool job.](#return-an-acl-hit-count-live-tool-job)
  * [\[ sensor \]](#-sensor-)
    + [schedules](#schedules)
      - [Returns a list of all sensor schedules.](#returns-a-list-of-all-sensor-schedules)
    + [alerts](#alerts)
      - [Return a list of sensor alert events](#return-a-list-of-sensor-alert-events)
    + [readings](#readings)
      - [Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order](#return-all-reported-readings-from-sensors-in-a-given-timespan-summarized-as-a-series-of-intervals-sorted-by-interval-start-time-in-descending-order)
  * [\[ secureConnect \]](#-secureconnect-)
    + [privateApplicationGroups](#privateapplicationgroups)
      - [Provides a list of private application groups for an Organization](#provides-a-list-of-private-application-groups-for-an-organization)
      - [Creates a group of private applications to apply to policy. A maximum of 300 private application groups are allowed for an organization.](#creates-a-group-of-private-applications-to-apply-to-policy-a-maximum-of-300-private-application-groups-are-allowed-for-an-organization)
      - [Return the details of a specific private application group](#return-the-details-of-a-specific-private-application-group)
      - [Update an application group in an Organization. Updates are allowed on Group Name and Group Description. Applications can be added or removed. Group type and Policy cannot be changed.](#update-an-application-group-in-an-organization-updates-are-allowed-on-group-name-and-group-description-applications-can-be-added-or-removed-group-type-and-policy-cannot-be-changed)
      - [Deletes private application group from an Organization. Detaches application from groups before deleting](#deletes-private-application-group-from-an-organization-detaches-application-from-groups-before-deleting)
    + [privateApplications](#privateapplications)
      - [Provides a list of private applications for an Organization.](#provides-a-list-of-private-applications-for-an-organization)
      - [Adds a new private application to the Organization. A maximum of 300 private applications are allowed for an organization.](#adds-a-new-private-application-to-the-organization-a-maximum-of-300-private-applications-are-allowed-for-an-organization)
      - [Return the details of a specific private application](#return-the-details-of-a-specific-private-application)
      - [Updates a specific private application. Updates can be made to Name, Description, Destinations, App Protocol, SNI and SSL verification. Application groups can be added or removed.](#updates-a-specific-private-application-updates-can-be-made-to-name-description-destinations-app-protocol-sni-and-ssl-verification-application-groups-can-be-added-or-removed)
      - [Deletes a specific private application. Delink the application from any application groups before deleting the app. Cascade delete application group if this is the only application in the group.](#deletes-a-specific-private-application-delink-the-application-from-any-application-groups-before-deleting-the-app-cascade-delete-application-group-if-this-is-the-only-application-in-the-group)
    + [publicApplications](#publicapplications)
      - [Provides a list of public applications for an Organization.](#provides-a-list-of-public-applications-for-an-organization)
    + [regions](#regions)
      - [List deployed cloud hubs and CNHE regions in this organization](#list-deployed-cloud-hubs-and-cnhe-regions-in-this-organization)
    + [remoteAccessLog](#remoteaccesslog)
      - [List the latest 5000 events logged by remote access.](#list-the-latest-5000-events-logged-by-remote-access)
    + [remoteAccessLogsExports](#remoteaccesslogsexports)
      - [Provides a list of remote access logs exports for an Organization](#provides-a-list-of-remote-access-logs-exports-for-an-organization)
      - [Creates a export for a provided timestamp interval.](#creates-a-export-for-a-provided-timestamp-interval)
      - [Redirects to the download link of the completed export.](#redirects-to-the-download-link-of-the-completed-export)
      - [Return the details of a specific remote access logs export](#return-the-details-of-a-specific-remote-access-logs-export)
    + [sites](#sites)
      - [List sites in this organization](#list-sites-in-this-organization)
      - [Enroll sites in this organization to Secure Connect. For an organization, a maximum of 4000 sites can be enrolled if they are in spoke mode or a maximum of 10 sites can be enrolled in hub mode.](#enroll-sites-in-this-organization-to-secure-connect-for-an-organization-a-maximum-of-4000-sites-can-be-enrolled-if-they-are-in-spoke-mode-or-a-maximum-of-10-sites-can-be-enrolled-in-hub-mode)
      - [Detach given sites from Secure Connect](#detach-given-sites-from-secure-connect)
  * [\[ sm \]](#-sm-)
    + [apple](#apple)
      - [Enqueue a sync job for an ADE account](#enqueue-a-sync-job-for-an-ade-account)
      - [Retrieve the status of an ADE sync job](#retrieve-the-status-of-an-ade-sync-job)
    + [bulkEnrollment](#bulkenrollment)
      - [Create a PccBulkEnrollmentToken](#create-a-pccbulkenrollmenttoken)
      - [Return a BulkEnrollmentToken](#return-a-bulkenrollmenttoken)
      - [Update a PccBulkEnrollmentToken](#update-a-pccbulkenrollmenttoken)
      - [Delete a PccBulkEnrollmentToken](#delete-a-pccbulkenrollmenttoken)
      - [List all BulkEnrollmentTokens for an organization.](#list-all-bulkenrollmenttokens-for-an-organization)
 
Version **1.45.0** _to_ **1.45.0-beta.0**

* * *

**Summary of Changes**

**84 - New**

**50 - Updated**

**815 - Total Endpoints**

**538 - Total Paths**

* * *

* * *

What's Updated
==============

\[ appliance \]
---------------

### uplinks

#### Return the uplink settings for an MX appliance

GET _`/devices/{serial}/appliance/uplinks/settings`_

> \- Optional property `sgt` Added

> \- Optional property `sgt` Added

> \- Response property `sgt` value added

> \- Response property `sgt` value added

* * *

#### Update the uplink settings for an MX appliance

PUT _`/devices/{serial}/appliance/uplinks/settings`_

> \- Optional property `sgt` Added

> \- Optional property `sgt` Added

> \- Optional property `sgt` Added

* * *

### vlans

#### Update a VLAN

PUT _`/networks/{networkId}/appliance/vlans/{vlanId}`_

> \- Optional property `adaptivePolicyGroupId` Added

* * *

#### Add a VLAN

POST _`/networks/{networkId}/appliance/vlans`_

> \- Optional property `adaptivePolicyGroupId` Added

* * *

### ports

#### List per-port VLAN settings for all ports of a MX.

GET _`/networks/{networkId}/appliance/ports`_

> \- Optional property `peerSgtCapable` Added

> \- Response property `peerSgtCapable` value added

* * *

#### Return per-port VLAN settings for a single MX port.

GET _`/networks/{networkId}/appliance/ports/{portId}`_

> \- Optional property `peerSgtCapable` Added

> \- Response property `peerSgtCapable` value added

* * *

#### Update the per-port VLAN settings for a single MX port.

PUT _`/networks/{networkId}/appliance/ports/{portId}`_

> \- Optional property `peerSgtCapable` Added

> \- Optional property `adaptivePolicyGroupId` Added

> \- Optional property `peerSgtCapable` Added

* * *

\[ networks \]
--------------

### settings

#### Update the settings for a network

PUT _`/networks/{networkId}/settings`_

> \- Optional property `fips` Added

* * *

### firmwareUpgrades

#### Get firmware upgrade information for a network

GET _`/networks/{networkId}/firmwareUpgrades`_

> \- Optional property `upgradeStrategy` Added

> \- Response property `upgradeStrategy` value added

* * *

#### Update firmware upgrade information for a network

PUT _`/networks/{networkId}/firmwareUpgrades`_

> \- Optional property `upgradeStrategy` Added

> \- Optional property `upgradeStrategy` Added

* * *

\[ switch \]
------------

### stacks

#### Update a layer 3 interface for a switch stack

PUT _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Optional property `ospfV3` Added

* * *

#### Create a layer 3 interface for a switch stack

POST _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Optional property `ospfV3` Added

* * *

### ports

#### List the switchports in an organization by switch

GET _`/organizations/{organizationId}/switch/ports/bySwitch`_

> \- Optional param `extendedParams` added

* * *

\[ wireless \]
--------------

### ssids

#### Update the attributes of an MR SSID

PUT _`/networks/{networkId}/wireless/ssids/{number}`_

> \- Optional property `radiusRadsecTlsIdleTimeout` Added

* * *

### rfProfiles

#### List RF profiles for this network

GET _`/networks/{networkId}/wireless/rfProfiles`_

> \- Optional property `isIndoorDefault` Added

> \- Optional property `isOutdoorDefault` Added

> \- Response property `isIndoorDefault` value added

> \- Response property `isOutdoorDefault` value added

* * *

#### Return a RF profile

GET _`/networks/{networkId}/wireless/rfProfiles/{rfProfileId}`_

> \- Optional property `isIndoorDefault` Added

> \- Optional property `isOutdoorDefault` Added

> \- Response property `isIndoorDefault` value added

> \- Response property `isOutdoorDefault` value added

* * *

#### Updates specified RF profile for this network

PUT _`/networks/{networkId}/wireless/rfProfiles/{rfProfileId}`_

> \- Optional property `isIndoorDefault` Added

> \- Optional property `isOutdoorDefault` Added

> \- Optional property `isIndoorDefault` Added

> \- Optional property `isOutdoorDefault` Added

* * *

#### Creates new RF profile for this network

POST _`/networks/{networkId}/wireless/rfProfiles`_

> \- Optional property `isIndoorDefault` Added

> \- Optional property `isOutdoorDefault` Added

* * *

\[ organizations \]
-------------------

### devices

#### List the availability history information for devices in an organization.

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

#### List the status of every Meraki device in the organization

GET _`/organizations/{organizationId}/devices/statuses`_

> \- Optional param `configurationUpdatedAfter` added

* * *

\[ insight \]
-------------

### applications

#### Add an Insight tracked application

POST _`/organizations/{organizationId}/insight/applications`_

> \- Added endpoint method  
> 
> #### Add an Insight tracked application
> 
> _createOrganizationInsightApplication_
> 
>     {
>         "applicationId": "19.12",
>         "name": "Meraki HTTPS",
>         "thresholds": {
>             "type": "smart",
>             "byNetwork": [
>                 {
>                     "networkId": "N_12345678",
>                     "goodput": 50000,
>                     "responseDuration": 1000
>                 }
>             ]
>         }
>     }
> 
> * * *

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
>                         "networkId": "N_12345678",
>                         "url": "https://www.example.com/my_custom_webhook",
>                         "sharedSecret": "******",
>                         "validator": "xxx",
>                         "validatedAt": "2018-02-11T00:00:00Z"
>                     },
>                     "scanningApiVersion": 123,
>                     "radioType": "WiFi",
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
>                     "networkId": "N_12345678",
>                     "url": "https://www.example.com/my_custom_webhook",
>                     "sharedSecret": "******",
>                     "validator": "xxx",
>                     "validatedAt": "2018-02-11T00:00:00Z"
>                 },
>                 "scanningApiVersion": 123,
>                 "radioType": "WiFi",
>                 "successAt": "2018-05-12T00:00:00Z",
>                 "errorAt": "2018-02-11T00:00:00Z",
>                 "postErrors": "[{\"code\":200,\"delay\":{\"inMillis\":612},\"timestamp\":{\"millisFromEpoch\":1597255325467}}]"
>             }
>         ]
>     }
> 
> * * *

* * *

\[ switch \]
------------

### devices

PATH _`/organizations/{organizationId}/switch/devices/system/queues/history/bySwitch/byInterval`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a historical record of packet transmission and loss, broken down by protocol, for insight into switch device health.
> 
> **GET** `/organizations/{organizationId}/switch/devices/system/queues/history/bySwitch/byInterval`  
> 
>     {
>         "items": [
>             {
>                 "serial": "Q234-ABCD-0001",
>                 "model": "MS",
>                 "name": "My switch",
>                 "mac": "00:11:22:33:44:55",
>                 "tags": [
>                     "tag1",
>                     "tag2"
>                 ],
>                 "network": {
>                     "id": "N_24329156",
>                     "name": "Main Office",
>                     "tags": [
>                         "tag1",
>                         "tag2"
>                     ]
>                 },
>                 "history": [
>                     {
>                         "startTs": "2018-02-11T00:00:00.090210Z",
>                         "endTs": "2018-02-11T00:00:00.090210Z",
>                         "counts": {
>                             "processed": {
>                                 "total": 9,
>                                 "byProtocol": {
>                                     "stp": 1,
>                                     "ospf": 1,
>                                     "lacp": 1,
>                                     "arp": 1,
>                                     "management": 5
>                                 }
>                             },
>                             "dropped": {
>                                 "total": 3,
>                                 "byProtocol": {
>                                     "stp": 0,
>                                     "ospf": 1,
>                                     "lacp": 0,
>                                     "arp": 2,
>                                     "management": 0
>                                 }
>                             }
>                         }
>                     }
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 4,
>                     "remaining": 2
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

### ports

PATH _`/organizations/{organizationId}/switch/ports/connectivity/history/byDevice`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return all connectivity events for each switch port in the given organization, within a given time range.
> 
> **GET** `/organizations/{organizationId}/switch/ports/connectivity/history/byDevice`  
> 
>     {
>         "items": [
>             {
>                 "serial": "Q234-ABCD-0001",
>                 "ports": [
>                     {
>                         "id": "123_1",
>                         "events": [
>                             {
>                                 "startTs": "2018-02-11T00:00:00.090210Z",
>                                 "endTs": "2018-02-11T00:00:00.090210Z",
>                                 "status": "Optimal speed and connectivity"
>                             }
>                         ]
>                     }
>                 ],
>                 "network": {
>                     "id": "N_12345678",
>                     "name": "San Francisco Office"
>                 }
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 4,
>                     "remaining": 2
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/ports/statuses/bySwitch`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the switchports in an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/statuses/bySwitch`  
> 
>     [
>         {
>             "name": "Example Switch",
>             "serial": "Q555-5555-5555",
>             "mac": "01:23:45:67",
>             "network": {
>                 "name": "Example Network",
>                 "id": "N_12345"
>             },
>             "model": "MS120-8",
>             "ports": [
>                 {
>                     "portId": "1",
>                     "enabled": true,
>                     "status": "Connected",
>                     "spanningTree": {
>                         "statuses": [
>                             "Learning"
>                         ]
>                     },
>                     "isUplink": false,
>                     "errors": [
>                         "PoE overload",
>                         "Very high proportion of CRC errors"
>                     ],
>                     "warnings": [
>                         "SecurePort authentication in progress",
>                         "PoE port was denied power",
>                         "High proportion of CRC errors"
>                     ],
>                     "speed": "10 Gbps",
>                     "duplex": "full",
>                     "usageInKb": {
>                         "total": 40867,
>                         "sent": 23008,
>                         "recv": 17859
>                     },
>                     "cdp": {
>                         "systemName": "",
>                         "platform": "MS350-24X",
>                         "deviceId": "0c8ddbddee:ff",
>                         "portId": "Port 20",
>                         "nativeVlan": 1,
>                         "address": "10.0,0.1",
>                         "managementAddress": "10.0.0.100",
>                         "version": "1",
>                         "vtpManagementDomain": "",
>                         "capabilities": "Switch"
>                     },
>                     "lldp": {
>                         "systemName": "MS350-24X - Test",
>                         "systemDescription": "MS350-24X Cloud Managed PoE Switch",
>                         "chassisId": "0c:8d:db:dd:ee:ff",
>                         "portId": "20",
>                         "managementVlan": 1,
>                         "portVlan": 1,
>                         "managementAddress": "10.0.0.100",
>                         "portDescription": "Port 20",
>                         "systemCapabilities": "switch"
>                     },
>                     "clientCount": 10,
>                     "powerUsageInWh": 55.9,
>                     "trafficInKbps": {
>                         "total": 2.2,
>                         "sent": 1.2,
>                         "recv": 1
>                     },
>                     "securePort": {
>                         "enabled": true,
>                         "active": true,
>                         "authenticationStatus": "Authentication in progress",
>                         "configOverrides": {
>                             "type": "trunk",
>                             "vlan": 12,
>                             "voiceVlan": 34,
>                             "allowedVlans": "all"
>                         }
>                     },
>                     "poe": {
>                         "isAllocated": false
>                     }
>                 }
>             ]
>         }
>     ]
> 
> * * *

* * *

\[ wireless \]
--------------

### zigbee

PATH _`/devices/{serial}/wireless/zigbee/enrollments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to start enrolling doorlocks on zigbee configured MRs
> 
> **POST** `/devices/{serial}/wireless/zigbee/enrollments`  
> 
>     {
>         "enrollmentId": "1234",
>         "url": "/devices/SERIAL/wireless/zigbee/enrollments/1234",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete"
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/wireless/zigbee/enrollments/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an enrollment job
> 
> **GET** `/devices/{serial}/wireless/zigbee/enrollments/{id}`  
> 
>     {
>         "enrollmentId": "1234",
>         "url": "/devices/SERIAL/wireless/zigbee/enrollments/1234",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "enrollmentStartedAt": "complete",
>         "doorLocks": [
>             {
>                 "id": "1",
>                 "displayName": "Door Lock 403",
>                 "shortId": "ABE123",
>                 "lqi": "1",
>                 "rssi": "1",
>                 "status": "online",
>                 "eui64": "DL403",
>                 "enrolledAt": "2023-08-14T19:57:06Z",
>                 "lastSeenAt": "2023-08-14T19:59:01Z",
>                 "network": {
>                     "id": "N_24329156",
>                     "name": "Main Office"
>                 },
>                 "gateway": {
>                     "name": "My AP",
>                     "serial": "Q234-ABCD-5678"
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/wireless/zigbee`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update Zigbee Configs for specified network
> 
> **PUT** `/networks/{networkId}/wireless/zigbee`  
> 
>     {
>         "network": {
>             "id": "N_24329156"
>         },
>         "enabled": true,
>         "iotController": {
>             "name": "My AP",
>             "mac": "e4:55:a8:38:f2:06",
>             "serial": "Q234-ABCD-5678",
>             "status": "online"
>         },
>         "lockManagement": {
>             "address": "10.100.100.200",
>             "username": "user",
>             "status": "offline"
>         },
>         "defaults": {
>             "transmitPowerLevel": 10
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/zigbee`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return list of Zigbee configs
> 
> **GET** `/organizations/{organizationId}/wireless/zigbee`  
> 
>     [
>         {
>             "network": {
>                 "id": "N_24329156"
>             },
>             "enabled": true,
>             "iotController": {
>                 "name": "My AP",
>                 "mac": "e4:55:a8:38:f2:06",
>                 "serial": "Q234-ABCD-5678",
>                 "status": "online"
>             },
>             "lockManagement": {
>                 "address": "10.100.100.200",
>                 "username": "user",
>                 "status": "offline"
>             },
>             "defaults": {
>                 "transmitPowerLevel": 10
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/zigbee/devices`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the Zigbee MR Nodes for and organization or the supplied network(s)
> 
> **GET** `/organizations/{organizationId}/wireless/zigbee/devices`  
> 
>     [
>         {
>             "network": {
>                 "id": "N_1234",
>                 "name": "Main office"
>             },
>             "panId": "0x0100",
>             "channel": "auto",
>             "transmitPowerLevel": 12,
>             "enrolled": true,
>             "status": "online",
>             "gateway": {
>                 "name": "MR Client",
>                 "mac": "e4:55:a8:38:f2:06",
>                 "serial": "1234-4567-5678",
>                 "tags": ""
>             },
>             "counts": {
>                 "doorLocks": {
>                     "byStatus": {
>                         "online": 5,
>                         "offline": 2
>                     }
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/zigbee/disenrollments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to start disenrolling doorlocks on zigbee configured MRs
> 
> **POST** `/organizations/{organizationId}/wireless/zigbee/disenrollments`  
> 
>     {
>         "disenrollmentId": "1234",
>         "url": "/organization/{organizationId}/wireless/zigbee/disenrollments/1234",
>         "request": {
>             "doorLockIds": [
>                 "1234"
>             ]
>         },
>         "status": "complete"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/zigbee/disenrollments/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a disenrollment job
> 
> **GET** `/organizations/{organizationId}/wireless/zigbee/disenrollments/{id}`  
> 
>     {
>         "disenrollmentId": "1234",
>         "url": "/organization/{organizationId}/wireless/zigbee/disenrollments/1234",
>         "request": {
>             "doorLockIds": [
>                 "1234"
>             ]
>         },
>         "status": "complete",
>         "doorLocks": [
>             {
>                 "doorLockId": "1234",
>                 "status": "success"
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/zigbee/doorLocks`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the list of doorlocks for a network
> 
> **GET** `/organizations/{organizationId}/wireless/zigbee/doorLocks`  
> 
>     [
>         {
>             "id": "1",
>             "displayName": "Door Lock 403",
>             "shortId": "ABE123",
>             "lqi": "1",
>             "rssi": "1",
>             "status": "online",
>             "eui64": "DL403",
>             "enrolledAt": "2023-08-14T19:57:06Z",
>             "lastSeenAt": "2023-08-14T19:59:01Z",
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             },
>             "gateway": {
>                 "name": "My AP",
>                 "serial": "Q234-ABCD-5678"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/zigbee/doorLocks/bulkUpdate`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Endpoint to bulk update door locks params
> 
> **POST** `/organizations/{organizationId}/wireless/zigbee/doorLocks/bulkUpdate`  
> 
>     [
>         {
>             "id": "1",
>             "displayName": "Door Lock 403",
>             "shortId": "ABE123",
>             "lqi": "1",
>             "rssi": "1",
>             "status": "online",
>             "eui64": "DL403",
>             "enrolledAt": "2023-08-14T19:57:06Z",
>             "lastSeenAt": "2023-08-14T19:59:01Z",
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             },
>             "gateway": {
>                 "name": "My AP",
>                 "serial": "Q234-ABCD-5678"
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

### radio

PATH _`/networks/{networkId}/wireless/radio/autoRf`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the AutoRF settings for a wireless network
> 
> **PUT** `/networks/{networkId}/wireless/radio/autoRf`  
> 
>     {
>         "networkId": "L_12345",
>         "name": "My Network",
>         "timeZone": "America/Los_Angeles",
>         "busyHour": {
>             "schedule": {
>                 "mode": "automatic",
>                 "automatic": {
>                     "start": "08:00",
>                     "end": "17:00"
>                 },
>                 "manual": {
>                     "start": "10:00",
>                     "end": "15:00"
>                 }
>             },
>             "minimizeChanges": {
>                 "enabled": true
>             }
>         },
>         "channel": {
>             "avoidance": {
>                 "enabled": true
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/radio/autoRf/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the AutoRF settings of an organization by network
> 
> **GET** `/organizations/{organizationId}/wireless/radio/autoRf/byNetwork`  
> 
>     [
>         {
>             "networkId": "L_12345",
>             "name": "My Network",
>             "timeZone": "America/Los_Angeles",
>             "busyHour": {
>                 "schedule": {
>                     "mode": "automatic",
>                     "automatic": {
>                         "start": "08:00",
>                         "end": "17:00"
>                     },
>                     "manual": {
>                         "start": "10:00",
>                         "end": "15:00"
>                     }
>                 },
>                 "minimizeChanges": {
>                     "enabled": true
>                 }
>             },
>             "channel": {
>                 "avoidance": {
>                     "enabled": true
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/radio/autoRf/channels/planning/activities`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the channel planning activities of an organization
> 
> **GET** `/organizations/{organizationId}/wireless/radio/autoRf/channels/planning/activities`  
> 
>     [
>         {
>             "startedAt": "2018-02-11T00:00:00Z",
>             "endsAt": "2018-05-12T00:00:00Z",
>             "type": "avoid",
>             "reason": "dfs",
>             "band": "5 Ghz",
>             "channel": 44,
>             "severity": 6,
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office",
>                 "tags": [
>                     "tag1",
>                     "tag2"
>                 ]
>             },
>             "device": {
>                 "name": "My AP",
>                 "serial": "Q234-ABCD-5678",
>                 "mac": "00:11:22:33:44:55",
>                 "tags": [
>                     "tag1",
>                     "tag2"
>                 ]
>             }
>         }
>     ]
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

\[ organizations \]
-------------------

### certificates

PATH _`/organizations/{organizationId}/certificates`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Gets all or specific certificates for an organization
> 
> **GET** `/organizations/{organizationId}/certificates`  
> 
>     {
>         "certificateId": "1284392014819",
>         "description": "friendly description",
>         "parentCertificateId": "1284392014818",
>         "source": "NAC",
>         "fields": {
>             "validity": {
>                 "start": "2022-09-01T12:00:00Z",
>                 "end": "2022-10-01T12:00:00Z"
>             },
>             "subject": {
>                 "commonName": "subjectRoot",
>                 "organizationalUnit": "CloudNAC",
>                 "organization": "Cisco Systems",
>                 "locality": "Bangalore",
>                 "state": "KA",
>                 "country": "IN"
>             },
>             "subjectAlternativeName": "AAA Certificate Services Hidden Certificate",
>             "issuer": {
>                 "commonName": "issuerRoot",
>                 "organizationalUnit": "CloudNAC",
>                 "organization": "Cisco Systems",
>                 "locality": "Bangalore",
>                 "state": "KA",
>                 "country": "IN"
>             },
>             "serial": "7C 08 29 E8 CC",
>             "policy": "policy string here",
>             "version": "1.2.3.4",
>             "publicKeyAlgorithm": "RSA",
>             "keyUsage": {
>                 "isCritical": false,
>                 "data": [
>                     "Digital Signature",
>                     "Key Encipherment"
>                 ]
>             },
>             "hashes": [
>                 {
>                     "algorithm": "SHA1",
>                     "hash": "hash text here"
>                 }
>             ]
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/certificates/import`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Import certificate for this organization
> 
> **POST** `/organizations/{organizationId}/certificates/import`  
> 
>     {
>         "certificateId": "1284392014819",
>         "description": "friendly description",
>         "parentCertificateId": "1284392014818",
>         "source": "NAC",
>         "fields": {
>             "validity": {
>                 "start": "2022-09-01T12:00:00Z",
>                 "end": "2022-10-01T12:00:00Z"
>             },
>             "subject": {
>                 "commonName": "subjectRoot",
>                 "organizationalUnit": "CloudNAC",
>                 "organization": "Cisco Systems",
>                 "locality": "Bangalore",
>                 "state": "KA",
>                 "country": "IN"
>             },
>             "subjectAlternativeName": "AAA Certificate Services Hidden Certificate",
>             "issuer": {
>                 "commonName": "issuerRoot",
>                 "organizationalUnit": "CloudNAC",
>                 "organization": "Cisco Systems",
>                 "locality": "Bangalore",
>                 "state": "KA",
>                 "country": "IN"
>             },
>             "serial": "7C 08 29 E8 CC",
>             "policy": "policy string here",
>             "version": "1.2.3.4",
>             "publicKeyAlgorithm": "RSA",
>             "keyUsage": {
>                 "isCritical": false,
>                 "data": [
>                     "Digital Signature",
>                     "Key Encipherment"
>                 ]
>             },
>             "hashes": [
>                 {
>                     "algorithm": "SHA1",
>                     "hash": "hash text here"
>                 }
>             ]
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Query for details on the organization's RADSEC device Certificate Authority certificates (CAs). The primary CA signs all the certificates that devices present when establishing a secure connection to RADIUS servers via RADSEC protocol. This API returns an array of the status of all of the CAs as well as their contents, if they've been generated. An organization will have at most one CA unless the CA is being rotated.
> 
> **GET** `/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities`  
> 
>     [
>         {
>             "authorityId": "1234",
>             "status": "trusted",
>             "contents": "-----BEGIN CERTIFICATE-----\nMIIDzDCCAragAwIBAgIUOd0ukLcjH43TfTHFG9qE0FtlMVgwCwYJKoZIhvcNAQEL\n...\numkqeYeO30g1uYvDuWLXVA==\n-----END CERTIFICATE-----\n"
>         }
>     ]
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create an organization's RADSEC device Certificate Authority (CA). Call this endpoint when turning on RADSEC in the firmware for the first time. Calling this endpoint starts an asynchronous process to generate the CA; call GET afterwards to retrieve the contents of the CA. Note this CA is generated and controlled by Meraki. Subsequent calls will not generate a new CA.
> 
> **POST** `/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities`  
> 
>     {
>         "authorityId": "1234",
>         "status": "generating",
>         "contents": ""
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Query for details on an organization's RADSEC device Certificate Authority (CA) with the given id. This API returns the status of the CA as well as the contents of the CA, if it's been generated.
> 
> **GET** `/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities/{id}`  
> 
>     {
>         "authorityId": "1234",
>         "status": "trusted",
>         "contents": "-----BEGIN CERTIFICATE-----\nMIIDzDCCAragAwIBAgIUOd0ukLcjH43TfTHFG9qE0FtlMVgwCwYJKoZIhvcNAQEL\n...\numkqeYeO30g1uYvDuWLXVA==\n-----END CERTIFICATE-----\n"
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update an organization's RADSEC device Certificate Authority (CA) state. Note this CA is generated and controlled by Meraki. Call this endpoint to update the state to "trusted", at which point Meraki will generate device certificates. "trusted" means the CA is placed on your RADSEC server(s) and devices establishing a secure connection using certs signed by this CA will pass verification.
> 
> **PUT** `/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities/{id}`  
> 
>     {
>         "authorityId": "1234",
>         "status": "trusted",
>         "contents": "-----BEGIN CERTIFICATE-----\nMIIDzDCCAragAwIBAgIUOd0ukLcjH43TfTHFG9qE0FtlMVgwCwYJKoZIhvcNAQEL\n...\numkqeYeO30g1uYvDuWLXVA==\n-----END CERTIFICATE-----\n"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities/{id}/revocationList`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Query for certificate revocation list (CRL) for the organization's RADSEC device Certificate Authority (CA) with the given id.
> 
> **GET** `/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities/{id}/revocationList`  
> 
>     {
>         "crl": "-----BEGIN X509 CRL-----\nMIICVjCCAj8CAQEwQQD\n...\n-----END X509 CRL-----\n"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities/{id}/revocationList/deltas`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Query for all delta certificate revocation list (CRL) for the organization's RADSEC device Certificate Authority (CA) with the given id.
> 
> **GET** `/organizations/{organizationId}/certificates/radSec/deviceCertificateAuthorities/{id}/revocationList/deltas`  
> 
>     {
>         "deltaCrls": [
>             "-----BEGIN X509 CRL-----\nMIICVjCCAj8CAQEwQQD\n...\n-----END X509 CRL-----\n",
>             "-----BEGIN X509 CRL-----\nPil0f9yaXcNbMUmaGlV\n...\n-----END X509 CRL-----\n",
>             "-----BEGIN X509 CRL-----\n8G2kAJf816ARjULLwz1\n...\n-----END X509 CRL-----\n",
>             "-----BEGIN X509 CRL-----\nnUxCohSdUMzAKBgNVHR\n...\n-----END X509 CRL-----\n"
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/certificates/{certificateId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a certificate's description for an organization
> 
> **PUT** `/organizations/{organizationId}/certificates/{certificateId}`  
> 
>     {
>         "certificateId": "1284392014819",
>         "description": "friendly description",
>         "parentCertificateId": "1284392014818",
>         "source": "NAC",
>         "fields": {
>             "validity": {
>                 "start": "2022-09-01T12:00:00Z",
>                 "end": "2022-10-01T12:00:00Z"
>             },
>             "subject": {
>                 "commonName": "subjectRoot",
>                 "organizationalUnit": "CloudNAC",
>                 "organization": "Cisco Systems",
>                 "locality": "Bangalore",
>                 "state": "KA",
>                 "country": "IN"
>             },
>             "subjectAlternativeName": "AAA Certificate Services Hidden Certificate",
>             "issuer": {
>                 "commonName": "issuerRoot",
>                 "organizationalUnit": "CloudNAC",
>                 "organization": "Cisco Systems",
>                 "locality": "Bangalore",
>                 "state": "KA",
>                 "country": "IN"
>             },
>             "serial": "7C 08 29 E8 CC",
>             "policy": "policy string here",
>             "version": "1.2.3.4",
>             "publicKeyAlgorithm": "RSA",
>             "keyUsage": {
>                 "isCritical": false,
>                 "data": [
>                     "Digital Signature",
>                     "Key Encipherment"
>                 ]
>             },
>             "hashes": [
>                 {
>                     "algorithm": "SHA1",
>                     "hash": "hash text here"
>                 }
>             ]
>         }
>     }
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

PATH _`/organizations/{organizationId}/certificates/{certificateId}/contents`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Download the trusted certificate by certificate id.
> 
> **GET** `/organizations/{organizationId}/certificates/{certificateId}/contents`  
> 
>     {
>         "contents": "-----BEGIN CERTIFICATE-----MIIHvjCCBqagAwIBAgIQB4CbtQD3es3UQ988CCKGPjANBgkqhkiG9w0BAQsFADBPMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMSkwJwYDVQQDEyBEaWdpQ2VydCBUTFMgUlNBIFNIQTI1NiAyMDIwIENBMTAeFw0yMjA4MTAwMDAwMDBaFw0yMzA4MDkyMzU5NTlaMG4xCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1TYW4gRnJhbmNpc2NvMRMwEQYDVQQKEwpNZXJha2kgTExDMR0wGwYDVQQDExRyYWRpdXMuZGV2LmlrYXJlbS5pbzCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBANSxcK8g9J3nRwDqNurYbXDieo5vHw5wWO4m3uJSvWtQ+zDMZzjEhA6ix3VfftGLLE+0C99a9B2oOubZgO/sAIJmLD6Oz25bUinAtzuEmOQiqZ8OZjYZd//emPOty7POZSU5C3rGUX0ESzrStL20iJoGzyA0U9clI+14yZCyXY1+Th3VSQCvGs/DmOMPn+MdBoMXIgzVk7+wjMr53fN6H8Q26y52NlLTmAxum2L7ag4owTecURzC6-----END CERTIFICATE-----"
>     }
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

### extensions

PATH _`/organizations/{organizationId}/extensions/thousandEyes/networks`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the ThousandEyes agent configurations under this organization. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **GET** `/organizations/{organizationId}/extensions/thousandEyes/networks`  
> 
>     [
>         {
>             "networkId": "N_24329156",
>             "enabled": true,
>             "agentId": "12345"
>         }
>     ]
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
>     {
>         "networkId": "N_24329156",
>         "enabled": true,
>         "agentId": "12345"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/extensions/thousandEyes/networks/supported`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all the networks eligible for ThousandEyes agent activation under this organization.
> 
> **GET** `/organizations/{organizationId}/extensions/thousandEyes/networks/supported`  
> 
>     [
>         {
>             "networkId": "N_24329156",
>             "name": "Main Office",
>             "tags": [
>                 "tag1",
>                 "tag2"
>             ],
>             "device": {
>                 "model": "MX105",
>                 "firmware": {
>                     "currentVersion": {
>                         "shortName": "MX 18.104"
>                     }
>                 },
>                 "agent": {
>                     "isInstalled": false
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/extensions/thousandEyes/networks/{networkId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the ThousandEyes agent configuration under this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **GET** `/organizations/{organizationId}/extensions/thousandEyes/networks/{networkId}`  
> 
>     {
>         "networkId": "N_24329156",
>         "enabled": true,
>         "agentId": "12345"
>     }
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
>     {
>         "networkId": "N_24329156",
>         "enabled": true,
>         "agentId": "12345"
>     }
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

PATH _`/organizations/{organizationId}/extensions/thousandEyes/tests`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a ThousandEyes test based on a provided test template. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.
> 
> **POST** `/organizations/{organizationId}/extensions/thousandEyes/tests`  
> 
>     {
>         "jobStatus": "new",
>         "pccBackgroundJob": "13289785"
>     }
> 
> * * *

* * *

### policies

PATH _`/organizations/{organizationId}/policies/assignments/byClient`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get policies for all clients with policies
> 
> **GET** `/organizations/{organizationId}/policies/assignments/byClient`  
> 
>     [
>         {
>             "name": "Miles's phone",
>             "clientId": "k74272e",
>             "mac": "22:33:44:55:66:77",
>             "networkId": "N_24329156",
>             "assigned": [
>                 {
>                     "name": "My group policy",
>                     "type": "Group",
>                     "id": "102",
>                     "limitTo": [
>                         {
>                             "appliance": false,
>                             "ssids": [
>                                 {
>                                     "number": 1
>                                 }
>                             ]
>                         }
>                     ]
>                 }
>             ]
>         }
>     ]
> 
> * * *

* * *

### splash

PATH _`/organizations/{organizationId}/splash/assets/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get a Splash Theme Asset
> 
> **GET** `/organizations/{organizationId}/splash/assets/{id}`  
> 
>     {
>         "id": "1284392014819",
>         "name": "continue.html",
>         "fileData": "PGh0bWw+PC9odG1sPg==\n"
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete a Splash Theme Asset
> 
> **DELETE** `/organizations/{organizationId}/splash/assets/{id}`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/splash/themes`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List Splash Themes
> 
> **GET** `/organizations/{organizationId}/splash/themes`  
> 
>     [
>         {
>             "id": "482367494044dbbb1d2cc8579d967cef5b4ce59f",
>             "name": "My Custom Splash Theme",
>             "themeAssets": [
>                 {
>                     "id": "1284392014819",
>                     "name": "continue.html"
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
> #### Create a Splash Theme
> 
> **POST** `/organizations/{organizationId}/splash/themes`  
> 
>     {
>         "id": "482367494044dbbb1d2cc8579d967cef5b4ce59f",
>         "name": "My Custom Splash Theme",
>         "themeAssets": [
>             {
>                 "id": "1284392014819",
>                 "name": "continue.html"
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/splash/themes/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete a Splash Theme
> 
> **DELETE** `/organizations/{organizationId}/splash/themes/{id}`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/splash/themes/{themeIdentifier}/assets`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a Splash Theme Asset
> 
> **POST** `/organizations/{organizationId}/splash/themes/{themeIdentifier}/assets`  
> 
>     {
>         "id": "1284392014819",
>         "name": "continue.html",
>         "fileData": "PGh0bWw+PC9odG1sPg==\n"
>     }
> 
> * * *

* * *

### support

PATH _`/organizations/{organizationId}/support/salesRepresentatives`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns the organization's sales representatives
> 
> **GET** `/organizations/{organizationId}/support/salesRepresentatives`  
> 
>     [
>         {
>             "name": "Miles Meraki",
>             "email": "miles@meraki.com",
>             "phone": "+15555555555"
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
>             "name": "Custom Template",
>             "headers": [
>                 {
>                     "name": "Authorization",
>                     "template": "Bearer {{sharedSecret}}"
>                 }
>             ],
>             "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>             "sharing": {
>                 "byNetwork": {
>                     "withAll": true,
>                     "adminsCanModify": true,
>                     "ids": [
>                         "N_1234",
>                         "L_5678"
>                     ]
>                 }
>             }
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
>         "name": "Custom Template",
>         "headers": [
>             {
>                 "name": "Authorization",
>                 "template": "Bearer {{sharedSecret}}"
>             }
>         ],
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "sharing": {
>             "byNetwork": {
>                 "withAll": true,
>                 "adminsCanModify": true,
>                 "ids": [
>                     "N_1234",
>                     "L_5678"
>                 ]
>             }
>         }
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
>         "name": "Custom Template",
>         "headers": [
>             {
>                 "name": "Authorization",
>                 "template": "Bearer {{sharedSecret}}"
>             }
>         ],
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "sharing": {
>             "byNetwork": {
>                 "withAll": true,
>                 "adminsCanModify": true,
>                 "ids": [
>                     "N_1234",
>                     "L_5678"
>                 ]
>             }
>         }
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
>         "name": "Custom Template",
>         "headers": [
>             {
>                 "name": "Authorization",
>                 "template": "Bearer {{sharedSecret}}"
>             }
>         ],
>         "body": "{\"event_type\":\"{{alertTypeId}}\",\"client_payload\":{\"text\":\"{{alertData}}\"}}",
>         "sharing": {
>             "byNetwork": {
>                 "withAll": true,
>                 "adminsCanModify": true,
>                 "ids": [
>                     "N_1234",
>                     "L_5678"
>                 ]
>             }
>         }
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

\[ insight \]
-------------

### speedTestResults

PATH _`/organizations/{organizationId}/insight/speedTestResults`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the speed tests for the given devices under this organization. Only valid for organizations with Meraki Insight.
> 
> **GET** `/organizations/{organizationId}/insight/speedTestResults`  
> 
>     [
>         {
>             "speedTestId": "1284392014819",
>             "networkId": "N_24329156",
>             "request": {
>                 "serial": "Q234-ABCD-5678",
>                 "interface": "wan1"
>             },
>             "results": {
>                 "speeds": {
>                     "average": 247.279,
>                     "maximum": 983.611,
>                     "minimum": 71.606
>                 }
>             },
>             "startedAt": "2021-12-08T20:07:13Z"
>         }
>     ]
> 
> * * *

* * *

### webApps

PATH _`/organizations/{organizationId}/insight/webApps`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Lists all default web applications rules with counter set rule ids
> 
> **GET** `/organizations/{organizationId}/insight/webApps`  
> 
>     [
>         {
>             "counterSetRuleId": "12345",
>             "name": "Meraki HTTPS",
>             "category": "Remote monitoring & management",
>             "thresholds": {
>                 "goodput": "20000",
>                 "responseDelay": "3000"
>             },
>             "expression": "http_host[*.example.com] or http_host",
>             "signature": {
>                 "signatureType": "custom_host",
>                 "host": "exampled.com",
>                 "port": "123",
>                 "net": "10.0.2.1/20"
>             }
>         }
>     ]
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
>     {
>         "counterSetRuleId": "12345",
>         "name": "Meraki HTTPS",
>         "category": "Remote monitoring & management",
>         "thresholds": {
>             "goodput": "20000",
>             "responseDelay": "3000"
>         },
>         "expression": "http_host[*.example.com] or http_host",
>         "signature": {
>             "signatureType": "custom_host",
>             "host": "exampled.com"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/insight/webApps/{customCounterSetRuleId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a custom web application for Insight to be able to track
> 
> **PUT** `/organizations/{organizationId}/insight/webApps/{customCounterSetRuleId}`  
> 
>     {
>         "counterSetRuleId": "12345",
>         "name": "Meraki HTTPS",
>         "category": "Remote monitoring & management",
>         "thresholds": {
>             "goodput": "20000",
>             "responseDelay": "3000"
>         },
>         "expression": "http_host[*.example.com] or http_host",
>         "signature": {
>             "signatureType": "custom_host",
>             "host": "exampled.com"
>         }
>     }
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

### applications

PATH _`/organizations/{organizationId}/insight/applications/{applicationId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an Insight tracked application
> 
> **PUT** `/organizations/{organizationId}/insight/applications/{applicationId}`  
> 
>     {
>         "applicationId": "19.12",
>         "name": "Meraki HTTPS",
>         "thresholds": {
>             "type": "smart",
>             "byNetwork": [
>                 {
>                     "networkId": "N_12345678",
>                     "goodput": 50000,
>                     "responseDuration": 1000
>                 }
>             ]
>         }
>     }
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

\[ devices \]
-------------

### traceRoute

PATH _`/devices/{serial}/liveTools/traceRoute`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to run trace route in the device
> 
> **POST** `/devices/{serial}/liveTools/traceRoute`  
> 
>     {
>         "traceRouteId": "123",
>         "url": "/devices/QXXX-YYYY-ZZZZ/liveTools/traceroute/123",
>         "request": {
>             "serial": "Q234-ABCD-5678",
>             "target": "www.cisco.com",
>             "sourceInterface": "100.100.0.1"
>         },
>         "status": "complete",
>         "callback": {
>             "id": "1284392014819",
>             "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
>             "status": "new"
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/liveTools/traceRoute/{traceRouteId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a trace route job
> 
> **GET** `/devices/{serial}/liveTools/traceRoute/{traceRouteId}`  
> 
>     {
>         "traceRouteId": "123",
>         "url": "/devices/QXXX-YYYY-ZZZZ/liveTools/traceroute/123",
>         "request": {
>             "serial": "Q234-ABCD-5678",
>             "target": "www.cisco.com",
>             "sourceInterface": "100.100.0.1"
>         },
>         "status": "complete",
>         "results": [
>             {
>                 "hop": 0,
>                 "ip": "100.100.0.1",
>                 "rttAvg": 0.00005,
>                 "count": 3
>             }
>         ],
>         "error": "The device is unreachable."
>     }
> 
> * * *

* * *

### speedTest

PATH _`/devices/{serial}/liveTools/speedTest`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to execute a speed test from a device
> 
> **POST** `/devices/{serial}/liveTools/speedTest`  
> 
>     {
>         "speedTestId": "1284392014819",
>         "url": "/devices/SERIAL/liveTools/speedTest/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678",
>             "interface": "wan1"
>         },
>         "status": "complete",
>         "startedAt": "2021-10-01T15:55:39.000000Z",
>         "completionTimeEstimateSecs": 60,
>         "results": {
>             "speeds": {
>                 "average": 123.45,
>                 "maximum": 400.12,
>                 "minimum": 1.1
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/liveTools/speedTest/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns a speed test result in megabits per second. If test is not complete, no results are present.
> 
> **GET** `/devices/{serial}/liveTools/speedTest/{id}`  
> 
>     {
>         "speedTestId": "1284392014819",
>         "url": "/devices/SERIAL/liveTools/speedTest/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678",
>             "interface": "wan1"
>         },
>         "status": "complete",
>         "startedAt": "2021-10-01T15:55:39.000000Z",
>         "completionTimeEstimateSecs": 60,
>         "results": {
>             "speeds": {
>                 "average": 123.45,
>                 "maximum": 400.12,
>                 "minimum": 1.1
>             }
>         }
>     }
> 
> * * *

* * *

### routingTable

PATH _`/devices/{serial}/liveTools/routingTable`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a routing table request for the device. Only native Catalyst switches are supported.
> 
> **POST** `/devices/{serial}/liveTools/routingTable`  
> 
>     {
>         "routingTableId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/routingTable/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "callback": {
>             "id": "1284392014819",
>             "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
>             "status": "new"
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/liveTools/routingTable/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an routing table live tool job.
> 
> **GET** `/devices/{serial}/liveTools/routingTable/{id}`  
> 
>     {
>         "routingTableId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/routingTable/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "entries": [
>             {
>                 "type": "static",
>                 "subnet": "10.200.10.1/32",
>                 "staticGateway": "22.22.22.21"
>             }
>         ],
>         "error": "The device is unreachable"
>     }
> 
> * * *

* * *

### macTable

PATH _`/devices/{serial}/liveTools/macTable`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to request the MAC table from the device. Switches currently support this feature..
> 
> **POST** `/devices/{serial}/liveTools/macTable`  
> 
>     {
>         "macTableId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/macTable/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "callback": {
>             "id": "1284392014819",
>             "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
>             "status": "new"
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/liveTools/macTable/{macTableId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a MAC table live tool job.
> 
> **GET** `/devices/{serial}/liveTools/macTable/{macTableId}`  
> 
>     {
>         "macTableId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/macTable/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "entries": [
>             {
>                 "mac": "00:11:22:33:44:55",
>                 "port": "Tw1/0/9",
>                 "vlanId": 100
>             }
>         ],
>         "error": "The device is unreachable."
>     }
> 
> * * *

* * *

### leds

PATH _`/devices/{serial}/liveTools/leds/blink`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to blink leds on a device
> 
> **POST** `/devices/{serial}/liveTools/leds/blink`  
> 
>     {
>         "ledsBlinkId": "123",
>         "url": "/devices/QXXX-YYYY-ZZZZ/liveTools/leds/blink/1738",
>         "status": "complete",
>         "results": [
>             {
>                 "acknowledged": true
>             }
>         ],
>         "request": {
>             "serial": "Q234-ABCD-5678",
>             "duration": 30
>         },
>         "error": "error description",
>         "callback": {
>             "id": "1284392014819",
>             "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
>             "status": "new"
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/liveTools/leds/blink/{ledsBlinkId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a leds blink job
> 
> **GET** `/devices/{serial}/liveTools/leds/blink/{ledsBlinkId}`  
> 
>     {
>         "ledsBlinkId": "123",
>         "url": "/devices/QXXX-YYYY-ZZZZ/liveTools/leds/blink/1738",
>         "status": "complete",
>         "results": [
>             {
>                 "acknowledged": true
>             }
>         ],
>         "request": {
>             "serial": "Q234-ABCD-5678",
>             "duration": 30
>         },
>         "error": "error description"
>     }
> 
> * * *

* * *

### cyclePort

PATH _`/devices/{serial}/liveTools/cyclePort`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a cycle port for the device on the specified ports.
> 
> **POST** `/devices/{serial}/liveTools/cyclePort`  
> 
>     {
>         "cyclePortId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/cyclePort/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678",
>             "ports": [
>                 "2",
>                 "8"
>             ]
>         },
>         "status": "complete",
>         "callback": {
>             "id": "1284392014819",
>             "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
>             "status": "new"
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/liveTools/cyclePort/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a cycle port live tool job.
> 
> **GET** `/devices/{serial}/liveTools/cyclePort/{id}`  
> 
>     {
>         "cyclePortId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/cyclePort/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678",
>             "ports": [
>                 "2",
>                 "8"
>             ]
>         },
>         "status": "complete",
>         "error": "The device is unreachable."
>     }
> 
> * * *

* * *

### aclHitCount

PATH _`/devices/{serial}/liveTools/aclHitCount`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform an ACL hit count for the device.
> 
> **POST** `/devices/{serial}/liveTools/aclHitCount`  
> 
>     {
>         "aclHitCountId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/aclHitCount/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "callback": {
>             "id": "1284392014819",
>             "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
>             "status": "new"
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/liveTools/aclHitCount/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an ACL hit count live tool job.
> 
> **GET** `/devices/{serial}/liveTools/aclHitCount/{id}`  
> 
>     {
>         "aclHitCountId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/aclHitCount/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "acls": [
>             {
>                 "policy": "allow",
>                 "ipVersion": "any",
>                 "ipProtocol": {
>                     "type": "number",
>                     "number": 6,
>                     "objectGroup": "object-group-123"
>                 },
>                 "counts": {
>                     "total": 1234,
>                     "ipv4": 1234,
>                     "ipv6": 0
>                 },
>                 "source": {
>                     "address": "1.2.3.4",
>                     "port": {
>                         "operator": "equals",
>                         "ports": [
>                             80,
>                             443
>                         ]
>                     }
>                 },
>                 "destination": {
>                     "address": "2.3.4.5",
>                     "port": [
>                         {
>                             "operator": "range",
>                             "ports": [
>                                 80,
>                                 89
>                             ]
>                         }
>                     ]
>                 }
>             }
>         ],
>         "error": "The device is unreachable."
>     }
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

### alerts

PATH _`/organizations/{organizationId}/sensor/alerts`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a list of sensor alert events
> 
> **GET** `/organizations/{organizationId}/sensor/alerts`  
> 
>     [
>         {
>             "startTs": "2018-02-11T00:00:00.090210Z",
>             "sensor": {
>                 "name": "My sensor",
>                 "serial": "Q234-ABCD-5678",
>                 "model": "MT10",
>                 "url": "http://example.com"
>             },
>             "trigger": {
>                 "ts": "2021-10-18T23:54:48.000000Z",
>                 "metric": "temperature",
>                 "apparentPower": {
>                     "draw": 15.9
>                 },
>                 "co2": {
>                     "concentration": 100
>                 },
>                 "current": {
>                     "draw": 0.13
>                 },
>                 "door": {
>                     "open": true
>                 },
>                 "frequency": {
>                     "level": 60.1
>                 },
>                 "humidity": {
>                     "relativePercentage": 34
>                 },
>                 "indoorAirQuality": {
>                     "score": 89
>                 },
>                 "noise": {
>                     "ambient": {
>                         "level": 45
>                     }
>                 },
>                 "pm25": {
>                     "concentration": 100
>                 },
>                 "powerFactor": {
>                     "percentage": 86
>                 },
>                 "realPower": {
>                     "draw": 13.7
>                 },
>                 "temperature": {
>                     "fahrenheit": 77.81,
>                     "celsius": 25.45
>                 },
>                 "tvoc": {
>                     "concentration": 100
>                 },
>                 "upstreamPower": {
>                     "outageDetected": true
>                 },
>                 "voltage": {
>                     "level": 122.4
>                 },
>                 "water": {
>                     "present": true
>                 }
>             },
>             "profile": {
>                 "id": "1",
>                 "name": "Too hot",
>                 "condition": {
>                     "metric": "temperature",
>                     "threshold": {
>                         "temperature": {
>                             "celsius": 20.5,
>                             "fahrenheit": 70,
>                             "quality": "good"
>                         },
>                         "humidity": {
>                             "relativePercentage": 65,
>                             "quality": "inadequate"
>                         },
>                         "water": {
>                             "present": true
>                         },
>                         "door": {
>                             "open": true
>                         },
>                         "tvoc": {
>                             "concentration": 400,
>                             "quality": "poor"
>                         },
>                         "pm25": {
>                             "concentration": 90,
>                             "quality": "fair"
>                         },
>                         "noise": {
>                             "ambient": {
>                                 "level": 120,
>                                 "quality": "poor"
>                             }
>                         },
>                         "indoorAirQuality": {
>                             "score": 80,
>                             "quality": "fair"
>                         },
>                         "realPower": {
>                             "draw": 14.1
>                         },
>                         "apparentPower": {
>                             "draw": 17.2
>                         },
>                         "powerFactor": {
>                             "percentage": 81
>                         },
>                         "current": {
>                             "draw": 0.14
>                         },
>                         "voltage": {
>                             "level": 119.5
>                         },
>                         "frequency": {
>                             "level": 58.8
>                         },
>                         "upstreamPower": {
>                             "outageDetected": true
>                         }
>                     },
>                     "direction": "above",
>                     "duration": 60
>                 }
>             },
>             "snapshotCamera": {
>                 "serial": "QAAA-AAAA-AAAA",
>                 "name": "Camera",
>                 "url": "http://example.com"
>             }
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
>             "apparentPower": {
>                 "draw": {
>                     "minimum": 0,
>                     "maximum": 15.9,
>                     "average": 4.9
>                 }
>             },
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
>             "co2": {
>                 "concentration": {
>                     "minimum": 221,
>                     "maximum": 504,
>                     "average": 440
>                 }
>             },
>             "current": {
>                 "draw": {
>                     "minimum": 0,
>                     "maximum": 0.13,
>                     "average": 0.04
>                 }
>             },
>             "door": {
>                 "counts": {
>                     "open": 6
>                 }
>             },
>             "energy": {
>                 "usage": 0.116
>             },
>             "frequency": {
>                 "draw": {
>                     "minimum": 59.6,
>                     "maximum": 60.2,
>                     "average": 60.1
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
>             "powerFactor": {
>                 "percentage": {
>                     "minimum": 84,
>                     "maximum": 89,
>                     "average": 86
>                 }
>             },
>             "realPower": {
>                 "draw": {
>                     "minimum": 0,
>                     "maximum": 14.2,
>                     "average": 5
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
>             "voltage": {
>                 "level": {
>                     "minimum": 120.7,
>                     "maximum": 124.6,
>                     "average": 122.6
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

\[ secureConnect \]
-------------------

### privateApplicationGroups

PATH _`/organizations/{organizationId}/secureConnect/privateApplicationGroups`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of private application groups for an Organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateApplicationGroups`  
> 
>     {
>         "data": [
>             {
>                 "applicationGroupId": "1122321",
>                 "name": "Westcoast Data Center",
>                 "description": "Private applications in Westcoast Data Center",
>                 "applicationIds": [
>                     "183456",
>                     "123568"
>                 ],
>                 "createdAt": "2021-12-13T16:07:07.222Z",
>                 "modifiedAt": "2021-12-13T16:07:07.222Z"
>             }
>         ],
>         "meta": {
>             "total": 1
>         }
>     }
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
>     {
>         "applicationGroupId": "1122321",
>         "name": "Westcoast Data Center",
>         "description": "Private applications in Westcoast Data Center",
>         "applicationIds": [
>             "183456",
>             "123568"
>         ],
>         "createdAt": "2021-12-13T16:07:07.222Z",
>         "modifiedAt": "2021-12-13T16:07:07.222Z"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/secureConnect/privateApplicationGroups/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the details of a specific private application group
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateApplicationGroups/{id}`  
> 
>     {
>         "applicationGroupId": "1122321",
>         "name": "Westcoast Data Center",
>         "description": "Private applications in Westcoast Data Center",
>         "applicationIds": [
>             "183456",
>             "123568"
>         ],
>         "createdAt": "2021-12-13T16:07:07.222Z",
>         "modifiedAt": "2021-12-13T16:07:07.222Z"
>     }
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
>     {
>         "applicationGroupId": "1122321",
>         "name": "Westcoast Data Center",
>         "description": "Private applications in Westcoast Data Center",
>         "applicationIds": [
>             "183456",
>             "123568"
>         ],
>         "createdAt": "2021-12-13T16:07:07.222Z",
>         "modifiedAt": "2021-12-13T16:07:07.222Z"
>     }
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

### privateApplications

PATH _`/organizations/{organizationId}/secureConnect/privateApplications`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of private applications for an Organization.
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateApplications`  
> 
>     {
>         "data": [
>             {
>                 "applicationId": "183456",
>                 "name": "Jira",
>                 "description": "Jira App For My Org",
>                 "destinations": [
>                     {
>                         "destinationAddr": [
>                             "172.6.0.0/32",
>                             "255.100.100.0/24"
>                         ],
>                         "protocolPorts": [
>                             {
>                                 "protocol": "TCP",
>                                 "ports": "80-82"
>                             }
>                         ],
>                         "accessType": "network"
>                     }
>                 ],
>                 "appProtocol": "https",
>                 "sni": "xyz123.jira.com",
>                 "externalFQDN": "https://jira-5001.ztna.ciscoplus.com",
>                 "sslVerificationEnabled": true,
>                 "applicationGroupIds": [
>                     "1122321"
>                 ],
>                 "createdAt": "2021-12-13T16:07:07.222000Z",
>                 "modifiedAt": "2021-12-13T16:07:07.222000Z"
>             }
>         ],
>         "meta": {
>             "total": 1
>         }
>     }
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
>     {
>         "applicationId": "183456",
>         "name": "Jira",
>         "description": "Jira App For My Org",
>         "destinations": [
>             {
>                 "destinationAddr": [
>                     "172.6.0.0/32",
>                     "255.100.100.0/24"
>                 ],
>                 "protocolPorts": [
>                     {
>                         "protocol": "TCP",
>                         "ports": "80-82"
>                     }
>                 ],
>                 "accessType": "network"
>             }
>         ],
>         "appProtocol": "https",
>         "sni": "xyz123.jira.com",
>         "externalFQDN": "https://jira-5001.ztna.ciscoplus.com",
>         "sslVerificationEnabled": true,
>         "applicationGroupIds": [
>             "1122321"
>         ],
>         "createdAt": "2021-12-13T16:07:07.222000Z",
>         "modifiedAt": "2021-12-13T16:07:07.222000Z"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/secureConnect/privateApplications/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the details of a specific private application
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateApplications/{id}`  
> 
>     {
>         "applicationId": "183456",
>         "name": "Jira",
>         "description": "Jira App For My Org",
>         "destinations": [
>             {
>                 "destinationAddr": [
>                     "172.6.0.0/32",
>                     "255.100.100.0/24"
>                 ],
>                 "protocolPorts": [
>                     {
>                         "protocol": "TCP",
>                         "ports": "80-82"
>                     }
>                 ],
>                 "accessType": "network"
>             }
>         ],
>         "appProtocol": "https",
>         "sni": "xyz123.jira.com",
>         "externalFQDN": "https://jira-5001.ztna.ciscoplus.com",
>         "sslVerificationEnabled": true,
>         "applicationGroupIds": [
>             "1122321"
>         ],
>         "createdAt": "2021-12-13T16:07:07.222Z",
>         "modifiedAt": "2021-12-13T16:07:07.222Z"
>     }
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
>     {
>         "applicationId": "183456",
>         "name": "Jira",
>         "description": "Jira App For My Org",
>         "destinations": [
>             {
>                 "destinationAddr": [
>                     "172.6.0.0/32",
>                     "255.100.100.0/24"
>                 ],
>                 "protocolPorts": [
>                     {
>                         "protocol": "TCP",
>                         "ports": "80-82"
>                     }
>                 ],
>                 "accessType": "network"
>             }
>         ],
>         "appProtocol": "https",
>         "sni": "xyz123.jira.com",
>         "externalFQDN": "https://jira-5001.ztna.ciscoplus.com",
>         "sslVerificationEnabled": true,
>         "applicationGroupIds": [
>             "1122321"
>         ],
>         "createdAt": "2021-12-13T16:07:07.222000Z",
>         "modifiedAt": "2021-12-13T16:07:07.222000Z"
>     }
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

### publicApplications

PATH _`/organizations/{organizationId}/secureConnect/publicApplications`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of public applications for an Organization.
> 
> **GET** `/organizations/{organizationId}/secureConnect/publicApplications`  
> 
>     {
>         "items": [
>             {
>                 "id": "ABCDEFG",
>                 "name": "Snapcraft",
>                 "lastDetected": "2021-12-13T16:07:07.222Z",
>                 "risk": "medium",
>                 "category": "Application Development and Testing",
>                 "appType": "paas"
>             }
>         ],
>         "meta": {
>             "total": 1
>         }
>     }
> 
> * * *

* * *

### regions

PATH _`/organizations/{organizationId}/secureConnect/regions`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List deployed cloud hubs and CNHE regions in this organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/regions`  
> 
>     {
>         "data": [
>             {
>                 "id": "123",
>                 "type": "CNHE",
>                 "name": "US West Coast",
>                 "dcPair": [
>                     "Los Angeles",
>                     "Palo Alto"
>                 ]
>             }
>         ],
>         "meta": {
>             "maxTotalCloudHubs": 5
>         }
>     }
> 
> * * *

* * *

### remoteAccessLog

PATH _`/organizations/{organizationId}/secureConnect/remoteAccessLog`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the latest 5000 events logged by remote access.
> 
> **GET** `/organizations/{organizationId}/secureConnect/remoteAccessLog`  
> 
>     {
>         "data": [
>             {
>                 "osversion": "win-10.0.19044",
>                 "internalip": "10.0.1.5",
>                 "connecttimestamp": 1667252442,
>                 "identities": [
>                     {
>                         "id": "1173502975",
>                         "type": {
>                             "id": "7",
>                             "type": "directory_user",
>                             "label": "AD Users"
>                         },
>                         "label": "sample-remote-access@cisco.com",
>                         "deleted": false
>                     }
>                 ],
>                 "reason": "ACCT_DISC_USER_REQ",
>                 "failedreasons": [],
>                 "connectionevent": "disconnected",
>                 "anyconnectversion": "4.10.05095",
>                 "timestamp": 1667252458
>             }
>         ],
>         "meta": {
>             "total": 1
>         }
>     }
> 
> * * *

* * *

### remoteAccessLogsExports

PATH _`/organizations/{organizationId}/secureConnect/remoteAccessLogsExports`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of remote access logs exports for an Organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/remoteAccessLogsExports`  
> 
>     {
>         "data": [
>             {
>                 "id": "123",
>                 "from": "2023-05-16 04:23:43 UTC",
>                 "to": "2023-06-14 04:23:52 UTC",
>                 "userEmail": "joe@meraki.net",
>                 "status": "new",
>                 "metadata": {
>                     "fileCount": 0,
>                     "logCount": 0,
>                     "currentFileLogCount": 0,
>                     "generatorCount": 0,
>                     "limitReached": false,
>                     "startedAt": "2023-05-15 21:23:43.388597",
>                     "endedAt": "2023-05-15 21:23:43.388597",
>                     "duration": 60
>                 }
>             }
>         ],
>         "meta": {
>             "total": 1
>         }
>     }
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
>     {
>         "id": "123",
>         "from": "2023-05-16 04:23:43 UTC",
>         "to": "2023-06-14 04:23:52 UTC",
>         "userEmail": "joe@meraki.net",
>         "status": "new",
>         "metadata": {
>             "fileCount": 0,
>             "logCount": 0,
>             "currentFileLogCount": 0,
>             "generatorCount": 0,
>             "limitReached": false,
>             "startedAt": "2023-05-15 21:23:43.388597",
>             "endedAt": "2023-05-15 21:23:43.388597",
>             "duration": 60
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/secureConnect/remoteAccessLogsExports/download`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Redirects to the download link of the completed export.
> 
> **GET** `/organizations/{organizationId}/secureConnect/remoteAccessLogsExports/download`  
> 
>     {
>         "link": "download"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/secureConnect/remoteAccessLogsExports/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the details of a specific remote access logs export
> 
> **GET** `/organizations/{organizationId}/secureConnect/remoteAccessLogsExports/{id}`  
> 
>     {
>         "id": "123",
>         "from": "2023-05-16 04:23:43 UTC",
>         "to": "2023-06-14 04:23:52 UTC",
>         "userEmail": "joe@meraki.net",
>         "status": "new",
>         "metadata": {
>             "fileCount": 0,
>             "logCount": 0,
>             "currentFileLogCount": 0,
>             "generatorCount": 0,
>             "limitReached": false,
>             "startedAt": "2023-05-15 21:23:43.388597",
>             "endedAt": "2023-05-15 21:23:43.388597",
>             "duration": 60
>         }
>     }
> 
> * * *

* * *

### sites

PATH _`/organizations/{organizationId}/secureConnect/sites`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List sites in this organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/sites`  
> 
>     {
>         "data": [
>             {
>                 "id": "123",
>                 "type": "MerakiSpoke",
>                 "name": "London Office",
>                 "region": "US East",
>                 "deviceType": "MX95-HW",
>                 "address": "123 Main St",
>                 "enrolled": true,
>                 "vpnType": "Hub"
>             }
>         ],
>         "meta": {
>             "total": 1
>         }
>     }
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
> 
>   
> \- New endpoint
> 
> #### Detach given sites from Secure Connect
> 
> **DELETE** `/organizations/{organizationId}/secureConnect/sites`  
> 
>     {
>         "action": "detach",
>         "status": "success",
>         "message": "Site enrolled successfully",
>         "request": {
>             "siteId": "1520758"
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

\[ sm \]
--------

### apple

PATH _`/organizations/{organizationId}/sm/apple/cloudEnrollment/syncJobs`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a sync job for an ADE account
> 
> **POST** `/organizations/{organizationId}/sm/apple/cloudEnrollment/syncJobs`  
> 
>     {
>         "syncJobId": "1284392014819",
>         "adeAccountId": "1284392014819",
>         "status": "pending"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/sm/apple/cloudEnrollment/syncJobs/{syncJobId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Retrieve the status of an ADE sync job
> 
> **GET** `/organizations/{organizationId}/sm/apple/cloudEnrollment/syncJobs/{syncJobId}`  
> 
>     {
>         "syncJobId": "1284392014819",
>         "adeAccountId": "1284392014819",
>         "status": "pending"
>     }
> 
> * * *

* * *

### bulkEnrollment

PATH _`/organizations/{organizationId}/sm/bulkEnrollment/token`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a PccBulkEnrollmentToken
> 
> **POST** `/organizations/{organizationId}/sm/bulkEnrollment/token`  
> 
>     {
>         "id": "1284392014819",
>         "networkId": "N_24329156",
>         "expiresAt": "2023-10-15T00:00:00Z",
>         "rawToken": "MMbCbpHZtG3TKUCr9B9uc5"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/sm/bulkEnrollment/token/{tokenId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a BulkEnrollmentToken
> 
> **GET** `/organizations/{organizationId}/sm/bulkEnrollment/token/{tokenId}`  
> 
>     {
>         "id": "1284392014819",
>         "networkId": "N_24329156",
>         "expiresAt": "2023-10-15T00:00:00Z"
>     }
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
>     {
>         "id": "1284392014819",
>         "networkId": "N_24329156",
>         "expiresAt": "2023-10-15T00:00:00Z"
>     }
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

PATH _`/organizations/{organizationId}/sm/bulkEnrollment/tokens`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BulkEnrollmentTokens for an organization.
> 
> **GET** `/organizations/{organizationId}/sm/bulkEnrollment/tokens`  
> 
>     [
>         {
>             "id": "1284392014819",
>             "networkId": "N_24329156",
>             "expiresAt": "2023-10-15T00:00:00Z"
>         }
>     ]
> 
> * * *

* * *