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

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitUser = (email, password) => {
    dispatch(registerUserAction(email, password));
  };
  return (
    <View style={styles.registerView}>
      <View style={styles.registerTopSide}></View>
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
            placeholder={'Name'}
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <Input
            style={{marginBottom: 15}}
            placeholder={'Surname'}
            value={surname}
            onChangeText={(value) => setSurname(value)}
          />
          <Input
            style={{marginBottom: 15}}
            placeholder={'Email'}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            style={{marginBottom: 15}}
            placeholder={'Password'}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Button
            text={'Kayıt Ol'}
            onPress={() => {
              onSubmitUser(email, password);
            }}
          />
        </View>
      </View>
      <View style={styles.registerBottom}></View>
    </View>
  );
};

export default index;
