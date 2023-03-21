import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  svg: {
    position: 'absolute',
    left: 24,
  },
  success: {
    borderWidth: 2,
    borderColor: '#24D37F',
  },
  warning: {
    borderWidth: 2,
    borderColor: '#F5BD0A',
  },
  error: {
    borderWidth: 2,
    borderColor: '#E20012',
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#D0DBEA',
    paddingVertical: 20,
    paddingLeft: 58,
    paddingRight: 20,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    borderRadius: 999,
    margin: 0,
    // lineHeight: 18;
    // letterSpacing: 0.007em;
  },
});

export default styles;
