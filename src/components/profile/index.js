import React,{useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {chunk, isEqual} from 'lodash';

import {coverImage} from '../../constants/images';
import styles from './styles';
import colors from '../../constants/colors';
import mainStyle from '../common/mainStyles';
import images from '../../constants/dummy/dummyImages';
import UserImages from './userImages';

const Profile = () => {
  const [activeSlide, setActive] = useState(0);

  return(
    <View style={mainStyle.flex1}>
      <ScrollView>
        <Image source={coverImage} style={{height: 170, width: '100%'}}/>
        <View style={styles.ProfileView}>
          <View style={styles.profileStyle}>
            <View style={mainStyle.row}>
              <Text style={styles.nameStyle}>Anna</Text>
              <Text style={{fontSize: 30, color: colors.darkgray}}>19</Text>
            </View>
            <View style={[mainStyle.row,mainStyle.alignSelfCenter]}>
              <FontAwesome name="graduation-cap" size={15} color={colors.darkgray}/>
              <Text style={styles.infoStyle}>University of San Francisco</Text>
            </View>
            <View style={[[mainStyle.row,mainStyle.alignSelfCenter]]}>
              <EvilIcons name="location" size={20} color={colors.darkgray}/>
            <Text style={styles.infoStyle}>1 mile away</Text>
            </View>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText}>
              {`Move from the East Coast & just want to meet some new people`}
            </Text>
          </View>
          <View style={styles.dotView}>
            <Text style={styles.recentStyle}>Recent Instagram Photos</Text>
            <View style={mainStyle.row}>
              <View style={[styles.dotStyle,{backgroundColor: isEqual(activeSlide, 0)? colors.lightRed :colors.dimWhite}]} />
              <View style={[styles.dotStyle,{backgroundColor: isEqual(activeSlide, 1)? colors.lightRed : colors.dimWhite}]} />
            </View>
          </View>
          <UserImages setActive={setActive} images={chunk(images, 6)} />
          <View style={styles.iconView}>
            <Entypo  style={{marginRight:30}} name="cross" size={70} color={colors.pink}/>
            <Entypo  name="star" size={45} color={colors.blue}/>
            <Entypo  style={[mainStyle.pT5,mainStyle.mL30]} name="heart" size={60} color={colors.green}/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile;