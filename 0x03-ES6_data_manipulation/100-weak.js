// Create a WeakMap instance
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Ensure the endpoint parameter has both protocol and name properties
  if (!endpoint || typeof endpoint.protocol !== 'string' || typeof endpoint.name !== 'string') {
    throw new Error('Invalid endpoint');
  }

  // Initialize the count for the endpoint
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    throw new Error(`Endpoint ${endpoint.name} load is high.`);
  }

  // Perform the API query (replace this with actual API query logic)
  console.log(`Querying ${endpoint.protocol} endpoint: ${endpoint.name}`);
  // ... (replace this with actual API query logic)

  // Return the result of the API query (replace this with actual result)
  return `Result for ${endpoint.name}`;
}
export default queryAPI;
