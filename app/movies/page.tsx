/* eslint-disable @typescript-eslint/require-await */
import FeatureListLoader from 'components/FeatureListLoader';
import Head from 'next/head';
import { featureResources } from 'services/themoviedb/types';

export const revalidate = 10;

export default async function MoviesPage() {
  return (
    <main>
      <Head>
        <title>hello</title>
      </Head>
      <FeatureListLoader
        title="My top 10"
        resource={featureResources.movies_favorites}
        withRank
      />
      <FeatureListLoader
        title="Watched"
        resource={featureResources.movies_rated}
      />
    </main>
  );
}
