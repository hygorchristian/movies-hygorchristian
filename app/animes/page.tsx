export const revalidate = 10;

const getData = async (): Promise<string> => {
  await fetch('https://google.com');
  await new Promise(r => setTimeout(r, 2000));
  return 'animes page';
};

export default async function AppPage(): Promise<JSX.Element> {
  const data = await getData();

  return <h1>{data}</h1>;
}
