 # Meraki API Release Notes v1.67.0

## Summary

- 4 new operations added
- 24 operations enhanced
- 866 total operations available

## What's New

### organizations

**inventory**

- Fetch the EOX summary for an organization, including counts of devices that are end-of-sale, end-of-support, and end-of-support-soon., [getOrganizationInventoryDevicesEoxOverview](https://developer.cisco.com/meraki/api-v1/get-organization-inventory-devices-eox-overview/)

**networks**

- Move networks from one organization to another, [createNetworkMove](https://developer.cisco.com/meraki/api-v1/create-network-move/)

### wireless

**radio**

- Update the AutoRF settings for a wireless network, [updateNetworkWirelessRadioRrm](https://developer.cisco.com/meraki/api-v1/update-network-wireless-radio-rrm/)
- List the AutoRF settings of an organization by network, [getOrganizationWirelessRadioRrmByNetwork](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-radio-rrm-by-network/)

## What's Updated

### organizations

**policyObjects**

- Lists Policy Objects belonging to the organization., [getOrganizationPolicyObjects](https://developer.cisco.com/meraki/api-v1/get-organization-policy-objects/)
- Lists Policy Object Groups belonging to the organization., [getOrganizationPolicyObjectsGroups](https://developer.cisco.com/meraki/api-v1/get-organization-policy-objects-groups/)

> \- property `items` added

**apiRequests**

- List the API requests made by an organization, [getOrganizationApiRequests](https://developer.cisco.com/meraki/api-v1/get-organization-api-requests/)

> \- property `x`\-nullable added

**floorPlans**

- List auto locate details for each device in your organization, [getOrganizationFloorPlansAutoLocateDevices](https://developer.cisco.com/meraki/api-v1/get-organization-floor-plans-auto-locate-devices/)

> \- property `name` added

**inventory**

- Return the device inventory for an organization, [getOrganizationInventoryDevices](https://developer.cisco.com/meraki/api-v1/get-organization-inventory-devices/)
- Return a single device from the inventory of an organization, [getOrganizationInventoryDevice](https://developer.cisco.com/meraki/api-v1/get-organization-inventory-device/)

> \- param `eoxStatuses` added

> \- property `eox` added

### devices

**arpTable**

- Return an ARP table live tool job., [getDeviceLiveToolsArpTable](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-arp-table/)

> \- property `x`\-nullable added

### switch

**alternateManagementInterface**

- Return the switch alternate management interface for the network, [getNetworkSwitchAlternateManagementInterface](https://developer.cisco.com/meraki/api-v1/get-network-switch-alternate-management-interface/)
- Update the switch alternate management interface for the network, [updateNetworkSwitchAlternateManagementInterface](https://developer.cisco.com/meraki/api-v1/update-network-switch-alternate-management-interface/)

> \- property `useOobMgmt` added

**dhcpServerPolicy**

- Return the DHCP server settings, [getNetworkSwitchDhcpServerPolicy](https://developer.cisco.com/meraki/api-v1/get-network-switch-dhcp-server-policy/)
- Update the DHCP server settings, [updateNetworkSwitchDhcpServerPolicy](https://developer.cisco.com/meraki/api-v1/update-network-switch-dhcp-server-policy/)

> \- property `alwaysAllowedServers` added

### wireless

**settings**

- Return the wireless settings for a network, [getNetworkWirelessSettings](https://developer.cisco.com/meraki/api-v1/get-network-wireless-settings/)
- Update the wireless settings for a network, [updateNetworkWirelessSettings](https://developer.cisco.com/meraki/api-v1/update-network-wireless-settings/)

> \- property `multicastToUnicastConversion` Add...

> \- property `multicastToUnicastConversion` val...

## What's Changed

### organizations

**policyObjects**

- Creates a new Policy Object Group., [createOrganizationPolicyObjectsGroup](https://developer.cisco.com/meraki/api-v1/create-organization-policy-objects-group/)
    -   paths//organizations/{organizationId}/policyObject...
- Updates a Policy Object Group., [updateOrganizationPolicyObjectsGroup](https://developer.cisco.com/meraki/api-v1/update-organization-policy-objects-group/)
    -   paths//organizations/{organizationId}/policyObject...

**floorPlans**

- List auto locate details for each device in your organization, [getOrganizationFloorPlansAutoLocateDevices](https://developer.cisco.com/meraki/api-v1/get-organization-floor-plans-auto-locate-devices/)
    -   Property status Deleted

### appliance

**vlans**

- List the VLANs for a Security Appliance network, [getNetworkApplianceVlans](https://developer.cisco.com/meraki/api-v1/get-network-appliance-vlans/)
    -   Summary changed from List the VLANs for a Cisco Se...

### General

- API /organizations/{organizationId}/nac/certificates/authorities/crls, [undefined](/organizations/{organizationId}/nac/certificates/authorities/crls)