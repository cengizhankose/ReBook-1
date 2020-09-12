import React, {useEffect} from 'react';
import {Alert, View, Image, Text, TouchableOpacity} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/core';
import {connect, useDispatch} from 'react-redux';

import {styles} from './styles';
import {logOutAction} from '../../redux/auth/actions';
import {Colors} from '../../constant/colors/colors';

const Index = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  if (props.user) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.imgContainer}>
            <Image
              style={{width: 100, height: 100, borderRadius: 50}}
              source={{
                uri: props.user.profile_img,
              }}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.name}>{props.user.name}</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.mail}>{props.user.email}</Text>
          </View>
        </View>
        <View>
          {
            // DrawerItemList Screenleri listelemektedir.
          }
          <DrawerItemList {...props} />
        </View>
        <DrawerItem
          style={styles.kitap}
          labelStyle={styles.kitapEkle}
          label="Kitap Ekle"
          onPress={() => navigation.navigate('KitapEkle')}
        />
        <DrawerItem
          style={styles.logOut}
          labelStyle={styles.label}
          label="Oturumu Kapat"
          onPress={() =>
            Alert.alert(
              'Emin misin?',
              'Oturumu kapatmak istediğinize emin misiniz?',
              [
                {
                  text: 'Evet',
                  onPress: () => dispatch(logOutAction()),
                },
                {
                  text: 'Vazgeç',
                },
              ],
            )
          }
        />
      </DrawerContentScrollView>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, color: Colors.orange}}>
          Lütfen giriş yapın.
        </Text>
      </TouchableOpacity>
    );
  }
};

const mapStateToProps = ({auth}) => {
  const {user, isAuth} = auth;
  return {user, isAuth};
};

export default connect(mapStateToProps, null)(Index);
