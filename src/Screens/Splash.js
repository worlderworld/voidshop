import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Theme } from '../../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 3000);
  }, []);

  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL')
    if (email !== '' || email !== null || email !== undefined) {
      navigation.navigate('Home')

    }
    else{
      navigation.navigate('Login')

    }
  }

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme

  },
  logo: {
    fontSize: 30,
    color: 'white'
  },
})