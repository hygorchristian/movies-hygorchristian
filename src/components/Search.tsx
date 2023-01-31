'use client';

import { debounce } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { SearchResult } from 'services/themoviedb';
import FeatureList from './FeatureList';

export default function Search(): JSX.Element {
  const [results, setResults] = useState<SearchResult | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  );

  const onSearch = useCallback(async () => {
    if (searchQuery === '') return;

    const response = await fetch(
      `/api/search?q=${encodeURIComponent(searchQuery)}`
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = (await response.json()) as SearchResult;

    console.log({ json });

    setResults(json);
  }, [searchQuery]);

  useEffect(() => {
    onSearch()
      .then(() => {
        console.log('finished query');
      })
      .catch(err => {
        console.error('finished query with error', err);
      });
  }, [onSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="type something"
        onChange={debouncedChangeHandler}
      />
      <FeatureList title="Movies" features={results?.movie || []} />
      <FeatureList title="TV Shows" features={results?.tv || []} />
    </div>
  );
}
