import FeatureList from 'components/FeatureList';
import { featureResources } from 'services/themoviedb/types';

export default function AppPage() {
  return (
    <main>
      <FeatureList
        title="My top 10"
        resource={featureResources.movies_favorites}
        withRank
      />
      <FeatureList title="Watched" resource={featureResources.movies_rated} />
    </main>
  );
}
