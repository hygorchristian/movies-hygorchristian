import Api from './Api';
import type { FavoriteMovie } from './types';

export { featureResources } from './Api';

export const getPosterURL = (feature: FavoriteMovie) =>
  `https://image.tmdb.org/t/p/w500${feature.poster_path}`;

export const getPlaceholderPosterURL = (feature: FavoriteMovie) =>
  `https://image.tmdb.org/t/p/w92${feature.poster_path}`;

export const getBackdropURL = (feature: FavoriteMovie) =>
  `https://image.tmdb.org/t/p/original${feature.backdrop_path}`;

export const getSmBackdropURL = (feature: FavoriteMovie) =>
  `https://image.tmdb.org/t/p/w780${feature.backdrop_path}`;

export const getPlaceholderBackdropURL = (feature: FavoriteMovie) =>
  `https://image.tmdb.org/t/p/w300${feature.backdrop_path}`;

export function buildTMDBApi(): Api {
  return new Api();
}
