import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 10,
    padding: 24,
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
    paddingTop: 32,
  },
  forgot: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'right',
    letterSpacing: 0.5,
    color: '#2E3E5C',
  },
  btnsWrapper: {
    gap: 24,
    alignItems: 'center',
  },
  validationWrapper: {
    marginVertical: 24,
    gap: 16,
  },
  msgWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  msgTitle: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 27,
    color: '#3E5481',
  },
  msgText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    color: '#9FA5C0',
  },
});

export default styles;
