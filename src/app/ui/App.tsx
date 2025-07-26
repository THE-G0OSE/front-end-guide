import { ThemeProvider } from "@/features/theme";
import { RouterProvider } from "../providers/router";
import { StoreProvider } from "../providers/store";

const App = () => {

  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
