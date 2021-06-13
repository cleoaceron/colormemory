import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(200),
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: scale(16),
    fontWeight: '600',
  },
  inputStyle: {
    height: verticalScale(30),
    width: scale(200),
  },
  inputContainer: {
    height: verticalScale(30),
    width: scale(200),
    flexDirection: 'row',
    marginTop: verticalScale(11),
    marginBottom: verticalScale(5),
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    marginTop: verticalScale(20),
  },
  buttonText: {
    fontSize: scale(18),
    fontWeight: '600',
    color: 'blue',
  },
  inputTextStyle: {
    flexDirection: 'column',
  },
  errorStyle: {
    fontSize: 16,
    color: 'red',
  },
});

export default styles;
