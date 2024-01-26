import Header from "Components/Header/Container/Header";
import { AppContainer } from "./App.style";
import { SWRConfig } from "swr";
import { BrowserRouter, Navigate } from "react-router-dom";
import ComeonRoutes from "Components/Routings/ComeonRoutes";
import { RoutePaths } from "Constants/routes";
import { useAuthStore } from "stores/authStore";
import ErrorBoundary from "Components/ErrorBoundary/Container/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Set global SWR configuration
  const swrConfig = {
    refreshInterval: 10 * 60 * 1000, // 10 minutes in milliseconds
    revalidateOnFocus: false,
  };
  const user = useAuthStore().user;
  return (
    <AppContainer>
      <ErrorBoundary>
        <SWRConfig value={swrConfig}>
          <BrowserRouter>
            {!user && <Navigate to={RoutePaths.Login} replace={true} />}
            {user && <Header />}
            <ComeonRoutes />
            <ToastContainer />
          </BrowserRouter>
        </SWRConfig>
      </ErrorBoundary>
    </AppContainer>
  );
}

export default App;
