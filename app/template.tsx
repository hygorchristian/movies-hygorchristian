import Header from 'components/Header';

type AppTemplateProps = {
  children: React.ReactNode;
};

export default function AppTemplate({ children }: AppTemplateProps) {
  return (
    <div>
      <Header />
      {children}
      <h2>other useless stuff here =)</h2>
    </div>
  );
}
