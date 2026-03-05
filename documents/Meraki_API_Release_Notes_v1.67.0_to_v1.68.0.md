 # Meraki API Release Notes v1.68.0

## Summary

- 7 new operations added
- 36 operations enhanced
- 875 total operations available

## What's New

### appliance

**umbrella**

- Connect a Cisco Umbrella account to this network, [connectNetworkApplianceUmbrellaAccount](https://developer.cisco.com/meraki/api-v1/connect-network-appliance-umbrella-account/)
- Disconnect Umbrella account from this network, [disconnectNetworkApplianceUmbrellaAccount](https://developer.cisco.com/meraki/api-v1/disconnect-network-appliance-umbrella-account/)

### organizations

**integrations**

- Provides a list of integrations that can be enabled for an Organization., [getOrganizationIntegrationsDeployable](https://developer.cisco.com/meraki/api-v1/get-organization-integrations-deployable/)
- Provides a list of integrations enabled for an Organization., [getOrganizationIntegrationsDeployed](https://developer.cisco.com/meraki/api-v1/get-organization-integrations-deployed/)

**sase**

- List of MX networks or templates that can be enrolled into Secure Access, [getOrganizationSaseNetworksEligible](https://developer.cisco.com/meraki/api-v1/get-organization-sase-networks-eligible/)

### wireless

**devices**

- List the zero touch deployments for wireless access points in an organization, [getOrganizationWirelessDevicesProvisioningDeployments](https://developer.cisco.com/meraki/api-v1/get-organization-wireless-devices-provisioning-deployments/)
- Delete a zero touch deployment, [deleteOrganizationWirelessDevicesProvisioningDeployment](https://developer.cisco.com/meraki/api-v1/delete-organization-wireless-devices-provisioning-deployment/)

## What's Updated

### camera

**qualityAndRetention**

- Returns quality and retention settings for the given camera, [getDeviceCameraQualityAndRetention](https://developer.cisco.com/meraki/api-v1/get-device-camera-quality-and-retention/)

> \- property `properties` added

**sense**

- Returns sense settings for a given camera, [getDeviceCameraSense](https://developer.cisco.com/meraki/api-v1/get-device-camera-sense/)
- Returns the MV Sense object detection model list for the given camera, [getDeviceCameraSenseObjectDetectionModels](https://developer.cisco.com/meraki/api-v1/get-device-camera-sense-object-detection-models/)

> \- property `properties` added

> \- property `detectionModelId` added

**videoLink**

- Returns video link to the specified camera, [getDeviceCameraVideoLink](https://developer.cisco.com/meraki/api-v1/get-device-camera-video-link/)

> \- property `properties` added

**wirelessProfiles**

- Returns wireless profile assigned to the given camera, [getDeviceCameraWirelessProfiles](https://developer.cisco.com/meraki/api-v1/get-device-camera-wireless-profiles/)

> \- property `properties` added

**onboarding**

- Fetch onboarding status of cameras, [getOrganizationCameraOnboardingStatuses](https://developer.cisco.com/meraki/api-v1/get-organization-camera-onboarding-statuses/)

> \- property `properties` added

### devices

**multicastRouting**

- Enqueue a job to perform a Multicast routing request for the device, [createDeviceLiveToolsMulticastRouting](https://developer.cisco.com/meraki/api-v1/create-device-live-tools-multicast-routing/)
- Return a Multicast routing live tool job., [getDeviceLiveToolsMulticastRouting](https://developer.cisco.com/meraki/api-v1/get-device-live-tools-multicast-routing/)

> \- property `vrf` added

> \- property `vrfType` added

> \- property `ipVersion` added

### appliance

**vpn**

- Return the third party VPN peers for an organization, [getOrganizationApplianceVpnThirdPartyVPNPeers](https://developer.cisco.com/meraki/api-v1/get-organization-appliance-vpn-third-party-vpnpeers/)
- Update the third party VPN peers for an organization, [updateOrganizationApplianceVpnThirdPartyVPNPeers](https://developer.cisco.com/meraki/api-v1/update-organization-appliance-vpn-third-party-vpnpeers/)

> \- property `ecmpUplinkConfigs` added

### networks

**clients**

- Return the client associated with the given identifier, [getNetworkClient](https://developer.cisco.com/meraki/api-v1/get-network-client/)

> \- property `model` added

### organizations

**splash**

- List Splash Themes, [getOrganizationSplashThemes](https://developer.cisco.com/meraki/api-v1/get-organization-splash-themes/)
- Create a Splash Theme, [createOrganizationSplashTheme](https://developer.cisco.com/meraki/api-v1/create-organization-splash-theme/)

> \- property `isSystemTheme` added

**summary**

- List the client and status overview information for the networks in an organization, [getOrganizationSummaryTopNetworksByStatus](https://developer.cisco.com/meraki/api-v1/get-organization-summary-top-networks-by-status/)

> \- property `group` added

## What's Changed

### appliance

**ports**

- List per-port VLAN settings for all ports of a secure router or security appliance., [getNetworkAppliancePorts](https://developer.cisco.com/meraki/api-v1/get-network-appliance-ports/)
    -   Summary changed from List per-port VLAN settings f...
- Return per-port VLAN settings for a single secure router or security appliance port., [getNetworkAppliancePort](https://developer.cisco.com/meraki/api-v1/get-network-appliance-port/)
    -   Summary changed from Return per-port VLAN settings...
- Update the per-port VLAN settings for a single secure router or security appliance port., [updateNetworkAppliancePort](https://developer.cisco.com/meraki/api-v1/update-network-appliance-port/)
    -   Summary changed from Update the per-port VLAN sett...