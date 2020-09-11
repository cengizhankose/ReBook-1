import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../../svg/LogoSvg';
import {connect} from 'react-redux';
import {getBook} from '../../redux/addBook/actions';

import {styles} from './styles';
import TopArea from './TopArea';
import MainArea from './MainArea';
const index = (props) => {
  // console.log('home tarafı', props.books);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../img/dummy.png')} />
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

const mapStateToProps = ({auth, addBook}) => {
  const {uid} = auth;
  const {bookUploading} = addBook;
  return {uid, bookUploading};
};

export default connect(mapStateToProps, {getBook})(index);
