import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {registerUserAction} from '../../../redux/auth/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import ReBookLogo from '../../../components/ReBookLogo/index';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button/index';

import {styles} from './styles';
import {Colors} from '../../../constant/colors/colors';
import {Spinner} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Index = () => {
  const dispatch = useDispatch();
  const {registerLoading} = useSelector((state) => state.auth);

  const [name, setName] = useState('test');
  const [username, setUsername] = useState('test');
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('test123');
  const [profileImage, setProfileImage] = useState(
    'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
  );

  const chooseBook = () => {
    const options = {
      title: 'Profil resminizi seçin seçin',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.4,
      allowsEditing: true,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        Alert.alert(
          'Hata',
          'Yükleme esnasında hata oluştu. \nTekrar Deneyiniz.' + response.error,
        );
      } else {
        setProfileImage(response.uri);
      }
    });
  };
  const onSubmitUser = (params) => {
    dispatch(registerUserAction(params));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.registerView}>
        <View style={styles.registerTopSide}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View style={styles.registeLogo}>
              <ReBookLogo textStyle={{color: '#fff'}} color={'#fff'} />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.registerForm}>
          <View style={styles.textView}>
            <Text style={styles.formText}>Kayıt Ol</Text>
          </View>
          <View style={styles.form}>
            <Input
              style={{
                marginBottom: 15,
                borderRadius: 0,
                borderWidth: 2,
                borderColor: '#CDEAC0',
              }}
              placeholder={'Name Surname'}
              value={name}
              onChangeText={(value) => setName(value)}
            />
            <Input
              style={{
                marginBottom: 15,
                borderRadius: 0,
                borderWidth: 2,
                borderColor: '#CDEAC0',
              }}
              placeholder={'Username'}
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
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
            <Image style={styles.profileImg} source={{uri: profileImage}} />
            {registerLoading ? (
              <Spinner color={'white'} />
            ) : (
              <>
                <View>
                  <Icon.Button
                    onPress={chooseBook}
                    backgroundColor={Colors.orange}
                    name="plus"
                    color={Colors.orange}
                    style={styles.addBtn}>
                    <Text style={styles.btnText}>Profil Resmini Ekle</Text>
                  </Icon.Button>
                </View>
                <Button
                  buttonStyle={{borderRadius: 0}}
                  text={'Kayıt Ol'}
                  onPress={() => {
                    onSubmitUser({
                      email,
                      password,
                      name,
                      username,
                      profileImage,
                    });
                  }}
                />
              </>
            )}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = ({auth}) => {
  const {registerLoading} = auth;

  return registerLoading;
};
export default Index;
