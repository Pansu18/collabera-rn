import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#F5BD0A',
  secondary: '#24D37F',
  form: '#F4F5F7',
};

export const textColors = {
  primary: '#FFFFFF',
  secondary: '#FFFFFF',
  form: '#2E3E5C',
};

const styles = (variant: any) => {
  return StyleSheet.create({
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 999,
      flexDirection: 'row',
      gap: 8,
      width: '100%',
      backgroundColor: colors[variant],
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: colors[variant],
      borderWidth: 2,
    },
    default: {
      paddingVertical: 16,
    },
    large: {
      paddingVertical: 20,
    },
    small: {
      paddingVertical: 12,
    },
    btnText: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 18,
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: 0, height: 4},
      textShadowRadius: 4,
      color: textColors[variant],
      letterSpacing: 1.12,
    },
    text_outline: {
      color: colors[variant],
      textShadowRadius: 0,
      textShadowOffset: {width: 0, height: 0},
      textShadowColor: 'rgba(0, 0, 0, 0)',
    },
  });
};

export default styles;
