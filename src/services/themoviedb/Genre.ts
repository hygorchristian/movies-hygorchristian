import { adjustHue } from 'polished';
import hashString from 'src/helpers/hashString';

const genreNames: Record<number, string> = [];

export default class Genre {
  public readonly name: string;
  public readonly color: string;

  constructor(public readonly id: number) {
    this.name = genreNames[id] as string;

    const hue = hashString(this.name);

    this.color = adjustHue(180, '#448');
  }
}
