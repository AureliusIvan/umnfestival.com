import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const DataGridlazy = lazy(() =>
    import('@mui/x-data-grid/DataGrid/DataGrid').then(module => {
        return { default: module.DataGrid };
    }),
);

export function DataGrid() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DataGridlazy />
        </Suspense>
    );
}

const GridToolbarlazy = lazy(() =>
    import("@mui/x-data-grid/components").then((module) => ({
        default: module.GridToolbar,
    }))
);

export function GridToolbar() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GridToolbarlazy />
        </Suspense>
    );
}


const GridClasselazy = lazy(() =>
    import("@mui/material/styles").then((module) => ({
        default: module.gridClasses,
    }))
);

export function gridClasses() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GridClasselazy />
        </Suspense>
    );
}

const alphalazy = lazy(() =>
    import("@mui/material/styles").then((module) => ({
        default: module.alpha,
    }))
);

export function alpha() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <alphalazy />
        </Suspense>
    );
}

const styledlazy = lazy(() =>
    import("@mui/material/styles").then((module) => ({
        default: module.styled,
    }))
);


export function styled() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <styledlazy />
        </Suspense>
    );
}
