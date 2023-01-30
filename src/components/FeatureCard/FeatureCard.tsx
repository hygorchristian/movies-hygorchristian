import Separator from 'components/Separator';
import Image from 'next/image';
import { BsFillStarFill } from 'react-icons/bs';
import {
  getPlaceholderPosterURL,
  getSmBackdropURL
} from 'services/themoviedb/imageUrl';
import type { FeatureData } from 'services/themoviedb/types';
import './styles.scss';

type FeatureCardProps = {
  feature: FeatureData;
  rank?: number;
};
//
export default function FeatureCard({
  feature,
  rank
}: FeatureCardProps): JSX.Element {
  const src = getSmBackdropURL(feature);
  const blurDataURL = getPlaceholderPosterURL(feature);
  const title = feature.title ?? feature.name;
  const year =
    (feature.release_date ?? feature.first_air_date)?.substring(0, 4) ?? '';
  const rate = (feature?.rating ?? feature.vote_average) / 2;
  const rate_text = rate.toFixed(1);
  const rateClass = rate >= 5 ? 'highlight' : '';

  return (
    <div className="h-feature-card">
      {rank && <div className="rank">{rank}</div>}
      <div className={['card', rank ? 'with-rank' : ''].join(' ')}>
        <div className="image">
          <Image
            src={src}
            blurDataURL={blurDataURL}
            alt={title}
            placeholder="blur"
            fill
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'top center'
            }}
          />
        </div>
        <div className="info">
          <div className="feature-info">
            <h2 className="title">{title}</h2>
            <h5 className="year">{year}</h5>
          </div>
          <Separator orientation="vertical" light />
          <div className={['rate', rateClass].join(' ')}>
            <span className="rate_number">{rate_text}</span>
            <BsFillStarFill type="solid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureCardSkeleton(): JSX.Element {
  return (
    <div className="h-feature-card">
      <div className="card skeleton-animated" />
    </div>
  );
}
