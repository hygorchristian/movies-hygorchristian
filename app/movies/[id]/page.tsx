import { usePathname } from 'next/navigation';

export default function MovieDetailsPage() {
  const s = usePathname();
  console.log(s);
  return <h1>movies lol</h1>;
}
