module.exports = {
  transform: {
    '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest', // TypeScriptファイルをテストする場合
  },
  moduleFileExtensions: ['ts'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
  },
}
