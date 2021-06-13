import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'utils/scale';

const styles = StyleSheet.create({
  logo: {
    height: verticalScale(150),
    width: scale(100),
  },
  headerStyle: {
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  scoreStyle: {
    fontSize: scale(24),
    fontWeight: '900',
    color: '#ffffff',
  },
  rankings: {},
});

export default styles;
