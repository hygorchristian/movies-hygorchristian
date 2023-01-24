import Image from 'next/image';
import { getPlaceholderPosterURL, getPosterURL } from 'services/themoviedb';
import type { FavoriteMovie } from 'services/themoviedb/types';
import './styles.scss';

type FeatureCardProps = {
  feature: FavoriteMovie;
};

export default function FeatureCard({
  feature
}: FeatureCardProps): JSX.Element {
  return (
    <div className="h-feature-card">
      <div className="image">
        <Image
          src={getPosterURL(feature)}
          alt={feature.title}
          blurDataURL={getPlaceholderPosterURL(feature)}
          placeholder="blur"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
