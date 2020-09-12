import React, {useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import back from '../constant/images/home.png';
import {useDispatch} from 'react-redux';
import {checkUserStatus} from '../redux/auth/actions';
import {useNavigation} from '@react-navigation/native';
const FirstScreen = () => {
  const navigation = useNavigation();
  // @User login durumu burada kontrol edilir, sonrasında yönlendirme yapılır!
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserStatus());
    navigation.replace('Dashboard');
  }, [dispatch]);
  return <ImageBackground source={back} style={{flex: 1}}></ImageBackground>;
};

export default FirstScreen;
