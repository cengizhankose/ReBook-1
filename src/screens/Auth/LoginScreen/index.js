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

import {styles} from './styles';

const index = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState('taha@gmail.com');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('taha123');

  const onLoginUser = (email, password) => {

    dispatch(loginUserAction(email, password));
  };

  return (
    <View style={styles.loginView}>
      <View style={styles.logo}>
        <ReBookLogo color={'#fff'} />
      </View>
      <View style={styles.formArea}>
        <View style={styles.textView}>
          <Text style={styles.formText}>Giriş Yap</Text>
        </View>
        <View style={styles.form}>
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
            text={'Giriş Yap'}
            onPress={() => onLoginUser(email, password)}
          />
        </View>
        <View style={styles.subInfos}>
          <View style={styles.checkBoxView}>
            <CheckBox />
            <Text>Beni Hatırla</Text>
          </View>
          <View style={styles.ınfoTextView}>
            <Text>Hesabın yok mu? </Text>
            <Text onPress={() => props.navigation.navigate('Register')}>
              Kayıt ol{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomView} />
      <View style={styles.bottomView2} />
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  const {isAuth} = auth;
  return {isAuth};
};

export default connect(mapStateToProps, {})(index);
