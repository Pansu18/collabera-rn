import { TextInput, View, TextInputProps, Text, StyleProp, ViewStyle, } from 'react-native';
import React from 'react';
import { SvgProps } from 'react-native-svg';
import styles from './styles';

type Props = {
    field: any;
    form: any;
    innerRef: any;
    variant?: 'success' | 'warning' | 'error';
    prefixIcon?: React.FC<SvgProps>;
} & TextInputProps;

const Input = ({
    field: { name, value },
    form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    variant,
    prefixIcon: PrefixIcon,
    innerRef,
    ...props
}: Props) => {
    const inputStyle: any = [styles.input];
    const error = touched[name] && errors[name];
    if (variant) {
        inputStyle.push(styles[variant]);
    }

    if (error) {
        inputStyle.push(styles['error']);
    }

    console.log(PrefixIcon);

    return (
        <View>
            <View style={styles.inputWrapper}>
                {PrefixIcon && (
                    <PrefixIcon
                        height={24}
                        width={24}
                        stroke="#3E5481"
                        style={styles.svg}
                    />
                )}
                <TextInput
                    ref={innerRef}
                    value={value}
                    placeholderTextColor="#9FA5C0"
                    style={inputStyle}
                    onChangeText={text => setFieldValue(name, text)}
                    onBlur={() => setFieldTouched(name, true)}
                    {...props}
                />
            </View>
            <Text style={styles.errorMsg}>{error}</Text>
        </View>
    );
};

export default Input;
