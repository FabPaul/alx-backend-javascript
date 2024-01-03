import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photos = uploadPhoto();
  const users = createUser();

  return Promise.all([photos, users]).then((resolve) => {
    console.log(`${resolve[0].body} ${resolve[1].firstName} ${resolve[1].lastName}`);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}
