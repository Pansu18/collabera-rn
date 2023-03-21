import { TextInput, View, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { SvgProps } from 'react-native-svg';
import styles from './styles';

type Props = {
    variant?: 'success' | 'warning' | 'error';
    prefixIcon?: React.FC<SvgProps>;
} & TextInputProps;


const Input = ({ variant, prefixIcon: PrefixIcon, ...props }: Props) => {
    const inputStyle: StyleProp<ViewStyle>[] = [styles.input];
    if (variant) {
        console.log('input style', inputStyle);
        console.log('variant', variant)
        inputStyle.push(styles[variant]);
    }

    return (
        <View style={styles.inputWrapper}>
            {PrefixIcon && (
                <PrefixIcon
                    height={24}
                    width={24}
                    stroke="#3E5481"
                    style={styles.svg}
                />
            )}
            <TextInput style={inputStyle} {...props} />
        </View>
    );
};

export default Input;
