import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { useActorInfo } from '../hooks/useActorInfo';

const { height: screenHeight } = Dimensions.get('screen')

interface Props extends StackScreenProps<RootStackParams, 'ActorInfoScreen'>{};

export const ActorInfoScreen = ({ route, navigation }: Props) => {

  const actor = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${ actor.profile_path }`;

  const { actorInfo } =  useActorInfo(actor.id);

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

      <View style={{ marginBottom: 100, top: 20, marginHorizontal: 20 }}>
        <View style={ styles.containerInfo }>
          <Text style={ styles.title }>Nombre:</Text>
          <Text style={ styles.subTitle }>{ actorInfo?.name }</Text>
        </View>

        <View style={ styles.containerInfo }>
          <Text style={ styles.title }>Fecha de nacimiento:</Text>
          <Text style={ styles.subTitle }>{ actorInfo?.birthday }</Text>
        </View>

        <View style={ styles.containerInfo }>
          <Text style={ styles.title }>Lugar de nacimiento:</Text>
          <Text style={ styles.subTitle }>{ actorInfo?.place_of_birth }</Text>
        </View>

        <View style={ styles.containerInfo }>
          <Text style={ styles.title }>Profesión:</Text>
          <Text style={ styles.subTitle }>{ actorInfo?.known_for_department }</Text>
        </View>
       
        <View style={ styles.containerInfo }>
          <Text style={ styles.title }>Valoración:</Text>
          <Text style={ styles.subTitle }>{ actorInfo?.popularity }</Text>
        </View>
        
        <View style={styles.containerInfo}>
          
          <Text style={ {...styles.subTitle, textAlign: 'justify', top: 10} }>
            { actorInfo?.biography }
          </Text>
          
        </View>
        
      </View>

      {/* Boton para regresar */}
      <TouchableOpacity
            style={ styles.backButton }
            onPress={ () => navigation.goBack() }
          >
            <Icon 
              name='arrow-back-circle-outline'
              color='#E5E4E2'
              size={ 40 }
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
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5
  },
  containerInfo: { 
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5, 
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
    // marginLeft: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 5
  },
});
