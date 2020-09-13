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
      <View style={styles.body}>
        <TopArea />
      </View>
      <View style={styles.footer}>
        <MainArea />
      </View>
    </SafeAreaView>
  );
};

Index.navigationOptions = (data) => {
  return {
    headerTitle: 'Zeybek',
  };
};

const mapStateToProps = ({auth}) => {
  const {user, isAuth} = auth;
  return {user, isAuth};
};
export default connect(mapStateToProps, null)(Index);
