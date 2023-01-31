import clsx from 'clsx';
import Separator from 'components/Separator';
import Image from 'next/image';
import { BsFillStarFill } from 'react-icons/bs';
import type { FeatureData } from 'services/themoviedb';
import Feature, { backdropSizes } from 'services/themoviedb/Feature';
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
  const _feature = new Feature(feature);

  return (
    <div className="h-feature-card">
      {rank && <div className="rank">{rank}</div>}
      <div className={['card', rank ? 'with-rank' : ''].join(' ')}>
        <div className="image">
          <Image
            src={_feature.getBackdropURL(backdropSizes.w780)}
            blurDataURL={_feature.getBackdropURL(backdropSizes.w300)}
            alt={_feature.title}
            quality={100}
            fill
            placeholder="blur"
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
            <h2 className="title">{_feature.title}</h2>
            <h5 className="year">{_feature.getYear()}</h5>
          </div>
          <Separator orientation="vertical" light />
          <div className={clsx('rate', { highlight: _feature.rating >= 5 })}>
            <span className="rate_number">{_feature.rating.toFixed(1)}</span>
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
