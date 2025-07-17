import { HomePage } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
