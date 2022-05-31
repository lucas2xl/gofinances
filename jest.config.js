module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['./node_modules', './android', './ios'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  verbose: true,
};
