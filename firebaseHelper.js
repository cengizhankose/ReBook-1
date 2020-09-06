import auth from '@react-native-firebase/auth';

export const registerUser = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const loginUser = (email, password) => {
  auth()
    .singInWithEmailAndPassword(email, password)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
