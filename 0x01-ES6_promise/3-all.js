import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${user.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
