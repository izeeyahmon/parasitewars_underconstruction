import React, { lazy, Suspense } from 'react';

const LazySocialMedia = lazy(() => import('./SocialMedia'));

const SocialMedia = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySocialMedia {...props} />
  </Suspense>
);

export default SocialMedia;
