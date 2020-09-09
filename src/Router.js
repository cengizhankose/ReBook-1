import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Home from './screens/Home';
import Search from './screens/Search';
import Wishlist from './screens/Wishlist'
import AuthStackScreens from './screens/Auth/AuthStackScreens';
import Settings from './screens/Settings';
import AddBook from './screens/AddBook';
import MyTabbar from './components/TabBar/index';
import Messages from './screens/Message/Messages/index'
import MessageDetail from './screens/Message/MessageDetail/index'

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
          <HomeScreens.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
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
      tabBar={(props) => <MyTabbar {...props} />}>
      <TabsStackScreens.Screen name="Search" component={Search} />
      <TabsStackScreens.Screen
        name="HomeScreen"
        component={HomeScreensNavigation}
      />
      <TabsStackScreens.Screen name="Wishlist" component={Wishlist} options={{headerShown: false}}/>
    </TabsStackScreens.Navigator>
  );

  // Drawer 'da çıkacak ekranlar tanımlanıyor.
  const DrawerScreens = () => (
    <DrawerStackScreens.Navigator initialRouteName="Drawer">
      <DrawerStackScreens.Screen name="Drawer" component={TabScreens} />
      <DrawerStackScreens.Screen name="Settings" component={Settings} />
      <DrawerStackScreens.Screen name="Messages" component={MessageDetail} />
    </DrawerStackScreens.Navigator>
  );
  return (
    <NavigationContainer>
      <StackScreens.Navigator>
        <StackScreens.Screen
          name="Dashboard"
          component={DrawerScreens}
          options={{title: 'ReBook', headerShown: false}}
        />
      </StackScreens.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({auth}) => {
  const {isAuth} = auth;
  return {isAuth};
};
export default connect(mapStateToProps, null)(Router);
