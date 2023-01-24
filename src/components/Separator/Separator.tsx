import './styles.scss';

type SeparatorProps = {
  orientation?: 'vertical' | 'horizontal';
  light?: boolean;
};

export default function Separator({
  orientation = 'horizontal',
  light = false
}: SeparatorProps): JSX.Element {
  return (
    <div
      className={['h-separator', orientation, light ? 'light' : ''].join(' ')}
    />
  );
}
