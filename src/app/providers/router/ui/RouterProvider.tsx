import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>test routing</div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
