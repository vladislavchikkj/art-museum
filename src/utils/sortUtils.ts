import { Artwork } from '@type/types';

export const sortResults = (option: string, data: Artwork[]): Artwork[] => {
  const sortedData = [...data];
  if (option === 'date') {
    sortedData.sort((a, b) => (a.date > b.date ? 1 : -1));
  } else if (option === 'title') {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  }
  return sortedData;
};
