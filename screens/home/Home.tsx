import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackType } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackType, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate('ParticiensScreen')}
        title="Pariticiens List"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
