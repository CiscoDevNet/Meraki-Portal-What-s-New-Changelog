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
      - [Rollback a Firmware Upgrade For A Network](#rollback-a-firmware-upgrade-for-a-network)
  * [\[ organizations \]](#-organizations-)
    + [summary](#summary)
      - [Return the top 10 appliances sorted by utilization over given time range.](#return-the-top-10-appliances-sorted-by-utilization-over-given-time-range)
      - [Return metrics for organization's top 10 clients by data usage (in mb) over given time range.](#return-metrics-for-organizations-top-10-clients-by-data-usage-in-mb-over-given-time-range)
      - [Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.](#return-metrics-for-organizations-top-clients-by-data-usage-in-mb-over-given-time-range-grouped-by-manufacturer)
      - [Return metrics for organization's top 10 devices sorted by data usage over given time range](#return-metrics-for-organizations-top-10-devices-sorted-by-data-usage-over-given-time-range)
      - [Return metrics for organization's top 10 device models sorted by data usage over given time range](#return-metrics-for-organizations-top-10-device-models-sorted-by-data-usage-over-given-time-range)
      - [List the client and status overview information for the networks in an organization](#list-the-client-and-status-overview-information-for-the-networks-in-an-organization)
      - [Return metrics for organization's top 10 ssids by data usage over given time range](#return-metrics-for-organizations-top-10-ssids-by-data-usage-over-given-time-range)
      - [Return metrics for organization's top 10 switches by energy usage over given time range](#return-metrics-for-organizations-top-10-switches-by-energy-usage-over-given-time-range)
    + [devices](#devices)
      - [List the availability history information for devices in an organization.](#list-the-availability-history-information-for-devices-in-an-organization)
      - [List the status of every Meraki device in the organization](#list-the-status-of-every-meraki-device-in-the-organization)
    + [clients](#clients)
      - [Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.](#return-data-usage-in-megabits-per-second-over-time-for-all-clients-in-the-given-organization-within-a-given-time-range)
  * [\[ insight \]](#-insight-)
    + [applications](#applications)
      - [Add an Insight tracked application](#add-an-insight-tracked-application)
      - [Add an Insight tracked application](#add-an-insight-tracked-application-1)
  * [\[ wireless \]](#-wireless-)
    + [rfProfiles](#rfprofiles)
      - [List RF profiles for this network](#list-rf-profiles-for-this-network)
      - [Return a RF profile](#return-a-rf-profile)
      - [Updates specified RF profile for this network](#updates-specified-rf-profile-for-this-network)
      - [Creates new RF profile for this network](#creates-new-rf-profile-for-this-network)
    + [settings](#settings-1)
      - [Return the wireless settings for a network](#return-the-wireless-settings-for-a-network)
      - [Update the wireless settings for a network](#update-the-wireless-settings-for-a-network)
    + [bluetooth](#bluetooth)
      - [Return the bluetooth settings for a wireless device](#return-the-bluetooth-settings-for-a-wireless-device)
      - [Return the Bluetooth settings for a network. Bluetooth settings must be enabled on the network.](#return-the-bluetooth-settings-for-a-network-bluetooth-settings-must-be-enabled-on-the-network)
      - [Update the bluetooth settings for a wireless device](#update-the-bluetooth-settings-for-a-wireless-device)
      - [Update the Bluetooth settings for a network](#update-the-bluetooth-settings-for-a-network)
  * [\[ switch \]](#-switch-)
    + [stacks](#stacks)
      - [List layer 3 interfaces for a switch stack](#list-layer-3-interfaces-for-a-switch-stack)
      - [Return a layer 3 interface from a switch stack](#return-a-layer-3-interface-from-a-switch-stack)
      - [Update a layer 3 interface for a switch stack](#update-a-layer-3-interface-for-a-switch-stack)
      - [Create a layer 3 interface for a switch stack](#create-a-layer-3-interface-for-a-switch-stack)
    + [ports](#ports-1)
      - [List the switchports in an organization by switch](#list-the-switchports-in-an-organization-by-switch)
    + [routing](#routing)
      - [List layer 3 interfaces for a switch](#list-layer-3-interfaces-for-a-switch)
      - [Return a layer 3 interface for a switch](#return-a-layer-3-interface-for-a-switch)
      - [List multicast rendezvous points](#list-multicast-rendezvous-points)
      - [Return a multicast rendezvous point](#return-a-multicast-rendezvous-point)
      - [Update a layer 3 interface for a switch](#update-a-layer-3-interface-for-a-switch)
      - [Update a multicast rendezvous point](#update-a-multicast-rendezvous-point)
      - [Create a layer 3 interface for a switch](#create-a-layer-3-interface-for-a-switch)
      - [Create a multicast rendezvous point](#create-a-multicast-rendezvous-point)
  * [\[ sensor \]](#-sensor-)
    + [commands](#commands)
      - [Sends a command to a sensor](#sends-a-command-to-a-sensor)
- [What's New](#whats-new)
  * [\[ appliance \]](#-appliance--1)
    + [sdwan](#sdwan)
      - [Get the SDWAN internet traffic preferences for an MX network](#get-the-sdwan-internet-traffic-preferences-for-an-mx-network)
    + [umbrella](#umbrella)
      - [Connect to Cisco Umbrella account to this network](#connect-to-cisco-umbrella-account-to-this-network)
      - [Disconnect Umbrella account from this network](#disconnect-umbrella-account-from-this-network)
      - [Disable umbrella protection for an MX network](#disable-umbrella-protection-for-an-mx-network)
      - [Enable umbrella protection for an MX network](#enable-umbrella-protection-for-an-mx-network)
      - [Specify one or more domain names to be excluded from being routed to Cisco Umbrella.](#specify-one-or-more-domain-names-to-be-excluded-from-being-routed-to-cisco-umbrella)
      - [Update umbrella policies applied to MX network.](#update-umbrella-policies-applied-to-mx-network)
    + [vlans](#vlans-1)
      - [List the VLANs for an Organization](#list-the-vlans-for-an-organization)
  * [\[ networks \]](#-networks--1)
    + [snmp](#snmp)
      - [Update the SNMP trap configuration for the specified network](#update-the-snmp-trap-configuration-for-the-specified-network)
    + [locationScanning](#locationscanning)
      - [Return scanning API settings](#return-scanning-api-settings)
      - [Change scanning API settings](#change-scanning-api-settings)
      - [Return list of scanning API receivers](#return-list-of-scanning-api-receivers)
      - [Set the list of scanning API receivers. Old receivers will be removed](#set-the-list-of-scanning-api-receivers-old-receivers-will-be-removed)
    + [devices](#devices-1)
      - [Updates the syslog servers configuration for a network.](#updates-the-syslog-servers-configuration-for-a-network)
  * [\[ organizations \]](#-organizations--1)
    + [snmp](#snmp-1)
      - [Retrieve the SNMP trap configuration for the networks in an organization](#retrieve-the-snmp-trap-configuration-for-the-networks-in-an-organization)
    + [scores](#scores)
      - [Get network health scores for a list of networks.](#get-network-health-scores-for-a-list-of-networks)
    + [workflows](#workflows)
      - [Return workflows filtered by organization ID, network ID, type, and category](#return-workflows-filtered-by-organization-id-network-id-type-and-category)
    + [auth](#auth)
      - [List the organization-wide RADIUS servers in the organization](#list-the-organization-wide-radius-servers-in-the-organization)
      - [Add an organization-wide RADIUS server](#add-an-organization-wide-radius-server)
      - [Return list of network and policies that organization-wide RADIUS servers are bing used](#return-list-of-network-and-policies-that-organization-wide-radius-servers-are-bing-used)
      - [Return an organization-wide RADIUS server](#return-an-organization-wide-radius-server)
      - [Update an organization-wide RADIUS server](#update-an-organization-wide-radius-server)
      - [Delete an organization-wide RADIUS server from a organization](#delete-an-organization-wide-radius-server-from-a-organization)
    + [certificates](#certificates)
      - [Gets all or specific certificates for an organization](#gets-all-or-specific-certificates-for-an-organization)
      - [Import certificate for this organization](#import-certificate-for-this-organization)
      - [Update a certificate's description for an organization](#update-a-certificates-description-for-an-organization)
      - [Delete a certificate for an organization](#delete-a-certificate-for-an-organization)
      - [Download the trusted certificate by certificate id.](#download-the-trusted-certificate-by-certificate-id)
    + [cloud](#cloud)
      - [List of source/destination traffic rules](#list-of-sourcedestination-traffic-rules)
    + [compute](#compute)
      - [List the Application Deployment agent configurations for all hosts under this organization. Only valid for networks with access to Meraki Insight.](#list-the-application-deployment-agent-configurations-for-all-hosts-under-this-organization-only-valid-for-networks-with-access-to-meraki-insight)
      - [Add Application Deployment agents for a list of hosts. Only valid for hosts with access to Meraki Insight.](#add-application-deployment-agents-for-a-list-of-hosts-only-valid-for-hosts-with-access-to-meraki-insight)
      - [Update a Deployment agent configuration. Only valid for hosts with access to Meraki Insight.](#update-a-deployment-agent-configuration-only-valid-for-hosts-with-access-to-meraki-insight)
      - [Delete a Application Deployment agent from the host. Only valid for host with access to Meraki Insight.](#delete-a-application-deployment-agent-from-the-host-only-valid-for-host-with-access-to-meraki-insight)
    + [extensions](#extensions)
      - [Update name and status of an Interconnect](#update-name-and-status-of-an-interconnect)
      - [List the ThousandEyes agent configurations under this organization. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#list-the-thousandeyes-agent-configurations-under-this-organization-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Add a ThousandEyes agent for this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#add-a-thousandeyes-agent-for-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [List all the networks eligible for ThousandEyes agent activation under this organization.](#list-all-the-networks-eligible-for-thousandeyes-agent-activation-under-this-organization)
      - [List the ThousandEyes agent configuration under this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#list-the-thousandeyes-agent-configuration-under-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Update a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#update-a-thousandeyes-agent-from-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Delete a ThousandEyes agent from this network. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#delete-a-thousandeyes-agent-from-this-network-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
      - [Create a ThousandEyes test based on a provided test template. Only valid for networks with access to Meraki Insight. Organization must have a ThousandEyes account connected to perform this action.](#create-a-thousandeyes-test-based-on-a-provided-test-template-only-valid-for-networks-with-access-to-meraki-insight-organization-must-have-a-thousandeyes-account-connected-to-perform-this-action)
    + [inventory](#inventory)
      - [Claim an order by the secure unique order claim number, the order claim id](#claim-an-order-by-the-secure-unique-order-claim-number-the-order-claim-id)
      - [Preview the results and status of an order claim by the secure order id](#preview-the-results-and-status-of-an-order-claim-by-the-secure-order-id)
    + [networks](#networks)
      - [Return a list of network move operations in the organization](#return-a-list-of-network-move-operations-in-the-organization)
      - [Move networks from one organization to another. Note that as this is an Early Access feature it may result in unexpected behavior and is best tested with non-critical networks. For more information and caveats around network move limitations see [Network Portability](https://documentation.meraki.com/General_Administration/Organizations_and_Networks/Network_Portability)](#move-networks-from-one-organization-to-another-note-that-as-this-is-an-early-access-feature-it-may-result-in-unexpected-behavior-and-is-best-tested-with-non-critical-networks-for-more-information-and-caveats-around-network-move-limitations-see-network-portabilityhttpsdocumentationmerakicomgeneral_administrationorganizations_and_networksnetwork_portability)
      - [Return details on the specified network move operation](#return-details-on-the-specified-network-move-operation)
    + [policy](#policy)
      - [List all layer 7 CASI categories and applications that can be used with Org Wide Policies](#list-all-layer-7-casi-categories-and-applications-that-can-be-used-with-org-wide-policies)
      - [List Organization-Wide Policy Firewall Profiles](#list-organization-wide-policy-firewall-profiles)
      - [Create an Organization-Wide Policy Firewall Profile](#create-an-organization-wide-policy-firewall-profile)
      - [Provision default Organization-Wide Policy Firewall Profiles](#provision-default-organization-wide-policy-firewall-profiles)
      - [Update an Organization-Wide Policy Firewall Profile](#update-an-organization-wide-policy-firewall-profile)
      - [Delete an Organization-Wide Policy Firewall Profile](#delete-an-organization-wide-policy-firewall-profile)
      - [Delete multiple Organization-Wide Policy Firewall Rules](#delete-multiple-organization-wide-policy-firewall-rules)
      - [Change Rules definition](#change-rules-definition)
      - [Get Organization-Wide Policy Firewall Rules Errors](#get-organization-wide-policy-firewall-rules-errors)
      - [List Organization-Wide Policy Firewall Rules](#list-organization-wide-policy-firewall-rules)
      - [Search for Organization-wide Firewall Rules by source and destination IPs](#search-for-organization-wide-firewall-rules-by-source-and-destination-ips)
      - [List Organization-Wide Policies](#list-organization-wide-policies)
      - [Change Policy definition](#change-policy-definition)
      - [Delete an Organization-Wide Policy](#delete-an-organization-wide-policy)
      - [List Organization-Wide Policy Vlans](#list-organization-wide-policy-vlans)
      - [List Organization-Wide Policy Zones](#list-organization-wide-policy-zones)
      - [Create an Organization-Wide Policy Zone](#create-an-organization-wide-policy-zone)
      - [Get Enforcement details](#get-enforcement-details)
      - [Update an Organization-Wide Policy Zone](#update-an-organization-wide-policy-zone)
      - [Delete an Organization-Wide Policy Zone](#delete-an-organization-wide-policy-zone)
      - [Assign VLANs to a given Zone](#assign-vlans-to-a-given-zone)
      - [Remove VLANs from a given Zone](#remove-vlans-from-a-given-zone)
    + [devices](#devices-2)
      - [Returns counts of online, offline, and recovered devices by product type, along with offline intervals for impacted devices in the organization.](#returns-counts-of-online-offline-and-recovered-devices-by-product-type-along-with-offline-intervals-for-impacted-devices-in-the-organization)
      - [Returns the history of device boots in reverse chronological order (most recent first). Currently supported for MS devices only.](#returns-the-history-of-device-boots-in-reverse-chronological-order-most-recent-first-currently-supported-for-ms-devices-only)
      - [Delete packet capture schedules](#delete-packet-capture-schedules)
      - [Enqueues a task for a specific packet capture. This endpoint has a sustained rate limit of one request every 60 seconds.](#enqueues-a-task-for-a-specific-packet-capture-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-60-seconds)
      - [Retrieves packet capture analysis result for a specific packet capture task.](#retrieves-packet-capture-analysis-result-for-a-specific-packet-capture-task)
      - [Returns syslog servers configured for the networks within an organization.](#returns-syslog-servers-configured-for-the-networks-within-an-organization)
      - [Returns roles that can be assigned to a syslog server for a given network.](#returns-roles-that-can-be-assigned-to-a-syslog-server-for-a-given-network)
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
      - [Destroy a webhook payload template for an organization. Does not work for included templates ('wpt\_00001', 'wpt\_00002', 'wpt\_00003', 'wpt\_00004', 'wpt\_00005', 'wpt\_00006', 'wpt\_00007' or 'wpt\_00008')](#destroy-a-webhook-payload-template-for-an-organization-does-not-work-for-included-templates-wpt_00001-wpt_00002-wpt_00003-wpt_00004-wpt_00005-wpt_00006-wpt_00007-or-wpt_00008)
      - [Send a test webhook for an organization](#send-a-test-webhook-for-an-organization)
      - [Return the status of a webhook test for an organization](#return-the-status-of-a-webhook-test-for-an-organization)
    + [productAnnouncements](#productannouncements)
      - [Gets relevant product announcements for a user](#gets-relevant-product-announcements-for-a-user)
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
  * [\[ licensing \]](#-licensing-)
    + [subscription](#subscription)
      - [Batch change networks to their desired feature tier for specified product types](#batch-change-networks-to-their-desired-feature-tier-for-specified-product-types)
  * [\[ wireless \]](#-wireless--1)
    + [opportunisticPcap](#opportunisticpcap)
      - [Update the Opportunistic Pcap settings for a wireless network](#update-the-opportunistic-pcap-settings-for-a-wireless-network)
      - [List the Opportunistic Pcap settings of an organization by network](#list-the-opportunistic-pcap-settings-of-an-organization-by-network)
      - [Check the Opportunistic Pcap license status of an organization by network](#check-the-opportunistic-pcap-license-status-of-an-organization-by-network)
    + [ssids](#ssids)
      - [Update the client exclusion status configuration for a given SSID](#update-the-client-exclusion-status-configuration-for-a-given-ssid)
      - [Set the static client exclusion list for the given SSID](#set-the-static-client-exclusion-list-for-the-given-ssid)
      - [Add a list of MAC addresses to the static client exclusion list for the given SSID](#add-a-list-of-mac-addresses-to-the-static-client-exclusion-list-for-the-given-ssid)
      - [Delete a list of MAC addresses from the static client exclusion list for the given SSID](#delete-a-list-of-mac-addresses-from-the-static-client-exclusion-list-for-the-given-ssid)
      - [Returns an array of objects, each containing client exclusion enablement statuses for one SSID](#returns-an-array-of-objects-each-containing-client-exclusion-enablement-statuses-for-one-ssid)
      - [Returns an array of objects, each containing a list of MAC's excluded from a given SSID](#returns-an-array-of-objects-each-containing-a-list-of-macs-excluded-from-a-given-ssid)
    + [certificates](#certificates-1)
      - [Query for details on the organization's OpenRoaming Certificate Authority certificate (CAs).](#query-for-details-on-the-organizations-openroaming-certificate-authority-certificate-cas)
    + [radio](#radio)
      - [Return the position for a wireless device](#return-the-position-for-a-wireless-device)
      - [Update the position attributes for this device](#update-the-position-attributes-for-this-device)
      - [Return the AFC power limits for a wireless device](#return-the-afc-power-limits-for-a-wireless-device)
      - [Show the status of this device's radios](#show-the-status-of-this-devices-radios)
      - [Update the AutoRF settings for a wireless network](#update-the-autorf-settings-for-a-wireless-network)
      - [Update the AutoRF settings for a wireless network](#update-the-autorf-settings-for-a-wireless-network-1)
      - [List the AFC power limits of an organization by device](#list-the-afc-power-limits-of-an-organization-by-device)
      - [List the AFC power limits of an organization by device](#list-the-afc-power-limits-of-an-organization-by-device-1)
      - [List the AutoRF settings of an organization by network](#list-the-autorf-settings-of-an-organization-by-network)
      - [List the channel planning activities of an organization](#list-the-channel-planning-activities-of-an-organization)
      - [List the AutoRF settings of an organization by network](#list-the-autorf-settings-of-an-organization-by-network-1)
      - [Show the status of this organization's radios, categorized by network and device](#show-the-status-of-this-organizations-radios-categorized-by-network-and-device)
    + [healthScores](#healthscores)
      - [Fetch the health scores for a given AP on this network](#fetch-the-health-scores-for-a-given-ap-on-this-network)
    + [devices](#devices-3)
      - [Fetch the health scores of all APs on this network](#fetch-the-health-scores-of-all-aps-on-this-network)
      - [List the most recent AP accelerometer status information for wireless devices that support it.](#list-the-most-recent-ap-accelerometer-status-information-for-wireless-devices-that-support-it)
      - [Get average uplink and downlink datarates for all clients in the organization](#get-average-uplink-and-downlink-datarates-for-all-clients-in-the-organization)
      - [Get latency summaries for all wireless devices in an organization.](#get-latency-summaries-for-all-wireless-devices-in-an-organization)
      - [Get latency summaries for all wireless devices in an organization.](#get-latency-summaries-for-all-wireless-devices-in-an-organization-1)
      - [Get per-network latency summaries for all wireless networks in an organization.](#get-per-network-latency-summaries-for-all-wireless-networks-in-an-organization)
      - [Enqueue a job to disconnect a client from an AP. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-disconnect-a-client-from-an-ap-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Get average signal quality for all clients in the organization](#get-average-signal-quality-for-all-clients-in-the-organization)
      - [Get average signal quality for all devices in the organization](#get-average-signal-quality-for-all-devices-in-the-organization)
      - [Get average signal quality for all networks in the organization](#get-average-signal-quality-for-all-networks-in-the-organization)
    + [clients](#clients-1)
      - [Fetch the health scores for all clients on this network](#fetch-the-health-scores-for-all-clients-on-this-network)
      - [Return counts of distinct wireless clients connecting to a network over time](#return-counts-of-distinct-wireless-clients-connecting-to-a-network-over-time)
      - [Fetch the health scores for a given client on this network. Clients are identified by their MAC or ID](#fetch-the-health-scores-for-a-given-client-on-this-network-clients-are-identified-by-their-mac-or-id)
  * [\[ camera \]](#-camera-)
    + [videoWalls](#videowalls)
      - [Create a new video wall.](#create-a-new-video-wall)
      - [Update the specified video wall.](#update-the-specified-video-wall)
      - [Delete the specified video wall.](#delete-the-specified-video-wall)
      - [Return a list of video walls.](#return-a-list-of-video-walls)
      - [Return the specified video wall.](#return-the-specified-video-wall)
      - [Returns video wall link to the specified video wall id. If a timestamp is supplied, it links to that timestamp.](#returns-video-wall-link-to-the-specified-video-wall-id-if-a-timestamp-is-supplied-it-links-to-that-timestamp)
    + [devices](#devices-4)
      - [Lists all the capabilities of cameras in this organization](#lists-all-the-capabilities-of-cameras-in-this-organization)
  * [\[ users \]](#-users-)
    + [iam](#iam)
      - [List specific authorizations for the list of Meraki end users.](#list-specific-authorizations-for-the-list-of-meraki-end-users)
      - [Authorize a Meraki end user for an auth zone.](#authorize-a-meraki-end-user-for-an-auth-zone)
      - [Update a Meraki end user's access to an auth zone.](#update-a-meraki-end-users-access-to-an-auth-zone)
      - [Revoke a Meraki end user's access to an auth zone.](#revoke-a-meraki-end-users-access-to-an-auth-zone)
      - [List all of the available auth zones for an organization.](#list-all-of-the-available-auth-zones-for-an-organization)
      - [Delete an authorization for a Meraki end user.](#delete-an-authorization-for-a-meraki-end-user)
      - [Create an identity provider for an organization. Only Entra ID(Azure AD) is supported at this time.](#create-an-identity-provider-for-an-organization-only-entra-idazure-ad-is-supported-at-this-time)
      - [Search all IdP groups for an organization. Filter by IdP IDs and Auth Zone. Parameters are assembled as an AND query.](#search-all-idp-groups-for-an-organization-filter-by-idp-ids-and-auth-zone-parameters-are-assembled-as-an-and-query)
      - [List all available IdP Product Integration urls for the organization](#list-all-available-idp-product-integration-urls-for-the-organization)
      - [Search all IdPs for an organization. Filter by IdP ID, IdP type, and Auth Zone. Parameters are assembled as an AND query.](#search-all-idps-for-an-organization-filter-by-idp-id-idp-type-and-auth-zone-parameters-are-assembled-as-an-and-query)
      - [Get the IdP sync status records for an organization. Only Entra ID(Azure AD) is supported at this time.](#get-the-idp-sync-status-records-for-an-organization-only-entra-idazure-ad-is-supported-at-this-time)
      - [Get the latest IdP sync status records for all IdPs in an organization. Only Entra ID(Azure AD) is supported at this time.](#get-the-latest-idp-sync-status-records-for-all-idps-in-an-organization-only-entra-idazure-ad-is-supported-at-this-time)
      - [Test connectivity to an Entra ID identity provider.](#test-connectivity-to-an-entra-id-identity-provider)
      - [Create a Meraki user](#create-a-meraki-user)
      - [Update a Meraki user](#update-a-meraki-user)
      - [Delete a Meraki end user](#delete-a-meraki-end-user)
      - [Trigger an IdP sync for an identity provider. Only Entra ID(Azure AD) is supported at this time.](#trigger-an-idp-sync-for-an-identity-provider-only-entra-idazure-ad-is-supported-at-this-time)
      - [Get the latest IdP sync status for an identity provider. Only Entra ID(Azure AD) is supported at this time.](#get-the-latest-idp-sync-status-for-an-identity-provider-only-entra-idazure-ad-is-supported-at-this-time)
      - [Update an identity provider. Only Entra ID(Azure AD) is supported at this time.](#update-an-identity-provider-only-entra-idazure-ad-is-supported-at-this-time)
      - [Delete a identity provider from an organization. Only Entra ID(Azure AD) is supported at this time.](#delete-a-identity-provider-from-an-organization-only-entra-idazure-ad-is-supported-at-this-time)
      - [List all auth zones for an identity provider](#list-all-auth-zones-for-an-identity-provider)
      - [List the end users and their associated identity providers for an organization.](#list-the-end-users-and-their-associated-identity-providers-for-an-organization)
      - [Get the count of users and user groups for an organization.](#get-the-count-of-users-and-user-groups-for-an-organization)
  * [\[ nac \]](#-nac-)
    + [authorization](#authorization)
      - [Get all nac authorization policies for this organization](#get-all-nac-authorization-policies-for-this-organization)
    + [license](#license)
      - [Returns license usage data for a specific organization](#returns-license-usage-data-for-a-specific-organization)
    + [sessions](#sessions)
      - [List the NAC Sessions for this organization](#list-the-nac-sessions-for-this-organization)
      - [Return the details of selected NAC Sessions](#return-the-details-of-selected-nac-sessions)
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
    + [privateResourceGroups](#privateresourcegroups)
      - [Provides a list of the private resource groups in an organization.](#provides-a-list-of-the-private-resource-groups-in-an-organization)
      - [Adds a new private resource group to an organization.](#adds-a-new-private-resource-group-to-an-organization)
      - [Updates a specific private resource group.](#updates-a-specific-private-resource-group)
      - [Deletes a specific private resource group.](#deletes-a-specific-private-resource-group)
    + [privateResources](#privateresources)
      - [Provides a list of private resources for an organization.](#provides-a-list-of-private-resources-for-an-organization)
      - [Adds a new private resource to the organization.](#adds-a-new-private-resource-to-the-organization)
      - [Updates a specific private resource.](#updates-a-specific-private-resource)
      - [Deletes a specific private resource. If this is the last resource in a resource group you must remove it from that resource group before deleting.](#deletes-a-specific-private-resource-if-this-is-the-last-resource-in-a-resource-group-you-must-remove-it-from-that-resource-group-before-deleting)
    + [publicApplications](#publicapplications)
      - [Provides a list of public applications for an Organization.](#provides-a-list-of-public-applications-for-an-organization)
    + [regions](#regions)
      - [List deployed cloud hubs and regions in this organization](#list-deployed-cloud-hubs-and-regions-in-this-organization)
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
  * [\[ switch \]](#-switch--1)
    + [raGuardPolicy](#raguardpolicy)
      - [Return RA Guard settings. Blocked servers are applied when default policy is allowed, and vice versa for allowed servers and blocked default policy.](#return-ra-guard-settings-blocked-servers-are-applied-when-default-policy-is-allowed-and-vice-versa-for-allowed-servers-and-blocked-default-policy)
      - [Update RA Guard settings](#update-ra-guard-settings)
    + [configTemplates](#configtemplates)
      - [list the port mirror configurations in an organization by switch profile](#list-the-port-mirror-configurations-in-an-organization-by-switch-profile)
      - [Update a port mirror](#update-a-port-mirror)
    + [devices](#devices-5)
      - [Return a historical record of packet transmission and loss, broken down by protocol, for insight into switch device health.](#return-a-historical-record-of-packet-transmission-and-loss-broken-down-by-protocol-for-insight-into-switch-device-health)
    + [stacks](#stacks-1)
      - [Update switch port mirrors for switch stacks](#update-switch-port-mirrors-for-switch-stacks)
      - [List the port mirror configurations in an organization by switch](#list-the-port-mirror-configurations-in-an-organization-by-switch)
    + [ports](#ports-2)
      - [Update a port mirror](#update-a-port-mirror-1)
      - [List the port profiles in a network](#list-the-port-profiles-in-a-network)
      - [Create a port profile in a network](#create-a-port-profile-in-a-network)
      - [Update a port profile in a network](#update-a-port-profile-in-a-network)
      - [Delete a port profile from a network](#delete-a-port-profile-from-a-network)
      - [list the port mirror configurations in an organization by switch](#list-the-port-mirror-configurations-in-an-organization-by-switch)
      - [List the port profiles in an organization](#list-the-port-profiles-in-an-organization)
      - [Create a port profile in an organization](#create-a-port-profile-in-an-organization)
      - [list the automation port profiles in an organization](#list-the-automation-port-profiles-in-an-organization)
      - [Create a port profile automation for an organization](#create-a-port-profile-automation-for-an-organization)
      - [Update a port profile automation in an organization](#update-a-port-profile-automation-in-an-organization)
      - [Delete an automation port profile from an organization](#delete-an-automation-port-profile-from-an-organization)
      - [Fetch all Network - Smart Port Profile associations for an organization](#fetch-all-network---smart-port-profile-associations-for-an-organization)
      - [Create Network and Smart Ports Profile association for a specific profile](#create-network-and-smart-ports-profile-association-for-a-specific-profile)
      - [Batch Create Network and Smart Ports Profile associations for a specific profile](#batch-create-network-and-smart-ports-profile-associations-for-a-specific-profile)
      - [Bulk delete Network and Smart Port Profile associations](#bulk-delete-network-and-smart-port-profile-associations)
      - [Delete Network and Smart Port profile association for a specific profile](#delete-network-and-smart-port-profile-association-for-a-specific-profile)
      - [List the port profiles in an organization](#list-the-port-profiles-in-an-organization-1)
      - [Get detailed information about a port profile](#get-detailed-information-about-a-port-profile)
      - [Update a port profile in an organization](#update-a-port-profile-in-an-organization)
      - [Delete a port profile from an organization](#delete-a-port-profile-from-an-organization)
      - [Return time-series digital optical monitoring (DOM) readings for ports on each DOM-enabled switch in an organization, in addition to thresholds for each relevant Small Form Factor Pluggable (SFP) module.](#return-time-series-digital-optical-monitoring-dom-readings-for-ports-on-each-dom-enabled-switch-in-an-organization-in-addition-to-thresholds-for-each-relevant-small-form-factor-pluggable-sfp-module)
    + [routing](#routing-1)
      - [List the autonomous systems configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-autonomous-systems-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create an autonomous system. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-an-autonomous-system-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the autonomous systems configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-overview-of-the-autonomous-systems-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Update an autonomous system. Border Gateway Protocol requires IOS XE 17.18 or higher](#update-an-autonomous-system-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Delete an autonomous system from an organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#delete-an-autonomous-system-from-an-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the filter lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-filter-lists-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create or update a filter list, in addition to its associated rules. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-or-update-a-filter-list-in-addition-to-its-associated-rules-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the filter lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-overview-of-the-filter-lists-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the filter list rules configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-filter-list-rules-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Delete a filter list. Border Gateway Protocol requires IOS XE 17.18 or higher](#delete-a-filter-list-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the prefix lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-prefix-lists-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create or update a prefix list, in addition to its associated rules. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-or-update-a-prefix-list-in-addition-to-its-associated-rules-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the prefix lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-overview-of-the-prefix-lists-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the prefix list rules configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-prefix-list-rules-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Delete a prefix list. Border Gateway Protocol requires IOS XE 17.18 or higher](#delete-a-prefix-list-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the BGP peer groups configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-bgp-peer-groups-configured-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List all BGP deployment information for multiple peer groups or address families configured in the given organization, including profile information, peer group address family information, neighbors, and listen ranges. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-all-bgp-deployment-information-for-multiple-peer-groups-or-address-families-configured-in-the-given-organization-including-profile-information-peer-group-address-family-information-neighbors-and-listen-ranges-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create or update a peer group, in addition to an associated peer group profile, peer group address family binding, peer group address family binding profile and routing policies associated with the peer group. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-or-update-a-peer-group-in-addition-to-an-associated-peer-group-profile-peer-group-address-family-binding-peer-group-address-family-binding-profile-and-routing-policies-associated-with-the-peer-group-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List all BGP deployment information for peer groups configured in the given organization, including peer group address family information, as well as routing policies. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-all-bgp-deployment-information-for-peer-groups-configured-in-the-given-organization-including-peer-group-address-family-information-as-well-as-routing-policies-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the BGP peer groups configured in the given organization](#list-the-overview-of-the-bgp-peer-groups-configured-in-the-given-organization)
      - [List the listen ranges configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-listen-ranges-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the neighbors configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-neighbors-configured-for-bgp-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create or update a neighor, in addition to an associated neighbor address family binding and routing policies associated with the neighbor. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-or-update-a-neighor-in-addition-to-an-associated-neighbor-address-family-binding-and-routing-policies-associated-with-the-neighbor-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List all BGP deployment information for neighbors configured in the given organization, including address family information, as well as routing policies. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-all-bgp-deployment-information-for-neighbors-configured-in-the-given-organization-including-address-family-information-as-well-as-routing-policies-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the routers configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-routers-configured-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create a BGP router, in addition to an associated address family, address family prefixes, and address family profile. This is helpful for the initial deployment of a BGP router.. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-a-bgp-router-in-addition-to-an-associated-address-family-address-family-prefixes-and-address-family-profile-this-is-helpful-for-the-initial-deployment-of-a-bgp-router-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List all BGP deployment information for routers configured in a given organization, including all address families. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-all-bgp-deployment-information-for-routers-configured-in-a-given-organization-including-all-address-families-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [List the overview of the routers configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#list-the-overview-of-the-routers-configured-in-the-given-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Create and update listen ranges, update peers' enabled flag, and delete peer groups for a BGP router. Border Gateway Protocol requires IOS XE 17.18 or higher](#create-and-update-listen-ranges-update-peers-enabled-flag-and-delete-peer-groups-for-a-bgp-router-border-gateway-protocol-requires-ios-xe-1718-or-higher)
      - [Delete a router from an organization. Border Gateway Protocol requires IOS XE 17.18 or higher](#delete-a-router-from-an-organization-border-gateway-protocol-requires-ios-xe-1718-or-higher)
  * [\[ support \]](#-support-)
    + [salesRepresentatives](#salesrepresentatives)
      - [Returns the organization's sales representatives](#returns-the-organizations-sales-representatives)
  * [\[ sensor \]](#-sensor--1)
    + [schedules](#schedules)
      - [Returns a list of all sensor schedules.](#returns-a-list-of-all-sensor-schedules)
    + [alerts](#alerts)
      - [Return a list of sensor alert events](#return-a-list-of-sensor-alert-events)
    + [readings](#readings)
      - [Return all reported readings from sensors in a given timespan, summarized as a series of intervals, sorted by interval start time in descending order](#return-all-reported-readings-from-sensors-in-a-given-timespan-summarized-as-a-series-of-intervals-sorted-by-interval-start-time-in-descending-order)
  * [\[ wirelessController \]](#-wirelesscontroller-)
    + [connections](#connections)
      - [List of unassigned Catalyst access points and summary information](#list-of-unassigned-catalyst-access-points-and-summary-information)
    + [regulatoryDomain](#regulatorydomain)
      - [Generate the regulatory domain package](#generate-the-regulatory-domain-package)
  * [\[ devices \]](#-devices-)
    + [vrrpTable](#vrrptable)
      - [Enqueue a job to perform a VRRP table request for the device. This endpoint currently supports Catalyst switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-vrrp-table-request-for-the-device-this-endpoint-currently-supports-catalyst-switches-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return an VRRP table live tool job.](#return-an-vrrp-table-live-tool-job)
    + [traceRoute](#traceroute)
      - [Enqueue a job to run trace route in the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-run-trace-route-in-the-device-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return a trace route job](#return-a-trace-route-job)
    + [speedTest](#speedtest)
      - [Enqueue a job to execute a speed test from a device](#enqueue-a-job-to-execute-a-speed-test-from-a-device)
      - [Returns a speed test result in megabits per second. If test is not complete, no results are present.](#returns-a-speed-test-result-in-megabits-per-second-if-test-is-not-complete-no-results-are-present)
    + [routingTable](#routingtable)
      - [Enqueue a job to perform a routing table request for the device. Only native Catalyst switches are supported. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-routing-table-request-for-the-device-only-native-catalyst-switches-are-supported-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return an routing table live tool job.](#return-an-routing-table-live-tool-job)
    + [reboot](#reboot)
      - [Enqueue a job to reboot a device. This endpoint has a rate limit of one request every 60 seconds.](#enqueue-a-job-to-reboot-a-device-this-endpoint-has-a-rate-limit-of-one-request-every-60-seconds)
      - [Return a reboot job](#return-a-reboot-job)
    + [ospfNeighbors](#ospfneighbors)
      - [Enqueue a job to perform a OSPF neighbors request for the device. This endpoint currently supports switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-ospf-neighbors-request-for-the-device-this-endpoint-currently-supports-switches-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return an OSPF neighbors live tool job.](#return-an-ospf-neighbors-live-tool-job)
    + [dhcpLeases](#dhcpleases)
      - [Enqueue a job to perform a DHCP leases request for the device. This endpoint currently supports all devices. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-dhcp-leases-request-for-the-device-this-endpoint-currently-supports-all-devices-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return a DHCP leases live tool job.](#return-a-dhcp-leases-live-tool-job)
    + [cyclePort](#cycleport)
      - [Enqueue a job to perform a cycle port for the device on the specified ports. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-a-cycle-port-for-the-device-on-the-specified-ports-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return a cycle port live tool job.](#return-a-cycle-port-live-tool-job)
    + [aclHitCount](#aclhitcount)
      - [Enqueue a job to perform an ACL hit count for the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.](#enqueue-a-job-to-perform-an-acl-hit-count-for-the-device-this-endpoint-has-a-sustained-rate-limit-of-one-request-every-five-seconds-per-device-with-an-allowed-burst-of-five-requests)
      - [Return an ACL hit count live tool job.](#return-an-acl-hit-count-live-tool-job)
    + [clients](#clients-2)
      - [Return a client disconnect job.](#return-a-client-disconnect-job)
 
Version **1.63.0** _to_ **1.63.0-beta.0**

* * *

**Summary of Changes**

**229 - New**

**179 - Updated**

**1143 - Total Endpoints**

**815 - Total Paths**

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

> \- Optional property `predownloadFirmware` Added

> \- Response property `upgradeStrategy` value added

> \- Response property `predownloadFirmware` value added

* * *

#### Update firmware upgrade information for a network

PUT _`/networks/{networkId}/firmwareUpgrades`_

> \- Optional property `upgradeStrategy` Added

> \- Optional property `predownloadFirmware` Added

> \- Optional property `upgradeStrategy` Added

> \- Optional property `predownloadFirmware` Added

* * *

#### Rollback a Firmware Upgrade For A Network

POST _`/networks/{networkId}/firmwareUpgrades/rollbacks`_

> \- Optional property `predownloadFirmware` Added

> \- Optional property `predownloadFirmware` Added

* * *

\[ organizations \]
-------------------

### summary

#### Return the top 10 appliances sorted by utilization over given time range.

GET _`/organizations/{organizationId}/summary/top/appliances/byUtilization`_

> \- Optional param `networkId` added

* * *

#### Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

GET _`/organizations/{organizationId}/summary/top/clients/byUsage`_

> \- Optional param `networkId` added

* * *

#### Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

GET _`/organizations/{organizationId}/summary/top/clients/manufacturers/byUsage`_

> \- Optional param `networkId` added

* * *

#### Return metrics for organization's top 10 devices sorted by data usage over given time range

GET _`/organizations/{organizationId}/summary/top/devices/byUsage`_

> \- Optional param `networkId` added

* * *

#### Return metrics for organization's top 10 device models sorted by data usage over given time range

GET _`/organizations/{organizationId}/summary/top/devices/models/byUsage`_

> \- Optional param `networkId` added

* * *

#### List the client and status overview information for the networks in an organization

GET _`/organizations/{organizationId}/summary/top/networks/byStatus`_

> \- Optional param `networkId` added

* * *

#### Return metrics for organization's top 10 ssids by data usage over given time range

GET _`/organizations/{organizationId}/summary/top/ssids/byUsage`_

> \- Optional param `networkId` added

* * *

#### Return metrics for organization's top 10 switches by energy usage over given time range

GET _`/organizations/{organizationId}/summary/top/switches/byEnergyUsage`_

> \- Optional param `networkId` added

* * *

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

### clients

#### Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

GET _`/organizations/{organizationId}/clients/bandwidthUsageHistory`_

> \- Optional param `networkId` added

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

\[ wireless \]
--------------

### rfProfiles

#### List RF profiles for this network

GET _`/networks/{networkId}/wireless/rfProfiles`_

> \- Optional property `afcEnabled` Added

> \- Response property `afcEnabled` value added

* * *

#### Return a RF profile

GET _`/networks/{networkId}/wireless/rfProfiles/{rfProfileId}`_

> \- Optional property `afcEnabled` Added

> \- Response property `afcEnabled` value added

* * *

#### Updates specified RF profile for this network

PUT _`/networks/{networkId}/wireless/rfProfiles/{rfProfileId}`_

> \- Optional property `afcEnabled` Added

> \- Optional property `afcEnabled` Added

* * *

#### Creates new RF profile for this network

POST _`/networks/{networkId}/wireless/rfProfiles`_

> \- Optional property `afcEnabled` Added

> \- Optional property `afcEnabled` Added

* * *

### settings

#### Return the wireless settings for a network

GET _`/networks/{networkId}/wireless/settings`_

> \- Optional property `predownloadFirmware` Added

> \- Response property `predownloadFirmware` value added

* * *

#### Update the wireless settings for a network

PUT _`/networks/{networkId}/wireless/settings`_

> \- Optional property `predownloadFirmware` Added

> \- Optional property `predownloadFirmware` Added

* * *

### bluetooth

#### Return the bluetooth settings for a wireless device

GET _`/devices/{serial}/wireless/bluetooth/settings`_

> \- Optional property `transmit` Added

> \- Response property `transmit` value added

* * *

#### Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth\_Low\_Energy\_(BLE)">Bluetooth settings</a> must be enabled on the network.

GET _`/networks/{networkId}/wireless/bluetooth/settings`_

> \- Optional property `transmit` Added

> \- Response property `transmit` value added

* * *

#### Update the bluetooth settings for a wireless device

PUT _`/devices/{serial}/wireless/bluetooth/settings`_

> \- Optional property `transmit` Added

> \- Optional property `transmit` Added

* * *

#### Update the Bluetooth settings for a network

PUT _`/networks/{networkId}/wireless/bluetooth/settings`_

> \- Optional property `transmit` Added

> \- Optional property `transmit` Added

* * *

\[ switch \]
------------

### stacks

#### List layer 3 interfaces for a switch stack

GET _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Response property `staticV6Dns1` value added

> \- Response property `staticV6Dns2` value added

> \- Response property `candidateUplink` value added

> \- Response property `candidateUplinkV4` value added

> \- Response property `staticV4Dns1` value added

> \- Response property `staticV4Dns2` value added

* * *

#### Return a layer 3 interface from a switch stack

GET _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Response property `staticV6Dns1` value added

> \- Response property `staticV6Dns2` value added

> \- Response property `candidateUplink` value added

> \- Response property `candidateUplinkV4` value added

> \- Response property `staticV4Dns1` value added

> \- Response property `staticV4Dns2` value added

* * *

#### Update a layer 3 interface for a switch stack

PUT _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}`_

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `uplinkV4` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `uplinkV6` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

* * *

#### Create a layer 3 interface for a switch stack

POST _`/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces`_

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `uplinkV4` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `uplinkV6` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

* * *

### ports

#### List the switchports in an organization by switch

GET _`/organizations/{organizationId}/switch/ports/bySwitch`_

> \- Optional param `extendedParams` added

* * *

### routing

#### List layer 3 interfaces for a switch

GET _`/devices/{serial}/switch/routing/interfaces`_

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Response property `staticV6Dns1` value added

> \- Response property `staticV6Dns2` value added

> \- Response property `candidateUplink` value added

> \- Response property `candidateUplinkV4` value added

> \- Response property `staticV4Dns1` value added

> \- Response property `staticV4Dns2` value added

* * *

#### Return a layer 3 interface for a switch

GET _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Response property `staticV6Dns1` value added

> \- Response property `staticV6Dns2` value added

> \- Response property `candidateUplink` value added

> \- Response property `candidateUplinkV4` value added

> \- Response property `staticV4Dns1` value added

> \- Response property `staticV4Dns2` value added

* * *

#### List multicast rendezvous points

GET _`/networks/{networkId}/switch/routing/multicast/rendezvousPoints`_

> \- Optional property `vrf` Added

> \- Response property `vrf` value added

* * *

#### Return a multicast rendezvous point

GET _`/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`_

> \- Optional property `vrf` Added

> \- Response property `vrf` value added

* * *

#### Update a layer 3 interface for a switch

PUT _`/devices/{serial}/switch/routing/interfaces/{interfaceId}`_

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `uplinkV4` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `uplinkV6` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

* * *

#### Update a multicast rendezvous point

PUT _`/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}`_

> \- Optional property `vrf` Added

* * *

#### Create a layer 3 interface for a switch

POST _`/devices/{serial}/switch/routing/interfaces`_

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `uplinkV4` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `uplinkV6` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

> \- Optional property `staticV6Dns1` Added

> \- Optional property `staticV6Dns2` Added

> \- Optional property `candidateUplink` Added

> \- Optional property `candidateUplinkV4` Added

> \- Optional property `staticV4Dns1` Added

> \- Optional property `staticV4Dns2` Added

* * *

#### Create a multicast rendezvous point

POST _`/networks/{networkId}/switch/routing/multicast/rendezvousPoints`_

> \- Optional property `vrf` Added

* * *

\[ sensor \]
------------

### commands

#### Sends a command to a sensor

POST _`/devices/{serial}/sensor/commands`_

> \- Optional property `arguments` Added

* * *

What's New
==========

\[ appliance \]
---------------

### sdwan

PATH _`/organizations/{organizationId}/appliance/sdwan/internetPolicies`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the SDWAN internet traffic preferences for an MX network
> 
> **GET** `/organizations/{organizationId}/appliance/sdwan/internetPolicies`  
> 
>     {
>         "wanTrafficUplinkPreferences": [
>             {
>                 "preferredUplink": "wan1",
>                 "failOverCriterion": "poorPerformance",
>                 "performanceClass": {
>                     "type": "custom",
>                     "builtinPerformanceClassName": "VoIP",
>                     "customPerformanceClassId": "123456"
>                 },
>                 "trafficFilters": [
>                     {
>                         "type": "custom",
>                         "value": {
>                             "protocol": "tcp",
>                             "source": {
>                                 "port": "1-1024",
>                                 "cidr": "192.168.1.0/24",
>                                 "vlan": 10,
>                                 "host": 254
>                             },
>                             "destination": {
>                                 "port": "any",
>                                 "cidr": "any",
>                                 "applications": [
>                                     {
>                                         "id": "meraki:layer7/application/3",
>                                         "name": "DNS",
>                                         "type": "major"
>                                     }
>                                 ]
>                             }
>                         }
>                     }
>                 ]
>             }
>         ]
>     }
> 
> * * *

* * *

### umbrella

PATH _`/networks/{networkId}/appliance/umbrella/account/connect`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Connect to Cisco Umbrella account to this network
> 
> **POST** `/networks/{networkId}/appliance/umbrella/account/connect`  
> 
>     {
>         "umbrellaOrganizationId": "8769012"
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/appliance/umbrella/account/disconnect`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Disconnect Umbrella account from this network
> 
> **DELETE** `/networks/{networkId}/appliance/umbrella/account/disconnect`  
> 
>     {
>         "success": true,
>         "message": "Successfully updated"
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/appliance/umbrella/disableProtection`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Disable umbrella protection for an MX network
> 
> **DELETE** `/networks/{networkId}/appliance/umbrella/disableProtection`  
> 
>     {
>         "success": true,
>         "message": "Successfully updated"
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/appliance/umbrella/enableProtection`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enable umbrella protection for an MX network
> 
> **POST** `/networks/{networkId}/appliance/umbrella/enableProtection`  
> 
>     {
>         "success": true,
>         "message": "Successfully updated"
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/appliance/umbrella/excludeDomains`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Specify one or more domain names to be excluded from being routed to Cisco Umbrella.
> 
> **PUT** `/networks/{networkId}/appliance/umbrella/excludeDomains`  
> 
>     {
>         "success": true,
>         "message": "Successfully updated"
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/appliance/umbrella/policies`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update umbrella policies applied to MX network.
> 
> **PUT** `/networks/{networkId}/appliance/umbrella/policies`  
> 
>     {
>         "success": true,
>         "message": "Successfully updated"
>     }
> 
> * * *

* * *

### vlans

PATH _`/organizations/{organizationId}/appliance/vlans`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the VLANs for an Organization
> 
> **GET** `/organizations/{organizationId}/appliance/vlans`  
> 
>     [
>         {
>             "id": "1234",
>             "interfaceId": "1284392014819",
>             "name": "My VLAN",
>             "subnet": "192.168.1.0/24",
>             "applianceIp": "192.168.1.2",
>             "groupPolicyId": "101",
>             "templateVlanType": "same",
>             "cidr": "192.168.1.0/24",
>             "mask": 28,
>             "dhcpRelayServerIps": [
>                 "192.168.1.0",
>                 "192.168.128.0"
>             ],
>             "dhcpHandling": "Run a DHCP server",
>             "dhcpLeaseTime": "1 day",
>             "dhcpBootOptionsEnabled": false,
>             "dhcpBootNextServer": "1.2.3.4",
>             "dhcpBootFilename": "sample.file",
>             "fixedIpAssignments": {
>                 "00:11:22:33:44:55": {
>                     "ip": "1.2.3.4",
>                     "name": "My favorite IP"
>                 }
>             },
>             "reservedIpRanges": [
>                 {
>                     "start": "192.168.1.0",
>                     "end": "192.168.1.1",
>                     "comment": "A reserved IP range"
>                 }
>             ],
>             "dnsNameservers": "google_dns",
>             "dhcpOptions": [
>                 {
>                     "code": "5",
>                     "type": "text",
>                     "value": "five"
>                 }
>             ],
>             "vpnNatSubnet": "192.168.1.0/24",
>             "mandatoryDhcp": {
>                 "enabled": true
>             },
>             "ipv6": {
>                 "enabled": true,
>                 "prefixAssignments": [
>                     {
>                         "autonomous": false,
>                         "staticPrefix": "2001:db8:3c4d:15::/64",
>                         "staticApplianceIp6": "2001:db8:3c4d:15::1",
>                         "origin": {
>                             "type": "internet",
>                             "interfaces": [
>                                 "wan0"
>                             ]
>                         }
>                     }
>                 ]
>             }
>         }
>     ]
> 
> * * *

* * *

\[ networks \]
--------------

### snmp

PATH _`/networks/{networkId}/snmp/traps`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the SNMP trap configuration for the specified network
> 
> **PUT** `/networks/{networkId}/snmp/traps`  
> 
>     {
>         "network": {
>             "id": "N_12345678",
>             "name": "networkName"
>         },
>         "mode": "v3",
>         "receiver": {
>             "address": "1.1.1.1",
>             "port": "1234"
>         },
>         "v2": {
>             "community": "public"
>         },
>         "v3": {
>             "users": [
>                 {
>                     "name": "merakian"
>                 }
>             ]
>         }
>     }
> 
> * * *

* * *

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

### devices

PATH _`/networks/{networkId}/devices/syslog/servers`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Updates the syslog servers configuration for a network.
> 
> **PUT** `/networks/{networkId}/devices/syslog/servers`  
> 
>     {
>         "network": {
>             "id": "N_123456789012345678"
>         },
>         "servers": [
>             {
>                 "host": "1.2.3.4",
>                 "port": "443",
>                 "roles": [
>                     "Wireless event log",
>                     "Appliance URLs"
>                 ],
>                 "transportProtocol": "UDP",
>                 "encryption": {
>                     "enabled": true,
>                     "certificate": {
>                         "id": "1637"
>                     }
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

\[ organizations \]
-------------------

### snmp

PATH _`/organizations/{organizationId}/snmp/traps/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Retrieve the SNMP trap configuration for the networks in an organization
> 
> **GET** `/organizations/{organizationId}/snmp/traps/byNetwork`  
> 
>     [
>         {
>             "network": {
>                 "id": "N_12345678",
>                 "name": "networkName"
>             },
>             "mode": "v3",
>             "receiver": {
>                 "address": "1.1.1.1",
>                 "port": "1234"
>             },
>             "v2": {
>                 "community": "public"
>             },
>             "v3": {
>                 "users": [
>                     {
>                         "name": "merakian"
>                     }
>                 ]
>             }
>         }
>     ]
> 
> * * *

* * *

### scores

PATH _`/organizations/{organizationId}/assurance/scores`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get network health scores for a list of networks.
> 
> **GET** `/organizations/{organizationId}/assurance/scores`  
> 
>     [
>         {
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             },
>             "trend": 2,
>             "score": 90,
>             "byInterval": [
>                 {
>                     "ts": 1526087474,
>                     "score": 90,
>                     "byCategory": [
>                         {
>                             "name": "clients",
>                             "score": 90
>                         }
>                     ]
>                 }
>             ],
>             "byCategory": [
>                 {
>                     "name": "clients",
>                     "score": 90,
>                     "trend": 2,
>                     "bySubcategory": [
>                         {
>                             "name": "wireless",
>                             "score": 90,
>                             "trend": 2,
>                             "weight": {
>                                 "count": 10,
>                                 "percentage": 0.9,
>                                 "description": "wireless onboarding attempts"
>                             }
>                         }
>                     ]
>                 }
>             ]
>         }
>     ]
> 
> * * *

* * *

### workflows

PATH _`/organizations/{organizationId}/assurance/workflows`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return workflows filtered by organization ID, network ID, type, and category
> 
> **GET** `/organizations/{organizationId}/assurance/workflows`  
> 
>     [
>         {
>             "id": "workflow1",
>             "organizationId": "org1",
>             "network": {
>                 "id": "L_123456",
>                 "name": "Network 1"
>             },
>             "scopeId": "scope123",
>             "type": "type1",
>             "categoryType": "category1",
>             "scopeType": "scope1",
>             "workflowState": "active",
>             "timestamp": "2025-04-14T12:00:00Z",
>             "networkTags": [
>                 "tag1",
>                 "tag2"
>             ],
>             "clientTags": [
>                 "clientTag1",
>                 "clientTag2"
>             ],
>             "nodeTags": [
>                 "nodeTag1",
>                 "nodeTag2"
>             ],
>             "resolvedAt": "2018-02-11T00:00:00.090210Z"
>         }
>     ]
> 
> * * *

* * *

### auth

PATH _`/organizations/{organizationId}/auth/radius/servers`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the organization-wide RADIUS servers in the organization
> 
> **GET** `/organizations/{organizationId}/auth/radius/servers`  
> 
>     [
>         {
>             "serverId": "42",
>             "name": "HQ RADIUS server",
>             "address": "1.2.3.4",
>             "modes": [
>                 {
>                     "mode": "auth",
>                     "port": 1812
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
> #### Add an organization-wide RADIUS server
> 
> **POST** `/organizations/{organizationId}/auth/radius/servers`  
> 
>     {
>         "serverId": "42",
>         "name": "HQ RADIUS server",
>         "address": "1.2.3.4",
>         "modes": [
>             {
>                 "mode": "auth",
>                 "port": 1812
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/auth/radius/servers/assignments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return list of network and policies that organization-wide RADIUS servers are bing used
> 
> **GET** `/organizations/{organizationId}/auth/radius/servers/assignments`  
> 
>     {
>         "serverId": "42",
>         "name": "HQ RADIUS server",
>         "assignments": [
>             {
>                 "network": {
>                     "id": "L_1234",
>                     "eid": "L_1234",
>                     "tag": "San-Francisco",
>                     "name": "San Francisco Office",
>                     "dashboardUrl": "https://n1.meraki.dev.ikram.io/tag/n/1234/manage/nodes/list"
>                 },
>                 "assignee": {
>                     "type": "Access policy",
>                     "id": "42",
>                     "name": "Access policy #42",
>                     "dashboardUrl": "https://n1.meraki.dev.ikram.io/tag/n/1234/manage/configure/switch_access"
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/auth/radius/servers/{serverId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an organization-wide RADIUS server
> 
> **GET** `/organizations/{organizationId}/auth/radius/servers/{serverId}`  
> 
>     {
>         "serverId": "42",
>         "name": "HQ RADIUS server",
>         "address": "1.2.3.4",
>         "modes": [
>             {
>                 "mode": "auth",
>                 "port": 1812
>             }
>         ]
>     }
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
>     {
>         "serverId": "42",
>         "name": "HQ RADIUS server",
>         "address": "1.2.3.4",
>         "modes": [
>             {
>                 "mode": "auth",
>                 "port": 1812
>             }
>         ]
>     }
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
>             "signatureAlgorithmId": "SHA256withRSA",
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
>             "signatureAlgorithmId": "SHA256withRSA",
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
>             "signatureAlgorithmId": "SHA256withRSA",
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

### compute

PATH _`/organizations/{organizationId}/compute/application/deployments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the Application Deployment agent configurations for all hosts under this organization. Only valid for networks with access to Meraki Insight.
> 
> **GET** `/organizations/{organizationId}/compute/application/deployments`  
> 
>     [
>         {
>             "items": [
>                 {
>                     "deploymentId": "dep_12345",
>                     "enabled": true,
>                     "status": "active",
>                     "hostId": "Q3AN-YESN-7784",
>                     "type": "node",
>                     "name": "Main Switch",
>                     "network": {
>                         "id": "N_24329156"
>                     },
>                     "application": {
>                         "developer": {
>                             "name": "ThousandEyes"
>                         },
>                         "name": "Enterprise Agent"
>                     }
>                 }
>             ],
>             "meta": {
>                 "counts": {
>                     "items": {
>                         "total": 1,
>                         "remaining": 0
>                     }
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/compute/application/deployments/bulkCreate`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Add Application Deployment agents for a list of hosts. Only valid for hosts with access to Meraki Insight.
> 
> **POST** `/organizations/{organizationId}/compute/application/deployments/bulkCreate`  
> 
>     {
>         "items": [
>             {
>                 "deploymentId": "dep_12345",
>                 "enabled": true,
>                 "status": "active",
>                 "hostId": "Q3AN-YESN-7784",
>                 "type": "node",
>                 "name": "Main Switch",
>                 "network": {
>                     "id": "N_24329156"
>                 },
>                 "application": {
>                     "developer": {
>                         "name": "ThousandEyes"
>                     },
>                     "name": "Enterprise Agent"
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

PATH _`/organizations/{organizationId}/compute/application/deployments/{deploymentId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a Deployment agent configuration. Only valid for hosts with access to Meraki Insight.
> 
> **PUT** `/organizations/{organizationId}/compute/application/deployments/{deploymentId}`  
> 
>     {
>         "items": [
>             {
>                 "deploymentId": "dep_12345",
>                 "enabled": true,
>                 "status": "active",
>                 "hostId": "Q3AN-YESN-7784",
>                 "type": "node",
>                 "name": "Main Switch",
>                 "network": {
>                     "id": "N_24329156"
>                 },
>                 "application": {
>                     "developer": {
>                         "name": "ThousandEyes"
>                     },
>                     "name": "Enterprise Agent"
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
> 
>   
> \- New endpoint
> 
> #### Delete a Application Deployment agent from the host. Only valid for host with access to Meraki Insight.
> 
> **DELETE** `/organizations/{organizationId}/compute/application/deployments/{deploymentId}`  
> 
> * * *

* * *

### extensions

PATH _`/organizations/{organizationId}/extensions/sdwanmanager/interconnects/{interconnectId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update name and status of an Interconnect
> 
> **PUT** `/organizations/{organizationId}/extensions/sdwanmanager/interconnects/{interconnectId}`  
> 
>     {
>         "id": "12345",
>         "name": "My Interconnect",
>         "status": "active",
>         "type": "Catalyst SD-WAN",
>         "vpnCount": 1,
>         "tunnelCount": 4,
>         "asNum": 12345,
>         "networkId": "N_12345",
>         "wiredId": "123456",
>         "networkLocaleId": "L_12345",
>         "createdAt": "2024-02-11T00:00:00Z",
>         "internalSubnets": [
>             "169.254.250.0/30",
>             "169.254.250.4/30"
>         ]
>     }
> 
> * * *

* * *

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

### inventory

PATH _`/organizations/{organizationId}/inventory/orders/claim`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Claim an order by the secure unique order claim number, the order claim id
> 
> **POST** `/organizations/{organizationId}/inventory/orders/claim`  
> 
>     {
>         "claimId": "ABCDEFG12345",
>         "number": "97001888",
>         "serials": [
>             "1234-ABCD-4567"
>         ],
>         "subscriptions": [
>             {
>                 "subscriptionId": "1234",
>                 "name": "My UNX Subscription",
>                 "description": "Wireless Networking Subscription",
>                 "startDate": "2020-06-30T00:00:00Z",
>                 "endDate": "2025-06-30T00:00:00Z",
>                 "isClaimed": false,
>                 "counts": {
>                     "seats": {
>                         "limit": 1
>                     }
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/inventory/orders/preview`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Preview the results and status of an order claim by the secure order id
> 
> **POST** `/organizations/{organizationId}/inventory/orders/preview`  
> 
>     {
>         "claimId": "ABCD1EFGH4IJ",
>         "number": "97001888",
>         "shipping": {
>             "shipments": [
>                 {
>                     "shippedAt": "2024-06-30T00:00:00Z",
>                     "number": 1,
>                     "devices": [
>                         {
>                             "quantity": 5,
>                             "sku": "MR70-HW",
>                             "description": "Meraki MR70 Cloud Managed AP"
>                         }
>                     ]
>                 }
>             ],
>             "pending": {
>                 "devices": [
>                     {
>                         "quantity": 1,
>                         "sku": "MR70-HW",
>                         "description": "Meraki MX90 Cloud Managed Security Appliance"
>                     }
>                 ]
>             }
>         },
>         "subscriptions": [
>             {
>                 "subscriptionId": "1234",
>                 "name": "My UNX Subscription",
>                 "description": "Wireless Networking Subscription",
>                 "startDate": "2020-06-30T00:00:00Z",
>                 "endDate": "2025-06-30T00:00:00Z",
>                 "isClaimed": false,
>                 "counts": {
>                     "seats": {
>                         "limit": 1
>                     }
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

### networks

PATH _`/organizations/{organizationId}/networks/moves`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a list of network move operations in the organization
> 
> **GET** `/organizations/{organizationId}/networks/moves`  
> 
>     {
>         "initiator": {
>             "admin": {
>                 "id": "8590064780"
>             }
>         },
>         "organizations": {
>             "source": {
>                 "id": "146307"
>             },
>             "target": {
>                 "id": "146308"
>             }
>         },
>         "network": {
>             "id": "N_569142402909112097"
>         },
>         "createdAt": "1970-01-20T15:57:36.000Z",
>         "lastUpdatedAt": "1970-01-20T15:57:36.000Z",
>         "status": "failed"
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Move networks from one organization to another. Note that as this is an Early Access feature it may result in unexpected behavior and is best tested with non-critical networks. For more information and caveats around network move limitations see [Network Portability](https://documentation.meraki.com/General_Administration/Organizations_and_Networks/Network_Portability)
> 
> **POST** `/organizations/{organizationId}/networks/moves`  
> 
>     {
>         "networkMoveId": "456",
>         "url": "/api/v1/organizations/123/networks/moves?networkMoveId=456"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/networks/moves/{networkMoveId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return details on the specified network move operation
> 
> **GET** `/organizations/{organizationId}/networks/moves/{networkMoveId}`  
> 
>     {
>         "initiator": {
>             "admin": {
>                 "id": "8590064780"
>             }
>         },
>         "organizations": {
>             "source": {
>                 "id": "146307"
>             },
>             "target": {
>                 "id": "146308"
>             }
>         },
>         "network": {
>             "id": "N_569142402909112097"
>         },
>         "createdAt": "1970-01-20T15:57:36.000Z",
>         "lastUpdatedAt": "1970-01-20T15:57:36.000Z",
>         "status": "failed"
>     }
> 
> * * *

* * *

### policy

PATH _`/organizations/{organizationId}/policy/groupPolicy/applicationCategories/v2`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all layer 7 CASI categories and applications that can be used with Org Wide Policies
> 
> **GET** `/organizations/{organizationId}/policy/groupPolicy/applicationCategories/v2`  
> 
>     {
>         "categories": [
>             {
>                 "casiId": "6",
>                 "name": "Cloud Storage",
>                 "apps": [
>                     {
>                         "casiId": "11",
>                         "name": "4shared",
>                         "enforcements": [
>                             "meraki",
>                             "secureAccess"
>                         ]
>                     }
>                 ]
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/firewall/profiles`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policy Firewall Profiles
> 
> **GET** `/organizations/{organizationId}/policy/groupPolicy/firewall/profiles`  
> 
>     {
>         "items": [
>             {
>                 "id": "123",
>                 "name": "Block Social Media",
>                 "iname": "block-social-media",
>                 "description": "Block all Social Media",
>                 "reserved": false,
>                 "deleted": false,
>                 "createdAt": "2021-01-01T00:00:00Z",
>                 "updatedAt": "2021-01-01T00:00:00Z"
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "total": 12,
>                 "remaining": 2
>             }
>         }
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create an Organization-Wide Policy Firewall Profile
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/firewall/profiles`  
> 
>     {
>         "id": "123",
>         "name": "Block Social Media",
>         "iname": "block-social-media",
>         "description": "Block all Social Media",
>         "reserved": false,
>         "deleted": false,
>         "createdAt": "2021-01-01T00:00:00Z",
>         "updatedAt": "2021-01-01T00:00:00Z"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/firewall/profiles/provisionDefaults`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Provision default Organization-Wide Policy Firewall Profiles
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/firewall/profiles/provisionDefaults`  
> 
>     {}
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/firewall/profiles/{profileId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an Organization-Wide Policy Firewall Profile
> 
> **PUT** `/organizations/{organizationId}/policy/groupPolicy/firewall/profiles/{profileId}`  
> 
>     {
>         "id": "123",
>         "name": "Block Social Media",
>         "iname": "block-social-media",
>         "description": "Block all Social Media",
>         "reserved": false,
>         "deleted": false,
>         "createdAt": "2021-01-01T00:00:00Z",
>         "updatedAt": "2021-01-01T00:00:00Z"
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an Organization-Wide Policy Firewall Profile
> 
> **DELETE** `/organizations/{organizationId}/policy/groupPolicy/firewall/profiles/{profileId}`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/firewall/rules`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete multiple Organization-Wide Policy Firewall Rules
> 
> **DELETE** `/organizations/{organizationId}/policy/groupPolicy/firewall/rules`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/firewall/rules/change`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Change Rules definition
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/firewall/rules/change`  
> 
>     {
>         "id": "123",
>         "name": "Rule 1",
>         "iname": "rule-1",
>         "action": "deny",
>         "enabled": true,
>         "logging": {
>             "enabled": false
>         },
>         "tier": "deny-layer3",
>         "description": "Rule 1",
>         "deleted": false,
>         "profileId": "1",
>         "createdAt": "2021-01-01T00:00:00Z",
>         "updatedAt": "2021-01-01T00:00:00Z",
>         "status": "active",
>         "sources": [
>             {
>                 "matchCriteria": [
>                     "ipRanges",
>                     "ports",
>                     "vlanIds",
>                     "policyObjectIds",
>                     "policyObjectGroupIds",
>                     "scopeIds",
>                     "any"
>                 ],
>                 "criteria": {
>                     "vlanIds": [
>                         "1",
>                         "2",
>                         "3"
>                     ],
>                     "ipRanges": [
>                         "1.1.1.0/24"
>                     ],
>                     "cloudFirewallUserGroups": [
>                         "1",
>                         "2"
>                     ],
>                     "policyObjectIds": [
>                         "1",
>                         "2"
>                     ],
>                     "policyObjectGroupIds": [
>                         "1",
>                         "2"
>                     ],
>                     "ports": [
>                         "8080",
>                         "10000-10010"
>                     ]
>                 }
>             }
>         ],
>         "destinations": [
>             {
>                 "matchCriteria": [
>                     "ipRanges",
>                     "services",
>                     "vlanIds",
>                     "policyObjectIds",
>                     "policyObjectGroupIds",
>                     "casiApplicationIds",
>                     "casiCategoryIds",
>                     "saPrivateResourceIds",
>                     "saPrivateResourceTypes",
>                     "saApplicationProtocolIds",
>                     "saDestinationListIds",
>                     "scopeIds",
>                     "any"
>                 ],
>                 "criteria": {
>                     "vlanIds": [
>                         "1",
>                         "2",
>                         "3"
>                     ],
>                     "ipRanges": [
>                         "1.1.1.0/24"
>                     ],
>                     "policyObjectIds": [
>                         "1",
>                         "2"
>                     ],
>                     "policyObjectGroupIds": [
>                         "1",
>                         "2"
>                     ],
>                     "ports": [
>                         "8080",
>                         "10000-10010"
>                     ],
>                     "casiApplicationIds": [
>                         "1",
>                         "11"
>                     ],
>                     "casiCategoryIds": [
>                         "40",
>                         "6"
>                     ],
>                     "service": [
>                         {
>                             "protocol": "tcp",
>                             "ports": [
>                                 "8080",
>                                 "10000-10010"
>                             ]
>                         }
>                     ]
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/firewall/rules/errors`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get Organization-Wide Policy Firewall Rules Errors
> 
> **GET** `/organizations/{organizationId}/policy/groupPolicy/firewall/rules/errors`  
> 
>     {
>         "items": {
>             "1": {
>                 "error": "Sync error",
>                 "failedAt": "2021-01-01T00:00:00Z"
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/firewall/rules/filter`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policy Firewall Rules
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/firewall/rules/filter`  
> 
>     {
>         "items": [
>             {
>                 "id": "123",
>                 "name": "Rule 1",
>                 "iname": "rule-1",
>                 "action": "deny",
>                 "enabled": true,
>                 "logging": {
>                     "enabled": false
>                 },
>                 "tier": "deny-layer3",
>                 "description": "Rule 1",
>                 "deleted": false,
>                 "profileId": "1",
>                 "createdAt": "2021-01-01T00:00:00Z",
>                 "updatedAt": "2021-01-01T00:00:00Z",
>                 "status": "active",
>                 "sources": [
>                     {
>                         "matchCriteria": [
>                             "ipRanges",
>                             "ports",
>                             "vlanIds",
>                             "policyObjectIds",
>                             "policyObjectGroupIds",
>                             "scopeIds",
>                             "any"
>                         ],
>                         "criteria": {
>                             "vlanIds": [
>                                 "1",
>                                 "2",
>                                 "3"
>                             ],
>                             "ipRanges": [
>                                 "1.1.1.0/24"
>                             ],
>                             "cloudFirewallUserGroups": [
>                                 "1",
>                                 "2"
>                             ],
>                             "policyObjectIds": [
>                                 "1",
>                                 "2"
>                             ],
>                             "policyObjectGroupIds": [
>                                 "1",
>                                 "2"
>                             ],
>                             "ports": [
>                                 "8080",
>                                 "10000-10010"
>                             ]
>                         }
>                     }
>                 ],
>                 "destinations": [
>                     {
>                         "matchCriteria": [
>                             "ipRanges",
>                             "services",
>                             "vlanIds",
>                             "policyObjectIds",
>                             "policyObjectGroupIds",
>                             "casiApplicationIds",
>                             "casiCategoryIds",
>                             "saPrivateResourceIds",
>                             "saPrivateResourceTypes",
>                             "saApplicationProtocolIds",
>                             "saDestinationListIds",
>                             "scopeIds",
>                             "any"
>                         ],
>                         "criteria": {
>                             "vlanIds": [
>                                 "1",
>                                 "2",
>                                 "3"
>                             ],
>                             "ipRanges": [
>                                 "1.1.1.0/24"
>                             ],
>                             "policyObjectIds": [
>                                 "1",
>                                 "2"
>                             ],
>                             "policyObjectGroupIds": [
>                                 "1",
>                                 "2"
>                             ],
>                             "ports": [
>                                 "8080",
>                                 "10000-10010"
>                             ],
>                             "casiApplicationIds": [
>                                 "1",
>                                 "11"
>                             ],
>                             "casiCategoryIds": [
>                                 "40",
>                                 "6"
>                             ],
>                             "service": [
>                                 {
>                                     "protocol": "tcp",
>                                     "ports": [
>                                         "8080",
>                                         "10000-10010"
>                                     ]
>                                 }
>                             ]
>                         }
>                     }
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "total": 12,
>                 "remaining": 2
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/firewall/rules/searchRulesExactMatch`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Search for Organization-wide Firewall Rules by source and destination IPs
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/firewall/rules/searchRulesExactMatch`  
> 
>     {
>         "items": "Hello, World!"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/policies`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policies
> 
> **GET** `/organizations/{organizationId}/policy/groupPolicy/policies`  
> 
>     {
>         "items": [
>             {
>                 "id": "123",
>                 "name": "All Vlan Policy",
>                 "iname": "all-vlan-policy",
>                 "description": "Policy that applies to all VLANs",
>                 "zone": {
>                     "id": "123",
>                     "name": "Block Social Media",
>                     "iname": "block-social-media",
>                     "kind": "block-social-media",
>                     "createdAt": "2021-01-01T00:00:00Z",
>                     "updatedAt": "2021-01-01T00:00:00Z"
>                 },
>                 "profiles": [
>                     {
>                         "id": "123",
>                         "name": "Block Social Media",
>                         "iname": "block-social-media",
>                         "description": "Block all Social Media",
>                         "reserved": false,
>                         "deleted": false,
>                         "createdAt": "2021-01-01T00:00:00Z",
>                         "updatedAt": "2021-01-01T00:00:00Z"
>                     }
>                 ],
>                 "status": "active",
>                 "deleted": false,
>                 "createdAt": "2021-01-01T00:00:00Z",
>                 "updatedAt": "2021-01-01T00:00:00Z"
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "total": 12,
>                 "remaining": 2
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/policies/change`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Change Policy definition
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/policies/change`  
> 
>     {
>         "id": "123",
>         "name": "All Vlan Policy",
>         "iname": "all-vlan-policy",
>         "description": "Policy that applies to all VLANs",
>         "zone": {
>             "id": "123",
>             "name": "Block Social Media",
>             "iname": "block-social-media",
>             "kind": "block-social-media",
>             "createdAt": "2021-01-01T00:00:00Z",
>             "updatedAt": "2021-01-01T00:00:00Z"
>         },
>         "profiles": [
>             {
>                 "id": "123",
>                 "name": "Block Social Media",
>                 "iname": "block-social-media",
>                 "description": "Block all Social Media",
>                 "reserved": false,
>                 "deleted": false,
>                 "createdAt": "2021-01-01T00:00:00Z",
>                 "updatedAt": "2021-01-01T00:00:00Z"
>             }
>         ],
>         "status": "active",
>         "deleted": false,
>         "createdAt": "2021-01-01T00:00:00Z",
>         "updatedAt": "2021-01-01T00:00:00Z"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/policies/{policyId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Delete an Organization-Wide Policy
> 
> **DELETE** `/organizations/{organizationId}/policy/groupPolicy/policies/{policyId}`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/vlans`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policy Vlans
> 
> **GET** `/organizations/{organizationId}/policy/groupPolicy/vlans`  
> 
>     {
>         "items": [
>             {
>                 "id": "123",
>                 "name": "Vlan 10",
>                 "subnet": "10.0.0.0/24",
>                 "vlanId": "1",
>                 "networkName": "Home network",
>                 "zoneIds": [
>                     "1",
>                     "2",
>                     "3"
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "total": 12,
>                 "remaining": 2
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/zones`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List Organization-Wide Policy Zones
> 
> **GET** `/organizations/{organizationId}/policy/groupPolicy/zones`  
> 
>     {
>         "items": [
>             {
>                 "id": "123",
>                 "name": "Block Social Media",
>                 "iname": "block-social-media",
>                 "kind": "block-social-media",
>                 "createdAt": "2021-01-01T00:00:00Z",
>                 "updatedAt": "2021-01-01T00:00:00Z"
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "total": 12,
>                 "remaining": 2
>             }
>         }
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Create an Organization-Wide Policy Zone
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/zones`  
> 
>     {
>         "id": "123",
>         "name": "Block Social Media",
>         "iname": "block-social-media",
>         "kind": "block-social-media",
>         "createdAt": "2021-01-01T00:00:00Z",
>         "updatedAt": "2021-01-01T00:00:00Z"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/zones/details`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get Enforcement details
> 
> **GET** `/organizations/{organizationId}/policy/groupPolicy/zones/details`  
> 
>     {
>         "items": {
>             "1": {
>                 "policy": {
>                     "id": "123",
>                     "name": "Policy 123"
>                 },
>                 "enforcements": {
>                     "vlansOverview": [
>                         {
>                             "id": "123",
>                             "name": "Vlan 123"
>                         }
>                     ],
>                     "vlansCount": 3,
>                     "adaptivePolicyGroups": [
>                         "7"
>                     ]
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/zones/{zoneId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an Organization-Wide Policy Zone
> 
> **PUT** `/organizations/{organizationId}/policy/groupPolicy/zones/{zoneId}`  
> 
>     {
>         "id": "123",
>         "name": "Block Social Media",
>         "iname": "block-social-media",
>         "kind": "block-social-media",
>         "createdAt": "2021-01-01T00:00:00Z",
>         "updatedAt": "2021-01-01T00:00:00Z"
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Delete an Organization-Wide Policy Zone
> 
> **DELETE** `/organizations/{organizationId}/policy/groupPolicy/zones/{zoneId}`  
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/zones/{zoneId}/vlans/assign`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Assign VLANs to a given Zone
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/zones/{zoneId}/vlans/assign`  
> 
>     {
>         "message": "VLANs assigned successfully"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/policy/groupPolicy/zones/{zoneId}/vlans/remove`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Remove VLANs from a given Zone
> 
> **POST** `/organizations/{organizationId}/policy/groupPolicy/zones/{zoneId}/vlans/remove`  
> 
>     {
>         "message": "VLANs removed successfully"
>     }
> 
> * * *

* * *

### devices

PATH _`/organizations/{organizationId}/assurance/devices/statuses/overview`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns counts of online, offline, and recovered devices by product type, along with offline intervals for impacted devices in the organization.
> 
> **GET** `/organizations/{organizationId}/assurance/devices/statuses/overview`  
> 
>     {
>         "byProductType": [
>             {
>                 "productType": "wireless",
>                 "online": 10,
>                 "offline": 5,
>                 "recovered": 3
>             }
>         ],
>         "byImpactedDevice": [
>             {
>                 "network": {
>                     "name": "Office HQ",
>                     "id": "L_123"
>                 },
>                 "device": {
>                     "name": "Lobby AP",
>                     "serial": "QXXX-YYYY-ZZZ0",
>                     "mac": "aa:bb:cc:dd:ee:ff",
>                     "productType": "wireless"
>                 },
>                 "offlineIntervals": [
>                     {
>                         "startTs": "2025-03-20T20:24:42.285237Z",
>                         "endTs": "2025-03-20T21:30:55.691996Z"
>                     }
>                 ]
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/devices/boots/history`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns the history of device boots in reverse chronological order (most recent first). Currently supported for MS devices only.
> 
> **GET** `/organizations/{organizationId}/devices/boots/history`  
> 
>     [
>         {
>             "serial": "Q234-ABCD-5678",
>             "network": {
>                 "id": "N_24329156"
>             },
>             "start": {
>                 "bootedAt": "2018-02-11T00:00:00.090210Z"
>             }
>         }
>     ]
> 
> * * *

* * *

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

PATH _`/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueues a task for a specific packet capture. This endpoint has a sustained rate limit of one request every 60 seconds.
> 
> **POST** `/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks`  
> 
>     {
>         "task": "analysis",
>         "taskId": "123456",
>         "status": "pending"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Retrieves packet capture analysis result for a specific packet capture task.
> 
> **GET** `/organizations/{organizationId}/devices/packetCaptures/{packetId}/tasks/{id}`  
> 
>     {
>         "task": "analysis",
>         "status": "completed",
>         "summary": {
>             "counts": {
>                 "total": 1,
>                 "successes": 0,
>                 "failures": 1
>             },
>             "macs": [
>                 "00:11:22:33:44:55"
>             ],
>             "ips": [
>                 "1.2.3.4"
>             ],
>             "devices": [
>                 {
>                     "name": "My AP",
>                     "url": "https://n1.meraki.com//n//manage/nodes/new_list/000000000000"
>                 }
>             ]
>         },
>         "analyzers": {
>             "analyzer": {
>                 "present": true,
>                 "macs": [
>                     "00:11:22:33:44:55"
>                 ],
>                 "ips": [
>                     "1.2.3.4"
>                 ],
>                 "devices": [
>                     "My AP"
>                 ],
>                 "testCounts": {
>                     "total": 1,
>                     "successes": 0,
>                     "failures": 1
>                 },
>                 "testResults": [
>                     {
>                         "passed": [
>                             {
>                                 "name": "Test",
>                                 "status": false,
>                                 "details": []
>                             }
>                         ],
>                         "failed": [
>                             {
>                                 "name": "Test",
>                                 "status": false,
>                                 "details": [
>                                     {
>                                         "subCategory": "DHCP Request not seen",
>                                         "failureCount": 3,
>                                         "packets": [
>                                             5,
>                                             6,
>                                             7
>                                         ],
>                                         "detailMessage": "Failed",
>                                         "macs": [
>                                             "00:11:22:33:44:55"
>                                         ],
>                                         "ips": [
>                                             "1.2.3.4"
>                                         ],
>                                         "devices": [
>                                             "My AP"
>                                         ]
>                                     }
>                                 ]
>                             }
>                         ]
>                     }
>                 ]
>             }
>         },
>         "fileName": "sample.pcap",
>         "filePathUrl": "https://www.meraki.com"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/devices/syslog/servers/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns syslog servers configured for the networks within an organization.
> 
> **GET** `/organizations/{organizationId}/devices/syslog/servers/byNetwork`  
> 
>     {
>         "items": [
>             {
>                 "network": {
>                     "id": "N_123456789012345678"
>                 },
>                 "servers": [
>                     {
>                         "host": "1.2.3.4",
>                         "port": "443",
>                         "roles": [
>                             "Wireless event log",
>                             "Appliance URLs"
>                         ],
>                         "transportProtocol": "UDP",
>                         "encryption": {
>                             "enabled": true,
>                             "certificate": {
>                                 "id": "1637"
>                             }
>                         }
>                     }
>                 ]
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

PATH _`/organizations/{organizationId}/devices/syslog/servers/roles/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns roles that can be assigned to a syslog server for a given network.
> 
> **GET** `/organizations/{organizationId}/devices/syslog/servers/roles/byNetwork`  
> 
>     {
>         "items": [
>             {
>                 "network": {
>                     "id": "N_123456789012345678"
>                 },
>                 "availableRoles": [
>                     {
>                         "name": "Wireless Event Log",
>                         "value": "wireless_event_log"
>                     }
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 10,
>                     "remaining": 2
>                 }
>             }
>         }
>     }
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
> #### Destroy a webhook payload template for an organization. Does not work for included templates ('wpt\_00001', 'wpt\_00002', 'wpt\_00003', 'wpt\_00004', 'wpt\_00005', 'wpt\_00006', 'wpt\_00007' or 'wpt\_00008')
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

### productAnnouncements

PATH _`/organizations/{organizationId}/assurance/productAnnouncements`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Gets relevant product announcements for a user
> 
> **GET** `/organizations/{organizationId}/assurance/productAnnouncements`  
> 
>     {
>         "items": [
>             {
>                 "id": "123",
>                 "boardId": "new-features",
>                 "title": "Cisco Meraki India Region cloud now in GA",
>                 "url": "https://community.meraki.com/t5/Feature-Announcements/Cisco-Meraki-India-Region-cloud-now-in-GA/ba-p/259490",
>                 "snippet": "As part of our ongoing commitment to the cloud and helping customers meet their local data storage needs, we are excited to announce that Cisco Meraki India Region cloud is now released in GA (Genera...",
>                 "publishedAt": "2018-02-11T00:00:00.090210Z",
>                 "editedAt": "2018-02-11T00:00:00.090210Z",
>                 "labels": [
>                     {
>                         "id": "1",
>                         "name": "Features"
>                     }
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 1
>                 }
>             }
>         }
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
>                     "average": 247.279
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

\[ licensing \]
---------------

### subscription

PATH _`/administered/licensing/subscription/networks/featureTiers/batchUpdate`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Batch change networks to their desired feature tier for specified product types
> 
> **POST** `/administered/licensing/subscription/networks/featureTiers/batchUpdate`  
> 
>     {
>         "items": [
>             {
>                 "network": {
>                     "id": "N_1234",
>                     "productTypes": [
>                         {
>                             "productType": "wireless",
>                             "featureTier": "essentials"
>                         }
>                     ]
>                 }
>             }
>         ],
>         "errors": [
>             {
>                 "network": {
>                     "id": "N_1234",
>                     "productTypes": [
>                         {
>                             "productType": "wireless",
>                             "featureTier": "essentials",
>                             "error": "Insufficient entitlements"
>                         }
>                     ]
>                 },
>                 "error": "null"
>             }
>         ]
>     }
> 
> * * *

* * *

\[ wireless \]
--------------

### opportunisticPcap

PATH _`/networks/{networkId}/wireless/opportunisticPcap`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the Opportunistic Pcap settings for a wireless network
> 
> **PUT** `/networks/{networkId}/wireless/opportunisticPcap`  
> 
>     {
>         "network": {
>             "id": "123",
>             "name": "sample-node-group-name"
>         },
>         "networkId": "L_12345",
>         "name": "My Network",
>         "enablement": {
>             "networkWide": 0,
>             "serials": [
>                 "Q234-ABCD-5678"
>             ],
>             "tags": [
>                 "tag1",
>                 "tag2"
>             ]
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/opportunisticPcap/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the Opportunistic Pcap settings of an organization by network
> 
> **GET** `/organizations/{organizationId}/wireless/opportunisticPcap/byNetwork`  
> 
>     [
>         {
>             "network": {
>                 "id": "123",
>                 "name": "sample-node-group-name"
>             },
>             "networkId": "L_12345",
>             "name": "My Network",
>             "enablement": {
>                 "networkWide": 0,
>                 "serials": [
>                     "Q234-ABCD-5678"
>                 ],
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

PATH _`/organizations/{organizationId}/wireless/opportunisticPcap/license/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Check the Opportunistic Pcap license status of an organization by network
> 
> **GET** `/organizations/{organizationId}/wireless/opportunisticPcap/license/byNetwork`  
> 
>     [
>         {
>             "networkId": "L_12345",
>             "name": "My Network",
>             "licensed": true
>         }
>     ]
> 
> * * *

* * *

### ssids

PATH _`/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the client exclusion status configuration for a given SSID
> 
> **PUT** `/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion`  
> 
>     {
>         "ssid": {
>             "id": "12312333",
>             "number": 1,
>             "name": "My SSID"
>         },
>         "network": {
>             "id": "N_1234",
>             "name": "MR wireless 1"
>         },
>         "static": {
>             "enabled": true
>         }
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Set the static client exclusion list for the given SSID
> 
> **PUT** `/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions`  
> 
>     {
>         "ssid": {
>             "id": "12312333",
>             "number": 1,
>             "name": "My SSID"
>         },
>         "network": {
>             "id": "N_1234",
>             "name": "MR wireless 1"
>         },
>         "macs": [
>             "00:11:22:33:44:55",
>             "aa:bb:cc:dd:ee:ff"
>         ]
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions/bulkAdd`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Add a list of MAC addresses to the static client exclusion list for the given SSID
> 
> **POST** `/networks/{networkId}/wireless/ssids/{number}/policies/clientExclusion/static/exclusions/bulkAdd`  
> 
>     {
>         "ssid": {
>             "id": "12312333",
>             "number": 1,
>             "name": "My SSID"
>         },
>         "network": {
>             "id": "N_1234",
>             "name": "MR wireless 1"
>         },
>         "macs": [
>             "00:11:22:33:44:55",
>             "aa:bb:cc:dd:ee:ff"
>         ]
>     }
> 
> * * *

* * *

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

PATH _`/organizations/{organizationId}/wireless/ssids/policies/clientExclusion/bySsid`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns an array of objects, each containing client exclusion enablement statuses for one SSID
> 
> **GET** `/organizations/{organizationId}/wireless/ssids/policies/clientExclusion/bySsid`  
> 
>     {
>         "items": [
>             {
>                 "ssid": {
>                     "id": "12312333",
>                     "number": 1,
>                     "name": "My SSID"
>                 },
>                 "network": {
>                     "id": "N_1234",
>                     "name": "MR wireless 1"
>                 },
>                 "static": {
>                     "enabled": true
>                 }
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 105,
>                     "remaining": 25
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/ssids/policies/clientExclusion/static/exclusions/bySsid`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns an array of objects, each containing a list of MAC's excluded from a given SSID
> 
> **GET** `/organizations/{organizationId}/wireless/ssids/policies/clientExclusion/static/exclusions/bySsid`  
> 
>     {
>         "items": [
>             {
>                 "ssid": {
>                     "id": "12312333",
>                     "number": 1,
>                     "name": "My SSID"
>                 },
>                 "network": {
>                     "id": "N_1234",
>                     "name": "MR wireless 1"
>                 },
>                 "macs": [
>                     "00:11:22:33:44:55",
>                     "aa:bb:cc:dd:ee:ff"
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 105,
>                     "remaining": 25
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

### certificates

PATH _`/organizations/{organizationId}/wireless/certificates/openRoaming/certificateAuthority`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Query for details on the organization's OpenRoaming Certificate Authority certificate (CAs).
> 
> **GET** `/organizations/{organizationId}/wireless/certificates/openRoaming/certificateAuthority`  
> 
>     {
>         "status": "trusted",
>         "contents": "-----BEGIN CERTIFICATE-----\n\n        MIIDzDCCAragAwIBAgIUOd0ukLcjH43TfTHFG9qE0FtlMVgwCwYJKoZIhvcNAQEL\n\n        umkqeYeO30g1uYvDuWLXVA==\n\n        -----END CERTIFICATE-----\n"
>     }
> 
> * * *

* * *

### radio

PATH _`/devices/{serial}/wireless/radio/afc/position`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the position for a wireless device
> 
> **GET** `/devices/{serial}/wireless/radio/afc/position`  
> 
>     {
>         "name": "Some MR",
>         "network": {
>             "id": "N_24329156"
>         },
>         "serial": "Q234-ABCD-5678",
>         "elevation": {
>             "height": 10,
>             "uncertainty": 1
>         },
>         "gps": {
>             "antenna": {
>                 "cableLength": 10
>             }
>         }
>     }
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
>     {
>         "name": "Some MR",
>         "network": {
>             "id": "N_24329156"
>         },
>         "serial": "Q234-ABCD-5678",
>         "elevation": {
>             "height": 10,
>             "uncertainty": 1
>         },
>         "gps": {
>             "antenna": {
>                 "cableLength": 10
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/wireless/radio/afc/powerLimits`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the AFC power limits for a wireless device
> 
> **GET** `/devices/{serial}/wireless/radio/afc/powerLimits`  
> 
>     {
>         "name": "Device_name",
>         "network": {
>             "id": "N_12345"
>         },
>         "serial": "Q2KN-6CN7-EC4X",
>         "expiresAt": "2023-01-27T19:36:32Z",
>         "lastUpdatedAt": "2023-01-26T19:36:32Z",
>         "lastSuccessAt": "2023-01-26T19:36:32Z",
>         "byChannel": [
>             {
>                 "channel": 11,
>                 "channelWidth": 20,
>                 "limit": 30
>             }
>         ],
>         "status": "SUCCESS",
>         "location": {
>             "lat": 37.4180951010362,
>             "lng": -122.098531723022,
>             "uncertainty": 10,
>             "type": "GPS"
>         }
>     }
> 
> * * *

* * *

PATH _`/devices/{serial}/wireless/radio/status`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Show the status of this device's radios
> 
> **GET** `/devices/{serial}/wireless/radio/status`  
> 
>     [
>         {
>             "band": 6,
>             "channelSettings": {
>                 "channel": 2,
>                 "width": 80,
>                 "dfs": {
>                     "radarDetected": false
>                 }
>             },
>             "powerSettings": {
>                 "transmitPower": 18,
>                 "mode": "lpi"
>             },
>             "status": "Up"
>         }
>     ]
> 
> * * *

* * *

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
>         },
>         "fra": {
>             "enabled": false
>         },
>         "aiRrm": {
>             "enabled": true,
>             "enablementDate": "2025-09-01T08:01:26Z"
>         }
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/wireless/radio/rrm`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the AutoRF settings for a wireless network
> 
> **PUT** `/networks/{networkId}/wireless/radio/rrm`  
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
>         },
>         "fra": {
>             "enabled": false
>         },
>         "aiRrm": {
>             "enabled": true,
>             "enablementDate": "2025-09-01T08:01:26Z"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/radio/afc/position/byDevice`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the AFC power limits of an organization by device
> 
> **GET** `/organizations/{organizationId}/wireless/radio/afc/position/byDevice`  
> 
>     [
>         {
>             "name": "Some MR",
>             "network": {
>                 "id": "N_24329156"
>             },
>             "serial": "Q234-ABCD-5678",
>             "elevation": {
>                 "height": 10,
>                 "uncertainty": 1
>             },
>             "gps": {
>                 "antenna": {
>                     "cableLength": 10
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/radio/afc/powerLimits/byDevice`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the AFC power limits of an organization by device
> 
> **GET** `/organizations/{organizationId}/wireless/radio/afc/powerLimits/byDevice`  
> 
>     [
>         {
>             "name": "Device_name",
>             "network": {
>                 "id": "N_12345"
>             },
>             "serial": "Q2KN-6CN7-EC4X",
>             "expiresAt": "2023-01-27T19:36:32Z",
>             "lastUpdatedAt": "2023-01-26T19:36:32Z",
>             "lastSuccessAt": "2023-01-26T19:36:32Z",
>             "byChannel": [
>                 {
>                     "channel": 11,
>                     "channelWidth": 20,
>                     "limit": 30
>                 }
>             ],
>             "status": "SUCCESS",
>             "location": {
>                 "lat": 37.4180951010362,
>                 "lng": -122.098531723022,
>                 "uncertainty": 10,
>                 "type": "GPS"
>             }
>         }
>     ]
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
>             },
>             "fra": {
>                 "enabled": false
>             },
>             "aiRrm": {
>                 "enabled": true,
>                 "enablementDate": "2025-09-01T08:01:26Z"
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
>             "band": "5",
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

PATH _`/organizations/{organizationId}/wireless/radio/rrm/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the AutoRF settings of an organization by network
> 
> **GET** `/organizations/{organizationId}/wireless/radio/rrm/byNetwork`  
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
>             },
>             "fra": {
>                 "enabled": false
>             },
>             "aiRrm": {
>                 "enabled": true,
>                 "enablementDate": "2025-09-01T08:01:26Z"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/radio/status/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Show the status of this organization's radios, categorized by network and device
> 
> **GET** `/organizations/{organizationId}/wireless/radio/status/byNetwork`  
> 
>     [
>         {
>             "network": {
>                 "id": "N_1234",
>                 "name": "MyNetwork"
>             },
>             "data": {
>                 "byDevice": [
>                     {
>                         "serial": "ABC-123",
>                         "radios": [
>                             {
>                                 "band": 6,
>                                 "channelSettings": {
>                                     "channel": 2,
>                                     "width": 80,
>                                     "dfs": {
>                                         "radarDetected": false
>                                     }
>                                 },
>                                 "powerSettings": {
>                                     "transmitPower": 18,
>                                     "mode": "lpi"
>                                 },
>                                 "status": "Up"
>                             }
>                         ]
>                     }
>                 ]
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

PATH _`/organizations/{organizationId}/wireless/devices/accelerometer/statuses`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the most recent AP accelerometer status information for wireless devices that support it.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/accelerometer/statuses`  
> 
>     [
>         {
>             "serial": "Q234-ABCD-5678",
>             "name": "My appliance",
>             "network": {
>                 "id": "N_24329156"
>             },
>             "status": {
>                 "titleAngle": 0,
>                 "status": "Active",
>                 "errorReason": "No error"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/dataRate/byClient`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average uplink and downlink datarates for all clients in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/dataRate/byClient`  
> 
>     [
>         {
>             "ulDatarate": 10000,
>             "dlDatarate": 20000,
>             "client": {
>                 "id": "k74272e",
>                 "mac": "22:33:44:55:66:77"
>             },
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/latency/byClient`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get latency summaries for all wireless devices in an organization.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/latency/byClient`  
> 
>     [
>         {
>             "overall": {
>                 "frames": 1439,
>                 "average": 24.73
>             },
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             },
>             "device": {
>                 "name": "My AP",
>                 "serial": "Q234-ABCD-5678",
>                 "mac": "00:11:22:33:44:55"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/latency/byDevice`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get latency summaries for all wireless devices in an organization.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/latency/byDevice`  
> 
>     [
>         {
>             "overall": {
>                 "frames": 1439,
>                 "average": 24.73
>             },
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             },
>             "device": {
>                 "name": "My AP",
>                 "serial": "Q234-ABCD-5678",
>                 "mac": "00:11:22:33:44:55"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/latency/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get per-network latency summaries for all wireless networks in an organization.
> 
> **GET** `/organizations/{organizationId}/wireless/devices/latency/byNetwork`  
> 
>     [
>         {
>             "overall": {
>                 "frames": 1439,
>                 "average": 24.73
>             },
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/liveTools/clients/{clientId}/disconnect`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to disconnect a client from an AP. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/organizations/{organizationId}/wireless/devices/liveTools/clients/{clientId}/disconnect`  
> 
>     {
>         "id": "abcd-1234-efgh-5678",
>         "status": "queued",
>         "request": {
>             "mac": "00:11:22:33:44:55",
>             "serial": "ABCD-1234-ABCD"
>         },
>         "url": "/api/v1/devices/serial/liveTools/disconnect",
>         "callback": {
>             "id": "1284392014819",
>             "url": "https://webhook.site/28efa24e-f830-4d9f-a12b-fbb9e5035031",
>             "status": "new"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/signalQuality/byClient`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average signal quality for all clients in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/signalQuality/byClient`  
> 
>     [
>         {
>             "snr": 37,
>             "rssi": -58,
>             "client": {
>                 "id": "k74272e",
>                 "mac": "22:33:44:55:66:77"
>             },
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/signalQuality/byDevice`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average signal quality for all devices in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/signalQuality/byDevice`  
> 
>     [
>         {
>             "snr": 37,
>             "rssi": -58,
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/wireless/devices/signalQuality/byNetwork`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get average signal quality for all networks in the organization
> 
> **GET** `/organizations/{organizationId}/wireless/devices/signalQuality/byNetwork`  
> 
>     [
>         {
>             "snr": 37,
>             "rssi": -58,
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
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

\[ camera \]
------------

### videoWalls

PATH _`/networks/{networkId}/camera/videoWalls`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a new video wall.
> 
> **POST** `/networks/{networkId}/camera/videoWalls`  
> 
>     {
>         "id": "1284392014819",
>         "name": "Building-A",
>         "index": 0,
>         "tiles": [
>             {
>                 "id": "1284392014819",
>                 "serial": "Q234-ABCD-5678",
>                 "x": 1,
>                 "y": 1,
>                 "width": 2,
>                 "height": 1,
>                 "theta": 3.14,
>                 "phi": 1.2,
>                 "imagerId": 1
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/camera/videoWalls/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update the specified video wall.
> 
> **PUT** `/networks/{networkId}/camera/videoWalls/{id}`  
> 
>     {
>         "id": "1284392014819",
>         "name": "Building-A",
>         "index": 0,
>         "tiles": [
>             {
>                 "id": "1284392014819",
>                 "serial": "Q234-ABCD-5678",
>                 "x": 1,
>                 "y": 1,
>                 "width": 2,
>                 "height": 1,
>                 "theta": 3.14,
>                 "phi": 1.2,
>                 "imagerId": 1
>             }
>         ]
>     }
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

PATH _`/organizations/{organizationId}/camera/videoWalls`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a list of video walls.
> 
> **GET** `/organizations/{organizationId}/camera/videoWalls`  
> 
>     [
>         {
>             "id": "1284392014819",
>             "name": "Building-A",
>             "index": 0,
>             "tiles": [
>                 {
>                     "id": "1284392014819",
>                     "serial": "Q234-ABCD-5678",
>                     "x": 1,
>                     "y": 1,
>                     "width": 2,
>                     "height": 1,
>                     "theta": 3.14,
>                     "phi": 1.2,
>                     "imagerId": 1
>                 }
>             ]
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/camera/videoWalls/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the specified video wall.
> 
> **GET** `/organizations/{organizationId}/camera/videoWalls/{id}`  
> 
>     {
>         "id": "1284392014819",
>         "name": "Building-A",
>         "index": 0,
>         "tiles": [
>             {
>                 "id": "1284392014819",
>                 "serial": "Q234-ABCD-5678",
>                 "x": 1,
>                 "y": 1,
>                 "width": 2,
>                 "height": 1,
>                 "theta": 3.14,
>                 "phi": 1.2,
>                 "imagerId": 1
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/camera/videoWalls/{id}/videoLink`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns video wall link to the specified video wall id. If a timestamp is supplied, it links to that timestamp.
> 
> **GET** `/organizations/{organizationId}/camera/videoWalls/{id}/videoLink`  
> 
>     [
>         {
>             "url": "https://nxx.meraki.com/office-cameras/n/bs0a1k/manage/video/video_wall/75290?timestamp=1535732570077",
>             "visionUrl": "https://vision.meraki.com/n/6482158978508419/cameras/29048243992402?ts=1535732570077"
>         }
>     ]
> 
> * * *

* * *

### devices

PATH _`/organizations/{organizationId}/camera/devices/configurations`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Lists all the capabilities of cameras in this organization
> 
> **GET** `/organizations/{organizationId}/camera/devices/configurations`  
> 
>     [
>         {
>             "serial": "QWDE-OIJU-HIDB",
>             "network": {
>                 "id": "N_24329156",
>                 "name": "Main Office"
>             },
>             "model": "MV63-HW",
>             "category": "outdoor",
>             "audio": {
>                 "isConfigurable": true,
>                 "enabled": true
>             },
>             "lens": {
>                 "isFisheye": true,
>                 "zoom": {
>                     "isConfigurable": true,
>                     "maximum": 100,
>                     "minimum": 0,
>                     "value": 65
>                 },
>                 "aperture": {
>                     "isConfigurable": true,
>                     "maximum": 100,
>                     "minimum": 0,
>                     "value": 65
>                 },
>                 "focus": {
>                     "isConfigurable": true,
>                     "maximum": 100,
>                     "minimum": 0,
>                     "value": 65
>                 }
>             },
>             "hdr": {
>                 "isConfigurable": true,
>                 "enabled": true
>             },
>             "sensorCrop": {
>                 "isConfigurable": true,
>                 "cropX": 0,
>                 "cropY": 0,
>                 "cropW": 0,
>                 "cropH": 0
>             },
>             "searchModels": [
>                 {
>                     "name": "Body/Vehicle",
>                     "enabled": true
>                 }
>             ],
>             "cloudArchive": {
>                 "isConfigurable": true,
>                 "enabled": true,
>                 "retentionDays": 90
>             }
>         }
>     ]
> 
> * * *

* * *

\[ users \]
-----------

### iam

PATH _`/organizations/{organizationId}/iam/users/authorizations`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List specific authorizations for the list of Meraki end users.
> 
> **GET** `/organizations/{organizationId}/iam/users/authorizations`  
> 
>     {
>         "items": [
>             {
>                 "authorizationId": "1284392014819",
>                 "idpUserId": "1284392014819",
>                 "expiresAt": "2018-02-11T00:00:00Z",
>                 "startsAt": "2018-05-12T00:00:00Z",
>                 "selfRegistered": false,
>                 "status": "authorized",
>                 "authZone": {
>                     "id": "1284392014819",
>                     "name": "SFO"
>                 },
>                 "authorizer": {
>                     "name": "John Doe"
>                 },
>                 "createdAt": "2018-02-11T00:00:00Z",
>                 "lastUpdatedAt": "2018-05-12T00:00:00Z"
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 10,
>                     "remaining": 0
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
> #### Authorize a Meraki end user for an auth zone.
> 
> **POST** `/organizations/{organizationId}/iam/users/authorizations`  
> 
>     {
>         "authorizationId": "1284392014819",
>         "idpUserId": "1284392014819",
>         "expiresAt": "2018-02-11T00:00:00Z",
>         "startsAt": "2018-05-12T00:00:00Z",
>         "selfRegistered": false,
>         "status": "authorized",
>         "authZone": {
>             "id": "1284392014819",
>             "name": "SFO"
>         },
>         "authorizer": {
>             "name": "John Doe"
>         },
>         "createdAt": "2018-02-11T00:00:00Z",
>         "lastUpdatedAt": "2018-05-12T00:00:00Z"
>     }
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
>     {
>         "authorizationId": "1284392014819",
>         "idpUserId": "1284392014819",
>         "expiresAt": "2018-02-11T00:00:00Z",
>         "startsAt": "2018-05-12T00:00:00Z",
>         "selfRegistered": false,
>         "status": "authorized",
>         "authZone": {
>             "id": "1284392014819",
>             "name": "SFO"
>         },
>         "authorizer": {
>             "name": "John Doe"
>         },
>         "createdAt": "2018-02-11T00:00:00Z",
>         "lastUpdatedAt": "2018-05-12T00:00:00Z"
>     }
> 
> * * *

* * *

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

PATH _`/organizations/{organizationId}/iam/users/authorizations/zones`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all of the available auth zones for an organization.
> 
> **GET** `/organizations/{organizationId}/iam/users/authorizations/zones`  
> 
>     {
>         "items": [
>             {
>                 "zoneId": "1284392014819",
>                 "name": "Main Office",
>                 "type": "Client VPN"
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 10,
>                     "remaining": 0
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

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

PATH _`/organizations/{organizationId}/iam/users/idps`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create an identity provider for an organization. Only Entra ID(Azure AD) is supported at this time.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps`  
> 
>     {
>         "idpId": "1284392014819",
>         "name": "My Entra ID",
>         "description": "Some description",
>         "type": "Azure AD",
>         "syncable": true,
>         "syncType": "proactive",
>         "createdAt": "2018-02-11T00:00:00Z",
>         "lastUpdatedAt": "2018-05-12T00:00:00Z"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/groups/search`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Search all IdP groups for an organization. Filter by IdP IDs and Auth Zone. Parameters are assembled as an AND query.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/groups/search`  
> 
>     {
>         "items": [
>             {
>                 "groupId": "1284392014819",
>                 "idpId": "1284392014819",
>                 "name": "sample idp group",
>                 "externalId": "f5a28b7d-e41c-41a2-8b0f-244a4123c5d7",
>                 "metadata": {
>                     "someKey": "value"
>                 },
>                 "idp": {
>                     "id": "1284392014819",
>                     "name": "Azure AD IdP",
>                     "type": "Azure AD"
>                 }
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 10,
>                     "remaining": 0
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/productIntegrations`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all available IdP Product Integration urls for the organization
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/productIntegrations`  
> 
>     [
>         {
>             "productIntegrationId": "access_manager",
>             "name": "Access Manager",
>             "description": "Use this IdP in your policies to control access to your resources.",
>             "url": ""
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/search`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Search all IdPs for an organization. Filter by IdP ID, IdP type, and Auth Zone. Parameters are assembled as an AND query.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/search`  
> 
>     {
>         "items": [
>             {
>                 "idpId": "1284392014819",
>                 "name": "My Entra ID",
>                 "description": "Some description",
>                 "type": "Azure AD",
>                 "syncable": true,
>                 "syncType": "proactive",
>                 "createdAt": "2018-02-11T00:00:00Z",
>                 "lastUpdatedAt": "2018-05-12T00:00:00Z"
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 10,
>                     "remaining": 0
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/sync/history`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the IdP sync status records for an organization. Only Entra ID(Azure AD) is supported at this time.
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/sync/history`  
> 
>     {
>         "items": [
>             {
>                 "idpSyncId": "1284392014819",
>                 "idpId": "1284392014819",
>                 "status": "In Progress",
>                 "message": "sync was queued 10 minutes",
>                 "createdAt": "2018-02-11T00:00:00Z",
>                 "lastUpdatedAt": "2018-05-12T00:00:00Z"
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 10,
>                     "remaining": 0
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/sync/latest`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the latest IdP sync status records for all IdPs in an organization. Only Entra ID(Azure AD) is supported at this time.
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/sync/latest`  
> 
>     {
>         "items": [
>             {
>                 "idpSyncId": "1284392014819",
>                 "idpId": "1284392014819",
>                 "status": "In Progress",
>                 "message": "sync was queued 10 minutes",
>                 "syncedBy": "api",
>                 "createdAt": "2018-02-11T00:00:00Z",
>                 "lastUpdatedAt": "2018-05-12T00:00:00Z"
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/testConnectivity`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Test connectivity to an Entra ID identity provider.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/testConnectivity`  
> 
>     {
>         "result": "failure",
>         "errors": [
>             {
>                 "code": "AADSTS7000215",
>                 "message": "Invalid client secret provided."
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/users`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a Meraki user
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/users`  
> 
>     {
>         "idpUserId": "1284392014819",
>         "idp": {
>             "id": "1284392014819",
>             "name": "Azure AD IdP",
>             "type": "azure_ad"
>         },
>         "upn": "mdavis@meraki.com",
>         "displayName": "Miles Davis",
>         "externalId": "azure AD Id",
>         "accessTypes": [
>             "Wireless",
>             "Client VPN"
>         ],
>         "createdAt": "2018-02-11T00:00:00Z",
>         "lastUpdatedAt": "2018-05-12T00:00:00Z",
>         "groups": [
>             {
>                 "id": "1",
>                 "name": "Group name"
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/users/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a Meraki user
> 
> **PUT** `/organizations/{organizationId}/iam/users/idps/users/{id}`  
> 
>     {
>         "idpUserId": "1284392014819",
>         "idp": {
>             "id": "1284392014819",
>             "name": "Azure AD IdP",
>             "type": "azure_ad"
>         },
>         "upn": "mdavis@meraki.com",
>         "displayName": "Miles Davis",
>         "externalId": "azure AD Id",
>         "accessTypes": [
>             "Wireless",
>             "Client VPN"
>         ],
>         "createdAt": "2018-02-11T00:00:00Z",
>         "lastUpdatedAt": "2018-05-12T00:00:00Z",
>         "groups": [
>             {
>                 "id": "1",
>                 "name": "Group name"
>             }
>         ]
>     }
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

PATH _`/organizations/{organizationId}/iam/users/idps/{idpId}/sync`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Trigger an IdP sync for an identity provider. Only Entra ID(Azure AD) is supported at this time.
> 
> **POST** `/organizations/{organizationId}/iam/users/idps/{idpId}/sync`  
> 
>     {
>         "idpSyncId": "1284392014819",
>         "idpId": "1284392014819",
>         "status": "In Progress",
>         "message": "sync was queued 10 minutes",
>         "syncedBy": "api",
>         "createdAt": "2018-02-11T00:00:00Z",
>         "lastUpdatedAt": "2018-05-12T00:00:00Z"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/{idpId}/sync/latest`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the latest IdP sync status for an identity provider. Only Entra ID(Azure AD) is supported at this time.
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/{idpId}/sync/latest`  
> 
>     {
>         "idpSyncId": "1284392014819",
>         "status": "In Progress",
>         "message": "sync was queued 10 minutes",
>         "createdAt": "2018-02-11T00:00:00Z",
>         "lastUpdatedAt": "2018-05-12T00:00:00Z"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/idps/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an identity provider. Only Entra ID(Azure AD) is supported at this time.
> 
> **PUT** `/organizations/{organizationId}/iam/users/idps/{id}`  
> 
>     {
>         "idpId": "1284392014819",
>         "name": "My Entra ID",
>         "description": "Some description",
>         "type": "Azure AD",
>         "syncable": true,
>         "syncType": "proactive",
>         "createdAt": "2018-02-11T00:00:00Z",
>         "lastUpdatedAt": "2018-05-12T00:00:00Z"
>     }
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

PATH _`/organizations/{organizationId}/iam/users/idps/{id}/authZones`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all auth zones for an identity provider
> 
> **GET** `/organizations/{organizationId}/iam/users/idps/{id}/authZones`  
> 
>     {
>         "items": [
>             {
>                 "id": "1284392014819",
>                 "name": "Main Office",
>                 "type": "node_group"
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/search`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the end users and their associated identity providers for an organization.
> 
> **POST** `/organizations/{organizationId}/iam/users/search`  
> 
>     {
>         "items": [
>             {
>                 "userId": "1284392014819",
>                 "upn": "mdavis@meraki.com",
>                 "idpUsers": [
>                     {
>                         "id": "1284392014819",
>                         "idp": {
>                             "id": "1284392014819",
>                             "name": "Azure AD IdP",
>                             "type": "Azure AD"
>                         },
>                         "displayName": "Miles Davis",
>                         "email": "mdavis@meraki.com",
>                         "username": "mdavis",
>                         "externalId": "external-Id",
>                         "createdAt": "2018-02-11T00:00:00Z",
>                         "lastUpdatedAt": "2018-05-12T00:00:00Z",
>                         "groups": [
>                             {
>                                 "id": "1",
>                                 "name": "Group name"
>                             }
>                         ],
>                         "accessTypes": [
>                             "Wireless",
>                             "Client VPN"
>                         ]
>                     }
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 10,
>                     "remaining": 0
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/iam/users/summaryPanel`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get the count of users and user groups for an organization.
> 
> **GET** `/organizations/{organizationId}/iam/users/summaryPanel`  
> 
>     {
>         "userCount": 100,
>         "userGroupCount": 10
>     }
> 
> * * *

* * *

\[ nac \]
---------

### authorization

PATH _`/organizations/{organizationId}/nac/authorization/policies`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get all nac authorization policies for this organization
> 
> **GET** `/organizations/{organizationId}/nac/authorization/policies`  
> 
>     [
>         {
>             "policyId": "1",
>             "name": "auth_policy",
>             "enabled": true,
>             "rank": 5,
>             "version": "20",
>             "counts": {
>                 "hits": 10
>             },
>             "rules": [
>                 {
>                     "ruleId": "1",
>                     "name": "rule_name",
>                     "rank": 10,
>                     "enabled": true,
>                     "counts": {
>                         "hits": 20
>                     },
>                     "authorizationProfile": {
>                         "vlan": {
>                             "value": "123",
>                             "type": "Constant"
>                         },
>                         "adaptivePolicy": {
>                             "value": "Sample_Adaptive_Policy",
>                             "type": "Constant"
>                         },
>                         "voiceDomain": {
>                             "value": "true",
>                             "type": "Constant"
>                         },
>                         "groupPolicy": {
>                             "value": "Sample_Group_Policy",
>                             "type": "Constant"
>                         },
>                         "result": "PERMIT",
>                         "ipsk": {
>                             "value": "Moon@15",
>                             "type": "Moon@15"
>                         }
>                     }
>                 }
>             ],
>             "hasOutdatedCondition": false,
>             "conditionTags": [
>                 "Client certificates: Issuer - Common Name = spa.meraki.com",
>                 "Networks: Network Name = Dev Test Network"
>             ]
>         }
>     ]
> 
> * * *

* * *

### license

PATH _`/organizations/{organizationId}/nac/license/usage`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Returns license usage data for a specific organization
> 
> **GET** `/organizations/{organizationId}/nac/license/usage`  
> 
>     {
>         "organizationId": "1284392014819",
>         "type": "CoTerm",
>         "timeRange": {
>             "startDate": "2025-05-13",
>             "endDate": "2025-07-11"
>         },
>         "licenseLimit": 100,
>         "usageData": [
>             {
>                 "date": "2025-08-21",
>                 "peakConcurrentSessions": 100
>             }
>         ],
>         "summary": {
>             "daysInPeriod": 60,
>             "highestPeakConcurrentSessions": 145,
>             "p90PeakConcurrentSessions": 120.5,
>             "p95PeakConcurrentSessions": 135.2
>         }
>     }
> 
> * * *

* * *

### sessions

PATH _`/organizations/{organizationId}/nac/sessions/history`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the NAC Sessions for this organization
> 
> **GET** `/organizations/{organizationId}/nac/sessions/history`  
> 
>     {
>         "items": [
>             {
>                 "sessionId": "0677ba3c-a867-461d-97c9-e5b60066f2b3",
>                 "counts": {
>                     "events": {
>                         "total": 5
>                     }
>                 },
>                 "ts": "2023-02-01T11:36:25.480Z",
>                 "status": "Success",
>                 "details": "A policy for whose first matched rule will return its assigned authz profile",
>                 "user": {
>                     "id": "stress"
>                 },
>                 "client": {
>                     "id": "00-14-11-12-12-12:mab2"
>                 },
>                 "authentication": {
>                     "protocol": "MAB"
>                 },
>                 "ssid": {
>                     "name": ""
>                 },
>                 "device": {
>                     "id": "167231144861997",
>                     "serial": "Q3AC-J3V8-DWNP",
>                     "group": {
>                         "id": "167231144861998",
>                         "encryptedId": "OSYcyb2h",
>                         "localeName": "SJC-Test-Network"
>                     }
>                 }
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 4,
>                     "byResult": [
>                         {
>                             "result": "Authentication Failed",
>                             "total": 120
>                         }
>                     ]
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/nac/sessions/{sessionId}/details`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return the details of selected NAC Sessions
> 
> **GET** `/organizations/{organizationId}/nac/sessions/{sessionId}/details`  
> 
>     {
>         "sessionId": "e6b7d57b-1ddb-47f5-8d76-c06e10570297",
>         "hasCompleteEvent": true,
>         "ts": "2023-02-01T13:25:26.181Z",
>         "status": "Success",
>         "details": "",
>         "counts": {
>             "events": {
>                 "total": 5
>             }
>         },
>         "user": {
>             "id": "Device ID Username",
>             "idp": "Active Directory",
>             "groups": "ID group names"
>         },
>         "client": {
>             "id": "2c:3f:0b:00:14:00",
>             "addresses": [
>                 {
>                     "protocol": "ipv4",
>                     "address": "112.112.112.112"
>                 }
>             ],
>             "groups": "ID group names",
>             "deviceProfiling": "Macbook Pro",
>             "guid": "00-00-00-00-00-00"
>         },
>         "authentication": {
>             "latency": 500,
>             "method": "EAP-TLS",
>             "protocol": "EAP",
>             "policy": "Active Directory",
>             "endpointCertificate": {
>                 "title": "Endpoint Certificate Name",
>                 "issuer": "Issuer's Name",
>                 "isExpired": false,
>                 "status": "Trusted",
>                 "subjectName": {
>                     "commonName": "hosuk",
>                     "organizationalUnit": "Example Unit",
>                     "organization": "Company Name",
>                     "locality": "City",
>                     "state": "State",
>                     "country": "US"
>                 },
>                 "issuerName": {
>                     "commonName": "Certificate Services Endpoint Sub CA - ise",
>                     "serial": "58 BA BA 47 4F 4B 58 BA BA 47 4F 4B 74 72",
>                     "version": "3",
>                     "signatureAlgorithm": "XXX",
>                     "parameters": "None",
>                     "validity": {
>                         "start": "2023-01-01T13:25:26.181Z",
>                         "end": "2024-01-01T13:25:26.181Z"
>                     }
>                 },
>                 "publicKey": {
>                     "algorithm": "XXX",
>                     "parameters": "XXX",
>                     "body": "XXX",
>                     "exponent": "XXX",
>                     "size": "XXX",
>                     "usage": "XXX",
>                     "signature": "XXX"
>                 },
>                 "directoryName": {
>                     "commonName": "XXX",
>                     "serial": "XXX"
>                 },
>                 "fingerprints": {
>                     "sha256": "XXX",
>                     "sha1": "XXX"
>                 },
>                 "extensions": [
>                     {
>                         "oid": "2.5.28.15",
>                         "name": "Key Usage",
>                         "fields": [
>                             {
>                                 "name": "Critical",
>                                 "value": "Yes"
>                             }
>                         ]
>                     }
>                 ]
>             }
>         },
>         "authorization": {
>             "rule": "Rule Name",
>             "profile": "List all the profiles here"
>         },
>         "network": {
>             "name": "Name",
>             "accessType": "Wired",
>             "ssid": {
>                 "name": "SSID"
>             },
>             "port": {
>                 "name": "Port"
>             },
>             "tags": "tag names"
>         },
>         "device": {
>             "name": "Device model name",
>             "model": "Device model name",
>             "addresses": [
>                 {
>                     "protocol": "ipv4",
>                     "address": "100.10.100.10"
>                 }
>             ],
>             "tags": "tag names",
>             "id": "167231144861997",
>             "serial": "Q3AC-J3V8-DWNP",
>             "group": {
>                 "id": "167231144861998",
>                 "encryptedId": "OSYcyb2h",
>                 "localeName": "SJC-Test-Network"
>             }
>         },
>         "radius": {
>             "attributes": {
>                 "incoming": [
>                     {
>                         "code": "1",
>                         "name": "Username",
>                         "value": "hosuk"
>                     }
>                 ],
>                 "outgoing": [
>                     {
>                         "code": "1",
>                         "name": "Username",
>                         "value": "hosuk"
>                     }
>                 ]
>             }
>         }
>     }
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

### privateResourceGroups

PATH _`/organizations/{organizationId}/secureConnect/privateResourceGroups`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of the private resource groups in an organization.
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateResourceGroups`  
> 
>     {
>         "data": [
>             {
>                 "resourceGroupId": "123",
>                 "createdAt": "2024-03-06T15:11:55.323445Z",
>                 "updatedAt": "2024-03-06T15:11:55.323445Z",
>                 "name": "group 2",
>                 "description": "",
>                 "resourceIds": [
>                     "12345"
>                 ]
>             }
>         ]
>     }
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
>     {
>         "data": [
>             {
>                 "resourceGroupId": "123",
>                 "createdAt": "2024-03-06T15:11:55.323445Z",
>                 "updatedAt": "2024-03-06T15:11:55.323445Z",
>                 "name": "group 2",
>                 "description": "",
>                 "resourceIds": [
>                     "12345"
>                 ]
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/secureConnect/privateResourceGroups/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Updates a specific private resource group.
> 
> **PUT** `/organizations/{organizationId}/secureConnect/privateResourceGroups/{id}`  
> 
>     {
>         "data": [
>             {
>                 "resourceGroupId": "123",
>                 "createdAt": "2024-03-06T15:11:55.323445Z",
>                 "updatedAt": "2024-03-06T15:11:55.323445Z",
>                 "name": "group 2",
>                 "description": "",
>                 "resourceIds": [
>                     "12345"
>                 ]
>             }
>         ]
>     }
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

### privateResources

PATH _`/organizations/{organizationId}/secureConnect/privateResources`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Provides a list of private resources for an organization.
> 
> **GET** `/organizations/{organizationId}/secureConnect/privateResources`  
> 
>     {
>         "data": [
>             {
>                 "resourceId": "5",
>                 "name": "Sample Resource Name",
>                 "description": "A sample description",
>                 "accessTypes": [
>                     {
>                         "type": "client",
>                         "reachableAddresses": [
>                             "192.0.0.0"
>                         ]
>                     }
>                 ],
>                 "resourceAddresses": [
>                     {
>                         "protocolPorts": [
>                             {
>                                 "protocol": "any",
>                                 "ports": "80"
>                             }
>                         ],
>                         "destinationAddr": [
>                             "192.0.0.0"
>                         ]
>                     }
>                 ],
>                 "resourceGroupIds": [
>                     "1122321"
>                 ],
>                 "dnsServerId": "12345",
>                 "certificateId": "54321",
>                 "organizationId": "106642",
>                 "createdAt": "2024-03-06T15:11:55.323445Z",
>                 "updatedAt": "2024-03-06T15:11:55.323445Z",
>                 "deletedAt": "2024-03-06T15:11:55.323445Z",
>                 "umbrellaResourceId": "123",
>                 "umbrellaResourceCreatedAt": "2024-03-06T15:11:55.323445Z",
>                 "umbrellaResourceUpdatedAt": "2024-03-06T15:11:55.323445Z",
>                 "umbrellaResourceDeletedAt": "2024-03-06T15:11:55.323445Z",
>                 "umbrellaResourceCreatedBy": "",
>                 "umbrellaResourceModifiedBy": "",
>                 "umbrellaResourceErrorMessage": "",
>                 "umbrellaApplicationId": "321",
>                 "umbrellaApplicationCreatedAt": "2024-03-06T15:11:55.323445Z",
>                 "umbrellaApplicationUpdatedAt": "2024-03-06T15:11:55.323445Z",
>                 "umbrellaApplicationDeletedAt": "2024-03-06T15:11:55.323445Z",
>                 "umbrellaApplicationErrorMessage": ""
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
> #### Adds a new private resource to the organization.
> 
> **POST** `/organizations/{organizationId}/secureConnect/privateResources`  
> 
>     {
>         "resourceId": "5",
>         "name": "Sample Resource Name",
>         "description": "A sample description",
>         "accessTypes": [
>             {
>                 "type": "client",
>                 "reachableAddresses": [
>                     "192.0.0.0"
>                 ]
>             }
>         ],
>         "resourceAddresses": [
>             {
>                 "protocolPorts": [
>                     {
>                         "protocol": "any",
>                         "ports": "80"
>                     }
>                 ],
>                 "destinationAddr": [
>                     "192.0.0.0"
>                 ]
>             }
>         ],
>         "resourceGroupIds": [
>             "1122321"
>         ],
>         "dnsServerId": "12345",
>         "certificateId": "54321",
>         "organizationId": "106642",
>         "createdAt": "2024-03-06T15:11:55.323445Z",
>         "updatedAt": "2024-03-06T15:11:55.323445Z",
>         "deletedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaResourceId": "123",
>         "umbrellaResourceCreatedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaResourceUpdatedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaResourceDeletedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaResourceCreatedBy": "",
>         "umbrellaResourceModifiedBy": "",
>         "umbrellaResourceErrorMessage": "",
>         "umbrellaApplicationId": "321",
>         "umbrellaApplicationCreatedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaApplicationUpdatedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaApplicationDeletedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaApplicationErrorMessage": ""
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/secureConnect/privateResources/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Updates a specific private resource.
> 
> **PUT** `/organizations/{organizationId}/secureConnect/privateResources/{id}`  
> 
>     {
>         "resourceId": "5",
>         "name": "Sample Resource Name",
>         "description": "A sample description",
>         "accessTypes": [
>             {
>                 "type": "client",
>                 "reachableAddresses": [
>                     "192.0.0.0"
>                 ]
>             }
>         ],
>         "resourceAddresses": [
>             {
>                 "protocolPorts": [
>                     {
>                         "protocol": "any",
>                         "ports": "80"
>                     }
>                 ],
>                 "destinationAddr": [
>                     "192.0.0.0"
>                 ]
>             }
>         ],
>         "resourceGroupIds": [
>             "1122321"
>         ],
>         "dnsServerId": "12345",
>         "certificateId": "54321",
>         "organizationId": "106642",
>         "createdAt": "2024-03-06T15:11:55.323445Z",
>         "updatedAt": "2024-03-06T15:11:55.323445Z",
>         "deletedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaResourceId": "123",
>         "umbrellaResourceCreatedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaResourceUpdatedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaResourceDeletedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaResourceCreatedBy": "",
>         "umbrellaResourceModifiedBy": "",
>         "umbrellaResourceErrorMessage": "",
>         "umbrellaApplicationId": "321",
>         "umbrellaApplicationCreatedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaApplicationUpdatedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaApplicationDeletedAt": "2024-03-06T15:11:55.323445Z",
>         "umbrellaApplicationErrorMessage": ""
>     }
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
> #### List deployed cloud hubs and regions in this organization
> 
> **GET** `/organizations/{organizationId}/secureConnect/regions`  
> 
>     {
>         "data": [
>             {
>                 "id": "123",
>                 "type": "Region",
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
>                 "vpnType": "Hub",
>                 "defaultRoute": true
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

\[ switch \]
------------

### raGuardPolicy

PATH _`/networks/{networkId}/switch/raGuardPolicy`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return RA Guard settings. Blocked servers are applied when default policy is allowed, and vice versa for allowed servers and blocked default policy.
> 
> **GET** `/networks/{networkId}/switch/raGuardPolicy`  
> 
>     {
>         "defaultPolicy": "allowed",
>         "blockedServers": [
>             "00:50:56:00:00:03",
>             "00:50:56:00:00:04"
>         ],
>         "allowedServers": [
>             "00:50:56:00:00:01",
>             "00:50:56:00:00:02"
>         ]
>     }
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
>     {
>         "defaultPolicy": "allowed",
>         "blockedServers": [
>             "00:50:56:00:00:03",
>             "00:50:56:00:00:04"
>         ],
>         "allowedServers": [
>             "00:50:56:00:00:01",
>             "00:50:56:00:00:02"
>         ]
>     }
> 
> * * *

* * *

### configTemplates

PATH _`/organizations/{organizationId}/configTemplates/switch/profiles/ports/mirrors/bySwitchProfile`_

> \- Path added  
>   
> \- New endpoint
> 
> #### list the port mirror configurations in an organization by switch profile
> 
> **GET** `/organizations/{organizationId}/configTemplates/switch/profiles/ports/mirrors/bySwitchProfile`  
> 
>     {
>         "items": [
>             {
>                 "profileId": "1098",
>                 "configTemplate": {
>                     "id": "N_23952905",
>                     "name": "Main Office"
>                 },
>                 "mirror": {
>                     "source": {
>                         "ports": [
>                             {
>                                 "number": 2,
>                                 "module": {
>                                     "type": "C9800-2X40GE",
>                                     "slot": 1
>                                 }
>                             }
>                         ],
>                         "filter": {
>                             "vlans": "100, 200-210",
>                             "hasTransitVlan": true
>                         }
>                     },
>                     "destination": {
>                         "port": {
>                             "number": 7,
>                             "module": {
>                                 "type": "C9800-2X40GE",
>                                 "slot": 1
>                             }
>                         },
>                         "vlan": "10"
>                     },
>                     "role": "source",
>                     "comment": "My pretty comment",
>                     "tags": [
>                         "tag1",
>                         "tag2"
>                     ]
>                 },
>                 "warnings": [
>                     "sample warning message"
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 1
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/mirror`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a port mirror
> 
> **PUT** `/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/mirror`  
> 
>     {
>         "profileId": "1098",
>         "configTemplate": {
>             "id": "N_23952905",
>             "name": "Main Office"
>         },
>         "mirror": {
>             "source": {
>                 "ports": [
>                     {
>                         "number": 2,
>                         "module": {
>                             "type": "C9800-2X40GE",
>                             "slot": 1
>                         }
>                     }
>                 ],
>                 "filter": {
>                     "vlans": "100, 200-210",
>                     "hasTransitVlan": true
>                 }
>             },
>             "destination": {
>                 "port": {
>                     "number": 7,
>                     "module": {
>                         "type": "C9800-2X40GE",
>                         "slot": 1
>                     }
>                 },
>                 "vlan": "10"
>             },
>             "role": "source",
>             "comment": "My pretty comment",
>             "tags": [
>                 "tag1",
>                 "tag2"
>             ]
>         },
>         "warnings": [
>             "sample warning message"
>         ]
>     }
> 
> * * *

* * *

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
>                 ],
>                 "stack": {
>                     "id": "Stack ID",
>                     "name": "Stack name",
>                     "members": [
>                         {
>                             "serial": "Q234-ABCD-0001",
>                             "model": "MS",
>                             "name": "My switch",
>                             "mac": "00:11:22:33:44:55",
>                             "tags": [
>                                 "tag1",
>                                 "tag2"
>                             ],
>                             "history": [
>                                 {
>                                     "startTs": "2018-02-11T00:00:00.090210Z",
>                                     "endTs": "2018-02-11T00:00:00.090210Z",
>                                     "counts": {
>                                         "processed": {
>                                             "total": 8,
>                                             "byProtocol": {
>                                                 "arp": 2,
>                                                 "management": 6
>                                             }
>                                         },
>                                         "dropped": {
>                                             "total": 3,
>                                             "byProtocol": {
>                                                 "arp": 1,
>                                                 "management": 2
>                                             }
>                                         }
>                                     }
>                                 }
>                             ]
>                         }
>                     ]
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

### stacks

PATH _`/networks/{networkId}/switch/stacks/{switchStackId}/ports/mirror`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update switch port mirrors for switch stacks
> 
> **PUT** `/networks/{networkId}/switch/stacks/{switchStackId}/ports/mirror`  
> 
>     {
>         "switchStackId": "123456",
>         "network": {
>             "id": "N_24329156",
>             "name": "Main Office"
>         },
>         "mirror": {
>             "source": {
>                 "ports": [
>                     {
>                         "serial": "Q234-ABCD-5678",
>                         "number": 2,
>                         "module": {
>                             "type": "C9800-2X40GE",
>                             "slot": 1
>                         }
>                     }
>                 ],
>                 "filter": {
>                     "vlans": "100, 200-210",
>                     "hasTransitVlan": true
>                 }
>             },
>             "destination": {
>                 "port": {
>                     "serial": "Q234-ABCD-5670",
>                     "number": 7,
>                     "module": {
>                         "type": "C9800-2X40GE",
>                         "slot": 2
>                     }
>                 },
>                 "vlan": "10"
>             },
>             "role": "source",
>             "comment": "My pretty comment",
>             "tags": [
>                 "tag1",
>                 "tag2"
>             ]
>         },
>         "warnings": [
>             "Warnings from traffic mirror configuration changes"
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/stacks/ports/mirrors/byStack`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the port mirror configurations in an organization by switch
> 
> **GET** `/organizations/{organizationId}/switch/stacks/ports/mirrors/byStack`  
> 
>     [
>         {
>             "items": [
>                 {
>                     "switchStackId": "123456",
>                     "network": {
>                         "id": "N_24329156",
>                         "name": "Main Office"
>                     },
>                     "mirror": {
>                         "source": {
>                             "ports": [
>                                 {
>                                     "serial": "Q234-ABCD-5678",
>                                     "number": 2,
>                                     "module": {
>                                         "type": "C9800-2X40GE",
>                                         "slot": 1
>                                     }
>                                 }
>                             ],
>                             "filter": {
>                                 "vlans": "100, 200-210",
>                                 "hasTransitVlan": true
>                             }
>                         },
>                         "destination": {
>                             "port": {
>                                 "serial": "Q234-ABCD-5670",
>                                 "number": 7,
>                                 "module": {
>                                     "type": "C9800-2X40GE",
>                                     "slot": 2
>                                 }
>                             },
>                             "vlan": "10"
>                         },
>                         "role": "source",
>                         "comment": "My pretty comment",
>                         "tags": [
>                             "tag1",
>                             "tag2"
>                         ]
>                     },
>                     "warnings": [
>                         "Warnings from traffic mirror configuration changes"
>                     ]
>                 }
>             ],
>             "meta": {
>                 "counts": {
>                     "items": {
>                         "total": 1
>                     }
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

### ports

PATH _`/devices/{serial}/switch/ports/mirror`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a port mirror
> 
> **PUT** `/devices/{serial}/switch/ports/mirror`  
> 
>     {
>         "serial": "Q234-ABCD-5678",
>         "network": {
>             "id": "N_24329156",
>             "name": "Main Office"
>         },
>         "mirror": {
>             "source": {
>                 "ports": [
>                     {
>                         "number": 2,
>                         "module": {
>                             "type": "C9800-2X40GE",
>                             "slot": 2
>                         }
>                     }
>                 ],
>                 "filter": {
>                     "vlans": "100, 200-210",
>                     "hasTransitVlan": true
>                 }
>             },
>             "destination": {
>                 "port": {
>                     "number": 7,
>                     "module": {
>                         "type": "C9800-2X40GE",
>                         "slot": 1
>                     }
>                 },
>                 "vlan": "10"
>             },
>             "role": "source",
>             "comment": "My pretty comment",
>             "tags": [
>                 "tag1",
>                 "tag2"
>             ]
>         },
>         "warnings": [
>             "Warnings from traffic mirror configuration changes"
>         ]
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/switch/ports/profiles`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the port profiles in a network
> 
> **GET** `/networks/{networkId}/switch/ports/profiles`  
> 
>     [
>         {
>             "profileId": "1284392014819",
>             "networkId": "N_24329156",
>             "name": "Phone",
>             "description": "IP Phones for all office workers",
>             "tags": [
>                 "tag1",
>                 "tag2"
>             ],
>             "associatedPorts": [
>                 {
>                     "portId": "8",
>                     "portNum": 8,
>                     "portName": "Dev - Cheshire Cat / 8",
>                     "serial": "Q234-ABCD-5678",
>                     "profile": {
>                         "enabled": true,
>                         "id": "1284392014819"
>                     }
>                 }
>             ],
>             "associatedSwitches": [
>                 {
>                     "switchId": 247165647951894,
>                     "name": "Dev - Cheshire Cat",
>                     "mac": "e0:cb:bc:a5:98:16",
>                     "serial": "Q234-ABCD-5678",
>                     "model": "MS120-48FP"
>                 }
>             ],
>             "assignedSwitchports": [
>                 {
>                     "portIds": [
>                         "1",
>                         "2",
>                         "3",
>                         "1_C3850-NM-8-10G_1",
>                         "1_C3850-NM-8-10G_2"
>                     ],
>                     "switch": {
>                         "serial": "Q234-ABCD-5678"
>                     },
>                     "template": {
>                         "id": 1983748489
>                     }
>                 }
>             ],
>             "createdAt": "2022-09-16T09:18:38Z",
>             "updatedAt": "2022-09-16T09:18:38Z",
>             "port": {
>                 "type": "access",
>                 "vlan": 10,
>                 "voiceVlan": 20,
>                 "allowedVlans": "1-100",
>                 "poeEnabled": true,
>                 "isolationEnabled": false,
>                 "rstpEnabled": true,
>                 "stpGuard": "disabled",
>                 "udld": "Alert only",
>                 "accessPolicyType": "Sticky MAC allow list",
>                 "accessPolicyNumber": 3,
>                 "macAllowList": [
>                     "34:56:fe:ce:8e:b0",
>                     "34:56:fe:ce:8e:b1"
>                 ],
>                 "stickyMacAllowList": [
>                     "34:56:fe:ce:8e:b0",
>                     "34:56:fe:ce:8e:b1"
>                 ],
>                 "stickyMacAllowListLimit": 5,
>                 "stormControlEnabled": true,
>                 "adaptivePolicyGroupId": "1284392014819",
>                 "peerSgtCapable": false,
>                 "daiTrusted": false
>             },
>             "isOrganizationWide": false,
>             "networks": {
>                 "values": [
>                     {
>                         "id": "N_11865",
>                         "name": "Wonderland-Dev"
>                     }
>                 ],
>                 "type": "included"
>             },
>             "automations": [
>                 {
>                     "id": "N_11865",
>                     "name": "RYOFXAPO"
>                 }
>             ],
>             "access": "full"
>         }
>     ]
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
>     {
>         "profileId": "1284392014819",
>         "networkId": "N_24329156",
>         "name": "Phone",
>         "description": "IP Phones for all office workers",
>         "tags": [
>             "tag1",
>             "tag2"
>         ],
>         "associatedPorts": [
>             {
>                 "portId": "8",
>                 "portNum": 8,
>                 "portName": "Dev - Cheshire Cat / 8",
>                 "serial": "Q234-ABCD-5678",
>                 "profile": {
>                     "enabled": true,
>                     "id": "1284392014819"
>                 }
>             }
>         ],
>         "associatedSwitches": [
>             {
>                 "switchId": 247165647951894,
>                 "name": "Dev - Cheshire Cat",
>                 "mac": "e0:cb:bc:a5:98:16",
>                 "serial": "Q234-ABCD-5678",
>                 "model": "MS120-48FP"
>             }
>         ],
>         "assignedSwitchports": [
>             {
>                 "portIds": [
>                     "1",
>                     "2",
>                     "3",
>                     "1_C3850-NM-8-10G_1",
>                     "1_C3850-NM-8-10G_2"
>                 ],
>                 "switch": {
>                     "serial": "Q234-ABCD-5678"
>                 },
>                 "template": {
>                     "id": 1983748489
>                 }
>             }
>         ],
>         "createdAt": "2022-09-16T09:18:38Z",
>         "updatedAt": "2022-09-16T09:18:38Z",
>         "port": {
>             "type": "access",
>             "vlan": 10,
>             "voiceVlan": 20,
>             "allowedVlans": "1-100",
>             "poeEnabled": true,
>             "isolationEnabled": false,
>             "rstpEnabled": true,
>             "stpGuard": "disabled",
>             "udld": "Alert only",
>             "accessPolicyType": "Sticky MAC allow list",
>             "accessPolicyNumber": 3,
>             "macAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowListLimit": 5,
>             "stormControlEnabled": true,
>             "adaptivePolicyGroupId": "1284392014819",
>             "peerSgtCapable": false,
>             "daiTrusted": false
>         },
>         "isOrganizationWide": false,
>         "networks": {
>             "values": [
>                 {
>                     "id": "N_11865",
>                     "name": "Wonderland-Dev"
>                 }
>             ],
>             "type": "included"
>         },
>         "automations": [
>             {
>                 "id": "N_11865",
>                 "name": "RYOFXAPO"
>             }
>         ],
>         "access": "full"
>     }
> 
> * * *

* * *

PATH _`/networks/{networkId}/switch/ports/profiles/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a port profile in a network
> 
> **PUT** `/networks/{networkId}/switch/ports/profiles/{id}`  
> 
>     {
>         "profileId": "1284392014819",
>         "networkId": "N_24329156",
>         "name": "Phone",
>         "description": "IP Phones for all office workers",
>         "tags": [
>             "tag1",
>             "tag2"
>         ],
>         "associatedPorts": [
>             {
>                 "portId": "8",
>                 "portNum": 8,
>                 "portName": "Dev - Cheshire Cat / 8",
>                 "serial": "Q234-ABCD-5678",
>                 "profile": {
>                     "enabled": true,
>                     "id": "1284392014819"
>                 }
>             }
>         ],
>         "associatedSwitches": [
>             {
>                 "switchId": 247165647951894,
>                 "name": "Dev - Cheshire Cat",
>                 "mac": "e0:cb:bc:a5:98:16",
>                 "serial": "Q234-ABCD-5678",
>                 "model": "MS120-48FP"
>             }
>         ],
>         "assignedSwitchports": [
>             {
>                 "portIds": [
>                     "1",
>                     "2",
>                     "3",
>                     "1_C3850-NM-8-10G_1",
>                     "1_C3850-NM-8-10G_2"
>                 ],
>                 "switch": {
>                     "serial": "Q234-ABCD-5678"
>                 },
>                 "template": {
>                     "id": 1983748489
>                 }
>             }
>         ],
>         "createdAt": "2022-09-16T09:18:38Z",
>         "updatedAt": "2022-09-16T09:18:38Z",
>         "port": {
>             "type": "access",
>             "vlan": 10,
>             "voiceVlan": 20,
>             "allowedVlans": "1-100",
>             "poeEnabled": true,
>             "isolationEnabled": false,
>             "rstpEnabled": true,
>             "stpGuard": "disabled",
>             "udld": "Alert only",
>             "accessPolicyType": "Sticky MAC allow list",
>             "accessPolicyNumber": 3,
>             "macAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowListLimit": 5,
>             "stormControlEnabled": true,
>             "adaptivePolicyGroupId": "1284392014819",
>             "peerSgtCapable": false,
>             "daiTrusted": false
>         },
>         "isOrganizationWide": false,
>         "networks": {
>             "values": [
>                 {
>                     "id": "N_11865",
>                     "name": "Wonderland-Dev"
>                 }
>             ],
>             "type": "included"
>         },
>         "automations": [
>             {
>                 "id": "N_11865",
>                 "name": "RYOFXAPO"
>             }
>         ],
>         "access": "full"
>     }
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

PATH _`/organizations/{organizationId}/switch/ports/mirrors/bySwitch`_

> \- Path added  
>   
> \- New endpoint
> 
> #### list the port mirror configurations in an organization by switch
> 
> **GET** `/organizations/{organizationId}/switch/ports/mirrors/bySwitch`  
> 
>     {
>         "items": [
>             {
>                 "serial": "Q234-ABCD-5678",
>                 "network": {
>                     "id": "N_24329156",
>                     "name": "Main Office"
>                 },
>                 "mirror": {
>                     "source": {
>                         "ports": [
>                             {
>                                 "number": 2,
>                                 "module": {
>                                     "type": "C9800-2X40GE",
>                                     "slot": 2
>                                 }
>                             }
>                         ],
>                         "filter": {
>                             "vlans": "100, 200-210",
>                             "hasTransitVlan": true
>                         }
>                     },
>                     "destination": {
>                         "port": {
>                             "number": 7,
>                             "module": {
>                                 "type": "C9800-2X40GE",
>                                 "slot": 1
>                             }
>                         },
>                         "vlan": "10"
>                     },
>                     "role": "source",
>                     "comment": "My pretty comment",
>                     "tags": [
>                         "tag1",
>                         "tag2"
>                     ]
>                 },
>                 "warnings": [
>                     "Warnings from traffic mirror configuration changes"
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 1
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/ports/profiles`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the port profiles in an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles`  
> 
>     [
>         {
>             "profileId": "1284392014819",
>             "name": "Phone",
>             "description": "IP Phones for all office workers",
>             "createdAt": "2018-02-11T00:00:00.090210Z",
>             "updatedAt": "2018-02-11T00:00:00.090210Z",
>             "network": {
>                 "id": "N_24329156"
>             },
>             "counts": {
>                 "assigned": {
>                     "ports": 4,
>                     "switches": 2,
>                     "automations": 6
>                 },
>                 "networksCount": {
>                     "included": 40,
>                     "excluded": 20
>                 }
>             },
>             "isOrganizationWide": false,
>             "networks": {
>                 "values": [
>                     {
>                         "id": "N_11865",
>                         "name": "Wonderland-Dev"
>                     }
>                 ],
>                 "type": "included"
>             },
>             "access": "full"
>         }
>     ]
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
>     {
>         "profileId": "1284392014819",
>         "networkId": "N_24329156",
>         "name": "Phone",
>         "description": "IP Phones for all office workers",
>         "tags": [
>             "tag1",
>             "tag2"
>         ],
>         "associatedPorts": [
>             {
>                 "portId": "8",
>                 "portNum": 8,
>                 "portName": "Dev - Cheshire Cat / 8",
>                 "serial": "Q234-ABCD-5678",
>                 "profile": {
>                     "enabled": true,
>                     "id": "1284392014819"
>                 }
>             }
>         ],
>         "associatedSwitches": [
>             {
>                 "switchId": 247165647951894,
>                 "name": "Dev - Cheshire Cat",
>                 "mac": "e0:cb:bc:a5:98:16",
>                 "serial": "Q234-ABCD-5678",
>                 "model": "MS120-48FP"
>             }
>         ],
>         "assignedSwitchports": [
>             {
>                 "portIds": [
>                     "1",
>                     "2",
>                     "3",
>                     "1_C3850-NM-8-10G_1",
>                     "1_C3850-NM-8-10G_2"
>                 ],
>                 "switch": {
>                     "serial": "Q234-ABCD-5678"
>                 },
>                 "template": {
>                     "id": 1983748489
>                 }
>             }
>         ],
>         "createdAt": "2022-09-16T09:18:38Z",
>         "updatedAt": "2022-09-16T09:18:38Z",
>         "port": {
>             "type": "access",
>             "vlan": 10,
>             "voiceVlan": 20,
>             "allowedVlans": "1-100",
>             "poeEnabled": true,
>             "isolationEnabled": false,
>             "rstpEnabled": true,
>             "stpGuard": "disabled",
>             "udld": "Alert only",
>             "accessPolicyType": "Sticky MAC allow list",
>             "accessPolicyNumber": 3,
>             "macAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowListLimit": 5,
>             "stormControlEnabled": true,
>             "adaptivePolicyGroupId": "1284392014819",
>             "peerSgtCapable": false,
>             "daiTrusted": false
>         },
>         "isOrganizationWide": false,
>         "networks": {
>             "values": [
>                 {
>                     "id": "N_11865",
>                     "name": "Wonderland-Dev"
>                 }
>             ],
>             "type": "included"
>         },
>         "automations": [
>             {
>                 "id": "N_11865",
>                 "name": "RYOFXAPO"
>             }
>         ],
>         "access": "full"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/ports/profiles/automations`_

> \- Path added  
>   
> \- New endpoint
> 
> #### list the automation port profiles in an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles/automations`  
> 
>     {
>         "items": [
>             {
>                 "id": "1284392014819",
>                 "name": "Automation 1",
>                 "description": "A full length description of the automation.",
>                 "types": [
>                     "Custom",
>                     "Built-in"
>                 ],
>                 "fallbackProfile": {
>                     "id": "1284392014819",
>                     "name": "Profile 1"
>                 },
>                 "rules": [
>                     {
>                         "priority": 1,
>                         "conditions": [
>                             {
>                                 "attribute": "LLDP system description",
>                                 "values": [
>                                     "Meraki MR*",
>                                     "*Wireless*"
>                                 ]
>                             }
>                         ],
>                         "profile": {
>                             "id": "32",
>                             "name": "Profile 2"
>                         }
>                     }
>                 ],
>                 "assignedSwitchPorts": [
>                     {
>                         "portIds": [
>                             "1",
>                             "2",
>                             "3",
>                             "1_C3850-NM-8-10G_1",
>                             "1_C3850-NM-8-10G_2"
>                         ],
>                         "switch": {
>                             "serial": "Q234-ABCD-5678"
>                         }
>                     }
>                 ],
>                 "counts": {
>                     "assigned": {
>                         "devices": 2,
>                         "ports": 51,
>                         "networks": 1
>                     }
>                 },
>                 "isOrganizationWide": false,
>                 "networks": [
>                     {
>                         "id": "N_11865",
>                         "name": "Wonderland-Dev"
>                     }
>                 ]
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 1
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
> #### Create a port profile automation for an organization
> 
> **POST** `/organizations/{organizationId}/switch/ports/profiles/automations`  
> 
>     {
>         "id": "1284392014819",
>         "name": "Automation 1",
>         "description": "A full length description of the automation.",
>         "types": [
>             "Custom",
>             "Built-in"
>         ],
>         "fallbackProfile": {
>             "id": "1284392014819",
>             "name": "Profile 1"
>         },
>         "rules": [
>             {
>                 "priority": 1,
>                 "conditions": [
>                     {
>                         "attribute": "LLDP system description",
>                         "values": [
>                             "Meraki MR*",
>                             "*Wireless*"
>                         ]
>                     }
>                 ],
>                 "profile": {
>                     "id": "32",
>                     "name": "Profile 2"
>                 }
>             }
>         ],
>         "assignedSwitchPorts": [
>             {
>                 "portIds": [
>                     "1",
>                     "2",
>                     "3",
>                     "1_C3850-NM-8-10G_1",
>                     "1_C3850-NM-8-10G_2"
>                 ],
>                 "switch": {
>                     "serial": "Q234-ABCD-5678"
>                 }
>             }
>         ],
>         "counts": {
>             "assigned": {
>                 "devices": 2,
>                 "ports": 51,
>                 "networks": 1
>             }
>         },
>         "isOrganizationWide": false,
>         "networks": [
>             {
>                 "id": "N_11865",
>                 "name": "Wonderland-Dev"
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/ports/profiles/automations/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update a port profile automation in an organization
> 
> **PUT** `/organizations/{organizationId}/switch/ports/profiles/automations/{id}`  
> 
>     {
>         "id": "1284392014819",
>         "name": "Automation 1",
>         "description": "A full length description of the automation.",
>         "types": [
>             "Custom",
>             "Built-in"
>         ],
>         "fallbackProfile": {
>             "id": "1284392014819",
>             "name": "Profile 1"
>         },
>         "rules": [
>             {
>                 "priority": 1,
>                 "conditions": [
>                     {
>                         "attribute": "LLDP system description",
>                         "values": [
>                             "Meraki MR*",
>                             "*Wireless*"
>                         ]
>                     }
>                 ],
>                 "profile": {
>                     "id": "32",
>                     "name": "Profile 2"
>                 }
>             }
>         ],
>         "assignedSwitchPorts": [
>             {
>                 "portIds": [
>                     "1",
>                     "2",
>                     "3",
>                     "1_C3850-NM-8-10G_1",
>                     "1_C3850-NM-8-10G_2"
>                 ],
>                 "switch": {
>                     "serial": "Q234-ABCD-5678"
>                 }
>             }
>         ],
>         "counts": {
>             "assigned": {
>                 "devices": 2,
>                 "ports": 51,
>                 "networks": 1
>             }
>         },
>         "isOrganizationWide": false,
>         "networks": [
>             {
>                 "id": "N_11865",
>                 "name": "Wonderland-Dev"
>             }
>         ]
>     }
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

PATH _`/organizations/{organizationId}/switch/ports/profiles/networks/assignments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Fetch all Network - Smart Port Profile associations for an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles/networks/assignments`  
> 
>     {
>         "items": [
>             {
>                 "assignmentId": "123456",
>                 "type": "included",
>                 "profile": {
>                     "id": "4354353"
>                 },
>                 "network": {
>                     "id": "N_24329156"
>                 }
>             }
>         ],
>         "meta": {
>             "counts": {
>                 "items": {
>                     "total": 42,
>                     "remaining": 32
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
> #### Create Network and Smart Ports Profile association for a specific profile
> 
> **POST** `/organizations/{organizationId}/switch/ports/profiles/networks/assignments`  
> 
>     {
>         "assignmentId": "123456",
>         "type": "included",
>         "profile": {
>             "id": "4354353"
>         },
>         "network": {
>             "id": "N_24329156"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/ports/profiles/networks/assignments/batchCreate`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Batch Create Network and Smart Ports Profile associations for a specific profile
> 
> **POST** `/organizations/{organizationId}/switch/ports/profiles/networks/assignments/batchCreate`  
> 
>     {
>         "items": [
>             {
>                 "assignmentId": "123456",
>                 "type": "included",
>                 "profile": {
>                     "id": "4354353"
>                 },
>                 "network": {
>                     "id": "N_24329156"
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

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

PATH _`/organizations/{organizationId}/switch/ports/profiles/overview/byProfile`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the port profiles in an organization
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles/overview/byProfile`  
> 
>     [
>         {
>             "items": [
>                 {
>                     "profileId": "1284392014819",
>                     "name": "Phone",
>                     "description": "IP Phones for all office workers",
>                     "createdAt": "2018-02-11T00:00:00.090210Z",
>                     "updatedAt": "2018-02-11T00:00:00.090210Z",
>                     "network": {
>                         "id": "N_24329156"
>                     },
>                     "counts": {
>                         "assigned": {
>                             "ports": 4,
>                             "switches": 2,
>                             "automations": 6
>                         },
>                         "networksCount": {
>                             "included": 40,
>                             "excluded": 20
>                         }
>                     },
>                     "isOrganizationWide": false,
>                     "networks": {
>                         "values": [
>                             {
>                                 "id": "N_11865",
>                                 "name": "Wonderland-Dev"
>                             }
>                         ],
>                         "type": "included"
>                     },
>                     "access": "full"
>                 }
>             ],
>             "meta": {
>                 "counts": {
>                     "items": {
>                         "total": 1
>                     }
>                 }
>             }
>         }
>     ]
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/ports/profiles/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Get detailed information about a port profile
> 
> **GET** `/organizations/{organizationId}/switch/ports/profiles/{id}`  
> 
>     {
>         "profileId": "1284392014819",
>         "networkId": "N_24329156",
>         "name": "Phone",
>         "description": "IP Phones for all office workers",
>         "tags": [
>             "tag1",
>             "tag2"
>         ],
>         "associatedPorts": [
>             {
>                 "portId": "8",
>                 "portNum": 8,
>                 "portName": "Dev - Cheshire Cat / 8",
>                 "serial": "Q234-ABCD-5678",
>                 "profile": {
>                     "enabled": true,
>                     "id": "1284392014819"
>                 }
>             }
>         ],
>         "associatedSwitches": [
>             {
>                 "switchId": 247165647951894,
>                 "name": "Dev - Cheshire Cat",
>                 "mac": "e0:cb:bc:a5:98:16",
>                 "serial": "Q234-ABCD-5678",
>                 "model": "MS120-48FP"
>             }
>         ],
>         "assignedSwitchports": [
>             {
>                 "portIds": [
>                     "1",
>                     "2",
>                     "3",
>                     "1_C3850-NM-8-10G_1",
>                     "1_C3850-NM-8-10G_2"
>                 ],
>                 "switch": {
>                     "serial": "Q234-ABCD-5678"
>                 },
>                 "template": {
>                     "id": 1983748489
>                 }
>             }
>         ],
>         "createdAt": "2022-09-16T09:18:38Z",
>         "updatedAt": "2022-09-16T09:18:38Z",
>         "port": {
>             "type": "access",
>             "vlan": 10,
>             "voiceVlan": 20,
>             "allowedVlans": "1-100",
>             "poeEnabled": true,
>             "isolationEnabled": false,
>             "rstpEnabled": true,
>             "stpGuard": "disabled",
>             "udld": "Alert only",
>             "accessPolicyType": "Sticky MAC allow list",
>             "accessPolicyNumber": 3,
>             "macAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowListLimit": 5,
>             "stormControlEnabled": true,
>             "adaptivePolicyGroupId": "1284392014819",
>             "peerSgtCapable": false,
>             "daiTrusted": false
>         },
>         "isOrganizationWide": false,
>         "networks": {
>             "values": [
>                 {
>                     "id": "N_11865",
>                     "name": "Wonderland-Dev"
>                 }
>             ],
>             "type": "included"
>         },
>         "automations": [
>             {
>                 "id": "N_11865",
>                 "name": "RYOFXAPO"
>             }
>         ],
>         "access": "full"
>     }
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
>     {
>         "profileId": "1284392014819",
>         "networkId": "N_24329156",
>         "name": "Phone",
>         "description": "IP Phones for all office workers",
>         "tags": [
>             "tag1",
>             "tag2"
>         ],
>         "associatedPorts": [
>             {
>                 "portId": "8",
>                 "portNum": 8,
>                 "portName": "Dev - Cheshire Cat / 8",
>                 "serial": "Q234-ABCD-5678",
>                 "profile": {
>                     "enabled": true,
>                     "id": "1284392014819"
>                 }
>             }
>         ],
>         "associatedSwitches": [
>             {
>                 "switchId": 247165647951894,
>                 "name": "Dev - Cheshire Cat",
>                 "mac": "e0:cb:bc:a5:98:16",
>                 "serial": "Q234-ABCD-5678",
>                 "model": "MS120-48FP"
>             }
>         ],
>         "assignedSwitchports": [
>             {
>                 "portIds": [
>                     "1",
>                     "2",
>                     "3",
>                     "1_C3850-NM-8-10G_1",
>                     "1_C3850-NM-8-10G_2"
>                 ],
>                 "switch": {
>                     "serial": "Q234-ABCD-5678"
>                 },
>                 "template": {
>                     "id": 1983748489
>                 }
>             }
>         ],
>         "createdAt": "2022-09-16T09:18:38Z",
>         "updatedAt": "2022-09-16T09:18:38Z",
>         "port": {
>             "type": "access",
>             "vlan": 10,
>             "voiceVlan": 20,
>             "allowedVlans": "1-100",
>             "poeEnabled": true,
>             "isolationEnabled": false,
>             "rstpEnabled": true,
>             "stpGuard": "disabled",
>             "udld": "Alert only",
>             "accessPolicyType": "Sticky MAC allow list",
>             "accessPolicyNumber": 3,
>             "macAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowList": [
>                 "34:56:fe:ce:8e:b0",
>                 "34:56:fe:ce:8e:b1"
>             ],
>             "stickyMacAllowListLimit": 5,
>             "stormControlEnabled": true,
>             "adaptivePolicyGroupId": "1284392014819",
>             "peerSgtCapable": false,
>             "daiTrusted": false
>         },
>         "isOrganizationWide": false,
>         "networks": {
>             "values": [
>                 {
>                     "id": "N_11865",
>                     "name": "Wonderland-Dev"
>                 }
>             ],
>             "type": "included"
>         },
>         "automations": [
>             {
>                 "id": "N_11865",
>                 "name": "RYOFXAPO"
>             }
>         ],
>         "access": "full"
>     }
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

PATH _`/organizations/{organizationId}/switch/ports/transceivers/readings/history/bySwitch`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return time-series digital optical monitoring (DOM) readings for ports on each DOM-enabled switch in an organization, in addition to thresholds for each relevant Small Form Factor Pluggable (SFP) module.
> 
> **GET** `/organizations/{organizationId}/switch/ports/transceivers/readings/history/bySwitch`  
> 
>     {
>         "items": [
>             {
>                 "serial": "Q234-ABCD-0001",
>                 "ports": [
>                     {
>                         "portId": "1",
>                         "indices": {
>                             "switch": 1,
>                             "slot": 0,
>                             "port": 1
>                         },
>                         "readings": [
>                             {
>                                 "startTs": "2018-02-11T00:00:00.090210Z",
>                                 "endTs": "2018-02-11T00:00:00.090210Z",
>                                 "sfpProductId": "PRODUCT1",
>                                 "thresholdSetId": "ABC123",
>                                 "byMetric": {
>                                     "power": {
>                                         "transmit": {
>                                             "minimum": 4,
>                                             "maximum": 5,
>                                             "median": 4.5
>                                         },
>                                         "receive": {
>                                             "minimum": 4,
>                                             "maximum": 5,
>                                             "median": 4.5
>                                         }
>                                     },
>                                     "temperature": {
>                                         "fahrenheit": {
>                                             "minimum": 30,
>                                             "maximum": 33,
>                                             "median": 32
>                                         },
>                                         "celsius": {
>                                             "minimum": -1.1,
>                                             "maximum": 0.6,
>                                             "median": 0
>                                         }
>                                     },
>                                     "supplyVoltage": {
>                                         "level": {
>                                             "minimum": 3,
>                                             "maximum": 3.33,
>                                             "median": 3.11
>                                         }
>                                     },
>                                     "laserBiasCurrent": {
>                                         "draw": {
>                                             "minimum": 5,
>                                             "maximum": 7,
>                                             "median": 5.5
>                                         }
>                                     }
>                                 }
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
>             },
>             "units": {
>                 "power": {
>                     "name": "decibel milliwatts",
>                     "symbol": "dBm"
>                 },
>                 "supplyVoltage": {
>                     "name": "volts",
>                     "symbol": "V"
>                 },
>                 "laserBiasCurrent": {
>                     "name": "milliamps",
>                     "symbol": "mA"
>                 }
>             },
>             "thresholds": [
>                 {
>                     "thresholdSetId": "ABC123",
>                     "power": {
>                         "transmit": {
>                             "error": {
>                                 "upper": 1.8,
>                                 "lower": 0.3
>                             },
>                             "warning": {
>                                 "upper": 1.5,
>                                 "lower": 0.6
>                             }
>                         },
>                         "receive": {
>                             "error": {
>                                 "upper": 1.8,
>                                 "lower": 0.3
>                             },
>                             "warning": {
>                                 "upper": 1.5,
>                                 "lower": 0.6
>                             }
>                         }
>                     },
>                     "temperature": {
>                         "fahrenheit": {
>                             "error": {
>                                 "upper": 59,
>                                 "lower": 23
>                             },
>                             "warning": {
>                                 "upper": 50,
>                                 "lower": 14
>                             }
>                         },
>                         "celsius": {
>                             "error": {
>                                 "upper": 15,
>                                 "lower": -5
>                             },
>                             "warning": {
>                                 "upper": 10,
>                                 "lower": -10
>                             }
>                         }
>                     },
>                     "supplyVoltage": {
>                         "level": {
>                             "error": {
>                                 "upper": 7,
>                                 "lower": 2
>                             },
>                             "warning": {
>                                 "upper": 6,
>                                 "lower": 3
>                             }
>                         }
>                     },
>                     "laserBiasCurrent": {
>                         "draw": {
>                             "error": {
>                                 "upper": 6,
>                                 "lower": 1
>                             },
>                             "warning": {
>                                 "upper": 5,
>                                 "lower": 2
>                             }
>                         }
>                     }
>                 }
>             ]
>         }
>     }
> 
> * * *

* * *

### routing

PATH _`/organizations/{organizationId}/switch/routing/bgp/autonomousSystems`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the autonomous systems configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems`  
> 
>     {
>         "items": [
>             {
>                 "autonomousSystemId": "123",
>                 "number": 65000,
>                 "description": "Core AS"
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
> 
>   
> \- New endpoint
> 
> #### Create an autonomous system. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems`  
> 
>     {
>         "autonomousSystemId": "123",
>         "number": 65000,
>         "description": "Core AS"
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/overview/byAutonomousSystem`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the autonomous systems configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/overview/byAutonomousSystem`  
> 
>     {
>         "items": [
>             {
>                 "autonomousSystemId": "123",
>                 "counts": {
>                     "routers": {
>                         "total": 2
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/{autonomousSystemId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Update an autonomous system. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **PUT** `/organizations/{organizationId}/switch/routing/bgp/autonomousSystems/{autonomousSystemId}`  
> 
>     {
>         "autonomousSystemId": "123",
>         "number": 65000,
>         "description": "Core AS"
>     }
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the filter lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists`  
> 
>     {
>         "items": [
>             {
>                 "listId": "123",
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "name": "1",
>                 "description": "Sample filter list description"
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/deploy`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create or update a filter list, in addition to its associated rules. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/deploy`  
> 
>     {
>         "filterList": {
>             "id": "123",
>             "name": "1",
>             "description": "Sample filter list description"
>         },
>         "network": {
>             "id": "L_123",
>             "name": "My network name"
>         },
>         "rules": [
>             {
>                 "id": "123",
>                 "sequenceNumber": 10,
>                 "policy": "permit",
>                 "match": {
>                     "regex": "^109$"
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/overview/byFilterList`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the filter lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/overview/byFilterList`  
> 
>     {
>         "items": [
>             {
>                 "listId": "135",
>                 "counts": {
>                     "neighbors": {
>                         "total": 3
>                     },
>                     "peerGroups": {
>                         "total": 2
>                     },
>                     "rules": {
>                         "total": 1
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/rules`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the filter list rules configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/filterLists/rules`  
> 
>     {
>         "items": [
>             {
>                 "ruleId": "123",
>                 "filterList": {
>                     "id": "456",
>                     "name": "3"
>                 },
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "sequenceNumber": 10,
>                 "policy": "permit",
>                 "match": {
>                     "regex": "^109$"
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the prefix lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists`  
> 
>     {
>         "items": [
>             {
>                 "listId": "123",
>                 "name": "SamplePrefixListName",
>                 "description": "Sample prefix list description",
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/deploy`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create or update a prefix list, in addition to its associated rules. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/deploy`  
> 
>     {
>         "network": {
>             "id": "L_123",
>             "name": "My network name"
>         },
>         "prefixList": {
>             "id": "123",
>             "name": "SamplePrefixListName",
>             "description": "Sample prefix list description"
>         },
>         "rules": [
>             {
>                 "id": "123",
>                 "sequenceNumber": 10,
>                 "policy": "permit",
>                 "conditions": {
>                     "cidr": "10.0.0.0/8",
>                     "prefixLength": {
>                         "minimum": 16,
>                         "maximum": 28
>                     }
>                 }
>             }
>         ]
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/overview/byPrefixList`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the prefix lists configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/overview/byPrefixList`  
> 
>     {
>         "items": [
>             {
>                 "listId": "135",
>                 "counts": {
>                     "neighbors": {
>                         "total": 3
>                     },
>                     "peerGroups": {
>                         "total": 2
>                     },
>                     "rules": {
>                         "total": 1
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/rules`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the prefix list rules configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/filters/prefixLists/rules`  
> 
>     {
>         "items": [
>             {
>                 "ruleId": "123",
>                 "prefixList": {
>                     "id": "456",
>                     "name": "my-prefix-list"
>                 },
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "sequenceNumber": 10,
>                 "policy": "permit",
>                 "conditions": {
>                     "cidr": "10.0.0.0/8",
>                     "prefixLength": {
>                         "minimum": 16,
>                         "maximum": 28
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the BGP peer groups configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/groups`  
> 
>     {
>         "items": [
>             {
>                 "peerGroupId": "999",
>                 "router": {
>                     "id": "888"
>                 },
>                 "profile": {
>                     "id": "777",
>                     "name": "EBGP"
>                 },
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "name": "MyPeerGroup"
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups/addressFamilies/deployments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BGP deployment information for multiple peer groups or address families configured in the given organization, including profile information, peer group address family information, neighbors, and listen ranges. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/groups/addressFamilies/deployments`  
> 
>     {
>         "items": [
>             {
>                 "addressFamily": {
>                     "id": "456",
>                     "description": "ipv4 unicast"
>                 },
>                 "listenRanges": [
>                     {
>                         "id": "999",
>                         "cidr": "192.0.2.0/24",
>                         "enabled": true,
>                         "description": "Campus-Bldg-1"
>                     }
>                 ],
>                 "neighbors": [
>                     {
>                         "id": "999",
>                         "description": "BGP gateway",
>                         "address": "10.0.0.1",
>                         "peering": {
>                             "enabled": true
>                         }
>                     }
>                 ],
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "peerGroup": {
>                     "id": "999",
>                     "name": "MyPeerGroup"
>                 },
>                 "peerGroupAddressFamilyBinding": {
>                     "id": "123"
>                 },
>                 "peerGroupAddressFamilyBindingProfile": {
>                     "id": "123",
>                     "advertisement": {
>                         "interval": 20,
>                         "defaultRoutes": {
>                             "enabled": true
>                         }
>                     },
>                     "communityAttribute": {
>                         "send": {
>                             "enabled": true
>                         }
>                     },
>                     "name": "Sample binding profile",
>                     "nextHop": {
>                         "self": {
>                             "enabled": true
>                         },
>                         "unchanged": {
>                             "enabled": false
>                         }
>                     },
>                     "removePrivateAs": {
>                         "enabled": true
>                     },
>                     "routeReflector": {
>                         "client": {
>                             "enabled": false
>                         }
>                     },
>                     "softReconfiguration": {
>                         "direction": "inbound"
>                     },
>                     "weight": 30
>                 },
>                 "peerGroupProfile": {
>                     "id": "456",
>                     "name": "DefaultPeerGroup",
>                     "description": "Standard settings",
>                     "ebgp": {
>                         "connectedCheck": {
>                             "enabled": true
>                         },
>                         "multihop": {
>                             "maximum": 10
>                         }
>                     },
>                     "authentication": {
>                         "enabled": true,
>                         "password": "my password"
>                     },
>                     "timers": {
>                         "hold": 90,
>                         "keepalive": 30
>                     },
>                     "autonomousSystem": {
>                         "remote": {
>                             "number": 65000
>                         }
>                     },
>                     "interfaces": {
>                         "loopback": {
>                             "source": {
>                                 "id": "555",
>                                 "name": "0",
>                                 "number": 0
>                             }
>                         }
>                     }
>                 },
>                 "router": {
>                     "id": "888"
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups/deploy`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create or update a peer group, in addition to an associated peer group profile, peer group address family binding, peer group address family binding profile and routing policies associated with the peer group. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/peers/groups/deploy`  
> 
>     {
>         "addressFamily": {
>             "id": "456",
>             "description": "ipv4 unicast"
>         },
>         "network": {
>             "id": "L_123",
>             "name": "My network name"
>         },
>         "peerGroup": {
>             "id": "999",
>             "name": "MyPeerGroup"
>         },
>         "peerGroupAddressFamilyBinding": {
>             "id": "123"
>         },
>         "peerGroupAddressFamilyBindingProfile": {
>             "id": "123",
>             "advertisement": {
>                 "interval": 20,
>                 "defaultRoutes": {
>                     "enabled": true
>                 }
>             },
>             "communityAttribute": {
>                 "send": {
>                     "enabled": true
>                 }
>             },
>             "name": "Sample binding profile",
>             "nextHop": {
>                 "self": {
>                     "enabled": true
>                 },
>                 "unchanged": {
>                     "enabled": false
>                 }
>             },
>             "removePrivateAs": {
>                 "enabled": true
>             },
>             "routeReflector": {
>                 "client": {
>                     "enabled": false
>                 }
>             },
>             "softReconfiguration": {
>                 "direction": "inbound"
>             },
>             "weight": 30
>         },
>         "peerGroupProfile": {
>             "id": "456",
>             "name": "DefaultPeerGroup",
>             "description": "Standard settings",
>             "ebgp": {
>                 "connectedCheck": {
>                     "enabled": true
>                 },
>                 "multihop": {
>                     "maximum": 10
>                 }
>             },
>             "authentication": {
>                 "enabled": true,
>                 "password": "my password"
>             },
>             "timers": {
>                 "hold": 90,
>                 "keepalive": 30
>             },
>             "autonomousSystem": {
>                 "remote": {
>                     "number": 65000
>                 }
>             },
>             "interfaces": {
>                 "loopback": {
>                     "source": {
>                         "id": "555",
>                         "name": "0",
>                         "number": 0
>                     }
>                 }
>             }
>         },
>         "policies": [
>             {
>                 "id": "123",
>                 "ruleList": {
>                     "type": "Prefix list",
>                     "name": "SamplePrefixListName",
>                     "id": "789"
>                 },
>                 "direction": "in"
>             }
>         ],
>         "router": {
>             "id": "888"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups/deployments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BGP deployment information for peer groups configured in the given organization, including peer group address family information, as well as routing policies. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/groups/deployments`  
> 
>     {
>         "items": [
>             {
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "peerGroup": {
>                     "id": "999",
>                     "name": "MyPeerGroup"
>                 },
>                 "peerGroupProfile": {
>                     "id": "456",
>                     "name": "DefaultPeerGroup",
>                     "description": "Standard settings",
>                     "ebgp": {
>                         "connectedCheck": {
>                             "enabled": true
>                         },
>                         "multihop": {
>                             "maximum": 10
>                         }
>                     },
>                     "authentication": {
>                         "enabled": true,
>                         "password": "my password"
>                     },
>                     "timers": {
>                         "hold": 90,
>                         "keepalive": 30
>                     },
>                     "autonomousSystem": {
>                         "remote": {
>                             "number": 65000
>                         }
>                     },
>                     "interfaces": {
>                         "loopback": {
>                             "source": {
>                                 "id": "555",
>                                 "name": "0",
>                                 "number": 0
>                             }
>                         }
>                     }
>                 },
>                 "router": {
>                     "id": "888"
>                 },
>                 "deployments": [
>                     {
>                         "addressFamily": {
>                             "id": "456",
>                             "description": "ipv4 unicast"
>                         },
>                         "peerGroupAddressFamilyBinding": {
>                             "id": "123"
>                         },
>                         "peerGroupAddressFamilyBindingProfile": {
>                             "id": "123",
>                             "advertisement": {
>                                 "interval": 20,
>                                 "defaultRoutes": {
>                                     "enabled": true
>                                 }
>                             },
>                             "communityAttribute": {
>                                 "send": {
>                                     "enabled": true
>                                 }
>                             },
>                             "name": "Sample binding profile",
>                             "nextHop": {
>                                 "self": {
>                                     "enabled": true
>                                 },
>                                 "unchanged": {
>                                     "enabled": false
>                                 }
>                             },
>                             "removePrivateAs": {
>                                 "enabled": true
>                             },
>                             "routeReflector": {
>                                 "client": {
>                                     "enabled": false
>                                 }
>                             },
>                             "softReconfiguration": {
>                                 "direction": "inbound"
>                             },
>                             "weight": 30
>                         },
>                         "policies": [
>                             {
>                                 "id": "123",
>                                 "ruleList": {
>                                     "type": "Prefix list",
>                                     "name": "SamplePrefixListName",
>                                     "id": "789"
>                                 },
>                                 "direction": "in"
>                             }
>                         ]
>                     }
>                 ]
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/groups/overview/byPeerGroup`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the BGP peer groups configured in the given organization
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/groups/overview/byPeerGroup`  
> 
>     {
>         "items": [
>             {
>                 "peerGroupId": "123",
>                 "counts": {
>                     "listenRanges": {
>                         "total": 1
>                     },
>                     "neighbors": {
>                         "total": 2
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/listenRanges`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the listen ranges configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/listenRanges`  
> 
>     {
>         "items": [
>             {
>                 "listenRangeId": "999",
>                 "router": {
>                     "id": "888"
>                 },
>                 "peerGroup": {
>                     "id": "777",
>                     "name": "MyPeerGroupName"
>                 },
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "cidr": "192.0.2.0/24",
>                 "enabled": true,
>                 "description": "Campus-Bldg-1"
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/neighbors`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the neighbors configured for BGP in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/neighbors`  
> 
>     {
>         "items": [
>             {
>                 "neighborId": "999",
>                 "router": {
>                     "id": "888"
>                 },
>                 "peerGroup": {
>                     "id": "777",
>                     "name": "MyPeerGroupName"
>                 },
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "description": "BGP gateway",
>                 "address": "10.0.0.1",
>                 "authentication": {
>                     "enabled": true,
>                     "password": "my password"
>                 },
>                 "ebgp": {
>                     "connectedCheck": {
>                         "enabled": true
>                     },
>                     "multihop": {
>                         "maximum": 10
>                     }
>                 },
>                 "interfaces": {
>                     "loopback": {
>                         "source": {
>                             "id": "555",
>                             "name": "0",
>                             "number": 0
>                         }
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/neighbors/deploy`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create or update a neighor, in addition to an associated neighbor address family binding and routing policies associated with the neighbor. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/peers/neighbors/deploy`  
> 
>     {
>         "addressFamily": {
>             "id": "456",
>             "description": "ipv4 unicast"
>         },
>         "neighbor": {
>             "id": "999",
>             "description": "BGP gateway",
>             "address": "10.0.0.1",
>             "authentication": {
>                 "enabled": true,
>                 "password": "my password"
>             },
>             "ebgp": {
>                 "connectedCheck": {
>                     "enabled": true
>                 },
>                 "multihop": {
>                     "maximum": 10
>                 }
>             },
>             "interfaces": {
>                 "loopback": {
>                     "source": {
>                         "id": "555",
>                         "name": "0",
>                         "number": 0
>                     }
>                 }
>             }
>         },
>         "neighborAddressFamilyBinding": {
>             "id": "123",
>             "peering": {
>                 "enabled": true
>             },
>             "weight": 10,
>             "advertisement": {
>                 "defaultRoutes": {
>                     "enabled": true
>                 }
>             },
>             "softReconfiguration": {
>                 "direction": "inbound"
>             }
>         },
>         "network": {
>             "id": "L_123",
>             "name": "My network name"
>         },
>         "peerGroup": {
>             "id": "777",
>             "name": "MyPeerGroupName"
>         },
>         "policies": [
>             {
>                 "id": "123",
>                 "ruleList": {
>                     "type": "Prefix list",
>                     "name": "SamplePrefixListName",
>                     "id": "789"
>                 },
>                 "direction": "in"
>             }
>         ],
>         "router": {
>             "id": "888"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/routing/bgp/peers/neighbors/deployments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BGP deployment information for neighbors configured in the given organization, including address family information, as well as routing policies. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/peers/neighbors/deployments`  
> 
>     {
>         "items": [
>             {
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "peerGroup": {
>                     "id": "777",
>                     "name": "MyPeerGroupName"
>                 },
>                 "router": {
>                     "id": "888"
>                 },
>                 "neighbor": {
>                     "id": "999",
>                     "description": "BGP gateway",
>                     "address": "10.0.0.1",
>                     "authentication": {
>                         "enabled": true,
>                         "password": "my password"
>                     },
>                     "ebgp": {
>                         "connectedCheck": {
>                             "enabled": true
>                         },
>                         "multihop": {
>                             "maximum": 10
>                         }
>                     },
>                     "interfaces": {
>                         "loopback": {
>                             "source": {
>                                 "id": "555",
>                                 "name": "0",
>                                 "number": 0
>                             }
>                         }
>                     }
>                 },
>                 "deployments": [
>                     {
>                         "addressFamily": {
>                             "id": "456",
>                             "description": "ipv4 unicast"
>                         },
>                         "neighborAddressFamilyBinding": {
>                             "id": "123",
>                             "peering": {
>                                 "enabled": true
>                             },
>                             "weight": 10,
>                             "advertisement": {
>                                 "defaultRoutes": {
>                                     "enabled": true
>                                 }
>                             },
>                             "softReconfiguration": {
>                                 "direction": "inbound"
>                             }
>                         },
>                         "policies": [
>                             {
>                                 "id": "123",
>                                 "ruleList": {
>                                     "type": "Prefix list",
>                                     "name": "SamplePrefixListName",
>                                     "id": "789"
>                                 },
>                                 "direction": "in"
>                             }
>                         ]
>                     }
>                 ]
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the routers configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/routers`  
> 
>     {
>         "items": [
>             {
>                 "routerId": "123",
>                 "autonomousSystem": {
>                     "id": "123",
>                     "number": 65000,
>                     "description": "Core AS"
>                 },
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "stack": {
>                     "id": "12345",
>                     "name": "A Switch Stack",
>                     "members": [
>                         "Q234-ABCD-0001",
>                         "Q234-ABCD-0002"
>                     ]
>                 },
>                 "switch": {
>                     "serial": "Q234-ABCD-0001",
>                     "name": "Core S1",
>                     "model": "C9300X-24Y"
>                 },
>                 "enabled": true,
>                 "bgpIdentifier": {
>                     "address": "1.2.3.4",
>                     "interfaces": {
>                         "loopback": {
>                             "id": "789",
>                             "name": "1",
>                             "number": 1
>                         }
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/deploy`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create a BGP router, in addition to an associated address family, address family prefixes, and address family profile. This is helpful for the initial deployment of a BGP router.. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/routers/deploy`  
> 
>     {
>         "addressFamily": {
>             "id": "987",
>             "afi": "ipv4",
>             "safi": "unicast",
>             "vrf": {
>                 "name": "Default"
>             }
>         },
>         "addressFamilyPrefixes": [
>             {
>                 "id": "987",
>                 "prefix": "10.128.0.0/16",
>                 "enabled": true,
>                 "description": "My prefix description"
>             }
>         ],
>         "addressFamilyProfile": {
>             "id": "456",
>             "name": "Default address family",
>             "ebgp": {
>                 "paths": {
>                     "maximum": 4
>                 }
>             },
>             "metrics": {
>                 "default": 300
>             },
>             "summarization": {
>                 "auto": {
>                     "enabled": true
>                 }
>             },
>             "redistribution": {
>                 "static": {
>                     "enabled": true
>                 },
>                 "connected": {
>                     "enabled": true
>                 }
>             }
>         },
>         "autonomousSystem": {
>             "id": "123",
>             "number": 65000,
>             "description": "Core AS"
>         },
>         "network": {
>             "id": "L_123",
>             "name": "My network name"
>         },
>         "router": {
>             "id": "123",
>             "enabled": true,
>             "bgpIdentifier": {
>                 "address": "1.2.3.4",
>                 "interfaces": {
>                     "loopback": {
>                         "id": "789",
>                         "name": "1",
>                         "number": 1
>                     }
>                 }
>             }
>         },
>         "stack": {
>             "id": "12345",
>             "name": "A Switch Stack",
>             "members": [
>                 "Q234-ABCD-0001",
>                 "Q234-ABCD-0002"
>             ]
>         },
>         "switch": {
>             "serial": "Q234-ABCD-0001",
>             "name": "Core S1",
>             "model": "C9300X-24Y"
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/deployments`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List all BGP deployment information for routers configured in a given organization, including all address families. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/routers/deployments`  
> 
>     {
>         "items": [
>             {
>                 "autonomousSystem": {
>                     "id": "123",
>                     "number": 65000,
>                     "description": "Core AS"
>                 },
>                 "network": {
>                     "id": "L_123",
>                     "name": "My network name"
>                 },
>                 "stack": {
>                     "id": "12345",
>                     "name": "A Switch Stack",
>                     "members": [
>                         "Q234-ABCD-0001",
>                         "Q234-ABCD-0002"
>                     ]
>                 },
>                 "switch": {
>                     "serial": "Q234-ABCD-0001",
>                     "name": "Core S1",
>                     "model": "C9300X-24Y"
>                 },
>                 "router": {
>                     "id": "123",
>                     "enabled": true,
>                     "bgpIdentifier": {
>                         "address": "1.2.3.4",
>                         "interfaces": {
>                             "loopback": {
>                                 "id": "789",
>                                 "name": "1",
>                                 "number": 1
>                             }
>                         }
>                     }
>                 },
>                 "deployments": [
>                     {
>                         "addressFamily": {
>                             "id": "987",
>                             "afi": "ipv4",
>                             "safi": "unicast",
>                             "vrf": {
>                                 "name": "Default"
>                             }
>                         },
>                         "addressFamilyPrefixes": [
>                             {
>                                 "id": "987",
>                                 "prefix": "10.128.0.0/16",
>                                 "enabled": true,
>                                 "description": "My prefix description"
>                             }
>                         ],
>                         "addressFamilyProfile": {
>                             "id": "456",
>                             "name": "Default address family",
>                             "ebgp": {
>                                 "paths": {
>                                     "maximum": 4
>                                 }
>                             },
>                             "metrics": {
>                                 "default": 300
>                             },
>                             "summarization": {
>                                 "auto": {
>                                     "enabled": true
>                                 }
>                             },
>                             "redistribution": {
>                                 "static": {
>                                     "enabled": true
>                                 },
>                                 "connected": {
>                                     "enabled": true
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
>                     "total": 1,
>                     "remaining": 0
>                 }
>             }
>         }
>     }
> 
> * * *

* * *

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/overview/byRouter`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the overview of the routers configured in the given organization. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **GET** `/organizations/{organizationId}/switch/routing/bgp/routers/overview/byRouter`  
> 
>     {
>         "items": [
>             {
>                 "routerId": "123",
>                 "counts": {
>                     "listenRanges": {
>                         "total": 1
>                     },
>                     "neighbors": {
>                         "total": 2
>                     },
>                     "routes": {
>                         "advertised": {
>                             "total": 4
>                         }
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

PATH _`/organizations/{organizationId}/switch/routing/bgp/routers/peers/deploy`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Create and update listen ranges, update peers' enabled flag, and delete peer groups for a BGP router. Border Gateway Protocol requires IOS XE 17.18 or higher
> 
> **POST** `/organizations/{organizationId}/switch/routing/bgp/routers/peers/deploy`  
> 
>     {
>         "addressFamily": {
>             "id": "987"
>         },
>         "network": {
>             "id": "L_123",
>             "name": "My network name"
>         },
>         "peerGroups": [
>             {
>                 "id": "123",
>                 "listenRanges": [
>                     {
>                         "id": "999",
>                         "cidr": "192.0.2.0/24",
>                         "enabled": true,
>                         "description": "Campus-Bldg-1"
>                     }
>                 ],
>                 "neighbors": [
>                     {
>                         "id": "999",
>                         "description": "BGP gateway",
>                         "address": "10.0.0.1",
>                         "peering": {
>                             "enabled": true
>                         }
>                     }
>                 ]
>             }
>         ],
>         "router": {
>             "id": "123"
>         }
>     }
> 
> * * *

* * *

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

\[ support \]
-------------

### salesRepresentatives

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
>                         "co2": {
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

\[ wirelessController \]
------------------------

### connections

PATH _`/organizations/{organizationId}/wirelessController/connections/unassigned`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List of unassigned Catalyst access points and summary information
> 
> **GET** `/organizations/{organizationId}/wirelessController/connections/unassigned`  
> 
>     {
>         "items": [
>             {
>                 "id": "958271979973",
>                 "name": "MBY-CON-NCC_HLWY-24",
>                 "model": "AIR-AP1815I-B-K9",
>                 "serial": "",
>                 "mac": "8c:94:1f:97:54:01",
>                 "onboarding": {
>                     "isSupported": true,
>                     "status": "unregistered",
>                     "errors": [
>                         "DNS failure"
>                     ]
>                 },
>                 "tags": {
>                     "policy": "default-policy-tag",
>                     "site": "default-site-tag",
>                     "rf": "default-rf-tag"
>                 },
>                 "details": [
>                     {
>                         "name": "Catalyst serial",
>                         "value": "FCW2325N3RY"
>                     }
>                 ],
>                 "uplinks": [
>                     {
>                         "addresses": [
>                             {
>                                 "address": "10.104.55.4"
>                             }
>                         ]
>                     }
>                 ],
>                 "controller": {
>                     "serial": "A2CC-8TYV-VCO9"
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

### regulatoryDomain

PATH _`/organizations/{organizationId}/wirelessController/regulatoryDomain/package/generate`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Generate the regulatory domain package
> 
> **POST** `/organizations/{organizationId}/wirelessController/regulatoryDomain/package/generate`  
> 
>     {
>         "content": {
>             "devices": [
>                 {
>                     "serial": "Q234-ABCD-5678",
>                     "mac": "00:11:22:33:44:55",
>                     "regulatoryDomain": {
>                         "country": "US",
>                         "method": "manual"
>                     }
>                 }
>             ],
>             "details": {
>                 "schemaVersion": "1.0.0",
>                 "organizationId": "2930418",
>                 "createdAt": "2018-05-12T00:00:00Z",
>                 "counts": {
>                     "devices": 1
>                 },
>                 "createdBy": {
>                     "id": "212406",
>                     "email": "miles@meraki.com"
>                 }
>             }
>         },
>         "signature": "a1b2c3d4e5f6g7h8i9j0",
>         "certificates": [
>             {
>                 "purpose": "signature",
>                 "content": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tIE1JSUZZRENDQTBpZ0F3SUJBZ0lRQ2dGQ2dBQUFBVVVqeQ=="
>             }
>         ]
>     }
> 
> * * *

* * *

\[ devices \]
-------------

### vrrpTable

PATH _`/devices/{serial}/liveTools/vrrpTable`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a VRRP table request for the device. This endpoint currently supports Catalyst switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/vrrpTable`  
> 
>     {
>         "vrrpTableId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/vrrpTable/1284392014819",
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

PATH _`/devices/{serial}/liveTools/vrrpTable/{vrrpTableId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an VRRP table live tool job.
> 
> **GET** `/devices/{serial}/liveTools/vrrpTable/{vrrpTableId}`  
> 
>     {
>         "vrrpTableId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/vrrpTable/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "entries": [
>             {
>                 "group": 123,
>                 "protocol": "ipv4",
>                 "addresses": {
>                     "virtual": "10.0.0.1",
>                     "primary": "10.0.0.2"
>                 },
>                 "vlanId": 100,
>                 "priority": 100,
>                 "preemption": {
>                     "enabled": true
>                 },
>                 "status": {
>                     "value": "primary",
>                     "description": "Indicates that the virtual router is forwarding packets for IP addresses that are associated with this router",
>                     "primaryReason": {
>                         "value": "priority",
>                         "description": "Won the primary election due to higher priority"
>                     },
>                     "lastChange": {
>                         "ts": "2018-02-11T00:00:00.090210Z",
>                         "reason": {
>                             "value": "priority",
>                             "description": "Elected primary due to higher priority"
>                         }
>                     }
>                 }
>             }
>         ],
>         "error": "The device is unreachable."
>     }
> 
> * * *

* * *

### traceRoute

PATH _`/devices/{serial}/liveTools/traceRoute`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to run trace route in the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
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
>         "results": {
>             "speeds": {
>                 "average": 123.45
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
>         "results": {
>             "speeds": {
>                 "average": 123.45
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
> #### Enqueue a job to perform a routing table request for the device. Only native Catalyst switches are supported. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
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
>                 "staticGateway": "22.22.22.21",
>                 "ipVersion": "ipv4"
>             }
>         ],
>         "error": "The device is unreachable"
>     }
> 
> * * *

* * *

### reboot

PATH _`/devices/{serial}/liveTools/reboot`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to reboot a device. This endpoint has a rate limit of one request every 60 seconds.
> 
> **POST** `/devices/{serial}/liveTools/reboot`  
> 
>     {
>         "rebootId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/reboot/1284392014819",
>         "status": "complete",
>         "request": {
>             "serial": "Q234-ABCD-5678"
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

PATH _`/devices/{serial}/liveTools/reboot/{rebootId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a reboot job
> 
> **GET** `/devices/{serial}/liveTools/reboot/{rebootId}`  
> 
>     {
>         "rebootId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/reboot/1284392014819",
>         "status": "complete",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "error": "error description"
>     }
> 
> * * *

* * *

### ospfNeighbors

PATH _`/devices/{serial}/liveTools/ospfNeighbors`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a OSPF neighbors request for the device. This endpoint currently supports switches. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/ospfNeighbors`  
> 
>     {
>         "ospfNeighborsId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/ospfNeighbors/1284392014819",
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

PATH _`/devices/{serial}/liveTools/ospfNeighbors/{ospfNeighborsId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return an OSPF neighbors live tool job.
> 
> **GET** `/devices/{serial}/liveTools/ospfNeighbors/{ospfNeighborsId}`  
> 
>     {
>         "ospfNeighborsId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/ospfNeighbors/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "routers": [
>             {
>                 "id": "1.2.3.4",
>                 "name": "My route",
>                 "ip": "10.0.0.0/24",
>                 "position": "DR",
>                 "state": "full",
>                 "vlanId": 100
>             }
>         ],
>         "error": "The device is unreachable."
>     }
> 
> * * *

* * *

### dhcpLeases

PATH _`/devices/{serial}/liveTools/dhcpLeases`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Enqueue a job to perform a DHCP leases request for the device. This endpoint currently supports all devices. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
> 
> **POST** `/devices/{serial}/liveTools/dhcpLeases`  
> 
>     {
>         "dhcpLeasesId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/dhcpLeases/1284392014819",
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

PATH _`/devices/{serial}/liveTools/dhcpLeases/{dhcpLeasesId}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a DHCP leases live tool job.
> 
> **GET** `/devices/{serial}/liveTools/dhcpLeases/{dhcpLeasesId}`  
> 
>     {
>         "dhcpLeasesId": "1284392014819",
>         "url": "/devices/Q234-ABCD-5678/liveTools/dhcpLeases/1284392014819",
>         "request": {
>             "serial": "Q234-ABCD-5678"
>         },
>         "status": "complete",
>         "dhcpLeases": [
>             {
>                 "ip": "10.0.0.0/24",
>                 "mac": "00:11:22:33:44:55",
>                 "expiresAt": "2018-02-11T00:00:00.090210Z"
>             }
>         ],
>         "error": "The device is unreachable."
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
> #### Enqueue a job to perform a cycle port for the device on the specified ports. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
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
> #### Enqueue a job to perform an ACL hit count for the device. This endpoint has a sustained rate limit of one request every five seconds per device, with an allowed burst of five requests.
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

### clients

PATH _`/devices/{serial}/liveTools/clients/disconnect/{id}`_

> \- Path added  
>   
> \- New endpoint
> 
> #### Return a client disconnect job.
> 
> **GET** `/devices/{serial}/liveTools/clients/disconnect/{id}`  
> 
>     {
>         "id": "abcd-1234-efgh-5678",
>         "status": "queued",
>         "request": {
>             "mac": "00:11:22:33:44:55",
>             "serial": "ABCD-1234-ABCD"
>         },
>         "url": "/api/v1/devices/serial/liveTools/disconnect",
>         "results": {
>             "success": true,
>             "error": "Device (Access Point) took too long to respond."
>         }
>     }
> 
> * * *

* * *