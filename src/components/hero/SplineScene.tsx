import React, { useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { SplineLoader } from './SplineLoader';
import { SplineFallback } from './SplineFallback';

export function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="absolute inset-0 z-0">
      {isLoading && <SplineLoader />}
      
      <Suspense fallback={<SplineLoader />}>
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/J4UoOIHLhTBmei-X/scene.splinecode"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      </Suspense>

      {hasError && <SplineFallback />}
    </div>
  );
}