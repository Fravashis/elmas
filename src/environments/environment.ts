// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  nodeApi: "api.love4src.com",
  uploadImageHostname: "node.deso.org",
  verificationEndpointHostname: "https://node.deso.org",
  uploadVideoHostname: "node.deso.org",
  identityURL: "https://identity.deso.org",
  supportEmail: "",
  dd: {
    apiKey: "DCEB26AC8BF47F1D7B4D87440EDCA6",
    jsPath: "https://diamondapp.com/tags.js",
    ajaxListenerPath: "diamondapp.com/api",
    endpoint: "https://diamondapp.com/js/",
  },
  amplitude: {
    key: "",
    domain: "",
  },
  node: {
    name: "Diamond",
    url: "https://diamondapp.com",
    logoAssetDir: "/assets/diamond/",
  },
};
