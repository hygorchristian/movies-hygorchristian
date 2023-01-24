import './styles.scss';

type SeparatorProps = {
  orientation?: 'vertical' | 'horizontal';
};

export default function Separator({
  orientation = 'horizontal'
}: SeparatorProps): JSX.Element {
  return <div className={['h-separator', orientation].join(' ')} />;
}
