import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePorsterCard } from '../components/MoviePorsterCard';
import { useMovies } from '../hooks/useMovies'

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={ 100 } />
      </View>
    )
  }

  return (
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
  )
}
