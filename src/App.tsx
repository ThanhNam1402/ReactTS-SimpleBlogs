import { useRoutes } from "react-router-dom";
import { router } from "./routers/routers";

import MainLayout from "./layoout/MainLayout";

function App() {
  let element = useRoutes(router);

  return (
    <>
      <div className="container">
        <MainLayout>{element}</MainLayout>
      </div>
    </>
  );
}

export default App;
