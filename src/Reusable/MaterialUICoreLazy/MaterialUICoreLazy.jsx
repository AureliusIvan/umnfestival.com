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