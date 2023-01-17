import { FC } from "react";
import Layout from "./components/Layout";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App: FC = () => (
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);

export default App;
