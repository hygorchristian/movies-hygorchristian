import type { FeatureData } from './types';

export const getPosterURL = (feature: FeatureData) =>
  `https://image.tmdb.org/t/p/w500${feature.poster_path}`;

export const getPlaceholderPosterURL = (feature: FeatureData) =>
  `https://image.tmdb.org/t/p/w92${feature.poster_path}`;

export const getBackdropURL = (feature: FeatureData) =>
  `https://image.tmdb.org/t/p/original${
    feature.backdrop_path ?? feature.poster_path
  }`;

export const getSmBackdropURL = (feature: FeatureData) => {
  if (feature.backdrop_path === null) console.log(feature);

  return `https://image.tmdb.org/t/p/w780${
    feature.backdrop_path ?? feature.poster_path
  }`;
};

export const getPlaceholderBackdropURL = (feature: FeatureData) =>
  `https://image.tmdb.org/t/p/w300${
    feature.backdrop_path ?? feature.poster_path
  }`;
