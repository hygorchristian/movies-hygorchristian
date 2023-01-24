import FeatureCard from 'components/FeatureCard';
import { buildTMDBApi } from 'services/themoviedb';
import type { FeatureResource } from 'services/themoviedb/types';
import './styles.scss';

type FeatureListProps = {
  title: string;
  resource: FeatureResource;
};

export default async function FeatureList({
  title,
  resource
}: FeatureListProps): Promise<JSX.Element> {
  const items = await buildTMDBApi().getFeatureList(resource);
  //
  return (
    <div className="h-feature-list">
      <h2 className="title">{title}</h2>
      <div className="list">
        {items.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} rank={index} />
        ))}
      </div>
    </div>
  );
}
