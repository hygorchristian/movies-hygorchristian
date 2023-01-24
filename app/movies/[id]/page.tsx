import { usePathname } from 'next/navigation';

export default function MovieDetailsPage() {
  const s = usePathname();

  return <h1>movies lol</h1>;
}
