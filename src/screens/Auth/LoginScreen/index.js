import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUserAction} from '../../../redux/auth/actions';

import {View, Text} from 'react-native';

import {connect} from 'react-redux';

import {Colors} from '../../../constant/colors/colors';
import Button from '../../../components/Button/index';

import ReBookLogo from '../../../components/ReBookLogo/index';
import Input from '../../../components/Input/index';
import CheckBox from '../../../components/CheckBox/index';
import AsyncStorage from '@react-native-community/async-storage';

import {styles} from './styles';
import {Spinner} from 'native-base';

const index = (props) => {
  const [isCheck, setIsCheck] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');

  const onLoginUser = (email, password) => {
    dispatch(loginUserAction(email, password));
  };

  return (
    <View style={styles.loginView}>
      <View style={styles.logo}>
        <ReBookLogo textStyle={{color: '#fff'}} color={'#fff'} />
      </View>
      <View style={styles.formArea}>
        <View style={styles.textView}>
          <Text style={styles.formText}>Giriş Yap</Text>
        </View>
        <View style={styles.form}>
          <Input
            style={{
              marginBottom: 15,
              borderRadius: 0,
              borderWidth: 2,
              borderColor: '#CDEAC0',
            }}
            placeholder={'Email'}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            style={{
              marginBottom: 15,
              borderRadius: 0,
              borderWidth: 2,
              borderColor: '#CDEAC0',
            }}
            placeholder={'Password'}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          {props.loading ? (
            <Spinner color={'white'} />
          ) : (
            <Button
              buttonStyle={{borderRadius: 0}}
              text={'Giriş Yap'}
              onPress={() => onLoginUser(email, password)}
            />
          )}
        </View>
        <View style={styles.subInfos}>
          <View style={styles.checkBoxView}>
            <CheckBox
              isCheck={isCheck}
              onPress={() => {
                AsyncStorage.getItem('userInfo')
                  .then((res) => JSON.parse(res))
                  .then((result) => {
                    setEmail(result.email);
                    setPassword(result.password);
                    setIsCheck(true);
                  });
              }}
            />
            <Text>Beni Hatırla</Text>
          </View>
          <View style={styles.ınfoTextView}>
            <Text style={{color: 'white'}}>Hesabın yok mu? </Text>
            <Text
              style={{color: '#CDEAC0'}}
              onPress={() => props.navigation.navigate('Register')}>
              Kayıt ol{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomView2} />
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  const {isAuth, loading} = auth;
  return {isAuth, loading};
};

export default connect(mapStateToProps, {})(index);
