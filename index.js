// Import datejs
import 'datejs';

/**
 * Merges arrays of usernames and adds a merge date.
 * @param  {...any[]} args - An indefinite number of arrays of usernames
 * @returns {Object} - Object with users array and merge date
 */
export function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };

  for (const arr of args) {
    combinedObject.users.push(...arr);
  }

  // Add the current date in "M/d/yyyy" format using DateJS
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}
// TEMP: Test the function directly
const result = combineUsers(
  ['alice', 'bob'],
  ['charlie', 'diana'],
  ['eve']
);

console.log(result);