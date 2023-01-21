'use client';

import { useEffect, useState } from 'react';
import type { WithChildren } from './types';

export default function SafeClientComponent({
  children
}: WithChildren): JSX.Element {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild || typeof window === 'undefined') {
    return <></>;
  } else {
    return children;
  }
}
