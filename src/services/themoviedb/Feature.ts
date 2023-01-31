import { adjustHue } from 'polished';
import type { PropertyTypes } from 'src/helpers/PropertyTypes';
import type { FeatureData } from './types';

export const backdropSizes = {
  w300: 'w300',
  w780: 'w780',
  w1280: 'w1280',
  original: 'original'
} as const;

export const posterSizes = {
  w45: 'w45',
  w92: 'w92',
  w154: 'w154',
  w185: 'w185',
  w300: 'w300',
  w500: 'w500',
  original: 'original'
} as const;

export type BackdropSize = PropertyTypes<typeof backdropSizes>;
export type PosterSize = PropertyTypes<typeof posterSizes>;

type ImageOptions<TSize> = {
  placeholder: boolean;
  size: TSize;
};

const genreNames: Record<number, string> = [];

class Genre {
  public readonly name: string;
  public readonly color: string;

  constructor(public readonly id: number) {
    this.name = genreNames[id] as string;
    this.color = adjustHue(180, '#448');
  }
}

export default class Feature {
  private baseURL = 'http://image.tmdb.org/t/p/';
  private secureBaseURL = 'https://image.tmdb.org/t/p/';
  private defaultBackdropImage = '/images/backdrop.png';
  private defaultPosterImage = '/images/poster.png';

  public readonly id: number;
  public readonly title: string;
  public readonly overview: string;
  private readonly genre_ids: number[];

  // Image
  private readonly backdrop_path?: string;
  private readonly poster_path?: string;

  // Date
  private readonly release_date: Date;

  // Rating
  public readonly rating: number;

  public readonly genres: Genre[] = [];

  constructor(data: FeatureData) {
    this.id = data.id;
    this.title = data.title ?? data.name ?? data.original_title;
    this.overview = data.overview;
    this.genre_ids = data.genre_ids;
    this.backdrop_path = data.backdrop_path;
    this.poster_path = data.poster_path;
    this.release_date = new Date(data.release_date ?? data.first_air_date);
    this.rating = (data.rating ?? data.vote_average) / 2;

    if (data.genre_ids && Array.isArray(data.genre_ids)) {
      this.genres = data.genre_ids.map(id => new Genre(id));
    }
  }

  public getBackdropURL(size: BackdropSize = backdropSizes.original): string {
    const backdrop = this.backdrop_path || this.poster_path;
    if (!backdrop) return this.defaultBackdropImage;
    return `${this.baseURL}${size}${backdrop}`;
  }

  public getPosterURL(size: PosterSize = posterSizes.original): string {
    if (!this.poster_path) return this.defaultPosterImage;
    return `${this.baseURL}${size}${this.poster_path}`;
  }

  public getYear(): number {
    return this.release_date.getFullYear();
  }
}
