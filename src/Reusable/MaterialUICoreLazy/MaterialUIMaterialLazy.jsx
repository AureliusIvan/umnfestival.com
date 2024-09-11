import React, {lazy, Suspense} from "react";

const AutoCompleteLazy = lazy(() => import("@mui/material/Autocomplete"));

export function Autocomplete(props) {
  return (
      <Suspense fallback={""}>
        <AutoCompleteLazy {...props} />
      </Suspense>
  );
}

const DividerLazy = lazy(() => import("@mui/material/Divider"));

export function Divider(props) {
  return (
      <Suspense fallback={""}>
        <DividerLazy {...props} />
      </Suspense>
  );
}
