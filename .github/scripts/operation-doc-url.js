const DOCS_BASE_URL = 'https://developer.cisco.com/meraki/api-v1';
const OPERATION_DOC_PATH_OVERRIDES = new Map([
  ['createDeviceLiveToolsPing', 'create-device-live-tools-ping'],
  ['createOrganizationActionBatch', 'action-batches-overview'],
  ['batchOrganizationCampusGatewayClustersTunnelingByClusterByNetworkUpdate', 'batch-organization-campus-gateway-clusters-tunneling-update']
]);

function operationIdToSlug(operationId) {
  const operationName = operationId.replace(/^mcf(?=[A-Z])/, '');
  return operationName
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([lL])([23])/g, '$1-$2')
    .toLowerCase();
}

function operationIdToDocUrl(operationId) {
  if (!operationId) return null;
  const slug = OPERATION_DOC_PATH_OVERRIDES.get(operationId) || operationIdToSlug(operationId);
  return `${DOCS_BASE_URL}/${slug}/`;
}

module.exports = { operationIdToDocUrl, operationIdToSlug };
