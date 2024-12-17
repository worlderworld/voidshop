import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../common/Loader'

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [badEmail, setBadEmail] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const[modalVisible,setModalVisible]=useState(false)




    const login = () => {
        setModalVisible(true);

        if (email == '') {
            setModalVisible(false);
            setBadEmail(true);
        }
        else {
            setBadEmail(false)
            if (password == '') {
                setModalVisible(false);

                setBadPassword(true)}
            else {
                
              
                
                setTimeout(()=>{
                    setBadPassword(false)
                    getData();

                },3000)
        }
    }
    
};



const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL')

    const mPass = await AsyncStorage.getItem('PASSWORD')

    console.log(mEmail,mPass)



   if(email===mEmail && mPass===password){
    setModalVisible(false);

        navigation.navigate('Home')
    }

    else{
        setModalVisible(false);

    }

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
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/>

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