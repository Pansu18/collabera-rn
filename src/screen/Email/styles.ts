import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 10,
    margin: 24,
  },
  seprator: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerWrapper: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 32,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#2E3E5C',
  },
  body: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#9FA5C0',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    paddingTop: 32,
  },
  forgot: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#2E3E5C',
    marginVertical: 24,
  },
  expires: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: 'rgb(22 163 74)',
    marginVertical: 24,
  },
  btnsWrapper: {
    gap: 24,
    alignItems: 'center',
  },
});

export default styles;
