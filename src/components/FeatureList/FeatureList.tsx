import FeatureCard, { FeatureCardSkeleton } from 'components/FeatureCard';
import { Suspense } from 'react';
import TMDBApi from 'services/themoviedb/TMDBApi';
import type { FeatureResource } from 'services/themoviedb/types';

import './styles.scss';

type FeatureListProps = {
  title: string;
  resource: FeatureResource;
  withRank?: boolean;
};

async function FeatureList({
  title,
  resource,
  withRank = false
}: FeatureListProps): Promise<JSX.Element> {
  const features = await TMDBApi.getFeatureList(resource);

  console.log({ features });

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

function FeatureListSkeleton(): JSX.Element {
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

export default function FeatureListSuspense(
  props: FeatureListProps
): JSX.Element {
  return (
    <Suspense fallback={<FeatureListSkeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <FeatureList {...props} />
    </Suspense>
  );
}
