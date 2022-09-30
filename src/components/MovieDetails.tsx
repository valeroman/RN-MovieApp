import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { format } from '../utils';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ cast, movieFull }: Props) => {
    return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20, marginTop: 5 }}>
            <View style={{ flexDirection: 'row' }}>
                <Icon 
                    name='star-outline'
                    color='grey'
                    size={ 16 }
                />
                <Text> { movieFull.vote_average }</Text>

                <Text style={{ marginLeft: 5 }}> - { movieFull.genres.map( g => g.name).join(', ') } </Text>
            </View>

            {/* Historia */}
            <Text
                style={{
                    fontSize: 23,
                    marginTop: 10,
                    fontWeight: 'bold'
                }}
            >
                Historia
            </Text>

            <Text style={{ fontSize: 16, textAlign: 'justify' }}>
                { movieFull.overview }
            </Text>

            <Text
                style={{
                    fontSize: 23,
                    marginTop: 10,
                    fontWeight: 'bold'
                }}
            >
                Presupuesto
            </Text>
            <Text style={{  fontSize: 18}}>{ format(movieFull.budget) }</Text>

        </View>

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 100 }}>
            <Text
                style={{
                    fontSize: 23,
                    marginTop: 10,
                    fontWeight: 'bold',
                    marginHorizontal: 20
                }}
            >
                Actores
            </Text>
            
            <FlatList
                data={ cast }
                keyExtractor={ (item) => item.id.toString() } 
                renderItem={ ({ item }) => <CastItem actor={ item } /> }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                style={{ marginTop: 10, height: 70 }}
            />
            {/*  */}
        </View>
    </>
    )
}
