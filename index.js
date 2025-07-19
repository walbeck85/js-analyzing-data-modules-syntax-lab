// index.js

// Using createRequire to enable CommonJS 'require()' in an ES Module file.
// This is necessary because 'datejs' is loaded via 'require()' as per README instructions,
// and 'npm test' runs in ES Module mode with --experimental-vm-modules.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('datejs'); // This loads datejs into the environment.

/**
 * Merges arrays of usernames and adds a merge date.
 * @param  {...any[]} args - An indefinite number of arrays of usernames.
 * - 'args' will take the form of an array of arrays.
 * - Each internal array contains usernames (strings).
 * @returns {Object} - Object with a 'users' array and a 'merge_date' attribute.
 */
export function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };

  // Loop through each argument (which should be an array of usernames as per lab instructions)
  for (const arr of args) {
    // Ensure 'arr' is indeed an array before spreading its contents.
    // (This check isn't strictly required by lab instructions, but good practice if inputs vary.)
    if (Array.isArray(arr)) {
      // Use spread operator to merge usernames from each array into combinedObject.users
      combinedObject.users.push(...arr);
    } else {
      // If a non-array argument is passed, the original lab implied arrays of arrays.
      // For strict adherence to "array of arrays," this 'else' block could be omitted,
      // or it could throw an error. For now, we'll assume valid array inputs.
      // If the lab tests pass strings, this logic is fine.
      // However, for the original lab scope, let's revert to assuming only arrays of arrays.
    }
  }

  // Add the current date in "M/d/yyyy" format using DateJS
  // datejs extends the native Date object's prototype with toString(format)
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // Return the combined object
  return combinedObject;
}