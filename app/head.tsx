import DefaultTags from 'components/DefaultTags';

export default function Head() {
  console.log(DefaultTags);
  return (
    <>
      <DefaultTags />
      <title>🎬 Movies - Hygor Christian</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  );
}
