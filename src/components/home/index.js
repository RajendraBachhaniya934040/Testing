import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles'

const Home = (props) => {
  const {navigation} = props;
  return(
    <View style={styles.container} >
      <TouchableOpacity onPres={() => navigation.navigate('profile')}>
        <Text style={styles.textStyle}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;