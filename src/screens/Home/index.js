import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../../svg/LogoSvg';
import {connect} from 'react-redux';

import {styles} from './styles';
import TopArea from './TopArea';
import MainArea from './MainArea';
const Index = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <TouchableOpacity>
          {props.user && (
            <Image
              style={{width: 48, height: 48}}
              source={{uri: props.user.profile_img}}
            />
          )}
        </TouchableOpacity>
        <Logo />
      </View>
      <View style={styles.body}>
        <TopArea />
      </View>
      <View style={styles.footer}>
        <MainArea />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({auth}) => {
  const {user, isAuth} = auth;
  return {user, isAuth};
};
export default connect(mapStateToProps, null)(Index);
