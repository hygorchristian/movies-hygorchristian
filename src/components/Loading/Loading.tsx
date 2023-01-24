import './styles.scss';

type LoadingProps = {
  variant: 'feature-card';
};

export default function Loading({ variant }: LoadingProps): JSX.Element {
  if (variant === 'feature-card') {
    return (
      <div className="h-loading-container">
        <div className="h-loading-placeholder" />
      </div>
    );
  }

  return <></>;
}
