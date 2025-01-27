import { lazy, Suspense } from "react";
import "./App.css";

// @ts-expect-error: module cannot be found because we are loading it with module-federation
// const ViteRemote = lazy(() => import("vite/DataExchange"));
const ViteRemote = lazy(() => import("vite/Datenaustausch"));

function App() {
  return (
    <>
      <h1>Vite Host</h1>
      <hr />
      <Suspense>
        <ViteRemote />
      </Suspense>
    </>
  );
}

export default App;
