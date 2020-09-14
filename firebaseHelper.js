import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const registerUser = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => res.data)
    .catch((err) =>
      Alert.alert('Hata', 'Kayıt sırasında hata oluştu.' + err.message),
    );
};

export const loginUser = (email, password) => {
  auth()
    .singInWithEmailAndPassword(email, password)
    .then((res) => res.data)
    .catch((err) =>
      Alert.alert('Hata', 'Giriş sırasında hata oluştu.' + err.message),
    );
};
