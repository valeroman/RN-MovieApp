import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ImageColors from 'react-native-image-colors';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePorsterCard } from '../components/MoviePorsterCard';
import { useMovies } from '../hooks/useMovies'
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors } = useContext( GradientContext );

  const getPsterColors = async( index: number ) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${ movie.poster_path }`;

    const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );
    setMainColors({ primary, secondary });
  }

  useEffect(() => {

    if ( nowPlaying.length > 0 ) {
      getPsterColors(0);
    }

  },[nowPlaying])

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={ 100 } />
      </View>
    )
  }


  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20}}>

          {/* Carousel principal */}
          <View style={{ height: 440 }}>
            <Carousel 
              data={ nowPlaying }
              renderItem={ ({ item }) => <MoviePorsterCard movie={ item } />  }
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              inactiveSlideOpacity={ 0.9 }
              onSnapToItem={ index => getPsterColors( index ) }
            />
          </View>

          <HorizontalSlider 
            movies={ popular }
            title={'Polulares'}
          />

          <HorizontalSlider 
            movies={ topRated }
            title={'Top Rated'}
          />

          <HorizontalSlider 
            movies={ upcoming }
            title={'Upcoming'}
          />

        </View>
      </ScrollView>
    </GradientBackground>
  )
}
