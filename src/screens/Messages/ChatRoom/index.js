import React, {useEffect, useState} from 'react';
import {View, ImageBackground, Image, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './styles';
import MessageInput from '../../../components/MessageInput';
import MessageButton from '../../../components/SendMessage';
import MessageText from '../../../components/MessageText';
import {getMessages, addMessages} from '../../../redux/messages/actions';
import {getUserAction} from '../../../redux/auth/actions';

const Index = (props) => {
  const [message, setMessage] = useState('');
  const [senderUser, setSenderUser] = useState(null);
  const [recieverUser, setRecieverUser] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      props.getMessages(props.route.params.item.path);
      const user1 = await getUserAction(
        props.route.params.item.recieverUser.id,
      );
      setRecieverUser(user1);
      const user2 = await getUserAction(props.route.params.item.senderUser.id);
      setSenderUser(user2);
    };
    fetch();
  }, []);

  return (
    <ImageBackground
      style={styles.mainContainer}
      imageStyle={{flex: 1}}
      source={require('../../../img/MessagesBackground.png')}>
      <View style={{height: 70}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            padding: '5%',
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: '#FF928B',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
            }}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 200}}
              source={
                senderUser && recieverUser
                  ? {
                      uri:
                        props.route.params.item.senderUser.id === props.uid
                          ? recieverUser.profile_img
                          : senderUser.profile_img,
                    }
                  : require('../../../constant/images/loadingImage.gif')
              }
            />
          </View>
          <Text style={{marginLeft: 20}}>
            {recieverUser && senderUser
              ? props.route.params.item.senderUser.id === props.uid
                ? recieverUser.name
                : senderUser.name
              : ''}
          </Text>
        </View>
      </View>
      <View style={{flex: 9}}>
        <View
          style={{
            borderWidth: 2,
            margin: 10,
            flex: 1,
            borderRadius: 15,
            borderColor: 'white',
          }}>
          <FlatList
            data={props.allMessages}
            keyExtractor={(item) => item.id}
            inverted
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    alignSelf:
                      item.senderUser === props.uid ? 'flex-end' : 'flex-start',
                  }}>
                  <MessageText text={item.text} />
                </View>
              );
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <MessageInput
          placeholder={'Mesajınızı Yazın'}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
        />
        <MessageButton
          onPress={() => {
            let currentId = props.uid;
            let userObj = {...props.user, ['id']: currentId};

            const params = {
              text: message,
              createdDate: new Date(),
              senderUser: props.uid,
              recieverUser: props.route.params.item.recieverUser.id,
            };
            props.addMessages(props.route.params.item.path, params);
            setMessage('');
          }}
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = ({auth, messages}) => {
  const {user, uid} = auth;
  const {allMessages} = messages;
  return {user, uid, allMessages};
};

export default connect(mapStateToProps, {getMessages, addMessages})(Index);
