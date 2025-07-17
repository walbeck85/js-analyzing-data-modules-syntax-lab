import { combineUsers } from './index.js';
import 'datejs';

describe('combineUsers function return', () => {
  test('merges multiple arrays and adds merge date', () => {
    const result = combineUsers(['alice'], ['bob'], ['charlie']);
    expect(result.users).toEqual(['alice', 'bob', 'charlie']);
    expect(result).toHaveProperty('merge_date');
  });

  test('returns empty array when no arguments passed', () => {
    const result = combineUsers();
    expect(result.users).toEqual([]);
    expect(result).toHaveProperty('merge_date');
  });
});