import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import { useAsyncStorage, } from '@react-native-async-storage/async-storage';



let isValid = true;
const Signup = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [badName, setbadName] = useState(false)
    const [email, setEmail] = useState('')
    const [badEmail, setBadEmail] = useState(false)
    const [password, setpassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [badPassword, setBadPassword] = useState(false)
    const [badConfirmPassword, setBadConfirmPassword] = useState(false)
    const [mobile, setMobile] = useState('')
    const [badMobile, setBadMobile] = useState(false)

    const validate = () => {
     

        if (name == '') {
            setbadName(true)
            isValid = false

        }
        else {
            setbadName(false)
            if (email == '') {
                setBadEmail(true)
                isValid = false
            }
            else {
                setBadEmail(false)
                if (mobile == '') {
                    setBadMobile(true)
                    isValid = false
        
                }
                else if (mobile.length < 10) {
                    setBadMobile(true)
                    isValid = false
        
                }
                else {
                    setBadMobile(false)
                    if (password == '') {
                        setBadPassword(true)
                        isValid = false
            
                    }
            
                    else {
                        setBadPassword(false)
                        if (confirmPassword == '') {
                            setBadConfirmPassword(true)
                            isValid = false
                
                        }
                        else {
                            setBadConfirmPassword(false)
                            
        if (password !== confirmPassword) {
            setBadConfirmPassword(true)
            isValid = false

        }
        else {
            setBadConfirmPassword(false)
            saveData()

        }
                        }
                    }
                }
            }
        }

 


        // setTimeout(()=>{


        //     saveData()
        // },3000)
      
    }

    const saveData = async () => {
        // if (
        //     badName == false && !badEmail == false && badMobile == false && badPassword == false && badConfirmPassword == false) {
        //     await AsyncStorage.setItem('NAME', name)
        //     await AsyncStorage.setItem('EMAIL', email)
        //     await AsyncStorage.setItem('MOBILE', mobile)
        //     await AsyncStorage.setItem('PASSWORD', password)
        //     // console.log("yes")
            //navigation.goBack()
            navigation.navigate('Login')
       // }
    }

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
            <View style={{ flex: 1 }}>
                <Image style={styles.images} source={require('../Images/shipping.png')} ></Image>
                <Text style={styles.login}>Sign Up</Text>

                <CustomTextInput
                    placeholder={'Enter Name'}
                    value={name}
                    onChangeText={txt => {
                        setName(txt)
                    }}
                    icon={require('../Images/group.png')} />
                {
                    badName === true && (
                        <Text
                            style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>
                            Please Enter Name</Text>
                    )
                }

                <CustomTextInput
                    placeholder={'Enter Email ID'}
                    value={email}
                    onChangeText={txt => {
                        setEmail(txt)
                    }}
                    icon={require('../Images/email.png')} />
                {
                    badEmail === true && (
                        <Text
                            style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>
                            Please Enter Email</Text>
                    )
                }

                <CustomTextInput
                    placeholder={'Enter Mobile'}
                    value={mobile}
                    keyboardType={'number-pad'}
                    onChangeText={txt => {
                        setMobile(txt)
                    }}
                    icon={require('../Images/mobile.png')} />

                {
                    badMobile === true && (
                        <Text
                            style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>
                            Please Enter Valid Mobile</Text>
                    )
                }

                <CustomTextInput

                    placeholder={'Password'}
                    value={password}
                    onChangeText={txt => {
                        setpassword(txt)
                    }}
                    icon={require('../Images/lock.png')} type={'password'} />

                {
                    badPassword === true && (
                        <Text
                            style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>
                            Please Enter Password</Text>
                    )
                }

                <CustomTextInput

                    placeholder={'Password'}
                    value={confirmPassword}
                    onChangeText={txt => {
                        setConfirmPassword(txt)
                    }}
                    icon={require('../Images/lock.png')} type={'confirm password'} />

                {
                    badConfirmPassword === true && (
                        <Text
                            style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>
                            Please Enter Correct Password</Text>
                    )
                }

                <CommonButton title={'Signup'} bgColor={'#000'} textColor={'#fff'}
                    onPress={() => { validate() }} />
                <Text style={{
                    fontSize: 18,
                    fontWeight: '800',
                    alignSelf: 'center',
                    marginTop: 20,
                    textDecorationLine: 'underline',
                    marginBottom: 50
                }} onPress={() => {
                    navigation.goBack()
                }} >
                    Already have Account
                </Text>
            </View>
        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({
    login: {
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: '#000'
    },
    images: {
        width: 90,
        height: 90,
        alignSelf: 'center',
        marginTop: 100
    }
})