import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: screenHeight } = Dimensions.get('screen')

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ({ route, navigation }: Props) => {
  
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${ movie.poster_path }`;

  const { cast, isLoading, movieFull } = useMovieDetails( movie.id );

  return (
        <ScrollView>
          <View style={ styles.imageContainer }>
              <View style={ styles.imegeBorder }> 
                <Image
                    source={{ uri }}
                    style={ styles.posterImage }
                />
              </View>
          </View>

          <View style={ styles.marginContainer }>
            <Text style={ styles.subTitle }>{ movie.original_title }</Text>
            <Text style={ styles.title }>{ movie.title }</Text>
          </View>

         
          { 
            isLoading 
            ?  <ActivityIndicator 
                  size={35}
                  color='gray'
                  style={{ marginTop: 20 }}
                />
            : <MovieDetails movieFull={ movieFull! } cast={ cast } />
          }

          {/* Boton para regresar */}
          <TouchableOpacity
            style={ styles.backButton }
            onPress={ () => navigation.goBack() }
          >
            <Icon 
              name='arrow-back-outline'
              color='white'
              size={ 50 }
            />
          </TouchableOpacity>

        </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
      width: '100%',
      height: screenHeight * 0.7,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
      borderBottomStartRadius: 25,
      borderBottomEndRadius: 25,
  },
  imegeBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  posterImage: {
      flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5
  }
});

