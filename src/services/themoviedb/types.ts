import type { PropertyTypes } from 'src/helpers/PropertyTypes';

type IsoDate = string; // '2015-04-22'
type UtcDate = string; // '2023-01-24 04:59:54 UTC'

export const featureMediaTypes = {
  movie: 'movie',
  tv: 'tv'
} as const;

export type FeatureMediaType = PropertyTypes<typeof featureMediaTypes>;

///// REFACTOR

export type GetRequestTokenResponse = {
  success: boolean;
  expires_at: UtcDate;
  request_token: string;
};

export type GetSessionIdResponse = {
  success: boolean;
  expires_at: UtcDate;
  request_token: string;
};

export type PaginatedReponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type FeatureData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: IsoDate;
  first_air_date: IsoDate;
  title: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating?: number;
};

export const featureResources = {
  // Movies
  movies_favorites: 'movies_favorites',
  movies_watchlist: 'movies_watchlist',
  movies_rated: 'movies_rated',
  movies_recommendations: 'movies_recommendations',
  // TV Shows
  tv_favorites: 'tv_favorites',
  tv_watchlist: 'tv_watchlist',
  tv_rated: 'tv_rated',
  tv_recommendations: 'tv_recommendations'
} as const;

export const isFeatureResource = (input: unknown): input is FeatureResource =>
  Boolean(featureResources[input as FeatureResource]);

export type FeatureResource = PropertyTypes<typeof featureResources>;

export type AddToWatchlistRequestBody = {
  media_type: FeatureMediaType;
  media_id: number;
  watchlist: boolean;
};

export type TMDBResponse = {
  success: boolean;
  status_code: number;
  status_message: string;
  results: FeatureData[];
  page: number;
};

export type SearchResult = {
  movie: FeatureData[];
  tv: FeatureData[];
};
