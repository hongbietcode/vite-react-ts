import { test, expect } from 'vitest';
import RouterUtils from '.';

test('stock has 13 apples', () => {
    expect(RouterUtils.pathCombine('/', '/a')).toBe('a');
    expect(RouterUtils.pathCombine('/a', '/b')).toBe('a/b');
    expect(RouterUtils.pathCombine('/a/', '/b')).toBe('a/b');
    expect(RouterUtils.pathCombine('/a', '/b/')).toBe('a/b');
    expect(RouterUtils.pathCombine('/a/', '/b/')).toBe('a/b');
    expect(RouterUtils.pathCombine('/a/', '/b/c')).toBe('a/b/c');
});
