import { createContext } from 'react';

type FavouriteContextType = {
  favouriteIds: number[];
  toggleFavourites: (id: number) => void;
};

export const FavouriteContext = createContext<FavouriteContextType | null>(
  null,
);
