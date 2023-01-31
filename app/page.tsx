import FeatureListLoader from 'components/FeatureListLoader';
import Search from 'components/Search';
import { featureResources } from 'services/themoviedb';

export const revalidate = 10;

// eslint-disable-next-line @typescript-eslint/require-await
export default async function AppPage() {
  return (
    <main>
      <FeatureListLoader
        title="My top 10"
        resource={featureResources.movies_favorites}
        withRank
      />
      <FeatureListLoader
        title="Watcheds"
        resource={featureResources.movies_rated}
      />
      <Search />
    </main>
  );
}
