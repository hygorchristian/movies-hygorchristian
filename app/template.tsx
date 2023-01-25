import Aside from 'components/Aside';
import Header from 'components/Header';

type AppTemplateProps = {
  children: React.ReactNode;
};

export default function AppTemplate({ children }: AppTemplateProps) {
  return (
    <div className="h-main-page-content">
      <Header />
      <Aside />
      {children}
    </div>
  );
}
