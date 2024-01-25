import Header from "Components/Header/Container/Header";
import { AppContainer } from "./App.style";
import { SWRConfig } from "swr";
import { BrowserRouter } from "react-router-dom";
import ComeonRoutes from "Components/Routings/ComeonRoutes";
import { useAuthStore } from "stores/authStore";

function App() {
  // Set global SWR configuration
  const swrConfig = {
    refreshInterval: 10 * 60 * 1000, // 10 minutes in milliseconds
    revalidateOnFocus: false,
  };
  const { user } = useAuthStore();
  return (
    <AppContainer>
      <SWRConfig value={swrConfig}>
        <BrowserRouter>
         {user && <Header />}
          <ComeonRoutes />
        </BrowserRouter>
      </SWRConfig>
    </AppContainer>
  );
}

export default App;
