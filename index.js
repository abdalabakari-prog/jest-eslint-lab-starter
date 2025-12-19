
// test/index.test.js
const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('Utility Functions', () => {
  // capitalizeWords tests
  describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('handles single word input', () => {
      expect(capitalizeWords('javascript')).toBe('Javascript');
    });

    test('returns empty string when input is empty', () => {
      expect(capitalizeWords('')).toBe('');
    });

    test('does not alter already capitalized words', () => {
      expect(capitalizeWords('Hello World')).toBe('Hello World');
    });
  });

  // filterActiveUsers tests
  describe('filterActiveUsers', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Charlie', isActive: true },
    ];

    test('returns only active users', () => {
      expect(filterActiveUsers(users)).toEqual([
        { name: 'Alice', isActive: true },
        { name: 'Charlie', isActive: true },
      ]);
    });

    test('returns empty array if no active users', () => {
      const inactiveUsers = [
        { name: 'Bob', isActive: false },
        { name: 'Dan', isActive: false },
      ];
      expect(filterActiveUsers(inactiveUsers)).toEqual([]);
    });

    test('returns empty array if input is empty', () => {
      expect(filterActiveUsers([])).toEqual([]);
    });
  });

  // logAction tests
  describe('logAction', () => {
    test('logs action with username and timestamp', () => {
      const action = 'login';
      const username = 'Alice';
      const result = logAction(action, username);

      expect(result).toMatch(new RegExp(`User ${username} performed ${action} at`));
    });

    test('includes ISO timestamp format', () => {
      const result = logAction('logout', 'Bob');
      // Rough check for ISO timestamp
      expect(result).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/);
    });
  });
});


module.exports = { capitalizeWords, filterActiveUsers, logAction };
