import React, {lazy, Suspense} from "react";

// Grid
const GridLazy = lazy(() => import("@material-ui/core/Grid"));

export function Grid(props) {
  return (
      <Suspense fallback={""}>
        <GridLazy  {...props} />
      </Suspense>
  );
}
// Table
const LazyTable = lazy(() => import("@material-ui/core/Table"));

export function Table(props) {
  return (
      <Suspense fallback={""}>
        <LazyTable {...props} />
      </Suspense>
  );
}

// TableBody
const LazyTableBody = lazy(() => import("@material-ui/core/TableBody"));

export function TableBody(props) {
  return (
      <Suspense fallback={""}>
        <LazyTableBody {...props} />
      </Suspense>
  );
}

// TableCell
const LazyTableCell = lazy(() => import("@material-ui/core/TableCell"));

export function TableCell(props) {
  return (
      <Suspense fallback={""}>
        <LazyTableCell {...props} />
      </Suspense>
  );
}

// TableContainer
const LazyTableContainer = lazy(() => import("@material-ui/core/TableContainer"));

export function TableContainer(props) {
  return (
      <Suspense fallback={""}>
        <LazyTableContainer {...props} />
      </Suspense>
  );
}

// TableHead

const LazyTableHead = lazy(() => import("@material-ui/core/TableHead"));

export function TableHead(props) {
  return (
      <Suspense fallback={""}>
        <LazyTableHead {...props} />
      </Suspense>
  );
}

// TableRow

const LazyTableRow = lazy(() => import("@material-ui/core/TableRow"));

export function TableRow(props) {
  return (
      <Suspense fallback={""}>
        <LazyTableRow {...props} />
      </Suspense>
  );
}

// Paper

const LazyPaper = lazy(() => import("@material-ui/core/Paper"));

export function Paper(props) {
  return (
      <Suspense fallback={""}>
        <LazyPaper {...props} />
      </Suspense>
  );
}

// Button

const LazyButton = lazy(() => import("@material-ui/core/Button"));

export function Button(props) {
  return (
      <Suspense fallback={""}>
        <LazyButton {...props} />
      </Suspense>
  );
}

// TextField

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