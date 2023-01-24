import Header from 'components/Header';

type AppTemplateProps = {
  children: React.ReactNode;
};

export default function AppTemplate({ children }: AppTemplateProps) {
  return (
    <div>
      <Header />
      <div className="h-main-page-content">{children}</div>
    </div>
  );
}
