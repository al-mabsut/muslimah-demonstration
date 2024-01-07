module.exports = {
  process() {
    // https://jestjs.io/docs/upgrading-to-jest28#transformer
    return { code: 'module.exports = {};' };
  },
  getCacheKey() {
    // The output is always the same.
    return 'fileMock';
  },
};