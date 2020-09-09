import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Home from './screens/Home';
import Search from './screens/Search';
import AuthStackScreens from './screens/Auth/AuthStackScreens';
import Settings from './screens/Settings';
import AddBook from './screens/AddBook';
import BookDetail from './screens/BookDetail';

//Components
import MyTabbar from './components/MyTabbar/myTabbar';
import DrawerLogOut from './components/CostomDrawer';
import {Colors} from './constant/colors/colors';
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
        {!props.isAuth ? (
          <>
            <HomeScreens.Screen name="Home" component={Home} />
          </>
        ) : (
          <HomeScreens.Screen name="AddBook" component={AddBook} />
        )}
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
      <TabsStackScreens.Screen name="Login" component={AuthStackScreens} />
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
      <DrawerStackScreens.Screen name="Mesajlar" component={TabScreens} />
      <DrawerStackScreens.Screen name="Ayarlar" component={Settings} />
    </DrawerStackScreens.Navigator>
  );
  return (
    <NavigationContainer>
      <StackScreens.Navigator>
        <StackScreens.Screen
          name="Dashboard"
          component={DrawerScreens}
          options={{title: 'ReBook'}}
        />
        <StackScreens.Screen name="BookDetail" component={BookDetail} />
      </StackScreens.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({auth}) => {
  const {isAuth} = auth;
  return {isAuth};
};

export default connect(mapStateToProps, null)(Router);
