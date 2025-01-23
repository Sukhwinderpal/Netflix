import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Go Back Button */}
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.goBackText}>back</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: movie.image?.original || 'https://via.placeholder.com/300' }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>
        {movie.summary ? movie.summary.replace(/<[^>]+>/g, '') : 'No summary available.'}
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
    top: 10,
    left: 10,
    backgroundColor: 'lightgray',
    padding: 10,
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
    marginTop:65
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  summary: {
    fontSize: 16,
    color: 'lightgray',
  },
});

export default DetailsScreen;
