import { create } from 'zustand';

type FavouriteStoreType = {
  favouritsIds: number[];
  toggleFavourites: (id: number) => void;
};

const updateFavourites = (favouritsIds: number[], id: number): number[] => {
  if (favouritsIds.includes(id)) {
    return favouritsIds.filter(p => p !== id);
  }
  return [...favouritsIds, id];
};

export const useFavouritesStore = create<FavouriteStoreType>()(set => ({
  favouritsIds: [],
  toggleFavourites: (id: number) => {
    set(state => {
      const newFavourites = updateFavourites(state.favouritsIds, id);
      return { favouritsIds: newFavourites };
    });
  },
}));
