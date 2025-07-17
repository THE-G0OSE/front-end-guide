import RouterProvider from "../providers/router/ui/RouterProvider";
import { StoreProvider } from "../providers/store/ui/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
       <RouterProvider/>
    </StoreProvider>
  );
};

export default App;
