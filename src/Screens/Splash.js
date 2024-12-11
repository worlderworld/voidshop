import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Theme } from '../../utils/Colors';

const Splash = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },3000);
    },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
      Voider
      </Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Theme

    },
    logo:{
fontSize:30,
color:'white'
    },
})