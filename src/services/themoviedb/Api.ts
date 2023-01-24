import type { AxiosInstance } from 'axios';
import axios from 'axios';
import env from 'env/types';
import type { FavoriteMovie, FeatureResource, PaginatedReponse } from './types';

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

type GetEndpointPath = (account_id: string) => string;

export function getEndpoint(account_id: string, key: FeatureResource): string {
  const keys: Record<FeatureResource, GetEndpointPath> = {
    // Movies
    movies_favorites: account_id => `/account/${account_id}/favorite/movies`,
    movies_watchlist: account_id => `/account/${account_id}/watchlist/movies`,
    movies_rated: account_id => `/account/${account_id}/rated/movies`,
    movies_recommendations: account_id =>
      `/account/${account_id}/recommendations/movies`,
    // TV Shows
    tv_favorites: account_id => `/account/${account_id}/favorite/tv`,
    tv_watchlist: account_id => `/account/${account_id}/watchlist/tv`,
    tv_rated: account_id => `/account/${account_id}/rated/tv`,
    tv_recommendations: account_id =>
      `/account/${account_id}/recommendations/tv`
  };

  return keys[key](account_id);
}

export default class TMDBApi {
  private client: AxiosInstance;
  private readonly account_id: string = env.NEXT_PUBLIC_TMDB_ACCOUNT_ID;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${env.NEXT_PUBLIC_TMDB_TOKEN}`
      },
      params: {
        api_key: env.NEXT_PUBLIC_TMDB_API_KEY
      }
    });
  }

  public async getFeatureList(
    featureResource: FeatureResource
  ): Promise<FavoriteMovie[]> {
    const response = await this.client.get<PaginatedReponse<FavoriteMovie>>(
      getEndpoint(this.account_id, featureResource)
    );
    return response.data.results;
  }
}
