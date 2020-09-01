import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../../constant/colors/colors';

const index = (props) => {
  return (
    <View style={styles.allView}>
      <Text style={styles.text}>Rebook</Text>
      <Image
        source={require('../../constant/images/book.png')}
        size={34}
        style={{
          tintColor: props.color,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  allView: {
    width: 120,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginRight: 12,
    color: 'black',
    fontSize: 26,
  },
});

export default index;
