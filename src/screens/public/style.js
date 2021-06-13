import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    flexDirection: 'column',
    margin: 1,
  },
  fontStyle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: 'white',
  },
  addStlye: {
    paddingTop: 0,
  },
  scoresContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: verticalScale(10),
  },
  rankContainer: {
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
  label: {
    fontSize: scale(18),
    fontWeight: '600',
  },
});

export default styles;
