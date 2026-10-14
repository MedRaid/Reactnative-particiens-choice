import { PropsWithChildren, useState } from 'react';
import { FavouriteContext } from './FavouriteContext';

export function FavouriteContextProvider({ children }: PropsWithChildren) {
  const [favouriteIds, setFavouriteIds] = useState<number[]>([]);

  const toggleFavourites = (id: number) => {
    setFavouriteIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(p => p !== id);
      }

      return [...prev, id];
    });
  };

  return (
    <FavouriteContext.Provider value={{ favouriteIds, toggleFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
}
