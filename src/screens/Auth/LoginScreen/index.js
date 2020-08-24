import React from 'react';
import {View, Text} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {changeUserStatus} from '../../../redux/auth/actions';
const index = (props) => {
  console.log(props.isAuth);
  return (
    <View>
      <Text>Login Screen</Text>
      <TouchableHighlight onPress={() => props.changeUserStatus(true)}>
        <Text>Go to Home with Login</Text>
      </TouchableHighlight>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  const {isAuth} = auth;
  return {isAuth};
};

export default connect(mapStateToProps, {changeUserStatus})(index);
