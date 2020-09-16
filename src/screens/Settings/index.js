import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {changePassword} from '../../redux/auth/actions';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonText from '../../components/ButtonText';
import {styles} from './styles';
import {Colors} from '../../constant/colors/colors';
import {Spinner} from 'native-base';
const Index = () => {
  const {user, uid, changeLoading} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState('');
  const [newImage, setNewImage] = useState(null);
  const navigation = useNavigation();

  const handleChangePassword = async (params) => {
    await dispatch(
      changePassword(params, () => {
        setNewPassword('');
        setNewImage('');
        navigation.navigate('AnaSayfa');
      }),
    );
  };

  const chooseImg = () => {
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
        setNewImage(response.uri);
      }
    });
  };
  return (
    <View style={styles.pageContainer}>
      <View style={styles.top}>
        <Text style={{color: Colors.softPink, fontSize: 28}}>
          Ay<Text style={{color: 'black'}}>arlar</Text>
        </Text>
        <Image
          style={{tintColor: Colors.softPink, marginLeft: 5}}
          source={require('../../constant/images/book.png')}
        />
      </View>
      <View style={styles.body}>
        <View>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              alignSelf: 'center',
            }}
            source={{
              uri: user ? (newImage ? newImage : user.profile_img) : null,
            }}
          />
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            <ButtonText onPress={chooseImg} text="Resim değiştir" />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Input
            style={styles.passInput}
            onChangeText={(text) => setNewPassword(text)}
            value={newPassword}
            placeholder="Yeni şifrenizi giriniz"
          />
        </View>
        {changeLoading ? (
          <Spinner color={Colors.orange} />
        ) : (
          <>
            <View style={styles.btnContainer}>
              <Button
                onPress={async () =>
                  handleChangePassword({newPassword, newImage, uid})
                }
                text="Değişiklikler Kaydet"
                style={styles.saveChangesBtn}
              />
            </View>
            <View style={styles.cancelContainer}>
              <Icon.Button
                name="close"
                size={30}
                backgroundColor={'red'}
                onPress={() => navigation.navigate('AnaSayfa')}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>
                  İptal
                </Text>
              </Icon.Button>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Index;
