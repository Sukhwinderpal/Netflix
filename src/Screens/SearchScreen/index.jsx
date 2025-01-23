import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SearchScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMovie = ({item}) => {
    const {show} = item;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Details', {movie: show})}>
        <Image
          source={{
            uri: show.image?.medium || 'https://via.placeholder.com/100',
          }}
          style={styles.thumbnail}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{show.name}</Text>
          <Text style={styles.summary} numberOfLines={2}>
            {show.summary
              ? show.summary.replace(/<[^>]+>/g, '')
              : 'No summary available.'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.subContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Enter Correct movie name..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={searchMovies}
        />
      </View>
      <FlatList
        data={movies}
        keyExtractor={item => item.show.id.toString()}
        renderItem={renderMovie}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:'black'
  },
  subContainer:{
    height: 50,
    width: '90%',
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
  },
  searchBar: {
    fontSize: 14,
    color: 'white',
    marginHorizontal: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  summary: {
    fontSize: 14,
    color: '#555',
  },
  title:{
    color:'white',
    fontSize:13,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default SearchScreen;
