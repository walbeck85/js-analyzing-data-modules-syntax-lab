// test/index.test.js
// Tests for the combineUsers function

// Use ES Module import syntax for combineUsers from index.js
// The .js extension is required for relative imports in ESM.
import { combineUsers } from '../index.js'; 

// Import datejs directly into the test file's context, as tests also rely on its extensions (e.g., Date.today())
import 'datejs'; 

// Jest test suite for combineUsers function basics
describe('combineUsers function basics', () => {
  // Basic tests to ensure function returns object and has expected properties
  const testCombineBasic = combineUsers(['alice'], ['bob']);

  test('should return an object', () => {
    expect(typeof testCombineBasic).toBe('object');
  });

  test('should have the properties users and merge_date', () => {
    expect(testCombineBasic).toHaveProperty('users');
    expect(testCombineBasic).toHaveProperty('merge_date');
  });
});


// Jest test suite for comprehensive combineUsers functionality
describe('combineUsers function comprehensive tests', () => {
  // Define test data for comprehensive merging and date verification
  const combineWithMultipleArrays = combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"]);
  const combineWithTwoArrays = combineUsers(["test1"],["test2"]);
  const combineWithEmptyArrays = combineUsers([]); // Testing with an empty array of arrays

  test('should merge all given arrays', () => {
    expect(combineWithMultipleArrays.users).toStrictEqual(["Jim3","Pam5","Dwight77","Michael6","Eleanor22","Chidi202","Jack_jack","Julia_Oreo", "Bill_bore"]);
    expect(combineWithTwoArrays.users).toStrictEqual(["test1","test2"]);
    expect(combineWithEmptyArrays.users).toStrictEqual([]);
  });

  test('should contain today\'s date in M/d/yyyy format', () => {
    // This test relies on datejs for Date.today() and toString("M/d/yyyy")
    // It asserts that the merge_date matches the current date formatted by datejs.
    expect(combineWithMultipleArrays.merge_date).toBe(new Date().toString("M/d/yyyy"));
  });

  test('should handle no arguments gracefully, returning an empty users array', () => {
    const resultNoArgs = combineUsers();
    expect(resultNoArgs.users).toEqual([]);
    expect(resultNoArgs).toHaveProperty('merge_date'); // Should still have a merge_date
  });
});