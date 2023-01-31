/* eslint-disable import/no-anonymous-default-export */
import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { env } from 'env/client.mjs';
import type {
  AddToWatchlistRequestBody,
  FeatureData,
  FeatureMediaType,
  FeatureResource,
  PaginatedReponse,
  SearchResult,
  TMDBResponse
} from './types';

type GetEndpointPath = (account_id: string) => string;

type DefaultResponse = AxiosResponse<TMDBResponse, any>;

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
class TMDBApi {
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
        // api_key: env.NEXT_PUBLIC_TMDB_API_KEY,
        // session_id: env.NEXT_PUBLIC_TMDB_SESSION_ID,
        // append_to_response: 'videos,images'
      }
    });
  }

  public async getFeatureList(
    featureResource: FeatureResource
  ): Promise<FeatureData[]> {
    await new Promise(resolve => setTimeout(resolve, 2500));
    const response = await this.client.get<PaginatedReponse<FeatureData>>(
      getEndpoint(this.account_id, featureResource)
    );

    return response.data.results;
  }

  public async saveToWatchlist(
    media_id: number,
    media_type: FeatureMediaType
  ): Promise<DefaultResponse> {
    await new Promise(resolve => setTimeout(resolve, 2500));

    const data: AddToWatchlistRequestBody = {
      media_type,
      media_id,
      watchlist: true
    };

    const response = await this.client.post<DefaultResponse>('', data);

    return response.data;
  }

  public async search(query: string): Promise<SearchResult> {
    const options = {
      params: { query: query }
    };

    const movieResults = await this.client
      .get<TMDBResponse>('search/movie', options)
      .then(res => res.data?.results)
      .catch(err => [] as FeatureData[]);

    const tvResults = await this.client
      .get<TMDBResponse>('search/tv', options)
      .then(res => res.data?.results)
      .catch(err => [] as FeatureData[]);

    return {
      tv: tvResults,
      movie: movieResults
    };
  }
}

export default new TMDBApi();
