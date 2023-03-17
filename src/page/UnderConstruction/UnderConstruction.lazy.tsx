import React, { lazy, Suspense } from 'react';

const LazyUnderConstruction = lazy(() => import('./UnderConstruction'));

const UnderConstruction = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUnderConstruction {...props} />
  </Suspense>
);

export default UnderConstruction;
