import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "{url}/api/{endpoint}",
  apiKeyHeader: "x-api-key",
  proxyHandler: genericProxyHandler,

  mappings: {
    vehicleinfo: {
      endpoint: "vehicle/info",
    },
  },
};

export default widget;
