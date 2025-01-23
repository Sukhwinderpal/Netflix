import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';



const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.container}>
      <Text style={styles.text}>NETFLIX</Text>
      <View style={styles.subContainer}>
        <AntDesign
          onPress={() => navigation.navigate('SearchTab')}
          name="search1"
          size={24}
          color="white"
        />
        
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingBottom: 10,
    zIndex: 1,
    width: '100%',
    // marginTop: 20,
    backgroundColor:'#222'
  },
  text:{color:'#E50914'},
  subContainer:{flexDirection: 'row', gap: 12},


})
