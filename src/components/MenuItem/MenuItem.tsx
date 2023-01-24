import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import './styles.scss';

type MenuItemProps = {
  label: string;
  path: string;
  onNavigate: () => void;
};

export default function MenuItem({
  label,
  path,
  onNavigate
}: MenuItemProps): JSX.Element {
  const pathname = usePathname();

  const classes = useMemo<string[]>(() => {
    const arr = ['h-menu-item'];

    const isActive = () => {
      if (!pathname || !path) return false;
      if (typeof pathname !== 'string' || typeof path !== 'string')
        return false;
      return pathname.startsWith(path);
    };

    if (isActive()) arr.push('active');

    return arr;
  }, [pathname, path]);

  return (
    <Link href={path} onClick={onNavigate}>
      <div className={classes.join(' ')}>{label}</div>
    </Link>
  );
}
