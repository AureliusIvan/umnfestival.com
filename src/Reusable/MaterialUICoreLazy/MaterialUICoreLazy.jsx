import React, {lazy, Suspense} from "react";

const GridLazy = lazy(() => import("@material-ui/core/Grid"));

export function Grid(props) {
  return (
      <Suspense fallback={""}>
        <GridLazy  {...props} />
      </Suspense>
  );
}

const LazyTextField = lazy(() => import("@material-ui/core/TextField"));

export function TextField(props) {
  return (
      <Suspense fallback={""}>
        <LazyTextField
            {...props} />
      </Suspense>
  );
}

const LazyBox = lazy(() => import("@material-ui/core/Box"));

export function Box(props) {
  return (
      <Suspense fallback={""}>
        <LazyBox {...props} />
      </Suspense>
  );
}

const LazyCircularProgress = lazy(() => import("@material-ui/core/CircularProgress"));

export function CircularProgress(props) {
  return (
      <Suspense fallback={""}>
        <LazyCircularProgress {...props} />
      </Suspense>
  );
}