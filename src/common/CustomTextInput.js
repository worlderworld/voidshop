import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type, keyboardType }) => {
    return (
        <View style={styles.page} >
            <Image source={icon} style={styles.icon} />
            <TextInput placeholder={placeholder}
            
                style={styles.TextInput}
                secureTextEntry={type ? true : false}
                keyboardType={keyboardType ? keyboardType : 'default'}
                value={value}
                onChangeText={txt => {
                    onChangeText(txt)
                }}

            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    page: {
        width: '85%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 30,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 28,
        height: 28
    },
    TextInput: {
        marginLeft: 10
    }
})