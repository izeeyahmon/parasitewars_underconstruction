import React, { lazy, Suspense } from 'react';

const LazyMarqueeText = lazy(() => import('./MarqueeText'));

const MarqueeText = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMarqueeText {...props} />
  </Suspense>
);

export default MarqueeText;
