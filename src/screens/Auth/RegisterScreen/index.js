import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

import {registerUserAction} from '../../../redux/auth/actions';

import ReBookLogo from '../../../components/ReBookLogo/index';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button/index';

import {styles} from './styles';

const index = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('taha');
  const [username, setUsername] = useState('zeybek');
  const [email, setEmail] = useState('taha@gmail.com');
  const [password, setPassword] = useState('taha123');

  const onSubmitUser = (email, password) => {
    dispatch(registerUserAction(email, password));
  };
  return (
    <View style={styles.registerView}>
      <View style={styles.registerTopSide} />
      <View style={styles.registeLogo}>
        <ReBookLogo color={'#fff'} />
      </View>
      <View style={styles.registerForm}>
        <View style={styles.textView}>
          <Text style={styles.formText}>Kayıt Ol</Text>
        </View>
        <View style={styles.form}>
          <Input
            style={{marginBottom: 15}}
            placeholder={'Adı Soyadı'}
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <Input
            style={{marginBottom: 15}}
            placeholder={'Kullanıcı Adı'}
            value={username}
            onChangeText={(value) => setUsername(value)}
          />
          <Input
            style={{marginBottom: 15}}
            placeholder={'E-posta'}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            placeholder={'Şifre'}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Button
            text={'Kayıt Ol'}
            onPress={() => {
              onSubmitUser({
                name,
                username,
                email,
                password,
              });
            }}
          />
        </View>
      </View>
      <View style={styles.registerBottom}></View>
    </View>
  );
};

export default index;
