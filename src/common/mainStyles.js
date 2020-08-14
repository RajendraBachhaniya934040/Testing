import {StyleSheet, Dimensions} from 'react-native';

import colors from '../constants/colors';

const mainStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  btn: {
    backgroundColor: colors.appThemeColor,
  },
  cBGGreen: {
    backgroundColor: colors.green,
  },
  borderBottomColor: {
    borderBottomColor: colors.white,
  },
  cBGLightGreen: {
    backgroundColor: colors.limeGreen,
  },
  cBGDarkYellow: {
    backgroundColor: colors.darkYellow,
  },
  m1: {
    margin: 1,
  },
  mTop0: {
    marginTop: 0,
  },
  mTop2: {
    marginTop: 2,
  },
  mTop10: {
    marginTop: 10,
  },
  mTop15: {
    marginTop: 15,
  },
  mTop20: {
    marginTop: 20,
  },
  mTop5: {
    marginTop: 5,
  },
  mTop7: {
    marginTop: 7,
  },
  mTop30: {
    marginTop: 30,
  },
  mTop40: {
    marginTop: 40,
  },
  mB5: {
    marginBottom: 5,
  },
  mB7: {
    marginBottom: 7,
  },
  mB10: {
    marginBottom: 10,
  },
  mB20: {
    marginBottom: 20,
  },
  mB30: {
    marginBottom: 30,
  },
  mB40: {
    marginBottom: 40,
  },
  mH5: {
    marginHorizontal: 5,
  },
  mH10: {
    marginHorizontal: 10,
  },
  mH20: {
    marginHorizontal: 20,
  },
  mH30: {
    marginHorizontal: 30,
  },
  mV5: {
    marginVertical: 5,
  },
  mV10: {
    marginVertical: 10,
  },
  mV20: {
    marginVertical: 20,
  },
  mV30: {
    marginVertical: 30,
  },
  mV50: {
    marginVertical: 50,
  },
  mL2: {
    marginLeft: 2,
  },
  mL5: {
    marginLeft: 5,
  },
  mL8: {
    marginLeft: 8,
  },
  mL10: {
    marginLeft: 10,
  },
  mL15: {
    marginLeft: 15,
  },
  mL20: {
    marginLeft: 20,
  },
  mL30: {
    marginLeft: 30,
  },
  mL75: {
    marginLeft: 75,
  },
  mR2: {
    marginRight: 2,
  },
  mR5: {
    marginRight: 5,
  },
  mR10: {
    marginRight: 10,
  },
  mR15: {
    marginRight: 15,
  },
  mR20: {
    marginRight: 20,
  },
  mR25: {
    marginRight: 25,
  },
  pV2: {
    paddingVertical: 2,
  },
  pV5: {
    paddingVertical: 5,
  },
  pV10: {
    paddingVertical: 10,
  },
  pV15: {
    paddingVertical: 15,
  },
  pV20: {
    paddingVertical: 20,
  },
  pH5: {
    paddingHorizontal: 5,
  },
  pH10: {
    paddingHorizontal: 10,
  },
  pH15: {
    paddingHorizontal: 15,
  },
  pH20: {
    paddingHorizontal: 20,
  },
  p3: {
    padding: 3,
  },
  p5: {
    padding: 5,
  },
  p8: {
    padding: 8,
  },
  p10: {
    padding: 10,
  },
  p15: {
    padding: 15,
  },
  p20: {
    padding: 20,
  },
  p25: {
    padding: 25,
  },
  p30: {
    padding: 30,
  },
  pL2: {
    paddingLeft: 2,
  },
  pL5: {
    paddingLeft: 5,
  },
  pL7: {
    paddingLeft: 7,
  },
  pL10: {
    paddingLeft: 10,
  },
  pL15: {
    paddingLeft: 15,
  },
  pL20: {
    paddingLeft: 20,
  },
  pL0: {
    paddingLeft: 0,
  },
  pR0: {
    paddingRight: 0,
  },
  pR2: {
    paddingRight: 2,
  },
  pR5: {
    paddingRight: 5,
  },
  pR10: {
    paddingRight: 10,
  },
  pR12: {
    paddingRight: 12,
  },
  pR15: {
    paddingRight: 15,
  },
  pR20: {
    paddingRight: 20,
  },
  p7: {
    padding: 7,
  },
  pT5: {
    paddingTop: 5,
  },
  pT10: {
    paddingTop: 10,
  },
  pT15: {
    paddingTop: 15,
  },
  pT20: {
    paddingTop: 20,
  },
  pT0: {
    paddingTop: 0,
  },
  pT2: {
    paddingTop: 2,
  },
  pB0: {
    paddingBottom: 0,
  },
  pB5: {
    paddingBottom: 5,
  },
  pB8: {
    paddingBottom: 8,
  },
  pB10: {
    paddingBottom: 10,
  },
  pB15: {
    paddingBottom: 15,
  },
  pB20: {
    paddingBottom: 20,
  },
  pB30: {
    paddingBottom: 30,
  },
  topBorderRadius15: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  topBorderRadius30: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  position: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bR5: {
    borderRadius: 5,
  },
  bR20: {
    borderRadius: 20,
  },
  f8: {
    fontSize: 8,
  },
  f10: {
    fontSize: 10,
  },
  f11: {
    fontSize: 11,
  },
  f12: {
    fontSize: 12,
  },
  f14: {
    fontSize: 14,
  },
  f16: {
    fontSize: 16,
  },
  f18: {
    fontSize: 18,
  },
  f20: {
    fontSize: 20,
  },
  f25: {
    fontSize: 25,
  },
  f30: {
    fontSize: 30,
  },
  f40: {
    fontSize: 40,
  },
  whiteBgColor: {
    backgroundColor: colors.white,
  },
  fBlack: {
    color: colors.black,
  },
  fWhite: {
    color: colors.white,
  },

  fBold: {
    fontWeight: 'bold',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  alignMeCenter: {
    alignSelf: 'center',
  },
  alignSelfCenter: {
    alignItems: 'center',
  },
  alignSelfLeft: {
    alignItems: 'flex-start',
  },
  alignSelfRight: {
    alignItems: 'flex-end',
  },
  center: {
    textAlign: 'center',
  },
  jContentCenter: {
    justifyContent: 'center',
  },
  jContentEnd: {
    justifyContent: 'flex-end',
  },
  jContentEvn: {
    justifyContent: 'space-evenly',
  },
  tLeft: {
    textAlign: 'left',
  },
  centerJustifyContent: {
    textAlignVertical: 'center',
  },
  tRight: {
    textAlign: 'right',
  },
  flex1: {
    flex: 1,
  },
});

export default mainStyle;
