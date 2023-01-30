import FeatureList, { FeatureListSkeleton } from 'components/FeatureList';
import { Suspense } from 'react';
import type { FeatureResource } from 'services/themoviedb';
import TMDBApi from 'services/themoviedb';
import type { FeatureListProps } from './FeatureList/FeatureList';

type FeatureListLoaderProps = {
  resource: FeatureResource;
} & Omit<FeatureListProps, 'features'>;

async function FeatureListLoader({
  resource,
  ...props
}: FeatureListLoaderProps): Promise<JSX.Element> {
  const features = await TMDBApi.getFeatureList(resource);

  return (
    <Suspense fallback={<FeatureListSkeleton />}>
      <FeatureList {...props} features={features} />
    </Suspense>
  );
}

export default function FeatureListLoaderSuspense(
  props: FeatureListLoaderProps
): JSX.Element {
  return (
    <Suspense fallback={<FeatureListSkeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <FeatureListLoader {...props} />
    </Suspense>
  );
}
