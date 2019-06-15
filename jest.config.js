module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ["jest-extended", "regenerator-runtime/runtime", "./jest.setup.js"],
  testMatch: ['<rootDir>/test/**/*.test.js'],
  moduleFileExtensions: ["js", "jsx", "json", "node", "vue"],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  }
}
