import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'


import {coverImage} from '../../constants/images';
import styles from './styles';
import colors from '../../constants/colors';
import mainStyle from '../../common/mainStyles';
import {image_1,image_2, image_3,image_4,image_5,image_6} from '../../constants/images';

const Images =[image_1, image_2, image_3,image_4,image_5,image_6];

const Profile = () => {
  return(
    <View style={styles.container}>
      <ScrollView>
        <Image source={coverImage} style={{height: 170, width: '100%'}}/>
        <View style={styles.ProfileView}>
          <View style={styles.profileStyle}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>Anna 19</Text>
            <View style={[mainStyle.row,mainStyle.alignSelfCenter]}>
              <FontAwesome name="graduation-cap" size={15}/>
              <Text style={styles.infoStyle}>University of San Francisco</Text>
            </View>
            <View style={[[mainStyle.row,mainStyle.alignSelfCenter]]}>
              <EvilIcons name="location" size={20}/>
            <Text style={styles.infoStyle}>1 mile away</Text>
            </View>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText}>
                {`Move from the East Coast & just want to meet some new people`}
            </Text>
          </View>
          <View style={[mainStyle.p5, mainStyle.whiteBgColor, mainStyle.mTop2]}>
            <Text style={styles.recentStyle}>Recent Instagram Photos</Text>
          </View>
            <View style={styles.imagesView}>
              {Images.map((item) => {
              return  <Image source={item} style={styles.imageStyle}/>
              })
              }
            </View>
            <View style={styles.iconView}>
              <Entypo  style={{marginRight:30}} name="cross" size={70} color={colors.pink}/>
              <Entypo   name="star" size={45} color={colors.blue}/>
              <Entypo  style={[mainStyle.pT5,mainStyle.mL30]} name="heart" size={60} color={colors.green}/>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile;