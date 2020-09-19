import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {
  getRooms,
  getAllUsers,
  getUserAction,
} from '../../../redux/messages/actions';

import Logo from '../../../svg/MessagesLogoSvg';
import Message from '../../../components/MessageContainer/index';

import {connect} from 'react-redux';

const Index = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    props.getRooms(props.uid);
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <Logo style={{margin: 20, marginBottom: 18}} />
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#FF928B',
        }}
      />
      <View>
        <FlatList
          keyExtractor={(item) => item.path}
          data={props.chatRooms}
          renderItem={({item}) => (
            <Message
              firstLetters={
                item.senderUser.id === props.uid
                  ? item.recieverUser.name.charAt(0).toUpperCase()
                  : item.senderUser.name.charAt(0).toUpperCase()
              }
              lastMessage={
                item.senderUser.id === props.uid
                  ? item.recieverUser.name
                  : item.senderUser.name
              }
              onPress={() => {
                navigation.navigate('Messages', {item});
              }}
            />
          )}
        />
      </View>
    </View>
  );
};
const mapStateToProps = ({auth, messages}) => {
  const {user, uid} = auth;
  const {chatRoom, chatRoomsDownloading, chatRooms, allUsers} = messages;
  return {user, uid, chatRoom, chatRoomsDownloading, chatRooms, allUsers};
};

export default connect(mapStateToProps, {getRooms, getAllUsers})(Index);
