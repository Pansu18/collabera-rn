import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import React, { useRef } from 'react';
import Input from './components/Input';
import { Formik, Field } from 'formik';
import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import GoogleIcon from '../../../assets/icons/Google.svg';
import styles from './styles';
import Button from './components/Button';

const Login = () => {
    const passwordRef: any = useRef();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'height' : 'padding'}
            style={styles.wrapper}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                }}
            >
                {({ handleSubmit }) => (
                    <>
                        <View style={[styles.seprator, { flex: 1, marginTop: 100 }]}>
                            <View style={styles.headerWrapper}>
                                <Text style={styles.title}>Check your email</Text>
                                <Text style={styles.body}>We've sent the code to your email</Text>
                            </View>
                            <View style={styles.inputWrapper}>
                                <Field
                                    name="otp"
                                    component={Input}
                                    keyboardType="email-address"
                                    placeholder=""
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                // onSubmitEditing={() => {
                                //     passwordRef.current.focus();
                                // }}
                                />
                                <Field
                                    name="otp2"
                                    component={Input}

                                    placeholder=""
                                    returnKeyType="done"
                                // onSubmitEditing={handleSubmit}
                                />

                                <Field
                                    name="otp3"
                                    component={Input}

                                    placeholder=""
                                    returnKeyType="done"
                                // onSubmitEditing={handleSubmit}
                                />

                                <Field
                                    name="otp4"
                                    component={Input}

                                    placeholder=""
                                    returnKeyType="done"
                                // onSubmitEditing={handleSubmit}
                                />
                                {/* <Input prefixIcon={MessageIcon} keyboardType="email-address" />
                                <Input prefixIcon={LockIcon} secureTextEntry /> */}
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={styles.forgot}>code expires in </Text>
                                <Text style={styles.expires}> 03:12</Text>
                            </View>
                        </View>
                        <View style={styles.seprator}>
                            <View style={styles.btnsWrapper}>
                                <Button onPress={handleSubmit} title="Verify" />
                                <Button type="outline" title="Send Again" />
                            </View>
                        </View>
                    </>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
};

export default Login;
