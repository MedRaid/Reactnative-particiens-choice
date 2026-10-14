import { View, Text, StyleSheet, Pressable } from 'react-native';
// import React, { useContext } from 'react';

import { Particien } from '../types/Particien';
import MaterialIcons from '@react-native-vector-icons/material-icons/static';
// import { useFavouritesStore } from '../store/FavouritesStore';
// import { FavouriteContext } from '../context/FavouriteContext';

type Props = {
  particien: Particien;
  onToggleFav: (id: number) => void;
  isFavourit: boolean;
};
const ParticienItem = ({ particien, onToggleFav, isFavourit }: Props) => {
  // const context = useContext(FavouriteContext);
  // if (!context) {
  //   throw new Error('Particient doit petre dans favouricontextprovider');
  // }

  // const { favouriteIds, toggleFavourites } = context;

  // const { favouritsIds, toggleFavourites } = useFavouritesStore();

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{particien.name}</Text>
      </View>

      <View style={styles.spacer} />

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{particien.speciality}</Text>
      </View>

      <View style={styles.spacer} />

      <View style={styles.itemContainer}>
        <Pressable
          accessibilityRole="button"
          // accessibilityLabel={
          //   favouritsIds.includes(particien.id)
          //     ? `Retirer ${particien.name} des favoris`
          //     : `Ajouter ${particien.name} aux favoris`
          // }
          // onPress={() => {
          //   toggleFavourites(particien.id);
          // }}

          onPress={() => onToggleFav(particien.id)}
        >
          <MaterialIcons
            name={isFavourit ? 'favorite' : 'favorite-outline'}
            size={24}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
  },
  itemContainer: {
    flex: 1,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconAction: {
    flex: 1,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  spacer: {
    width: 3,
    backgroundColor: 'white',
  },
});

export default ParticienItem;
