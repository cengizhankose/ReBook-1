import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const index = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={styles.mainContainer}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
        <View
          style={styles.recieverIcon}>
          <Text style={{fontSize: 24, color: 'white'}}>
            {props.firstLetters}
          </Text>
        </View>
        <Text>{props.lastMessage}</Text>
      </View>
      <View
        style={styles.notificationIcon}>
        <Text style={{fontSize: 12, color: 'white'}}>{props.messageCount}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default index;
