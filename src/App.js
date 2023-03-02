import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));

// wait for 1s then show Home component
// const Home = lazy(() => wait(1000).then(() => import("./pages/Home")));
// when using lazy loading you need to use Suspense component which gives you access to flash a message before the component is been rendered. Component which will be wrapped inside Suspense component should be exported as default component otherwise the import on the lazy load callback would be attached with a promise which give access to (module and default)  i.e const About = lazy(() => import('./components/About').then(module => { return {default: module.About}}))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
