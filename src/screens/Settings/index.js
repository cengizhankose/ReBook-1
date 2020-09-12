import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {changePassword} from '../../redux/auth/actions';
import {useDispatch} from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {styles} from './styles';
const Index = () => {
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const handleChangePassword = async () => {
    await changePassword(newPassword, () => {
      setNewPassword('');
      navigation.navigate('AnaSayfa');
    });
  };
  return (
    <View style={styles.pageContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Lütfen yeni şifrenizi yazınız</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => handleChangePassword()}
          text="Yeni Şifreyi Kaydet"
        />
      </View>
      <View style={styles.cancelContainer}>
        <Button onPress={() => navigation.navigate('AnaSayfa')} text="İptal" />
      </View>
    </View>
  );
};

export default Index;
