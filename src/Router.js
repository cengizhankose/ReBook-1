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
import AuthStackScreens from './screens/Auth/AuthStackScreens';
import Settings from './screens/Settings';
import AddBook from './screens/AddBook';

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
          <HomeScreens.Screen name="Home" component={Home} />
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
    <DrawerStackScreens.Navigator initialRouteName="Drawer">
      <DrawerStackScreens.Screen name="Drawer" component={TabScreens} />
      <DrawerStackScreens.Screen name="Settings" component={Settings} />
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
      </StackScreens.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({auth}) => {
  const {isAuth} = auth;
  return {isAuth};
};
export default connect(mapStateToProps, null)(Router);
