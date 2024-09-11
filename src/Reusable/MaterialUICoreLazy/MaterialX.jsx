import React, {lazy, Suspense} from "react";

const GridToolbarLazy = lazy(() =>
    import("@mui/x-data-grid/components").then((module) => ({
      default: module.GridToolbar,
    }))
);

export function GridToolbar() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <GridToolbarLazy/>
      </Suspense>
  );
}
