const repos = require('./repos.js')

test('visibility', () => {
  expect(repos.getVisibilityText(0)).toBe('private')
  expect(repos.getVisibilityText(2)).toBe('public')
  expect(repos.getVisibilityText(-1)).toBe('unknown')
})