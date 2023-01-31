/* eslint-disable import/no-anonymous-default-export */
import type { FeatureData } from './types';

type Getter = (f: FeatureData) => string;

const baseURL = 'https://image.tmdb.org/t/p';

export const getBackdrop = (feature: FeatureData) =>
  feature.backdrop_path ?? feature.poster_path ?? feature.id;

export const getPoster = (feature: FeatureData) =>
  feature.backdrop_path ?? feature.poster_path ?? feature.id;

//==============================================================================
// Now it's time
//==============================================================================

class Feature {}

const functions: Record<string, Getter> = {
  getPosterURL: f => `${baseURL}/w500${f.poster_path}`,
  getPlaceholderPosterURL: f => `${baseURL}/w92${f.poster_path}`,
  getBackdropURL: f => `${baseURL}/original${getBackdrop(f)}`,
  getSmBackdropURL: f => `${baseURL}/w780${getBackdrop(f)}`,
  getPlaceholderBackdropURL: f => `${baseURL}/w300${getBackdrop(f)}`
};

export default functions;
