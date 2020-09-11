import React from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

import SearchIcon from '../../svg/SearchWhiteSvg';
import HomeIcon from '../../svg/LogoBookSvg';
import WishlistIcon from '../../svg/WishlistSvg';

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles.tabbar}>
            {label === 'HomeScreen' && (
              <View
                key={index}
                style={[styles.sohbet, isFocused && styles.chooseSohbet]}>
                <TouchableOpacity onPress={onPress}>
                  <View
                    style={[
                      styles.inlineView,
                      {backgroundColor: isFocused ? '#FFAC81' : '#FF928B'},
                    ]}>
                    <HomeIcon style={styles.sameIcon} />
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {label === 'Search' && (
              <View
                key={index}
                style={[styles.sohbet, isFocused && styles.chooseSohbet]}>
                <TouchableOpacity onPress={onPress}>
                  <View
                    style={[
                      styles.inlineView,
                      {backgroundColor: isFocused ? '#FFAC81' : '#FF928B'},
                    ]}>
                    <SearchIcon style={styles.sameIcon} />
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {label === 'Wishlist' && (
              <View
                key={index}
                style={[styles.sohbet, isFocused && styles.chooseSohbet]}>
                <TouchableOpacity onPress={onPress}>
                  <View
                    style={[
                      styles.inlineView,
                      {backgroundColor: isFocused ? '#FFAC81' : '#FF928B'},
                    ]}>
                    <WishlistIcon style={styles.sameIcon} />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

export default MyTabBar;
