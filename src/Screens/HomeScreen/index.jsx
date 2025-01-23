import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import Header from './Header';

const HomeScreen = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [filtered, setfiltered] = useState();
  const [loading, setLoading] = useState(true);
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    // Fetch movies from API
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.tvmaze.com/search/shows?q=all',
        );
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMoviePress = movie => {
    navigation.navigate('Detail', {movie});
  };
  

  // console.log(movies)

  const handleSearch = text => {
    const capitalizeWords = input => {
      return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    const capitalizedText = capitalizeWords(text);

    // Update the search text and filter the movies
    setSearchedText(capitalizedText);
    const filteredSearch = movies.filter(item =>
      item.show.name.includes(capitalizedText),
    );
    setfiltered(filteredSearch);
  };

  const renderMovie = ({item}) => {
    const {show} = item;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleMoviePress(show)}>
        <Image
          source={{
            uri: show.image?.medium || 'https://via.placeholder.com/100',
          }}
          style={styles.thumbnail}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{show.name}</Text>
          <Text style={styles.language}>Language:{show.language}</Text>
          <Text style={styles.summary} numberOfLines={2}>
            {show.summary
              ? show.summary.replace(/<[^>]+>/g, '')
              : 'No summary available.'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading movies...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
     <Header/>

      <View
        style={{
          height: 50,
          width: '90%',
          borderRadius: 8,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 20,
        }}>
        <TextInput
          placeholder="Search movies..."
          placeholderTextColor={'#777'}
          value={searchedText}
          onChangeText={text => handleSearch(text)}
          style={{
            fontSize: 14,
            color: '#555',
            marginHorizontal: 10,
           
          }}
        />
      </View>
      {searchedText != '' && filtered != null ? (
        <FlatList
          data={filtered}
          keyExtractor={item => item.show.id.toString()}
          renderItem={renderMovie}
          contentContainerStyle={styles.list}
        />
      ) : searchedText != '' && filtered == null ? (
        <Text style={{fontSize: 70, color: 'red', textAlign: 'center'}}>
          No result found
        </Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={item => item.show.id.toString()}
          renderItem={renderMovie}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  list: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  thumbnail: {
    width: 150,
    height: 150,
    color:'white'
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginBottom: 5,
    color:'white'
  },
  language:{
    fontSize: 14,
    // fontWeight: 'bold',
    marginBottom: 5,
    color:'lightgray'
  },
  summary: {
    fontSize: 14,
    color: '#555',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
