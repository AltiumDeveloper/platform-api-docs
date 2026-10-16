// One API search result inside the theme's SearchBar: kind pill, `Parent.` + name, signature, experimental and
// deprecated markers, the bounded context, and for a member that shares its name with others ("id" on 400 types) a
// toggle listing the other types. `compact` is a recently opened entry: the first line only.
import React, { useEffect, useState } from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import base from '@altium-developer/docusaurus-theme/theme/SearchBar/styles.module.css';
import styles from './styles.module.css';

type SearchRecord = {
  i?: number; n: string; k: string; p?: string; c?: number; u: string; d?: string; s?: string; t?: string; f?: number; r?: string;
};
type Context = { id: string; title: string; slug: string };
type Props = {
  record: SearchRecord;
  result?: { more: number; others: SearchRecord[] };
  words: string[];
  compact?: boolean;
  loaded: { engine: any; contexts: Context[] };
  onPick?: (record: SearchRecord, newTab: boolean) => void;
  Highlight: React.ComponentType<{ text: string; words: string[] }>;
  KindPill: React.ComponentType<{ kind: string; engine: any }>;
};

const OTHERS_SHOWN = 40;

function ContextChip({ context }: { context?: Context }) {
  if (!context || context.id === 'common') return null;
  return <span className={`badge badge--secondary badge--context bc-${context.slug} ${styles.context}`}>{context.title}</span>;
}

export default function SearchResult({ record, result, words, compact, loaded, onPick, Highlight, KindPill }: Props) {
  const { withBaseUrl } = useBaseUrlUtils();
  const [expanded, setExpanded] = useState(false);
  const query = words.join(' ');
  useEffect(() => setExpanded(false), [query]);
  const { engine } = loaded;
  const flags = record.f ?? 0;
  const context = record.c !== undefined ? loaded.contexts[record.c] : undefined;
  const isGuide = record.k === 'guide';
  const more = result?.more ?? 0;
  const others = result?.others ?? [];
  return (
    <>
      <div className={base.line}>
        <KindPill kind={record.k} engine={engine} />
        <span className={isGuide ? base.guideName : styles.name}>
          {record.p && <span className={styles.parent}>{record.p}.</span>}
          {compact ? record.n : <Highlight text={record.n} words={words} />}
        </span>
        {!compact && record.s && <span className={styles.signature}>{record.s}</span>}
        <span className={base.spacer} />
        {!compact && flags & engine.FLAG_EXPERIMENTAL ? <span className={styles.exp} title="Experimental">EXP</span> : null}
        {!compact && flags & engine.FLAG_DEPRECATED ? <span className={styles.deprecated}>Deprecated</span> : null}
        <ContextChip context={context} />
      </div>
      {!compact && (record.d || isGuide) && (
        <div className={base.description}>
          {isGuide && record.t && record.t !== record.n && <span className={base.page}>{record.t} › </span>}
          {record.d && <Highlight text={record.d.length > 180 ? `${record.d.slice(0, 179)}…` : record.d} words={words} />}
        </div>
      )}
      {!compact && record.r && <div className={styles.reason}>Deprecated: {record.r}</div>}
      {!compact && more > 0 && (
        <div className={styles.othersLine}>
          <button
            type="button"
            className={styles.othersToggle}
            aria-expanded={expanded}
            onClick={(event) => {
              event.stopPropagation();
              setExpanded((value) => !value);
            }}
          >
            {expanded ? '▾' : '▸'} also on {more} other {more === 1 ? 'type' : 'types'}
          </button>
          {expanded && (
            <span className={styles.others}>
              {others.slice(0, OTHERS_SHOWN).map((other) => (
                <a
                  key={other.i}
                  href={withBaseUrl(other.u)}
                  className={styles.other}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onPick?.(other, event.metaKey || event.ctrlKey);
                  }}
                >
                  {other.p}
                </a>
              ))}
              {others.length > OTHERS_SHOWN && <span className={styles.more}>+{others.length - OTHERS_SHOWN} more in the Fields tab</span>}
            </span>
          )}
        </div>
      )}
    </>
  );
}
