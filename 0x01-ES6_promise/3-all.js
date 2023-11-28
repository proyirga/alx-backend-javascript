// utils.js
export function uploadPhoto(photo) {
  // Function logic, returns a promise
}

export function createUser(firstName, lastName) {
  // Function logic, returns a promise
}

// main.js
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto(/* some photo data */);
  const userPromise = createUser(/* first name, last name */);

  Promise.all([photoPromise, userPromise])
    .then(([photoResult, userResult]) => {
      // Assuming photoResult and userResult have body, firstName, and lastName properties
      console.log(`Body: ${photoResult.body}`);
      console.log(`First Name: ${userResult.firstName}`);
      console.log(`Last Name: ${userResult.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline:', error);
    });
}

// Call the handleProfileSignup function
handleProfileSignup();

export default handleProfileSignup;
