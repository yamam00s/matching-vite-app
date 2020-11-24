module.exports = {
  transform: {
    '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  moduleFileExtensions: ['ts', 'vue'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
  },
}
