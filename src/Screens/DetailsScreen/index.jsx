import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailsScreen = ({route, navigation}) => {
  const {movie} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>NETFLIX</Text>
        <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}>
       <AntDesign
              
                 name="arrowleft"
                 size={24}
                 color="white"
               />
      </TouchableOpacity>
      </View>
     

      <Image
        source={{
          uri: movie.image?.original || 'https://via.placeholder.com/300',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>
        {movie.summary
          ? movie.summary.replace(/<[^>]+>/g, '')
          : 'No summary available.'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  goBackButton: {
    position: 'absolute',
    top: 7,
    left: 10,
    // backgroundColor: 'lightgray',
    padding: 4,
    borderRadius: 5,
    // marginBlock:15
  },
  goBackText: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    marginTop: 65,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  summary: {
    fontSize: 16,
    color: 'lightgray',
  },
  header: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingBottom: 10,
    zIndex: 1,
    width: '100%',
    // marginTop: 20,
    backgroundColor: '#222',
  },
  text: {color: '#E50914',
    
  },
});

export default DetailsScreen;
