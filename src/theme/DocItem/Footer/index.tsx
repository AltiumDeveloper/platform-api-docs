import React, { type ReactNode } from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Heading from '@theme-original/Heading';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Comments from '@site/src/components/Comments';

type Props = WrapperProps<typeof FooterType>;

// Generated reference pages (docs/reference/**) never show comments; hand-written pages do
// unless they set `comments: false` in front matter.
export default function FooterWrapper(props: Props): ReactNode {
  const { metadata } = useDoc();
  const { comments = true } = metadata.frontMatter as { comments?: boolean };
  const showComments = comments && !metadata.id.startsWith('reference/');

  return (
    <>
      <Footer {...props} />
      {showComments && (
        <>
          <br />
          <Heading as="h2" id="comments">Comments</Heading>
          <Comments />
        </>
      )}
    </>
  );
}
