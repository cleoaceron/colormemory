import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'utils/scale';
const BASE_SIZE = {width: 100, height: 100};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    ...BASE_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: scale(5),
  },
  face: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    ...BASE_SIZE,
  },
  back: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    ...BASE_SIZE,
  },
  button: {
    width: scale(100),
    height: verticalScale(30),
    marginTop: verticalScale(30),
    paddingTop: verticalScale(6),
    paddingBottom: verticalScale(6),
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#007AFF',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  cardSidecontainer: {
    justifyContent: 'center',
    width: scale(200),
    height: verticalScale(200),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  cardSideText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: scale(20),
  },
});

export default styles;
