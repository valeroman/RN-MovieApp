import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${ actor.profile_path }`;

    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ActorInfoScreen', actor)}
        >
            <View style={ styles.container }>
                {
                    actor.profile_path && (
                        <Image
                            source={{ uri }}
                            style={{ width: 50, height: 50, borderRadius: 10 }}
                        />
                    )
                }
                <View style={ styles.actorInfo }>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        { actor.name }
                    </Text>
                    <Text style={{ fontSize: 16, opacity: 0.7 }}>
                        { actor.character }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        marginLeft: 20,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }
});
