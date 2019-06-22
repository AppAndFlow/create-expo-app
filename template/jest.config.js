const { defaults } = require('ts-jest/presets');

module.exports = {
  ...defaults,
  preset: 'jest-expo',
  setupFiles: ['./src/jest/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|expo(nent)?|@expo(nent)?/.*|@unimodules|react-navigation|sentry-expo|@appandflow))',
  ],
};
