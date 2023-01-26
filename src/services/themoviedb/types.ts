import type { PropertyTypes } from 'src/helpers/PropertyTypes';

export const featureEndpointTypes = {
  movies: 'movies',
  shows: 'shows'
} as const;

type IsoDate = string; // '2015-04-22'
type UtcDate = string; // '2023-01-24 04:59:54 UTC'

const featureMediaTypes = {
  movies: 'movies',
  shows: 'shows'
} as const;

export type FeatureMediaType = PropertyTypes<typeof featureMediaTypes>;

export type Feature = {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: IsoDate;
  media_type: FeatureMediaType;
  adult: boolean;
  genre_ids: number[];
  original_language: 'en';
  popularity: 6.196187;
  vote_count: 427;
  video: false;
  vote_average: 8.18;
};

export type FeatureResponse = {
  id: number;
  poster_path: string;
  backdrop_path: string;
  total_results: number;
  results: Feature[];
  public: boolean;
  revenue: string;
  page: number;
  object_ids: Record<string, string>;
  comments: Record<string, string>;
  iso_639_1: 'en';
  total_pages: 3;
  description: 'This is pretty wicked.';
  created_by: {
    gravatar_hash: 'c9e9fc152ee756a900db85757c29815d';
    name: 'Travis Bell';
    username: 'travisbell';
  };
  iso_3166_1: 'US';
  average_rating: 6.21022;
  runtime: 5478;
  name: 'The Marvel Universe';
};

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

export type FavoriteMovie = {
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
  title: string;
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
