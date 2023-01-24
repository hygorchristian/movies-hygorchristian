import FeatureList from 'components/FeatureList';
import { Suspense } from 'react';
import { featureResources } from 'services/themoviedb';

export const revalidate = 10;

export default function MoviesPage() {
  return (
    <div className="">
      <h1>movies lol</h1>
      <Suspense>
        {/* @ts-expect-error */}
        <FeatureList
          title="top 10"
          resource={featureResources.movies_favorites}
        />
        {/* @ts-expect-error */}
        <FeatureList title="Rated" resource={featureResources.movies_rated} />
      </Suspense>
    </div>
  );
}
