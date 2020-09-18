import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../../svg/LogoSvg';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import TopArea from './TopArea';
import MainArea from './MainArea';
const Index = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{width: 50, height: 50}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 200}}
              source={
                props.isAuth
                  ? {
                      uri: props.user.profile_img,
                    }
                  : require('../../constant/images/profile.png')
              }
            />
          </View>
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
