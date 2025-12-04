 # Meraki API Release Notes v1.65.0

## Summary

- 0 new operations added
- 30 operations enhanced
- 859 total operations available

## What's New

## What's Updated

### appliance

**singleLan**

- Update single LAN configuration, [updateNetworkApplianceSingleLan](https://developer.cisco.com/meraki/api-v1/update-network-appliance-single-lan/)

> \- Required property `disabled` added

**vlans**

- Add a VLAN, [createNetworkApplianceVlan](https://developer.cisco.com/meraki/api-v1/create-network-appliance-vlan/)

> \- Required property `disabled` added

### switch

**ports**

- List the switch ports for a switch, [getDeviceSwitchPorts](https://developer.cisco.com/meraki/api-v1/get-device-switch-ports/)
- Return a switch port, [getDeviceSwitchPort](https://developer.cisco.com/meraki/api-v1/get-device-switch-port/)
- Update a switch port, [updateDeviceSwitchPort](https://developer.cisco.com/meraki/api-v1/update-device-switch-port/)

> \- property `stpPortFastTrunk` added

**configTemplates**

- Return all the ports of a switch template, [getOrganizationConfigTemplateSwitchProfilePorts](https://developer.cisco.com/meraki/api-v1/get-organization-config-template-switch-profile-ports/)
- Return a switch template port, [getOrganizationConfigTemplateSwitchProfilePort](https://developer.cisco.com/meraki/api-v1/get-organization-config-template-switch-profile-port/)
- Update a switch template port, [updateOrganizationConfigTemplateSwitchProfilePort](https://developer.cisco.com/meraki/api-v1/update-organization-config-template-switch-profile-port/)

> \- property `stpPortFastTrunk` added

### wireless

**ssids**

- List the MR SSIDs in a network, [getNetworkWirelessSsids](https://developer.cisco.com/meraki/api-v1/get-network-wireless-ssids/)
- Return a single MR SSID, [getNetworkWirelessSsid](https://developer.cisco.com/meraki/api-v1/get-network-wireless-ssid/)
- Update the attributes of an MR SSID, [updateNetworkWirelessSsid](https://developer.cisco.com/meraki/api-v1/update-network-wireless-ssid/)

> \- property `accessControl` added

### organizations

**alerts**

- Return a Summary of Alerts grouped by type and severity, [getOrganizationAssuranceAlertsOverviewByType](https://developer.cisco.com/meraki/api-v1/get-organization-assurance-alerts-overview-by-type/)

> \- property `lastResolvedAt` added

**saml**

- Returns the SAML SSO enabled settings for an organization., [getOrganizationSaml](https://developer.cisco.com/meraki/api-v1/get-organization-saml/)
- Updates the SAML SSO enabled settings for an organization., [updateOrganizationSaml](https://developer.cisco.com/meraki/api-v1/update-organization-saml/)

> \- property `spInitiated` added

## What's Changed

### appliance

**vlans**

- List the VLANs for a Cisco Secure Router network, [getNetworkApplianceVlans](https://developer.cisco.com/meraki/api-v1/get-network-appliance-vlans/)
    -   Summary changed from List the VLANs for an MX netw...

### wireless

**connectionStats**

- Aggregated connectivity info for a given AP on this network, [getDeviceWirelessConnectionStats](https://developer.cisco.com/meraki/api-v1/get-device-wireless-connection-stats/)
    -   Param vlan Deleted
- Aggregated connectivity info for this network, [getNetworkWirelessConnectionStats](https://developer.cisco.com/meraki/api-v1/get-network-wireless-connection-stats/)
    -   Param vlan Deleted

**clients**

- Aggregated connectivity info for this network, grouped by clients, [getNetworkWirelessClientsConnectionStats](https://developer.cisco.com/meraki/api-v1/get-network-wireless-clients-connection-stats/)
    -   Param vlan Deleted
- Aggregated connectivity info for a given client on this network, [getNetworkWirelessClientConnectionStats](https://developer.cisco.com/meraki/api-v1/get-network-wireless-client-connection-stats/)
    -   Param vlan Deleted

**devices**

- Aggregated connectivity info for this network, grouped by node, [getNetworkWirelessDevicesConnectionStats](https://developer.cisco.com/meraki/api-v1/get-network-wireless-devices-connection-stats/)
    -   Param vlan Deleted

**failedConnections**

- List of all failed client connection events on this network in a given time range, [getNetworkWirelessFailedConnections](https://developer.cisco.com/meraki/api-v1/get-network-wireless-failed-connections/)
    -   Param vlan Deleted