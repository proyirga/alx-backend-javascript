import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const result = [];

  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((res) => {
        result.push({
          status: res.status,
          value: res.status === 'fulfilled' ? res.value : res.reason.message,
        });
      });
      return result;
    })
    .catch(() => {
      result.push({
        status: 'rejected',
        value: 'Signup system offline',
      });
      return result;
    });
}
