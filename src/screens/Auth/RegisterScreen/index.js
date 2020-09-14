import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {registerUserAction} from '../../../redux/auth/actions';
import Icon from 'react-native-vector-icons/FontAwesome';

import ReBookLogo from '../../../components/ReBookLogo/index';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button/index';

import {styles} from './styles';
import {Colors} from '../../../constant/colors/colors';
import {Spinner} from 'native-base';

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
    <View style={styles.registerView}>
      <View style={styles.registerTopSide}>
        <View style={styles.registeLogo}>
          <ReBookLogo color={'#fff'} />
        </View>
      </View>

      <View style={styles.registerForm}>
        <View style={styles.textView}>
          <Text style={styles.formText}>Kayıt Ol</Text>
        </View>
        <View style={styles.form}>
          <Input
            style={{marginBottom: 15}}
            placeholder={'Name Surname'}
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <Input
            style={{marginBottom: 15}}
            placeholder={'Username'}
            value={username}
            onChangeText={(value) => setUsername(value)}
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
                text={'Kayıt Ol'}
                onPress={() => {
                  onSubmitUser({email, password, name, username, profileImage});
                }}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  const {registerLoading} = auth;

  return registerLoading;
};
export default Index;
