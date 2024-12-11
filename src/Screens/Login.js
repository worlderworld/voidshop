import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [badEmail, setBadEmail] = useState(false)
    const [badPassword, setBadPassword] = useState(false)



    const login = () => {
        if (email == '') {
            setBadEmail(true)
        }
        else {
            setBadEmail(false)
            if (password == '') {
                setBadPassword(true)}
            else {
                setBadPassword(false)
            getData()
        }
    }
}

const getData = async () => {
    // const mEmail = await AsyncStorage.getItem('EMAIL')

    // const mPass = await AsyncStorage.getItem('PASSWORD')


   // if(email==mEmail&&mPass==password){
        navigation.navigate('Home')
    //}

    // else{
    //     alert('Wrong pass')
    // }

}


return (
    <View style={{ flex: 1 }}>
        <Image style={styles.images} source={require('../Images/shopping-cart.png')} ></Image>
        <Text style={styles.login}>Login</Text>

        <CustomTextInput
            placeholder={'Enter Email ID'}
            icon={require('../Images/email.png')}
            value={email}
            onChangeText={txt => {
                setEmail(txt)
            }}
        />
        {
            badEmail === true && (
                <Text
                    style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>
                    Please Enter Email</Text>
            )
        }

        <CustomTextInput type={'password'}
            placeholder={'Password'}
            icon={require('../Images/lock.png')}
            value={password}
            onChangeText={txt => {
                setpassword(txt)
            }}
        />
        {
            badPassword === true && (
                <Text
                    style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>
                    Please Enter Password</Text>
            )
        }


        <CommonButton title={'Login'} bgColor={'#000'} textColor={'#fff'}
            onPress={() => {
                login()
            }} />

        <Text style={{
            fontSize: 18,
            fontWeight: '800',
            alignSelf: 'center',
            marginTop: 20,
            textDecorationLine: 'underline'
        }}
            onPress={() => {
                navigation.navigate('Signup')
            }} >
            Create New Account
        </Text>
    </View>
)
}

export default Login

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