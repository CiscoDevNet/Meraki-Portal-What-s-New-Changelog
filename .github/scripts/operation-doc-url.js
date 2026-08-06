const DOCS_BASE_URL = 'https://developer.cisco.com/meraki/api-v1';

function operationIdToSlug(operationId) {
  return operationId
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

function operationIdToDocUrl(operationId) {
  if (!operationId) return null;
  return `${DOCS_BASE_URL}/${operationIdToSlug(operationId)}/`;
}

module.exports = { operationIdToDocUrl, operationIdToSlug };
