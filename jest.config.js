module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/**/specs/**/*.(spec|test).ts?(x)'],
  // collectCoverage: true,
  // collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**'],
}
