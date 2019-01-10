const dev = {};
const prod = {};
const config = __DEV__ ? dev : prod;

export default config;
