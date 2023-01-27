/* eslint-disable @typescript-eslint/require-await */
import FeatureList from 'components/FeatureList';
import Head from 'next/head';
import { featureResources } from 'services/themoviedb/types';

export const revalidate = 30;

export default async function MoviesPage() {
  return (
    <main>
      <Head>
        <title>hello</title>
      </Head>
      <FeatureList
        title="My top 10"
        resource={featureResources.movies_favorites}
        withRank
      />
      <FeatureList title="Watched" resource={featureResources.movies_rated} />
    </main>
  );
}
