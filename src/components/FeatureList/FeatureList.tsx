import FeatureCard, { FeatureCardSkeleton } from 'components/FeatureCard';
import type { FeatureData } from 'services/themoviedb/types';

import './styles.scss';

export type FeatureListProps = {
  title: string;
  features: FeatureData[];
  withRank?: boolean;
};

export default function FeatureList({
  title,
  features,
  withRank = false
}: FeatureListProps): JSX.Element {
  return (
    <div className="h-feature-list">
      <h2 className="title">{title}</h2>
      <div className="list">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            {...{ rank: withRank ? index + 1 : undefined }}
          />
        ))}
      </div>
    </div>
  );
}

export function FeatureListSkeleton(): JSX.Element {
  return (
    <div className="h-feature-list">
      <div className="title skeleton-animated" />
      <div className="list">
        <FeatureCardSkeleton />
        <FeatureCardSkeleton />
        <FeatureCardSkeleton />
        <FeatureCardSkeleton />
      </div>
    </div>
  );
}
