import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    textStyle: {
      fontSize: 20,
    },
    profileView: {
      flex: 1,
      backgroundColor: '#eeedee',
      paddingHorizontal: 3,
    },
    profileStyle: {
      paddingVertical: 5,
      paddingHorizontal: 20,
      backgroundColor: colors.white,
    },
    infoStyle: {
      fontSize: 16,
      paddingTop: 2,
      paddingLeft: 5,
      color: colors.gray,
    },
    infoView: {
      padding: 20,
      backgroundColor: colors.white,
      marginTop: 2,
    },
    infoText: {
      fontSize: 18,
      color: colors.gray
    },
    imagesView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: colors.white,
      justifyContent: 'center',
    },
    imageStyle:{
      height: 120,
      width: 120,
      margin: 5,
      borderRadius: 15,
    },
    recentStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 15,
    },
    iconView: {
      flexDirection: "row",
      justifyContent: 'center',
      backgroundColor: colors.white,
      width: '100%',
    }
});

export default styles;
