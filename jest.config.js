module.exports = {
  transform: {
    '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
}
