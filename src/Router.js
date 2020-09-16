import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Home from './screens/Home';
import Search from './screens/Search';
import Wishlist from './screens/Wishlist';
import AuthStackScreens from './screens/Auth/AuthStackScreens';
import Settings from './screens/Settings';
import AddBook from './screens/AddBook';
import BookDetail from './screens/BookDetail';
import MyBooks from './screens/MyBooks';
import BookEdit from './screens/BookEdit/index';
import ChatRoom from './screens/Messages/ChatRoom';
import MessagesList from './screens/Messages/MessagesList';

//Components
import MyTabbar from './components/MyTabbar/myTabbar';
import DrawerLogOut from './components/CostomDrawer';
import {Colors} from './constant/colors/colors';
import FirstScreen from './screens/FirstScreen';

// Navigation fonksiyonlarının açılması.
// @TODO: Bu sayfanın daha temiz olması için tekrar gözden geçirilebilir.

const TabsStackScreens = createBottomTabNavigator();
const DrawerStackScreens = createDrawerNavigator();
const StackScreens = createStackNavigator();
const HomeScreens = createStackNavigator();

const Router = (props) => {
  const HomeScreensNavigation = () => {
    return (
      <HomeScreens.Navigator>
        <HomeScreens.Screen
          props={props}
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </HomeScreens.Navigator>
    );
  };
  // Tab ekranları tanımlanıyor.
  const TabScreens = () => (
    <TabsStackScreens.Navigator
      initialRouteName="HomeScreen"
      tabBar={(props) => <MyTabbar {...props} />}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <TabsStackScreens.Screen name="Search" component={Search} />
      <TabsStackScreens.Screen
        name="HomeScreen"
        component={HomeScreensNavigation}
      />
      {props.isAuth ? (
        <TabsStackScreens.Screen
          name="Wishlist"
          component={Wishlist}
          options={{headerShown: false}}
        />
      ) : (
        <TabsStackScreens.Screen
          name="Login"
          component={AuthStackScreens}
          options={{headerShown: false}}
        />
      )}
    </TabsStackScreens.Navigator>
  );

  // Drawer 'da çıkacak ekranlar tanımlanıyor.
  const DrawerScreens = () => (
    <DrawerStackScreens.Navigator
      drawerContent={(props) => <DrawerLogOut {...props} />}
      drawerContentOptions={{
        contentContainerStyle: {
          justifyContent: 'space-between',
          flex: 1,
        },
        itemStyle: {
          alignItems: 'center',
          borderBottomColor: 'lightgray',
          borderBottomWidth: 0.5,
        },
        labelStyle: {
          color: '#000',
          fontSize: 16,
        },
        activeTintColor: Colors.orange,
      }}>
      <DrawerStackScreens.Screen
        options={{title: 'Ana Sayfa'}}
        name="AnaSayfa"
        component={TabScreens}
      />

      <DrawerStackScreens.Screen name="Ayarlar" component={Settings} />
      <DrawerStackScreens.Screen name="Kitaplarım" component={MyBooks} />
      <DrawerStackScreens.Screen name="Mesajlar" component={MessagesList} />
    </DrawerStackScreens.Navigator>
  );
  return (
    <NavigationContainer>
      <StackScreens.Navigator initialRouteName="FirstScreen">
        <StackScreens.Screen
          name="Dashboard"
          component={DrawerScreens}
          options={{title: 'ReBook', headerShown: false, headerLeft: null}}
        />
        <StackScreens.Screen
          options={{title: 'Kitap Ayrıntıları'}}
          name="BookDetail"
          component={BookDetail}
        />
        <StackScreens.Screen
          options={{headerShown: false}}
          name="FirstScreen"
          component={FirstScreen}
        />

        <StackScreens.Screen
          options={{title: 'Kitap Düzenle'}}
          name="BookEdit"
          component={BookEdit}
        />
        <DrawerStackScreens.Screen
          name="KitapEkle"
          component={AddBook}
          options={{title: 'Kitap Ekle'}}
        />
        <StackScreens.Screen
          name="Messages"
          component={ChatRoom}
          options={{headerShown: false}}
        />
      </StackScreens.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({auth}) => {
  const {isAuth, user} = auth;
  return {isAuth, user};
};

export default connect(mapStateToProps, null)(Router);
