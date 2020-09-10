import React from 'react';
import {Alert, View, Image, Text} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {styles} from './styles';
const index = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.imgContainer}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={{
              uri:
                'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.name}>Cengizhan Köse</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.mail}>cengizhan@gmail.com</Text>
        </View>
      </View>
      <View>
        {
          // DrawerItemList Screenleri listelemektedir.
        }
        <DrawerItemList {...props} />
      </View>

      <DrawerItem
        style={styles.logOut}
        labelStyle={styles.label}
        label="Oturumu Kapat"
        onPress={() => Alert.alert('Emin misiniz?', 'Oturum kapanacak!')}
      />
    </DrawerContentScrollView>
  );
};

export default index;
