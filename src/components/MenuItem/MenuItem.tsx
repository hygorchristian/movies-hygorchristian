import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import './styles.scss';

type MenuItemProps = {
  label: string;
  path: string;
  variant?: 'vertical' | 'horizontal';
  onNavigate?: () => void;
};

export default function MenuItem({
  label,
  path,
  onNavigate,
  variant = 'horizontal'
}: MenuItemProps): JSX.Element {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (!pathname || !path) return false;
    if (typeof pathname !== 'string' || typeof path !== 'string') return false;
    return pathname.startsWith(path);
  }, [pathname, path]);

  return (
    <Link
      className={clsx('h-menu-item', variant, {
        active: isActive
      })}
      href={path}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
