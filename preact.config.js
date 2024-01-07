const path = require("path");
const crypto = require("crypto");

/**
 * md4 algorithm is not available anymore in NodeJS 17+ (because of lib SSL 3).
 * In that case, silently replace md4 by md5 algorithm.
 */
try {
  crypto.createHash('md4');
} catch (e) {
  console.warn('Crypto "md4" is not supported anymore by this Node version');
  const origCreateHash = crypto.createHash;
  crypto.createHash = (alg, opts) => {
    return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
  };
}

export default (config) => {
  config.resolve.alias = {
    "@components": path.resolve(__dirname, "./src/components"),
    "@assets": path.resolve(__dirname, "./src/assets"),
    "@routes": path.resolve(__dirname, "./src/routes"),
    "@api": path.resolve(__dirname, "./src/api"),
    "@contexts": path.resolve(__dirname, "./src/contexts"),
    "@hooks": path.resolve(__dirname, "./src/hooks"),
    "@utils": path.resolve(__dirname, "./src/utils"),
    "@src": path.resolve(__dirname, "./src"),
    ...config.resolve.alias,
  };
};
