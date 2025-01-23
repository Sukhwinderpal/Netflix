import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('MainTabs')

        },3000);
      
    }, [navigation])
    
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={require('../../Assets/logo1.png')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      // backgroundColor:'lightgray'
    },
})