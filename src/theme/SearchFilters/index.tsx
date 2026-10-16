// API search filters next to the theme SearchBar's tabs: a bounded-context select and "Hide deprecated". On a
// reference page, results from that page's bounded context also get a small boost (`currentContext`).
import React, { useMemo, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import base from '@altium-developer/docusaurus-theme/theme/SearchBar/styles.module.css';
import styles from '../SearchResult/styles.module.css';

type Context = { id: string; title: string; slug: string };

export default function useSearchFilters({ loaded }: { loaded: { contexts: Context[] } | null }) {
  const location = useLocation();
  const [context, setContext] = useState<number | null>(null);
  const [hideDeprecated, setHideDeprecated] = useState(false);

  const currentContext = useMemo(() => {
    if (!loaded) return null;
    const slug = /\/reference\/(?:deprecated\/)?([^/]+)\//.exec(location.pathname)?.[1];
    const index = loaded.contexts.findIndex((c) => c.slug === slug);
    return index === -1 ? null : index;
  }, [loaded, location.pathname]);

  const controls = (
    <>
      <span className={base.spacer} />
      <select
        className={styles.select}
        value={context ?? ''}
        onChange={(event) => setContext(event.target.value === '' ? null : Number(event.target.value))}
        aria-label="Bounded context"
      >
        <option value="">All contexts</option>
        {loaded?.contexts.map((c, i) => <option key={c.id} value={i}>{c.title}</option>)}
      </select>
      <label className={styles.toggle}>
        <input type="checkbox" checked={hideDeprecated} onChange={(event) => setHideDeprecated(event.target.checked)} />
        Hide deprecated
      </label>
    </>
  );

  return {
    options: { context, includeDeprecated: !hideDeprecated, currentContext },
    controls,
    key: `${context}:${hideDeprecated}:${currentContext}`,
  };
}
