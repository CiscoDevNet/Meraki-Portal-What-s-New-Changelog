const assert = require('node:assert/strict');
const test = require('node:test');

test('preserves acronym and numeric tokens in operation documentation slugs', () => {
  const { operationIdToDocUrl } = require('./operation-doc-url');

  const cases = [
    ['getOrganizationWirelessClientsUsageByNetwork', 'get-organization-wireless-clients-usage-by-network'],
    ['createNetworkApplianceInterfacesL3', 'create-network-appliance-interfaces-l3'],
    ['getOrganizationApplianceVpnThirdPartyVPNPeers', 'get-organization-appliance-vpn-third-party-vpn-peers'],
    ['getNetworkWirelessSsidHotspot20', 'get-network-wireless-ssid-hotspot20'],
    ['aurora2OrganizationSwitchSwitchTemplates', 'aurora2-organization-switch-switch-templates']
  ];

  for (const [operationId, slug] of cases) {
    assert.equal(
      operationIdToDocUrl(operationId),
      `https://developer.cisco.com/meraki/api-v1/${slug}/`
    );
  }
});
