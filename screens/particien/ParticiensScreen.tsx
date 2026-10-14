import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { particiensList } from '../../utils/particiensList';
import ParticienItem from '../../components/ParticienItem';
import { MaterialIcons } from '@react-native-vector-icons/material-icons/static';
const ParticiensScreen = () => {
  const [searchedText, setSearchedText] = useState('');
  const [showOnlyFavourits, setShowOnlyFavourits] = useState(false);
  const [favouritsIds, setFavouritsIds] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    setSearchedText(value);
  };

  const toggleFavourites = (id: number) => {
    setFavouritsIds(prev => {
      if (prev.includes(id.toString())) {
        return prev.filter(p => p !== id.toString());
      }
      return [...prev, id.toString()];
    });
  };

  const searched = searchedText.trim().toLowerCase();
  const filtredParticipants = particiensList.filter(
    p =>
      p.name.toLowerCase().includes(searched) ||
      p.speciality.toLowerCase().includes(searched),
  );

  const visibleParticiens = showOnlyFavourits
    ? filtredParticipants.filter(p => favouritsIds.includes(p.id.toString()))
    : filtredParticipants;

  const showOnlyFavouritsFunc = () => {
    setShowOnlyFavourits(!showOnlyFavourits);
  };

  let emptyMessage = 'Aucun praticien disponible.';

  if (showOnlyFavourits && favouritsIds.length === 0) {
    emptyMessage = "Vous n'avez pas encore de favoris.";
  } else if (showOnlyFavourits && searched) {
    emptyMessage = 'Aucun favori ne correspond à votre recherche.';
  } else if (showOnlyFavourits) {
    emptyMessage = 'Aucun favori à afficher.';
  } else if (searched) {
    emptyMessage = 'Aucun praticien ne correspond à votre recherche.';
  }

  return (
    <View>
      <View style={styles.searchComponent}>
        <MaterialIcons name="search" size={36} color="#666" />
        <TextInput
          style={styles.searchText}
          inputMode="search"
          placeholder="Search for a partician"
          onChange={value => handleSearch(value.nativeEvent.text)}
        />
      </View>

      <View style={styles.onlyFavourites}>
        <Button
          title="Show only favourits"
          onPress={() => showOnlyFavouritsFunc()}
        />
      </View>

      {visibleParticiens.length > 0 ? (
        <FlatList
          data={visibleParticiens}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatlistStyle}
          renderItem={({ item }) => (
            <ParticienItem
              particien={item}
              onToggleFav={toggleFavourites}
              isFavourit={favouritsIds.includes(item.id.toString())}
            />
          )}
          ListHeaderComponent={
            <View style={styles.container}>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>Name</Text>
              </View>
              <View style={styles.spacer} />
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>Speciality</Text>
              </View>
              <View style={styles.spacer} />
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>Action</Text>
              </View>
            </View>
          }
        />
      ) : (
        <Text>{emptyMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistStyle: {
    gap: 4,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#bdbdbd',
  },
  headerCell: {
    flex: 1,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  spacer: {
    width: 3,
    backgroundColor: 'white',
  },
  searchText: {
    padding: 10,
    margin: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
  },
  searchComponent: {
    paddingLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlyFavourites: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ParticiensScreen;
