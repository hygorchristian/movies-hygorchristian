import FeatureList from 'components/FeatureList';
import { Suspense } from 'react';
import { featureResources } from 'services/themoviedb';

export const revalidate = 10;

export default function MoviesPage() {
  return (
    <main>
      <h1>movies lol</h1>
      <Suspense>
        {/* @ts-expect-error */}
        <FeatureList
          title="top 10"
          resource={featureResources.movies_favorites}
          withRank
        />
        {/* @ts-expect-error */}
        <FeatureList title="Watched" resource={featureResources.movies_rated} />
      </Suspense>
    </main>
  );
}
