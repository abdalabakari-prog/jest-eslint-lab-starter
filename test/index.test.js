const {
    capitalizeWords,
    filterActiveUsers,
    logAction
} = require('../index');

describe('capitalizeWords', function () {
    test('capitalizes each word in a sentence', function () {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('handles a single word', function () {
        expect(capitalizeWords('hello')).toBe('Hello');
    });

    test('handles empty string', function () {
        expect(capitalizeWords('')).toBe('');
    });

    test('returns empty string for non-string input', function () {
        expect(capitalizeWords(null)).toBe('');
        expect(capitalizeWords(123)).toBe('');
    });
});

describe('filterActiveUsers', function () {
    test('returns only active users', function () {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false }
        ];

        const result = filterActiveUsers(users);

        expect(result).toEqual([
            { name: 'Alice', isActive: true }
        ]);
    });

    test('returns empty array if no active users exist', function () {
        const users = [
            { name: 'Bob', isActive: false }
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('returns empty array for invalid input', function () {
        expect(filterActiveUsers(null)).toEqual([]);
        expect(filterActiveUsers({})).toEqual([]);
    });
});

describe('logAction', function () {
    test('logs correct message format', function () {
        const result = logAction('login', 'Alice');

        expect(result).toContain('User Alice performed login at ');
    });

    test('includes a valid ISO timestamp', function () {
        const result = logAction('logout', 'Bob');
        const timestamp = result.split(' at ')[1];

        expect(new Date(timestamp).toISOString()).toBe(timestamp);
    });
});
